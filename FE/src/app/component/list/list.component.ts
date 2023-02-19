import {Component, OnInit} from '@angular/core';
import {MedicalRecord} from "../../model/medical-record";
import {MedicalRecordService} from "../../service/medical-record.service";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  medicalRecordList;

  temp: MedicalRecord = {};
  search: string = '';

  constructor(private medicalRecordSever: MedicalRecordService) {

  }

  ngOnInit(): void {
    this.getAll(0);
  }

  getAll(page: number) {
    this.medicalRecordSever.getAll(this.search, page).subscribe(next => {
      this.medicalRecordList = next;
    });
  }

  delete() {
    this.medicalRecordSever.delete(this.temp.id).subscribe(next => {
      this.getAll(0);
      alert('Xoá thành công !!!');
    });
  }
}
