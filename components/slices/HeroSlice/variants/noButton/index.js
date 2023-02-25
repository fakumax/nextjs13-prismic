import { SliceFactory } from '../../../../common/Containers';
import { Description, Content, ImgHolder } from '../default/defaultStyles';
import { PrismicRichText } from '@prismicio/react';

const Base = (slice) => {
  const { description, image, title, mobileimage } = slice.primary;

  // window.console.log('--slice--', slice)

  return (
    <Content>
      <Description>
        {title[0]?.text ? (
          <PrismicRichText field={title} />
        ) : (
          <h1>Expand your digital presence with Platform Projects today</h1>
        )}
        {description[0]?.text ? (
          <PrismicRichText field={description} />
        ) : (
          <p>Expand your digital presence with Platform Projects today.</p>
        )}
      </Description>
      <ImgHolder>
        <picture>
          <source srcSet={image.url} media='(max-width: 500px)' />
          <source srcSet={mobileimage.url} media='(max-width: 960px)' />
          <img src={image.url} alt='HeroImg' />
        </picture>
      </ImgHolder>
    </Content>
  );
};

export const NoButton = SliceFactory(Base);
