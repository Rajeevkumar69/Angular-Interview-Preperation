import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
     selector: 'app-user-form',
     templateUrl: './user-form.component.html',
     styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
     public userForm: FormGroup = new FormGroup({});

     constructor(
          private _formBuilder: FormBuilder
     ) {

     }


     ngOnInit(): void {
          this.createUserForm();
     }

     public createUserForm() {
          this.userForm = this._formBuilder.group({
               firstName: new FormControl('', [Validators.required]),
               lastName: new FormControl('', [Validators.required]),
               address: new FormControl('', [Validators.required]),
               phoneNumber: new FormControl('', [Validators.required]),
               DOB: new FormControl('', [Validators.required]),
          })
     }


     public submitForm() {
          if (this.userForm.valid) {
               console.log(this.userForm.value);
          } else {
               console.log(`Error`);
          }
     }

}
