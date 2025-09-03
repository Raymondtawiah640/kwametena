const Sitemap = require('react-router-sitemap').default;

function generateSitemap() {
  return (
    new Sitemap('https://tenalearnorg.vercel.app')
      .build('path/to/your/routes.js')  // or wherever your routes are defined
      .save('./public/sitemap.xml')
  );
}

generateSitemap();
