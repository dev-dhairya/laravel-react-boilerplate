import React from 'react';
import Button from '@/components/ui/Button/Button';

const Hero: React.FC = () => {
    return (
        <section className="hero">
            <div className="hero__decoration" />
            <div className="hero__container">
                <div className="hero__content">
                    <span className="hero__badge">
                        Built with Laravel 12 + React 19
                    </span>

                    <h1 className="hero__title">
                        Build Modern Apps{' '}
                        <span>Faster Than Ever</span>
                    </h1>

                    <p className="hero__subtitle">
                        A production-ready boilerplate with Laravel, React,
                        TypeScript, and SCSS. Scalable architecture, clean code,
                        and developer experience first.
                    </p>

                    <div className="hero__actions">
                        <Button variant="primary" size="lg" as="a" href="/register">
                            Get Started
                        </Button>
                        <Button variant="secondary" size="lg" as="a" href="#features">
                            Explore Features
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
