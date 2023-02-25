import React, { useState } from 'react';
import { renderedMenuLinks, LinkLogo } from './utils';
import { Button } from './HeaderStyles';

import { LeftWrap, NavContainer, SectionContainer } from './HeaderStyles';

export const Header = ({ header, pagename, activeDocMeta }) => {
  const [open, setOpen] = useState(false);
  const [langToggle, setLangToggle] = useState(false);
  const [countryToggle, setCountryToggle] = useState(false);

  activeDocMeta.lang = header.lang;

  const menuLinks = header?.data?.menulinks || [];
  const buttontext = header?.data?.calltoactiontext[0]?.text || [];

  return (
    <NavContainer>
      <SectionContainer>
        <LinkLogo />
        <LeftWrap>
          <ul>{renderedMenuLinks(menuLinks, pagename)}</ul>
          <div className='button-container'>
            <Button>{buttontext ? buttontext : 'Acceso'}</Button>
          </div>
        </LeftWrap>
      </SectionContainer>
    </NavContainer>
  );
};
