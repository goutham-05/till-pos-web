import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  companyName;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
  }

  addCompany() {
    const data = {
      name: this.companyName
    };
    this.adminService.addCompany(data).subscribe(res => {
      if (res.success) {
        Swal.fire('Compnay Added Successfully');
      } else {
        const errors = res.errors;
        console.log(errors);
        errors.forEach(err => {
          Swal.fire(err);
        });
      }
    });
  }

}
