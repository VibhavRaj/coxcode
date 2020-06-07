import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { NavComponent } from "./components/nav/nav.component";
import { BannerComponent } from "./components/banner/banner.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SharedService } from "./service/shared.service";
@NgModule({
  declarations: [AppComponent, NavComponent, BannerComponent, FooterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [SharedService],
  bootstrap: [AppComponent],
})
export class AppModule {}
