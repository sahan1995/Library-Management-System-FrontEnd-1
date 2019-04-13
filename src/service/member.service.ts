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
    return this.http.get(this.url+"localmemebrs/"+NIC);
  }

  getForeignMemberByID(NIC){
    return this.http.get(this.url+"foreignmembers/"+NIC);
  }


  getAllLocalMemebrs(){
    return this.http.get((this.url+"localmemebrs"))
  }

  getAllForeignMemebrs(){
    return this.http.get((this.url+"foreignmembers"))
  }
}
