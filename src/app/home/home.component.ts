import { Component } from '@angular/core';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import {  StepsSectionComponent } from './components/steps-section/steps-section.component';
import {  AboutusSectionComponent } from './components/aboutus-section/aboutus-section.component';
import {  ContactUsSectionComponent } from './components/contact-us-section/contact-us-section.component';
import {  FooterSectionComponent } from './components/footer-section/footer-section.component';

@Component({
  selector: 'app-home',
  imports: [HeroSectionComponent, StepsSectionComponent, AboutusSectionComponent, ContactUsSectionComponent, FooterSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
