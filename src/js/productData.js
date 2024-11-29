import {
    DairyIcon,
    AlcoholIcon,
    FishIcon,
    FruitIcon,
    GrainsIcon,
    MeatIcon,
    VeganIcon,
    VegetableIcon
} from "../components/Icons.js";

export const products = {
dairy: [
{ id: 1, name: 'Low-fat milk', price: 0.89, package: "1 l", icon: DairyIcon },
{ id: 2, name: 'Non-fat milk', price: 0.79, package: "1 l", icon: DairyIcon },
{ id: 3, name: 'Whole milk', price: 0.99, package: "1 l", icon: DairyIcon },
{ id: 4, name: 'Lactose-free milk', price: 1.25, package: "1 l", icon: DairyIcon }
],
fish: [
{ id: 5, name: 'Frozen Shrimp', price: 3.30, package: "150 g", icon: FishIcon },
{ id: 6, name: 'Salmon trout', price: 24.90, package: "1.5 kg", icon: FishIcon },
{ id: 7, name: 'Whitefish', price: 12.50, package: "250 g", icon: FishIcon },
{ id: 8, name: 'Pike-perch', price: 11.90, package: "300 g", icon: FishIcon },
{ id: 9, name: 'Herring', price: 3.49, package: "150 g", icon: FishIcon }
],
vegetables: [
{ id: 10, name: 'Carrot', price: 1.49, package: "500g bag", icon: VegetableIcon },
{ id: 11, name: 'Broccoli', price: 0.99, package: "300 g", icon: VegetableIcon },
{ id: 13, name: 'Cellery', price: 1.29, package: "400 g", icon: VegetableIcon },
{ id: 14, name: 'Parsnip', price: 3.19, package: "1 kg", icon: VegetableIcon },
{ id: 15, name: 'Potato', price: 1.09, package: "1 kg", icon: VegetableIcon },
{ id: 16, name: 'Cucumber', price: 0.84, package: "1 piece", icon: VegetableIcon },
{ id: 17, name: 'Bell pepper', price: 1.22, package: "1 piece", icon: VegetableIcon },
{ id: 18, name: 'Tomato', price: 0.34, package: "1 piece", icon: VegetableIcon }
],
fruits: [
{ id: 19, name: 'Apple', price: 0.47, package: "1 piece", icon: FruitIcon },
{ id: 20, name: 'Banana', price: 0.33, package: "1 piece", icon: FruitIcon },
{ id: 21, name: 'Melon', price: 2.53, package: "1 piece", icon: FruitIcon },
{ id: 22, name: 'Lemon', price: 0.52, package: "1 piece", icon: FruitIcon },
{ id: 23, name: 'Pear', price: 0.75, package: "1 piece", icon: FruitIcon },
{ id: 24, name: 'Pineapple', price: 2.63, package: "1 piece", icon: FruitIcon },
{ id: 25, name: 'Orange', price: 0.31, package: "1 piece", icon: FruitIcon },
{ id: 26, name: 'Avocado', price: 1.04, package: "1 piece", icon: FruitIcon }
],
meat: [
{ id: 27, name: 'Chicken strips', price: 2.80, package: "250 g", icon: MeatIcon },
{ id: 28, name: 'Ground beef', price: 3.89, package: "400 g", icon: MeatIcon },
{ id: 29, name: 'Pork fillet', price: 5.20, package: "650 g", icon: MeatIcon }
],
grains: [
{ id: 30, name: 'Noodle bag', price: 0.79, package: "90 g", icon: GrainsIcon },
{ id: 31, name: 'Basmati rice', price: 4.39, package: "1 kg", icon: GrainsIcon },
{ id: 32, name: 'Jasmine rice', price: 5.99, package: "1 kg", icon: GrainsIcon },
{ id: 33, name: 'Long-grain rice', price: 3.99, package: "1 kg", icon: GrainsIcon },
{ id: 34, name: 'Spaghetti', price: 2.39, package: "1 kg", icon: GrainsIcon },
{ id: 35, name: 'Wholegrain spaghetti', price: 0.95, package: "500 g", icon: GrainsIcon }
],
vegan: [
{ id: 36, name: 'Soy milk', price: 2.15, package: "1 l", icon: VeganIcon },
{ id: 37, name: 'Oat milk', price: 1.19, package: "1 l", icon: VeganIcon },
{ id: 38, name: 'Quorn', price: 4.80, package: "300 g", icon: VeganIcon }
],
alcohol: [
{ id: 39, name: 'Ale', price: 1.26, package: "0.33 l", icon: AlcoholIcon },
{ id: 40, name: 'Cider', price: 2.75, package: "0.33 l", icon: AlcoholIcon },
{ id: 41, name: 'Long drink', price: 2.90, package: "0.33 l", icon: AlcoholIcon }
]
}