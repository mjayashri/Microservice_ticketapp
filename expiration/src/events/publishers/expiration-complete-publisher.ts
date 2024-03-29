import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@jaytickets/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
