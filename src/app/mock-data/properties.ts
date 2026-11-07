export interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  imageUrl: string;
  description: string;
  bedrooms: number;
  bathrooms: number;
  area: number; // in square feet
  featured: boolean;
}

export const PROPERTIES: Property[] = [
  {
    id: 1,
    title: 'Modern Family Home',
    location: '123 Main St, Springfield',
    price: 350000,
    imageUrl: 'assets/images/frames-for-your-heart-2d4lAQAlbDA-unsplash.jpg',
    description: 'A beautiful modern family home with spacious garden.',
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
    featured: true,
  },
  {
    id: 2,
    title: 'Luxury Apartment',
    location: '456 Elm St, Metropolis',
    price: 550000,
    imageUrl: 'assets/images/tierra-mallorca-rgJ1J8SDEAY-unsplash.jpg',
    description: 'Luxury apartment with city views and modern amenities.',
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    featured: true,
  },
  {
    id: 3,
    title: 'Cozy Cottage',
    location: '789 Oak St, Smalltown',
    price: 220000,
    imageUrl: 'assets/images/property3.jpg',
    description: 'Cozy cottage perfect for a small family or couple.',
    bedrooms: 2,
    bathrooms: 1,
    area: 1200,
    featured: true,
  },
];
