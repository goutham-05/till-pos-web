import { Component, OnInit } from '@angular/core';

declare var $;

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $('.button-left').click(function(){
          $('.sidebar').toggleClass('fliph');
      });
   });
  }

}
