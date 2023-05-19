import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

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

  attemptLogin(user : User) : void {

    this.userAuth.attemptLogin(user).subscribe(returnedUser => {

      if (returnedUser != null) {

        const navigationExtras: NavigationExtras = {
      
          queryParams: {
            id: returnedUser.userId!
          }
        }
        this.router.navigate(["/my_recipes"], navigationExtras);

      }

    });
    
  }

  transitionToRegister() {

    this.router.navigate(["/signup"]);

  }

}
