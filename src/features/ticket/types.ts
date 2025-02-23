import { $Enums } from '@prisma/client';
export type Ticket = {
  id?: string;
  title: string;
  content: string;
  status: $Enums.TicketStatus;
  createdAt?: Date; 
  updatedAt?: Date;
};