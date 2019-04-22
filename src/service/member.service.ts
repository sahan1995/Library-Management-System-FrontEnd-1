import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private url= "http://localhost:8080/api/v1/";
  constructor(private http:HttpClient) { }


  getRequests(){
    return this.http.get(this.url+"foreignmembers/requests")
  }

  approveMemebr(NIC){
    return this.http.put(this.url+"foreignmembers/approveMember/"+NIC,null);
  }

  getLocalMemberByID(NIC){
    const httpOptions = {
      'responseType'  : 'xml' as 'json'

    };
    return this.http.get(this.url+"localmemebrs/"+NIC,httpOptions);
  }

  getForeignMemberByID(NIC){
    const httpOptions = {
      'responseType'  : 'xml' as 'json'

    };
    return this.http.get(this.url+"foreignmembers/"+NIC,httpOptions);
  }


  getAllLocalMemebrs(){
    return this.http.get((this.url+"localmemebrs"))
  }

  getAllForeignMemebrs(){
    return this.http.get((this.url+"foreignmembers"))
  }
}
