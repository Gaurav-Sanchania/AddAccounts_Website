import { Component } from '@angular/core';
import { HomeHeroSection } from '../../components/home-hero-section/home-hero-section';
import { HomeAboutUs } from '../../components/home-about-us/home-about-us';
import { HomeWhatWeOffer } from '../../components/home-what-we-offer/home-what-we-offer';
import { HomeTestimonials } from '../../components/home-testimonials/home-testimonials';

@Component({
  selector: 'app-home',
  imports: [HomeHeroSection, HomeAboutUs, HomeWhatWeOffer, HomeTestimonials],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
