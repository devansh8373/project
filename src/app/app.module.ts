import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { BannerComponent } from './components/banner/banner.component';
import { BannerdComponent } from './components/bannerd/bannerd.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { FooterComponent } from './components/footer/footer.component';
import { SkillsComponent } from './components/skills/skills.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { QualitiesComponent } from './components/qualities/qualities.component';
import {MatCardModule, MatProgressBarModule} from '@angular/material';
import { IntroComponent } from './components/intro/intro.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    BannerComponent,
    BannerdComponent,
    ExperienceComponent,
    FooterComponent,
    SkillsComponent,
    NavigationComponent,
    PortfolioComponent,
    QualitiesComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
