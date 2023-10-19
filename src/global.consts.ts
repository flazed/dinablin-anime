import Boosty1 from "@assets/boosty_1.jpg"
import Boosty2 from "@assets/boosty_2.jpg"
import Boosty3 from "@assets/boosty_3.jpg"

export const SITE_TITLE = "DinaBlin Anime";

type SocialNetwork = "site" | "twitch" | "discord" | "telegram" | "boosty";
export const socialsLinks: Record<SocialNetwork, string> = {
  site: "https://dinablin.com/",
  twitch: "https://www.twitch.tv/dinablin",
  discord: "https://discord.com/invite/dinablin",
  telegram: "https://t.me/dinablin",
  boosty: "https://boosty.to/dinablin"
}

export const boostyAdImagesList: { src: string }[] = [
  { src: Boosty1 },
  { src: Boosty2 },
  { src: Boosty3 },
]
