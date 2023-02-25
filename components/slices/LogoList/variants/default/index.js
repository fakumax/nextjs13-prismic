import { SliceFactory } from "../../../../common/Containers";
import { Description, Content, ImgHolder } from "./defaultStyles";
import { RichText } from "prismic-reactjs";
import LogoList from '../../../../common/LogoList';

const Base = (props) => {

  const { description, title } = props.primary;

  return (
    <Content>
      <Description>
        {title[0]?.text ? RichText.render(title) : <h3>Title</h3>}
        {description[0]?.text ? (
          RichText.render(description)
        ) : (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate
          </p>
        )}
      </Description>
      <LogoList list={props.items} />
    </Content>
  );
};

export const Default = SliceFactory(Base);