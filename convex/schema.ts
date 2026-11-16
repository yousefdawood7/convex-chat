import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
  }).index("by_name", ["name"]),

  messages: defineTable({
    message: v.string(),
    sender_id: v.id("users"),
    reciever_id: v.id("users"),
  }),
});
