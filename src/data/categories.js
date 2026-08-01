export const CATEGORY_STYLE = {
  matcha: { bg: '#E7EEDB', text: '#4F6339' },
  coffee: { bg: '#F3E4D6', text: '#7A4E2A' },
  dessert: { bg: '#F5E2E6', text: '#7A3F49' },
};

export const CATEGORY_ORDER = ['matcha', 'coffee', 'dessert'];

export function categoryLabel(cat) {
  return cat[0].toUpperCase() + cat.slice(1);
}

export function tagsFor(cats) {
  return cats.map((c) => ({
    key: c,
    label: categoryLabel(c),
    bg: CATEGORY_STYLE[c].bg,
    text: CATEGORY_STYLE[c].text,
  }));
}
