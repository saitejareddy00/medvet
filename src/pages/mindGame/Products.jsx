import { Typography } from "@mui/material";
import "./products.css";
import { products } from "../../constants/products";

export const Products = () => {
  return (
    <>
      <div class="ag-format-container">
        <div class="ag-courses_box">
          {products.map((product, id) => (
            <div class="ag-courses_item">
              <a
                href={`/#/compositions/${id + 1}`}
                class="ag-courses-item_link"
              >
                <div class="ag-courses-item_bg"></div>
                <div class="ag-courses-item_title">
                  <Typography>{product.name}</Typography>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
