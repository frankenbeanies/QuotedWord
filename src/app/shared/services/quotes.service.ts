import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Quote } from '../models/quote';

@Injectable()
export class QuotesService{
    public constructor(protected http: Http){ }

    public GetRandom(count: number): Observable<Quote[]>{
        return this.http.get('api/quotes/' + count)
            .map(r => r.json() as Quote[]);
    }
}