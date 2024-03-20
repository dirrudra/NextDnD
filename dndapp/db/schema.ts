import { relations, sql } from "drizzle-orm";
import {
  index,
  integer,
  pgTableCreator,
  primaryKey,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { access } from "fs";
import { type AdapterAccount } from "next-auth/adapters";

export const createTable = pgTableCreator((name) => `table_${name}`);

export const game = createTable(
  "game",
  {
    id: serial("id"),
    name: varchar("name", { length: 256 }).primaryKey(),
    createdByEmail: text('createdByEmail'),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt"),
    imageUrl: text('imageUrl'),
    story:text('story'),
    rules:text('rules'),
  },
  (example) => ({
    createdByIdIdx: index("createdById_idx").on(example.createdByEmail),
    nameIndex: index("name_idx").on(example.name),
  })
);

export const gameRoom = createTable("gameRoom",{
    id:serial("id").primaryKey(),
    gameId: text("gameId"),
    userEmail:text("userEmail"),
});

export const users  = createTable("users",{
  id: serial("id").primaryKey(),
  email : text("email"),
  password: text("password"),
  name:text("name")
})
 
export const game_account_type = createTable("game_account_type",{
  id:serial("id").primaryKey(),
  dm_id:text("dm_id"),
  player_id:text("player_id"),
  role:text("role"),
})

export const session = createTable("session",{
  id:serial("id").primaryKey(),
  createdAt:timestamp("createdAt"),
  updatedAt:timestamp("updatedAt"),
  accessid:text("access_id"),
  createdBy:text("createdBy"), 
})







