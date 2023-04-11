import { Component } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  /**
   * Member Variables
   */



  /**
   * Constructor
   */

  constructor(userAuth : UserAuthService) {



  }



  /**
   * Class Methods
   */

  attemptLogin(user : User) : void {


    
  }

}
