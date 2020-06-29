import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TContestComponent } from './tcontest.component';

describe('TContestComponent', () => {
  let component: TContestComponent;
  let fixture: ComponentFixture<TContestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TContestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TContestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
