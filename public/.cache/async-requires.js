// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("/var/www/krav/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/var/www/krav/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-contact-js": () => import("/var/www/krav/src/pages/contact.js" /* webpackChunkName: "component---src-pages-contact-js" */),
  "component---src-pages-index-js": () => import("/var/www/krav/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-informacije-js": () => import("/var/www/krav/src/pages/informacije.js" /* webpackChunkName: "component---src-pages-informacije-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/var/www/krav/.cache/data.json")

