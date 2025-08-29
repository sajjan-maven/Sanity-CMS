'use client';

import { useEffect, useCallback, useRef } from 'react';

interface UseInfiniteScrollProps {
    hasMore: boolean;
    isLoading: boolean;
    onLoadMore: () => void;
    threshold?: number;
    rootMargin?: string;
}

export function useInfiniteScroll({
    hasMore,
    isLoading,
    onLoadMore,
    threshold = 0.1,
    rootMargin = '0px'
}: UseInfiniteScrollProps) {
    const sentinelRef = useRef<HTMLDivElement>(null);
    const observerRef = useRef<IntersectionObserver | null>(null);
    const isLoadingRef = useRef(isLoading);
    const hasMoreRef = useRef(hasMore);

    // Keep refs updated with current values
    useEffect(() => {
        isLoadingRef.current = isLoading;
        hasMoreRef.current = hasMore;
    }, [isLoading, hasMore]);

    // Create a stable callback that uses refs instead of props
    const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
        const [entry] = entries;
        if (entry.isIntersecting && hasMoreRef.current && !isLoadingRef.current) {
            onLoadMore();
        }
    }, [onLoadMore]);

    useEffect(() => {
        if (!sentinelRef.current) return;

        // Disconnect previous observer if it exists
        if (observerRef.current) {
            observerRef.current.disconnect();
        }

        const observer = new IntersectionObserver(handleObserver, {
            root: null,
            rootMargin,
            threshold,
        });

        observer.observe(sentinelRef.current);
        observerRef.current = observer;

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
                observerRef.current = null;
            }
        };
    }, [handleObserver, rootMargin, threshold]);

    return { sentinelRef };
}