import * as React from 'react';
import './WeatherPage.scss'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
const WeatherPage = () => {


    const [weather, setWeather] = useState([])
    const [city, setCity] = useState('Kassel')
    const apiKey = '3d1fb0f9e005abcb8c374190edc2a54a'
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                setWeather(data)
            })
    }, [city])

    console.log(search);


    return (
        <Card>
            <CardContent>
                <Typography
                    variant='h5'
                    component='h1'
                    fontWeight={500}>
                    Weather API Project
                </Typography>
                <CardActions>
                    <ButtonGroup
                        size='small'
                        variant="contained"
                        aria-label="outlined primary button group">
                        <Button onClick={() => setCity('düsseldorf')}>Düsseldorf</Button>
                        <Button onClick={() => setCity('berlin')}>Berlin</Button>
                        <Button onClick={() => setCity('köln')}>Köln</Button>
                        <Button onClick={() => setCity('hamburg')}>Hamburg</Button>
                    </ButtonGroup>
                </CardActions>
                <Box>
                    <TextField
                        sx={{mt: '10px'}}
                        size='small'
                        className='citySearch'
                        id="standard-basic"
                        label="Search city"
                        variant="outlined"
                        onChange={(e) => {
                            setSearch(e.target.value)
                        }}/>
                    <IconButton
                        color="primary"
                        aria-label="add to shopping cart"
                        onClick={() => setCity(search)}>
                        <SearchIcon />
                    </IconButton>
                </Box>
                <CardContent>
                    <Box
                        display='flex'
                        justifyContent={'space-between'}
                        alignItems='center'
                        ml={2}
                        mr={2}>
                        <Box>
                            <Typography
                                align='left'
                                fontWeight={500}
                                fontSize={20}>
                                {weather.name}
                            </Typography>
                            <Typography
                                align='left'>
                                {/* {weather.weather[0].main} */}
                            </Typography>
                        </Box>
                        <Box>
                            <img width={100} src="https://basmilius.github.io/weather-icons/production/fill/all/clear-day.svg" alt="" />
                        </Box>
                    </Box>
                </CardContent>
            </CardContent>
        </Card>
    );
}

export default WeatherPage;