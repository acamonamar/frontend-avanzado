import { TestBed, inject } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService]
    });
  });

  it('should be created', inject([MessageService], (service: MessageService) => {
    expect(service).toBeTruthy();
  }));
  describe('add',  ()=> {
    it('should add the message to the array',()=>{

      const messageService = new MessageService();

      messageService.add('Hero message');
      expect(messageService.messages.length).toBe(1);
    })
  });
  describe('clear',  ()=> {
    it('should clear the message to the array',()=>{

      const messageService = new MessageService();

      messageService.clear();
      expect(messageService.messages.length).toBe(0);
    })
  });
});
