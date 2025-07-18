import { useEffect, useState } from 'react';

export type Banner = {
  /** Unique identifier returned by the API */
  id: string | number;
  /** Title (may be used later for alt text or accessibility) */
  title: string;
  /** Display order sent by backend */
  display_order: number;
  /** Direct HTTPS URL of the banner image (16:9 aspect) */
  image_url: string;
};

/**
 * Fetches promotional banners from the public Bambu endpoint.
 * Falls back to an empty array when the request fails.
 */
export const useBanners = () => {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const response = await fetch(
          'https://api2.mybambu.com/banners/display?app_tag=bambu-pay&language=en'
        );
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const json = await response.json();

        // New response shape: { banners: [...], count: number, ... }
        const bannerArray = Array.isArray(json?.banners) ? json.banners : [];

        const normalized: Banner[] = bannerArray
          .map((item: any) => {
            const img16 = item?.images?.['16_9'];
            return img16
              ? {
                  id: item.id,
                  title: item.title ?? '',
                  display_order: item.display_order ?? 0,
                  image_url: img16,
                }
              : null;
          })
          .filter(Boolean)
          .sort((a: Banner, b: Banner) => a.display_order - b.display_order);

        setBanners(normalized);
      } catch (error) {
        console.warn('Failed to fetch banners:', error);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return { banners, loading };
}; 