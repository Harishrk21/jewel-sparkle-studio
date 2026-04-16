export interface Category {
  id: string;
  name: string;
  image: string;
  count: number;
}

export const categories: Category[] = [
  { id: "rings", name: "Rings", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500", count: 6 },
  { id: "necklaces", name: "Necklaces", image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=500", count: 6 },
  { id: "earrings", name: "Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500", count: 6 },
  { id: "bracelets", name: "Bracelets", image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=500", count: 6 },
  { id: "anklets", name: "Anklets", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500", count: 6 },
  { id: "sets", name: "Sets", image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=500", count: 6 },
];
