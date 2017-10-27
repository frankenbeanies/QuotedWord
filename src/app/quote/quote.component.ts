import { Component, Input } from '@angular/core';

import { Quote } from '../shared/models/quote';

@Component({
    selector: 'quote',
    templateUrl: './quote.component.html'
})
export class QuoteComponent{
    @Input() quote: Quote;
}