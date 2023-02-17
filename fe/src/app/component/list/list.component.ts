import {Component, OnInit} from '@angular/core';
import {MedicalRecord} from "../../model/medical-record";
import {Router} from "@angular/router";
import {BenhVienService} from "../../service/benh-vien.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  danhSachBenhAn: MedicalRecord[] = [];

  temp: MedicalRecord = {};

  constructor(private router: Router,
              private benhVienService: BenhVienService) {
    this.danhSach();
    this.benhVienService.danhSach().subscribe( next => {
      this.danhSachBenhAn = next;
    })
  }

  danhSach() {
    this.benhVienService.danhSach().subscribe(next => {
      console.log(next);
      this.danhSachBenhAn = next;
    }, error => {
    })
  }

  ngOnInit(): void {
  }
  delete(id: number) {
    if (id != null) {
      this.benhVienService.delete(id).subscribe(next => {
        alert("Xoá thành công");
        this.danhSach();
      })
    }
  }
}
