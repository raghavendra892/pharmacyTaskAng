// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-orders',
//   templateUrl: './orders.component.html',
//   styleUrls: ['./orders.component.scss']
// })
// export class OrdersComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { WebAppService } from '../../services/web-app.service';
import { IOrders } from '../../model/interface';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  // orders!: Array<IOrders>;
  // isbooleanN: boolean = false;
  // isbooleanP: boolean = false;
  // isbooleanI: boolean = false;
  // isbooleanD: boolean = false;
  // newarra!: Array<IOrders>;
  // constructor(private _webAppService: WebAppService) {}

  // ngOnInit(): void {
  //   this.orders = this._webAppService.OrdersServ;
  //   this.newarra = this._webAppService.OrdersServ
  //   console.log(this.orders);
  //   console.log(this.newarra)
  // }
  // OnlyStatus(a: string) {
  //   this.newarra = this.orders;
  //   if (this.isbooleanN || !this.isbooleanN) {
  //     if (this.isbooleanN) {
  //       this.isbooleanN = !this.isbooleanN;
  //       this.newarra = this.orders.filter((ele) => ele.orderStatus === a);
  //     } else {
  //       this.isbooleanN = !this.isbooleanN;
  //       this.newarra = [];
  //     }
  //   }
  //   if (this.isbooleanP || !this.isbooleanP) {
  //     if (this.isbooleanP) {
  //       this.isbooleanP = !this.isbooleanP;
  //       this.newarra = this.orders.filter((ele) => ele.orderStatus === a);
  //     } else {
  //       this.isbooleanP = !this.isbooleanP;
  //       this.newarra = [];
  //     }
  //   }
  //   if (this.isbooleanI || !this.isbooleanI) {
  //     if (this.isbooleanI) {
  //       this.isbooleanI = !this.isbooleanI;
  //       this.newarra = this.orders.filter((ele) => ele.orderStatus === a);
  //     } else {
  //       this.isbooleanI = !this.isbooleanI;
  //       this.newarra = [];
  //     }
  //   }
  //   if (this.isbooleanD || !this.isbooleanD) {
  //     if (this.isbooleanD) {
  //       this.isbooleanD = !this.isbooleanD;
  //       this.newarra = this.orders.filter((ele) => ele.orderStatus === a);
  //     } else {
  //       this.isbooleanD = !this.isbooleanD;
  //       this.newarra = [];
  //     }
  //   }
  // }
  orders!: Array<IOrders>;

  isbooleanN: boolean = false;

  newarra!: Array<IOrders>;
  constructor(private _webAppService: WebAppService) {}

  ngOnInit(): void {
    this.orders = this._webAppService.OrdersServ;
  }
  AllArray(){
    this.newarra =  this.orders
  }

  OnlyStatus(a: string,) {
    this.isbooleanN = !this.isbooleanN;
    if (this.isbooleanN) {
      this.newarra = this.orders.filter((ele) => ele.orderStatus === a);
    } else {
      this.newarra = this.orders.filter((ele) => ele.orderStatus !== a);

    }
    console.log(this.newarra)
  }


  displayedColumns: string[] = ['id', 'customerName', 'orderDate', 'amount', 'orderStatus'];
  dataSource = this.orders;


  // <tr *ngFor="let item of newarra  || orders">
  //           <td>{{ item.id }}</td>
  //           <td>{{ item.customerName }}</td>
  //           <td>{{ item.orderDate }}</td>
  //           <td>{{ item.amount }}</td>
  //           <td>{{ item.orderStatus }}</td>
  //         </tr>
}
