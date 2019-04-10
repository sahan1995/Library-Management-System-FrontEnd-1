import { Component, OnInit } from '@angular/core';
import {Route, Router} from "@angular/router";
import {BookService} from "../../service/book.service";
import {Alert} from "selenium-webdriver";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private route:Router,private bookService:BookService) { }

  private items:any;
  private itemCode;
  private itemCategory = "Select Item Category";
  private title;
  private author;
  private publisher;
  private year;
  private bookCatagory  = "Select Category";
  private price;
  private isbn;

  ngOnInit() {
    if(localStorage.getItem("logged")!="true"){

      this.route.navigate([""])
    }

    this.getAllBooks();
  }



  public getAllBooks(){
    this.bookService.getAllBooks().subscribe(result=>{
      this.items = result;
    })
  }

  public saveItem(itemForm){

    this.bookService.saveItem(itemForm.value).subscribe(result=>{
      if(result==true){
        this.getAllBooks();
        this.clear();
        alert("Item Added");


      }
    })

  }

  public findById(){
    this.bookService.findById(this.itemCode).subscribe(result=>{
      if(result==null){
        alert("No Item Found ! ");
        return;
      }
      this.itemCode = result["itemCode"];
      this.itemCategory = result["itemCategory"];
      this.author = result["author"];
      this.publisher = result["publisher"];
      this.year = result["year"];
      this.bookCatagory = result["bookCatagory"];
      this.price = result["price"];
      this.isbn = result["isbn"];
      this.title = result["title"]


    })

  }

  public updateItem(itemForm){
    this.bookService.updateItem(this.itemCode,itemForm.value).subscribe(result=>{
      if(result==true){
        this.getAllBooks();
        this.clear();
        alert("Item Updated ! ");


      }
    })
  }

  public deleteItem(){
    if (confirm('Are you sure you want to delete this item?')) {

      this.bookService.deleteItem(this.itemCode).subscribe(result=>{
        if(result==true){
          this.getAllBooks();
          this.clear();
          alert("Item Deleted");
        }
      })
    } else {
      // Do nothing!
    }
  }


  public tableClicked(itemCode){

    this.itemCode = itemCode;
    this.findById()
  }
  public clear(){
    this.itemCode = "";
    this.itemCategory ="";
    this.author = "";
    this.publisher = "";
    this.year = "";
    this.bookCatagory = "";
    this.price = "";
    this.isbn = "";
    this.title = "";
  }
}
