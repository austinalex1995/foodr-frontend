import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  /**
   * Member Variables
   */

  /**
   * Constructor
   */

  constructor(
    private userAuth : UserAuthService,
    private router: Router, 
    private route:ActivatedRoute) { }



  /**
   * Class Methods
   */

  attemptRegister(user : User) : void {

    this.userAuth.registerUser(user).subscribe(returnedUser => {

      if (returnedUser != null) {

        const navigationExtras: NavigationExtras = {
      
          queryParams: {
            id: returnedUser.userId!
          }
        }
        this.router.navigate(["/recipes"], navigationExtras);

      }

    });
    
  }

  transitionToLogin() {

    this.router.navigate(["/"]);

  }

}
