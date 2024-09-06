import { Box, BoxProps } from "@mui/material";

type ImgProps = {
  alt: string;
  src: string;
  // add more HTML img attributes you need
};

export const Img = (props: BoxProps & ImgProps) => <Box component="img" {...props} />;

export const ProfileImage = (props: BoxProps & ImgProps) => (
  <Box component="img" sx={{ width: 250, height: 250, borderRadius: "100%", objectFit: "cover" }} {...props} />
);
