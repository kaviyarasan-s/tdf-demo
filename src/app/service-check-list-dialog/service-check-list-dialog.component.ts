import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-service-check-list-dialog',
  templateUrl: './service-check-list-dialog.component.html',
  styleUrls: ['./service-check-list-dialog.component.css']
})
export class ServiceCheckListDialogComponent implements OnInit {

  constructor(
    private _matDialofRef: MatDialogRef<ServiceCheckListDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

  }

  ngOnInit(): void {

  }

  saveDetails() {
    this._matDialofRef.close();
  }
}
