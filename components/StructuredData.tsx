import React from "react";

export const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Bakery",
        "@id": "https://sweetblissbakery.com/#bakery",
        name: "Sweet Bliss Bakery",
        description:
          "Hand-crafted cakes for your sweetest moments. Wedding cakes, birthday cakes, and custom celebrations.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Pune",
          addressRegion: "MH",
          addressCountry: "IN",
        },
        telephone: "+9209077225",
        email: "rishipardeshi567@gmail.com",
        url: "https://sweetblissbakery.com",
        image: "https://sweetblissbakery.com/assests/cake1.jpg",
        priceRange: "$$",
        servesCuisine: "Bakery",
        hasMenu: "https://sweetblissbakery.com/#menu",
        openingHours: "Mo-Sa 09:00-20:00",
        paymentAccepted: "Cash, Credit Card",
        currenciesAccepted: "INR",
      },
      {
        "@type": "WebSite",
        "@id": "https://sweetblissbakery.com/#website",
        url: "https://sweetblissbakery.com",
        name: "Sweet Bliss Bakery",
        description: "Hand-crafted cakes for your sweetest moments",
        publisher: {
          "@id": "https://sweetblissbakery.com/#bakery",
        },
        potentialAction: [
          {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate:
                "https://sweetblissbakery.com/search?q={search_term_string}",
            },
            "query-input": "required name=search_term_string",
          },
        ],
      },
      {
        "@type": "Organization",
        "@id": "https://sweetblissbakery.com/#organization",
        name: "Sweet Bliss Bakery",
        url: "https://sweetblissbakery.com",
        logo: {
          "@type": "ImageObject",
          url: "https://sweetblissbakery.com/logo.png",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+9209077225",
          contactType: "customer service",
          availableLanguage: ["English", "Hindi"],
        },
        sameAs: [
          "https://www.facebook.com/sweetblissbakery",
          "https://www.instagram.com/sweetblissbakery",
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;
