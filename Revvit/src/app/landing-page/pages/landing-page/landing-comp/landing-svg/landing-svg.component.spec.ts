import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingSvgComponent } from './landing-svg.component';

describe('LandingSvgComponent', () => {
  let component: LandingSvgComponent;
  let fixture: ComponentFixture<LandingSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingSvgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
