import { faker } from "@faker-js/faker";
import { SimpleProduct } from "../interfaces/produit";

//On peut creer autant de produits avec cette fonction
export function createProduct(): SimpleProduct{
    const hasPromo = faker.datatype.boolean();
    return{
        id:faker.datatype.uuid(),
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription();
        image: faker.image.imageUrl(640, 480, 'technics', true),
        price: faker.commerce.price(100, 100, 2),
        categorie: faker.commerce.department(),
        promo: hasPromo,
        promoval: hasPromo ? faker.datatype.number({min:10, max:60}) : undefined,
    };
}

export function createProducts(nombreDeProduits: number=10): SimpleProduct[]{
    return faker.helpers.multiple(createProduct, {
        count: nombreDeProduits
    })
}