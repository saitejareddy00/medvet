import { Box } from "@mui/material";
import { useEffect } from "react";
import { products } from "../../constants/products";

function useHashFragment(offset = 0, trigger = true) {
  useEffect(() => {
    const scrollToHashElement = () => {
      const { hash } = window.location;
      const elementToScroll = document.getElementById(hash?.replace("#", ""));
      console.log(hash);

      if (!elementToScroll) return;

      window.scrollTo({
        top: elementToScroll.offsetTop - offset,
        behavior: "smooth",
      });
    };

    if (!trigger) return;

    scrollToHashElement();
    window.addEventListener("hashchange", scrollToHashElement);
    return () => window.removeEventListener("hashchange", scrollToHashElement);
  }, [offset, trigger]);
}

const Compositions = () => {
  useHashFragment(64);
  return (
    <Box pt={5}>
      {products.map((product, idx) => (
        <section id={`/compositions/${idx + 1}`}>
          <Box sx={{ height: "300px", backgroundColor: "whitesmoke", m: 3 }}>
            {product.name}
          </Box>
        </section>
      ))}
    </Box>
  );
};

export { Compositions };
