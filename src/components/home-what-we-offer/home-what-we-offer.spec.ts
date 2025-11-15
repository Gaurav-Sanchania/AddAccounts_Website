import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWhatWeOffer } from './home-what-we-offer';

describe('HomeWhatWeOffer', () => {
  let component: HomeWhatWeOffer;
  let fixture: ComponentFixture<HomeWhatWeOffer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeWhatWeOffer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeWhatWeOffer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
