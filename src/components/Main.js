import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const tableColumn = [
  {name: "RANK"},
  {name: "COUNTRIES"},
  {name: "TOTAL CASES"},
  {name: "NEW CASES"},
  {name: "INFECTION RISK"},
  {name: "SERIOUS CRITICAL"},
  {name: "ACTIVE CASES"},
  {name: "TOTAL DEATHS"},
  {name: "NEW DEATHS"},
  {name: "CASE FATALITY RATE"},
  {name: "TOTAL TESTS"},
  {name: "TEST PERCENTAGE"},
  {name: "TOTAL RECOVERED"},
  {name: "RECOVERED PERCENTAGE"},
  {name: "POPULATION"},
];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'white',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },
}));


const Main = () => {

  const [list, setList] = useState([]);
  const [totalCases, setTotalCases] = useState([]);
  const [contval, setContVal] = useState("")

  const options = {
    method: 'GET',
    url: `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/${contval}`,
    headers: {
      'X-RapidAPI-Key': 'f6734024eemsh8e6929bb1463095p132206jsnb3222f729313',
      'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
    }
  };

  useEffect(() => {
    axios.request(options).then(function (response) {
      const data = response.data;
      setList(data);
      setTotalCases(data[0])
    }).catch(function (error) {
      console.error(error);
    });
    // eslint-disable-next-line
  },[contval])

  const setContinent = [
    { name: "World", value: "" },
    { name: "Asia", value: "asia" },
    { name: "Africa", value: "africa" },
    { name: "Europe", value: "europe" },
    { name: "North America", value: "northamerica" },
    { name: "South America", value: "southamerica" },
    { name: "Oceania", value: "australia" },
  ];

  const keyPressed = (e) =>{
    if(e.keyCode === 13){
      const query = e.target.value;
      list.Country.filter((ele)=>ele.e !== query)
    }
  }


  return (
    <main style={{ backgroundColor: "#243B54", display: "flex", justifyContent: "space-between", }}>
      <Box className='leftMainContainer' style={{ width: "20vw", height: "95vh", }}>
        <Box>
          <Typography variant="h5" color="white" fontWeight={"550"} m="15px 0px" textAlign="center">
            Continents
          </Typography>
          {setContinent.map((ele, idx) => {
            return (
              <div onClick={()=> setContVal(ele.value)} key={idx} style={{ margin: "10px", borderRadius: "10px", backgroundColor: "#083358", cursor: "pointer" }}>
                <Typography variant="h6" color="white" padding={"6px"} >
                  {ele.name}
                </Typography>
              </div>
            )
          })}
        </Box>

        <Box>
          <Typography variant="h5" color="white" fontWeight={"550"} m="15px 0px" textAlign="center">
            Most Viewed
          </Typography>
          <div style={{ margin: "10px", borderRadius: "10px", backgroundColor: "#083358", cursor: "pointer" }}>
            <Typography variant="h6" color="white" padding={"6px"} >
              USA
            </Typography>
          </div>
          <div style={{ margin: "10px", borderRadius: "10px", backgroundColor: "#083358", cursor: "pointer" }}>
            <Typography variant="h6" color="white" padding={"6px"} >
              India
            </Typography>
          </div>
          <div style={{ margin: "10px", borderRadius: "10px", backgroundColor: "#083358", cursor: "pointer" }}>
            <Typography variant="h6" color="white" padding={"6px"} >
              china
            </Typography>
          </div>
        </Box>

        <Box>
          <Typography variant="h5" color="white" fontWeight={"550"} m="15px 0px" textAlign="center">
            Countries
          </Typography>
          {list.slice(2).map((ele, idx) => {
            return (
              <div key={idx} style={{ margin: "10px", borderRadius: "10px", backgroundColor: "#083358", cursor: "pointer" }}>
                <Typography variant="h6" color="white" padding={"6px"} >
                  {ele.Country}
                </Typography>
              </div>
            )
          })}
        </Box>
      </Box>

      <Box style={{ width: "80vw", height: "95vh", borderRadius: "15px", margin: "20px 20px 20px 2px" }}>
        <Box>
          <main style={{ display: "flex", width: "100%", justifyContent: "space-between", padding: "0px 20px", flexWrap: "wrap" }}>
            <div className='gradient' style={{ width: "32.5%", padding: "8px", textAlign: "center" }}>
              <Typography variant="h5" color="white" letterSpacing="4px">
                TOTAL CASES
              </Typography>
              <Typography variant="h6" color="yellow" letterSpacing="3px">
                {totalCases.TotalCases}
              </Typography>
            </div>

            <div className='gradient' style={{ width: "32.5%", padding: "8px", textAlign: "center" }}>
              <Typography variant="h5" color="white" letterSpacing="4px" >
                ACTIVE CASES
              </Typography>
              <Typography variant="h6" color="#F79533" letterSpacing="3px">
                {totalCases.ActiveCases}
              </Typography>
            </div>

            <div className='gradient' style={{ width: "32.5%", padding: "8px", textAlign: "center" }}>
              <Typography variant="h5" color="white" letterSpacing='4px'>
                TOTAL DEATHS
              </Typography>
              <Typography variant="h6" color="error" letterSpacing="3px">
                {totalCases.TotalDeaths}
              </Typography>
            </div>
            <div className='gradient' style={{ width: "32.5%", padding: "8px", textAlign: "center", marginTop: "20px" }}>
              <Typography variant="h5" color="white" letterSpacing="4px">
                NEW CASES
              </Typography>
              <Typography variant="h6" color="yellow" letterSpacing="3px">
                {totalCases.NewCases}
              </Typography>
            </div>

            <div className='gradient' style={{ width: "32.5%", padding: "8px", textAlign: "center", marginTop: "20px" }}>
              <Typography variant="h5" color="white" letterSpacing="4px">
                CRITICAL
              </Typography>
              <Typography variant="h6" color="#F79533" letterSpacing="3px">
                {totalCases.Serious_Critical}
              </Typography>
            </div>

            <div className='gradient' style={{ width: "32.5%", padding: "8px", textAlign: "center", marginTop: "20px" }}>
              <Typography variant="h5" color="white" letterSpacing="4px">
                NEW DEATHS
              </Typography>
              <Typography variant="h6" color="error" letterSpacing="3px">
              {totalCases.NewDeaths}
              </Typography>
            </div>
          </main>
        </Box>

        <Box>
          <main className='rightMainContainer' style={{ width: "97%", height: "68vh" }}>
            <div style={{ display: "flex", justifyContent: "space-between", margin: "10px 20px" }} >
              <Typography variant="h5" color="white" >
                World Data
              </Typography>
              <Box>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    onKeyUp={keyPressed}
                  />
                </Search>
              </Box>
            </div>

            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                  {tableColumn.map((ele)=>{
                    return(
                      <TableCell 
                        align="left"
                        sx={{backgroundColor:"#1A1A2E", color:"white", whiteSpace:"nowrap", border:"none"}}
                      >
                        {ele.name}
                      </TableCell>
                    )
                  })}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(list.slice(2)).map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ backgroundColor:"#535362"}}

                    >
                      <TableCell component="th" scope="row" sx={{color:"#FFD700", fontSize:"16px"}}>
                        {row.rank}
                      </TableCell>
                      <TableCell component="th" scope="row" sx={{fontSize:"16px"}}>
                        {row.Country}
                      </TableCell>
                      <TableCell align="left" sx={{color:"#19D3DA" ,fontSize:"16px"}}>{row.TotalCases}</TableCell>
                      <TableCell align="left" sx={{color:"red" ,fontSize:"16px"}}>{row.NewCases}</TableCell>
                      <TableCell align="left" sx={{color:"#19D3DA" ,fontSize:"16px"}}>{row.Infection_Risk}%</TableCell>
                      <TableCell align="left" sx={{color:"#FF6E44" ,fontSize:"16px"}}>{row.Serious_Critical}</TableCell>
                      <TableCell align="left" sx={{color:"#FFD700" ,fontSize:"16px"}}>{row.ActiveCases}</TableCell>
                      <TableCell align="left" sx={{color:"#EF3658" ,fontSize:"16px"}}>{row.TotalDeaths}</TableCell>
                      <TableCell align="left" sx={{color:"#EF3658" ,fontSize:"16px"}}>{row.NewDeaths}</TableCell>
                      <TableCell align="left" sx={{color:"#DF673E" ,fontSize:"16px"}}>{row.Case_Fatality_Rate}%</TableCell>
                      <TableCell align="left" sx={{color:"#19D3DA" ,fontSize:"16px"}}>{row.TotalTests}</TableCell>
                      <TableCell align="left" sx={{color:"#FFD700" ,fontSize:"16px"}}>{row.Test_Percentage}%</TableCell>
                      <TableCell align="left" sx={{color:"#FFD700" ,fontSize:"16px"}}>{row.TotalRecovered}</TableCell>
                      <TableCell align="left" sx={{color:"#DF673E" ,fontSize:"16px"}}>{row.Recovery_Proporation}%</TableCell>
                      <TableCell align="left" sx={{color:"#19D3DA" ,fontSize:"16px"}}>{row.Population}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </main>
        </Box>
      </Box>
    </main>
  )
}

export default Main;