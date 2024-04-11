import { Component, OnInit } from "@angular/core";
import { SimpleProduct } from "./interfaces/produit";
import { createProduct, createProducts } from "./donnees/produit.generator";

@Component({
  templateUrl:'app.component.html',
  styleUrls:['app.component.css'],
  selector:'app-root'
})

export class AppComponent implements OnInit{
  public produits!: SimpleProduct[];
  public produit:SimpleProduct = createProduct();

   constructor(){}
     ngOnInit() {
       this.produits=createProducts(16);
       

     }
 

}
