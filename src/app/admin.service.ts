import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  // url = 'http://localhost:3000';
  url = 'https://goutham-till-pos-api.herokuapp.com';

  constructor(private http: HttpClient) { }


  setCartItems(data) {
    console.log(data);
    localStorage.setItem('cartItems', JSON.stringify(data));
  }

  getCartsItems() {
    const itemList = localStorage.getItem('cartItems');
    // console.log(itemList);
    return itemList;
  }

  getAllItems() {
    return this.http.get<any>(this.url + '/admin/get-all-items').pipe(map(res => res));
  }



  getCompanyPricingRule(id) {
    return this.http.get(this.url + '/admin/company-item-offer/' + id).pipe(map(res => res));
  }


  getActiveItems() {
    return this.http.get<any>(this.url + '/admin/get-active-items').pipe(map(res => res));
  }


  addItem(data) {
    return this.http.post<any>(this.url + '/admin/add-item/' , data).pipe(map(res => res));
  }

  updateItem(id, data) {
    return this.http.patch<any>(this.url + '/admin/update-item/' + id, data).pipe(map(res => res));
  }

  deleteItem(id) {
    return this.http.delete<any>(this.url + '/admin/delete-item/' + id).pipe(map(res => res));
  }

  revoketItem(id) {
    console.log('dsds', id);
    return this.http.patch<any>(this.url + '/admin/revoke-item/' + id, {data: null}).pipe(map(res => res));
  }



  getAllCompanies() {
    return this.http.get<any>(this.url + '/admin/get-all-companies').pipe(map(res => res));
  }

  getActiveCompanies() {
    return this.http.get<any>(this.url + '/admin/get-active-companies').pipe(map(res => res));
  }

  addCompany(data) {
    return this.http.post<any>(this.url + '/admin/add-company' , data).pipe(map(res => res));
  }

  updateCompany(id, data) {
    return this.http.patch<any>(this.url + '/admin/update-company/' + id, data).pipe(map(res => res));
  }

  deleteCompany(id) {
    return this.http.delete<any>(this.url + '/admin/delete-company/' + id).pipe(map(res => res));
  }

  revokeCompany(id) {
    console.log('dsds', id);
    return this.http.patch<any>(this.url + '/admin/revoke-company/' + id, {data: null}).pipe(map(res => res));
  }


  addPricingRules(data) {
    return this.http.post<any>(this.url + '/admin/add-pricing-rule' , data).pipe(map(res => res));
  }

  getPricingRules() {
    return this.http.get<any>(this.url + '/admin/all-company-offers').pipe(map(res => res));
  }

  getActivePricingRules() {
    return this.http.get<any>(this.url + '/admin/get-active-company-offers').pipe(map(res => res));
  }

  updateCompanyOffer(id, data) {
    return this.http.patch<any>(this.url + '/admin/update-company-offer/' + id, data).pipe(map(res => res));

  }

  deleteCompanyOffer(id) {
    return this.http.delete<any>(this.url + '/admin/delete-company-offer/' + id).pipe(map(res => res));
  }

  revokeCompanyOffer(id, data) {
    return this.http.patch<any>(this.url + '/admin/revoke-company-offer/' + id, data).pipe(map(res => res));
  }

}
