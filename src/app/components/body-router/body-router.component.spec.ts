import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyRouterComponent } from './body-router.component';

describe('BodyRouterComponent', () => {
  let component: BodyRouterComponent;
  let fixture: ComponentFixture<BodyRouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyRouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
