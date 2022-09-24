import set from 'lodash/set';
import unset from 'lodash/unset';
import get from 'lodash/get';

/**
 * Store using memory
 *
 * @example
 *
 * import { memoryStore } from '../core/store';
 *
 * const App = () => (
 *    <CarnetVisite store={memoryStore()}>
 *       ...
 *   </CarnetVisite>
 * );
 */
export const memoryStore = (storage= {}) => {
    const subscriptions = {};
    const publish = (key, value) => {
        Object.keys(subscriptions).forEach(id => {
            if (!subscriptions[id]) return; // may happen if a component unmounts after a first subscriber was notified
            if (subscriptions[id].key === key) {
                subscriptions[id].callback(value);
            }
        });
    };
    return {
        setup: () => {},
        teardown: () => {
            Object.keys(storage).forEach(key => delete storage[key]);
        },
        getItem(key, defaultValue) {
            return get(storage, key, defaultValue);
        },
        setItem(key, value) {
            set(storage, key, value);
            publish(key, value);
        },
        removeItem(key) {
            unset(storage, key);
            publish(key, undefined);
        },
        reset() {
            Object.keys(storage).forEach(key => {
                unset(storage, key);
                publish(key, undefined);
            });
        },
        subscribe: (key, callback) => {
            const id = Math.random().toString();
            subscriptions[id] = {
                key,
                callback,
            };
            return () => {
                delete subscriptions[id];
            };
        },
    };
};