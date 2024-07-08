import {
  Canvas,
  ImageSVG,
  useSVG,
  rect,
  fitbox,
  Group,
} from "@shopify/react-native-skia";

const width = 120;
const height = 120;

const SvgImage = () => {
  const mainImage = useSVG(require(`../../../assets/cocktail.svg`));
  if (!mainImage) return null;
  const src = rect(0, 0, mainImage.width(), mainImage.height());
  const dst = rect(140, 0, width, height);

  return (
    <Canvas style={{ flex: 0.21 }}>
      <Group transform={fitbox("contain", src, dst)}>
        <ImageSVG svg={mainImage} width={width} height={height} />
      </Group>
    </Canvas>
  );
};

export default SvgImage;
