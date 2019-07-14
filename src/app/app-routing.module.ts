import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components of the app
import { ComponentsComponent } from './components/components.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/header/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';

// Individual pages
import { HomeComponent } from './pages/home/home.component';
import { ProcessComponent } from './pages/process/process.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { FaqComponent } from './pages/faq/faq.component';
import { OfferFormPageComponent } from './pages/offer-form-page/offer-form-page.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';

const routes: Routes = [
 { path:'', component: HomeComponent },
 { path:'process', component: ProcessComponent },
 { path:'about-us', component: AboutUsComponent },
 { path:'faq', component: FaqComponent },
 { path:'offer-form', component: OfferFormPageComponent },
 { path:'contact-us', component: ContactUsComponent },
 { path:'privacy-policy', component: PrivacyPolicyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
