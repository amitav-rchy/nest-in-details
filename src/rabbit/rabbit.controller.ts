import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { RabbitService } from "./rabbit.service";
import { RabbitDto } from "./dto/rabbit.dto";

@Controller('rabbit')
export class RabbitController {
    constructor (private rabbitService: RabbitService){}

    @Post()
    async create(@Body() rabbit: RabbitDto){
        return this.rabbitService.create(rabbit)
    }

    @Get()
    async findAll(){
        return this.rabbitService.get()
    }

    @Patch(":id")
    async update(
        @Body() update, 
        @Param('id') id
    ){
        return this.rabbitService.update(id, update)
    }
    
    @Delete("/:id")
    async delete(
        @Param('id') id
    ){
        return this.rabbitService.delete(id)
    }
}