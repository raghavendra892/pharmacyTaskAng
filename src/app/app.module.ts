import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersComponent } from './shared/component/orders/orders.component';
import { UsersComponent } from './shared/component/users/users.component';
import { SearchFilterPipe } from './shared/pipe/search-filter.pipe';
import { ProductsComponent } from './shared/component/products/products.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './shared/component/login/login.component';
import { AuthGaurd } from './shared/services/auth.guard';
import {MatCardModule} from '@angular/material/card';
import { DropdownDirective } from './shared/directive/dropdown.directive';


const routes: Routes = [
  // {path:'',component:LoginComponent},
  {path :'', component : LoginComponent},
  {path:'Products',component:ProductsComponent, canActivate: [AuthGaurd],},
  {path:'Orders',component:OrdersComponent, canActivate: [AuthGaurd],},
  {path:'Users',component:UsersComponent, canActivate: [AuthGaurd],}
  
]

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    UsersComponent,
    SearchFilterPipe,
    ProductsComponent,
    LoginComponent,
    DropdownDirective,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes), //3
    FormsModule, 
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    MatSnackBarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
