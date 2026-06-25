// The calculator is a client-only, local-data app: rendering it on the server
// would only flash an empty state before localStorage hydrates. Disable SSR for
// the app screens (the marketing homepage stays server-rendered for SEO).
export const ssr = false;
