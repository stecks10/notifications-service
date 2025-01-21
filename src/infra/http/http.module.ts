import { Module } from '@nestjs/common';
import { NotificationsController } from './controllers/notifications.controller';
import { SendNotification } from 'src/app/use-cases/send-notification';
import { DatabaseModule } from '../database/database.module';
import { CancelNotification } from '@app/use-cases/cancel-notification';
import { ReadNotification } from '@app/use-cases/read-notification';
import { CountRecipientNotification } from '@app/use-cases/count-recipient-notification';
import { GetRecipientNotification } from '@app/use-cases/get-recipient-notifications';
import { UnreadNotification } from '@app/use-cases/unread-notification';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    ReadNotification,
    CountRecipientNotification,
    GetRecipientNotification,
    UnreadNotification,
  ],
})
export class HttpModule {}
