import "./App.css";
import { Box } from "@mui/material";
import { useRoutes } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { Products } from "./pages/mindGame/Products";
import medvetBg from "./assets/medvetBg.png";
import { HomePage } from "./pages/mindGame/HomePage";
function App() {
  const routes = [
    {
      id: "0",
      name: "home",
      path: "/",
      showInSideNav: false,
      element: <HomePage />,
    },
    {
      id: "1",
      name: "products",
      path: "/products",
      showInSideNav: false,
      element: <Products />,
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
        <Box
          sx={{
            width: "100%",
            zIndex: 20,
            backgroundColor: "rgba(0,0,0,0.7)",
          }}
        >
          {Content}
        </Box>
      </Box>
    </Box>
  );
}

export default App;
