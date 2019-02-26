import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ListUserComponent} from './components/list-user/list-user.component';
import {UserFormComponent} from './components/user-form/user-form.component';
import {UserServService} from "./shared_service/user-serv.service";
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserServService],
  bootstrap: [AppComponent]
})
export class AppModule { }
