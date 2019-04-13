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


  private nic;
  private fullname;
  private telephone;
  private gender;
  private dob;
  private email;
  private address;
  private country;
  private memberrCategory;
  private localtbl =true;
  private foreigntbl =false;

  private localmemebrs:any;
  private foreignMemebrs:any;
  ngOnInit() {

    this.memberrCategory="Local Members";

    this.getRequests();
    this.getLocalmemebrs();
    this.getForeignMemebrs();
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

  getMemberByID(){
    this.memberS.getLocalMemberByID(this.nic).subscribe(result=>{
      if(result==null){
        this.memberS.getForeignMemberByID(this.nic).subscribe(result2=>{
          if(result2==null){
            alert("No Member Found ! ");
          }
          this.fullname=result2["fullname"];
          this.telephone=result2["telphone"];
          this.gender=result2["gender"];
          this.dob=result2["dob"];
          this.email=result2["email"];
          this.address=result2["address"];
          this.country=result2["country"];
          return;
        })

      }
      this.fullname=result["fullname"];
      this.telephone=result["telephone"];
      this.gender=result["gender"];
      this.dob=result["dob"];
      this.email=result["email"];
      this.address=result["address"];
      this.country="Sri Lanka";
    })
  }

  selectChange(){
   if(this.memberrCategory=="Local Members"){
     this.localtbl = true;
     this.foreigntbl = false;
   }else{
     this.localtbl = false;
     this.foreigntbl = true;
   }
  }

  getLocalmemebrs(){
    this.memberS.getAllLocalMemebrs().subscribe(result=>{
      this.localmemebrs = result;
    })
  }

  getForeignMemebrs(){
    this.memberS.getAllForeignMemebrs().subscribe(result=>{

        this.foreignMemebrs = result;
    })
  }
}
