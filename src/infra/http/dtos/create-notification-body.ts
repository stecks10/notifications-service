import { IsNotEmpty, IsUUID, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateNotificationBody {
  @ApiProperty({
    description: 'ID do destinatário da notificação',
    example: 'e7d1a6a4-3c1a-4b2e-bb9a-1c87d52d1b1d',
  })
  @IsNotEmpty({ message: 'Recipient ID is required' })
  @IsUUID('4', { message: 'Recipient must be a UUID' })
  recipientId: string;

  @ApiProperty({
    description: 'Conteúdo da notificação',
    example: 'Você recebeu uma nova mensagem!',
    minLength: 5,
    maxLength: 240,
  })
  @IsNotEmpty({ message: 'Content is required' })
  @Length(5, 240, { message: 'Content must be between 5 and 240 characters' })
  content: string;

  @ApiProperty({
    description: 'Categoria da notificação',
    example: 'social',
  })
  @IsNotEmpty({ message: 'Category is required' })
  category: string;
}
