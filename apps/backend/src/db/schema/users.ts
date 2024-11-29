import { createId } from '@paralleldrive/cuid2';
import { pgEnum, pgTable, text, timestamp } from 'drizzle-orm/pg-core';

export const UserRoleEnum = pgEnum('user_role', ['manager', 'customer']);

const users = pgTable('users', {
  id: text('id')
    .$defaultFn(() => createId())
    .primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  phone: text('phone'),
  role: UserRoleEnum('role').default('customer').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export { users };