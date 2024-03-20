import "./App.css";
import { Box } from "@mui/material";
import { useRoutes } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { Products } from "./pages/mindGame/Products";
import medvetBg from "./assets/medvetBg.png";
import { HomePage } from "./pages/mindGame/HomePage";
import { Compositions } from "./pages/mindGame/Compositions";

function App() {
  const routes = [
    {
      id: "0",
      name: "home",
      path: "/",
      showInSideNav: false,
      element: (
        <Box
          sx={{
            width: "100%",
            zIndex: 20,
            backgroundColor: "rgba(0,0,0,0.7)",
          }}
        >
          <HomePage />
        </Box>
      ),
    },
    {
      id: "1",
      name: "products",
      path: "/products",
      showInSideNav: false,
      element: (
        <Box
          sx={{
            width: "100%",
            zIndex: 20,
            backdropFilter: "blur(2px)",
            backgroundColor: "rgba(0,0,0,0.4)",
          }}
        >
          <Products />
        </Box>
      ),
    },
    {
      id: "3",
      name: "products",
      path: "/compositions/:id",
      showInSideNav: false,
      element: (
        <Box
          sx={{
            width: "100%",
            zIndex: 20,
            backdropFilter: "blur(2px)",
            backgroundColor: "rgba(0,0,0,0.4)",
          }}
        >
          <Compositions />
        </Box>
      ),
    },
  ];

  const Content = useRoutes(routes);

  return (
    <Box>
      <NavBar />
      <Box sx={{ height: "100vh", width: "100vw" }}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            background: `url(${medvetBg})`,
            position: "fixed",
            zIndex: -1000,
          }}
        ></Box>

        {Content}
      </Box>
    </Box>
  );
}

export default App;
