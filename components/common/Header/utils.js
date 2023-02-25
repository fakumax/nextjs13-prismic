import Link from 'next/link';
import { motion } from 'framer-motion';

import { linkResolver } from '../../../prismicio';

const LinkPage = (data, pagename) => {
  const dataMenu = {
    _meta: {
      type: data.type,
      lang: data.lang,
      uid: data.uid,
      url: data.url,
    },
  };
  return (
    <>
      <Link
        key={`top-nav-${data.id}`}
        href={data.url === '' ? `/${linkResolver(dataMenu)}` : data.url}
        passHref
        prefetch
      >
        {/* <a id={data.id} className={data.uid === pagename ? 'selected' : ''}>
          <motion.li className='nav-item' animate>
            {data.text}
            <div className='underline'></div>
          </motion.li>
        </a> */}
        {data.text}
      </Link>
    </>
  );
};

export const LinkLogo = () => (
  <Link href={'/'} passHref>
    logo
    {/* <Logo width={"48"} height={"33"} /> */}
  </Link>
);

const validNavbarLink = (menuLink) => {
  const { label, link } = menuLink;
  if (
    link.link_type === 'Document' &&
    link.uid !== '' &&
    label[0].text !== ''
  ) {
    return true;
  } else if (
    (link.link_type === 'Web' || link.type === 'Media') &&
    link.url !== '' &&
    label[0].text !== ''
  ) {
    return true;
  } else {
    return false;
  }
};

export const renderedMenuLinks = (menuLinks, pageName) =>
  Array.isArray(menuLinks)
    ? menuLinks.map((menuLink, index) => {
        const { label, link } = menuLink;
        if (validNavbarLink(menuLink)) {
          return (
            <li key={`${index} _menu_links`}>
              <LinkPage
                pageName={pageName}
                uid={link?.uid || ''}
                lang={link?.lang || ''}
                type={link?.type || ''}
                text={label || '-'}
                id={link?.id || '#'}
                slug={link?.slug || '#'}
                url={link?.url || ''}
              />
            </li>
          );
        }
      })
    : '';
