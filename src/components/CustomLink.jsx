import { Link } from "@mui/material";
import { useNavigate } from "react-router";

export const CustomLink = ({ to, children }) => {
  const navigate = useNavigate();
  console.log(to);
  return (
    <a href ={to} sx={{ cursor: "pointer" }}>
      {children}
    </a>
  );
};
