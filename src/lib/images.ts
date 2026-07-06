/** Build a high-quality Wix CDN image URL from a media asset ID. */
export function wixImage(
  id: string,
  ext: "jpg" | "jpeg" | "png" = "jpg",
  width = 1200,
  height = 800,
) {
  return `https://static.wixstatic.com/media/${id}~mv2.${ext}/v1/fill/w_${width},h_${height},al_c,q_85,enc_auto/${id}~mv2.${ext}`;
}

/** Small square crop for coach avatars from theflipzone.com staff photos. */
export function coachPhoto(id: string, ext: "jpg" | "jpeg" | "png" = "jpg", size = 160) {
  return wixImage(id, ext, size, size);
}

export const images = {
  logo: "/images/logo.png",
  hero: "/images/hero-team.png",
  heroTeam: "/images/hero-team.png",
  facilityOverview: "/images/facility-overview.png",
  facilityGymFloor: "/images/facility-gym-floor.png",
  facilityBeams: "/images/facility-beams.png",
  facility: "/images/facility-overview.png",
  /** Stock photos for homepage pathway cards (Pexels / Unsplash, royalty-free). */
  pathwayPreschool: "/images/pathways/preschool.jpg",
  pathwayRecreational: "/images/pathways/recreational.jpg",
  pathwayCompetitive: "/images/pathways/competitive.jpg",
  preschool: wixImage("3c407f_20c4205ef7d447b9b93eca2fbf73055d", "jpg", 1200, 800),
  recreational: wixImage("3c407f_76362b8ee1a44252a7d590af253908e6", "jpg", 1200, 800),
  tumbling: wixImage("3c407f_3f1aa624f5a74a1fb102e905ea400640", "jpeg", 1200, 800),
  ninja: wixImage("3c407f_77c12aaf21cc4e4cad52baf7872b9003", "jpeg", 1200, 800),
  team: wixImage("3c407f_0efd6496ccbf478e931d4354e02a16a9", "jpg", 1200, 800),
  gymstars: wixImage("3c407f_e82c330476164ddc8c95fd18d60d71bf", "png", 1200, 800),
  ssgnl: wixImage("3c407f_a3cd8a548cbd467f875f7ff48efab0dc", "png", 1200, 800),
  birthday: wixImage("3c407f_fe9084de4b224a21880dd467183485f1", "png", 1200, 800),
  camps: wixImage("3c407f_34b18d66a39441ebac485114cf4b8fc4", "png", 1200, 800),
  coach1: wixImage("3c407f_9ee85fd2ef6c4f68b143d2d1b033ada2", "png", 600, 600),
} as const;

export const facilityHeroImages = [
  images.facilityOverview,
  images.facilityGymFloor,
  images.facilityBeams,
] as const;

/** Pick one of the three facility photos — stable per seed, varied across pages. */
export function pickFacilityHeroImage(seed: string): string {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }
  return facilityHeroImages[hash % facilityHeroImages.length];
}
