import "./App.css";
import { Box, } from "@mui/material";
import {  useRoutes } from 'react-router-dom';
import { HomePage } from "./pages/mindGame/HomePage";
function App() {
  const routes =[{
    id: '0',
    name: 'home',
    path: '/',
    showInSideNav: false,
    element: (
      <HomePage />
    )
  },
  
]

  const Content = useRoutes(routes)

 return (
  <Box  sx={{m:{md:0,xs:2},width:{md:'100vw'}}}>
     {Content}
  </Box>
 );
}

export default App;
