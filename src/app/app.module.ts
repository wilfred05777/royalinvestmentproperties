// Core Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { RouterModule, Routes } from '@angular/router';
// import { CommonModule } from  '@angular/common';

// Routing
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { LayoutModule } from '@angular/cdk/layout';

// Angular Flex-layout
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

// Bootstrap
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
// MDB Angular
import { MDBBootstrapModule } from 'angular-bootstrap-md';

// Angular Material Design
import {MatCardModule} from '@angular/material/card';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';

// Font Awesome
import { AngularFontAwesomeModule } from 'angular-font-awesome';

// Components of the app
import { ComponentsComponent } from './components/components.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/header/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';

// Pages components
import { HomeComponent } from './pages/home/home.component';
import { ProcessComponent } from './pages/process/process.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { FaqComponent } from './pages/faq/faq.component';
import { OfferFormPageComponent } from './pages/offer-form-page/offer-form-page.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';



@NgModule({
  declarations: [
    // CommonModule,
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    HomeComponent, 
    ProcessComponent,
    AboutUsComponent,
    FaqComponent,
    OfferFormPageComponent,
    ContactUsComponent,
    ComponentsComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    MaterialModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    // BsDropdownModule.forRoot(),
    // TooltipModule.forRoot(),
    // ModalModule.forRoot(),
    FlexLayoutModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
  ],
  // exports: [BsDropdownModule,TooltipModule,ModalModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
