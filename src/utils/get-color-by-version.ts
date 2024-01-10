export function getColorByVersion(version: number) {
  const hex = (version * 128).toString(16);
  const paddedHex = hex.padStart(6, '0');
  const color = `#${paddedHex}4D`;

  return color;
}
