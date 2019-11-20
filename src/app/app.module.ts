import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { DataService } from './data.service';
import{HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path :'', component:StudentComponent},
      {path :'Students',component:StudentComponent}
    ]),
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
