import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockQuoteList } from './mock-quote';

describe('MockQuoteList', () => {
  let component: MockQuoteList;
  let fixture: ComponentFixture<MockQuoteList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MockQuoteList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MockQuoteList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
