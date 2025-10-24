import { Component, Input, OnInit } from '@angular/core';
import { MockQuoteService, MockPremiumQuote, MockQuote, MockQuoteId } from '../services/quote.service';
import { Observable } from 'rxjs/internal/Observable';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

type NewType = MockQuoteId;

@Component({
  selector: 'app-mock-quote',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './mock-quote.component.html',
  styleUrls: ['./mock-quote.component.css']
})
export class MockPremiumQuoteComponent  {
 
  result: string = '';
  policyTerm: number = 0;
  coverageAmount: number = 0;

  MockQuote: MockPremiumQuote = {
    quoteId: '', policyTerm: 0, coverageAmount: 0, premiums: []
  };

  newMockQuote: MockQuote = {
    policyTerm: 0, coverageAmount: 0
  };


  dataLoaded: boolean = false;

  constructor(private MockQuoteService: MockQuoteService) { }



  getMockQuote(id: string): void {
    this.MockQuoteService.getMockQuote(id).subscribe(data => {
      this.MockQuote = data;
      this.dataLoaded = true;
    });
  }

  addMockQuote(policyTerm: number, coverageAmount: number): void {

    this.newMockQuote.policyTerm = this.policyTerm;
    this.newMockQuote.coverageAmount = this.coverageAmount;

    this.MockQuoteService.createMockQuote(this.newMockQuote).subscribe(data => {
      console.log('data', JSON.stringify(data));

      this.result = JSON.stringify(data) + " created successfully.";
    });


  }


  convertToNumber(value: string): number {
    return Number(value);
  }

  


}
