import { z } from 'zod';

export const alienBodySchema = z.object({
	name: z.string().min(1),
	ultimateForm: z.boolean(),
	species: z.string().min(1),
	homeWorld: z.string().min(1),
	ability: z.string().min(1),
	imgUrl: z.httpUrl(),
	firstAppearance: z.string().min(1),
});

export const alienResponseSchema = alienBodySchema.extend({
	id: z.number().positive(),
});

export const alienParamsSchema = z.object({
	id: z.coerce.number().positive(),
});

export type Alien = z.infer<typeof alienBodySchema>;
