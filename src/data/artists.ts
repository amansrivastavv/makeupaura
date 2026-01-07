export interface Artist {
    id: string;
    name: string;
    specialty: string;
    price: string;
    image: string;
    bio: string;
    images: string[];
}

export const ARTISTS: Artist[] = [
    {
        id: "prekshi-arora",
        name: "Prekshi Arora",
        specialty: "Bridal Specialist",
        price: "₹25,000",
        image: "/assets/artist-traditional.png",
        bio: "Specializing in traditional bridal makeup with a modern touch, ensuring you look timeless on your big day. With over 5 years of experience, Prekshi creates looks that enhance your natural beauty.",
        images: ["/assets/artist-traditional.png", "/assets/hero-v2.png", "/assets/bridal.png"]
    },
    {
        id: "sushma-chauhan",
        name: "Sushma Chauhan",
        specialty: "Celebrity MUA",
        price: "₹40,000",
        image: "/assets/artist-glam.png",
        bio: "A favorite among celebrities, Sushma brings high-fashion glam to your special events. Known for her flawless base and dramatic eye makeup.",
        images: ["/assets/artist-glam.png", "/assets/artist.png", "/assets/artist-editorial.png"]
    },
    {
        id: "ananya-style",
        name: "Ananya Style",
        specialty: "Airbrush Pro",
        price: "₹18,000",
        image: "/assets/artist-editorial.png",
        bio: "Expert in airbrush techniques for a lightweight, long-lasting finish perfect for HD photography. Ananya ensures a sweat-proof and water-resistant look.",
        images: ["/assets/artist-editorial.png", "/assets/bridal.png", "/assets/hero-v2.png"]
    },
    {
        id: "meera-kapoor",
        name: "Meera Kapoor",
        specialty: "Editorial & Fashion",
        price: "₹35,000",
        image: "/assets/artist.png",
        bio: "With a background in fashion editorials, Meera creates avant-garde and trend-setting looks. Perfect for pre-wedding shoots and specialized campaigns.",
        images: ["/assets/artist.png", "/assets/artist-glam.png", "/assets/artist-traditional.png"]
    },
    {
        id: "riya-singh",
        name: "Riya Singh",
        specialty: "Destination Weddings",
        price: "₹50,000",
        image: "/assets/hero-v2.png",
        bio: "Available for travel worldwide, Riya manages entire bridal parties with ease and efficiency. She brings a calm presence and exceptional skill to every destination wedding.",
        images: ["/assets/hero-v2.png", "/assets/artist-editorial.png", "/assets/artist.png"]
    },
    {
        id: "zara-khan",
        name: "Zara Khan",
        specialty: "Cinematic Glam",
        price: "₹22,000",
        image: "/assets/bridal.png",
        bio: "Creating movie-star magic with her cinematic glam style. Zara focuses on highlighting your best features for a camera-ready appearance.",
        images: ["/assets/bridal.png", "/assets/artist-traditional.png", "/assets/artist-glam.png"]
    }
];

export function getArtistById(id: string): Artist | undefined {
    return ARTISTS.find(artist => artist.id === id);
}
