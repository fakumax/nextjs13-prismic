import { Default, OnlyLogosBg } from "./variants";

export const LogoList = ({ slice }) => {
  const { variation } = slice;

  const typeOfComponents = {
    ["default"]: Default,
    ["onlyLogosBg"] : OnlyLogosBg,
    
  };

  const TypeOfVariants = typeOfComponents[variation] || Default;

  return <TypeOfVariants {...slice} />;
};