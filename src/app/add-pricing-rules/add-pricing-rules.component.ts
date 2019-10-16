import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import Swal from 'sweetalert2';


declare var $;

@Component({
  selector: 'app-add-pricing-rules',
  templateUrl: './add-pricing-rules.component.html',
  styleUrls: ['./add-pricing-rules.component.css']
})
export class AddPricingRulesComponent implements OnInit {

  minBuy = 0;
  offeredDeal = 0;
  discount = 0;
  itemId;
  companyId;

  itemsData;
  companyData;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.getCompanies();
    this.getItems();
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

  getItems() {
    this.adminService.getAllItems().subscribe(res => {
      if (res.success) {
        console.log('dsd');
        this.itemsData = res.data;
        console.log('items', this.itemsData);
      }
    });
  }

  selectCompany(companyId) {
    this.companyId = companyId;
    console.log(this.companyId);
  }

  selectItem(itemId) {
    this.itemId = itemId;
    console.log(this.itemId);
  }

  addPricing() {
    const data = {
      item: this.itemId,
      company: this.companyId,
      min_buy: this.minBuy,
      offered_deal: this.offeredDeal,
      discount: this.discount
    };
    this.adminService.addPricingRules(data).subscribe(res => {

      if (res.success) {
        Swal.fire('Offer Pricing set successfully');
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
