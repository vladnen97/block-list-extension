import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common'
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger'
import { GetSessionInfoDto, SignInBodyDto, SignUpBodyDto } from './dto'
import { AuthService } from './auth.service'
import { Response } from 'express'
import { CookieService } from './cookie.service'
import { AuthGuard } from './auth.guard'
import { SessionInfo } from './session-info.decorator'

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private cookieService: CookieService
  ) {}

  @Post('sign-up')
  @ApiCreatedResponse()
  async signUp(
    @Body() body: SignUpBodyDto,
    @Res({ passthrough: true }) response: Response
  ) {
    const { accessToken } = await this.authService.signUp(
      body.email,
      body.password
    )

    this.cookieService.setToken(response, accessToken)
  }

  @Post('sign-in')
  @ApiOkResponse()
  @HttpCode(HttpStatus.OK)
  async signIn(
    @Body() body: SignInBodyDto,
    @Res({ passthrough: true }) response: Response
  ) {
    const { accessToken } = await this.authService.signIn(
      body.email,
      body.password
    )

    this.cookieService.setToken(response, accessToken)
  }

  @Post('sign-out')
  @ApiOkResponse()
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  signOut(@Res({ passthrough: true }) response: Response) {
    this.cookieService.removeToken(response)
  }

  @Get('session')
  @ApiOkResponse({
    type: GetSessionInfoDto,
  })
  @UseGuards(AuthGuard)
  getSessionInfo(@SessionInfo() session: GetSessionInfoDto) {
    return session
  }
}
