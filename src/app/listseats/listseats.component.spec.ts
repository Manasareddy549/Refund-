import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListseatsComponent } from './listseats.component';

describe('ListseatsComponent', () => {
  let component: ListseatsComponent;
  let fixture: ComponentFixture<ListseatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListseatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListseatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
