import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    meta: {
        // This is an array of link objects that can be things like Bootstrap, Google fonts, ect, that you would usually put in the head of an HTML document. In the link object we only need to use the "rel" and the "href" attributes.
        link: [
            {rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"}
        ]
    }
})