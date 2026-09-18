import type { StaticImageData } from "next/image";
import oneFlag from "@/public/images/img-one.webp";
import luckJu from "@/public/images/img-lj.webp";
import wenworks from "@/public/images/img-ww.webp";
import dinoMarcom from "@/public/images/img-dino-marcom.webp";
import superbike from "@/public/images/img-tf.webp";
import codingIsMagic from "@/public/images/img-coding-is-magic.webp";
import utccPhobia from "@/public/images/img-utcc.webp";
import unifood from "@/public/images/img-unifood.webp";

// Static imports preserve each preview's intrinsic aspect ratio before it loads.
export const projectImages: Record<string, StaticImageData> = {
  "/images/img-one.webp": oneFlag,
  "/images/img-lj.webp": luckJu,
  "/images/img-ww.webp": wenworks,
  "/images/img-dino-marcom.webp": dinoMarcom,
  "/images/img-tf.webp": superbike,
  "/images/img-coding-is-magic.webp": codingIsMagic,
  "/images/img-utcc.webp": utccPhobia,
  "/images/img-unifood.webp": unifood,
};
