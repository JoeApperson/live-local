import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { BaseRequestOptions, Http, HttpModule, ResponseOptions } from '@angular/http';

import { HappeningsService } from './happenings.service';

describe('HappeningsService', () => {
  let mockBackend: MockBackend;
  let service: HappeningsService;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [
        MockBackend,
        BaseRequestOptions,
        HappeningsService,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [ MockBackend, BaseRequestOptions ]
        }
      ]
    });

    mockBackend = TestBed.get('MockBackend');
    service = TestBed.get('HappeningsService');
  });

  it('should be created', inject([HappeningsService], (svc: HappeningsService) => {
    expect(svc).toBeTruthy();
  }));

  it('getHappenings should return items', fakeAsync(() => {
    const response = {
      'happenings': [
        {
          'id': 1,
          'showDate': '2017-09-12',
          'showEndDate': null,
          'eventName': 'The Cambodian Space Project',
          'venueName': 'Kennedy Center Millennium Stage, Washington, DC',
          'ticketPrices': '12.50',
          'showTime': '6pm',
          'featuring': null
        }
      ]
    };

    // When the request subscribes for results on a connection, return a fake response
    mockBackend.connections.subscribe(connection => {
      connection.mockRespond(new Response(<ResponseOptions>{ body: JSON.stringify(response) }));
    });

    // Perform a request and make sure we get the response we expect
    service.getHappenings('LA');
    tick(2000);
  }));
});
