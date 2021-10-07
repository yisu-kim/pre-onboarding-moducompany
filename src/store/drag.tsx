import React, {
  createContext,
  useState,
  useRef,
  Dispatch,
  SetStateAction
} from 'react';

interface IDragContext {
  state: {
    dragging: boolean;
    dragItemIndex: number | null;
  };
  actions: {
    setDragging: Dispatch<SetStateAction<boolean>>;
    updateDragItemIndex: (index: number | null) => void;
  };
}

const defaultValue: IDragContext = {
  state: {
    dragging: false,
    dragItemIndex: null
  },
  actions: {
    setDragging: () => undefined,
    updateDragItemIndex: () => undefined
  }
};

const DragContext = createContext<IDragContext>(defaultValue);

interface UserProviderProps {
  children: React.ReactNode;
}

const DragProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [dragging, setDragging] = useState<boolean>(false);
  const dragItem = useRef<number | null>(null);

  const updateDragItemIndex = (index: number | null) => {
    dragItem.current = index;
  };

  const value: IDragContext = {
    state: { dragging, dragItemIndex: dragItem.current },
    actions: { setDragging, updateDragItemIndex }
  };

  return <DragContext.Provider value={value}>{children}</DragContext.Provider>;
};

const DragConsumer = DragContext.Consumer;

export { DragProvider, DragConsumer };
export default DragContext;
