import { AutoMap } from "nestjsx-automapper";

export class UserLoginDto {

    @AutoMap()
    firstName: string;
    
    @AutoMap()
    lastName: string;

}