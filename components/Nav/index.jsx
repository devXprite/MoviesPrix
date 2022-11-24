/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import styles from './nav.scss'
import {BiCameraMovie} from 'react-icons/bi'
import {MdMovie,MdBookmarks, MdTv, MdSearch,MdHome} from 'react-icons/md'

import Link from 'next/link'

import {usePathname} from 'next/navigation'

const routesArray = [
    {
        title: 'Home',
        path: '/',
        icon: <MdHome/>
    },
    {
        title: 'Search',
        path: '/search',
        icon: <MdSearch/>
    },
    {
        title: 'Movies',
        path: '/movies',
        icon: <MdMovie/>
    },
    {
        title: 'Series',
        path: '/series',
        icon: <MdTv/>
    },
    {
        title: 'Bookmarks',
        path: '/bookmarks',
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
                            className={usePathname() === route.path ? 'active' : ''}
                        >
                            {route.icon}
                        </Link>                            
                    ))
                }
            </div>
        </nav>
    )
}