CREATE TABLE "contacts" (
	"id" serial PRIMARY KEY,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"company" text,
	"service_of_interest" text DEFAULT 'Other',
	"message" text NOT NULL,
	"created_at" timestamp DEFAULT now()
);
