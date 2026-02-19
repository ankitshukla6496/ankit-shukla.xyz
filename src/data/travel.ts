export interface TravelDestination {
  city: string;
  country: string;
  emoji: string;
  photo?: string; // path relative to /public — add photos to /public/images/travel/
}

export const travelDestinations: TravelDestination[] = [
  { city: 'Pittsburgh', country: 'USA', emoji: '🇺🇸', photo: '/images/travel/pittsburgh.jpg' },
  { city: 'New York', country: 'USA', emoji: '🇺🇸', photo: '/images/travel/nyc.jpg' },
  { city: 'San Francisco', country: 'USA', emoji: '🇺🇸', photo: '/images/travel/sf.jpg' },
  { city: 'Seoul', country: 'South Korea', emoji: '🇰🇷', photo: '/images/travel/seoul.jpg' },
  { city: 'Tokyo', country: 'Japan', emoji: '🇯🇵', photo: '/images/travel/tokyo.jpg' },
  { city: 'Dubai', country: 'UAE', emoji: '🇦🇪', photo: '/images/travel/dubai.jpg' },
  { city: 'Jaipur', country: 'India', emoji: '🇮🇳', photo: '/images/travel/jaipur.jpg' },
  { city: 'Goa', country: 'India', emoji: '🇮🇳', photo: '/images/travel/goa.jpg' },
];

export const countriesVisited = [...new Set(travelDestinations.map(d => d.country))].length;
