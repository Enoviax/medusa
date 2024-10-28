
const excludedPaths = [
  "/checkout",
  "/account/*",
  "/admin/*",
  "/api/*",
  "/private/*",
  "/cart",
  "/login",
  "/register"
]

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL,
  generateRobotsTxt: true,
  sitemapSize: 7000, // Maximum number of URLs per sitemap
  changefreq: 'daily',
  priority: 0.7,
  exclude: excludedPaths,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "*",
        disallow: excludedPaths,
      },
    ],
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap-products.xml`,
      `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap-blog.xml`,
    ],
  },
  transform: async (config, path) => {
    // Custom transformation for specific paths
    const priorityMap = {
      '/': 1.0,
      '/services': 0.9,
      '/about': 0.8,
      '/contact': 0.8,
      '/blog': 0.7,
    }

    return {
      loc: path, // URL
      changefreq: path === '/' ? 'daily' : 'weekly',
      priority: priorityMap[path] || config.priority,
      lastmod: new Date().toISOString(),
    }
  },
}