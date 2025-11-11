"use client";

import { quickLink } from "@/app/constants/navigationLinks.temp";
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

const Banner = () => {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
      <Box w="100%" h='80vh' bg="primary">
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
          <Grid.Col span={{ base: 12, md: 7 }} px="xl" h="100%">
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
                {quickLink.map((item: INavigationLink) => (
                  <Flex
                    gap={4}
                    align="center"
                    key={item.id}
                    style={{ cursor: "pointer" }}
                  >
                    <Text
                      px="md"
                      fw={700}
                      c="primary.7"
                      key={item.id}
                      ff="var(--secondary-font)"
                      onClick={() => handleScroll(item.id)}
                    >
                      {item.label}
                    </Text>
                    <IconArrowUpRight color="#3b606c8c" />
                  </Flex>
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
              >
                Shop Now
              </Button>
            </Stack>
          </Grid.Col>
          <Grid.Col span={{ base: 0, md: 5 }} pl={50}></Grid.Col>
        </Grid>
      </Box>
  );
};

export default Banner;
