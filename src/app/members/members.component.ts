import { Component, OnInit } from '@angular/core';
import {MemberService} from "../../service/member.service";

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor(private memberS:MemberService) { }

  private foreignRequests:any;

  private foreReq=true;
  private allLocalMemebrs = false;
  private allForeignMemebrs = false;
  ngOnInit() {

    this.getRequests();
  }



  getRequests(){
    this.memberS.getRequests().subscribe(result=>{
      this.foreignRequests = result;
    })
  }

  approveMemebr(NIC){

    this.memberS.approveMemebr(NIC).subscribe(result=>{
      if(result){
        this.getRequests();
        alert("Approved ")
      }
    })
  }

  allLocalMemebrsClick(){
    this.allLocalMemebrs = true;
    this.foreReq = false;
    this.allForeignMemebrs = false;
  }
  foreReqClick(){
    this.allLocalMemebrs = false;
    this.foreReq = true;
    this.allForeignMemebrs = false;
  }
}
