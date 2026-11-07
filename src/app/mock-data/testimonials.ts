export interface Testimonial {
  clientName: string;
  country: string;
  imageUrl: string;
  rating: number;
  message: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    clientName: 'John Doe',
    country: '🇺🇸 United States',
    imageUrl: 'assets/clients/john.jpg',
    rating: 5,
    message:
      'Working with this agency was a dream. They found us the perfect home quickly and professionally.',
  },
  {
    clientName: 'Aisha Khan',
    country: '🇦🇪 UAE',
    imageUrl: 'assets/clients/aisha.jpg',
    rating: 4,
    message:
      'The team was very responsive and helpful throughout the buying process. Highly recommended!',
  },
  {
    clientName: 'Alice',
    country: 'USA',
    imageUrl: 'assets/alice.jpg',
    rating: 5,
    message: 'Amazing service!',
  },
  {
    clientName: 'Bob',
    country: 'UK',
    imageUrl: 'assets/bob.jpg',
    rating: 4,
    message: 'Found my dream home!',
  },
  {
    clientName: 'Carlos',
    country: 'Brazil',
    imageUrl: 'assets/carlos.jpg',
    rating: 5,
    message: 'Highly professional team!',
  },

  // add more testimonials if needed
];

/**
 *
 */
