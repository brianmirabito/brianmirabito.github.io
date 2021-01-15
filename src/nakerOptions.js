const createNakerOptions = (overrides = {}) => ({
  environment: {
    gradient: "radial",
    sensitivity: 1,
    colorStart: [51, 6, 10, 1],
    colorEnd: [227, 30, 50, 1],
    ...(overrides.environment ? overrides.environment : {}),
  },
  particle: {
    life: 5,
    power: 0.02,
    texture:
      "https://res.cloudinary.com/naker-io/image/upload/v1566560053/window_04.png",
    number: 202,
    colorStart: [255, 255, 255, 0.13],
    colorEnd: [255, 15, 41, 0.52],
    sizeStart: 1.08,
    sizeEnd: 2.16,
    direction1: {
      x: 100,
      y: 100,
      z: 100,
    },
    direction2: {
      x: -100,
      y: -100,
      z: -100,
    },
    ...(overrides.particle ? overrides.particle : {}),
  },
  waterMark: false,
});

export default createNakerOptions;
