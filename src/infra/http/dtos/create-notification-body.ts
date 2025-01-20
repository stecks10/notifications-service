import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotificationBody {
  @IsNotEmpty({ message: 'Recipient ID is required' })
  @IsUUID('4', { message: 'Recipient must be a UUID' })
  recipientId: string;

  @IsNotEmpty({ message: 'Content is required' })
  @Length(5, 240, { message: 'Content must be between 5 and 240 characters' })
  content: string;

  @IsNotEmpty({ message: 'Category is required' })
  category: string;
}
