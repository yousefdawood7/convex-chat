import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getAllMessages = query({
  handler: (ctx) => {
    return ctx.db.query("messages").collect();
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
