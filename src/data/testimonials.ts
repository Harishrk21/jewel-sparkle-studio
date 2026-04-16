export interface Testimonial {
  id: number;
  name: string;
  city: string;
  rating: number;
  quote: string;
  productBought: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Meenakshi Sundaram",
    city: "Madurai",
    rating: 5,
    quote: "We bought my daughter's entire bridal set here. The quality of the 916 gold and the intricate temple design work was beyond what we expected. The staff was incredibly patient with us. Will always be our family jeweller.",
    productBought: "Bridal Kanchipuram Set"
  },
  {
    id: 2,
    name: "Rajeshwari Murugan",
    city: "Dindigul",
    rating: 5,
    quote: "The thali we ordered was made exactly as we wanted — traditional Madurai style with the kili motif. Pure 916 gold, perfect weight, fair price. No hidden charges at all. Highly recommend to all brides!",
    productBought: "Thali & Chain"
  },
  {
    id: 3,
    name: "Kavitha Rajan",
    city: "Madurai",
    rating: 5,
    quote: "I've been buying my jewellery here for 10 years now. Every single piece has held its colour and purity. The 916 hallmark gives so much confidence. Their Karthigai Jimikki collection is simply stunning.",
    productBought: "Jimikki Earrings"
  },
  {
    id: 4,
    name: "Sumathi Venkatesh",
    city: "Virudhunagar",
    rating: 5,
    quote: "Transparent pricing is what I love most about this shop. They showed me the exact weight, making charge per gram, wastage — everything clearly on the bill. No surprises. This is rare and very trustworthy.",
    productBought: "Gold Bangle Set"
  },
  {
    id: 5,
    name: "Devi Arumugam",
    city: "Madurai",
    rating: 5,
    quote: "Got the full cradle ceremony jewellery set for my granddaughter — anklets, bangles, and chain. Beautiful craftsmanship and affordable making charges. The shop owner personally helped us choose. Blessed shop!",
    productBought: "Baby Naming Ceremony Set"
  },
  {
    id: 6,
    name: "Priya Selvam",
    city: "Theni",
    rating: 5,
    quote: "The Lakshmi temple necklace I ordered is breathtaking. 916 gold with ruby stone work — exactly what I wanted for Navarathri. They delivered to Theni safely. Very happy!",
    productBought: "Temple Necklace"
  }
];
