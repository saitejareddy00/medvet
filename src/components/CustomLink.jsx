

export const CustomLink = ({ to, children }) => {
  console.log(to);
  return (
    <a href ={to} sx={{ cursor: "pointer" }}>
      {children}
    </a>
  );
};
