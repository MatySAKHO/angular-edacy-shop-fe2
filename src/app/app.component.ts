import { Component, OnInit } from "@angular/core";
import { SimpleProduct } from "./interfaces/produit";
import { createProducts } from "./donnees/produit.generator";

@Component({
  templateUrl:'app.component.html',
  styleUrls:['app.component.css'],
  selector:'app-root'
})

export class AppComponent implements OnInit{
  //produits: SimpleProduct[] = createProducts(10);
  produits!: SimpleProduct[];
 //implements OnInit veut dire: avant de demarer fait ceci ci dessous
     ngOnInit() {
       this.produits=createProducts();
       console.log(this.produits);
       
     }
 

}
