const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/var/www/krav/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/var/www/krav/src/pages/404.js"))),
  "component---src-pages-admin-js": hot(preferDefault(require("/var/www/krav/src/pages/admin.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/var/www/krav/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/var/www/krav/src/pages/index.js"))),
  "component---src-pages-informacije-js": hot(preferDefault(require("/var/www/krav/src/pages/informacije.js")))
}

