import { linkResolver } from "../prismicio";

export const getAlternates = ({ alternate_languages, sitename }) => {

    return alternate_languages.map((page, i) => (
        <link
            key={i}
            hrefLang={page.lang}
            rel="alternate"
            href={`${sitename}${linkResolver(page)}/`}
        />
    ))
}


// Open Graph tags
export const getMetaTags = ({ description, author, title }) => [
    {
        name: `description`,
        content: description || dummy(""),
    },
    {
        name: `twitter:card`,
        content: `summary`,
    },
    {
        name: `twitter:creator`,
        content: "@Platform Projects",
    },
    {
        name: `twitter:title`,
        content: title || dummy(""),
    },
    {
        name: `twitter:description`,
        content: description || dummy(""),
    },
    {
        property: `og:title`,
        content: title || dummy(""),
    },
    {
        property: `og:description`,
        content: description || dummy(""),
    },
    {
        property: `og:url`,
        content: "https://Platform Projects.com",
    },
    {
        property: `og:type`,
        content: `website`,
    },
    {
        name: `og:image`,
        content: "https://images.prismic.io/Platform Projects/58a37c43-a233-467b-af34-d288c7d25984_IMAGES-SEO.png",
    },
    {
        name: `og:image:alt`,
        content: "Platform Projects.com",
    },
    {
        name: `og:image:width`,
        content: "1200",
    },
    {
        name: `og:image:height`,
        content: "630",
    },
    {
        name: `og:site_name`,
        content: "Platform Projects",
    },
    {
        name: `viewport`,
        content: "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1",
    },
    {
        name: `keywords`,
        content: "Platform Projects focuses on the creation, integration, design, SEO, marketing, ecommerce, developer staffing, support, and digital integrations for your company needs.",
    },
].map((items, i) => (
    <meta key={`meta-${i}`} {...items}></meta>
))



export const dummy = (content = "") => [
    {
        text: content,
        type: "heading 1",
        spans: []
    },
];


export const getTitle = ({ type, title }) => title.replace(/['"]+/g, '')