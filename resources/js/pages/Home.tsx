import React from 'react';
import GuestLayout from '@/layouts/GuestLayout';
import Seo from '@/components/Seo/Seo';
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
            <Seo
                title="Home"
                description="A scalable, production-ready boilerplate built with Laravel, React, and TypeScript. Ship your next project faster."
                path="/"
            />

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

            <section className="home-author">
                <div className="home-author__container">
                    <div className="home-author__card">
                        <div className="home-author__avatar">DB</div>
                        <div className="home-author__info">
                            <p className="home-author__label">
                                Designed &amp; Developed by
                            </p>
                            <h3 className="home-author__name">Dhairya Bhavsar</h3>
                            <p className="home-author__bio">
                                Full-stack developer passionate about building scalable
                                web applications with clean architecture and modern
                                technologies.
                            </p>
                            <div className="home-author__links">
                                <a
                                    href="https://github.com/dev-dhairya"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="home-author__link"
                                >
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                    <p className="home-author__open-source">
                        This project is open source under the{' '}
                        <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer">
                            MIT License
                        </a>
                        . Contributions are welcome!
                    </p>
                </div>
            </section>
        </GuestLayout>
    );
};

export default Home;
