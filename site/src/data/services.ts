export type ServiceVariant = 'plum' | 'clay' | 'olive' | 'lavender' | 'ink';

export interface ServiceSummary {
  slug: string;
  title: string;
  titleLines: [string, string];
  description: string;
  variant: ServiceVariant;
}

export const services: ServiceSummary[] = [
  {
    slug: 'individual-therapy',
    title: 'Individual Therapy',
    titleLines: ['Individual', 'Therapy'],
    description: 'Step toward greater self-awareness and emotional freedom by facing what’s been buried.',
    variant: 'clay',
  },
  {
    slug: 'couples-therapy',
    title: 'Couples Therapy',
    titleLines: ['Couples', 'Therapy'],
    description: 'Rediscover each other with clarity, care, and a new way to communicate.',
    variant: 'plum',
  },
  {
    slug: 'pre-marital-therapy',
    title: 'Pre-Marital Therapy',
    titleLines: ['Pre-Marital', 'Therapy'],
    description: 'Strengthen your bond, navigate challenges, and create a shared vision for a lasting partnership.',
    variant: 'lavender',
  },
  {
    slug: 'teen-therapy',
    title: 'Teen Therapy',
    titleLines: ['Teen', 'Therapy'],
    description: 'A safe place to understand yourself, express your feelings, and build the confidence to thrive.',
    variant: 'olive',
  },
  {
    slug: 'christian-therapy',
    title: 'Christian Therapy',
    titleLines: ['Christian', 'Therapy'],
    description: 'Integrating spiritual life and emotional health. When faith shapes how you show up in the world, it’s worth bringing into the room.',
    variant: 'ink',
  },
];

export function serviceHref(slug: string) {
  return `/services/${slug}/`;
}
