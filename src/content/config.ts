import { defineCollection, z } from 'astro:content';

const research = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    status: z.enum(['Active', 'Completed', 'Planning']),
    PI: z.string(), // Principal Investigator
    collaborators: z.array(z.string()).optional(),
    startDate: z.date(),
    endDate: z.date().optional(),
    funding: z.string().optional(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    heroImage: z.string().optional(),
    published: z.boolean().default(true),
    featured: z.boolean().default(false),
    relatedPapers: z.array(z.object({
      title: z.string(),
      url: z.string(),
      venue: z.string().optional(),
      year: z.number().optional(),
    })).optional(),
    relatedProjects: z.array(z.string()).optional(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    published: z.boolean().default(true),
  }),
});

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    organization: z.string(),
    industry: z.string(),
    challenge: z.string(),
    solution: z.string(),
    results: z.array(z.string()),
    metrics: z.object({
      efficiency: z.string().optional(),
      costSaving: z.string().optional(),
      userSatisfaction: z.string().optional(),
      other: z.record(z.string()).optional(),
    }).optional(),
    technologies: z.array(z.string()),
    timeline: z.string(),
    image: z.string().optional(),
    published: z.boolean().default(true),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  'research': research,
  'blog': blog,
  'case-studies': caseStudies,
};