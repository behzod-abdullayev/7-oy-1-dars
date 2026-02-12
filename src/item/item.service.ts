import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateItemDto } from "./dto/create.item.dto";
import { UpdateItemDto } from "./dto/update.item.dto";
@Injectable()
export class ItemService {
  private items: any[] = [
    { title: "nest.js", number: 3434 },
    { title: "express.js", number: 24233 },
    { title: "node.js", number: 4324 },
  ];

  async getallItems(): Promise<CreateItemDto[]> {
    return this.items;
  }

  async addItem(createItemDto: CreateItemDto): Promise<CreateItemDto> {
    this.items.push(createItemDto);
    return createItemDto;
  }

  async getOneItem(id: number): Promise<CreateItemDto> {
    const foundItem = this.items.find((item) => item.id === +id);

    if (!foundItem) throw new NotFoundException("item not found");
    return foundItem;
  }

  async updateItem(id: number, updateItemDto: UpdateItemDto): Promise<UpdateItemDto> {
    const foundItem = this.items.findIndex((item) => item.id === +id);
    if (foundItem === -1) throw new NotFoundException("item not found");

    this.items[foundItem] = updateItemDto;
    return this.items[foundItem];
  }

   async deleteItem(id: number): Promise<{message: string}> {
    const foundItem = this.items.findIndex((item) => item.id === +id);
    if (foundItem === -1) throw new NotFoundException("item not found");
    this.items.splice(foundItem, 1)
    return {message: "item deleted"}
  }
}

