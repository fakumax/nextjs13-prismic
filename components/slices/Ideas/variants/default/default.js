import { SliceFactory } from '../../../../common/Containers';
import { Description, Content, Button } from '../default/defaultStyles';
import { PrismicRichText } from '@prismicio/react';

const Base = (slice) => {
  const {
    tittle,
    subtittle,
    buttontext,
    buttonLink,
    bgColorInitial,
    bgColorEnd,
  } = slice.primary;

  return (
    <Content>
      <Description>
        {subtittle[0]?.text ? (
          <PrismicRichText field={subtittle} />
        ) : (
          <h3>Ready to get started?</h3>
        )}
        {tittle[0]?.text ? (
          <PrismicRichText field={tittle} />
        ) : (
          <h2>We turn your ideas into reality.</h2>
        )}
        <Button>{buttontext ? buttontext : `Let's Talk`}</Button>
      </Description>
    </Content>
  );
};

export const Default = SliceFactory(Base, {
  sectionContainerProps: {
    style: {
      backgroundImage: 'linear-gradient(188deg, #FDE06A , #FBEFBE 95% )',
    },
  },
});
