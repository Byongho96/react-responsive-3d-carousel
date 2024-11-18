import { createContext, useContext, useEffect, useReducer, useRef } from "react";
import SceneStore from "../stores/SceneStore";


interface State {
  layoutList: any[];
  currentLayout: any | null;
}

const initialState = {
  layoutList: [],
  currentLayout: {
    id: null,
    layout: null,
  },
};

type Action =
  | { type: "SAVE_LAYOUT"; payload: any }
  | { type: "UPDATE_LAYOUT"; payload: any }
  | { type: "SELECT_LAYOUT"; payload: number }
  | { type: "UPDATE_NAME"; payload: { id: number, value: string } }
  | { type: "UPDATE_ORDER"; payload: { from: number, to: number } }
  | { type: "SET_LAYOUT_LIST"; payload: any }
  | { type: "DELETE_LAYOUT"; payload: number }

const reducer = (state, action) => {
  switch (action.type) {
    case "SAVE_LAYOUT": {
      let layout = state.layoutList.find((layout) => layout.id === action.payload.id);
      if (layout) {
        return {
          ...state,
          layoutList: state.layoutList.map((layout) =>
            layout.id === action.payload.id ? action.payload : layout
          ),
        };
      } 

      let name = 'Untitled'
      let cnt = 0
      while (state.layoutList.some((layout) => layout.name === name)) {
        name = `Untitled (${++cnt})`;
      }

      action.payload.id = Date.now();
      action.payload.name = name;

      return {
        ...state,
        layoutList: [
          action.payload,
          ...state.layoutList,
        ],
      };
    }     
    case "UPDATE_LAYOUT": {
      return {
        ...state,
        currentLayout: {
          id: null,
          ...state.currentLayout,
          ...action.payload,
        },
      };
    }
    case "SELECT_LAYOUT": {
      const layout = state.layoutList.find((layout) => layout.id === action.payload)
      if (!layout) return state

      return {
        ...state,
        currentLayout: structuredClone(layout),
      };
    }
    case "UPDATE_NAME": {
      return {
        ...state,
        layoutList: state.layoutList.map((layout) =>
          layout.id === action.payload.id
            ? { ...layout, name: action.payload.value }
            : layout
        ),
      }
    }
    case "UPDATE_ORDER": {
      const list = [...state.layoutList];
      const [removed] = list.splice(action.payload.from, 1);
      list.splice(action.payload.to, 0, removed);

      return {
        ...state,
        layoutList: list
      }
    }
    case "SET_LAYOUT_LIST": {
      return {
        ...state,
        layoutList: action.payload
      }
    }
    case "DELETE_LAYOUT": {
      return {
        ...state,
        layoutList: state.layoutList.filter((layout) => layout.id !== action.payload),
      };
    }
    default:
      return state;
  }
};

const LayoutContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
} | null>(null);


export default function LayoutContextProvider({children}): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const handleChange = () => {
      dispatch({ 
        type: "UPDATE_LAYOUT", 
        payload: SceneStore.toCarouselJSON()
      });
    }

    handleChange()

    SceneStore.addEventListener('change', handleChange );
    return () => {
      SceneStore.reset()
      SceneStore.removeEventListener('change', handleChange );
    }
  }, [])

  useEffect(() => {
    const savedLayoutList = JSON.parse(localStorage.getItem('outputList') || '[]')
    dispatch({ type: "SET_LAYOUT_LIST", payload: savedLayoutList })
  }, [])

  useEffect(() => {
    localStorage.setItem('outputList', JSON.stringify(state.layoutList))
  }, [state.layoutList])

  useEffect(() => {
    if (!state.currentLayout.id) return
    SceneStore.fromCarouselJSON(state.currentLayout)
  }, [state.currentLayout.id])

  return (
    <LayoutContext.Provider value={{ state, dispatch }}>
      {children}
    </LayoutContext.Provider>
  );
}

export function useLayoutContext() {
  const context = useContext(LayoutContext);

  if (!context) {
    throw new Error("useTodoContext must be used within a TodoProvider");
  }

  return context;
};