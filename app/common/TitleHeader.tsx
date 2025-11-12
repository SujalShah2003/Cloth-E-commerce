import { Text } from "@mantine/core";
import React from "react";

interface ITitleHeader {
  title?: string;
  description?: string;
}
const TitleHeader: React.FC<ITitleHeader> = ({
  title = "Casual Outfit Collections",
  description=" Explore trendy and comfortable casual wear designed for effortless everyday style.",
}) => {
  return (
    <>
      <Text fz="h2" fw={700} ta="center">
        {title}
      </Text>
      <Text c="dimmed" fz="md" ta="center" mt={5}>
        {description}
      </Text>
    </>
  );
};

export default TitleHeader;
