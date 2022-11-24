// "use client"

import Image from 'next/image'
import styles from './page.module.scss'
// import Carousel from '../components/Carousel'
import Card from '../components/Card';
import Link from 'next/link';

const categoryArray = [
  {
    title: 'Treanding',
    apiUrl: 'https://api.themoviedb.org/3/trending/movie/week?api_key=6217472bdd628b9268b65c128bf3cc6b'
  },
  {
    title: 'Popular',
    apiUrl: 'https://api.themoviedb.org/3/discover/movie?api_key=6217472bdd628b9268b65c128bf3cc6b&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1'
  },
  {
    title: 'Top Rated',
    apiUrl: 'https://api.themoviedb.org/3/discover/movie?api_key=6217472bdd628b9268b65c128bf3cc6b&language=en-US&sort_by=vote_average.desc&include_adult=true&include_video=false&page=1'
  },
  {
    title: 'Action',
    apiUrl: 'https://api.themoviedb.org/3/discover/movie?api_key=6217472bdd628b9268b65c128bf3cc6b&language=en-US&include_adult=true&include_video=false&page=1&with_genres=28'
  },
  {
    title: 'Comedy',
    apiUrl: 'https://api.themoviedb.org/3/discover/movie?api_key=6217472bdd628b9268b65c128bf3cc6b&language=en-US&include_adult=true&include_video=false&page=1&with_genres=35'
  },
  {
    title: 'Adultery',
    apiUrl: 'https://api.themoviedb.org/3/discover/movie?api_key=6217472bdd628b9268b65c128bf3cc6b&language=en-US&include_adult=true&include_video=false&page=1&with_genres=10749'
  },
  {
    title: 'Horror',
    apiUrl: 'https://api.themoviedb.org/3/discover/movie?api_key=6217472bdd628b9268b65c128bf3cc6b&language=en-US&include_adult=true&include_video=false&page=1&with_genres=27'
  },
  {
    title: 'Documentary',
    apiUrl: 'https://api.themoviedb.org/3/discover/movie?api_key=6217472bdd628b9268b65c128bf3cc6b&language=en-US&include_adult=true&include_video=false&page=1&with_genres=99'
  }
]

const getCardsByCategory = async (api,cardSize) => {
  const res = await fetch(api)
  const data = await res.json()

  const cardComponents = data.results.slice(0, 12).map((movie,i) =>  <Card key={i} className={cardSize} {...movie}  />)

  return cardComponents;
}

export default async function Home() {

  return (
    <div>
      {
        await Promise.all(categoryArray.map(async (category) => (
            <div key={category.title}>
              <h2 className='categoryTitle'>{category.title}</h2>
              <div className='cardContainer'>
                {await getCardsByCategory(category.apiUrl, (category.title === 'Treanding' ? 'wide' : 'normal'))}
              </div>
            </div>
          )
        ))
      }
    </div>
  )
}
