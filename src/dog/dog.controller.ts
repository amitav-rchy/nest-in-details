import { Body, Controller, Get, HttpCode, Param, Post, Req } from "@nestjs/common";

@Controller('dog')
export class DogController {
    @Get()
    @HttpCode(200)
    async getDog(){
        return {
            status: "successful"
        }
    }

    @Post()
    async createDog(
        @Body() body,
        @Req() req
    ){
        console.log("body = ",body);
        // console.log("req =", req);
    }

    @Post('/test1')
    async testDog(@Param() params){
        console.log("params =", params);
    }

    @Get('/test1/:id/:type/:help')
    async getDogById(@Param() params){
        return params
    }
}