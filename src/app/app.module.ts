import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeleteUidComponent } from './delete-uid/delete-uid.component';
import { MyDataService } from './my-data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [	
    AppComponent,
      DeleteUidComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule  ,
    NgSelectModule,
    Ng2SearchPipeModule,
    FontAwesomeModule,
    SweetAlert2Module
  ],
  providers: [MyDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
