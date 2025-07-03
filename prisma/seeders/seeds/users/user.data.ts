import { userCreateInput } from '@/shared/prismagraphql/user';

export const users: userCreateInput[] = [
  {
    id: 1,
    username: 'john_doe',
    fullname: 'John Doe',
    password_hash:
      '$2b$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW', // password: 'password123'
    email: 'john.doe@email.com',
    bio: 'Photography enthusiast and travel blogger',
    profile_picture_url: 'https://example.com/images/john_doe.jpg',
    webside_url: 'https://johndoe.com',
    is_privated: false,
    created_at: new Date(),
    status: {
      connect: { id: 1 }, // ACTIVE
    },
    gender: {
      connect: { id: 1 }, // Male
    },
  },
  {
    id: 2,
    username: 'jane_smith',
    fullname: 'Jane Smith',
    password_hash:
      '$2b$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW',
    email: 'jane.smith@email.com',
    bio: 'Art lover and food enthusiast',
    profile_picture_url: 'https://example.com/images/jane_smith.jpg',
    is_privated: false,
    created_at: new Date(),
    status: {
      connect: { id: 1 }, // ACTIVE
    },
    gender: {
      connect: { id: 2 }, // Female
    },
  },
  {
    id: 3,
    username: 'mike_wilson',
    fullname: 'Mike Wilson',
    password_hash:
      '$2b$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW',
    email: 'mike.wilson@email.com',
    bio: 'Tech enthusiast and gamer',
    is_privated: true,
    created_at: new Date(),
    status: {
      connect: { id: 1 }, // ACTIVE
    },
    gender: {
      connect: { id: 1 }, // Male
    },
  },
  {
    id: 4,
    username: 'sarah_connor',
    fullname: 'Sarah Connor',
    password_hash:
      '$2b$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW',
    email: 'sarah.connor@email.com',
    bio: 'Fitness instructor and wellness coach',
    profile_picture_url: 'https://example.com/images/sarah_connor.jpg',
    webside_url: 'https://sarahfitness.com',
    is_privated: false,
    created_at: new Date(),
    status: {
      connect: { id: 1 }, // ACTIVE
    },
    gender: {
      connect: { id: 2 }, // Female
    },
  },
  {
    id: 5,
    username: 'alex_taylor',
    fullname: 'Alex Taylor',
    password_hash:
      '$2b$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW',
    email: 'alex.taylor@email.com',
    bio: 'Digital nomad and content creator',
    is_privated: false,
    created_at: new Date(),
    status: {
      connect: { id: 1 }, // ACTIVE
    },
    gender: {
      connect: { id: 3 }, // Other
    },
  },
];
