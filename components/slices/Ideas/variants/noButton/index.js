import { SliceFactory } from '../../../../common/Containers';
import { Description, Content } from '../default/defaultStyles';
import { PrismicRichText } from '@prismicio/react';

const Base = (slice) => {
  const { tittle, subtittle, bgColorInitial, bgColorEnd } = slice.primary;

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
      </Description>
    </Content>
  );
};

export const NoButton = SliceFactory(Base, {
  sectionContainerProps: {
    style: {
      backgroundImage: 'linear-gradient(188deg, #7E141E , #511319 65% )',
    },
  },
});
