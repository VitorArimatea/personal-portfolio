import createMiddleware from "next-intl/middleware";

const intlMiddleware = createMiddleware({
  locales: ["en", "pt-br"],
  localePrefix: "always",
  defaultLocale: "en",
});

export default intlMiddleware;

export const config = {
  matcher: ["/((?!trpc|_next|_vercel|.*\\..*).*)", "/api/(.*)"],
};
