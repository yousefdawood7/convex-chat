import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getAllMessages = query({
  args: {
    userId: v.id("users"),
  },

  handler: (ctx, args) => {
    return ctx.db
      .query("messages")
      .filter((q) => q.eq(q.field("reciever_id"), args.userId))
      .collect();
  },
});

export const sendMessage = mutation({
  args: {
    sender_id: v.id("users"),
    reciever_id: v.id("users"),
    message: v.string(),
  },

  handler: (ctx, args) => {
    ctx.db.insert("messages", { ...args });
  },
});
