import * as React from 'react';
import { useCallback } from 'react';

// allow the hook to work in SSR
const useLayoutEffect =
    typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

/**
 * Alternative to useCallback that doesn't update the callback when dependencies change
 *
 * @see https://reactjs.org/docs/hooks-faq.html#how-to-read-an-often-changing-value-from-usecallback
 * @see https://github.com/facebook/react/issues/14099#issuecomment-440013892
 */
export const useEventCallback = (
    fn,
    dependencies
) => {
    const ref = React.useRef(() => {
        throw new Error('Cannot call an event handler while rendering.');
    });

    useLayoutEffect(() => {
        ref.current = fn;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fn, ...dependencies]);

    return useCallback((...args) => ref.current(...args), []);
};