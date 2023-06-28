import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Menu } from "./menu.entity";


@Injectable()
export class MenuRepository {
  constructor(@InjectRepository(Menu) private menuModel: Repository<Menu>) { }


}