module.exports = {
pathPrefix: "/kravmagatuzla.ba",
 siteMetadata: {
    title2: "Krav Maga Tuzla",
    siteUrl: "https://kravmagatuzla.ba/", 
    facebook: "https://www.facebook.com/408588132922283",
    instagram: "https://www.instagram.com/krav_maga_tuzla/",
    title: `Redefine your life...`,

    aboutus: `Klub "KRAV MAGA" je klub koji okuplja mlade zaljubljenike u sport i borilačke vještine, a ima za cilj promociju značaja bavljenja sportom za poboljšanje fizičkog i psihičkog zdravlja, te značaja okupljanja mladih ljudi sa istim ili sličnim interesima. U fokusu kluba je borilačka vještina "Krav Maga", sa prilagođenim kursevima u zavisnosti od vašeg spola, fizičkih predispozicija i uzrasta.`, 
}, 

plugins: [ 

{   resolve: `gatsby-source-instagram`,
    options: {
    username: `krav_maga_tuzla`,
}}, 

`gatsby-plugin-react-helmet`,

{
      resolve: `gatsby-plugin-manifest`,
      options: {

        name: "GatsbyJS",
        short_name: "GatsbyJS",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "static/icons/icon.png", // This path is relative to the root of the site.
	include_favicon: true,

      },
},

'gatsby-plugin-offline',




],
  

}
