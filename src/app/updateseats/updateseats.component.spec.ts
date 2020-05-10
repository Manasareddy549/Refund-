import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateseatsComponent } from './updateseats.component';

describe('UpdateseatsComponent', () => {
  let component: UpdateseatsComponent;
  let fixture: ComponentFixture<UpdateseatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateseatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateseatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
