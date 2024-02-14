import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://ritikrana.in/", // replace this with your deployed domain
  author: "Ritik",
  desc: "",
  title: "ritik.",
  // ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/ritikrana4",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ritik.r9/",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ritikrana/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:ritikrana4@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
];
