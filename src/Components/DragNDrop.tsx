import React, { DragEvent, useContext } from 'react';
import styled from '@emotion/styled';
import DragContext from 'store/drag';
import { Itodo } from 'Pages/Delete/Delete';

interface DragNDropProps {
  itemArray: Itodo[];
  itemIndex: number;
  updateItemArray(newTodoItems: Itodo[]): void;
  children: React.ReactNode;
}

const DragNDrop: React.FC<DragNDropProps> = ({
  itemArray,
  itemIndex,
  updateItemArray,
  children
}) => {
  const {
    state: { dragging, dragItemIndex },
    actions: { setDragging, updateDragItemIndex }
  } = useContext(DragContext);
  let dragNode: EventTarget | null = null;

  const handleDragStart = (e: DragEvent<HTMLDivElement>, dragIndex: number) => {
    updateDragItemIndex(dragIndex);
    dragNode = e.target;

    setTimeout(() => {
      setDragging(true);
    }, 0);
  };

  const handleDragEnd = () => {
    updateDragItemIndex(null);
    dragNode = null;
    setDragging(false);
  };

  const handleDragEnter = (e: DragEvent<HTMLDivElement>, dropIndex: number) => {
    if (!dragging) {
      return;
    }

    if (e.target !== dragNode && dragItemIndex !== null) {
      updateDragItemIndex(dropIndex);

      const newItemArray = [...itemArray];
      const [dragItem] = newItemArray.splice(dragItemIndex, 1);
      newItemArray.splice(dropIndex, 0, dragItem);
      updateItemArray(newItemArray);
    }
  };

  const isDraggingItem = (currentIndex: number): boolean => {
    if (dragItemIndex === currentIndex) {
      return true;
    }
    return false;
  };

  return (
    <DragItem
      draggable
      onDragStart={(e) => handleDragStart(e, itemIndex)}
      onDragEnd={handleDragEnd}
      onDragEnter={(e) => handleDragEnter(e, itemIndex)}
      dragging={dragging && isDraggingItem(itemIndex)}
    >
      {children}
    </DragItem>
  );
};

export default DragNDrop;

const DragItem = styled.div<{ dragging: boolean }>`
  ${({ dragging }) =>
    dragging &&
    `
    margin-bottom: 15px;
    border: 2px dashed #0099fd;
    & > * {
      opacity: 0;
      pointer-events: none;
      margin: 0;
    }
  `}
`;
