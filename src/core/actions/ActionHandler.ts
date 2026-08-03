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
      alert(action.payload?.message ?? "Action Triggered");
      break;

    case "navigate":
      alert(`Navigate to ${action.payload?.screen}`);
      break;

    default:
      alert("Unsupported Action");
  }
};