import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/loginservice/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // object creation
  credential = {
    username: '',
    password: '',
  };

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  onSubmit() {
    if (
      this.credential.username != '' &&
      this.credential.password != '' &&
      this.credential.username != null &&
      this.credential.password != null
    ) {
      console.log('thisis form data');
      this.loginService.generateToken(this.credential).subscribe(
        // (data) => {
        //   console.log('this is data' + data);
        // }

        // if token genrated success then response
        (response: any) => {
          if (response.data.jwtToken != null) {
            console.log('this is from ts file ' + response);
            this.loginService.loginUser(response);
            window.location.href = '/dashboard';
          }
        },
        // if token genrated fail then erro
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log('error in form submit');
    }
  }
}
