const map = {
  en: {
    Verktøy: "Tools",
    Arkitektur: "Architecture",
    // resten er allerede engelsk – fallback tar dem
  },
  no: {
    // alt kan stå som original
  },
};

export function categoryLabel(category, lang = "en") {
  const dict = map[lang] || {};
  return dict[category] || category;
}
