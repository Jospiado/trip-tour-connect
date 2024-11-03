import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedAttractionsComponent } from './featured-attractions.component';

describe('FeaturedAttractionsComponent', () => {
  let component: FeaturedAttractionsComponent;
  let fixture: ComponentFixture<FeaturedAttractionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedAttractionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedAttractionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
