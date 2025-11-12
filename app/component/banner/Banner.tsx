"use client";

import { navigationLinks } from "@/app/constants/navigationLinks.temp";
import { INavigationLink } from "@/app/types/index.type";
import {
  Badge,
  Box,
  Button,
  Flex,
  Grid,
  Group,
  Stack,
  Text,
} from "@mantine/core";

import { IconArrowUpRight } from "@tabler/icons-react";
import bannerImage from "../../assets/casual/banner-image.png";
import Link from "next/link";
import Image from "next/image";

const Banner = () => {
  return (
    <Box w="100%" h="80vh" bg="primary">
      <Grid
        gutter={0}
        h="100%"
        align="center"
        styles={{
          inner: {
            height: "100%",
          },
        }}
      >
        <Grid.Col
          span={{ base: 12, md: 7 }}
          px={{ base: "md", md: "xl" }}
          h="100%"
        >
          <Stack h="100%" p="lg" mt="md" justify="center">
            <Text
              tt="uppercase"
              c="primary.7"
              fw={700}
              lh={1.05}
              ff="var(--secondary-font)"
            >
              Style up with trend
            </Text>
            <Text fz={{ base: 40, md: 60 }} fw={700} lh={1.1}>
              Designed for those who dare from casual comfort to sharp
              confidence.
            </Text>

            <Group gap="xs" mt="sm">
              {navigationLinks.map((item: INavigationLink) => (
                <Link href={`${item?.id}`} key={item.id}>
                  <Flex gap={4} align="center" key={item.id}>
                    <Text
                      px="md"
                      fw={700}
                      c="primary.7"
                      key={item.id}
                      ff="var(--secondary-font)"
                    >
                      {item.label}
                    </Text>
                    <IconArrowUpRight color="#3b606c8c" />
                  </Flex>
                </Link>
              ))}
            </Group>

            <Button
              w={150}
              p="md"
              mt="md"
              h="auto"
              fz="md"
              fw={600}
              c="black"
              color="black"
              variant="outline"
              component={Link}
              href="/casual-outfit"
            >
              Shop Now
            </Button>
          </Stack>
        </Grid.Col>
        <Grid.Col
          span={{ base: 0, md: 5 }}
          pos="relative"
          h="80vh"
          display={{ base: "none", md: "block" }}
        >
          <Flex h="100%" align="center" pr="lg">
            <Image
              src={bannerImage}
              alt="Banner Image"
              style={{ objectFit: "cover" }}
            />
          </Flex>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default Banner;
