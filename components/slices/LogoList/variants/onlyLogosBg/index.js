import { SliceFactory } from "../../../../common/Containers";
import { Description, Content } from "./defaultStyles";
import LogoList from '../../../../common/LogoList';

const Base = (props) => {

  const { description, title } = props.primary;

  return (
    <Content>
      <LogoList list={props.items} />
    </Content>
  );
};

// export const OnlyLogosBg = SliceFactory(Base);
export const OnlyLogosBg = SliceFactory(Base, {
  sectionContainerProps: {
    style: {
      backgroundImage: "linear-gradient(188deg, #FAFBFC , #FAFBFC 100% )"
    }
  }
});