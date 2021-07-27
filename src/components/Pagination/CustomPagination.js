import React from 'react'
import Pagination from '@material-ui/lab/Pagination';
import { createMuiTheme , ThemeProvider } from '@material-ui/core';


const darkTheme = createMuiTheme({
    palette :{
        type : "dark",
    },
});

const CustomPagination = ({setPage , numOfPages = 10}) => {

    const handelPageChange = (page) => {
        setPage(page);
        window.scroll(0,0);
    }


    return (
        <div style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: 10,
            color : "white" ,
          }}>
            <ThemeProvider theme={darkTheme}>

                <Pagination count = {numOfPages} onChange={(e)=> handelPageChange(e.target.textContent)  } color = "primary"/>
            </ThemeProvider>
            
        </div>
    )
}

export default CustomPagination
