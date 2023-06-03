import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  /**
   * Member Variables
   */

  @Output() 
  loginEventEmitter = new EventEmitter<User>();
  form = this.fb.group({
    email: '',
    password: ''
  });



  /**
   * Constructor
   */

  constructor(private fb: FormBuilder) { }



  /**
   * Member Variables
   */

  attemptLogin() : void {

    let data = this.form.value;
    console.log(data.email);
    console.log(data.password);
    
    if (data.email != null && data.password != null) {
      const nonNullEmail : string = data.email as string;
      const nonNullPassword : string = data.password as string;
      const user : User = {email:nonNullEmail, password: nonNullPassword};
      this.loginEventEmitter.emit(user);    
    }

  }

}
