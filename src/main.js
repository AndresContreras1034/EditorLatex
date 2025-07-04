
// src/main.js
import { createLatexBlock } from './core/editor.js';

const container = document.getElementById('editor-container');
const addBtn = document.getElementById('add-block');

// Crear primer bloque
createLatexBlock(container);

// Añadir más bloques
addBtn.addEventListener('click', () => {
  createLatexBlock(container);
});
