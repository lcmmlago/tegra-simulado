import { HttpService } from "@nestjs/axios";
import { Controller, Get, Param } from "@nestjs/common";
import { map } from 'rxjs/operators';
import { get } from "http";
import { response } from "express";

@Controller('produtos')
export class ProdutosController {
    constructor(private httpService: HttpService) {}
    @Get()
    getAll() {
        return this.httpService
            .get(`https://tegra-food-skyot.herokuapp.com/products`, {
                headers: {
                    'Accept': 'application/json'
                }
            }).pipe(map(response => response.data));
    }

    @Get(':id')
    getOne(@Param() params) {
        return this.httpService
            .get(`https://tegra-food-skyot.herokuapp.com/products/${params.id}`, {
                headers: {
                    'Accept': 'application/json'
                }
            }).pipe(map(response => response.data));
    }

}