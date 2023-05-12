// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-products',
//   templateUrl: './products.component.html',
//   styleUrls: ['./products.component.scss']
// })
// export class ProductsComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }


import { Component, OnInit } from '@angular/core';
import { IProducts } from '../../model/interface';
import { WebAppService } from '../../services/web-app.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products!: Array<IProducts>;
  filterArray!: Array<IProducts>;
  constructor(private _webAppService: WebAppService) {}
  isExpired: boolean = false;
  ngOnInit(): void {
    this.products = this._webAppService.ProductsServ;
    this.filterArray = this._webAppService.ProductsServ;
  }
  OnExpireDate() {
    // console.log(this.products.filter(ele=>ele.expiryDate<new Date()));
    // let m = new Date(2023, 0, 26);
    // console.log(m.getTime());
    this.isExpired = !this.isExpired;
    // this.products = this.products;
    console.log(this.products);

    if (this.isExpired) {
      // console.log(this.isExpired);
      this.products = this.products.filter((ele) => new Date(ele.expiryDate).getTime() < Date.now()
      );
      // console.log(this.products);
    } else {
      console.log(this.isExpired);
      this.products = this.filterArray;
      // console.log(this.filterArray);
    }
    // console.log(this.isExpired);
    // console.log(this.products);

    return this.products;
    // console.log(this.products);
    // console.log(typeof this.products[0].expiryDate);
    // console.log(new Date(this.products[0].expiryDate).getTime());
    // console.log(Date.now());
  }
  LowStock() {
    this.isExpired = !this.isExpired;
    if (this.isExpired) {
      this.products = this.products.filter((ele) => ele.stock < 100);
      console.log(this.products);
    } else {
      console.log(this.isExpired);
      this.products = this.filterArray;
      // console.log(this.filterArray);
    }
  }


  displayedColumns: string[] = ['id', 'medicineName', 'medicineBrand', 'expiryDate', 'unitPrice', 'stock'];
  dataSource = this.products;

          // <tr *ngFor="let item of products;index as i ">
          //   <td>{{ i+1}}</td>
          //   <td>{{ item.id }}</td>
          //   <td>{{ item.medicineName }}</td>
          //   <td>{{ item.medicineBrand }}</td>
          //   <td>{{ item.expiryDate }}</td>
          //   <td>{{ item.unitPrice }}</td>
          //   <td>{{ item.stock }}</td>
          // </tr>
}
