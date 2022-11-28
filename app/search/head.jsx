import { NextSeo } from 'next-seo';

import { NEXT_SEO_DEFAULT } from '../../next-seo.config';

export default async function Head() {
  const updateMeta = {
    ...NEXT_SEO_DEFAULT,
    title: 'Search',
    description: 'Search for movies and tv shows',
  };
  return <NextSeo {...updateMeta} useAppDir={true} />;
}