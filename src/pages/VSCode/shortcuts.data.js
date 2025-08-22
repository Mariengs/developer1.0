// Kategorier: navigation, search, edit, view, cursor
export const SHORTCUTS = [
  // Navigation
  {
    id: "commandPalette",
    category: "navigation",
    mac: "⇧⌘P",
    win: "Ctrl+Shift+P",
    linux: "Ctrl+Shift+P",
  },
  {
    id: "quickOpen",
    category: "navigation",
    mac: "⌘P",
    win: "Ctrl+P",
    linux: "Ctrl+P",
  },
  {
    id: "gotoLine",
    category: "navigation",
    mac: "⌘G",
    win: "Ctrl+G",
    linux: "Ctrl+G",
  },
  {
    id: "gotoSymbol",
    category: "navigation",
    mac: "⇧⌘O",
    win: "Ctrl+Shift+O",
    linux: "Ctrl+Shift+O",
  },

  // Search
  { id: "find", category: "search", mac: "⌘F", win: "Ctrl+F", linux: "Ctrl+F" },
  {
    id: "replace",
    category: "search",
    mac: "⌥⌘F",
    win: "Ctrl+H",
    linux: "Ctrl+H",
  },
  {
    id: "findInFiles",
    category: "search",
    mac: "⇧⌘F",
    win: "Ctrl+Shift+F",
    linux: "Ctrl+Shift+F",
  },

  // Edit
  {
    id: "formatDocument",
    category: "edit",
    mac: "⇧⌥F",
    win: "Shift+Alt+F",
    linux: "Shift+Alt+F",
  },
  { id: "renameSymbol", category: "edit", mac: "F2", win: "F2", linux: "F2" },
  {
    id: "toggleComment",
    category: "edit",
    mac: "⌘/",
    win: "Ctrl+/",
    linux: "Ctrl+/",
  },
  {
    id: "duplicateLine",
    category: "edit",
    mac: "⇧⌥↓",
    win: "Shift+Alt+↓",
    linux: "Shift+Alt+↓",
  },
  {
    id: "moveLine",
    category: "edit",
    mac: "⌥↑ / ⌥↓",
    win: "Alt+↑ / Alt+↓",
    linux: "Alt+↑ / Alt+↓",
  },

  // Cursor
  {
    id: "multiCursorClick",
    category: "cursor",
    mac: "⌥+Click",
    win: "Alt+Click",
    linux: "Alt+Click",
  },
  {
    id: "addCursorAboveBelow",
    category: "cursor",
    mac: "⌥⌘↑ / ⌥⌘↓",
    win: "Ctrl+Alt+↑ / Ctrl+Alt+↓",
    linux: "Ctrl+Alt+↑ / Ctrl+Alt+↓",
  },
  {
    id: "selectNextOccurrence",
    category: "cursor",
    mac: "⌘D",
    win: "Ctrl+D",
    linux: "Ctrl+D",
  },

  // View
  {
    id: "toggleSidebar",
    category: "view",
    mac: "⌘B",
    win: "Ctrl+B",
    linux: "Ctrl+B",
  },
  {
    id: "toggleTerminal",
    category: "view",
    mac: "⌃`",
    win: "Ctrl+`",
    linux: "Ctrl+`",
  },
  {
    id: "zenMode",
    category: "view",
    mac: "⌘K, Z",
    win: "Ctrl+K, Z",
    linux: "Ctrl+K, Z",
  },
];
