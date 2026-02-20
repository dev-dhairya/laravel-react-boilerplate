import React from 'react';
import GuestLayout from '@/layouts/GuestLayout';
import Seo from '@/components/Seo/Seo';

const Privacy: React.FC = () => {
    return (
        <GuestLayout>
            <Seo
                title="Privacy Policy"
                description="Learn how we collect, use, and protect your personal information when you use our application."
                path="/privacy"
            />

            <div className="legal">
                <div className="legal__container">
                    <div className="legal__header">
                        <h1 className="legal__title">Privacy Policy</h1>
                        <p className="legal__updated">Last updated: February 20, 2026</p>
                    </div>

                    <div className="legal__content">
                        <section className="legal__section">
                            <h2>1. Information We Collect</h2>
                            <p>
                                We collect information you provide directly to us when you create an
                                account, including your name, email address, and password. We also
                                collect information automatically when you use the application.
                            </p>
                            <h3>Personal Information</h3>
                            <ul>
                                <li>Name and email address (when you register)</li>
                                <li>Account credentials (securely hashed)</li>
                                <li>Usage data and interaction logs</li>
                            </ul>
                            <h3>Automatically Collected Information</h3>
                            <ul>
                                <li>IP address and browser type</li>
                                <li>Device information and operating system</li>
                                <li>Pages visited and time spent on the application</li>
                                <li>Cookies and similar tracking technologies</li>
                            </ul>
                        </section>

                        <section className="legal__section">
                            <h2>2. How We Use Your Information</h2>
                            <p>We use the information we collect to:</p>
                            <ul>
                                <li>Provide, maintain, and improve our application</li>
                                <li>Create and manage your account</li>
                                <li>Send you technical notices and security alerts</li>
                                <li>Respond to your comments, questions, and requests</li>
                                <li>Monitor and analyze trends, usage, and activities</li>
                                <li>Detect, investigate, and prevent fraudulent transactions and abuse</li>
                            </ul>
                        </section>

                        <section className="legal__section">
                            <h2>3. Information Sharing</h2>
                            <p>
                                We do not sell, trade, or rent your personal information to third
                                parties. We may share your information only in the following
                                circumstances:
                            </p>
                            <ul>
                                <li>With your consent or at your direction</li>
                                <li>To comply with legal obligations or law enforcement requests</li>
                                <li>To protect the rights, property, and safety of our users and the public</li>
                                <li>In connection with a merger, acquisition, or sale of assets</li>
                            </ul>
                        </section>

                        <section className="legal__section">
                            <h2>4. Data Security</h2>
                            <p>
                                We take reasonable measures to help protect your personal information
                                from loss, theft, misuse, and unauthorized access. All passwords are
                                hashed using industry-standard algorithms, and data is transmitted
                                over encrypted connections (HTTPS).
                            </p>
                        </section>

                        <section className="legal__section">
                            <h2>5. Cookies</h2>
                            <p>
                                We use cookies and similar technologies to maintain your session,
                                remember your preferences, and understand how you interact with our
                                application. You can configure your browser to refuse cookies, but
                                some features of the application may not function properly.
                            </p>
                        </section>

                        <section className="legal__section">
                            <h2>6. Your Rights</h2>
                            <p>You have the right to:</p>
                            <ul>
                                <li>Access the personal data we hold about you</li>
                                <li>Request correction of inaccurate data</li>
                                <li>Request deletion of your data</li>
                                <li>Object to processing of your data</li>
                                <li>Request data portability</li>
                                <li>Withdraw consent at any time</li>
                            </ul>
                        </section>

                        <section className="legal__section">
                            <h2>7. Data Retention</h2>
                            <p>
                                We retain your personal information for as long as your account is
                                active or as needed to provide you services. We will retain and use
                                your information as necessary to comply with our legal obligations,
                                resolve disputes, and enforce our agreements.
                            </p>
                        </section>

                        <section className="legal__section">
                            <h2>8. Changes to This Policy</h2>
                            <p>
                                We may update this privacy policy from time to time. We will notify
                                you of any changes by posting the new policy on this page and
                                updating the &quot;Last updated&quot; date.
                            </p>
                        </section>

                        <section className="legal__section">
                            <h2>9. Contact Us</h2>
                            <p>
                                If you have any questions about this Privacy Policy, please reach
                                out through our <a href="/contact">contact page</a>.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
};

export default Privacy;
