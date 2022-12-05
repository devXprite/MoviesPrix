/* eslint-disable react-hooks/rules-of-hooks */

'use client';

import { BiCameraMovie } from 'react-icons/bi';

import {
  MdMovie, MdBookmarks, MdTv, MdSearch, MdHome,
} from 'react-icons/md';

import { RiMovie2Line } from 'react-icons/ri';

import Link from 'next/link';

import { usePathname } from 'next/navigation';
import styles from './nav.scss';

const routesArray = [
  {
    title: 'Home',
    path: '/',
    pathRegex: /^\/$/,
    icon: <MdHome />,
  },
  {
    title: 'Movies',
    path: '/movies',
    pathRegex: /^\/movies/,
    icon: <MdMovie />,
  },
  {
    title: 'Search',
    path: '/search',
    pathRegex: /^\/search/,
    icon: <MdSearch />,
  },
  {
    title: 'TV Series',
    path: '/tv',
    pathRegex: /^\/tv/,
    icon: <MdTv />,
  },
  {
    title: 'Bookmarks',
    path: '/bookmarks',
    pathRegex: /^\/bookmarks/,
    icon: <MdBookmarks />,
  },
];

export default function Nav() {
  return (
    <nav className="NavBar">
      <div className="logo">
        <RiMovie2Line />
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
  );
}
