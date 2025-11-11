"use client";

import { casualOutfits } from "@/app/constants/casualOutfit.temp";
import { useCartStore } from "@/app/store/cartStore";
import { ICasualOutfit } from "@/app/types/index.type";
import {
  Box,
  Button,
  Card,
  Grid,
  Text,
  Group,
  ActionIcon,
  Stack,
} from "@mantine/core";
import { IconShoppingCartShare } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

const CasualOutfit = () => {
  const previewItems = casualOutfits.slice(0, 8);

  const { addToCart, isInCart } = useCartStore();

  return (
    <Box p={50}>
      <Text fz="h2" fw={700} ta="center">
        Our Casual Outfit Collections
      </Text>
      <Text c="dimmed" fz="md" ta="center" mt={5}>
        Explore trendy and comfortable casual wear designed for effortless
        everyday style.
      </Text>

      <Grid gutter="xl" my="xl">
        {previewItems.map((item: ICasualOutfit) => {
          const inCart = isInCart(item.id);

          return (
            <Grid.Col key={item.id} span={{ base: 12, sm: 6, md: 3 }}>
              <Card shadow="md" radius="lg" withBorder p="md" h={500}>
                <Box
                  style={{
                    position: "relative",
                    width: "100%",
                    height: 220,
                    overflow: "hidden",
                    borderRadius: "8px",
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </Box>

                <Stack mt="md" style={{ flexGrow: 1 }}>
                  <Text fw={600} fz="xl">
                    {item.title}
                  </Text>
                  <Text fz="sm" c="dimmed" lineClamp={2}>
                    {item.description}
                  </Text>
                  <Text fz="sm" c="dimmed">
                    Available Sizes:{" "}
                    {item?.variants.map((v) => v.size).join(", ")}
                  </Text>

                  <Group mt={10}>
                    {item.discount ? (
                      <>
                        <Text fw={700}>₹{item.discountedPrice}</Text>
                        <Text c="dimmed" td="line-through" fz="sm">
                          ₹{item.originalPrice}
                        </Text>
                        <Text c="green" fz="sm">
                          ({item.offerPercent}% OFF)
                        </Text>
                      </>
                    ) : (
                      <Text fw={700}>₹{item.price}</Text>
                    )}
                  </Group>
                </Stack>

                <Group mt="md" justify="space-between">
                  <Button
                    variant="outline"
                    size="sm"
                    color="black"
                    component={Link}
                    href={`/outfits/${item.id}`}
                    style={{ flex: 1 }}
                  >
                    View Details
                  </Button>
                  {!inCart && (
                    <ActionIcon
                      size="lg"
                      color="black"
                      onClick={() => {
                        addToCart(item);
                        toast.success(`${item.title} added to cart!`);
                      }}
                      title="Add to Cart"
                    >
                      <IconShoppingCartShare />
                    </ActionIcon>
                  )}
                </Group>
              </Card>
            </Grid.Col>
          );
        })}
      </Grid>

      <Group justify="center" align="center">
        <Button
          my={20}
          variant="outline"
          size="md"
          px="xl"
          color="black"
          radius="xl"
          href="/outfits/casual"
          component={Link}
        >
          View All Outfits
        </Button>
      </Group>
    </Box>
  );
};

export default CasualOutfit;
