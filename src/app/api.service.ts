import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  deleteMahasiswa(id: any) {
    throw new Error('Method not implemented.');
  }

  constructor(
    public http: HttpClient,
  ) {

  }

  //link API
  apiURL() {
    return "http://localhost/api";
  }

  getMahasiswa() {
    return this.http.get(this.apiURL() + '/tampil.php');
  }

 

}