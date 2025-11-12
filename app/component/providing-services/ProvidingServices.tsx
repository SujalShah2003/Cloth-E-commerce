import { JSX } from "react";
import { providingService } from "@/app/constants/providingService.temp";
import { IProvidedServices } from "@/app/types/index.type";
import { Box, Text, Group, SimpleGrid, Card, Flex } from "@mantine/core";
import {
  IconHeadphones,
  IconRefresh,
  IconTag,
  IconTruckDelivery,
} from "@tabler/icons-react";

const iconMap: Record<string, JSX.Element> = {
  truck: <IconTruckDelivery size={40} strokeWidth={1} />,
  headset: <IconHeadphones size={40} strokeWidth={1} />,
  refresh: <IconRefresh size={40} strokeWidth={1} />,
  tag: <IconTag size={40} strokeWidth={1} />,
};

const ProvidingServices = () => {
  return (
    <Box p={{base:30,md:50}} py={70}>
      <SimpleGrid
        cols={{ base: 1, sm: 2, md: 4 }}
        spacing="lg"
        verticalSpacing="xl"
      >
        {providingService.map((service: IProvidedServices, index: number) => (
          <Box p="lg" key={index}>
            <Flex gap='md'>
              <Group mb="sm">{iconMap[service.icon]}</Group>
              <Box>
                <Text fw={600} fz="lg" >
                  {service.title}
                </Text>
                <Text c="dimmed" fz="sm">
                  {service.description}
                </Text>
              </Box>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProvidingServices;
