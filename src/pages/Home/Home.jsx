import React from 'react'
import './Home.scss'
import BoxContent from '../../components/Content/BoxContent'

const boxDetails = [
    {
        title: 'Made for Nail Hasanli',
        to: '/random',
        children: [
            {
                id: 1,
                title: 'Daily Mix 1',
                artist: 'Paster',
                description: 'Paster, Orkhan Zeynalli, Miro and more',
                cover: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb860398e3f9a8690e2001b386/1/en/default',
                type: 'album',
                src: 'https://cdn.freesound.org/previews/685/685928_1648170-lq.mp3'
            },
            {
                id: 2,
                title: 'Daily Mix 2',
                artist: 'Orkhan Zeynalli',
                description: 'Paster, Orkhan Zeynalli, Miro and more',
                cover: 'https://seed-mix-image.spotifycdn.com/v6/img/twenty_tens/7dGJo4pcD2V6oG8kP0tJRR/en/default',
                type: 'album',
                src: 'https://cdn.freesound.org/previews/685/685917_2061858-lq.mp3'
            },
            {
                id: 3,
                title: 'Daily Mix 3',
                artist: 'Miro',
                description: 'Paster, Orkhan Zeynalli, Miro and more',
                cover: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb22249e65eef713a44432ff58/3/en/default',
                type: 'album',
                src: 'https://cdn.freesound.org/previews/685/685913_6565462-lq.mp3'
            },
            {
                id: 4,
                title: 'Yazılım ilk addım',
                artist: 'Podcast',
                description: 'Yazılım ilk addım',
                cover: 'https://i.scdn.co/image/ab67656300005f1f3235d947f18aab338edffdbd',
                type: 'podcast',
                src: 'https://cdn.freesound.org/previews/685/685912_6565462-lq.mp3'
            },
            {
                id: 5,
                title: 'Paster',
                artist: 'Paster',
                description: 'Artist',
                cover: 'https://i.scdn.co/image/ab676161000051749cf62fd6ec0757cb49ff318b',
                type: 'artist',
                src: 'https://cdn.freesound.org/previews/685/685928_1648170-lq.mp3'
            },

        ]
    },
    {
        title: 'Your top mixes',
        to: '/random2',
        children: [
            {
                id: 1,
                title: 'Pop mix',
                description: 'Harry Styles, KÖFN, EDIS and more',
                cover: 'https://seed-mix-image.spotifycdn.com/v6/img/pop/6KImCVD70vtIoJWnq6nGn3/en/default',
                type: 'album'
            },
            {
                id: 2,
                title: 'Rock mix',
                description: 'Paster, Orkhan Zeynalli, Miro and more',
                cover: 'https://seed-mix-image.spotifycdn.com/v6/img/rock/4Vr0nv4nM4aqWfj76zDTTp/en/default',
                type: 'album'
            },
            {
                id: 3,
                title: 'Hip Hop Mix',
                description: 'Paster, Orkhan Zeynalli, Miro and more',
                cover: 'https://seed-mix-image.spotifycdn.com/v6/img/hip_hop/7dGJo4pcD2V6oG8kP0tJRR/en/default',
                type: 'album'
            },
            {
                id: 4,
                title: 'Orkhan Zeynalli mix',
                description: 'NJ, Miro and Defacto',
                cover: 'https://seed-mix-image.spotifycdn.com/v6/img/artist/2H2Dv0GkeGGccHeFU40q7p/en/default',
                type: 'album'
            },
            {
                id: 5,
                title: 'Chill mix',
                description: 'Lana Del Rey, Mr.Kitty and more',
                cover: 'https://seed-mix-image.spotifycdn.com/v6/img/chill/0pWwt5vGNzezEhfAcc420Y/en/default',
                type: 'album'
            },
        ]


    },
    {
        title: 'Your top mixes',
        to: '/random2',
        children: [
            {
                id: 1,
                title: 'Pop mix',
                artist: 'EDIS',
                description: 'Harry Styles, KÖFN, EDIS and more',
                cover: 'https://seed-mix-image.spotifycdn.com/v6/img/pop/6KImCVD70vtIoJWnq6nGn3/en/default',
                type: 'album'
            },
            {
                id: 2,
                title: 'Rock mix',
                artist: 'Epi',
                description: 'Paster, Orkhan Zeynalli, Miro and more',
                cover: 'https://seed-mix-image.spotifycdn.com/v6/img/rock/4Vr0nv4nM4aqWfj76zDTTp/en/default',
                type: 'album'
            },
            {
                id: 3,
                title: 'Hip Hop Mix',
                artist: 'Xpert',
                description: 'Paster, Orkhan Zeynalli, Miro and more',
                cover: 'https://seed-mix-image.spotifycdn.com/v6/img/hip_hop/7dGJo4pcD2V6oG8kP0tJRR/en/default',
                type: 'album'
            },
            {
                id: 4,
                title: 'Orkhan Zeynalli mix',
                artist: 'Qaraqan',
                description: 'NJ, Miro and Defacto',
                cover: 'https://seed-mix-image.spotifycdn.com/v6/img/artist/2H2Dv0GkeGGccHeFU40q7p/en/default',
                type: 'album'
            },
            {
                id: 5,
                title: 'Chill mix',
                artist: 'Lana Del Rey',
                description: 'Lana Del Rey, Mr.Kitty and more',
                cover: 'https://seed-mix-image.spotifycdn.com/v6/img/chill/0pWwt5vGNzezEhfAcc420Y/en/default',
                type: 'album'
            },
        ]


    }
    
]


const Home = () => {
  return (
    <div className='home-section'>
       {
        boxDetails.map((item) => {
            return (
                <BoxContent {...item}/>

            )
        })
       }
    </div>
  )
}

export default Home