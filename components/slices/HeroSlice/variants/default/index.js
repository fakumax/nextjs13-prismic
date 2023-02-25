import { SliceFactory } from "../../../../common/Containers";
import { Description, Content, ImgHolder, Button } from "../default/defaultStyles";
import { RichText } from "prismic-reactjs";

const Base = slice => {
  const { description, image, title, mobileimage, buttontext } = slice.primary;

  // window.console.log('--slice--', slice)

  return (
    <Content>
      <Description>
        {title[0]?.text ? RichText.render(title) : <h1>Desarrollamos Proyectos verdes</h1>}
        {description[0]?.text ? (
          RichText.render(description)
        ) : (
          <p>Desarrollamos Proyectos verdes.</p>
        )}
        <Button>
          {buttontext ? buttontext : `Inscribete`}
        </Button>
      </Description>

      <ImgHolder>
        <picture>
          <source srcSet={image.url} media="(max-width: 500px)" />
          <source srcSet={mobileimage.url} media="(max-width: 960px)" />
          <img src={image.url} alt="HeroImg" />
        </picture>
      </ImgHolder>
    </Content>
  );
};

export const Default = SliceFactory(Base);
