import { locationCreateInput } from '@/shared/prismagraphql/location';
import { Decimal } from '@prisma/client/runtime/library';

export const locations: locationCreateInput[] = [
  {
    name: 'New York, NY',
    latitude: new Decimal(40.7128),
    longitude: new Decimal(-74.006),
    address: 'New York City, NY, USA',
    created_at: new Date(),
  },
  {
    name: 'Los Angeles, CA',
    latitude: new Decimal(34.0522),
    longitude: new Decimal(-118.2437),
    address: 'Los Angeles, CA, USA',
    created_at: new Date(),
  },
  {
    name: 'Chicago, IL',
    latitude: new Decimal(41.8781),
    longitude: new Decimal(-87.6298),
    address: 'Chicago, IL, USA',
    created_at: new Date(),
  },
  {
    name: 'Miami, FL',
    latitude: new Decimal(25.7617),
    longitude: new Decimal(-80.1918),
    address: 'Miami, FL, USA',
    created_at: new Date(),
  },
  {
    name: 'San Francisco, CA',
    latitude: new Decimal(37.7749),
    longitude: new Decimal(-122.4194),
    address: 'San Francisco, CA, USA',
    created_at: new Date(),
  },
];
