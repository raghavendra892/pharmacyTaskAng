// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class WebAppService {

//   constructor() { }
// }


import { Injectable } from '@angular/core';

import { IOrders, IProducts, IUsers } from '../model/interface';
import { ordersConst, productsConst, usersConst } from '../const/Array';

@Injectable({
  providedIn: 'root'
})
export class WebAppService {
OrdersServ : Array<IOrders> = ordersConst;
ProductsServ : Array<IProducts> = productsConst;
UsersServ : Array<IUsers> = usersConst;
  constructor() { }
}
