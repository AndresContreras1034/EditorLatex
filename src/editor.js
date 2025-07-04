// src/core/editor.js
import katex from "katex";
import "katex/dist/katex.min.css";

let blockCount = 0;

export function createLatexBlock(container) {
  const blockId = `block-${blockCount++}`;

  const wrapper = document.createElement('div');
  wrapper.className = "mb-6";

  const textarea = document.createElement('textarea');
  textarea.className = "w-full p-2 border rounded font-mono bg-gray-100 dark:bg-gray-800";
  textarea.placeholder = "Escribe código LaTeX aquí...";
  textarea.rows = 3;

  const output = document.createElement('div');
  output.className = "p-2 mt-2 border rounded bg-white dark:bg-gray-700 min-h-[2rem]";

  textarea.addEventListener('input', () => {
    try {
      katex.render(textarea.value, output, { throwOnError: false });
    } catch (err) {
      output.textContent = "Error de sintaxis";
    }
  });

  wrapper.appendChild(textarea);
  wrapper.appendChild(output);
  container.appendChild(wrapper);
}

