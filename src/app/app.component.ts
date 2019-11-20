import { Component , OnInit} from '@angular/core';
import { DataService } from './data.service';
import {HttpClient} from '@angular/common/http';
import { fromEvent } from 'rxjs';

import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { FormControl,FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Count } from '../app/Count';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})

// const url = 'https://api.github.com/users?q=',
// const search = document.getElementById('search'),
// const stream$ = fromEvent( search, 'input')

// stream$.subscribe(value => {
//   console.log(value)
// })
    // const url = 'https://api.github.com/users?q='
    // const search = document.getElementById('search')
    // const stream$ = fromEvent( this.search, 'input')
   
    
  export class AppComponent implements OnInit{
  
  // profileForm = new FormGroup(
  //  searchControl: new FormControl(''))

  // public datas: Data [] = [
  //   {id: 1,user_name: '',repos: '', followers: '',following: '',imige: '', isCompleted: false },
  //   {id: 2,user_name: '',repos: '', followers: '',following: '',imige: '', isCompleted: true}

  // ]
   
  //
  public form: FormGroup;
  profileForm: any;
  IsCheckedUser: boolean = false;
  IsCheckedReposotory: boolean = false;
  IsCheckedFollowers: boolean = false;
  IsCheckedimage: boolean = false;
  index: number;
  // searchControl: FormControl;
  // userName: string = '';
  // repos: string = '';
  // image: string = '';
  // followers: string = '';
  // following: string = '';
  response: any;
  
  users: Count [];
  ValidatorService: any;
 
   
  ngOnInit(){
    //creating forms, class, object
  //  this.form = new FormGroup ({
  //    Username: new FormControl ('',Validators.required),
  //    User: new FormControl('',Validators.requiredTrue),
  //    Reposotory: new FormControl ('',Validators.requiredTrue),
  //    Followers: new FormControl ('',Validators.requiredTrue),
  //    image: new FormControl('https://github.com/images/',Validators.requiredTrue)
  //   });

    // this.searchControl = new FormControl('');
    // this.isImageShown = new FormControl('');
    // this.userName = new FormControl (false);

  }
  constructor(
    private http: HttpClient,
    private fb: FormBuilder) 
     {
  //     // this.form = this.formBuilder.group ({
  //     //   users: newFormArray([])
  //     // });
  
    this.form = this.fb.group ({
   selectedAll: null,
   items: this.fb.array([]),
   searchDetails: this.fb.group({
     Username: [null,Validators.required]
   })
  },
  {
    validator: this.ValidatorService.formValidator()
  });

      }
      selectAll() {
        this.form.controls.map(value => value.get('isChecked').setValue(true));
      }
  search(){
  //   Can I put here Api as string
   const checkbox = ['Username','user','Reposotory'];


    // console.log('Form: ', this.form);
    // const formData = {...this.form.value};
    // console.log('Form Data:',formData);
  
    // const isChecked = this.Username.value;
    //  const isImageShown = this.isImagecheck.value;
    
     this.http.get('https://api.github.com/users/' + this.Username.setValue)

    //  this.http.get<Count[]>('https://api.github.com/users/' +  this.form.controls)
    //  this.IsCompletedUser = true;
    //  if(this.IsCompletedUser == true){
    //    return 'https://api.github.com/users/';
    //  }else {
    //    return null;
    //  }
   
    //  .subscribe((response)=>{
    //  console.log(this.response);
    // //  this.form = {this.form(Username)
     
    // //   }
    //  });
    .subscribe((users)=>{
      console.log(this.users);
      //  this.response = {
      //   Username: isChecked && response.Username,
      //   image: isChecked && response.avatar_url
      //  };
      this.users = users
       }
    )
    }
  }
  
    
