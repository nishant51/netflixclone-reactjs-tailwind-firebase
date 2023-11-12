import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'
import Footeer from '../components/Footeer'

const Home = () => {
  return (
    <div>
        <Main/>
        <Row rowID='1' title = "Trendings" fetchURl={requests.requestTrending} />
        <Row rowID='2' title = "Horrer" fetchURl={requests.requestHorror} />
        <Row rowID='3' title = "Up Comming" fetchURl={requests.requestUpcoming} />
        <Row rowID='4' title = "TopRated" fetchURl={requests.requestTopRated} />
        <Row rowID='5' title = "Popular" fetchURl={requests.requestPopular} />
        <Footeer />
    </div>
  )
}

export default Home