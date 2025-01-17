import type { Content } from './notification-content';

export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private props: NotificationProps;

  constructor(props: NotificationProps) {
    this.props = props;
  }

  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }

  public set content(content: Content) {
    this.props.content = content;
  }

  public set category(category: string) {
    this.props.category = category;
  }

  public set readAt(readAt: Date | null) {
    this.props.readAt = readAt;
  }

  public get createdAt() {
    return this.props.createdAt;
  }
}
