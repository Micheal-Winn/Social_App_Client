import { Box } from "@mui/material";
import { borderRadius } from "@mui/system";

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        alt="user"
        height={size}
        width={size}
        src={`http://localhost:8000/assets/${image}`}
      ></img>
    </Box>
  );
};

export default UserImage;
