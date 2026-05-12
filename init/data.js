const sampleListings = [

  // ===== INDIA =====
  {
    title: "Houseboat Stay in Kerala Backwaters",
    description:
      "Drift peacefully through Kerala's serene backwaters on a traditional houseboat. Wake up to misty mornings, lush coconut groves, and the gentle sounds of nature. Meals included.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&auto=format&fit=crop",
    },
    price: 4500,
    location: "Alleppey",
    country: "India",
  },
  {
    title: "Heritage Haveli in Jaipur",
    description:
      "Stay in a beautifully restored 18th-century haveli in the Pink City. Experience royal Rajasthani hospitality, ornate architecture, and rooftop views of the old city.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1477587458883-47145ed31dff?w=800&auto=format&fit=crop",
    },
    price: 6000,
    location: "Jaipur",
    country: "India",
  },
  {
    title: "Himalayan Cottage in Manali",
    description:
      "Cozy up in this charming wooden cottage nestled in the Himalayas. Snow-capped peaks, pine forests, and the Beas river are right at your doorstep. Perfect for adventure seekers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop",
    },
    price: 3500,
    location: "Manali",
    country: "India",
  },
  {
    title: "Beachside Shack in Goa",
    description:
      "Wake up to the sound of waves in this breezy beachside cottage in North Goa. Steps away from the ocean, with vibrant nightlife and seafood restaurants nearby.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&auto=format&fit=crop",
    },
    price: 3000,
    location: "Goa",
    country: "India",
  },
  {
    title: "Coffee Estate Bungalow in Coorg",
    description:
      "Immerse yourself in the misty hills of Coorg surrounded by lush coffee and spice plantations. This colonial-era bungalow offers nature walks, bird watching, and freshly brewed estate coffee.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1597983073493-88cd98cb7da5?w=800&auto=format&fit=crop",
    },
    price: 4200,
    location: "Coorg",
    country: "India",
  },
  {
    title: "Dal Lake Shikhara in Srinagar",
    description:
      "Float on the iconic Dal Lake in a traditional shikhara houseboat. Enjoy breathtaking views of the Himalayas, bustling floating markets, and Kashmiri cuisine.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566837945700-30057527ade0?w=800&auto=format&fit=crop",
    },
    price: 5500,
    location: "Srinagar",
    country: "India",
  },
  {
    title: "Desert Camp in Jaisalmer",
    description:
      "Sleep under a blanket of stars in the Thar Desert. This luxury tent camp offers camel safaris, folk music evenings, and stunning golden sand dunes at sunrise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&auto=format&fit=crop",
    },
    price: 5000,
    location: "Jaisalmer",
    country: "India",
  },
  {
    title: "Jungle Lodge in Jim Corbett",
    description:
      "Experience wildlife in its natural habitat at this comfortable jungle lodge. Tiger safaris, elephant rides, and guided nature trails make this a truly unforgettable stay.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop",
    },
    price: 7000,
    location: "Jim Corbett",
    country: "India",
  },
  {
    title: "Hilltop Villa in Munnar",
    description:
      "Perched on a hilltop surrounded by endless tea gardens, this villa offers panoramic views, cool climate, and peaceful mornings with mist rolling through the valleys.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1443890923422-7819ed4101c0?w=800&auto=format&fit=crop",
    },
    price: 4800,
    location: "Munnar",
    country: "India",
  },
  {
    title: "Boutique Stay in Rishikesh",
    description:
      "A peaceful retreat by the holy Ganges river. Perfect for yoga, meditation, white-water rafting, and exploring ancient temples in the yoga capital of the world.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1561361058-c24e017eac8c?w=800&auto=format&fit=crop",
    },
    price: 2800,
    location: "Rishikesh",
    country: "India",
  },

  // ===== INTERNATIONAL =====
  {
    title: "Overwater Villa in Maldives",
    description:
      "Indulge in ultimate luxury in this stunning overwater villa. Crystal-clear turquoise waters below your glass floor, private infinity pool, and direct access to the coral reef.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&auto=format&fit=crop",
    },
    price: 35000,
    location: "Male Atoll",
    country: "Maldives",
  },
  {
    title: "Cliffside Suite in Santorini",
    description:
      "Perched on the iconic caldera cliffs of Santorini, this whitewashed suite offers jaw-dropping views of the Aegean Sea and the famous blue-domed churches.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&auto=format&fit=crop",
    },
    price: 18000,
    location: "Oia",
    country: "Greece",
  },
  {
    title: "Tropical Treehouse in Bali",
    description:
      "Nestled high in the jungle canopy near Ubud, this bamboo treehouse lets you fall asleep to the sounds of the rainforest and wake up to stunning rice terrace views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&auto=format&fit=crop",
    },
    price: 8500,
    location: "Ubud",
    country: "Indonesia",
  },
  {
    title: "Swiss Alps Chalet in Zermatt",
    description:
      "Hit the slopes right from your door in this stunning wooden chalet with direct views of the Matterhorn. Cozy fireplace, hot tub, and ski-in ski-out access.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&auto=format&fit=crop",
    },
    price: 22000,
    location: "Zermatt",
    country: "Switzerland",
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the heart of the Arabian Desert. This private oasis villa features a pool, traditional Arabic decor, and stunning sunset views over golden sand dunes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&auto=format&fit=crop",
    },
    price: 25000,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Historic Palazzo in Venice",
    description:
      "Sleep in a 16th-century Venetian palazzo steps from the Grand Canal. Frescoed ceilings, private gondola access, and a rooftop terrace with views of the city of water.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&auto=format&fit=crop",
    },
    price: 20000,
    location: "Venice",
    country: "Italy",
  },
  {
    title: "Vineyard Estate in Tuscany",
    description:
      "Wake up to rolling hills of vineyards in this beautifully restored Tuscan farmhouse. Wine tasting, olive oil tours, and authentic Italian cooking classes on-site.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop",
    },
    price: 16000,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Safari Lodge in Maasai Mara",
    description:
      "Witness the Great Migration from the comfort of this luxury tented lodge. Expert guides, bush breakfasts, and sundowner cocktails surrounded by Africa's wildlife.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800&auto=format&fit=crop",
    },
    price: 28000,
    location: "Maasai Mara",
    country: "Kenya",
  },
  {
    title: "Penthouse Suite in New York City",
    description:
      "Live at the top of the world in this jaw-dropping Manhattan penthouse. Panoramic views of Central Park and the skyline, rooftop terrace, and designer interiors.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop",
    },
    price: 30000,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Beachfront Bungalow in Phuket",
    description:
      "Step directly onto white sand from this luxury beachfront bungalow. Private plunge pool, daily Thai breakfast, and a beachside sala for afternoon naps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop",
    },
    price: 12000,
    location: "Phuket",
    country: "Thailand",
  },
  {
    title: "Ryokan Retreat in Kyoto",
    description:
      "Experience authentic Japanese culture in a traditional ryokan with tatami rooms, futon beds, and an outdoor hot spring bath. Kaiseki dinner served by a personal attendant.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&auto=format&fit=crop",
    },
    price: 14000,
    location: "Kyoto",
    country: "Japan",
  },
  {
    title: "Canal House in Amsterdam",
    description:
      "Soak up the Dutch Golden Age charm in this beautifully preserved canal house. Narrow staircases, original wooden beams, and a boat moored outside for your private use.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&auto=format&fit=crop",
    },
    price: 9500,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Eco Lodge in the Amazon",
    description:
      "Immerse yourself in the world's greatest rainforest. This eco-lodge offers guided jungle treks, piranha fishing, and night safaris to spot caimans and exotic wildlife.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&auto=format&fit=crop",
    },
    price: 11000,
    location: "Manaus",
    country: "Brazil",
  },
  {
    title: "Lighthouse Cottage in Ireland",
    description:
      "Stay in a converted Victorian lighthouse on the rugged Wild Atlantic Way. Crashing waves, dramatic cliffs, and the warmth of an Irish turf fire await you.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&auto=format&fit=crop",
    },
    price: 8000,
    location: "County Clare",
    country: "Ireland",
  },
  {
    title: "Mountain Lodge in Patagonia",
    description:
      "Base camp for adventure at the end of the world. This remote lodge overlooks the famous Torres del Paine peaks, glaciers, and pristine Patagonian wilderness.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop",
    },
    price: 19000,
    location: "Torres del Paine",
    country: "Chile",
  },
  {
    title: "Riad in Marrakech Medina",
    description:
      "Hidden behind a plain wooden door in the ancient medina lies this magical riad. A tranquil courtyard, mosaic tilework, rooftop terrace, and private hammam.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&auto=format&fit=crop",
    },
    price: 7500,
    location: "Marrakech",
    country: "Morocco",
  },
  {
    title: "Glass Igloo in Finnish Lapland",
    description:
      "Fall asleep watching the Northern Lights dance overhead from your heated glass igloo. Dog sledding, reindeer safaris, and snowshoeing through Arctic forests await.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520769945061-0a448c463865?w=800&auto=format&fit=crop",
    },
    price: 24000,
    location: "Rovaniemi",
    country: "Finland",
  },
  {
    title: "Beach House in Cape Town",
    description:
      "Perched between mountain and ocean on the Cape Peninsula, this sleek beach house offers white-sand beaches, whale watching, and dramatic sunsets over the Atlantic.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&auto=format&fit=crop",
    },
    price: 13000,
    location: "Cape Town",
    country: "South Africa",
  },
  {
    title: "Château in the Loire Valley",
    description:
      "Live the French dream in a private château surrounded by manicured gardens, vineyards, and the châteaux-dotted Loire Valley. Wine cellar and private chef available.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&auto=format&fit=crop",
    },
    price: 26000,
    location: "Loire Valley",
    country: "France",
  },
  {
    title: "Lakeside Cabin in Banff",
    description:
      "Surrounded by the jaw-dropping scenery of the Canadian Rockies, this lakeside cabin sits beside turquoise glacier-fed waters. Hiking, kayaking, and wildlife spotting at your door.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&auto=format&fit=crop",
    },
    price: 10000,
    location: "Banff",
    country: "Canada",
  },
  {
    title: "Cliffside Villa in Amalfi Coast",
    description:
      "Cling to the dramatic cliffs of Italy's most breathtaking coastline in this sun-soaked villa. Cascading lemon groves, a private sea-access pool, and endless Mediterranean views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1633321702518-7feccafb5b49?w=800&auto=format&fit=crop",
    },
    price: 21000,
    location: "Positano",
    country: "Italy",
  },
  {
    title: "Private Island in the Philippines",
    description:
      "Have an entire tropical island to yourself. Powder-white beaches, crystal waters teeming with marine life, and a dedicated team to look after your every need.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&auto=format&fit=crop",
    },
    price: 50000,
    location: "Palawan",
    country: "Philippines",
  },
  {
    title: "Tented Camp in Sahara Desert",
    description:
      "Spend the night under a sky bursting with stars in the Sahara. Luxury Berber tent, traditional drumming around the fire, and a sunrise camel ride over towering dunes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&auto=format&fit=crop",
    },
    price: 9000,
    location: "Merzouga",
    country: "Morocco",
  },
  {
    title: "Historic Castle in Scottish Highlands",
    description:
      "Live like Scottish royalty in this turreted castle surrounded by heather moorlands and glens. Whisky tasting, Highland games, and loch fishing are all included.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?w=800&auto=format&fit=crop",
    },
    price: 32000,
    location: "Scottish Highlands",
    country: "United Kingdom",
  },
  {
    title: "Wooden Cabin in Lapland Norway",
    description:
      "A remote hytte (cabin) deep in Norwegian Lapland. Soak in the outdoor hot tub while watching the midnight sun in summer, or the Northern Lights in winter.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800&auto=format&fit=crop",
    },
    price: 15000,
    location: "Tromsø",
    country: "Norway",
  },
  {
    title: "Luxury Apartment in Paris",
    description:
      "A chic Haussmann apartment in the heart of Paris with Eiffel Tower views from the balcony. Parquet floors, marble fireplaces, and Montmartre on your doorstep.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800&auto=format&fit=crop",
    },
    price: 17000,
    location: "Paris",
    country: "France",
  },

];

module.exports = { data: sampleListings };