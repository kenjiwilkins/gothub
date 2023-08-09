import { faker } from '@faker-js/faker';

export function generateFakeHeadings() {
	return Array.from({ length: 5 }).map(() => {
		return {
			title: faker.word.noun()
		};
	});
}

export function generateFakeHeadingWithSub() {
	return Array.from({ length: 5 }).map(() => {
		return {
			title: faker.word.noun(),
			description: faker.lorem.sentence(3)
		};
	});
}
