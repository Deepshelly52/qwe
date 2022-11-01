import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import{HttpClient, HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-updation',
  templateUrl: './updation.component.html',
  styleUrls: ['./updation.component.css']
})
export class UpdationComponent implements OnInit {

  userForm!:FormGroup


  constructor(private formbuilder:FormBuilder,private http:HttpClient) { 
    
  }

  ngOnInit(): void {
    this.userForm=this.formbuilder.group({
      username:['',Validators.required],
    
      
    });
  }


  reset(){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "" });
    let options = { headers: headers };
    console.log(this.userForm.value);
    // let headers = new Headers();
    // headers.append("Access-Control-Allow-Headers", "*");
  
    this.http.post(`https://localhost:44369/api/values/post`,this.userForm.value, options).subscribe({ 
      
      next:(res:any)=>{
          console.log(res);

      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

}
