import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../user.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    
  }

  getData() {
    const userData = JSON.parse(localStorage.getItem('user'));
    console.log(userData);
  }



  login() {
    const data = {
      email: 'abc@gmail.com',
      password: '123456'
    };
    // this.userService.loginUser(data).subscribe(res => {
    //   console.log(res);
    //   localStorage.setItem('user', JSON.stringify(res.data));
    //   this.getData();
    //   this.router.navigate(['main-dashboard']);

    // });
    this.router.navigate(['main-dashboard']);
  }

}
