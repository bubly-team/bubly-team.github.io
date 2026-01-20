import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    path?: string;
    image?: string;
    type?: 'website' | 'article';
    noIndex?: boolean;
}

const SITE_URL = 'https://www.bublyapp.com';
const DEFAULT_IMAGE = '/og-image.png';
const SITE_NAME = 'Bubly';

/**
 * SEO Component - Manages all page-level metadata
 * 
 * Usage:
 * <SEO 
 *   title="Page Title"
 *   description="Page description for search engines"
 *   path="/features"
 * />
 */
export const SEO = ({
    title,
    description,
    path = '',
    image = DEFAULT_IMAGE,
    type = 'website',
    noIndex = false,
}: SEOProps) => {
    // Build full URLs
    const canonicalUrl = `${SITE_URL}${path}`;
    const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`;

    // Ensure title includes brand (unless it's the homepage)
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

    // Organization Schema (appears on every page)
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Bubly",
        "url": SITE_URL,
        "logo": `${SITE_URL}/favicon.png`,
        "description": "AI-powered social assistant for nurturing meaningful relationships",
        "sameAs": [
            "https://apps.apple.com/app/bubly-social-assistant/id6754884488"
        ]
    };

    // SoftwareApplication Schema (for app pages)
    const appSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Bubly - Smart Social Assistant",
        "applicationCategory": "LifestyleApplication",
        "operatingSystem": "iOS",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "description": "Never forget a birthday again. AI-powered greetings, smart reminders, and personal relationship management.",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "ratingCount": "128",
            "bestRating": "5",
            "worstRating": "1"
        },
        "downloadUrl": "https://apps.apple.com/app/bubly-social-assistant/id6754884488"
    };

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />

            {/* Robots */}
            {noIndex ? (
                <meta name="robots" content="noindex, nofollow" />
            ) : (
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            )}

            {/* Canonical URL */}
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={imageUrl} />
            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:locale" content="en_US" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={canonicalUrl} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={imageUrl} />

            {/* Additional SEO Tags */}
            <meta name="author" content="Bubly Team" />
            <meta name="theme-color" content="#8b5cf6" />

            {/* Mobile App Meta */}
            <meta name="apple-itunes-app" content="app-id=6754884488" />

            {/* JSON-LD Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(organizationSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(appSchema)}
            </script>
        </Helmet>
    );
};

export default SEO;
