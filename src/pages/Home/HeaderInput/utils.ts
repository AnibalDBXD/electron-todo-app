export const COLORS = [
  "red.500",
  "orange.500",
  "yellow.500",
  "green.500",
  "blue.500",
  "cyan.500",
  "purple.500",
  "pink.500",
];

export const randomColor = () => COLORS[Math.floor(Math.random() * COLORS.length)];
