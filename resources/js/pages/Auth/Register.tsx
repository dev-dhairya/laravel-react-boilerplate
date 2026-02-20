import React, { FormEvent } from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import AuthLayout from '@/layouts/AuthLayout';
import Input from '@/components/ui/Input/Input';
import Button from '@/components/ui/Button/Button';

interface RegisterForm {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

const Register: React.FC = () => {
    const { data, setData, post, processing, errors, reset } =
        useForm<RegisterForm>({
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
        });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        post('/register', {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <AuthLayout>
            <Head title="Create Account" />

            <div className="register">
                <h1 className="register__title">Create your account</h1>
                <p className="register__subtitle">
                    Get started with your free account today.
                </p>

                <form className="register__form" onSubmit={handleSubmit}>
                    <Input
                        label="Full name"
                        type="text"
                        name="name"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        error={errors.name}
                        placeholder="John Doe"
                        autoComplete="name"
                        autoFocus
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

                    <Input
                        label="Password"
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
                        label="Confirm password"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        onChange={(e) =>
                            setData('password_confirmation', e.target.value)
                        }
                        error={errors.password_confirmation}
                        placeholder="Re-enter your password"
                        autoComplete="new-password"
                        required
                    />

                    <div className="register__terms">
                        <label className="register__checkbox-label">
                            <input type="checkbox" required />
                            I agree to the{' '}
                            <a href="#" className="register__terms-link">
                                Terms of Service
                            </a>{' '}
                            and{' '}
                            <a href="#" className="register__terms-link">
                                Privacy Policy
                            </a>
                        </label>
                    </div>

                    <Button
                        type="submit"
                        variant="primary"
                        fullWidth
                        loading={processing}
                    >
                        Create Account
                    </Button>
                </form>

                <div className="register__divider">or</div>

                <p className="register__signin">
                    Already have an account?{' '}
                    <Link href="/login">Sign in</Link>
                </p>
            </div>
        </AuthLayout>
    );
};

export default Register;
