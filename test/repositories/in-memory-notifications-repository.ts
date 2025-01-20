import type { NotificationsRepository } from 'src/app/repositories/notifications-repository';
import type { Notification } from '../../src/app/entities/notification';
export class InNotificationsRepository implements NotificationsRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
