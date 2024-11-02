/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.keensight.co.ke',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  
  // Remove the exclude array since we want to include these pages
  exclude: [
    "/checkout",
    "/account/*",
    "/admin/*",
    "/api/*",
    "/private/*",
    "/cart",
    "/login",
    "/register"
  ],

  

  // Add all the pages that should be included in the sitemap
  additionalPaths: async (config) => {
    const paths = [
      { loc: '/ke', priority: 1.0, changefreq: 'daily' },
      { loc: '/ke/store', priority: 0.9, changefreq: 'weekly' },
      { loc: '/ke/contact', priority: 0.8, changefreq: 'weekly' },
      { loc: '/ke/about', priority: 0.8, changefreq: 'weekly' },
      { loc: '/ke/categories/cameras', priority: 0.8, changefreq: 'weekly' },
      { loc: '/ke/categories/acu', priority: 0.8, changefreq: 'weekly' },
      { loc: '/ke/categories/electric-fencing', priority: 0.8, changefreq: 'weekly' },
      { loc: '/ke/categories/dasboard-cameras', priority: 0.8, changefreq: 'weekly' },
      { loc: '/ke/categories/smartlocks', priority: 0.8, changefreq: 'weekly' }
    ];

    return paths;
  },

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/checkout",
          "/account/*",
          "/admin/*",
          "/api/*",
          "/private/*",
          "/cart",
          "/login",
          "/register"
        ],
      }
    ]
  }
};