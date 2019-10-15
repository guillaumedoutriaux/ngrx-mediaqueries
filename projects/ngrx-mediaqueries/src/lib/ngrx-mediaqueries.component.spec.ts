import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxMediaqueriesComponent } from './ngrx-mediaqueries.component';

describe('NgrxMediaqueriesComponent', () => {
  let component: NgrxMediaqueriesComponent;
  let fixture: ComponentFixture<NgrxMediaqueriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgrxMediaqueriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxMediaqueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
