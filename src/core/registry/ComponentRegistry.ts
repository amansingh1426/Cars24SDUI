import SearchBar from "../../components/SearchBar/SearchBar";
import UnknownComponent from "../../components/UnknownComponent/UnknownComponent";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import BannerCarousel from "../../components/BannerCarousel/BannerCarousel";
import CategoryChips from "../../components/CategoryChips/CategoryChips";
import HorizontalRail from "../../components/HorizontalRail/HorizontalRail";
import CTASection from "../../components/CTASection/CTASection";
import CarCard from "../../components/CarCard/CarCard";

import { ComponentType } from "../../types/ComponentTypes";
import Footer from "../../components/Footer/Footer";

export const ComponentRegistry = {
  [ComponentType.SEARCH_BAR]: SearchBar,

  [ComponentType.UNKNOWN]: UnknownComponent,

  [ComponentType.SECTION_TITLE]: SectionTitle,

  [ComponentType.BANNER_CAROUSEL]: BannerCarousel,

  [ComponentType.CATEGORY_CHIPS]: CategoryChips,

  [ComponentType.HORIZONTAL_RAIL]: HorizontalRail,

  [ComponentType.CTA_SECTION]: CTASection,
  [ComponentType.FOOTER]: Footer,
  [ComponentType.CAR_CARD]: CarCard,
};