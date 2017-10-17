import { TestBed, inject } from '@angular/core/testing';

import { LiMaService } from './li-ma.service';
import { BaseRequestOptions, ConnectionBackend, Http, RequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { ReflectiveInjector } from '@angular/core';

describe('LiMaService', () => {

  beforeEach(() => {
    this.injector = ReflectiveInjector.resolveAndCreate([
      { provide: ConnectionBackend, useClass: MockBackend },
      { provide: RequestOptions, useClass: BaseRequestOptions },
      Http,
      LiMaService
    ]);
    this.service = this.injector.get(LiMaService);
    this.backend = this.injector.get(ConnectionBackend) as MockBackend;
    this.backend.connections.subscribe((connection: any) => this.lastConnection = connection);
  });

  it('should be created', () => {
    expect(this.service).toBeTruthy();
  });
});
