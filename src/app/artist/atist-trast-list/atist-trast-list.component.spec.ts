import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtistTrastListComponent } from './atist-trast-list.component';

describe('AtistTrastListComponent', () => {
  let component: AtistTrastListComponent;
  let fixture: ComponentFixture<AtistTrastListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtistTrastListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtistTrastListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
