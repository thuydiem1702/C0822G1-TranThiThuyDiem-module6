import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MedicalRecord} from "../model/medical-record";

@Injectable({
  providedIn: "root"
})
export class BenhVienService {

  constructor(private httpClient: HttpClient) {
  }

  danhSach(): Observable<MedicalRecord[]> {
    return this.httpClient.get<MedicalRecord[]>("http://localhost:8080/list");
  }

  findById(id: number) {
    return this.httpClient.get<MedicalRecord>("http://localhost:3000/benhAn/" + id);
  }

  chinhSua(benhAn: any) {
    return this.httpClient.put<MedicalRecord>("http://localhost:3000/benhAn/" + benhAn.id, benhAn);
  }

  delete(id: number) {
    return this.httpClient.delete("http://localhost:3000/benhAn/" + id);
  }
}
