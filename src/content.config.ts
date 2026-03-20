import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const research = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    type: z.enum(['chapter', 'essay', 'note', 'framework']).default('essay'),
    status: z.enum(['draft', 'in-progress', 'complete']).default('draft'),
    order: z.number().optional(),
    date: z.string().optional(),
    relatedWorks: z.array(z.string()).optional(),
    relatedTools: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const works = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/works' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    instrumentation: z.string().optional(),
    year: z.number().optional(),
    duration: z.string().optional(),
    status: z.enum(['complete', 'in-progress', 'planned']).default('planned'),
    audioUrl: z.string().optional(),
    scoreUrl: z.string().optional(),
    order: z.number().optional(),
    relatedResearch: z.array(z.string()).optional(),
    relatedTools: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const tools = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/tools' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    type: z.enum(['plugin', 'experiment', 'demo', 'library']).default('plugin'),
    status: z.enum(['released', 'beta', 'development', 'planned']).default('planned'),
    repoUrl: z.string().optional(),
    order: z.number().optional(),
    relatedResearch: z.array(z.string()).optional(),
    relatedWorks: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const book = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/book' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    type: z.enum(['chapter', 'creature', 'interlude', 'apparatus']).default('chapter'),
    order: z.number().optional(),
    status: z.enum(['draft', 'in-progress', 'complete']).default('draft'),
    relatedResearch: z.array(z.string()).optional(),
    relatedWorks: z.array(z.string()).optional(),
    relatedTools: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { research, works, tools, book };
