import { Program } from '@/lib/types';

export const programs: Program[] = [
  {
    id: 'beginner-yoga',
    name: 'Beginner Yoga Course',
    description:
      'Introduction to foundational yoga asanas, breathing techniques, and relaxation methods. Ideal for those new to yoga or returning after a break.',
    duration: '4 weeks',
    schedule: 'Mon, Wed, Fri — 6:00 AM to 7:30 AM',
    category: 'beginner',
  },
  {
    id: 'gentle-morning-flow',
    name: 'Gentle Morning Flow',
    description:
      'A slow-paced morning session focusing on sun salutations, gentle stretches, and mindful breathing to start your day with clarity.',
    duration: '6 weeks',
    schedule: 'Tue, Thu — 5:30 AM to 6:30 AM',
    category: 'beginner',
  },
  {
    id: 'intermediate-asana',
    name: 'Intermediate Asana Practice',
    description:
      'Deepen your practice with intermediate-level postures, longer holds, and pranayama sequences. Prior yoga experience required.',
    duration: '8 weeks',
    schedule: 'Mon, Wed, Fri — 7:00 AM to 8:30 AM',
    category: 'intermediate',
  },
  {
    id: 'pranayama-meditation',
    name: 'Pranayama & Meditation',
    description:
      'Explore advanced breathing techniques and guided meditation practices rooted in Patanjali\'s Yoga Sutras.',
    duration: '6 weeks',
    schedule: 'Tue, Thu, Sat — 5:00 AM to 6:30 AM',
    category: 'intermediate',
  },
  {
    id: 'advanced-yoga-sadhana',
    name: 'Advanced Yoga Sadhana',
    description:
      'An intensive program covering advanced asanas, kriyas, bandhas, and deep meditation for experienced practitioners.',
    duration: '12 weeks',
    schedule: 'Mon to Sat — 4:30 AM to 7:00 AM',
    category: 'advanced',
  },
];
