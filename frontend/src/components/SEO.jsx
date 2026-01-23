import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, url }) => {
    const siteTitle = "Nethaji Vidyalayam";
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const defaultDescription = "Nethaji Vidyalayam - A Legacy of Excellence since 2001. Providing wholesome, value-based education for holistic development in Medavakkam, Chennai.";
    const metaDescription = description || defaultDescription;
    const siteUrl = "https://nethajividhyalayam.com"; // Replace with actual URL if known
    const metaUrl = url ? `${siteUrl}${url}` : siteUrl;
    const metaImage = image || "/src/images/logo 512.png"; // Default image

    // Structured Data (Schema.org)
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "Nethaji Vidyalayam",
        "url": siteUrl,
        "logo": `${siteUrl}/src/images/logo 512.png`,
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91 9444662737",
            "contactType": "Admissions",
            "areaServed": "IN",
            "availableLanguage": ["English", "Tamil", "Hindi"]
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Medavakkam",
            "addressLocality": "Chennai",
            "addressRegion": "Tamil Nadu",
            "postalCode": "600100",
            "addressCountry": "IN"
        }
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Nethaji Vidyalayam",
        "url": siteUrl,
        "potentialAction": {
            "@type": "SearchAction",
            "target": `${siteUrl}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
        }
    };

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="canonical" href={metaUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={metaUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={metaImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={metaUrl} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={metaDescription} />
            <meta property="twitter:image" content={metaImage} />

            {/* JSON-LD Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(organizationSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(websiteSchema)}
            </script>
        </Helmet>
    );
};

export default SEO;
