import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { QuoteComponent } from './quote.component';

let fixture: ComponentFixture<QuoteComponent>;
let sut: QuoteComponent;

describe('QuoteComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                QuoteComponent
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(QuoteComponent);
        sut = fixture.componentInstance;

        fixture.detectChanges();
    });

    describe('sanity check', () => {
        it('should create the component', () => {
            expect(sut).toBeTruthy();
        });
    });

    describe('ui tests', () => {
        it('should contain quote', () => {
            sut.quote = {quote: "Test Quote", author: "Author"};
            fixture.detectChanges();

            let ele: HTMLElement = fixture.debugElement.query(By.css('p[name="quote"]')).nativeElement;

            expect(ele.innerText).toEqual('"Test Quote"');
        });

        it('should contain author', () => {
            sut.quote = {quote: "Test Quote", author: "Author"};
            fixture.detectChanges();

            let ele: HTMLElement = fixture.debugElement.query(By.css('small[name="author"]')).nativeElement;

            expect(ele.innerText).toEqual('- Author');
        });
    });
});