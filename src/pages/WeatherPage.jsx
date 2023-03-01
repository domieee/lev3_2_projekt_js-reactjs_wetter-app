import * as React from 'react';
import './WeatherPage.scss'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
const WeatherPage = () => {


    const [weather, setWeather] = useState([])
    const [city, setCity] = useState('Kassel')

    const apiKey = '3d1fb0f9e005abcb8c374190edc2a54a'

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            setWeather(data)
        })
    }, [city])

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
                            variant="contained"
                            aria-label="outlined primary button group">
                            <Button onClick={() => setCity('düsseldorf')}>Düsseldorf</Button>
                            <Button onClick={() => setCity('berlin')}>Berlin</Button>
                            <Button onClick={() => setCity('köln')}>Köln</Button>
                            <Button onClick={() => setCity('hamburg')}>Hamburg</Button>
                        </ButtonGroup>
                    </CardActions>
                    <CardContent>
                        <Box
                            display='flex'
                            justifyContent={'space-around'}
                            alignItems={'center'}
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
                                    {weather.name}
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