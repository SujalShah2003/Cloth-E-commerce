import TitleHeader from "@/app/common/TitleHeader";
import { Box } from "@mantine/core";
import CasualClothDetailView from "./CasualClothDetailView";
import Outfit from "@/app/component/casual-outfit/OutfitList";

const page = () => {
  return (
    <>
      <Box p={50} pt={30} bg="primary">
        <TitleHeader />
      </Box>
      <CasualClothDetailView />
      <TitleHeader
        title="Top Recommendation"
        description=" Handpicked casual outfits just for you, blending comfort and style effortlessly."
      />
      <Box px={50}>
        <Outfit />
      </Box>
    </>
  );
};

export default page;
