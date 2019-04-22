import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

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
  const header = new HttpHeaders({ 'Content-Type': 'application/xml' });

    return this.http.post(this.url+"/items",item,{
      headers:header
    });
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

  ByItemCategory(itemCategory){

    return this.http.get(this.url+"items/byItemCategory/"+itemCategory)
  }

  byCategory(category){
    return this.http.get(this.url+"items/byCategory/"+category)
  }

  byCategoryandItemCategory(category,itemCategory){
    return this.http.get(this.url+"items/byCategory&itemCategory/"+category+"/"+itemCategory)
  }

  changeCategory(itemCode,category){
    return this.http.put(this.url+"items/changeCategory/"+itemCode+"/"+category,null);
  }
}
