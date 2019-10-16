import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {


  itemName;
  itemDescription;
  itemPrice;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
  }

  addItem() {
    const data = {
      name: this.itemName,
      description: this.itemDescription,
      price: this.itemPrice
    };

    this.adminService.addItem(data).subscribe(res => {
      console.log(res.errors);
      if (res.success) {
        Swal.fire('Item Added Successfully');
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
