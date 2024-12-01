CREATE TABLE "users" (
  "user_id" uuid PRIMARY KEY,
  "user_type" varchar,
  "name" varchar,
  "email" varchar,
  "created_at" timestamptz NOT NULL DEFAULT (now)
);

CREATE TABLE "hotels" (
  "hotel_id" uuid PRIMARY KEY,
  "manager_id" uuid NOT NULL,
  "name" varchar,
  "description" varchar,
  "address" varchar,
  "created_at" timestamptz NOT NULL DEFAULT (now)
);

CREATE TABLE "room_types" (
  "room_type_id" uuid PRIMARY KEY,
  "hotel_id" uuid NOT NULL,
  "name" varchar,
  "description" varchar,
  "num_beds" int,
  "bed_type" varchar,
  "max_occupancy" int,
  "base_price" decimal
);

CREATE TABLE "room" (
  "room_id" uuid PRIMARY KEY,
  "room_type_id" uuid NOT NULL,
  "room_number" varchar
);

CREATE TABLE "room_inventory" (
  "room_type_id" uuid NOT NULL,
  "date" date,
  "available_rooms" interger,
  "created_at" timestamptz NOT NULL DEFAULT (now)
);

CREATE TABLE "room_pricing" (
  "room_type_id" uuid NOT NULL,
  "date" date,
  "price" decimal,
  "created_at" timestamptz NOT NULL DEFAULT (now)
);

CREATE TABLE "amenities" (
  "amenity_id" uuid,
  "name" varchar,
  "description" varchar
);

CREATE TABLE "hotel_amenities" (
  "hotel_id" uuid NOT NULL,
  "amenity_id" uuid NOT NULL
);

CREATE TABLE "room_type_amenities" (
  "room_type_id" uuid NOT NULL,
  "amenity_id" uuid NOT NULL
);

CREATE TABLE "reservations" (
  "reservation_id" uuid PRIMARY KEY,
  "user_id" uuid NOT NULL,
  "hotel_id" uuid NOT NULL,
  "room_type_id" uuid NOT NULL,
  "check_in_date" date,
  "check_out_date" date,
  "total_price" decimal,
  "status" varchar,
  "created_at" timestamptz NOT NULL DEFAULT (now)
);

CREATE TABLE "notifications" (
  "notification_id" uuid PRIMARY KEY,
  "user_id" uuid NOT NULL,
  "reservation_id" uuid NOT NULL,
  "message" varchar,
  "is_read" boolean,
  "created_at" timestamptz NOT NULL DEFAULT (now)
);

CREATE UNIQUE INDEX ON "room_inventory" ("room_type_id", "date");

CREATE UNIQUE INDEX ON "room_pricing" ("room_type_id", "date");

CREATE UNIQUE INDEX ON "hotel_amenities" ("hotel_id", "amenity_id");

CREATE UNIQUE INDEX ON "room_type_amenities" ("room_type_id", "amenity_id");

ALTER TABLE "hotels" ADD FOREIGN KEY ("manager_id") REFERENCES "users" ("user_id");

ALTER TABLE "room_types" ADD FOREIGN KEY ("hotel_id") REFERENCES "hotels" ("hotel_id");

ALTER TABLE "room" ADD FOREIGN KEY ("room_type_id") REFERENCES "room_types" ("room_type_id");

ALTER TABLE "room_inventory" ADD FOREIGN KEY ("room_type_id") REFERENCES "room_types" ("room_type_id");

ALTER TABLE "room_pricing" ADD FOREIGN KEY ("room_type_id") REFERENCES "room_types" ("room_type_id");

ALTER TABLE "hotel_amenities" ADD FOREIGN KEY ("hotel_id") REFERENCES "hotels" ("hotel_id");

ALTER TABLE "hotel_amenities" ADD FOREIGN KEY ("amenity_id") REFERENCES "amenities" ("amenity_id");

ALTER TABLE "room_type_amenities" ADD FOREIGN KEY ("room_type_id") REFERENCES "room_types" ("room_type_id");

ALTER TABLE "room_type_amenities" ADD FOREIGN KEY ("amenity_id") REFERENCES "amenities" ("amenity_id");

ALTER TABLE "reservations" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("user_id");

ALTER TABLE "reservations" ADD FOREIGN KEY ("hotel_id") REFERENCES "hotels" ("hotel_id");

ALTER TABLE "reservations" ADD FOREIGN KEY ("room_type_id") REFERENCES "room_types" ("room_type_id");

ALTER TABLE "notifications" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("user_id");

ALTER TABLE "notifications" ADD FOREIGN KEY ("reservation_id") REFERENCES "reservations" ("reservation_id");
