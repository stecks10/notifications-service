import { Controller, Post, Body, Param, Patch, Get } from '@nestjs/common';
import { SendNotification } from '@app/use-cases/send-notification';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { NotificationViewModel } from '../view-models/notification-view.model';
import { CancelNotification } from '@app/use-cases/cancel-notification';
import { ReadNotification } from '@app/use-cases/read-notification';
import { UnreadNotification } from '@app/use-cases/unread-notification';
import { CountRecipientNotification } from '@app/use-cases/count-recipient-notification';
import { GetRecipientNotification } from '@app/use-cases/get-recipient-notifications';
import { ApiTags, ApiOperation, ApiBody, ApiParam } from '@nestjs/swagger';

@ApiTags('notifications') // Define a tag do Swagger
@Controller('notifications')
export class NotificationsController {
  constructor(
    private sendNotification: SendNotification,
    private cancelNotification: CancelNotification,
    private readNotification: ReadNotification,
    private unreadNotification: UnreadNotification,
    private countRecipientNotification: CountRecipientNotification,
    private getRecipientNotification: GetRecipientNotification,
  ) {}

  @Patch(':id/cancel')
  @ApiOperation({ summary: 'Cancelar uma notificação pelo ID' })
  @ApiParam({ name: 'id', description: 'ID da notificação a ser cancelada' })
  async cancel(@Param('id') id: string) {
    await this.cancelNotification.execute({ notificationId: id });
  }

  @Get('count/from/:recipientId')
  @ApiOperation({
    summary: 'Contar notificações de um destinatário específico',
  })
  @ApiParam({ name: 'recipientId', description: 'ID do destinatário' })
  async countFromRecipient(@Param('recipientId') recipientId: string) {
    const { count } = await this.countRecipientNotification.execute({
      recipientId,
    });

    return { count };
  }

  @Get('from/:recipientId')
  @ApiOperation({ summary: 'Obter notificações de um destinatário específico' })
  @ApiParam({ name: 'recipientId', description: 'ID do destinatário' })
  async getFromRecipient(@Param('recipientId') recipientId: string) {
    const { notifications } = await this.getRecipientNotification.execute({
      recipientId,
    });

    return { notifications: notifications.map(NotificationViewModel.toHttp) };
  }

  @Patch(':id/read')
  @ApiOperation({ summary: 'Marcar uma notificação como lida' })
  @ApiParam({
    name: 'id',
    description: 'ID da notificação a ser marcada como lida',
  })
  async read(@Param('id') id: string) {
    await this.readNotification.execute({ notificationId: id });
  }

  @Patch(':id/unread')
  @ApiOperation({ summary: 'Marcar uma notificação como não lida' })
  @ApiParam({
    name: 'id',
    description: 'ID da notificação a ser marcada como não lida',
  })
  async unread(@Param('id') id: string) {
    await this.unreadNotification.execute({ notificationId: id });
  }

  @Post()
  @ApiOperation({ summary: 'Criar uma nova notificação' })
  @ApiBody({
    description: 'Dados necessários para criar uma notificação',
    type: CreateNotificationBody, // Suporte ao Swagger para o DTO
  })
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;

    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category,
    });

    return {
      notification: NotificationViewModel.toHttp(notification),
    };
  }
}
