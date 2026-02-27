export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const localBusiness = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Photographer"],
  name: "Lauren Mitchell Photography",
  url: "https://www.laurenmitchellstudio.com",
  telephone: "+19187589297",
  email: "hello@laurenmitchellstudio.com",
  image: "https://www.laurenmitchellstudio.com/branding/hero.jpg",
  logo: "https://www.laurenmitchellstudio.com/android-chrome-512x512.png",
  description:
    "Professional photographer in Ponca City, Oklahoma specializing in maternity, family, newborn, and event photography.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ponca City",
    addressRegion: "OK",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 36.7070,
    longitude: -97.0856,
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: { "@type": "GeoCoordinates", latitude: 36.7070, longitude: -97.0856 },
    geoRadius: "80000",
  },
  priceRange: "$$",
  sameAs: [
    "https://www.instagram.com/laurenmitchellphoto/",
    "https://www.facebook.com/profile.php?id=61568352021526",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "18:00",
  },
};

export const webSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Lauren Mitchell Photography",
  url: "https://www.laurenmitchellstudio.com",
};

export function breadcrumbs(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export const photographerPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Lauren Mitchell",
  jobTitle: "Photographer",
  url: "https://www.laurenmitchellstudio.com/about",
  image: "https://www.laurenmitchellstudio.com/branding/hero.jpg",
  sameAs: [
    "https://www.instagram.com/laurenmitchellphoto/",
    "https://www.facebook.com/profile.php?id=61568352021526",
  ],
  worksFor: {
    "@type": "LocalBusiness",
    name: "Lauren Mitchell Photography",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ponca City",
    addressRegion: "OK",
    addressCountry: "US",
  },
};

export const services = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Photography Sessions",
  itemListElement: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Maternity Photography",
        description:
          "Celebrate the beauty of this season with images that reflect the anticipation and love of your growing family.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Family Photography",
        description:
          "Whether it's laughter, chaos, or quiet moments in between, family sessions are about documenting your unique story just as it is.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Newborn & Baby Photography",
        description:
          "Those first weeks and months go by so quickly. These sessions focus on the tiny details and little moments you'll want to remember forever.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Event Photography",
        description:
          "From weddings to birthdays and everything in-between, event photography allows you to stay present while your memories are preserved.",
      },
    },
  ],
};
