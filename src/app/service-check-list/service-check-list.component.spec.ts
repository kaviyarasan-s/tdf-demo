import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCheckListComponent } from './service-check-list.component';

describe('ServiceCheckListComponent', () => {
  let component: ServiceCheckListComponent;
  let fixture: ComponentFixture<ServiceCheckListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceCheckListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceCheckListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
