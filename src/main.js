import { createLatexBlock } from './core/editor.js';
import { applyStoredTheme, toggleTheme } from './core/theme.js';

const container = document.getElementById('editor-container');
const addBtn = document.getElementById('add-block');
const toggleBtn = document.getElementById('toggle-theme');

// 1. Aplica tema guardado al cargar
applyStoredTheme();

// 2. Renderiza primer bloque
createLatexBlock(container);

// 3. Botones
addBtn.addEventListener('click', () => createLatexBlock(container));
toggleBtn.addEventListener('click', toggleTheme);
