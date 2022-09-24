
const CARNET_VISITE_STORE = 'CarnetVisiteStore';

// localStorage isn't available in incognito mode. We need to detect it
const testLocalStorage = () => {
    if (typeof window === 'undefined' || window.localStorage === undefined) {
        return false;
    }

    try {
        window.localStorage.setItem('test', 'test');
        window.localStorage.removeItem('test');
        return true;
    } catch (e) {
        return false;
    }
};

let localStorageAvailable = testLocalStorage();

/**
 * Store using localStorage, or memory storage in incognito mode
 *
 * @example
 *
 * import { localStorageProvider } from 'react-admin';
 *
 * const App = () => (
 *    <Admin store={localStorageProvider()}>
 *       ...
 *   </Admin>
 * );
 */
export const localStorageStore = (
    version = '1',
    appKey = ''
) => {
    const prefix = `${CARNET_VISITE_STORE}${appKey}`;
    const prefixLength = prefix.length;
    const subscriptions= {};
    const publish = (key, value) => {
        Object.keys(subscriptions).forEach(id => {
            if (!subscriptions[id]) return; // may happen if a component unmounts after a first subscriber was notified
            if (subscriptions[id].key === key) {
                subscriptions[id].callback(value);
            }
        });
    };

    // Whenever the local storage changes in another document, look for matching subscribers.
    // This allows to synchronize state across tabs
    const onLocalStorageChange = (event) => {
        if (event.key?.substring(0, prefixLength) !== prefix) {
            return;
        }
        const key = event.key.substring(prefixLength + 1);
        const value = event.newValue ? tryParse(event.newValue) : undefined;
        Object.keys(subscriptions).forEach(id => {
            if (!subscriptions[id]) return; // may happen if a component unmounts after a first subscriber was notified
            if (subscriptions[id].key === key) {
                if (value === null) {
                    // an event with a null value is sent when the key is deleted.
                    // to enable default value, we need to call setValue(undefined) instead of setValue(null)
                    subscriptions[id].callback(undefined);
                } else {
                    subscriptions[id].callback(
                        value === null ? undefined : value
                    );
                }
            }
        });
    };

    return {
        setup: () => {
            if (localStorageAvailable) {
                const storedVersion = getStorage().getItem(`${prefix}.version`);
                if (storedVersion && storedVersion !== version) {
                    getStorage().clear();
                }
                getStorage().setItem(`${prefix}.version`, version);
                window.addEventListener('storage', onLocalStorageChange);
            }
        },
        teardown: () => {
            if (localStorageAvailable) {
                window.removeEventListener('storage', onLocalStorageChange);
            }
        },
        getItem(key, defaultValue){
            const valueFromStorage = getStorage().getItem(`${prefix}.${key}`);

            return valueFromStorage === null
                ? defaultValue
                : tryParse(valueFromStorage);
        },
        setItem(key, value) {
            if (value === undefined) {
                getStorage().removeItem(`${prefix}.${key}`);
            } else {
                getStorage().setItem(`${prefix}.${key}`, JSON.stringify(value));
            }
            publish(key, value);
        },
        removeItem(key) {
            getStorage().removeItem(`${prefix}.${key}`);
            publish(key, undefined);
        },
        reset() {
            const storage = getStorage();
            Object.keys(storage).forEach(key => {
                if (key.startsWith(prefix)) {
                    storage.removeItem(key);
                    const publishKey = key.substring(prefixLength + 1);
                    publish(publishKey, undefined);
                }
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

const tryParse = (value) => {
    try {
        return JSON.parse(value);
    } catch (e) {
        return value;
    }
};
class LocalStorageShim {
    valuesMap = new Map();

    getItem(key) {
        if (this.valuesMap.has(key)) {
            return String(this.valuesMap.get(key));
        }
        return null;
    }

    setItem(key, value) {
        this.valuesMap.set(key, value);
    }

    removeItem(key) {
        this.valuesMap.delete(key);
    }

    clear() {
        this.valuesMap.clear();
    }

    key(i) {
        if (arguments.length === 0) {
            throw new TypeError(
                "Failed to execute 'key' on 'Storage': 1 argument required, but only 0 present."
            ); // this is a TypeError implemented on Chrome, Firefox throws Not enough arguments to Storage.key.
        }
        const arr = Array.from(this.valuesMap.keys());
        return arr[i];
    }

    get length() {
        return this.valuesMap.size;
    }
}
const memoryStorage = new LocalStorageShim();

export const getStorage = () => {
    return localStorageAvailable ? window.localStorage : memoryStorage;
};