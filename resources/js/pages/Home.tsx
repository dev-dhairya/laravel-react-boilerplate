import React from 'react';
import { Head } from '@inertiajs/react';
import GuestLayout from '@/layouts/GuestLayout';
import Hero from '@/components/Hero/Hero';
import Button from '@/components/ui/Button/Button';

const features = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
            </svg>
        ),
        title: 'Modern Stack',
        description:
            'Laravel 12, React 19, TypeScript, Vite, and SCSS with BEM methodology. All configured and ready to go.',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <line x1="3" y1="9" x2="21" y2="9" />
                <line x1="9" y1="21" x2="9" y2="9" />
            </svg>
        ),
        title: 'Scalable Architecture',
        description:
            'Clean folder structure with separation of concerns. Designed to grow with your application from day one.',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
        title: 'Authentication Ready',
        description:
            'Secure login system with CSRF protection, form validation, and session management built right in.',
    },
];

const Home: React.FC = () => {
    return (
        <GuestLayout>
            <Head title="Home" />

            <Hero />

            <section className="home-features" id="features">
                <div className="home-features__container">
                    <div className="home-features__header">
                        <h2 className="home-features__title">
                            Everything You Need
                        </h2>
                        <p className="home-features__subtitle">
                            A solid foundation with best practices baked in, so you
                            can focus on building your product.
                        </p>
                    </div>

                    <div className="home-features__grid">
                        {features.map((feature) => (
                            <div key={feature.title} className="feature-card">
                                <div className="feature-card__icon">
                                    {feature.icon}
                                </div>
                                <h3 className="feature-card__title">
                                    {feature.title}
                                </h3>
                                <p className="feature-card__description">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="home-cta" id="about">
                <div className="home-cta__container">
                    <h2 className="home-cta__title">
                        Ready to Start Building?
                    </h2>
                    <p className="home-cta__subtitle">
                        Get up and running in minutes with our production-ready
                        boilerplate. No configuration headaches.
                    </p>
                    <div className="home-cta__actions">
                        <Button variant="primary" size="lg" as="a" href="/register">
                            Get Started Free
                        </Button>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
};

export default Home;
