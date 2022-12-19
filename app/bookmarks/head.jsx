import { NextSeo } from 'next-seo';

import { NEXT_SEO_DEFAULT } from '../../next-seo.config';

export default async function Head() {
  const updateMeta = {
    ...NEXT_SEO_DEFAULT,
    title: 'BookMarks',
    Noindex: true,
  };
  return <NextSeo {...updateMeta} useAppDir />;
}
