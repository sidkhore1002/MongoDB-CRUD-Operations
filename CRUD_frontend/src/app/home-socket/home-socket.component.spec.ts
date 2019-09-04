import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSocketComponent } from './home-socket.component';

describe('HomeSocketComponent', () => {
  let component: HomeSocketComponent;
  let fixture: ComponentFixture<HomeSocketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSocketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
