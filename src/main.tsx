/// <reference types="vite/client" />

import { createRoot } from 'react-dom/client';
import { CorsDemo } from './CorsDemo';

createRoot(document.getElementById('root')!).render(<CorsDemo />);
