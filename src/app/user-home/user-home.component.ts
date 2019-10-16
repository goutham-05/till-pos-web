import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  title = 'till-pos-web';

  itemsData;
  companiesData;
  companyId = 'sddsd';

  count = 0;


  totalBillAmout = 0;

  companyPricing;

  itemOffer;

  itemQty = 0;

  biilAmount = 0;

  itemCount = 0;

  cartItems = [];

  itemList;

  constructor(private adminService: AdminService) {
    // this.itemQty = 1;
  }

  ngOnInit() {
    this.getItems();
    this.getActiveCompanies();
  }

  getActiveCompanies() {
    this.adminService.getActiveCompanies().subscribe(res => {
      // tslint:disable-next-line: no-string-literal
      if (res['success']) {
        // tslint:disable-next-line: no-string-literal
        this.companiesData = res['data'];

      } else {
        alert('no compnay data found');
      }
    });
  }

  getItems() {
    this.adminService.getActiveItems().subscribe(res => {
      // tslint:disable-next-line: no-string-literal
      if (res['success']) {
        // tslint:disable-next-line: no-string-literal
        this.itemsData = res['data'];
      }
    });
  }


  selectCompany(companyId) {
    const data = {
      company_id: companyId
    };

    this.adminService.getCompanyPricingRule(companyId).subscribe(res => {
      this.companyPricing = '';
      // tslint:disable-next-line: no-string-literal
      if (res['success']) {
        // tslint:disable-next-line: no-string-literal
        this.companyPricing = res['data'];

      } else {
        // tslint:disable-next-line: no-string-literal
        this.companyPricing = res['data'];
      }

    });
  }

  addItem(item, index) {


    // this.itemList = JSON.parse(this.adminService.getCartsItems());

    // if (this.cartItems.length > 0) {

    //   // tslint:disable-next-line: prefer-for-of
    //   for (let i = 0; i < this.cartItems.length; i++) {

    //     if (this.cartItems[index]) {
    //       if (this.cartItems[i].name === item.name) {

    //         this.itemList[index].itemQty ++;

    //       }
    //     } else {
    //       this.cartItems.push(item);
    //     }
    //   }

    // } else {
    //   item.itemQty = this.itemQty;
    //   this.cartItems.push(item);
    // }
    // this.adminService.setCartItems(this.cartItems);
    // this.itemList = JSON.parse(this.adminService.getCartsItems());


    if (this.biilAmount >= 0) {
      this.biilAmount += item.price;
      this.totalBillAmout += item.price;
    }




  }

  removeItem(item) {
    if (this.biilAmount >= item.price) {
      this.biilAmount -= item.price;
      this.totalBillAmout -= item.price;

    }
    // if (Math.sign(this.biilAmount) === 1 && this.biilAmount > 0) {
    //   this.biilAmount -= item.price;
    // }

  }

}
