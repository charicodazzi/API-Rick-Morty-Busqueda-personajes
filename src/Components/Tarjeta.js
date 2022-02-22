import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Tarjeta = ({ imagen, nombre, status }) => {
  return (
    <Box>
      <Card sx={{ width: 300, m: 2 }}>
        <CardMedia
          component="img"
          height="300"
          image={imagen}
          alt="character"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Status: {status}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Tarjeta;
