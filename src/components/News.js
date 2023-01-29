import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const News = () => {

    const [newsList, setNewList] = useState([])

    const options = {
        method: 'GET',
        url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-coronavirus-news/0',
        headers: {
            'X-RapidAPI-Key': 'f6734024eemsh8e6929bb1463095p132206jsnb3222f729313',
            'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
        }
    };

    console.log(newsList, 777)

    useEffect(() => {
        axios.request(options).then(function (response) {
            const newsData = response.data;
            console.log(newsData)
            setNewList(newsData.news);
        }).catch(function (error) {
            console.error(error);
        });
        // eslint-disable-next-line
    }, [])

    return (
        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", backgroundColor:"#243B54", padding:"2rem 2rem 2rem 13rem"}}>
            {newsList.map((ele, idx) => {
                return (
                    <Card sx={{ maxWidth: 1000 }}>
                        <CardMedia
                            sx={{ height: 200 }}
                            image={ele.urlToImage}
                            title={ele.title}
                        />
                        <CardContent sx={{backgroundColor:"#1A1A2E"}}>
                            <Typography gutterBottom variant="h5" component="div" color="white">
                                {ele.title}
                            </Typography>
                            <Typography variant="body2" color="white">
                              {ele.content}
                            </Typography>
                        </CardContent>
                    </Card>
                )
            })}
        </div>
    )
}

export default News;





