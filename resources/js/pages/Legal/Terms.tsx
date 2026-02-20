import React from 'react';
import GuestLayout from '@/layouts/GuestLayout';
import Seo from '@/components/Seo/Seo';

const Terms: React.FC = () => {
    return (
        <GuestLayout>
            <Seo
                title="Terms & Conditions"
                description="Read our terms and conditions to understand the rules and guidelines for using our application."
                path="/terms"
            />

            <div className="legal">
                <div className="legal__container">
                    <div className="legal__header">
                        <h1 className="legal__title">Terms &amp; Conditions</h1>
                        <p className="legal__updated">Last updated: February 20, 2026</p>
                    </div>

                    <div className="legal__content">
                        <section className="legal__section">
                            <h2>1. Acceptance of Terms</h2>
                            <p>
                                By accessing and using this application, you accept and agree to be
                                bound by the terms and provisions of this agreement. If you do not
                                agree to abide by these terms, please do not use this service.
                            </p>
                        </section>

                        <section className="legal__section">
                            <h2>2. Use License</h2>
                            <p>
                                Permission is granted to temporarily use this application for
                                personal, non-commercial transitory viewing only. This is the grant
                                of a license, not a transfer of title, and under this license you
                                may not:
                            </p>
                            <ul>
                                <li>Modify or copy the materials</li>
                                <li>Use the materials for any commercial purpose</li>
                                <li>Attempt to decompile or reverse engineer any software contained in the application</li>
                                <li>Remove any copyright or other proprietary notations from the materials</li>
                                <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server</li>
                            </ul>
                            <p>
                                This license shall automatically terminate if you violate any of
                                these restrictions and may be terminated at any time.
                            </p>
                        </section>

                        <section className="legal__section">
                            <h2>3. User Accounts</h2>
                            <p>
                                When you create an account with us, you must provide accurate,
                                complete, and current information. Failure to do so constitutes a
                                breach of the Terms, which may result in immediate termination of
                                your account.
                            </p>
                            <p>
                                You are responsible for safeguarding the password that you use to
                                access the application and for any activities or actions under your
                                password. You agree not to disclose your password to any third party.
                            </p>
                        </section>

                        <section className="legal__section">
                            <h2>4. Intellectual Property</h2>
                            <p>
                                The application and its original content, features, and functionality
                                are and will remain the exclusive property of the application owner.
                                The application is protected by copyright, trademark, and other laws.
                            </p>
                        </section>

                        <section className="legal__section">
                            <h2>5. Termination</h2>
                            <p>
                                We may terminate or suspend your account immediately, without prior
                                notice or liability, for any reason whatsoever, including without
                                limitation if you breach the Terms. Upon termination, your right to
                                use the application will immediately cease.
                            </p>
                        </section>

                        <section className="legal__section">
                            <h2>6. Limitation of Liability</h2>
                            <p>
                                In no event shall the application, nor its directors, employees,
                                partners, agents, suppliers, or affiliates, be liable for any
                                indirect, incidental, special, consequential, or punitive damages,
                                including without limitation, loss of profits, data, use, goodwill,
                                or other intangible losses.
                            </p>
                        </section>

                        <section className="legal__section">
                            <h2>7. Changes to Terms</h2>
                            <p>
                                We reserve the right, at our sole discretion, to modify or replace
                                these Terms at any time. By continuing to access or use our
                                application after those revisions become effective, you agree to be
                                bound by the revised terms.
                            </p>
                        </section>

                        <section className="legal__section">
                            <h2>8. Contact Us</h2>
                            <p>
                                If you have any questions about these Terms, please reach out
                                through our <a href="/contact">contact page</a>.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
};

export default Terms;
