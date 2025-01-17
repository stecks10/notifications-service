import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MailService } from './mail/mail.service';
import { PostmarkEmailService } from './mail/postmark-mail.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: MailService,
      useClass: PostmarkEmailService,
    },
  ],
})
export class AppModule {}
