import { Content } from '@app/entities/notification-content';
import { InNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { CancelNotification } from './cancel-notification';
import { Notification } from '@app/entities/notification';
import { NotificationNotFound } from './erros/notification-not-found';

describe('Cancel Notification', () => {
  it('should be able to Cancel a notification', async () => {
    const notificationsRepository = new InNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationsRepository);

    const notification = new Notification({
      content: new Content('Nova solicitação de amizade'),
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    await notificationsRepository.create(notification);
    await cancelNotification.execute({ notificationId: notification.id });

    expect(notificationsRepository.notifications[0].cancelAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to Cancel a non existing notification', async () => {
    const notificationsRepository = new InNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationsRepository);

    expect(() => {
      return cancelNotification.execute({
        notificationId: 'non-existing-notification-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
