import { Variants } from "framer-motion";

// Container Variant
export const containerVariants = (
  delay: number = 0,
  direction: "up" | "down" | "left" | "right" = "up"
): Variants => {
  let offscreen;
  switch (direction) {
    case "up":
      offscreen = { opacity: 0, y: 30 };
      break;
    case "down":
      offscreen = { opacity: 0, y: -30 };
      break;
    case "left":
      offscreen = { opacity: 0, x: 30 };
      break;
    case "right":
      offscreen = { opacity: 0, x: -30 };
      break;
    default:
      offscreen = { opacity: 0, y: 30 };
  }
  return {
    offscreen,
    onscreen: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        duration: 1,
        delay,
      },
    },
  };
};

// Tag Variant
export const tagVariants = (
  direction: "up" | "down" | "left" | "right" = "up"
): Variants => {
  let offscreen;
  switch (direction) {
    case "up":
      offscreen = { opacity: 0, y: 10 };
      break;
    case "down":
      offscreen = { opacity: 0, y: -10 };
      break;
    case "left":
      offscreen = { opacity: 0, x: 10 };
      break;
    case "right":
      offscreen = { opacity: 0, x: -10 };
      break;
    default:
      offscreen = { opacity: 0, y: 10 };
  }
  return {
    offscreen,
    onscreen: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.8,
      },
    },
  };
};

// Title Variant
export const titleVariants = (
  direction: "up" | "down" | "left" | "right" = "up"
): Variants => {
  let offscreen;
  switch (direction) {
    case "up":
      offscreen = { opacity: 0, y: 30 };
      break;
    case "down":
      offscreen = { opacity: 0, y: -30 };
      break;
    case "left":
      offscreen = { opacity: 0, x: 30 };
      break;
    case "right":
      offscreen = { opacity: 0, x: -30 };
      break;
    default:
      offscreen = { opacity: 0, y: 30 };
  }
  return {
    offscreen,
    onscreen: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        duration: 1,
        delay: 0.3,
      },
    },
  };
};

// Description Variant
export const desVariants = (
  direction: "up" | "down" | "left" | "right" = "up"
): Variants => {
  let offscreen;
  switch (direction) {
    case "up":
      offscreen = { opacity: 0, y: 20 };
      break;
    case "down":
      offscreen = { opacity: 0, y: -20 };
      break;
    case "left":
      offscreen = { opacity: 0, x: 20 };
      break;
    case "right":
      offscreen = { opacity: 0, x: -20 };
      break;
    default:
      offscreen = { opacity: 0, y: 20 };
  }
  return {
    offscreen,
    onscreen: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        duration: 1,
      },
    },
  };
};

// Image Variant (imgVariant)
export const imgVariant = (
  direction: "up" | "down" | "left" | "right" = "up"
): Variants => {
  let offscreen;
  switch (direction) {
    case "up":
      offscreen = { opacity: 0, y: 30, scale: 0.95 };
      break;
    case "down":
      offscreen = { opacity: 0, y: -30, scale: 0.95 };
      break;
    case "left":
      offscreen = { opacity: 0, x: 30, scale: 0.95 };
      break;
    case "right":
      offscreen = { opacity: 0, x: -30, scale: 0.95 };
      break;
    default:
      offscreen = { opacity: 0, y: 30, scale: 0.95 };
  }
  return {
    offscreen,
    onscreen: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        duration: 1,
      },
    },
  };
};
