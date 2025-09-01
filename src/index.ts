import { fastifySwagger } from '@fastify/swagger';
import { fastify } from 'fastify';
import type { ZodTypeProvider } from 'fastify-type-provider-zod';
import {
	jsonSchemaTransform,
	serializerCompiler,
	validatorCompiler,
} from 'fastify-type-provider-zod';
import { alienRoutes } from './routes/alienRoutes.js';

const app = fastify({ logger: true }).withTypeProvider<ZodTypeProvider>();

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.register(fastifySwagger, {
	openapi: {
		info: {
			title: 'OmniAPI',
			version: '1.0.0',
		},
	},
	transform: jsonSchemaTransform,
});

await app.register(import('@scalar/fastify-api-reference'), {
	routePrefix: '/reference',
});

app.register(alienRoutes, { prefix: '/api/aliens' });

async function start() {
	try {
		await app.listen({ port: 3000 });
	} catch (error) {
		app.log.error(error);
		process.exit(1);
	}
}

start();
