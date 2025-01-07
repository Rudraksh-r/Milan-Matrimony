import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { StepsSectionComponent } from './components/steps-section/steps-section.component';


@NgModule({
  declarations: [
    
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
