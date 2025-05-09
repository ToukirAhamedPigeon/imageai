import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
   name: "ImageAI",
    short_name: "ImageAI",
    start_url: "/",
    display: "standalone",
    background_color: "#f0f9ff",
    theme_color: "#1d4ed8",
    description: "Modify images with AI",
    icons: [
        {
            src: "/icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png"
          }
    ]
  };
}