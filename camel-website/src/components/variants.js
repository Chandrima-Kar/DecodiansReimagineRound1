export const fadeIn = (direction, delay, duration) => {
  const baseVariants = {
    hidden: {
      y: 0,
      x: 0,
      opacity: 0,
      scale: 1,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "tween",
        duration: duration,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };

  switch (direction) {
    case "up":
      baseVariants.hidden.y = 80;
      break;
    case "down":
      baseVariants.hidden.y = -80;
      break;
    case "left":
      baseVariants.hidden.x = 80;
      break;
    case "right":
      baseVariants.hidden.x = -80;
      break;
    case "zoom":
      baseVariants.hidden.scale = 0.8;
      break;
    default:
      break;
  }

  return baseVariants;
};
