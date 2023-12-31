import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import {MdChevronRight,MdChevronLeft} from 'react-icons/md'

const Row = ({title,fetchURl,rowID}) => {

    const [movies,setMovies] = useState([])
    
    useEffect(()=>{
        axios.get(fetchURl).then((response)=>{
            setMovies(response.data.results)
        })
    },[fetchURl])



  return (
    <>
    <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
    <div className='relative flex items-center group'>
        <MdChevronLeft className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hide hidden group-hover:block' size={40}/>
    <div id={'slider'} className='w-full h-full  overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
        {movies.map((item,id)=>(
            <Movie item={item} />

        ))}
    </div>
    <MdChevronRight  className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hide hidden group-hover:block' size={40}/>
    </div>

    </>
  )
}

export default Row