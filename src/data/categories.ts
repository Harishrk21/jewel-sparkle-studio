export interface Category {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  count: number;
}

export const categories: Category[] = [
  { id: "thali", name: "Thali & Mangalsutra", subtitle: "The Sacred Bond", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500", count: 6 },
  { id: "bangles", name: "Bangles & Kadas", subtitle: "Circle of Blessings", image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=500", count: 6 },
  { id: "necklaces", name: "Necklaces & Harams", subtitle: "Grace in Gold", image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=500", count: 6 },
  { id: "earrings", name: "Earrings & Jimikki", subtitle: "Timeless Elegance", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500", count: 6 },
  { id: "rings", name: "Rings & Mookuthi", subtitle: "Divine Details", image: "https://images.unsplash.com/photo-1603561596112-0a132b757442?w=500", count: 6 },
  { id: "bridal", name: "Bridal Sets", subtitle: "Your Wedding, Our Legacy", image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=500", count: 6 },
];
