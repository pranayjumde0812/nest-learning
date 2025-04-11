import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateAppDto, CreateAppDtoType } from './dto/create-app.dto';

@Controller('app')
export class AppController {
  @Get()
  getHello(): string {
    return 'Hello, World!';
  }

  @Post()
  createApp(@Body() body: CreateAppDtoType): string {
    const parsed = CreateAppDto.parse(body);
    return `Received : ${JSON.stringify(parsed)}`;
  }
}
