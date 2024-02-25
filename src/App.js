import "./App.css";
import { Box } from "@mui/material";
import { useRoutes } from "react-router-dom";
import { HomePage } from "./pages/mindGame/HomePage";
import { NavBar } from "./components/NavBar/NavBar";
import { Products } from "./pages/mindGame/Products";
function App() {
  const routes = [
    {
      id: "0",
      name: "home",
      path: "/",
      showInSideNav: false,
      element: <Products />,
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
    <Box sx={{ width: { md: "100vw" } }}>
      <NavBar />
      <Box sx={{ mt: 8,height:'100vh',width:'100vw' }}>{Content}</Box>
    </Box>
  );
}

export default App;
