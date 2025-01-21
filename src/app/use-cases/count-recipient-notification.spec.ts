import { Content } from '@app/entities/notification-content';
import { InNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { CountRecipientNotification } from './count-recipient-notification';
import { Notification } from '@app/entities/notification';

describe('Count Recipient Notification', () => {
  it('should be able to count recipient notifications ', async () => {
    const notificationsRepository = new InNotificationsRepository();
    const countRecipientNotification = new CountRecipientNotification(
      notificationsRepository,
    );

    await notificationsRepository.create(
      new Notification({
        recipientId: 'recipient-1',
        content: new Content('Nova solicitação de amizade'),
        category: 'social',
      }),
    );
    await notificationsRepository.create(
      new Notification({
        recipientId: 'recipient-2',
        content: new Content('Nova solicitação de amizade'),
        category: 'social',
      }),
    );

    const { count } = await countRecipientNotification.execute({
      recipientId: 'recipient-1',
    });

    expect(count).toEqual(1);
  });
});
