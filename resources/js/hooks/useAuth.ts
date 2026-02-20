import { usePage } from '@inertiajs/react';
import type { PageProps, User } from '@/types';

interface UseAuthReturn {
    user: User | null;
    isAuthenticated: boolean;
}

export function useAuth(): UseAuthReturn {
    const { auth } = usePage<PageProps>().props;

    return {
        user: auth.user,
        isAuthenticated: auth.user !== null,
    };
}
