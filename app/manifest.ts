import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dubious Cat Facts",
    short_name: "Cat Facts",
    description: "A quirky app delivering dubious yet entertaining facts about cats!",
    background_color: "#FFFFFF",
    theme_color: "#000000",
    display: "standalone",
    start_url: "/",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-mask.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}