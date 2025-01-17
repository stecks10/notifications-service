import { MailService } from './mail.service';

export class PostmarkEmailService implements MailService {
  sendMail(): string {
    return 'POSTMARK MAIL';
  }
}
