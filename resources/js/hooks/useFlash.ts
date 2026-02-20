import { usePage } from '@inertiajs/react';
import type { PageProps } from '@/types';

interface UseFlashReturn {
    success: string | undefined;
    error: string | undefined;
    hasFlash: boolean;
}

export function useFlash(): UseFlashReturn {
    const { flash } = usePage<PageProps>().props;

    return {
        success: flash?.success,
        error: flash?.error,
        hasFlash: Boolean(flash?.success || flash?.error),
    };
}
