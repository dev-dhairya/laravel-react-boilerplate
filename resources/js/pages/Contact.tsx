import React, { FormEvent } from 'react';
import { useForm, usePage } from '@inertiajs/react';
import GuestLayout from '@/layouts/GuestLayout';
import Seo from '@/components/Seo/Seo';
import Input from '@/components/ui/Input/Input';
import Textarea from '@/components/ui/Textarea/Textarea';
import Button from '@/components/ui/Button/Button';
import type { PageProps } from '@/types';

interface ContactPageProps extends PageProps {
    token: string;
}

interface ContactForm {
    name: string;
    email: string;
    description: string;
    website: string;
    _token_ts: string;
}

const Contact: React.FC = () => {
    const { flash, token } = usePage<ContactPageProps>().props;

    const { data, setData, post, processing, errors, reset } =
        useForm<ContactForm>({
            name: '',
            email: '',
            description: '',
            website: '',
            _token_ts: token,
        });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        post('/contact', {
            onSuccess: () => reset('name', 'email', 'description'),
        });
    };

    return (
        <GuestLayout>
            <Seo
                title="Contact Us"
                description="Get in touch with us. We'd love to hear your questions, feedback, or project ideas."
                path="/contact"
            />

            <div className="contact">
                <div className="contact__container">
                    <div className="contact__grid">
                        <div className="contact__info">
                            <h1 className="contact__title">Get in Touch</h1>
                            <p className="contact__subtitle">
                                Have a question, feedback, or just want to say hello?
                                Fill out the form and we&apos;ll get back to you as soon as
                                possible.
                            </p>

                            <div className="contact__details">
                                <div className="contact__detail">
                                    <div className="contact__detail-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="contact__detail-title">Location</h3>
                                        <p className="contact__detail-text">
                                            Ahmedabad, Gujarat, India
                                        </p>
                                    </div>
                                </div>

                                <div className="contact__detail">
                                    <div className="contact__detail-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10" />
                                            <polyline points="12 6 12 12 16 14" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="contact__detail-title">Response Time</h3>
                                        <p className="contact__detail-text">
                                            Within 24&ndash;48 hours
                                        </p>
                                    </div>
                                </div>

                                <div className="contact__detail">
                                    <div className="contact__detail-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="contact__detail-title">Privacy</h3>
                                        <p className="contact__detail-text">
                                            Your information is safe and never shared
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="contact__form-card">
                            {flash?.success && (
                                <div className="contact__success-banner">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                        <polyline points="22 4 12 14.01 9 11.01" />
                                    </svg>
                                    {flash.success}
                                </div>
                            )}

                            <form className="contact__form" onSubmit={handleSubmit}>
                                <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, overflow: 'hidden' }}>
                                    <label htmlFor="website">Website</label>
                                    <input
                                        type="text"
                                        id="website"
                                        name="website"
                                        value={data.website}
                                        onChange={(e) => setData('website', e.target.value)}
                                        tabIndex={-1}
                                        autoComplete="off"
                                    />
                                </div>

                                <input type="hidden" name="_token_ts" value={data._token_ts} />

                                <Input
                                    label="Full name"
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    error={errors.name}
                                    placeholder="John Doe"
                                    autoComplete="name"
                                    required
                                />

                                <Input
                                    label="Email address"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    error={errors.email}
                                    placeholder="you@example.com"
                                    autoComplete="email"
                                    required
                                />

                                <Textarea
                                    label="Message"
                                    name="description"
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                    error={errors.description}
                                    placeholder="Tell us what you're thinking..."
                                    rows={5}
                                    required
                                />

                                <Button
                                    type="submit"
                                    variant="primary"
                                    fullWidth
                                    loading={processing}
                                >
                                    Send Message
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
};

export default Contact;
