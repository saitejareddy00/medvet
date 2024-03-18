import { Stack } from "@mui/material";
import "./products.css";
import first from "../../assets/first.jpg";
import second from "../../assets/second.jpg";
import third from "../../assets/third.jpg";
import fifth from "../../assets/fifth.jpg";
import forth from "../../assets/fourth.jpg";
import sixth from "../../assets/sixth.jpg";
import seventh from "../../assets/seventh.jpg";
import eigth from "../../assets/eigth.jpg";
import ninth from "../../assets/ninth.jpg";
import tenth from "../../assets/tenth.jpg";

const images = [
  first,
  second,
  third,
  forth,
  fifth,
  sixth,
  seventh,
  eigth,
  ninth,
  tenth,
];

export const Products = () => {
  return (
    <>
      <main className="flex-container" style={{ paddingTop: "32px" }}>
        <Stack
          gap={1}
          sx={{
            flexDirection: "row",
            flexWrap: "wrap",
            width: "100%",
            height: "100%",
            p: 4,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {images.map((imag) => (
            <div class="flex-item glassmorph transform3D">
              <img src={imag} width="100%" alt="sa" />
            </div>
          ))}
        </Stack>
      </main>
    </>
  );
};
