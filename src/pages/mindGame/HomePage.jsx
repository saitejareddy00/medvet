import { AppBar, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { CustomLink } from "../../components/CustomLink";
import { NavBar } from "../../components/NavBar/NavBar";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    // <AppBar
    //   position="fixed"
    //   sx={{  backgroundColor: "transparent" }}
    // >
    //   <Stack direction='row' justifyContent='space-between' alignItems='center'>
    //   <Stack><Typography variant="h2" sx={{color:'CaptionText',p:1}}>Medvet</Typography></Stack>
    //   <Stack direction="row" gap='20px' px={2}>
    //     <CustomLink>Products</CustomLink>
    //     <CustomLink>Compositions</CustomLink>
    //     <CustomLink>Uses</CustomLink>
    //   </Stack>
    //   </Stack>
    // </AppBar>
    <p>homepage</p>
  );
};

export { HomePage };
