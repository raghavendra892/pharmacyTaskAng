// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-users',
//   templateUrl: './users.component.html',
//   styleUrls: ['./users.component.scss']
// })
// export class UsersComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { WebAppService } from '../../services/web-app.service';
import { IUsers } from '../../model/interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
Users!:Array<IUsers>
searchString!:string
  constructor(private _webAppService:WebAppService) {
    this.Users = this._webAppService.UsersServ
    // console.log(this.Users);

  }

  ngOnInit(): void {

  }

  onreset(a:HTMLInputElement){
    console.log(a)
    a.value = '';
    this.Users = this.Users
    
  }

  
  displayedColumns: string[] = ['id', 'profilePic', 'fullName', 'dob' , 'gender', "currentCountry"];
  dataSource = this.Users;

//   <tr *ngFor="let item of Users | searchFilter : searchString; index as i">
//   <td>{{ item.id }}</td>
//   <td>
//     <img src="{{ item.profilePic }}" alt="" />
//   </td>
//   <td>{{ item.fullName }}</td>
//   <td>{{ item.dob }}</td>
//   <td>{{ item.gender }}</td>
//   <td>{{ item.currentCountry }}</td>
// </tr>

}
