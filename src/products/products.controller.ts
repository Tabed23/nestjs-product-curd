import { Body, Controller, Post, Logger, Get, Param } from "@nestjs/common";
import { ProductService } from "./products.service";

@Controller("products")
export class ProductController {

    constructor(private readonly ProductService: ProductService){}
    private readonly logger = new Logger(ProductController.name);

    
    @Post()
    addProduct(
        @Body('title')proTitle: string,
        @Body('description')proDescription: string,
        @Body('price')proPrice: number,
    ): any{
        this.logger.log('Product Controller, POST');

        return {id :this.ProductService.insertProduct(proTitle,proDescription,proPrice)};
    }

    @Get()
    getProduct():any {
        this.logger.log('Product Controller, GET');

        return {products: this.ProductService.getProduct()};
    }

    @Get(':id')
    getProductById(@Param('id')id:string) {
        return this.ProductService.getProductid(id);
    }
}