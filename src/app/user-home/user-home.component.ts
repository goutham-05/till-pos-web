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
    this.itemList = JSON.parse(this.adminService.getCartsItems());

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


    this.itemList = JSON.parse(this.adminService.getCartsItems());

    if (this.itemList && this.itemList.length > 0) {

      if (this.cartItems[index]) {

        if (this.itemList[index].name === item.name) {
          this.cartItems[index].itemQty++;
        }
      } else {
        item.itemQty = 1;
        this.cartItems.push(item);
      }

    } else {

      item.itemQty = 1;
      this.cartItems.push(item);
    }

    this.adminService.setCartItems(this.cartItems);
    this.itemList = JSON.parse(this.adminService.getCartsItems());

    console.log('items list', this.itemList);


    if (this.biilAmount >= 0) {
      this.biilAmount += item.price;
      this.totalBillAmout += item.price;
    }




  }

  removeItem(item, index) {

    this.itemList = JSON.parse(this.adminService.getCartsItems());

    if (this.itemList && this.itemList.length > 0) {

      if (this.cartItems[index]) {

        if (this.itemList[index].name === item.name) {
          if (this.itemList[index].itemQty > 0) {
            this.cartItems[index].itemQty--;
          }
        }
      } else {
        item.itemQty = 1;
        this.cartItems.push(item);
      }

    } else {

      item.itemQty = 1;
      this.cartItems.push(item);
    }

    this.adminService.setCartItems(this.cartItems);
    this.itemList = JSON.parse(this.adminService.getCartsItems());

    console.log('items list', this.itemList);


    if (this.biilAmount >= item.price) {
      this.biilAmount -= item.price;
      this.totalBillAmout -= item.price;

    }

  }

}
