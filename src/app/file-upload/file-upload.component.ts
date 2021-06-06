import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UserModel{
  userName:string
  file:File | null
}

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  username: string;
  selectedFile: File | null;

  userModel:UserModel = {
    userName : "",
    file: null
  };

  _url: string = "http://localhost:9090/api/fileupload";
  constructor(
    private http: HttpClient
  ) { }
 
  ngOnInit(): void {

  }

  fileLoad(event) {
    this.selectedFile = event.target.files[0];
  }

  saveForm() {
    let formDataValue = new FormData();
    this.userModel.userName =  this.username;
    this.userModel.file = this.selectedFile;
    formDataValue.append("file", this.selectedFile);
    formDataValue.append("usermodel", JSON.stringify(this.userModel));

    this.http.post<any>(this._url, formDataValue).subscribe(
     (result:any) => {
       console.log("sucess");
     }
    );

  }
}
