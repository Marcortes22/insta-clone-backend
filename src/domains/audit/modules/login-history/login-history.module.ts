import { Module } from '@nestjs/common';
import { LoginHistoryService } from './login-history.service';
import { LoginHistoryResolver } from './login-history.resolver';

@Module({
  providers: [LoginHistoryService, LoginHistoryResolver],
})
export class LoginHistoryModule {}
