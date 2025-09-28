import { Typography } from "@mui/material";
import NavBar from "./NavBar";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import logo from "../assets/p1.jpeg";

function Office({ products }) {

  return (
    <>
      <NavBar />
      <div className="w-100 h-100" style={{ marginTop:"8rem", display: "flex",justifyContent:"center",alignSelf:"center"}}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            width:"100%",
            gap: 2,
            justifyContent: "center",
            
          }}
        >
          {products.map((product) => (
            <Paper
              key={product.id}
              sx={{
                backgroundImage: `url(${product.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: 250,
                height: 250,
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                color: "white",
                fontWeight: "bold",
                p: 1,
                borderRadius: 2,
                boxShadow: 3,
              }}
            >
              {product.name}
            </Paper>
          ))}
        </Box>
      </div>
    </>
  );
}

export default Office;
