import { async, TestBed } from '@angular/core/testing';
import { Http } from '@angular/http';

import { QuotesService } from './quotes.service';

import { Observable } from 'rxjs/Rx';

let sut: QuotesService;

let httpStub = {
    get: function(){return Observable.of({})}
}

describe('QuotesService', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                QuotesService,
                { provide: Http, useValue: httpStub }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        sut = TestBed.get(QuotesService);
    });

    describe('GetRandom', () => {
        it('should call http.get', () => {
            let http: Http = TestBed.get(Http);
            let spy: jasmine.Spy = spyOn(http, 'get').and.callFake(httpStub.get);

            sut.GetRandom(10);

            expect(spy).toHaveBeenCalledTimes(1);
            expect(spy).toHaveBeenCalledWith('api/quotes/10');
        });
    });
});