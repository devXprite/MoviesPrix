/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import styles from './nav.scss'
import {BiCameraMovie} from 'react-icons/bi'

import {MdMovie,MdBookmarks, MdTv, MdSearch,MdHome} from 'react-icons/md'
// import {BiBookmark,BiSearch,BiHome} from 'react-icons/bi'


import Link from 'next/link'

import {usePathname} from 'next/navigation'

const routesArray = [
    {
        title: 'Home',
        path: '/',
        pathRegex: /^\/$/,
        icon: <MdHome/>
    },
    {
        title: 'Movies',
        path: '/movies',
        pathRegex: /^\/movies/,
        icon: <MdMovie/>
    },
    {
        title: 'Search',
        path: '/search',
        pathRegex: /^\/search/,
        icon: <MdSearch/>
    },
    {
        title: 'TV Series',
        path: '/tv',
        pathRegex: /^\/tv/,
        icon: <MdTv/>
    },
    {
        title: 'Bookmarks',
        path: '/bookmarks',
        pathRegex: /^\/bookmarks/,
        icon: <MdBookmarks/>
    }
]

export default function Nav() {
    return (
        <nav className='NavBar'>
            <div className="logo">
                <BiCameraMovie/>
            </div>
            <div className="linksContainer">
                {
                    routesArray.map((route) => (
                        <Link 
                            key={route.title}
                            href={route.path}
                            className={route.pathRegex.test(usePathname()) ? 'active' : ''}
                        >
                            {route.icon}
                        </Link>                            
                    ))
                }
            </div>
        </nav>
    )
}