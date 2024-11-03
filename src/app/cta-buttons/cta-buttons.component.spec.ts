import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaButtonsComponent } from './cta-buttons.component';

describe('CtaButtonsComponent', () => {
  let component: CtaButtonsComponent;
  let fixture: ComponentFixture<CtaButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtaButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtaButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
