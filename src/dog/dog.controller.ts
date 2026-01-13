import { All, Body, Controller, Get, Headers, HostParam, HttpCode, Param, Post, Query, Req } from "@nestjs/common";

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
    }

    @Post('/test1')
    async testDog(@Param() params){
        console.log("params =", params);
    }

    @Get('/test1/:id/:type/:help')
    async getDogById(@Param() params){
        return params
    }

    //simplified
    @Get('/test101')
    getdoggies(@Query() query){
        return query
    }

    //best practice = Tell what value you want and set a default value
    @Get('/test102')
    async getDogQ(
        @Query('page') page="1",
        @Query('limit') limit="10"
    ){
        return {
            page,
            limit
        }
    }

    //simplified
    @Post('/testh101')
    async getDogHeader(@Headers() header){
        return header
    }

    @Get('/testhe')
    async getDogHost(@HostParam() hp){
        return hp
    }

    @All("/all")
    async allgett(){
        return "All is alling"
    }
}