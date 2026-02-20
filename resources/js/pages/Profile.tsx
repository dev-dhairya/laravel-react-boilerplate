import React, { FormEvent } from 'react';
import { Head, useForm, usePage } from '@inertiajs/react';
import GuestLayout from '@/layouts/GuestLayout';
import Input from '@/components/ui/Input/Input';
import Button from '@/components/ui/Button/Button';
import type { PageProps, User } from '@/types';

interface ProfilePageProps extends PageProps {
    user: User;
}

interface PasswordForm {
    current_password: string;
    password: string;
    password_confirmation: string;
}

const Profile: React.FC = () => {
    const { user, flash } = usePage<ProfilePageProps>().props;

    const { data, setData, put, processing, errors, reset } =
        useForm<PasswordForm>({
            current_password: '',
            password: '',
            password_confirmation: '',
        });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        put('/profile/password', {
            onSuccess: () => reset(),
        });
    };

    return (
        <GuestLayout>
            <Head title="Profile" />

            <div className="profile">
                <div className="profile__container">
                    <div className="profile__header">
                        <div className="profile__avatar">
                            {user.name.charAt(0).toUpperCase()}
                        </div>
                        <div className="profile__info">
                            <h1 className="profile__name">{user.name}</h1>
                            <p className="profile__email">{user.email}</p>
                        </div>
                    </div>

                    <div className="profile__section">
                        <div className="profile__section-header">
                            <h2 className="profile__section-title">
                                Account Information
                            </h2>
                            <p className="profile__section-description">
                                Your personal details associated with this account.
                            </p>
                        </div>

                        <div className="profile__details">
                            <div className="profile__detail-row">
                                <span className="profile__detail-label">Name</span>
                                <span className="profile__detail-value">{user.name}</span>
                            </div>
                            <div className="profile__detail-row">
                                <span className="profile__detail-label">Email</span>
                                <span className="profile__detail-value">{user.email}</span>
                            </div>
                            <div className="profile__detail-row">
                                <span className="profile__detail-label">Member since</span>
                                <span className="profile__detail-value">
                                    {new Date(user.created_at).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    })}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="profile__section">
                        <div className="profile__section-header">
                            <h2 className="profile__section-title">
                                Change Password
                            </h2>
                            <p className="profile__section-description">
                                Ensure your account stays secure by using a strong password.
                            </p>
                        </div>

                        {flash?.success && (
                            <div className="profile__success-banner">
                                {flash.success}
                            </div>
                        )}

                        <form className="profile__form" onSubmit={handleSubmit}>
                            <Input
                                label="Current password"
                                type="password"
                                name="current_password"
                                value={data.current_password}
                                onChange={(e) => setData('current_password', e.target.value)}
                                error={errors.current_password}
                                placeholder="Enter your current password"
                                autoComplete="current-password"
                                required
                            />

                            <Input
                                label="New password"
                                type="password"
                                name="password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                error={errors.password}
                                placeholder="Min. 8 characters"
                                autoComplete="new-password"
                                required
                            />

                            <Input
                                label="Confirm new password"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                error={errors.password_confirmation}
                                placeholder="Re-enter new password"
                                autoComplete="new-password"
                                required
                            />

                            <div className="profile__form-actions">
                                <Button
                                    type="submit"
                                    variant="primary"
                                    loading={processing}
                                >
                                    Update Password
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
};

export default Profile;
