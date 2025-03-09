import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { MenuBarComponent } from './common/menu-bar/menu-bar.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ContactItemComponent } from './pages/contacts/contact-item/contact-item.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceCardComponent } from './pages/home/service-card/service-card.component';
import { ProjectCardComponent } from './pages/projects/project-card/project-card.component';
import { EnquiryFormComponent } from './enquiry-form/enquiry-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './common/login/login.component';
import { EnquiriesComponent } from './pages/enquiries/enquiries.component';
import { HighlightPipe } from './pipes/highlight.pipe';
import { FilterservicePipe } from './pipes/filterservice.pipe';
import { TeamSizeFilterPipe } from './pipes/team-size.pipe';
import { ProjectStatusPipe } from './pipes/project-status.pipe';
import { ServiceDetailsComponent } from './pages/home/service-details/service-details.component';
import { EnquiryResponseComponent } from './pages/enquiries/enquiry-response/enquiry-response.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ContactsComponent,
    MenuBarComponent,
    ContactItemComponent,
    ServiceCardComponent,
    ProjectCardComponent,
    EnquiryFormComponent,
    LoginComponent,
    EnquiriesComponent,
    HighlightPipe,
    FilterservicePipe,
    TeamSizeFilterPipe,
    ProjectStatusPipe,
    ServiceDetailsComponent,
    EnquiryResponseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, //reactive forms (formControl and formBuilder)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
