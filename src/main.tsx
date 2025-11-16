import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { RootDnd } from './features/dnd-kit/components/RootDnd.tsx';
import { DragStateProvider } from './features/dnd-kit/contexts/DragStateContext.tsx';
import { MoveProvider } from './features/dnd-kit/contexts/MoveContext.tsx';
import { initializeApp } from './utils/initialization.ts';

// Initialize app (theme, image handlers, etc.)
initializeApp();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MoveProvider>
      <DragStateProvider>
        <RootDnd>
          <App />
        </RootDnd>
      </DragStateProvider>
    </MoveProvider>
  </StrictMode>
);
