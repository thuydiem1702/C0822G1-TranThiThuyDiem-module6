import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MedicalRecord} from "../model/medical-record";

@Injectable({
  providedIn: 'root'
})
export class MedicalRecordService {

  constructor(private httpClient: HttpClient) {
  }

  getAll() {
    return this.httpClient.get<MedicalRecord[]>('http://localhost:8080/list');
  }


  delete(id: number) {
    return this.httpClient.delete('http://localhost:8080/list/' + id);
  }

  create(medicalRecord: MedicalRecord) {
    return this.httpClient.post('http://localhost:8080', medicalRecord);
  }

  detail(id: number) {
    return this.httpClient.get<MedicalRecord>('http://localhost:8080/detail/' + id);
  }

  update(medicalRecord: MedicalRecord) {
    return this.httpClient.put('http://localhost:8080/update', medicalRecord);
  }
}
