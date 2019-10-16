import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import Swal from 'sweetalert2';

declare var $;
@Component({
  selector: 'app-my-companies',
  templateUrl: './my-companies.component.html',
  styleUrls: ['./my-companies.component.css']
})
export class MyCompaniesComponent implements OnInit {


  companyData;
  companyName;
  companyId;

  companyStatus = false;


  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies() {
    this.adminService.getAllCompanies().subscribe(res => {

      if (res.success) {
        this.companyData = res.data;
        console.log('dad', this.companyData);
      } else {

      }
    });
  }

  editCompany(data) {
    this.companyId = data._id;
    console.log('dad', data);
    this.companyName = data.name;

    $('#exampleModal').modal('show');
  }

  updateCompany() {

    const data = {
      name: this.companyName
    };
    this.adminService.updateCompany(this.companyId, data).subscribe(res => {
      if (res.success) {
        Swal.fire('Company updated successfully');
        this.getCompanies();
        $('#exampleModal').modal('hide');

      } else {
        const errors = res.errors;
        console.log(errors);
        errors.forEach(err => {
          Swal.fire(err);
        });
      }
    });
  }


  deleteCompany(data) {
    this.companyId = data._id;
    this.companyName = data.name;
    $('#deleteModal').modal('show');
  }


  confirmDelete() {
    this.adminService.deleteCompany(this.companyId).subscribe(res => {
      if (res.success) {
        this.getCompanies();
        $('#deleteModal').modal('hide');
      } else {
        alert(res.errors);
      }
    });
  }

  revokeCompany(data) {
    this.companyId = data._id;
    this.companyName = data.name;
    console.log('dad', data);

    $('#revokeModal').modal('show');
  }


  confirmRevoke() {
    this.adminService.revokeCompany(this.companyId).subscribe(res => {
      if (res.success) {
        this.getCompanies();
        $('#revokeModal').modal('hide');
      } else {
        alert(res.errors);
      }
    });
  }

  changeStatus(data) {
    this.companyId = data._id;
    this.companyName = data.name;
    this.companyStatus = data.active;

    $('#statusModal').modal('show');
  }

  confirmStatus() {
    console.log(this.companyStatus);
    const status = {
      active: !this.companyStatus
    };
    this.adminService.updateCompany(this.companyId, status).subscribe(res => {
      if (res.success) {
        Swal.fire('Company updated successfully');
        this.getCompanies();
        $('#statusModal').modal('hide');

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
