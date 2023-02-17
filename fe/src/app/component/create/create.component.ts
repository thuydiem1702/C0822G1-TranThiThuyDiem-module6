import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  benhVien: FormGroup = new FormGroup({
    id: new FormControl(),
    maBenhAn: new FormControl(),
    benhNhan: new FormControl('', [Validators.pattern('[a-z A-Z]+')]),
    ngayNhapVien: new FormControl('', [Validators.required, Validators.pattern('\\d{4}-\\d{2}-\\d{2}')]),
    ngayRaVien: new FormControl('', [Validators.required, Validators.pattern('\\d{4}-\\d{2}-\\d{2}')]),
    lyDo: new FormControl('', [Validators.required]),
    phuongPhap: new FormControl('', [Validators.required]),
    bacSiDieuTri: new FormControl('', [Validators.required]),
  });
  constructor() { }

  ngOnInit(): void {
  }

}
