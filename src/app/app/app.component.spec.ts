import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Observable } from 'rxjs/Rx';

import { Quote } from '../shared/models/quote';

import { AppComponent } from './app.component';
import { QuoteComponent } from '../quote/quote.component';

import { QuotesService } from '../shared/services/quotes.service';

let fixture: ComponentFixture<AppComponent>;
let sut: AppComponent;

let QuotesServiceStub = {
  GetRandom: function(){return Observable.of([])}
}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        QuoteComponent
      ],
      providers: [
        { provide: QuotesService, useValue: QuotesServiceStub }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    sut = fixture.componentInstance;

    fixture.detectChanges();
  });

  describe('sanity check', () => {
    it('should create the component', () => {
      expect(sut).toBeTruthy();
    });
  });

  describe('ui tests', () => {
    describe('quote', () => {
      it('should exist for each quote in the list', () => {
        sut.quotes = [new Quote(), new Quote(), new Quote()];
        fixture.detectChanges();

        let eles: DebugElement[] = fixture.debugElement.queryAll(By.css('quote'));
        expect(eles.length).toBe(3);
      });
    });
  });

  describe('unit tests', () => {
    describe('ngOnInit', () => {
      it('should get the quotes', () => {
        let service: QuotesService = TestBed.get(QuotesService);
        let spy: jasmine.Spy = spyOn(service, 'GetRandom').and.callFake(QuotesServiceStub.GetRandom);
  
        sut.ngOnInit();
  
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith(10);
      });
    });
  });
});
