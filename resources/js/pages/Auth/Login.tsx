import React, { FormEvent } from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import AuthLayout from '@/layouts/AuthLayout';
import Input from '@/components/ui/Input/Input';
import Button from '@/components/ui/Button/Button';

interface LoginForm {
    email: string;
    password: string;
    remember: boolean;
}

const Login: React.FC = () => {
    const { data, setData, post, processing, errors, reset } =
        useForm<LoginForm>({
            email: '',
            password: '',
            remember: false,
        });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        post('/login', {
            onFinish: () => reset('password'),
        });
    };

    return (
        <AuthLayout>
            <Head title="Sign In" />

            <div className="login">
                <h1 className="login__title">Sign in to your account</h1>
                <p className="login__subtitle">
                    Welcome back! Please enter your credentials.
                </p>

                {errors.email && !data.email && (
                    <div className="login__error-banner">{errors.email}</div>
                )}

                <form className="login__form" onSubmit={handleSubmit}>
                    <Input
                        label="Email address"
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        error={errors.email}
                        placeholder="you@example.com"
                        autoComplete="email"
                        autoFocus
                        required
                    />

                    <Input
                        label="Password"
                        type="password"
                        name="password"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        error={errors.password}
                        placeholder="Enter your password"
                        autoComplete="current-password"
                        required
                    />

                    <div className="login__remember">
                        <label className="login__checkbox-label">
                            <input
                                type="checkbox"
                                checked={data.remember}
                                onChange={(e) =>
                                    setData('remember', e.target.checked)
                                }
                            />
                            Remember me
                        </label>
                        <Link href="#" className="login__forgot-link">
                            Forgot password?
                        </Link>
                    </div>

                    <Button
                        type="submit"
                        variant="primary"
                        fullWidth
                        loading={processing}
                    >
                        Sign In
                    </Button>
                </form>

                <div className="login__divider">or</div>

                <p className="login__signup">
                    Don&apos;t have an account?{' '}
                    <Link href="/register">Create one</Link>
                </p>
            </div>
        </AuthLayout>
    );
};

export default Login;
