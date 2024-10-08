import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParticlesComponent } from './Components/particles/particles.component';
import { ProyectsComponent } from './Components/proyects/proyects.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { SplineViewerComponent } from './Components/spline-viewer/spline-viewer.component';
import { ContactComponent } from './Components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ParticlesComponent,
    ProyectsComponent,
    SkillsComponent,
    SplineViewerComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
