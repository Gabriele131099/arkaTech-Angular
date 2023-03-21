import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './main/home/home.component';
import { CreatePgComponent } from './main/create-pg/create-pg.component';
import { ArchivioComponent } from './main/archivio/archivio.component';
import { CardPgComponent } from './main/cards/card-pg/card-pg.component';
import { LoginComponent } from './log/login/login.component';
import { SignUpComponent } from './log/sign-up/sign-up.component';
import { CardUserComponent } from './main/cards/card-user/card-user.component';
import { HomeLogComponent } from './logUser/home-log/home-log.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CreatePgComponent,
    ArchivioComponent,
    CardPgComponent,
    LoginComponent,
    SignUpComponent,
    CardUserComponent,
    HomeLogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
