import "./homePage.css";
import { Grid, Stack, Typography } from "@mui/material";

const HomePage = () => {
  return (
    <Grid container sx={{ height: "100%", boxSizing: "content-box" }}>
      <Grid item xs={12} md={12} p={{ xs: 0, md: 3 }}>
        <Stack
          width="100%"
          height="100vh"
          alignItems="center"
          justifyContent="center"
        >
          <Stack width="80%">
            <Typography variant="h2" color="rgb(217 209 255)">
              Medvet Healthcare
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: "justify", color: "rgba(255, 255, 255, 0.6)" }}
            >
              {`Welcome to Medvet healthcare your trusted source for
            high-quality animal medicines and healthcare products. We specialize
            in providing a wide range of pharmaceuticals, supplements, and
            medical supplies for the health and well-being of your beloved pets
            and livestock. With a commitment to excellence and a focus on
            customer satisfaction, we strive to offer only the safest and most
            effective medications and treatments available. Whether you're a pet
            owner, farmer, or veterinary professional, you can rely on Medvet
            healthcare for all your animal healthcare needs.`}
            </Typography>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export { HomePage };
