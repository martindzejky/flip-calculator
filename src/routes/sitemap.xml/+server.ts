import type { RequestHandler } from '@sveltejs/kit';
import * as sitemap from 'super-sitemap';

export const GET: RequestHandler = async (event) => {
  const origin = event.url.origin;

  // The app screens are client-only local states, not indexable content — only
  // the marketing homepage belongs in the sitemap.
  return await sitemap.response({
    origin,
    excludeRoutePatterns: ['^/players$', '^/play$'],
  });
};
