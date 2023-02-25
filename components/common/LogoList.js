import { ItemsContainer } from "./LogoListStyle";

const LogoList = props => {
  const { list } = props;
  return (
    <ItemsContainer>
      {Array.isArray(list)
        ? list.map((box, index) => {
          return index <= 5 ? (
            <li
              className="item"
              key={`box-item-${index}`}
            // style={{ backgroundColor: "black" }}
            >
              <img src={box?.logoImage?.url || "-"} alt="" />
            </li>
          ) : null;
        })
        : null}
    </ItemsContainer>
  );
};

export default LogoList;
