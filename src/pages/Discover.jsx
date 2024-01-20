import React from 'react'
import { Error , Loader , SongCard } from '../components';
import {genres} from '../assets/constants'

const Discover = () => {
    const genreTitle = 'POP'
    return(

        <div className='flex flex-col'>
            <div className='w-full flex justify-between items-centre 
            sm:flex-row flex-col mt-4 mb-10'>
                <h2 className='font-bold text-3xl text-white text-left'>
                    Discover {genreTitle}
                </h2>
                <select
                onChange={() => {}}
                value= ''
                className='bg-black text-gray-300 p-3 text-sm 
                rounded-lg outline-none sm:mt-0 mt-5'>
                {genres.map((genre)=> (
                    <option key={genre.value} value={genre.value}>
                        {genre.value}
                    </option>
                ))}
                </select>
                <div>
                    
                </div>

            </div>
           
        </div>
    )
}

export default Discover;



