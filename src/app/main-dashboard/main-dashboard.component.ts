import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {


  constructor(private userService: UserService, private http: HttpClient) { }

  ngOnInit() {

  }




}
