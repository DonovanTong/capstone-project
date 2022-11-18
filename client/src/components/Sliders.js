import React from 'react'
import {useState, useEffect} from 'react'
import {Grid, Typography, Slider, Checkbox} from '@material-ui/core'

const sliders = {
    'acousticness': {
        value: [0,1],
        enabled: false,
        min: 0,
        max: 1,
        step: 0.01,
    },
    'danceability': {
        value: [0,1],
        enabled: false,
        min: 0,
        max: 1,
        step: 0.01,
    },
    'energy': {
        value: [0,1],
        enabled: false,
        min: 0,
        max: 1,
        step: 0.01,
    },
    'instrumentalness': {
        value: [0,1],
        enabled: false,
        min: 0,
        max: 1,
        step: 0.01,
    },
    'liveness': {
        value: [0,1],
        enabled: false,
        min: 0,
        max: 1,
        step: 0.01,
    },
    'loudness': {
        value: [-60,0],
        enabled: false,
        min: -60,
        max: 0,
    },
    'popularity': {
        value: [0,100],
        enabled: false,
        min: 0,
        max: 100,
        step: 1,
    },
    'speechiness': {
        value: [0,1],
        enabled: false,
        min: 0,
        max: 1,
        step: 0.01,
    },
    'tempo': {
        value: [0,200],
        enabled: false,
        min: 0,
        max: 200,
        step: 1,
    },
    'valence': {
        value: [0,1],
        enabled: false,
        min: 0,
        max: 1,
        step: 0.01,
    },
    
}