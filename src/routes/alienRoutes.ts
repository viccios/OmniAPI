import type { FastifyInstance } from 'fastify';
import { z } from 'zod';
import {
	createAlienHandler,
	deleteAlienHandler,
	getAlienByIdHandler,
	getAliensHandler,
	updateAlienHandler,
} from '../controllers/alienController.js';
import {
	alienBodySchema,
	alienParamsSchema,
	alienResponseSchema,
} from '../schemas/alienSchema.js';

export function alienRoutes(app: FastifyInstance) {
	app.get(
		'/',
		{
			schema: {
				response: {
					200: z.array(alienResponseSchema),
				},
			},
		},
		getAliensHandler,
	);
	app.get(
		'/:id',
		{
			schema: {
				params: alienParamsSchema,
				response: {
					200: alienResponseSchema,
				},
			},
		},
		getAlienByIdHandler,
	);
	app.post(
		'/',
		{
			schema: {
				body: alienBodySchema,
				response: {
					201: alienResponseSchema,
				},
			},
		},
		createAlienHandler,
	);
	app.put(
		'/:id',
		{
			schema: {
				params: alienParamsSchema,
				body: alienBodySchema,
				response: {
					200: alienResponseSchema,
				},
			},
		},
		updateAlienHandler,
	);
	app.delete(
		'/:id',
		{
			schema: {
				params: alienParamsSchema,
				response: {
					200: alienResponseSchema,
				},
			},
		},
		deleteAlienHandler,
	);
}
