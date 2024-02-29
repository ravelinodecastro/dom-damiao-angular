import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SobreNosComponent } from './components/sobre-nos/sobre-nos.component';
import { EstudanteComponent } from './components/estudante/estudante.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SobreNosComponent,
    EstudanteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
