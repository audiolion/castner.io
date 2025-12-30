import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("logs/:date", "routes/log.tsx"),
] satisfies RouteConfig;
