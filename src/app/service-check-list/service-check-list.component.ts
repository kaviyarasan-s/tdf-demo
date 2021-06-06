import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServiceCheckListDialogComponent } from '../service-check-list-dialog/service-check-list-dialog.component';

@Component({
  selector: 'app-service-check-list',
  templateUrl: './service-check-list.component.html',
  styleUrls: ['./service-check-list.component.css']
})
export class ServiceCheckListComponent implements OnInit {
  userInputData = {
    "serviceName": "Oil Service",
    "serviceDetails": [
      {
        "id": this.getRandomString(),
        "description": "Enter Description",
        "check":false
      }

    ]
  };

  checkbox:false;

  constructor(
    private _matDialog: MatDialog

  ) {

  }

  ngOnInit(): void {

  }

  addrow() {
    this.userInputData.serviceDetails.push(
      {
        "id": this.getRandomString(),
        "description": "Enter Description",
        "check":false
      }
    );
  }

  deleteRow() {
    this.userInputData.serviceDetails.pop();
  }

  getRandomString() {
    return (Math.random().toString(36).substring(7));
  }

  saveServiceCheckList() {

  }

  openDialog() {
    let matDialogRef = this._matDialog.open(ServiceCheckListDialogComponent, {
      width: '250px',
      data: this.userInputData
    });
    matDialogRef.afterClosed().subscribe(res => {
      alert('Closed');
      console.log("parent : "+ this.userInputData.serviceDetails)
    });
  }
}
