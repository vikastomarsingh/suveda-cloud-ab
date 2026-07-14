import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const contacts = pgTable("contacts", {
  id: serial().primaryKey(),
  name: text().notNull(),
  email: text().notNull(),
  company: text(),
  serviceOfInterest: text("service_of_interest").default("Other"),
  message: text().notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
