import { createId } from '@paralleldrive/cuid2';
import { relations } from 'drizzle-orm';
import { pgTable, text, timestamp } from 'drizzle-orm/pg-core';
import { users } from '~/db/schema/users';

const authLinks = pgTable('auth_links', {
  id: text('id')
    .$defaultFn(() => createId())
    .primaryKey(),
  code: text('code').notNull().unique(),
  userId: text('user_id')
    .references(() => users.id)
    .notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

const authLinksRelations = relations(authLinks, ({ one }) => {
  return {
    manager: one(users, {
      fields: [authLinks.userId],
      references: [users.id],
      relationName: 'user_auth_link',
    }),
  };
});

export { authLinks, authLinksRelations };
