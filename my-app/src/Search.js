import { TextField } from "@mui/material";

const Search = (props) => {
        const { onChange, value } = props;

        return <TextField 
        type='search' 
        value={value} 
        onChange={onChange} 
        label="Street" 
        variant="standard"
        
        />;
};

export default Search;