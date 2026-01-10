import { Injectable } from "@nestjs/common";

@Injectable()
export class DogService {
    async ami() {
        return "something";
    }
}