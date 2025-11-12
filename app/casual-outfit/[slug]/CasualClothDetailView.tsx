"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { casualOutfits } from "@/app/constants/casualOutfit.temp";
import { ICasualOutfit } from "@/app/types/index.type";
import Image from "next/image";
import {
  Box,
  Button,
  Grid,
  Group,
  Stack,
  Text,
  Tabs,
  Badge,
} from "@mantine/core";
import { useCartStore } from "@/app/store/cartStore";

export default function CasualClothDetailView() {
  const params = useParams();
  const slug = params?.slug as string;
  const router = useRouter();

  const item: ICasualOutfit | undefined = casualOutfits.find(
    (c) => c.id === slug
  );
  const { addToCart, isInCart } = useCartStore();
  const [selectedSize, setSelectedSize] = useState<string | null>(
    item?.variants?.[0]?.size ?? null
  );

  if (!item) {
    return (
      <Box p={50}>
        <Text fz="xl">Item not found</Text>
        <Button mt={12} onClick={() => router.push("/casual-outfit")}>
          Back to list
        </Button>
      </Box>
    );
  }

  const price =
    item.variants?.find((v) => v.size === selectedSize)?.price ??
    item.discountedPrice ??
    item.price;

  return (
    <Box p={40}>
      <Grid gutter="xl">
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Box
            w={{ base: "auto", md: 600 }}
            h={600}
            style={{
              position: "relative",
              borderRadius: 8,
              overflow: "hidden",
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
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <Stack mt="md">
            <Group align="center" gap={8}>
              <Text fz="h2" fw={700}>
                {item.title}
              </Text>
              {item?.trending && (
                <Badge color="#cd282d" variant="filled" radius="md" size="lg">
                  Trending
                </Badge>
              )}
            </Group>
            <Text c="dimmed">{item.description}</Text>

            <Group>
              <Text fw={700} fz="xl">
                ₹{price}
              </Text>
              {item.discount && (
                <>
                  <Text c="dimmed" td="line-through">
                    ₹{item.originalPrice}
                  </Text>
                  <Text c="dimmed">{item.offerPercent}% OFF</Text>
                </>
              )}
            </Group>

            <div>
              <Text fw={600} mb={6}>
                Size
              </Text>

              <Tabs
                value={selectedSize ?? undefined}
                variant="pills"
                color="black"
                onChange={(val: string | null) => setSelectedSize(val)}
              >
                <Tabs.List>
                  {item.variants?.map((v) => (
                    <Tabs.Tab
                      key={v.size}
                      value={v.size}
                      style={{ minWidth: 48 }}
                    >
                      {v.size}
                    </Tabs.Tab>
                  ))}
                </Tabs.List>
              </Tabs>
            </div>

            <Group>
              <Button
                color="black"
                onClick={() => {
                  addToCart({ ...item, selectedSize, price } as any);
                }}
                disabled={isInCart(item.id)}
              >
                {isInCart(item.id) ? "In Cart" : "Add to Cart"}
              </Button>
              <Button
                variant="outline"
                color="black"
                onClick={() => router.back()}
              >
                Back
              </Button>
            </Group>
          </Stack>
        </Grid.Col>
      </Grid>
    </Box>
  );
}
