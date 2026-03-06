/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://grupobym.com.ar",
  generateRobotsTxt: false,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  autoLastmod: true,
  transform: async (config, path) => {
    let priority = 0.7;
    let changefreq = "weekly";

    if (path === "/") {
      priority = 1.0;
      changefreq = "daily";
    } else if (path === "/procedimientos" || path === "/blog") {
      priority = 0.9;
      changefreq = "weekly";
    } else if (path.startsWith("/procedimientos/")) {
      priority = 0.9;
      changefreq = "monthly";
    } else if (path.startsWith("/blog/")) {
      priority = 0.8;
      changefreq = "weekly";
    } else if (path === "/casos-de-exito") {
      priority = 0.8;
      changefreq = "weekly";
    } else if (path.startsWith("/casos-de-exito/")) {
      priority = 0.8;
      changefreq = "monthly";
    } else if (path.startsWith("/equipo/")) {
      priority = 0.8;
      changefreq = "monthly";
    } else if (path === "/cirugia-bariatrica-chaco") {
      priority = 0.9;
      changefreq = "monthly";
    } else if (path === "/cirugia-bariatrica-precio") {
      priority = 0.9;
      changefreq = "monthly";
    } else if (path === "/pacientes-internacionales") {
      priority = 0.8;
      changefreq = "monthly";
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
