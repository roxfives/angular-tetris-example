import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLayoutContainer } from './main-layout.container';

describe('MainLayoutContainer', () => {
  let component: MainLayoutContainer;
  let fixture: ComponentFixture<MainLayoutContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainLayoutContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLayoutContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
