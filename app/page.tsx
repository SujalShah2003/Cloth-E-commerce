import { Container, Box, Text } from "@mantine/core";
import Banner from "./component/banner/Banner";
import ProvidingServices from "./component/providing-services/ProvidingServices";
import CasualOutfit from "./component/casual-outfit/CasualOutfit";
import { Toaster } from "sonner";

const App = () => {
  return (
    <>
      <Toaster richColors position="bottom-left" />

      <Box id="home">
        <Banner />
      </Box>

      <Box>
        <ProvidingServices />
      </Box>

      <Box id="casual-outfit">
        <CasualOutfit />
      </Box>

      <Box id="formal-outfit" h="100vh" p="xl">
        <Text fw={700} fz="xl">
          T-Shirts Collection
        </Text>
      </Box>
    </>
  );
};

export default App;
