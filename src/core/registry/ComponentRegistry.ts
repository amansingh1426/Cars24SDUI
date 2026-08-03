import SearchBar from "../../components/SearchBar/SearchBar";
import UnknownComponent from "../../components/UnknownComponent/UnknownComponent";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

import { ComponentType } from "../../types/ComponentTypes";

export const ComponentRegistry = {
  [ComponentType.SEARCH_BAR]: SearchBar,

  [ComponentType.UNKNOWN]: UnknownComponent,

  [ComponentType.SECTION_TITLE]: SectionTitle,
};