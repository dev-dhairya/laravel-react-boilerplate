# Laravel + React Boilerplate

A scalable, production-ready web application boilerplate built with **Laravel 12**, **React 19**, **TypeScript**, **Inertia.js**, and **SCSS (BEM methodology)**.

> Developed by **[Dhairya Bhavsar](https://github.com/dev-dhairya)** -- Open source and free to use for any project.

## Tech Stack

| Layer      | Technology                                      |
|------------|------------------------------------------------|
| Backend    | Laravel 12, PHP 8.2+                           |
| Frontend   | React 19, TypeScript 5.9                       |
| Bridge     | Inertia.js v2 (server-driven SPA)              |
| Database   | MySQL 8.0+                                     |
| Styling    | Pure SCSS with BEM methodology                 |
| Bundler    | Vite 7 with HMR                                |

---

## Getting Started

### Prerequisites

- PHP >= 8.2
- Composer >= 2.x
- Node.js >= 18
- npm >= 9
- MySQL >= 8.0

### Installation

```bash
# 1. Clone the repository
git clone <your-repo-url> && cd <project-folder>

# 2. Install PHP dependencies
composer install

# 3. Install Node dependencies
npm install

# 4. Set up environment
cp .env.example .env
php artisan key:generate

# 5. Configure your database in .env
#    DB_CONNECTION=mysql
#    DB_HOST=127.0.0.1
#    DB_PORT=3306
#    DB_DATABASE=laravel
#    DB_USERNAME=root
#    DB_PASSWORD=your_password

# 6. Run migrations
php artisan migrate

# 7. Start development servers (run in separate terminals)
php artisan serve     # Laravel backend  → http://localhost:8000
npm run dev           # Vite dev server  → HMR on :5173
```

Open **http://localhost:8000** in your browser.

---

## Project Structure

```
├── app/
│   ├── Http/
│   │   ├── Controllers/
│   │   │   ├── Auth/
│   │   │   │   ├── LoginController.php       # Login / Logout
│   │   │   │   └── RegisterController.php    # Registration (honeypot + timestamp protection)
│   │   │   ├── ContactController.php         # Contact form (honeypot + timestamp protection)
│   │   │   ├── HomeController.php            # Homepage
│   │   │   ├── PageController.php            # Static pages (Terms, Privacy)
│   │   │   └── ProfileController.php         # Profile & password change
│   │   ├── Middleware/
│   │   │   └── HandleInertiaRequests.php     # Shared Inertia props (auth, flash, appUrl)
│   │   └── Requests/
│   │       ├── Auth/
│   │       │   ├── LoginRequest.php          # Login validation + rate limiting
│   │       │   └── RegisterRequest.php       # Registration validation + honeypot
│   │       ├── ContactRequest.php            # Contact form validation + honeypot
│   │       └── Profile/
│   │           └── ChangePasswordRequest.php # Password change validation
│   └── Models/
│       ├── Contact.php                       # Contact form submissions
│       └── User.php                          # User model
│
├── resources/
│   ├── js/
│   │   ├── app.tsx                           # Inertia entry point
│   │   ├── types/                            # TypeScript type definitions
│   │   │   ├── index.d.ts                    # User, PageProps, PaginatedData
│   │   │   └── vite-env.d.ts                 # Vite environment types
│   │   ├── hooks/                            # Custom React hooks
│   │   │   ├── useAuth.ts                    # Access auth user
│   │   │   └── useFlash.ts                   # Access flash messages
│   │   ├── layouts/                          # Page layout wrappers
│   │   │   ├── GuestLayout.tsx               # Header + content + Footer
│   │   │   └── AuthLayout.tsx                # Split-screen layout for auth pages
│   │   ├── components/                       # Reusable components
│   │   │   ├── ui/                           # Primitive UI components
│   │   │   │   ├── Button/Button.tsx         # Button with variants & sizes
│   │   │   │   ├── Input/Input.tsx           # Form field with label & error
│   │   │   │   ├── Textarea/Textarea.tsx     # Textarea with label & error
│   │   │   │   └── Logo/Logo.tsx             # Brand logo
│   │   │   ├── Seo/Seo.tsx                   # SEO meta tags, OG tags, canonical
│   │   │   ├── Header/Header.tsx             # Sticky header + user dropdown
│   │   │   ├── Footer/Footer.tsx             # Site footer
│   │   │   └── Hero/Hero.tsx                 # Landing page hero
│   │   └── pages/                            # Inertia page components
│   │       ├── Home.tsx                      # Homepage
│   │       ├── Contact.tsx                   # Contact Us form
│   │       ├── Profile.tsx                   # User profile + change password
│   │       ├── Auth/
│   │       │   ├── Login.tsx                 # Sign in form
│   │       │   └── Register.tsx              # Sign up form
│   │       └── Legal/
│   │           ├── Terms.tsx                 # Terms & Conditions
│   │           └── Privacy.tsx               # Privacy Policy
│   │
│   ├── scss/                                 # SCSS with BEM methodology
│   │   ├── app.scss                          # Main entry (imports everything)
│   │   ├── abstracts/                        # Variables, mixins, functions (no CSS output)
│   │   │   ├── _variables.scss               # Design tokens (colors, spacing, fonts)
│   │   │   ├── _breakpoints.scss             # Responsive breakpoint mixins
│   │   │   ├── _mixins.scss                  # Reusable mixins (flex-center, container, etc.)
│   │   │   ├── _functions.scss               # SCSS helper functions
│   │   │   └── _index.scss                   # Forwards all abstracts
│   │   ├── base/                             # Reset, typography, global styles
│   │   ├── components/                       # BEM component styles
│   │   ├── layouts/                          # Layout-specific styles
│   │   └── pages/                            # Page-specific styles
│   │
│   └── views/
│       └── app.blade.php                     # Inertia root template (SEO defaults, favicons)
│
├── public/
│   └── robots.txt                            # Search engine crawl rules
│
├── routes/
│   └── web.php                               # All routes + sitemap.xml
│
├── vite.config.ts                            # Vite + React + SCSS configuration
└── tsconfig.json                             # TypeScript configuration
```

---

## How It Works

### Inertia.js Flow

This project uses **Inertia.js** to bridge Laravel and React. There is no separate API -- Laravel controllers return Inertia responses that render React components directly.

```
Browser Request → Laravel Route → Controller → Inertia::render('PageName', $props)
                                                        ↓
                                              React page component receives props
```

- **Server side**: Controllers return `Inertia::render('PageName', [...data])`.
- **Client side**: Inertia resolves the page component from `resources/js/pages/` and hydrates it with the data as React props.
- **Navigation**: Uses `<Link href="...">` from `@inertiajs/react` for SPA-like transitions without full page reloads.

### Shared Data

Every page automatically receives these props via `HandleInertiaRequests` middleware:

```typescript
{
    auth: { user: User | null },  // Current authenticated user
    flash: { success?, error? },  // Flash messages from redirects
    appName: string,              // Application name
    appUrl: string                // Base URL (used by SEO component)
}
```

---

## Adding a New Feature (Step-by-Step Guide)

Follow these steps whenever you add a new page or feature.

### Example: Adding a "Dashboard" page

#### Step 1: Create the Controller

```bash
php artisan make:controller DashboardController
```

```php
// app/Http/Controllers/DashboardController.php
<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Dashboard', [
            'stats' => [
                'users' => \App\Models\User::count(),
            ],
        ]);
    }
}
```

#### Step 2: Add the Route

```php
// routes/web.php
use App\Http\Controllers\DashboardController;

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
});
```

#### Step 3: Create the React Page

Create `resources/js/pages/Dashboard.tsx`:

```tsx
import React from 'react';
import GuestLayout from '@/layouts/GuestLayout';
import Seo from '@/components/Seo/Seo';

interface DashboardProps {
    stats: { users: number };
}

const Dashboard: React.FC<DashboardProps> = ({ stats }) => {
    return (
        <GuestLayout>
            <Seo
                title="Dashboard"
                description="View your project statistics and activity."
                path="/dashboard"
            />
            <div className="dashboard">
                <h1 className="dashboard__title">Dashboard</h1>
                <p>Total users: {stats.users}</p>
            </div>
        </GuestLayout>
    );
};

export default Dashboard;
```

#### Step 4: Create the BEM Stylesheet

Create `resources/scss/pages/_dashboard.scss`:

```scss
@use '../abstracts' as *;

.dashboard {
    padding: $spacing-16 0;

    &__container {
        @include container;
    }

    &__title {
        font-size: $font-size-3xl;
        font-weight: $font-weight-bold;
        color: $color-secondary;
        margin-bottom: $spacing-8;
    }
}
```

#### Step 5: Register the Stylesheet

Add the import to `resources/scss/app.scss`:

```scss
@use 'pages/dashboard';
```

That's it -- Vite HMR picks up the new page automatically.

---

## SCSS / BEM Conventions

### BEM Naming

Every component follows the **Block__Element--Modifier** pattern:

```scss
.card {                    // Block
    &__title { }           // Element: .card__title
    &__description { }     // Element: .card__description
    &--featured { }        // Modifier: .card--featured
}
```

### Using Variables and Mixins

Every SCSS partial must import abstracts at the top:

```scss
@use '../abstracts' as *;
```

This gives you access to all variables (`$color-primary`, `$spacing-4`), mixins (`@include container`, `@include respond-to('md')`), and functions.

### Available Mixins

| Mixin | Usage |
|-------|-------|
| `@include container` | Centered max-width container with padding |
| `@include flex-center` | `display: flex` centered both axes |
| `@include flex-between` | `display: flex` with `space-between` |
| `@include respond-to('md')` | Media query for min-width breakpoint |
| `@include respond-below('md')` | Media query for max-width breakpoint |
| `@include transition(color, background-color)` | Smooth transitions |
| `@include text-truncate` | Single-line ellipsis overflow |
| `@include input-base` | Base form input styling |
| `@include focus-ring` | Accessible focus outline |

### Breakpoints

| Name | Width |
|------|-------|
| `sm` | 640px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1280px |
| `2xl` | 1536px |

### Adding a New Component Style

1. Create `resources/scss/components/_card.scss`
2. Start with `@use '../abstracts' as *;`
3. Write BEM styles
4. Import in `resources/scss/app.scss`: `@use 'components/card';`

---

## Path Aliases

TypeScript and Vite are configured with these aliases:

| Alias | Resolves to |
|-------|-------------|
| `@/` | `resources/js/` |
| `@scss/` | `resources/scss/` |

Usage in components:

```tsx
import Button from '@/components/ui/Button/Button';
import { useAuth } from '@/hooks/useAuth';
```

---

## Available Routes

| Method | URI | Name | Controller | Auth |
|--------|-----|------|------------|------|
| GET | `/` | home | HomeController@index | No |
| GET | `/terms` | terms | PageController@terms | No |
| GET | `/privacy` | privacy | PageController@privacy | No |
| GET | `/contact` | contact | ContactController@create | No |
| POST | `/contact` | — | ContactController@store | No (rate limited) |
| GET | `/sitemap.xml` | — | Closure | No |
| GET | `/login` | login | LoginController@create | Guest |
| POST | `/login` | — | LoginController@store | Guest |
| GET | `/register` | register | RegisterController@create | Guest |
| POST | `/register` | — | RegisterController@store | Guest (rate limited) |
| POST | `/logout` | logout | LoginController@destroy | Yes |
| GET | `/profile` | profile | ProfileController@edit | Yes |
| PUT | `/profile/password` | profile.password | ProfileController@changePassword | Yes |

---

## SEO

Every page uses a reusable `<Seo>` component (`resources/js/components/Seo/Seo.tsx`) that renders all essential SEO tags via Inertia's `<Head>`.

### Usage

```tsx
<Seo
    title="Contact Us"
    description="Get in touch with us."
    path="/contact"
/>
```

### Available Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | *required* | Page title (appended with app name) |
| `description` | `string` | Boilerplate tagline | Meta description |
| `path` | `string` | — | URL path for canonical + og:url |
| `ogType` | `'website' \| 'article'` | `'website'` | Open Graph type |
| `ogImage` | `string` | `/images/og-default.png` | OG image path |
| `noIndex` | `boolean` | `false` | Adds `noindex, nofollow` for private pages |

### What Gets Rendered

Each page automatically gets:
- `<meta name="description">` — unique per page
- `<link rel="canonical">` — prevents duplicate content
- `og:title`, `og:description`, `og:url`, `og:image`, `og:site_name`, `og:type`, `og:locale`
- `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- Optional `robots` noindex for private pages (e.g., Profile)

### Sitemap & Robots

- **`/sitemap.xml`** — Dynamic XML sitemap with all public pages, served via a route
- **`public/robots.txt`** — Allows crawling of public pages, blocks `/profile`, `/login`, `/register`

### OG Image

Place your Open Graph default image at `public/images/og-default.png` (recommended size: 1200×630px). Override per-page with the `ogImage` prop.

---

## Form Security

Public forms (Contact, Register) are protected with three layers of anti-spam security:

### 1. Rate Limiting

Laravel's `throttle` middleware limits form submissions per IP:

| Form | Limit |
|------|-------|
| Contact | 3 submissions per 10 minutes |
| Register | 5 submissions per 10 minutes |
| Login | Uses `LoginRequest` built-in rate limiting |

Exceeding the limit returns a `429 Too Many Requests` response.

### 2. Honeypot Fields

Each form includes a hidden field (invisible to real users, auto-filled by bots):

| Form | Honeypot Field |
|------|----------------|
| Contact | `website` |
| Register | `company` |

If a bot fills the honeypot, the server silently returns a fake success — nothing is saved.

### 3. Encrypted Timestamp Trap

When a page loads, the server sends an encrypted timestamp. On form submission:
- The controller decrypts it and checks if **at least 3 seconds** have passed
- Instant submissions (bots) and tampered tokens are rejected

### Adding Security to a New Form

1. In the controller's `create` method, pass `'token' => encrypt(now()->timestamp)`
2. Add a honeypot field and hidden `_token_ts` input to the React form
3. In the `store` method, check the honeypot and decrypt/validate the timestamp
4. Add `throttle` middleware to the POST route

---

## Contact Form

The Contact Us page (`/contact`) allows visitors to send messages. Submissions are stored in the `contacts` database table.

### Database Schema (`contacts` table)

| Column | Type | Description |
|--------|------|-------------|
| `id` | bigint | Primary key |
| `name` | string | Sender's full name |
| `email` | string | Sender's email address |
| `description` | text | Message content (min 10 chars, max 5000) |
| `is_read` | boolean | Read status (default: `false`) |
| `created_at` | timestamp | Submission time |
| `updated_at` | timestamp | Last update time |

Submissions can be viewed by querying the database directly or by building an admin panel.

---

## Common Commands

```bash
# Development
php artisan serve              # Start Laravel server
npm run dev                    # Start Vite dev server with HMR
php artisan make:controller    # Generate a controller
php artisan make:model         # Generate a model with -m for migration
php artisan make:request       # Generate a form request
php artisan migrate            # Run pending migrations
php artisan migrate:rollback   # Rollback last migration batch
php artisan route:list         # Show all registered routes
php artisan tinker             # Interactive REPL

# Code Quality
npx tsc --noEmit               # TypeScript type checking
./vendor/bin/pint              # PHP code formatting (Laravel Pint)
php artisan test               # Run PHPUnit tests

# Build
npm run build                  # Production build (outputs to public/build/)
```

---

## Deployment

### Requirements

| Software | Version |
|----------|---------|
| PHP | >= 8.2 |
| Composer | >= 2.x |
| Node.js | >= 18 (build step only) |
| MySQL | >= 8.0 |
| Web server | Nginx (recommended) or Apache |

### Platform Options

| Option | Best For | Cost |
|--------|----------|------|
| [Laravel Cloud](https://cloud.laravel.com) | Zero-config, official | Varies |
| [Laravel Forge](https://forge.laravel.com) + VPS | Best balance of control + convenience | ~$18/mo |
| DigitalOcean / Hetzner VPS | Budget, full control | ~$4-6/mo |
| AWS (EC2 + RDS) | Enterprise scale | Varies |

### Deployment Steps

#### 1. Build frontend assets (locally or in CI)

```bash
npm ci
npm run build
```

This generates `public/build/` with compiled JS and CSS. Commit this or run it in your CI pipeline.

#### 2. Upload code to server

```bash
git push origin main
# On server:
cd /var/www/your-app
git pull origin main
```

#### 3. Install dependencies and optimize

```bash
composer install --optimize-autoloader --no-dev
```

#### 4. Configure environment

```bash
cp .env.example .env
# Edit .env with production values:
#   APP_ENV=production
#   APP_DEBUG=false
#   APP_URL=https://yourdomain.com
#   DB_DATABASE=your_db
#   DB_USERNAME=your_user
#   DB_PASSWORD=your_password

php artisan key:generate
```

#### 5. Run migrations and cache

```bash
php artisan migrate --force
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

#### 6. Set permissions

```bash
chown -R www-data:www-data storage bootstrap/cache
chmod -R 775 storage bootstrap/cache
```

#### 7. Nginx configuration

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/your-app/public;

    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-Content-Type-Options "nosniff";

    index index.php;
    charset utf-8;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    error_page 404 /index.php;

    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.3-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\.(?!well-known).* {
        deny all;
    }
}
```

#### 8. Set up SSL (Let's Encrypt)

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

### CI/CD Quick Reference

For automated deployments, your pipeline should run:

```bash
npm ci && npm run build          # Build frontend
composer install --no-dev        # Install PHP deps
php artisan migrate --force      # Run migrations
php artisan config:cache         # Cache config
php artisan route:cache          # Cache routes
php artisan view:cache           # Cache views
```

> **Note:** Node.js is only needed during the build step. The production server only requires PHP, Nginx, and MySQL.

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Vite page at `:5173` | That's the HMR server. Visit `:8000` (Laravel) instead |
| MySQL access denied | Check `DB_PASSWORD` in `.env` matches your MySQL password |
| SCSS variable undefined | Ensure the file has `@use '../abstracts' as *;` at the top |
| Page not found (404) | Check `routes/web.php` and ensure the page file exists in `resources/js/pages/` |
| TypeScript errors | Run `npx tsc --noEmit` to see all type errors |
| Styles not updating | Make sure the SCSS file is imported in `resources/scss/app.scss` |

---

## Contributing

Contributions are welcome! If you'd like to improve this boilerplate:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure your code follows the existing conventions: BEM for SCSS, TypeScript for all frontend code, and Laravel best practices for the backend.

## License

This project is open-sourced software licensed under the [MIT License](LICENSE).

## Author

**Dhairya Bhavsar**

- GitHub: [@dhairya-bhavsar](https://github.com/dev-dhairya)

---

If this boilerplate helped you, give it a star on GitHub!
