import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { BioComponent } from './about-me/bio/bio.component';
import { FeatureComponent } from './about-me/feature/feature.component';
import { ResumeComponent } from './about-me/resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    BioComponent,
    FeatureComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
