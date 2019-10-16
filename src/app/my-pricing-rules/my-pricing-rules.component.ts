import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import Swal from 'sweetalert2';

declare var $;
@Component({
  selector: 'app-my-pricing-rules',
  templateUrl: './my-pricing-rules.component.html',
  styleUrls: ['./my-pricing-rules.component.css']
})
export class MyPricingRulesComponent implements OnInit {

  pricingData;

  companyName;
  itemName;
  itemDescription;
  minBuy;
  offeredDeal;
  discount;

  offerId;
  offerActive;
  offerDeleted;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.getPricingDetails();
  }

  getPricingDetails() {
    this.adminService.getPricingRules().subscribe(res => {
      if (res.success) {
        this.pricingData = res.data;
        console.log('pricing data', this.pricingData);
      } else {
        console.log('no data found');
      }
    });
  }

  editCompanyOffer(data) {
    this.offerId = data._id;
    this.companyName = data.company.name;
    this.itemName = data.item.name;
    this.itemDescription = data.item.description;
    this.minBuy = data.min_buy;
    this.offeredDeal = data.offered_deal;
    this.discount = data.discount;
    this.offerActive = data.active;
    $('#exampleModal').modal('show');

  }

  updateCompany() {
    const data = {
      min_buy: this.minBuy,
      offered_deal: this.offeredDeal,
      discount: this.discount,
      active: this.offerActive,
      deleted: this.offerDeleted
    };
    this.adminService.updateCompanyOffer(this.offerId, data).subscribe(res => {
      if (res.success) {
        Swal.fire('Company updated successfully');
        this.getPricingDetails();
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

  revokeCompanyOffer(data) {
    this.offerId = data._id;
    this.companyName = data.company.name;
    console.log('dad', data);

    $('#revokeModal').modal('show');
  }

  confirmRevoke() {
    const data = {
      deleted: this.offerDeleted
    };
    this.adminService.revokeCompanyOffer(this.offerId, data).subscribe(res => {
      if (res.success) {
        this.getPricingDetails();
        $('#revokeModal').modal('hide');
      } else {
        alert(res.errors);
      }
    });
  }

  deleteCompanyOffer(data) {
    this.offerId = data._id;
    this.companyName = data.company.name;
    $('#deleteModal').modal('show');
  }

  confirmDelete() {
    this.adminService.deleteCompanyOffer(this.offerId).subscribe(res => {
      if (res.success) {
        this.getPricingDetails();
        $('#deleteModal').modal('hide');
      } else {
        alert(res.errors);
      }
    });
  }

  changeStatus(data) {

    this.offerId = data._id;
    this.companyName = data.company.name;
    this.itemName = data.item.name;
    this.itemDescription = data.item.description;
    this.minBuy = data.min_buy;
    this.offeredDeal = data.offered_deal;
    this.discount = data.discount;
    this.offerActive = data.active;
    $('#statusModal').modal('show');
  }

  confirmStatus() {
    console.log(this.offerActive);
    const status = {
      active: !this.offerActive
    };
    this.adminService.updateCompanyOffer(this.offerId, status).subscribe(res => {
      if (res.success) {
        Swal.fire('Company offer updated successfully');
        this.getPricingDetails();
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
