import { Typography } from "@mui/material";
import NavBar from "./NavBar";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import logo from "../assets/p1.jpeg";

function Office() {
  const products = [
    { id: 1, name: "", image: logo },
    { id: 2, name: "", image: logo },
    { id: 3, name: "", image: logo },
    { id: 4, name: "", image: logo },
    { id: 5, name: "", image: logo },
    { id: 6, name: "", image: logo },
    { id: 7, name: "", image: logo },
    { id: 8, name: "", image: logo },
    { id: 9, name: "", image: logo },
    { id: 10, name: "", image: logo },
  ];

  return (
    <>
      <NavBar />
      <div className="w-100 h-100" style={{ marginTop:"8rem", display: "flex",justifyContent:"center",alignSelf:"center"}}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            width:"80%",
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
                width: 200,
                height: 200,
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
