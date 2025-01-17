import { MailService } from './mail.service';

export class SmtpMailService implements MailService {
  sendMail(): string {
    return 'SMTP MAIL';
  }
}
