import FavoritesIcon from "./FavoritesIcon";
import TooltipIcon from "./TooltipIcon";
import CompareIcon from "./СompareIcon";

export enum SvgId {
  TOOLTIP = "tooltip-svg-icon",
  COMPARE = "compare-svg-icon",
  FAVORITE = "favorite-svg-icon",
}

const SvgSpritesComponent = () => {
  return (
    <div>
      <TooltipIcon id={SvgId.TOOLTIP} />
      <CompareIcon id={SvgId.COMPARE} />
      <FavoritesIcon id={SvgId.FAVORITE} />
    </div>
  );
};

export default SvgSpritesComponent;
