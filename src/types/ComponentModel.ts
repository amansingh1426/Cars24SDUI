import { ComponentType } from "./ComponentTypes";

export interface Action {
  type: string;
  payload?: Record<string, any>;
}

export interface ComponentStyle {
  margin?: number;
  padding?: number;
  backgroundColor?: string;
}

export interface SDUIComponent {
  id: string;
  type: ComponentType;
  props: Record<string, any>;
  style?: ComponentStyle;
  action?: Action;
}

export interface ScreenSchema {
  screenId: string;
  version: number;
  components: SDUIComponent[];
}