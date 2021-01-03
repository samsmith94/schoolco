import { AutoMapper, InjectMapper, Profile, ProfileBase } from "nestjsx-automapper";
import { UserLoginDto } from "../dto/login.dto";
import { User } from "../users.entity";

@Profile()
export class UserProfile extends ProfileBase{
    constructor(@InjectMapper() mapper: AutoMapper) {
        super();

        mapper.createMap(UserLoginDto, User);
    }

}