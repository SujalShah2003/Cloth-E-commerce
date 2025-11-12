"use client";

import TitleHeader from "@/app/common/TitleHeader";
import { Box, Button, Group } from "@mantine/core";
import Link from "next/link";
import OutfitList from "./OutfitList";

const CasualOutfit = () => {
  return (
    <Box p={{base:30,md:50}}>
      <TitleHeader
        title=" Our Casual Outfit Collections"
        description=" Explore trendy and comfortable casual wear designed for effortless
        everyday style."
      />

      <OutfitList />

      <Group justify="center" align="center">
        <Button
          my={20}
          variant="outline"
          size="md"
          px="xl"
          color="black"
          radius="xl"
          href="/casual-outfit"
          component={Link}
        >
          View All Outfits
        </Button>
      </Group>
    </Box>
  );
};

export default CasualOutfit;
