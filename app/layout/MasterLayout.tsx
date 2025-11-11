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
            px={50}
            align="center"
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
                <UnstyledButton
                  fw={700}  
                  fz={15}
                  mx="md"
                  tt="uppercase"
                  component="a"
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                >
                  {item.label}
                </UnstyledButton>
              ))}
            </Group>

            {/* Right Section */}
            <Group visibleFrom="md">
              <Link href="/checkout">
                <Group gap={5}>
                  <IconShoppingBag size={20} />
                  <Text fw={600}>
                    {itemCount} {itemCount === 1 ? "Item" : "Items"}
                  </Text>
                </Group>
              </Link>{" "}
              <Avatar
                color="black"
                variant="transparent"
                size={40}
                radius="xl"
              />
            </Group>

            {/* Mobile Burger Menu */}
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="md"
              size="sm"
            />
          </Group>
        </AppShell.Header>

        {/* Mobile Drawer */}
        <AppShell.Navbar py="md" px={4}>
          <Stack>
            {navigationLinks.map((item: INavigationLink) => (
              <UnstyledButton
                fw={700}
                fz={15}
                mx="md"
                tt="uppercase"
                component="a"
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
              >
                {item.label}
              </UnstyledButton>
            ))}
          </Stack>
        </AppShell.Navbar>

        {/* Main Content */}
        <AppShell.Main p={0}>{children}</AppShell.Main>
      </AppShell>
    </>
  );
};

export default MasterLayout;
