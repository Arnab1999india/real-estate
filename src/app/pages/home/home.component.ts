import { Component, OnInit } from '@angular/core';
import { PROPERTIES, Property } from '../../mock-data/properties';
import { PropertyCardsComponent } from '../../components/property-cards/property-cards.component';
import { CommonModule } from '@angular/common';
import { UNLOCK_CARDS, UnlockCard } from '../../mock-data/unlock-cards';
import { Testimonial, TESTIMONIALS } from '../../mock-data/testimonials';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PropertyCardsComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  properties: Property[] = [];
  featuredProperties: Property[] = [];
  unlockCards: UnlockCard[] = [];
  testimonials: Testimonial[] = [];

  faqs = [
    {
      question: 'What is the process of buying a property?',
      answer: 'We guide you through every step from selection to paperwork.',
    },
    {
      question: 'Are there hidden charges?',
      answer: 'No. All costs are disclosed upfront.',
    },
    {
      question: 'Can I schedule a visit?',
      answer: 'Yes, schedule property visits anytime online.',
    },
    {
      question: 'Do you offer legal assistance?',
      answer: 'Yes, we help with all legal formalities.',
    },
  ];
  ngOnInit(): void {
    // this.featuredProperties = PROPERTIES.slice(0, 3);
    // console.log('check-->', this.featuredProperties);

    this.properties = PROPERTIES;
    this.featuredProperties = PROPERTIES.filter((p) => p.featured);
    this.unlockCards = UNLOCK_CARDS;
    this.testimonials = TESTIMONIALS;
  }

  currentTestimonialIndex = 0;
  currentFaqIndex = 0;

  nextTestimonial() {
    if (this.currentTestimonialIndex + 2 < this.testimonials.length) {
      this.currentTestimonialIndex += 2;
    }
  }

  prevTestimonial() {
    if (this.currentTestimonialIndex - 2 >= 0) {
      this.currentTestimonialIndex -= 2;
    }
  }

  nextFaq() {
    if (this.currentFaqIndex + 2 < this.faqs.length) {
      this.currentFaqIndex += 2;
    }
  }

  prevFaq() {
    if (this.currentFaqIndex - 2 >= 0) {
      this.currentFaqIndex -= 2;
    }
  }

  showAllTestimonials = false;
  showAllFaqs = false;

  get visibleTestimonials() {
    return this.showAllTestimonials
      ? this.testimonials
      : this.testimonials.slice(0, 2);
  }

  get visibleFaqs() {
    return this.showAllFaqs ? this.faqs : this.faqs.slice(0, 2);
  }

  toggleTestimonials() {
    this.showAllTestimonials = !this.showAllTestimonials;
  }

  toggleFaqs() {
    this.showAllFaqs = !this.showAllFaqs;
  }
}
