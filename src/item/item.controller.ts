import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { ItemService } from "./item.service";
import { CreateItemDto } from "./dto/create.item.dto";
import { UpdateItemDto } from "./dto/update.item.dto";

@Controller()
export class ItemController {
    constructor(private readonly itemService: ItemService) {}
  @Get("get_all_items")
  getAllItems() {
    return this.itemService.getallItems()
  }

  @Post("add_item")
  addItem (@Body() createItemDto: CreateItemDto) {
return this.itemService.addItem(createItemDto)
  }

  @Get("get_one_item/:id")
  getOneItem(@Param("id") id: number) {
    return this.itemService.getOneItem(id)
  }

  @Put ("update_item/:id")
  updateitem(@Param("id") id: number, @Body() updateItemDto: UpdateItemDto ) {
return this.itemService.updateItem(id, updateItemDto)
  }
}
