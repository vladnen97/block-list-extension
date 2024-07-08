import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'
import { ApiOkResponse, ApiProperty } from '@nestjs/swagger'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class HelloWorldDto {
  @ApiProperty()
  message: string
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOkResponse({
    type: HelloWorldDto,
  })
  async getHello(): Promise<HelloWorldDto> {
    const users = await prisma.user.findMany({})
    console.log(users)

    return { message: this.appService.getHello() }
  }
}
