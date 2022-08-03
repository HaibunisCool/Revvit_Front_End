import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingSectionTwoComponent } from './landing-section-two.component';

describe('LandingSectionTwoComponent', () => {
  let component: LandingSectionTwoComponent;
  let fixture: ComponentFixture<LandingSectionTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingSectionTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingSectionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
