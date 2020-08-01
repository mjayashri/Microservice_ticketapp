import { Subjects } from './subjects';

export interface TicketCreatedEvent {
  subject: Subjects.TicketCreated;
  data: {
    id: number;
    title: string;
    price: number;
  };
}
