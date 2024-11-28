import { faker } from '@faker-js/faker';
import chalk from 'chalk';
import { db } from '~/db/connection';
import { restaurants, users } from './schema';

/**
 * Reset database before seed it
 */
await db.delete(users);
await db.delete(restaurants);
console.warn(chalk.yellow('✔︎ Database reset!'));

/**
 * Create customers
 */
await db.insert(users).values([
  {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    role: 'customer',
  },
  {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    role: 'customer',
  },
]);

console.info(chalk.yellow('✔︎ Customers created successfully!'));

/**
 * Create restaurant manager
 */
const [manager] = await db
  .insert(users)
  .values({
    name: faker.person.fullName(),
    email: 'admin@admin.com',
    role: 'manager',
  })
  .returning({
    id: users.id,
  });

console.info(chalk.yellow('✔︎ Manager created successfully!'));

/**
 * Create restaurant
 */
await db.insert(restaurants).values([
  {
    name: faker.company.name(),
    description: faker.lorem.paragraph(),
    managerId: manager.id,
  },
]);
console.info(chalk.yellow('✔︎ Restaurant created successfully!'));

console.info('\n', chalk.greenBright('👏 Database seeded successfully!'));

process.exit();
