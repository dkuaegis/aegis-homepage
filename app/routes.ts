import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/_index.tsx"),
    route("faq", "routes/faq/route.tsx"),
    route("recruit", "routes/recruit/route.tsx"),
    route("contact", "routes/contact/route.tsx"),
    route("login", "routes/login/route.tsx"),
] satisfies RouteConfig;
