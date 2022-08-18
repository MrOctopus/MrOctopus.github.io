// Not really needed since we are exporting everything statically
// but might be useful in the future if we go dynamic again
export const isServer = () => (typeof window === 'undefined');