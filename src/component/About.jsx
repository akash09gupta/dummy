import { Typography } from "@mui/material";
import NavBar from "./NavBar";

function About() {
  return (
    <>
      <NavBar />
      <div className="w-100 vh-100 d-flex justify-content-end align-items-center p-5">
        <div className="about text-end">
          <Typography variant="h1">About JPShopFit</Typography>
          <Typography variant="h5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ex enim praesentium quibusdam ipsam vero minima pariatur tempora blanditiis dolor, assumenda distinctio in ab totam sunt voluptates nesciunt facere commodi.
            Quae perferendis beatae qui voluptas porro, architecto asperiores maxime optio aut vel quia perspiciatis a, iure soluta amet, ut animi labore nihil vero ex quas quisquam cum. Soluta, perspiciatis temporibus.
            Id aliquid aspernatur quia accusamus officia nesciunt laborum ea quibusdam nobis voluptas culpa expedita, dolorum cupiditate corrupti blanditiis qui quae eligendi omnis aut labore assumenda quas sapiente maxime ipsam. Dolore.
          </Typography>
        </div>
      </div>
    </>
  );
}

export default About;
