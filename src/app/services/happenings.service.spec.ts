import { MockBackend } from '@angular/http/testing';
import {
  BaseRequestOptions, ConnectionBackend, Http, RequestOptions} from '@angular/http';

import { HappeningsService } from './happenings.service';
import { ReflectiveInjector } from '@angular/core';

describe('HappeningsService', () => {

  beforeEach(() => {
    this.injector = ReflectiveInjector.resolveAndCreate([
      {provide: ConnectionBackend, useClass: MockBackend},
      {provide: RequestOptions, useClass: BaseRequestOptions},
      Http,
      HappeningsService,
    ]);
    this.service = this.injector.get(HappeningsService);
    this.backend = this.injector.get(ConnectionBackend) as MockBackend;
    this.backend.connections.subscribe((connection: any) => this.lastConnection = connection);
  });

  it('getHappenings() should query service url', () => {
    this.service.getHappenings();
    expect(this.lastConnection).toBeDefined('no http service connection at all?');
    expect(this.lastConnection.request.url).toMatch(/assets\/happenings.json$/, 'url invalid');
  });

  // it('getHappenings should return items', fakeAsync(() => {
  //   const response = {
  //     'happenings': [
  //       {
  //         'id': 1,
  //         'showDate': '2017-09-12',
  //         'showEndDate': null,
  //         'eventName': 'The Cambodian Space Project',
  //         'venueName': 'Kennedy Center Millennium Stage, Washington, DC',
  //         'ticketPrices': '12.50',
  //         'showTime': '6pm',
  //         'featuring': null
  //       }
  //     ]
  //   };
  //
  //   // When the request subscribes for results on a connection, return a fake response
  //   mockBackend.connections.subscribe(connection => {
  //     connection.mockRespond(new Response(<ResponseOptions>{ body: JSON.stringify(response) }));
  //   });
  //
  //   // Perform a request and make sure we get the response we expect
  //   service.getHappenings('DC');
  //   tick(2000);
  // }));
});
