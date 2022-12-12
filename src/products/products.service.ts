import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { ProductModel } from "./products.model";

@Injectable()
export class ProductService {
    products : ProductModel[] = [];
    private readonly logger = new Logger(ProductService.name);

    insertProduct(title: string, description: string, price: number): string{
        this.logger.log('Product POST');
        
        const proId = Math.random().toString(); 
        const p = new ProductModel(proId, title, description, price);
        this.products.push(p);
        return proId;
    }

    getProduct(): any {
        return [...this.products];
    }

    getProductid(id: string): any{
        let product = this.products.find(p => p.id === id);
        if(!product === null){
            return new NotFoundException('cannot find product with id ' + id);
        }
        return {...product};
    }
}