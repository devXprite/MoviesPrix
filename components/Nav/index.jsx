/* eslint-disable react-hooks/rules-of-hooks */

'use client';

import { BiCameraMovie } from 'react-icons/bi';

import {
  MdMovie, MdBookmarks, MdTv, MdSearch, MdHome,
} from 'react-icons/md';

import { RiMovie2Line, RiGithubFill } from 'react-icons/ri';
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
        {/* <RiMovie2Line /> */}
        <p>MoviesPrix</p>
      </div>
      <div className="linksContainer">
        {
                    routesArray.map((route) => (
                      <Link
                        key={route.title}
                        href={route.path}
                        className={route.pathRegex.test(usePathname()) ? 'active' : ''}
                      >
                        <span className="link__icon">{route.icon}</span>
                        <span className="link__title">{route.title}</span>
                      </Link>
                    ))
                }

        <a
          href="https://github.com/devXprite/MoviesPrix"
          className="source"
        >
          <span className="link__icon"><RiGithubFill /></span>
          <span className="link__title">View Source</span>
        </a>
      </div>
    </nav>
  );
}
