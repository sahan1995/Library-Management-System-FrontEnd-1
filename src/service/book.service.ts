import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private url= "http://localhost:8080/api/v1/"
  constructor(private http:HttpClient) { }

   getAllBooks(){
    return this.http.get(this.url+"/items");
  }

  saveItem(item){
    return this.http.post(this.url+"/items",item);
  }

  findById(ID){
    return this.http.get(this.url+"/items/"+ID);
  }

  updateItem(itemCode,item){
    console.log(itemCode)
    return this.http.put(this.url+"/items/"+itemCode,item);
  }

  deleteItem(itemCode){
    return this.http.delete(this.url+"/items/"+itemCode);
  }
}
