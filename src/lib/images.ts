/** Build a high-quality Wix CDN image URL from a media asset ID. */
export function wixImage(
  id: string,
  ext: "jpg" | "jpeg" | "png" = "jpg",
  width = 1200,
  height = 800,
) {
  return `https://static.wixstatic.com/media/${id}~mv2.${ext}/v1/fill/w_${width},h_${height},al_c,q_85,enc_auto/${id}~mv2.${ext}`;
}

export const images = {
  logo: wixImage("3c407f_f92aab5f784344a78fe846a7a2144181", "png", 400, 400),
  hero: "/images/hero-team.png",
  heroTeam: "/images/hero-team.png",
  facility: wixImage("3c407f_13a9a9f4073540be9a657fbc9a0bb6f0", "png", 1600, 900),
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
