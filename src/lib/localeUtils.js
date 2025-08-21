export function pickDescription(item, lang) {
  if (lang === "en") {
    return item.description_en || item.description || "";
  }
  return item.description || "";
}
