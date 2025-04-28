import { Trip, Flight, Accommodation, Activity, Place } from '../types';

export const trips: Trip[] = [
  {
    id: '1',
    destination: 'Tokyo',
    image: 'https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg',
    dates: {
      start: '15 June 2025',
      end: '22 June 2025',
    },
  },
];

export const flights: Flight[] = [
  {
    id: 'fl1',
    airline: 'JAL',
    flightNumber: 'JL034',
    departure: {
      airport: 'San Francisco Intl',
      code: 'SFO',
      time: '11:30',
      date: '15 Jun',
    },
    arrival: {
      airport: 'Tokyo Narita',
      code: 'NRT',
      time: '14:45',
      date: '16 Jun',
    },
    duration: '11h 15m',
    price: '$789',
    status: 'confirmed',
  },
];

export const accommodations: Accommodation[] = [
  {
    id: 'acc1',
    name: 'Shibuya Excel Hotel',
    image: 'https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg',
    location: 'Shibuya, Tokyo',
    checkIn: '16 June 2025',
    checkOut: '20 June 2025',
    price: '$180/night',
    rating: 4.5,
    status: 'confirmed',
  },
  {
    id: 'acc2',
    name: 'Akasaka Urban Hotel',
    image: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg',
    location: 'Akasaka, Tokyo',
    checkIn: '20 June 2025',
    checkOut: '22 June 2025',
    price: '$150/night',
    rating: 4.2,
    status: 'confirmed',
  },
];

export const activities: Activity[] = [
  {
    id: 'act1',
    title: 'Tokyo Tower Visit',
    image: 'https://images.pexels.com/photos/4064432/pexels-photo-4064432.jpeg',
    date: '16 June 2025',
    time: '10:00 AM',
    location: 'Minato City',
    duration: '2 hours',
    price: '¥3,000',
    booked: true,
  },
  {
    id: 'act2',
    title: 'Sushi Making Class',
    image: 'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg',
    date: '17 June 2025',
    time: '1:00 PM',
    location: 'Tsukiji',
    duration: '2.5 hours',
    price: '¥8,500',
    booked: true,
  },
  {
    id: 'act3',
    title: 'Specialty Coffee Tour',
    image: 'https://images.pexels.com/photos/2531190/pexels-photo-2531190.jpeg',
    date: '18 June 2025',
    time: '9:00 AM',
    location: 'Shibuya',
    duration: '3 hours',
    price: '¥5,000',
    booked: false,
  },
];

export const places: Place[] = [
  {
    id: 'place1',
    name: 'Tokyo Skytree',
    image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg',
    description: 'Tokyo Skytree is a broadcasting and observation tower in Sumida, Tokyo.',
    location: 'Sumida City',
    category: 'landmark',
  },
  {
    id: 'place2',
    name: 'Sensō-ji Temple',
    image: 'https://images.pexels.com/photos/3800117/pexels-photo-3800117.jpeg',
    description: 'Sensō-ji is an ancient Buddhist temple located in Asakusa, Tokyo.',
    location: 'Asakusa',
    category: 'cultural',
  },
  {
    id: 'place3',
    name: 'Meiji Shrine',
    image: 'https://images.pexels.com/photos/3700216/pexels-photo-3700216.jpeg',
    description: 'Meiji Shrine is a Shinto shrine dedicated to Emperor Meiji and Empress Shōken.',
    location: 'Shibuya',
    category: 'cultural',
  },
];