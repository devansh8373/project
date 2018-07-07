import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerdComponent } from './bannerd.component';

describe('BannerdComponent', () => {
  let component: BannerdComponent;
  let fixture: ComponentFixture<BannerdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
