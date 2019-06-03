import { streams } from "./streams";

const streamsDefaultValues = () => {
  return streams
    .filter(e => e.type === "downstream")
    .map(e => {
      return {
        id: e.id,
        value: e.default
      };
    });
};
const initialState = {
  phases: [
    {
      id: 1,
      name: "Phase 1",
      selected: true,
      streamsValues: streamsDefaultValues()
    }
  ]
};

const reducer = (state: any = initialState, action: any) => {
  if (action.type === "ADD_PHASE") {
    const oldPhases = state.phases.slice();
    oldPhases.forEach((element: any) => {
      element.selected = false;
    });
    const l = state.phases.length + 1;
    oldPhases.push({
      id: l,
      name: `Phase ${l}`,
      selected: true,
      streamsValues: streamsDefaultValues()
    });
    return {
      ...state,
      phases: oldPhases
    };
  }

  if (action.type === "SET_PHASE") {
    const oldPhases = state.phases.slice();
    oldPhases.forEach((element: any) => {
      if (element.id === action.selected) element.selected = true;
      else element.selected = false;
    });
    return {
      ...state,
      phases: oldPhases
    };
  }
  if (action.type === "UPDATE_PHASE") {
    let oldPhases = JSON.parse(JSON.stringify(state.phases));
    oldPhases.forEach((element: any) => {
      if (element.selected === true) {
        element.streamsValues.forEach((e: any) => {
          if (e.id === action.id) {
            if (parseInt(action.value)) {
              e.value = parseInt(action.value);
            } else {
              e.value = action.value;
            }
          }
        });
      }
    });
    return {
      ...state,
      phases: oldPhases
    };
  }
  return state;
};

export default reducer;
