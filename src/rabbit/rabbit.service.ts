import { Injectable } from "@nestjs/common";
import { RabbitInterface } from "./interface/rabbit.interface";
import { RabbitDto } from "./dto/rabbit.dto";

@Injectable()
export class RabbitService {
    private readonly Rabbit: RabbitInterface[] = []
    async create(rabbit: RabbitDto){
        this.Rabbit.push(rabbit);
        console.log(this.Rabbit);
    }

    async get(){
        return this.Rabbit;
    }
    
    async update(id: number, updatedData: Partial<RabbitDto>){
        this.Rabbit[id] = { ...this.Rabbit[id], ...updatedData }
        console.log(this.Rabbit);
    }

    async delete(id){
        this.Rabbit.splice(id)
    }
}