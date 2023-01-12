import { Typography, useTheme } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import WidgetWrapper from "../../components/FlexBetween";
import { Box } from "@mui/material";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper display={"flex"} flexDirection={"column"}>
      <Box width={"100%"} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
        <Typography color={dark} variant="h5" fontWeight={"500"}>
          Sponsored
        </Typography>
        <Typography variant="h6" color={medium}>
          Create Add
        </Typography>
      </Box>
      <Box>
        <img
          width="100%"
          height="auto"
          alt="advert"
          src="http://localhost:8000/assets/Monterey-light.png"
          style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
        />
      </Box>
      <Box width={"100%"} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
        <Typography color={main}>MikaCosmetics</Typography>
        <Typography color={medium}>mikacosmetics</Typography>
      </Box>

      <Typography color={medium} m="0.5rem 0">
        Your pathway to stunning and immaculate beauty and made sure your skin
        is exfoliating skin and shining like light.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
