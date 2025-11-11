import { Container, Box, Text } from "@mantine/core";
import Banner from "./component/banner/Banner";

const App = () => {
  return (
    <>
      <Container id="home" size="full" p={0}>
        <Banner />
      </Container>

      {/* Example product sections */}
      <Box id="hoodies" h="100vh" p="xl" bg="gray.3">
        <Text fw={700} fz="xl">Hoodies Collection</Text>
      </Box>

      <Box id="shirts" h="100vh" p="xl" bg="gray.2">
        <Text fw={700} fz="xl">Shirts Collection</Text>
      </Box>

      <Box id="tshirts" h="100vh" p="xl" bg="gray.1">
        <Text fw={700} fz="xl">T-Shirts Collection</Text>
      </Box>

      <Box id="pants" h="100vh" p="xl" bg="gray.2">
        <Text fw={700} fz="xl">Pants Collection</Text>
      </Box>

      <Box id="shoes" h="100vh" p="xl" bg="gray.2">
        <Text fw={700} fz="xl">Shoes Collection</Text>
      </Box>
    </>
  );
};

export default App;
