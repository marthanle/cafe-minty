import matchaLatteColdFoamImg from '../assets/images/matcha-latte-cold-foam.webp';
import matchaBananaPuddingImg from '../assets/images/matcha-banana-pudding.webp';
import matchaBananaCremeLatteImg from '../assets/images/cinnamon-cold-brew.webp';
import matchaTrufflesImg from '../assets/images/matcha-truffles.webp';
import pandanWafflesImg from '../assets/images/honey-oat-latte.webp';
import coconutMatchaLatteImg from '../assets/images/coconut-matcha-mousse.webp';
import matchaTiramisuRaspberryImg from '../assets/images/ube-matcha-cheesecake.webp';

function detailMetaText({ time, ingredientCount, servings }) {
  const parts = [time, `${ingredientCount} ingredients`];
  if (servings) parts.push(`Serves ${servings}`);
  return parts.join(' · ');
}

export const RECIPES = [
  {
    id: 'matcha-latte-cold-foam',
    title: 'Matcha latte with matcha cold foam',
    categories: ['matcha'],
    image: matchaLatteColdFoamImg,
    imageFocal: { x: -3.0091753175585767, y: -8.459414469927273, sx: 1.0601835063511715, sy: 1.0601835063511715 },
    time: '5 min',
    ingredientCount: 5,
    servings: '1',
    note: "This was the first drink I ever made for someone other than myself — cold foam turned out to be the easiest way to make an ordinary iced matcha feel like something worth sharing.",
    credit: null,
    ingredientGroups: [
      { label: 'Matcha', items: ['4g ceremonial grade matcha', '40ml water, 160°F–175°F', '120ml milk, cold*', '10ml sweetener*'] },
      { label: 'Matcha cold foam', items: ['1.5 tbsp matcha', '3 tbsp heavy whipping cream', '2 tbsp milk', '1 tbsp sweetener'], footnote: '*I use oat milk and agave syrup.' },
    ],
    stepGroups: [
      { label: 'Matcha', items: ['Sift matcha powder into a small bowl.', 'Add water to the bowl with the powder.', 'Whisk.*', 'Prepare your cup with ice.', 'Add the milk and sweetener.', 'Pour matcha into the glass.'] },
      { label: 'Matcha cold foam', items: ['Sift matcha into a small bowl.', 'Add in heavy whipping cream, milk, and sweetener.', 'Using a milk frother, froth until everything is mixed and creamy.', 'Pour on top of the matcha latte glass.'] },
    ],
    stepsFootnote: '*I use the 30/20/10 method: 30 seconds of brisk whisking to break up clumps, 20 seconds of moderate mixing to build fine foam, and 10 seconds of light, surface-level strokes to pop larger bubbles.',
  },
  {
    id: 'matcha-banana-pudding',
    title: 'Matcha banana pudding',
    categories: ['matcha', 'dessert'],
    image: matchaBananaPuddingImg,
    imageFocal: { x: 0.4496635148307009, y: -1.5217864783933592, sx: 1.071280323107517, sy: 1.071280323107517 },
    time: '2 hr 30 min',
    ingredientCount: 8,
    servings: '8',
    note: null,
    credit: 'Inspired by Mint and the Matcha',
    ingredientGroups: [
      { items: ['160g heavy whipping cream', '60g sweetened condensed milk', '300g vanilla pudding', '50–60ml hot water', '20g matcha powder', '1 tsp vanilla extract', '3 bananas, sliced', '34 vanilla wafers, plus extra for topping'] },
    ],
    stepGroups: [
      { items: [
        'If not using store-bought, whisk up your vanilla pudding ahead of time and let it set.',
        'Combine the condensed milk, vanilla pudding, and vanilla extract in a bowl.',
        'Whip the heavy cream to stiff peaks, then gently fold it into the pudding mixture.',
        'Whisk the matcha with hot water into a smooth, thick paste, adjusting the water as needed.',
        'Split the cream mixture roughly in half and stir the matcha paste into one portion.',
        'Layer wafers, bananas, and both puddings in a dish, then cover and chill for 1–2 hours until the wafers soften and everything sets.',
        'Top with a few extra wafers and serve.',
      ] },
    ],
  },
  {
    id: 'matcha-banana-creme-latte',
    title: 'Matcha banana creme latte',
    categories: ['matcha'],
    image: matchaBananaCremeLatteImg,
    imageFocal: null,
    time: '10 min',
    ingredientCount: 6,
    servings: '1',
    note: "My go-to when bananas are a little too ripe to eat plain, the creme gets blended right into the topping instead of getting lost in the glass.",
    credit: null,
    ingredientGroups: [
      { label: 'Matcha', items: ['4g ceremonial grade matcha', '40ml water, 160°F–175°F', '120ml milk, cold*', '10ml sweetener*'], footnote: '*I use oat milk and agave syrup.' },
      { label: 'Banana creme', items: ['1 banana', '3–4 tbsp heavy whipping cream', '1 tbsp of milk', '1–2 tsp vanilla extract'] },
    ],
    stepGroups: [
      { label: 'Matcha', items: ['Sift matcha powder into a small bowl.', 'Add water to the bowl with the powder.', 'Whisk.*', 'Prepare your cup with ice.', 'Add the milk and sweetener.', 'Pour matcha into the glass.'], footnote: '*I use the 30/20/10 method: 30 seconds of brisk whisking to break up clumps, 20 seconds of moderate mixing to build fine foam, and 10 seconds of light, surface-level strokes to pop larger bubbles.' },
      { label: 'Banana creme', items: ['Blend banana, heavy whipping cream, milk, and vanilla extract until mixed and smooth.', 'Top the matcha latte.'] },
    ],
  },
  {
    id: 'matcha-truffles',
    title: 'Matcha truffles',
    categories: ['matcha', 'dessert'],
    image: matchaTrufflesImg,
    imageFocal: null,
    time: '20 min',
    ingredientCount: 4,
    servings: '12',
    note: 'A no-bake favorite for using up extra matcha — rich white chocolate mellows the bitterness, and a dusting of matcha on top keeps every piece from tasting too sweet.',
    credit: 'Inspired by Matchaonomu',
    ingredientGroups: [
      { items: ['10–16g matcha powder*', '150g white chocolate', '50ml heavy cream', '15g unsalted butter'], footnote: '*Depends on how strong you like your matcha.' },
    ],
    stepGroups: [
      { items: [
        'Place the white chocolate in a bowl.',
        'Warm the heavy cream in a saucepan or the microwave until warm.',
        'Pour the warm cream over the chocolate and let sit for 3 minutes.',
        'Stir until smooth, then sift in the matcha and mix well.',
        'Add the butter and stir until fully melted in.',
        'Pour into a small parchment-lined dish or pan.',
        'Freeze for at least 2 hours, or overnight, until firm.',
        'Dust with extra matcha.',
        'Cut into desired square pieces.',
      ] },
    ],
  },
  {
    id: 'pandan-waffles',
    title: 'Pandan waffles',
    categories: ['dessert'],
    image: pandanWafflesImg,
    imageFocal: null,
    time: '1 hr 30 min',
    ingredientCount: 11,
    servings: '12',
    note: "A mini waffle maker means smaller portions but way more of them, perfect for sharing warm off the iron.",
    credit: 'Inspired by Hungry Huy',
    ingredientGroups: [
      { items: ['1/3 tbsp store bought pandan extract', '7 tbsp water', '285g tapioca starch', '73g rice flour', '75g all purpose flour', '2 tsp baking powder', '1/4 tsp salt', '3 large eggs', '200g sugar', '13.5 fl oz coconut cream', '1 tbsp neutral cooking oil'] },
    ],
    stepGroups: [
      { items: [
        'Stir the pandan extract into the water and set aside.',
        'In a medium bowl, whisk together the tapioca starch, rice flour, all purpose flour, baking powder, and salt.',
        'In a larger bowl, whisk the eggs with the sugar, then mix in the coconut cream, reserved pandan water, and cooking oil.',
        'Sift the dry mixture over the wet ingredients and fold until just combined.',
        'For a deeper green, fold in a few extra drops of pandan extract.',
        'Chill the batter for at least an hour before cooking.',
        'Preheat your waffle iron.',
        'Give the batter a stir, then ladle it into the iron, spreading to cover the plates, and close the lid to cook.',
        'Lift out the waffle and serve immediately while warm and crisp.',
      ] },
    ],
  },
  {
    id: 'coconut-matcha-latte',
    title: 'Coconut matcha latte',
    categories: ['matcha'],
    image: coconutMatchaLatteImg,
    imageFocal: null,
    time: '5 min',
    ingredientCount: 5,
    servings: '1',
    note: null,
    credit: null,
    ingredientGroups: [
      { items: ['1.5 tbsp ceremonial grade matcha', '3 tbsp heavy whipping cream', '2 tbsp milk', '1 tbsp sweetener', '120ml coconut water, cold'] },
    ],
    stepGroups: [
      { items: [
        'Sift matcha into a small bowl.',
        'Add in heavy whipping cream, milk, and sweetener.',
        'Using a milk frother, froth until everything is mixed and creamy.',
        'Pour on top of the glass with coconut water.',
      ] },
    ],
  },
  {
    id: 'matcha-tiramisu-raspberry',
    title: 'Matcha tiramisu with raspberry',
    categories: ['matcha', 'dessert'],
    image: matchaTiramisuRaspberryImg,
    imageFocal: { x: 0, y: -5.096830985915493, sx: 1, sy: 1 },
    time: '5 hr (incl. chilling)',
    ingredientCount: 10,
    servings: '8',
    note: null,
    credit: 'Inspired by Just One Cookbook',
    ingredientGroups: [
      { items: ['1½ cups heavy whipping cream, chilled', '8 oz mascarpone cheese, room temperature', '3 large egg yolks', '2 tbsp marsala wine', '⅓ cup sugar, divided', '24 ladyfingers, divided', '16g ceremonial grade matcha powder', '½ cup hot water (175°F)', '2 tbsp matcha powder, for dusting', '1 box raspberries'] },
    ],
    stepGroups: [
      { items: [
        'Whisk the egg yolks, marsala, and half the sugar over a double boiler, beating until it hits 160°F, then cool quickly in an ice bath.',
        'Soften the mascarpone and stir in the cooled egg mixture.',
        'Whip the heavy cream with the remaining sugar to firm peaks, then fold it into the mascarpone mixture.',
        'Whisk the matcha into the hot water, dip half the ladyfingers in it, and line the base of a dish.',
        'Spread half the mascarpone cream over the ladyfingers, then repeat with the remaining soaked ladyfingers as a second layer and the rest of the cream on top.',
        'Chill for at least 4 hours, ideally overnight, then dust with matcha and place raspberries on top right before serving.',
      ] },
    ],
  },
];

export const RECIPES_BY_ID = Object.fromEntries(RECIPES.map((r) => [r.id, r]));

export const FEATURED_IDS = ['matcha-latte-cold-foam', 'matcha-banana-pudding', 'matcha-banana-creme-latte'];

export function getRecipe(id) {
  return RECIPES_BY_ID[id] ?? null;
}

export function detailMeta(recipe) {
  return detailMetaText(recipe);
}

export function relatedRecipes(recipe, limit = 3) {
  const primaryCategory = recipe.categories[0];
  return RECIPES.filter((r) => r.id !== recipe.id && r.categories.includes(primaryCategory)).slice(0, limit);
}
