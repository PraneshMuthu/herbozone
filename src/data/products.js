// Product data organized by category
export const products = {
    herbalDyeing: [
        {
            id: 201,
            name: "Eco-Dye Basic",
            description: "Natural herbal dye extracted from sustainable sources.",
            benefits: ["Eco-friendly", "Non-toxic", "Vibrant colors"],
            image: "/images/hero/research.c9f79c3c90df310d5e9e.jpg"
        }
    ],
    agriculturalFootprint: [
        {
            id: 3,
            name: "NPK Bio Fertilizer",
            description: "Microbial formulation for enhanced nutrient synthesis and soil fertility improvement.",
            advantages: [
                "Supports nutrient availability and uptake",
                "Improves soil fertility",
                "Non-toxic and cost-effective"
            ],
            image: "/images/hero/agri.16842b3cb2475e3a0241.jpg"
        },
        {
            id: 4,
            name: "Venus Stim",
            description: "Venus stim is a concentrated aqueous mixture of humic acid and fulvic acid, suitable for soil and foliar application. It mobilizes macro and micronutrients, improving their availability to plants.",
            benefits: [
                "Enhances nutrient availability and uptake",
                "Improves soil and plant metabolism",
                "Supports healthier crops"
            ],
            image: "/images/hero/agri.16842b3cb2475e3a0241.jpg"
        },
        {
            id: 5,
            name: "PGR Plant Growth Regulator",
            description: "PGR promotes growth and yield of crops by improving the plant's natural metabolic processes, ensuring more productive outcomes.",
            benefits: [
                "Improves plant metabolic efficiency",
                "Supports growth and yield",
                "Promotes healthier crop development"
            ],
            image: "/images/hero/agri.16842b3cb2475e3a0241.jpg"
        }
    ],
    civilAdditives: [
        {
            id: 301,
            name: "Bio-Concrete Additive",
            description: "Natural additive to improve concrete durability and sustainability.",
            benefits: ["Reduces cement usage", "Improves longevity", "Eco-friendly"],
            image: "/images/hero/research.c9f79c3c90df310d5e9e.jpg"
        }
    ],
    animalAegis: [
        {
            id: 6,
            name: "Immunizer",
            description: "Enzyme and vitamin consortium for enhanced poultry nutrition and immunity.",
            advantages: [
                "Improves nutrient digestibility and growth performance",
                "Helps improve feed conversion",
                "Supports overall poultry health"
            ],
            composition: "Fermented enzymes; vitamins A and C",
            dosage: "3–5 ml per kg of feed",
            image: "/images/hero/farm.23263f5a71c995181bc0.jpg"
        },
        {
            id: 7,
            name: "Proteinizer",
            description: "Proteins that are involved in all anabolic and catabolic pathways of digestion and metabolism. Exogenous enzymes are administered in poultry diets to make diet formulation more flexible.",
            benefits: [
                "Supports flexible diet formulation",
                "Enhances nutrient digestion",
                "Can help reduce production costs"
            ],
            image: "/images/hero/farm.23263f5a71c995181bc0.jpg"
        }
    ],
    aquacultureCare: [
        {
            id: 1,
            name: "Neptune",
            description: "The Probiotic used in Aquaculture is a live microbial addition, supplied via pond application and through feed which yields beneficial effects by modifying the gut micro flora by enhancing feed absorption of nutrition, Immunity against the pathogenic bacteria in gut.",
            advantages: [
                "Supports gut microflora balance",
                "Enhances feed absorption",
                "Improves immunity against pathogenic bacteria"
            ],
            image: "/images/products/product-1.a456d110bd400a3fda8f.JPG"
        },
        {
            id: 2,
            name: "Geo Soil Pro",
            description: "Live microbial addition for pond bottom soil treatment and organic matter decomposition. Soil quality maintains in the culture ponds by addition of gram positive bacillus strains than gram negative as they convert organic matter into carbon dioxide efficiently.",
            benefits: [
                "Improves pond bottom soil quality",
                "Accelerates organic matter decomposition",
                "Helps maintain stable pond conditions"
            ],
            image: "/images/products/product-2.90ca865b619cd415ba84.jpg"
        },
        {
            id: 101,
            name: "Aqua Gut Pro",
            description: "Advanced gut acidifier and probiotic blend designed to lower gut pH and exclude pathogens. Promotes a healthy digestive tract in shrimp and fish.",
            benefits: ["Controls gut pathogens", "Improves feed conversion ratio", "Enhances survival rates"],
            image: "/images/products/product-3.7291f8af3ea6b8b4fd58.jpg"
        },
        {
            id: 102,
            name: "Pond Shine",
            description: "High-potency water quality enhancer. Reduces suspended solids and improves transparency through biological floccculation.",
            benefits: ["Clarifies pond water", "Reduces stress on aquatic life", "Maintains stable algal bloom"],
            image: "/images/products/product-4.c76f8d940e20003effd8.jpg"
        },
        {
            id: 103,
            name: "Ammonia Buster",
            description: "Specific nitrifying bacteria consortium to rapidly reduce toxic ammonia and nitrite levels in aquaculture ponds.",
            benefits: ["Rapid ammonia reduction", "Prevents nitrite toxicity", "Stabilizes water quality"],
            image: "/images/products/product-5.34cc69711801a1e6d742.jpg"
        },
        {
            id: 104,
            name: "Mineral Max",
            description: "Essential mineral mixture fortified with macro and micro nutrients to support molting and shell formation in shrimp.",
            benefits: ["Supports healthy molting", "Prevents mineral deficiency", "Improves shell hardness"],
            image: "/images/products/product-6.b086abd0a292a74f704e.jpg"
        },
        {
            id: 105,
            name: "Vibrio Shield",
            description: "Bacteriophage and probiotic protection against Vibrio species. Non-antibiotic solution for disease prevention.",
            benefits: ["Controls Vibrio counts", "Safe for all stages", "No residue concerns"],
            image: "/images/products/product-7.97adad81101911737877.jpg"
        },
        {
            id: 106,
            name: "Oxy Gen Plus",
            description: "Instant oxygen releaser granules to combat low dissolved oxygen emergencies. Provides immediate relief to stressed stock.",
            benefits: ["Immediate oxygen supply", "Reduces BOD", "Essential for emergency kits"],
            image: "/images/products/product-8.61d37fe1e69febfd893f.jpg"
        }
    ]
};

export const productCategories = [
    { id: 'herbalDyeing', label: 'Herbal Dyeing Legacy', icon: '🎨' },
    { id: 'agriculturalFootprint', label: 'Agricultural Footprint', icon: '🌾' },
    { id: 'civilAdditives', label: 'Civil Industry Additives', icon: '🏗️' },
    { id: 'animalAegis', label: 'Animal Aegis', icon: '🐾' },
    { id: 'aquacultureCare', label: 'Aquaculture Care', icon: '🐟' }
];
