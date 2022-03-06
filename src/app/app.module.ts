import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ServicesComponent } from './component/services/services.component';
import { FeaturesComponent } from './component/features/features.component';
import { TeamComponent } from './component/team/team.component';
import { PricingComponent } from './component/pricing/pricing.component';
import { TestimonialComponent } from './component/testimonial/testimonial.component';
import { CtaComponent } from './component/cta/cta.component';
import { ContactComponent } from './component/contact/contact.component';
import { FooterComponent } from './component/footer/footer.component';
import { MenuComponent } from './component/menu/menu.component';
import { EstadisticasComponent } from './component/estadisticas/estadisticas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './component/admin/admin.component';
import { InitComponent } from './component/init/init.component';
import { AmdContactComponent } from './component/amd-contact/amd-contact.component';
import { TablapartidoComponent } from './component/tablapartido/tablapartido.component';
import { AmdTablapartidoComponent } from './component/amd-tablapartido/amd-tablapartido.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServicesComponent,
    FeaturesComponent,
    TeamComponent,
    PricingComponent,
    TestimonialComponent,
    CtaComponent,
    ContactComponent,
    FooterComponent,
    MenuComponent,
    EstadisticasComponent,
    AdminComponent,
     InitComponent,
    AmdContactComponent,
    TablapartidoComponent,
    AmdTablapartidoComponent
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
