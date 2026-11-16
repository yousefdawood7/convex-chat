import { v } from "convex/values";
import { query } from "./_generated/server";

export const getUser = query({
  args: {
    name: v.string(),
  },

  handler: (ctx, args) =>
    ctx.db
      .query("users")
      .withIndex("by_name", (q) => q.eq("name", args.name))
      .collect(),
});
