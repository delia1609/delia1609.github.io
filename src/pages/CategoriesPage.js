import { Group, Title, useMantineTheme } from "@mantine/core";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { getFeaturedProducts } from "../api/productsApi";
import { Carousel, useAnimationOffsetEffect } from "@mantine/carousel";
import SimpleCard from "../components/Card";
import { useMediaQuery } from "@mantine/hooks";
// import Autoplay from "embla-carousel-autoplay";

export default function CategoriesPage() {
  const [featuredProducts, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const smallScreen = useMediaQuery('(max-width: 768px)');
  const midScreen = useMediaQuery('(max-width: 1276px)');

  const theme = useMantineTheme();

  const TRANSITION_DURATION = 200;
  const [embla, setEmbla] = useState(null);

  // const autoplay = useRef(Autoplay({ delay: 2000 }));

  const StyledCard = {
    height: smallScreen ? "85%" : "auto",
  }

  useAnimationOffsetEffect(embla, TRANSITION_DURATION);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const result = await getFeaturedProducts();
      setLoading(false);

      setCategories(result);
    })();
  }, []);

  const slides = featuredProducts.map((item) => (
    <Carousel.Slide key={item.Title}>
      <SimpleCard
        product={item}
        hideCategory={false}
        style={StyledCard}
      />
    </Carousel.Slide>
  ))

  return (
    <>
      <Title color={theme.colors.gray[7]} mb="xl">Featured Products</Title>
      <Group position="center">
        <Carousel
          slideSize={smallScreen ? "100%" : midScreen ? "50%" : "33%"}
          getEmblaApi={setEmbla}
          align="start"
          slideGap="md"
          maw="80%"
          controlSize={34}
          
          slidesToScroll={smallScreen ? 1 : 2}
          loop
        >
          {slides}
        </Carousel>
      </Group>
    </>
  );
}