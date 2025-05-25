import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayQuotesComponent } from './displayqoutes.component';

describe('DisplayqoutesComponent', () => {
  let component: DisplayQuotesComponent;
  let fixture: ComponentFixture<DisplayQuotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayQuotesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
