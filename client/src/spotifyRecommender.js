import React, { useState } from "react";
import './App.css'
import axios from 'axios'
import {Grid, TextField, Button} from '@material-ui/core'
import {Search} from '@material-ui/icons'

const SpotifyRecommender = ({auth}) => {
    const {token} = auth;
    const [searchString, setSearchString] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const SearchSpotify = async () => {
        const url = 'https://api.spotify.com/v1/search'
        const searchQuery = encodeURIComponent(searchString)
        const typeQuery = `type=artist`
        const data = axios.get(`${url}?q=${searchQuery}&${typeQuery}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        if (data && data.artists) {
            setSearchResults(data.artists.items)
        }
    }
    return (<div className='App'>
        <Grid container style={{padding: 20}} spacing={1}>
            <Grid item xs={12}>
                Spotify Recommender
            </Grid>
            <Grid item xs={6}>
                <Grid item xs={12} style={{display: 'flex', flexDirection: 'row'}}>
                    <TextField
                    variant={'outlined'}
                    label={"Search"}
                    style={{backgroundColor: 'white'}}
                    fullWidth
                    onChange={event => setSearchString(event.target.value)}
                    value={searchString}
                    />
                    <Button style={{backgroundColor: '#5EA9B1'}} onClick={SearchSpotify}>
                        <Search/>
                    </Button>
                </Grid>
            </Grid>
            <Grid item xs={12}>
            </Grid>
        </Grid>

    </div>)
}

export default SpotifyRecommender