"use client";

import React from "react";
import { casualOutfits } from "@/app/constants/casualOutfit.temp";
import { useCartStore } from "@/app/store/cartStore";
import { ICasualOutfit } from "@/app/types/index.type";
import {
  ActionIcon,
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Group,
  Stack,
  Text,
} from "@mantine/core";
import { IconShoppingCartShare } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import TitleHeader from "../common/TitleHeader";

const CasualOutfitList = () => {
  const { addToCart, isInCart } = useCartStore();
  const router = useRouter();

  return (
    <>
      <Box p={{ base: 30, md: 50 }} pt={30} bg="primary">
        <TitleHeader />
      </Box>

      <Grid gutter="xl" p={{ base: 30, md: 50 }}>
        {casualOutfits.map((item: ICasualOutfit) => {
          const inCart = isInCart(item.id);

          return (
            <Grid.Col key={item.id} span={{ base: 12, sm: 6, md: 3 }}>
              <Card
                shadow="md"
                radius="lg"
                withBorder
                p="md"
                h={500}
                style={{ cursor: "pointer" }}
                onClick={() => router.push(`/casual-outfit/${item.id}`)}
              >
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

                <Flex gap="md" mt="md" justify="space-between">
                  <Button
                    variant="outline"
                    size="sm"
                    color="black"
                    component={Link}
                    w="100%"
                    href={`/casual-outfit/${item.id}`}
                  >
                    View Details
                  </Button>
                  {!inCart && (
                    <ActionIcon
                      w="100%"
                      size="lg"
                      color="black"
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(item);
                        toast.success(`${item.title} added to cart!`);
                      }}
                    >
                      <IconShoppingCartShare />
                    </ActionIcon>
                  )}
                </Flex>
              </Card>
            </Grid.Col>
          );
        })}
      </Grid>
    </>
  );
};

export default CasualOutfitList;
