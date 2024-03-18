export const CustomLink = ({ to, children }) => {
  return (
    <a href={to} sx={{ cursor: "pointer" }}>
      {children}
    </a>
  );
};
