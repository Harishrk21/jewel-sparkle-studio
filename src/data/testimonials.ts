export interface Testimonial {
  id: number;
  name: string;
  city: string;
  rating: number;
  quote: string;
  productBought: string;
}

export const testimonials: Testimonial[] = [
  { id: 1, name: "Priya Sharma", city: "Mumbai", rating: 5, quote: "The Mughal Bloom Choker took my breath away. Every detail is perfection. I wore it on my wedding day and received endless compliments.", productBought: "Mughal Bloom Choker" },
  { id: 2, name: "Ananya Reddy", city: "Hyderabad", rating: 5, quote: "I've been a loyal customer for three years now. The quality of their gold work is unmatched. Each piece feels like an heirloom from day one.", productBought: "Marigold Bangle Set" },
  { id: 3, name: "Kavya Patel", city: "Ahmedabad", rating: 5, quote: "Ordered the Diamond Tennis Bracelet for my anniversary. The diamonds have incredible fire and the setting is flawless. Worth every rupee.", productBought: "Diamond Tennis Bracelet" },
  { id: 4, name: "Meera Iyer", city: "Chennai", rating: 4, quote: "The Celestial Crescent Earrings are my everyday go-to now. Light enough to wear all day, stunning enough to turn heads at dinner.", productBought: "Celestial Crescent Earrings" },
  { id: 5, name: "Ritu Kapoor", city: "Delhi", rating: 5, quote: "Bought the Royal Bridal Suite for my daughter's wedding. The entire family was mesmerized. Lumière understands Indian bridal jewelry like no other.", productBought: "Royal Bridal Suite" },
  { id: 6, name: "Sneha Das", city: "Kolkata", rating: 5, quote: "Their packaging alone feels like receiving a royal gift. The Everyday Gold Essentials set is perfectly curated — elegant simplicity at its finest.", productBought: "Everyday Gold Essentials" },
];
