import { Module } from '@nestjs/common'
import { UsersService } from './users.service'
import { DbModule } from '../db/db.module'
import { AccountService } from '../account/account.service'

@Module({
  imports: [DbModule, AccountService],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
