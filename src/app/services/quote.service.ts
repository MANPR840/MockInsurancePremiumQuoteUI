import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface MockPremium {
  companyCode: string;
  premium: number;
}

export interface MockPremiumQuote {
  quoteId?: string;
  policyTerm: number;
  coverageAmount: number;
  premiums: MockPremium [];
}

export interface MockQuote {
  policyTerm: number;
  coverageAmount: number;
}

export interface MockQuoteId {
  quoteId: string;
}


@Injectable({
  providedIn: 'root'
})
export class MockQuoteService {
  getMockQuotes() {
      throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost:5136/premiumquotes'; // Example API

  constructor(private http: HttpClient) { }


  getMockQuote(id: string): Observable<MockPremiumQuote> {
    return this.http.get<MockPremiumQuote>(`${this.apiUrl}/`+id).pipe(catchError(this.handleError));
  }

  createMockQuote(MockQuote: MockQuote): Observable<MockQuote> {
    return this.http.post<MockQuote>(this.apiUrl, MockQuote).pipe(catchError(this.handleError));
  }



  private handleError(error: HttpErrorResponse) {
    console.error('API Error:', error);
    return throwError(() => new Error('Something went wrong with the API request.'));
  }
}
