"use client";

import React, { ReactNode, useCallback, useEffect, useState } from "react";
import {
  AppShell,
  Group,
  UnstyledButton,
  Text,
  Avatar,
  Box,
  Drawer,
  Burger,
  Divider,
  Stack,
} from "@mantine/core";
import { IconShoppingBag, IconMenu2, IconX } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";

interface MasterLayoutProps {
  children: ReactNode;
}

const MasterLayout: React.FC<MasterLayoutProps> = ({ children }) => {
  const [opened, { toggle }] = useDisclosure();

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

  const navLinks = [
    { label: "Hoodies", id: "hoodies" },
    { label: "Shirts", id: "shirts" },
    { label: "T-shirts", id: "tshirts" },
    { label: "Pants", id: "pants" },
    { label: "Shoes", id: "shoes" },
  ];

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
            <Text fw={800} fz="xl" tt="uppercase" style={{ cursor: "pointer" }}>
              ThreadUp
            </Text>

            {/* Desktop Nav */}
            <Group visibleFrom="md">
              {navLinks.map((item) => (
                <UnstyledButton
                  key={item.id}
                  fw={700}
                  fz={15}
                  tt='uppercase'
                  ff='var(--secondary-font)'
                  component="a"
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
              <Group gap={4} style={{ cursor: "pointer" }}>
                <IconShoppingBag size={20} />
                <Text fw={600}>0 Items</Text>
              </Group>
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
          <UnstyledButton w="100%">Home</UnstyledButton>
          <UnstyledButton w="100%">Blog</UnstyledButton>
          <UnstyledButton w="100%">Contacts</UnstyledButton>
          <UnstyledButton w="100%">Support</UnstyledButton>
        </AppShell.Navbar>

        {/* Main Content */}
        <AppShell.Main p={0} >
          {children}
        </AppShell.Main>
      </AppShell>
    </>
  );
};

export default MasterLayout;
