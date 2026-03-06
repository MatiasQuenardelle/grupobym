/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://grupobym.com.ar",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  robotsTxtOptions: {
    additionalSitemaps: [],
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
  transform: async (config, path) => {
    const priority = path === "/" ? 1.0 : path.includes("procedimientos") ? 0.9 : 0.7;
    return {
      loc: path,
      changefreq: config.changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
