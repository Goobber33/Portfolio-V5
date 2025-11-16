/**
 * DnD Kit Feature
 * 
 * Main exports for the drag-and-drop functionality
 */

// Components
export { RootDnd } from './components/RootDnd';
export { SortableContainer } from './components/SortableContainer';
export { SortableItem } from './components/SortableItem';
export { CustomMotion } from './components/CustomMotion';

// Contexts
export { DragStateProvider, useDragState } from './contexts/DragStateContext';
export { MoveProvider, useMoves } from './contexts/MoveContext';
export { ParentIdContext } from './contexts/ParentIdContext';

// Types
export type {
  DragState,
  MoveContextType,
  Move,
  AddMove,
  ContainerInfo,
  ItemInfo,
  SortableContainerProps,
  DropZoneStatus,
  NodeRegistry,
  MoveHistory,
  Order,
} from './types';

export { CONTANER_TYPE, SORTING_STRAGETY } from './types';

// Utils
export { IdGenerator, generateIdForContainer, generateIdForItem } from './utils/idGeneration';
export type { IdComponents } from './utils/idGeneration';
export { mergeRefs } from './utils/utils';

