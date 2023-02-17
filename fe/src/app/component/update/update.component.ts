import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {BenhVienService} from "../../service/benh-vien.service";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  benhAn: any;
  banhAnForm: FormGroup;
  // public compareWith(object1: Patient, object2: Patient) {
  //   return object1 && object2 ? object1.id === object2.id : object1 === object2;
  // }
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private benhVienService: BenhVienService) {
    this.activatedRoute.paramMap.subscribe(next => {
      const id = next.get("id");
      this.benhAn = this.benhVienService.findById(parseInt(id)).subscribe(next => {
        console.log(next);
        this.banhAnForm.patchValue(next);
        this.banhAnForm = new FormGroup({
          id: new FormControl(),
          maBenhAn: new FormControl(),
          tenBenhnhan: new FormControl("", [Validators.required, Validators.pattern("^[A-Z]*[a-z]*(?:[ ][A-Z]*[a-z]*)*$")]),
          ngaynhapVien: new FormControl("", [Validators.required]),
          ngayRaVien: new FormControl("", [Validators.required]),
          lyDoNhapVien: new FormControl("", [Validators.required]),
          phuongPhapDieuTri: new FormControl("", [Validators.required]),
          bacSiDieuTri: new FormControl("", [Validators.required]),
          benhNhan: new FormControl("", [Validators.required]),
        });
      })
    })


  }

  ngOnInit(): void {
// this.benhVienService.danhSachBenhNhan().subscribe(next => {
//   this.danhSachBenhNhan = next;
// }, error => {
// })

  }

  chinhSua() {
    const benhAn = this.banhAnForm.value;

    this.benhVienService.chinhSua(this.banhAnForm.value).subscribe(next => {
      alert("Chỉnh sửa thành công");
      this.router.navigateByUrl("/list");
    }, error => {
      alert("Chỉnh sửa thất bại");
    })
  }
}
