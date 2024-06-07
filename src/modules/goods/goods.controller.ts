import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { GoodsService } from './goods.service';
import { CreateGoodDto } from './dto/create-good.dto';
import { UpdateGoodDto } from './dto/update-good.dto';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';

@ApiTags('商品')
@Controller('goods')
export class GoodsController {
  constructor(private readonly goodsService: GoodsService) { }

  @Post()
  @ApiOperation({ summary: "新增", description: "新增" })
  create(@Body() createGoodDto: CreateGoodDto) {
    return this.goodsService.create(createGoodDto);
  }

  @Get()
  @ApiOperation({ summary: "查询", description: "查询" })
  findAll(@Query() params: any) {
    return this.goodsService.findAll(params);
  }

  @Get(':id')
  @ApiOperation({ summary: "详情", description: "详情" })
  @ApiQuery({ name: 'id', required: true, description: '商品id' })
  findOne(@Param('id') id: string) {
    console.log('id: ', id);
    return this.goodsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: "修改", description: "修改" })
  update(@Param('id') id: string, @Body() updateGoodDto: UpdateGoodDto) {
    return this.goodsService.update(+id, updateGoodDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: "删除", description: "删除" })
  remove(@Param('id') id: string) {
    return this.goodsService.remove(+id);
  }
}


