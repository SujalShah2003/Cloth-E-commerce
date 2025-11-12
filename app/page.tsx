import { Container, Box, Text } from "@mantine/core";
import Banner from "./component/banner/Banner";
import ProvidingServices from "./component/providing-services/ProvidingServices";
import CasualOutfit from "./component/casual-outfit/CasualOutfit";
import { Toaster } from "sonner";

const App = () => {
  return (
    <>
      <Box id="home">
        <Banner />
      </Box>

      <Box>
        <ProvidingServices />
      </Box>

      <Box id="casual-outfit">
        <CasualOutfit />
      </Box>

    </>
  );
};

export default App;
