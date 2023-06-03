import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  /**
   * Member Variables
   */

  @Output() 
  registerEventEmitter = new EventEmitter<User>();
  form = this.fb.group({
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: ''
  });



  /**
   * Constructor
   */

  constructor(private fb: FormBuilder) { }



  /**
   * Member Variables
   */

  attemptRegister() : void {

    let data = this.form.value;
    console.log(data.email);
    console.log(data.confirmEmail)
    console.log(data.password);
    console.log(data.confirmPassword);

    if (data.email != null && data.password != null && data.confirmEmail != null && data.confirmPassword != null) {
      const nonNullEmail : string = data.email as string;
      const nonNullConfirmEmail : string = data.confirmEmail as string;
      const nonNullPassword : string = data.password as string;
      const nonNullConfirmPassword : string = data.confirmPassword as string;

      if (nonNullEmail !== nonNullConfirmEmail) {
        alert("Emails do not match");
      } else if (nonNullPassword !== nonNullConfirmPassword) {
        alert("Passwords do not match");
      } else {
        const user : User = {email:nonNullEmail, password: nonNullPassword};
        this.registerEventEmitter.emit(user);   
      }
 
    }

  }

}
