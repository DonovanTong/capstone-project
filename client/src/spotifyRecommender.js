import React, { useState } from "react";
import './App.css'
import axios from 'axios'
import {Grid, TextField, Button, Typography} from '@material-ui/core'
import {Search} from '@material-ui/icons'
import SearchResults from "./components/SearchResults";
import ResultsList from './components/ResultsList'

const SpotifyRecommender = ({auth}) => {
    const {token} = auth;
    const [searchString, setSearchString] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [selectedArtists, setSelectedArtists] = useState([])
    const [results, setResults] = useState(null)

    const searchSpotify = async () => {
        const url = 'https://api.spotify.com/v1/search'
        const searchQuery = encodeURIComponent(searchString)
        const typeQuery = `type=artist`
        const { data } = await axios.get(`${url}?q=${searchQuery}&${typeQuery}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log(data)
        if (data && data.artists) {
            setSearchResults(data.artists.items)
        }
    }
    const getRecommendations = async () => {
        const url = 'https://api.spotify.com/v1/recommendations'

        let selectedArtistsString
        if (selectedArtists < 0) {
            return
        } else {
            selectedArtistsString = `seed_artists=${selectedArtists.join(',')}`
        }

        console.log(`${url}?${selectedArtistsString}`)
        
        const {data} = await axios.get(`${url}?${selectedArtistsString}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        setResults(data)
    }
    return (<div className='App'>
        <Grid container style={{padding: 50}} spacing={1}>
            <Grid item xs={12} style={{fontSize: '20px'}}>
                Spotify Recommender
            </Grid>
            <Grid item xs={12}>
                <Grid item xs={12}>
                    {selectedArtists.map((artist, index) => (
                        <Typography>
                            {index+1}. {artist}
                        </Typography>
                    ))}
                </Grid>
                <Grid item xs={12} style={{display: 'flex', flexDirection: 'row'}}>
                    <TextField
                    variant={'outlined'}
                    label={"Search"}
                    style={{backgroundColor: 'white'}}
                    fullWidth
                    onChange={event => setSearchString(event.target.value)}
                    value={searchString}
                    />
                    <Button style={{backgroundColor: '#5EA9B1'}} onClick={searchSpotify}>
                        <Search/>
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <SearchResults onChange={setSelectedArtists} results={searchResults}/>
                </Grid>
            </Grid>
            <Grid item xs={12} style={{padding: 20}}>
                <Button variant={'contained'} onClick={getRecommendations}>
                    Get Recommendations
                </Button>
            </Grid>
            <Grid item xs={12}>
                {results && <ResultsList results={results}/> }
            </Grid>
        </Grid>

    </div>)
}

export default SpotifyRecommender