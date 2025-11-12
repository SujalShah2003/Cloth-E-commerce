"use client";

import React, { ReactNode, useCallback, useEffect, useState } from "react";
import {
  AppShell,
  Group,
  UnstyledButton,
  Text,
  Avatar,
  Burger,
  Stack,
} from "@mantine/core";
import { IconShoppingBag } from "@tabler/icons-react";
import Footer from "../component/footer/Footer";
import { useDisclosure } from "@mantine/hooks";
import { navigationLinks } from "../constants/navigationLinks.temp";
import { INavigationLink } from "@/app/types/index.type";
import Link from "next/link";
import { useCartStore } from "../store/cartStore";

interface MasterLayoutProps {
  children: ReactNode;
}

const MasterLayout: React.FC<MasterLayoutProps> = ({ children }) => {
  const [opened, { toggle }] = useDisclosure();
  const { cart } = useCartStore();
  const itemCount = cart.length;

  const scrollToSection = useCallback((id: string) => {
    if (typeof window === "undefined") return;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      (el as HTMLElement).focus();
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash?.replace("#", "");
    if (hash) {
      setTimeout(() => scrollToSection(hash), 50);
    }
  }, [scrollToSection]);

  return (
    <>
      <AppShell
        header={{ height: 100 }}
        navbar={{
          width: 300,
          breakpoint: "md",
          collapsed: { desktop: true, mobile: !opened },
        }}
      >
        <AppShell.Header>
          <Group
            h="100%"
            px={{ base: 30, md: 50 }}
            align="center"
            // wrap="nowrap"
            justify="space-between"
            bg="white"
            style={{
              borderBottom: "1px solid #eaeaea",
            }}
          >
            {/* Left - Logo */}
            <Link href="/" style={{ cursor: "pointer" }}>
              <Text fw={800} fz="xl" tt="uppercase">
                ThreadUp
              </Text>
            </Link>

            {/* Desktop Nav */}
            <Group visibleFrom="md">
              {navigationLinks.map((item: INavigationLink) => (
                <Link href={`${item?.id}`} key={item.id}>
                  <Text fw={700} fz={15} mx="md" tt="uppercase">
                    {item.label}
                  </Text>
                </Link>
              ))}
            </Group>

            {/* Right Section */}
            <Group>
              <Link href="/checkout">
                <Group gap={5}>
                  <IconShoppingBag size={20} />
                  <Text fw={600}>
                    {itemCount} {itemCount === 1 ? "Item" : "Items"}
                  </Text>
                </Group>
              </Link>{" "}
              <Group>
                <Avatar
                  color="black"
                  variant="transparent"
                  size={40}
                  radius="xl"
                  visibleFrom="md"
                />
                <Burger
                  opened={opened}
                  onClick={toggle}
                  hiddenFrom="md"
                  size="sm"
                />
              </Group>
            </Group>

            {/* Mobile Burger Menu */}
          </Group>
        </AppShell.Header>

        {/* Mobile Drawer */}
        <AppShell.Navbar py="md" px={4}>
          <Stack>
            {navigationLinks.map((item: INavigationLink) => (
              <Link href={`${item?.id}`} key={item.id} onClick={() => toggle()}>
                <Text fw={700} fz={15} mx="md" tt="uppercase">
                  {item.label}
                </Text>
              </Link>
            ))}
          </Stack>
        </AppShell.Navbar>

        {/* Main Content */}
        <AppShell.Main p={0} mt={100}>
          {children}
        </AppShell.Main>
      </AppShell>
      <Footer />
    </>
  );
};

export default MasterLayout;
