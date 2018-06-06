import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluencerModalComponent } from './influencer-modal.component';

describe('InfluencerModalComponent', () => {
  let component: InfluencerModalComponent;
  let fixture: ComponentFixture<InfluencerModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfluencerModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfluencerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
