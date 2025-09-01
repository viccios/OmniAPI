import type { FastifyReply, FastifyRequest } from 'fastify';
import type { Alien } from '../schemas/alienSchema.js';
import {
	createAlien,
	deleteAlien,
	getAlienById,
	getAliens,
	updateAlien,
} from '../services/alienService.js';

export async function getAliensHandler() {
	return await getAliens();
}

export async function getAlienByIdHandler(
	request: FastifyRequest<{ Params: { id: number } }>,
) {
	const { id } = request.params;

	return await getAlienById(id);
}

export async function createAlienHandler(
	request: FastifyRequest<{ Body: Alien }>,
	reply: FastifyReply,
) {
	const alienData = request.body;
	const createdAlien = await createAlien(alienData);

	reply.code(201).send(createdAlien);
}

export async function updateAlienHandler(
	request: FastifyRequest<{ Body: Alien; Params: { id: number } }>,
) {
	const { id } = request.params;
	const alienData = request.body;

	return await updateAlien(id, alienData);
}

export async function deleteAlienHandler(
	request: FastifyRequest<{ Params: { id: number } }>,
) {
	const { id } = request.params;

	return await deleteAlien(id);
}
