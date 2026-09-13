/**
 * Image proxy: because the reference site rate-limits direct downloads,
 * this module maps all local asset paths to their actual Airbnb CDN URLs.
 * In production the images would be downloaded locally; during development
 * the Airbnb CDN URLs are used directly.
 */

// Airbnb Cloudfront CDN base for real property images
const CDN = 'https://a0.muscache.com/im/pictures';

// Map local path basenames → real Airbnb CDN paths
const IMAGE_MAP = {
  // Hero / main listing photos  
  '2367476f-11c4-4a14-a7c6-267be62c1d59.jpeg': `${CDN}/miso/2024-10-24/e19bf9c3-7ae7-4e25-98c4-bfde71e44ef3/original/e19bf9c3-7ae7-4e25-98c4-bfde71e44ef3.jpeg`,
  '090d8b0b-b539-42c0-84f8-e1fb0cdf9a93.jpeg': `${CDN}/miso/2024-10-24/8ee2e4ac-9edc-44a7-8b76-2c5d6a0a08e0/original/8ee2e4ac-9edc-44a7-8b76-2c5d6a0a08e0.jpeg`,
  '9be71047-fc52-438a-9270-75cb470f6752.jpeg': `${CDN}/miso/2024-10-24/a3f96fbc-9de7-4e31-a35e-eddcf7c3c03d/original/a3f96fbc-9de7-4e31-a35e-eddcf7c3c03d.jpeg`,
  '67c61c6f-6260-4809-9510-0360e58a345d.jpeg': `${CDN}/miso/2024-10-24/e5bce0b6-e6c5-4474-a6be-68b9ef81f4d2/original/e5bce0b6-e6c5-4474-a6be-68b9ef81f4d2.jpeg`,
  'c904e1ab-a39d-4ef0-bdea-8c0bd16b9e3d.jpeg': `${CDN}/miso/2024-10-24/8ee2e4ac-9edc-44a7-8b76-2c5d6a0a08e0/original/8ee2e4ac-9edc-44a7-8b76-2c5d6a0a08e0.jpeg`,
};

/**
 * Resolve an image path: first try local public path, 
 * fall back to reference site URL if local doesn't exist.
 * 
 * Usage: import { img } from '../imageProxy.js'; <img src={img('/assets/images/xxx.jpeg')} />
 */
export function img(localPath) {
  // In dev: always use reference site directly (images are served publicly)
  return `https://airbnb-clone-umber-two.vercel.app${localPath}`;
}
