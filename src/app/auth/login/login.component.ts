import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as Parse from 'parse';


type UserFields = 'email' | 'password';
type FormErrors = { [u in UserFields]: string };

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;
  formErrors: FormErrors = {
    'email': '',
    'password': ''
  }
  validationMessage = {
    'email':{
      'required' : 'Email is required',
      'email' : ' Email must be valid.'
    },
    'password':{
      'required' : 'Password is required',
      'pattern' : 'Password must contain atleast one letter and one number',
      'minlength' : 'Password must be atleast 6 chars long',
      'maxlength' : 'Password cannot be more than 40 chars long'
    }
  }

  constructor(
    private fb: FormBuilder,
  ) { }
  //
  ngOnInit() {
    this.buildForm();
  }

  buildForm(){
    this.userForm = this.fb.group(
      {
        'email':['', [
          Validators.required,
          Validators.email
        ]],
        'password': ['',[
          Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
          Validators.minLength(6),
          Validators.maxLength(40),
          Validators.required
        ]]
      }
    );
    // this.userForm.valueChanges.subscribe(
    //   data => this.onValueChanged(data)
    // );
    // this.onValueChanged();
  }

  signIn(){
    Parse.User.logIn("admin", "pass", {
      success: function(user) {
        this.router.navigate(['/admin']);
      },
      error: function(user, error) {
        alert('error');
      }
    });
  }
  //
  // isFieldInvalid(field: string){
  //   return (
  //     (!this.form.get(field).valid && this.form.get(field).touched) ||
  //     (this.form.get(field).untouched && this.formSubmitAttempt)
  //   );
  // }
  //
  // onSubmit(){
  //   if(this.form.valid){
  //     this.aS.login(this.form.value);
  //   }
  //   this.formSubmitAttempt = true;
  // }


}
