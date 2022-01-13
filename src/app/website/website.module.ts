import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { WebsiteRoutingModule } from './website-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HomepageComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule
  ],
  exports:[
    HomepageComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class WebsiteModule { }
