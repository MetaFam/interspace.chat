import React from 'react';
import { Helmet } from 'react-helmet';

export const HeadComponent = ({
  title = 'MetaFest2. Powered by MetaGame',
  description = 'A virtual festival/conference/hackathon with the goal of helping you level up & manifest a better future.',
  url = 'https://metafest2-website.vercel.app/',
  img = 'https://metafest2-website.vercel.app/static/media/social.bc426e19.png',
}) => (
  <Helmet>
    <title>{title}</title>
    <meta
      name="viewport"
      property="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <meta name="title" property="title" content={title} />
    <meta name="description" property="description" content={description} />
    <meta name="theme-color" property="theme-color" content="#5a32e6" />

    <meta name="og:type" property="og:type" content="website" />
    <meta name="og:site_name" property="og:site_name" content="MetaFest2" />
    <meta name="og:locale" property="og:locale" content="en_US" />

    <meta name="og:title" property="og:title" content={title} />
    <meta
      name="og:description"
      property="og:description"
      content={description}
    />
    <meta name="og:url" property="og:url" content={url} />
    <meta name="og:image" property="og:image" content={img} />

    <meta name="twitter:card" property="twitter:card" content="summary" />
    <meta name="twitter:url" property="twitter:url" content={url} />
    <meta name="twitter:site" property="twitter:site" content="@MetaFam" />
    <meta name="twitter:title" property="twitter:title" content={title} />
    <meta
      name="twitter:description"
      property="twitter:description"
      content={description}
    />
    <meta name="twitter:image" property="twitter:image" content={img} />

    <link rel="icon" href={`${url}/favicon.ico`} />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@300;500;700&amp;display=swap" rel="stylesheet" />
  </Helmet>
);


