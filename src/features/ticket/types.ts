export type TicketStatus = 'OPEN' | 'IN_PROCESS' | 'DONE';
export type Ticket = {
  id: string;
    title: string;
    content: string;
    status: TicketStatus;
};