import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";

const Search = ({ escritoInput, clickBoton }) => {
  return (
    <Box
      component="form"
      sx={{
        m: 1,
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        sx={{ width: 400 }}
        id="standard-basic"
        label="Search your character"
        variant="standard"
        onChange={escritoInput}
      />
      <Button
        margin="normal"
        variant="outline"
        endIcon={<SearchIcon />}
        onClick={clickBoton}
      >
        Buscar
      </Button>
    </Box>
  );
};
export default Search;
