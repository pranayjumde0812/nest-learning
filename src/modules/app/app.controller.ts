import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateAppDto, CreateAppDtoType } from './dto/create-app.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('/App')
@Controller('app')
export class AppController {
  private readonly appService: AppService;
  @Get()
  getHello(): string {
    // return 'Hello, World!';

    const result = this.appService.getHello();
    return result;
  }

  @Post()
  @ApiBody({
    description: 'Request body for creating an app',
    schema: {
      type: 'object',
      properties: {
        name: { type: 'string', example: 'John Doe' },
        age: { type: 'number', example: 25 },
      },
    },
  })
  createApp(@Body() body: CreateAppDtoType): string {
    const parsed = CreateAppDto.parse(body);
    return `Received : ${JSON.stringify(parsed)}`;
  }
}
