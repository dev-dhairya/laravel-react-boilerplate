import { Head, usePage } from '@inertiajs/react';
import type { PageProps } from '@/types';

interface SeoProps {
    title: string;
    description?: string;
    path?: string;
    ogType?: 'website' | 'article';
    ogImage?: string;
    noIndex?: boolean;
}

const defaults = {
    description:
        'A scalable, production-ready boilerplate built with Laravel, React, and TypeScript. Ship your next project faster.',
    ogImage: '/images/og-default.png',
};

const Seo: React.FC<SeoProps> = ({
    title,
    description = defaults.description,
    path,
    ogType = 'website',
    ogImage,
    noIndex = false,
}) => {
    const { appName, appUrl } = usePage<PageProps>().props;
    const canonicalUrl = path ? `${appUrl}${path}` : undefined;
    const imageUrl = ogImage
        ? `${appUrl}${ogImage}`
        : `${appUrl}${defaults.ogImage}`;

    return (
        <Head title={title}>
            <meta name="description" content={description} />

            {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

            {noIndex && <meta name="robots" content="noindex, nofollow" />}

            {/* Open Graph */}
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={`${title} - ${appName}`} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content={appName} />
            {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
            <meta property="og:image" content={imageUrl} />
            <meta property="og:locale" content="en_US" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={`${title} - ${appName}`} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={imageUrl} />
        </Head>
    );
};

export default Seo;
