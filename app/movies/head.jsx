import { NextSeo } from 'next-seo';

import { NEXT_SEO_DEFAULT } from '../../next-seo.config';

export default async function Head() {
  const updateMeta = {
    ...NEXT_SEO_DEFAULT,
    title: 'Explore Movies',
  };
  return <NextSeo {...updateMeta} useAppDir={true} />;
}