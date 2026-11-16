import { ConvexReactClient } from "convex/react";

const deploymentURL = import.meta.env.VITE_CONVEX_URL;

export const convex = new ConvexReactClient(deploymentURL);
