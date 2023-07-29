import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { ThingsService } from './things.service'

@Controller('things')
export class ThingsController {
  constructor(private readonly thingsService: ThingsService) {}

  @Post()
  create() {
    return this.thingsService.create()
  }

  @Get()
  findAll() {
    return this.thingsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.thingsService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.thingsService.update(+id)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.thingsService.remove(+id)
  }
}
