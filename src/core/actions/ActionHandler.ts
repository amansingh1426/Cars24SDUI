export interface ActionPayload {
  [key: string]: any;
}

export interface Action {
  type: string;
  payload?: ActionPayload;
}

export const executeAction = (action?: Action) => {
  if (!action) return;

  switch (action.type) {
    case "toast":
      alert(action.payload?.message ?? "Action Triggered");
      break;

    case "log":
      console.log(action.payload?.message);
      break;

    case "navigate":
      console.log("Navigate to:", action.payload?.screen);
      alert(`Navigate to ${action.payload?.screen}`);
      break;

    default:
      console.warn("Unknown action:", action.type);
      alert("Unsupported Action");
  }
};