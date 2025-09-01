import type { Alien } from '../schemas/alienSchema.js';
import { prisma } from '../utils/prisma.js';

export async function getAliens() {
	return await prisma.alien.findMany();
}

export async function getAlienById(id: number) {
	return await prisma.alien.findUniqueOrThrow({ where: { id } });
}

export async function createAlien(alienData: Alien) {
	return await prisma.alien.create({ data: alienData });
}

export async function updateAlien(id: number, alienData: Alien) {
	return await prisma.alien.update({
		where: { id },
		data: alienData,
	});
}

export async function deleteAlien(id: number) {
	return await prisma.alien.delete({ where: { id } });
}
