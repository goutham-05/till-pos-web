import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import Swal from 'sweetalert2';

declare var $;

@Component({
  selector: 'app-my-items',
  templateUrl: './my-items.component.html',
  styleUrls: ['./my-items.component.css']
})
export class MyItemsComponent implements OnInit {

  itemsData;


  itemName;
  itemDescription;
  itemPrice;
  itemId;
  itemStatus;


  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.getItems();
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


  editItem(data) {
    this.itemId = data._id;
    this.itemName = data.name;
    this.itemDescription = data.description;
    this.itemPrice = data.price;
    this.itemStatus = data.active;

    $('#exampleModal').modal('show');
  }


  updateItem() {
    const item = {
      name: this.itemName,
      description: this.itemDescription,
      price: this.itemPrice
    };
    this.adminService.updateItem(this.itemId, item).subscribe(res => {
      console.log(res);
      if (res['success']) {
        this.getItems();
        $('#exampleModal').modal('hide');
      } else {
        alert(res['errors']);
      }
    });
  }

  deleteItem(data) {
    this.itemId = data._id;
    this.itemName = data.name;
    this.itemDescription = data.description;
    this.itemPrice = data.price;
    console.log('dad', data);

    $('#deleteModal').modal('show');
  }

  confirmDelete() {

    this.adminService.deleteItem(this.itemId).subscribe(res => {
      if (res.success) {
        this.getItems();
        $('#deleteModal').modal('hide');
      } else {
        alert(res.errors);
      }
    });
  }

  revokeItem(data) {
    this.itemId = data._id;
    this.itemName = data.name;
    this.itemDescription = data.description;
    this.itemPrice = data.price;
    console.log('dad', data);

    $('#revokeModal').modal('show');
  }

  confirmRevoke() {
    this.adminService.revoketItem(this.itemId).subscribe(res => {
      if (res.success) {
        this.getItems();
        $('#revokeModal').modal('hide');
      } else {
        alert(res.errors);
      }
    });
  }

  changeStatus(data) {
    this.itemId = data._id;
    this.itemName = data.name;
    this.itemDescription = data.description;
    this.itemPrice = data.price;
    this.itemStatus = data.active;

    $('#statusModal').modal('show');
  }


  confirmStatus() {
    console.log(this.itemStatus);
    const status = {
      active: !this.itemStatus
    };
    this.adminService.updateItem(this.itemId, status).subscribe(res => {
      if (res.success) {
        Swal.fire('Company updated successfully');
        this.getItems();
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


