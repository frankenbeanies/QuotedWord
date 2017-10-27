import { Component, OnInit } from '@angular/core';

import { Quote } from '../shared/models/quote';

import { QuotesService } from '../shared/services/quotes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public quotes: Quote[] = [];

  public constructor(protected QuotesService: QuotesService){ }
  
  public ngOnInit(): void{
    this.QuotesService.GetRandom(10).subscribe(r => this.quotes = r);
  }
}
