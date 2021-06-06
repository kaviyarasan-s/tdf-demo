import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCheckListDialogComponent } from './service-check-list-dialog.component';

describe('ServiceCheckListDialogComponent', () => {
  let component: ServiceCheckListDialogComponent;
  let fixture: ComponentFixture<ServiceCheckListDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceCheckListDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceCheckListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
