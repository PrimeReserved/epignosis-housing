import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const LOGO_URL = "https://res.cloudinary.com/dfwty72r9/image/upload/v1770105452/Epignosis_Housing_Co_Logo_-_jqvggd.png";

// Comprehensive SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://epignosishousing.com'),
  title: {
    default: "Epignosis Housing Co | Long-Term Contractor & Corporate Accommodation UK",
    template: "%s | Epignosis Housing Co"
  },
  description: "Epignosis Housing Co delivers tailored long-term housing solutions for contractors, family relocators, and remote professionals. Fully furnished properties with flexible 1 month to 5+ year leases across the UK.",
  keywords: [
    "long-term contractor accommodation UK",
    "corporate relocation housing",
    "extended stay professional housing",
    "furnished contractor apartments",
    "flexible lease accommodation",
    "project team housing",
    "infrastructure contractor housing",
    "construction worker accommodation",
    "corporate housing UK",
    "contractor lodging",
    "professional accommodation",
    "family relocation housing",
    "temporary housing UK",
    "serviced accommodation",
    "long-term rentals UK"
  ],
  authors: [{ name: "Epignosis Housing Co" }],
  creator: "Epignosis Housing Co",
  publisher: "Epignosis Housing Co",
  
  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://epignosishousing.com",
    siteName: "Epignosis Housing Co",
    title: "Epignosis Housing Co | Premium Long-Term Accommodation Solutions",
    description: "Tailored housing solutions for contractors, corporate relocations, and remote professionals. Flexible leases from 1 month to 5+ years.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Epignosis Housing Co - Premium Accommodation"
      }
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Epignosis Housing Co | Long-Term Accommodation UK",
    description: "Premium long-term housing for contractors and professionals. Flexible, comfortable, reliable.",
    images: ["/og-image.jpg"],
    creator: "@epignosishousing",
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Verification tags (add when available)
  verification: {
    google: '',
  },
  
  // Alternate languages (if multilingual in future)
  alternates: {
    canonical: "https://epignosishousing.com",
  },
  
  // Icons — logo used as favicon candidate
  icons: {
    icon: [
      { url: LOGO_URL, type: "image/png" },
    ],
    apple: [
      { url: LOGO_URL, sizes: "180x180", type: "image/png" },
    ],
  },
  
  // Additional metadata
  category: 'Real Estate',
  classification: 'Long-Term Accommodation Provider',
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#152238" }
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data Schemas
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Epignosis Housing Co",
    "description": "Forward-thinking accommodation provider delivering tailored housing solutions for long-term contractors, family relocators, and remote professionals.",
    "url": "https://epignosishousing.com",
    "logo": LOGO_URL,
    "email": "info@epignosishousing.com",
    "telephone": "+44 7123 456789",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "GB",
      "addressRegion": "England"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United Kingdom"
    },
    "priceRange": "££-£££",
    "openingHours": "Mo-Fr 09:00-18:00"
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Long-Term Accommodation Services",
    "provider": {
      "@type": "RealEstateAgent",
      "name": "Epignosis Housing Co",
      "logo": LOGO_URL
    },
    "areaServed": {
      "@type": "Country",
      "name": "United Kingdom"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Accommodation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Long-Term Contractor Accommodation",
            "description": "Fully furnished accommodation for contractors on extended assignments"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Corporate & Family Relocation Housing",
            "description": "Comfortable housing solutions for corporate relocations and families"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Extended-Stay Professional Housing",
            "description": "Premium accommodation for remote professionals and project teams"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Flexible Leasing",
            "description": "Flexible lease terms from 1 month to 5+ years"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Property Management",
            "description": "Professional management of internal accommodation portfolio"
          }
        }
      ]
    }
  };

  return (
    <html lang="en-GB">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://embed.tawk.to" />
      </head>
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        
        {/* Tawk.to Code */}
        <Script id="tawk-to" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/6980d9bd55cf561c3927ea46/1jgfl53sj';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>

        {/* Google Analytics - Add when available */}
        {/* <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script> */}
      </body>
    </html>
  );
}