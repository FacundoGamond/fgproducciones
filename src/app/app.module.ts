import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; //Para poder hacer peticiones ajax
import { FormsModule } from '@angular/forms'; //Modulo para poder usar el ngModule

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { VisionComponent } from './components/vision/vision.component';
import { TrajectoryComponent } from './components/trajectory/trajectory.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocialmediaComponent } from './components/socialmedia/socialmedia.component';
import { MusicComponent } from './components/music/music.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    VisionComponent,
    TrajectoryComponent,
    ContactComponent,
    FooterComponent,
    SocialmediaComponent,
    MusicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],    
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
