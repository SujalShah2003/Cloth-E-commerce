"use client";

import React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Text,
  Anchor,
  Group,
  Title,
} from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
} from "@tabler/icons-react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <Box component="footer" style={{ backgroundColor: "#000", color: "#fff" }}>
      <Container size="xl" py="xl">
        <Grid w="100%" gutter="lg" justify="center">
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Stack gap="xs" justify="center" align="center">
              <Title order={4} style={{ color: "#fff" }} tt='uppercase'>
                Thread up
              </Title>
              <Text style={{ color: "#ddd",  }} ta='center'>
                Stylish, comfortable and sustainable everyday wear. Curated
                collections for modern wardrobes.
              </Text>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }}>
            <Stack gap="xs" justify="center" align="center" w="100%">
              <Text fw={700} style={{ color: "#fff" }}>
                Quick Links
              </Text>

              <Anchor
                component={Link}
                href="/casual-outfit"
                style={{ color: "#fff" }}
              >
                Casual Outfits
              </Anchor>
              <Anchor
                component={Link}
                href="/checkout"
                style={{ color: "#fff" }}
              >
                Cart / Checkout
              </Anchor>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }}>
            <Stack gap="xs" w='100%' justify="center" align="center">
              <Text fw={700} style={{ color: "#fff" }}>
                Follow Us
              </Text>
              <Group gap="sm">
                <Anchor
                  href="#"
                  style={{ color: "#fff" }}
                  aria-label="Facebook"
                >
                  <IconBrandFacebook />
                </Anchor>
                <Anchor
                  href="#"
                  style={{ color: "#fff" }}
                  aria-label="Instagram"
                >
                  <IconBrandInstagram />
                </Anchor>
                <Anchor href="#" style={{ color: "#fff" }} aria-label="Twitter">
                  <IconBrandTwitter />
                </Anchor>
              </Group>

              <Text size="sm" style={{ color: "#aaa", marginTop: 12 }}>
                © {new Date().getFullYear()} Sujal Shah. All rights reserved.
              </Text>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
