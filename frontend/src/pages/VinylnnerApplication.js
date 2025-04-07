import React from "react";
import Layout from "../components/Layout";
import { NavLink, useParams } from "react-router-dom";
import Banner from "../components/Banner";

const VinylnnerApplication = () => {
  const applicationData = [
    {
      type: "Moonwalk",
      title: "Moonwalk",
      content: [
        {
          para: "Hardwearing Vinyl Floor covering in overall design",
        },
        {
          para: "0.7 mm pure PVC transparent wear layer with floating decorative chips",
        },
        {
          para: "Shades and textures combined to create stunning floor designs",
        },
        {
          para: "PU coating (optional) for easy and low cost maintenance",
        },
        {
          para: "Excellent resistance to scratches, abrasion, soiling and staining",
        },
        {
          para: "Glass fibre scrim for dimensional stability",
        },
      ],
      suitable: [
        {
          name: "Education",
          image: "/images/icons/image 59.png",
          link: "/vinyl-flooring/education",
        },
        {
          name: "Healthcare",
          image: "/images/icons/image 62.png",
          link: "/vinyl-flooring/healthcare",
        },
        {
          name: "Residential",
          image: "/images/icons/residential.png",
          link: "/vinyl-flooring/residential",
        },
        {
          name: "Offices/Retail",
          image: "/images/icons/workspace.png",
          link: "/vinyl-flooring/offices-retail",
        },
        {
          name: "Hospitality",
          image: "/images/icons/hospital.png",
          link: "/vinyl-flooring/hospitality",
        },
      ],

      applications: [
        {
          image: "/images/categories/moonwalk/MoonCraterMW2303.jpg",
          name: "Moon Crater MW2303",
        },
        {
          image: "/images/categories/moonwalk/NeonLightMW2305.jpg",
          name: "Neon Light MW2305",
        },
        {
          image: "/images/categories/moonwalk/PearlStarMW2308.jpg",
          name: "Pearl Star MW2308",
        },
        {
          image: "/images/categories/moonwalk/SilverGlazeMW2304.jpg",
          name: "Silver Glaze MW2304",
        },
        {
          image: "/images/categories/moonwalk/SkylineMW2302.jpg",
          name: "Skyline MW2302",
        },
        {
          image: "/images/categories/moonwalk/Sunrise-GloryMW2310.jpg",
          name: "Sunrise Glory MW2310",
        },
        {
          image: "/images/categories/moonwalk/TwilightZoneMW2301.jpg",
          name: "Twilight Zone MW2301",
        },
      ],
    },
    {
      type: "Symphony",
      title: "Symphony",
      content: [
        {
          para: "Symphony has a well-orchestrated ensemble of chips that flows in mesmerising patterns",
        },
        {
          para: "1 mm homogenous wear layer with compact vibrant color particles throughout the thickness for enhanced durability",
        },
        {
          para: "PU coating (optional) for easy and low cost maintenance",
        },
        {
          para: "Excellent resistance to scratches, abrasion, soiling and staining",
        },

        {
          para: "Glass fibre scrim for dimensional stability",
        },
      ],
      suitable: [
        {
          name: "Education",
          image: "/images/icons/image 59.png",
          link: "/vinyl-flooring/education",
        },
        {
          name: "Offices/Retail",
          image: "/images/icons/workspace.png",
          link: "/vinyl-flooring/offices-retail",
        },
        {
          name: "Hospitality",
          image: "/images/icons/hospital.png",
          link: "/vinyl-flooring/hospitality",
        },
      ],

      applications: [
        {
          image: "/images/categories/symphony/AngelicaSY2408.jpg",
          name: "Angelica SY2408",
        },
        {
          image: "/images/categories/symphony/BlueChipSY2414.jpg",
          name: "Blue Chip SY2414",
        },
        {
          image: "/images/categories/symphony/ButterflySY2415.jpg",
          name: "Butterfly SY2415",
        },
        {
          image: "/images/categories/symphony/CastleRedSY2409.jpg",
          name: "Castle Red SY2409",
        },
        {
          image: "/images/categories/symphony/ElectricBlueSY2403.jpg",
          name: "Electric Blue SY2403",
        },
        {
          image: "/images/categories/symphony/GoodLuckSY2401.jpg",
          name: "Good Luck SY2401",
        },
        {
          image: "/images/categories/symphony/JonquilSY2411.jpg",
          name: "Jonquil SY2411",
        },
        {
          image: "/images/categories/symphony/JungleGreenSY2406.jpg",
          name: "Jungle Green SY2406",
        },
        {
          image: "/images/categories/symphony/LionsManeSY2402.jpg",
          name: "Lions Mane SY2402",
        },
        {
          image: "/images/categories/symphony/MedallionSY2410.jpg",
          name: "Medallion SY2410",
        },
        {
          image: "/images/categories/symphony/OrientalPearlSY2412.jpg",
          name: "Oriental Pearl SY2412",
        },
        {
          image: "/images/categories/symphony/ParakeetSY2405.jpg",
          name: "Parakeet SY2405",
        },
        {
          image: "/images/categories/symphony/ProsperitySY2407.jpg",
          name: "Prosperity SY2407",
        },
        {
          image: "/images/categories/symphony/RoyaltySY2404.jpg",
          name: "Royalty SY2404",
        },
        {
          image: "/images/categories/symphony/WanderLustSY2413.jpg",
          name: "Wander Lust SY2413",
        },
      ],
    },
    {
      type: "Elegant",
      title: "Elegant",
      content: [
        {
          para: "Printed flooring with floating colourful chips adds elegance to the room decore",
        },
        {
          para: "Elegant comes in versatile vibrant colours",
        },
      ],
      suitable: [
        {
          name: "Education",
          image: "/images/icons/image 59.png",
          link: "/vinyl-flooring/education",
        },
        {
          name: "Residential",
          image: "/images/icons/residential.png",
          link: "/vinyl-flooring/residential",
        },
        {
          name: "Offices/Retail",
          image: "/images/icons/workspace.png",
          link: "/vinyl-flooring/offices-retail",
        },
        {
          name: "Hospitality",
          image: "/images/icons/hospital.png",
          link: "/vinyl-flooring/hospitality",
        },
      ],

      applications: [
        {
          image: "/images/categories/elegant/EG2047.jpg",
          name: "BEIGE EG2047",
        },
        {
          image: "/images/categories/elegant/EG2011.jpg",
          name: "YELLOW EG2011",
        },
        {
          image: "/images/categories/elegant/EG2958.jpg",
          name: "BROWN EG2037",
        },
        {
          image: "/images/categories/elegant/EG2029.jpg",
          name: "NAVY BLUE EG2029",
        },
        {
          image: "/images/categories/elegant/EG2957.jpg",
          name: "TERRACOTTA EG2957",
        },
        {
          image: "/images/categories/elegant/EG2031.jpg",
          name: "SKY BLUE EG2031",
        },
        {
          image: "/images/categories/elegant/EG2147.jpg",
          name: "DARK GREY EG2147",
        },
        {
          image: "/images/categories/elegant/EG2041.jpg",
          name: "GREEN EG2041",
        },
        {
          image: "/images/categories/elegant/EG2958.jpg",
          name: "LIGHT Grey EG2958",
        },
      ],
    },
    {
      type: "Accord",
      title: "Accord",
      content: [
        {
          para: "1 mm homogenous wear layer with compact sombre color particles throughout the thickness for enhanced durability",
        },
        {
          para: "PU coating (optional) for easy and low cost maintenance",
        },
        {
          para: "Excellent resistance to scratches, abrasion, soiling and staining",
        },

        {
          para: "Glass fibre scrim for dimensional stability",
        },
      ],
      suitable: [
        {
          name: "Education",
          image: "/images/icons/image 59.png",
          link: "/vinyl-flooring/education",
        },
        {
          name: "Healthcare",
          image: "/images/icons/image 62.png",
          link: "/vinyl-flooring/healthcare",
        },
        {
          name: "Residential",
          image: "/images/icons/residential.png",
          link: "/vinyl-flooring/residential",
        },
        {
          name: "Offices/Retail",
          image: "/images/icons/workspace.png",
          link: "/vinyl-flooring/offices-retail",
        },
        {
          name: "Hospitality",
          image: "/images/icons/hospital.png",
          link: "/vinyl-flooring/hospitality",
        },
      ],

      applications: [
        {
          image: "/images/categories/accord/BlueberryRushAC2252.jpg",
          name: "Blueberry Rush AC2252",
        },
        {
          image: "/images/categories/accord/BlueLagoonAC2251.jpg",
          name: "Blue Lagoon AC2251",
        },
        {
          image: "/images/categories/accord/GreenTeaAC2258.jpg",
          name: "Green Tea AC2258",
        },
        {
          image: "/images/categories/accord/IcyChillAC2253.jpg",
          name: "Icy Chill AC2253",
        },
        {
          image: "/images/categories/accord/LimeDelightAC2256.jpg",
          name: "Lime Delight AC2256",
        },
        {
          image: "/images/categories/accord/Swiss CoffeeAC2255.jpg",
          name: "Swiss Coffee AC2255",
        },
        {
          image: "/images/categories/accord/TangoAC2257.jpg",
          name: "Tango AC2257",
        },
        {
          image: "/images/categories/accord/ThundercloudAC2254.jpg",
          name: "Thundercloud AC2254",
        },
      ],
    },
    {
      type: "Startrek",
      title: "Startrek",
      content: [
        {
          para: "1 mm homogenous wear layer with compact vibrant color particles throughout the thickness for enhanced durability",
        },
        {
          para: "PU coating (optional) for easy and low cost maintenance",
        },
        {
          para: "Excellent resistance to scratches, abrasion, soiling and staining",
        },

        {
          para: "Glass fibre scrim for dimensional stability",
        },
      ],
      suitable: [
        {
          name: "Education",
          image: "/images/icons/image 59.png",
          link: "/vinyl-flooring/education",
        },
        {
          name: "Healthcare",
          image: "/images/icons/image 62.png",
          link: "/vinyl-flooring/healthcare",
        },
        {
          name: "Offices/Retail",
          image: "/images/icons/workspace.png",
          link: "/vinyl-flooring/offices-retail",
        },
        {
          name: "Hospitality",
          image: "/images/icons/hospital.png",
          link: "/vinyl-flooring/hospitality",
        },
      ],

      applications: [
        {
          image: "/images/categories/startrek/AmazonSK2506.jpg",
          name: "Amazon SK2506",
        },
        {
          image: "/images/categories/startrek/MochaMousseSK2501.jpg",
          name: "Mocha Mousse SK2501",
        },
        {
          image: "/images/categories/startrek/OrangeSparkSK2508.jpg",
          name: "Orange Spark SK2508",
        },
        {
          image: "/images/categories/startrek/SilverLiningSK2502.jpg",
          name: "Silver Lining SK2502",
        },
        {
          image: "/images/categories/startrek/SplashSK2630.jpg",
          name: "Splash SK2630",
        },
        {
          image: "/images/categories/startrek/SunriseSK2509.jpg",
          name: "Sunrise SK2509",
        },
        {
          image: "/images/categories/startrek/TiffanySK2505.jpg",
          name: "Tiffany SK2505",
        },
        {
          image: "/images/categories/startrek/WalnutShellSK2507.jpg",
          name: "Walnut Shell SK2507",
        },
      ],
    },
    {
      type: "Dazzle",
      title: "Dazzle",
      content: [
        {
          para: "1 mm homogenous wear layer with compact vibrant color particles throughout the thickness for enhanced durability",
        },
        {
          para: "PU coating (optional) for easy and low cost maintenance",
        },
        {
          para: "Excellent resistance to scratches, abrasion, soiling and staining",
        },

        {
          para: "Glass fibre scrim for dimensional stability",
        },
      ],
      suitable: [
        {
          name: "Education",
          image: "/images/icons/image 59.png",
          link: "/vinyl-flooring/education",
        },
        {
          name: "Residential",
          image: "/images/icons/residential.png",
          link: "/vinyl-flooring/residential",
        },
        {
          name: "Offices/Retail",
          image: "/images/icons/workspace.png",
          link: "/vinyl-flooring/offices-retail",
        },
        {
          name: "Hospitality",
          image: "/images/icons/hospital.png",
          link: "/vinyl-flooring/hospitality",
        },
      ],
      applications: [
        {
          image: "/images/categories/dazzle/DZ2152.jpg",
          name: "TURQUOISE DZ2152",
        },
        {
          image: "/images/categories/dazzle/DZ2998.jpg",
          name: "TOPAZ DZ2998",
        },
        {
          image: "/images/categories/dazzle/DZ2047.jpg",
          name: "OPAL DZ2047",
        },
        {
          image: "/images/categories/dazzle/DZ2041.jpg",
          name: "EMERALD DZ2041",
        },
        {
          image: "/images/categories/dazzle/DZ2038.jpg",
          name: "MOONSTONE DZ2038",
        },
        {
          image: "/images/categories/dazzle/DZ2147.jpg",
          name: "ONYX DZ2147",
        },
        {
          image: "/images/categories/dazzle/DZ2037.jpg",
          name: "AMBER DZ2037",
        },
        {
          image: "/images/categories/dazzle/DZ2011.jpg",
          name: "CITRINE DZ2011",
        },
        {
          image: "/images/categories/dazzle/DZ2094.jpg",
          name: "RUBY DZ2094",
        },
        {
          image: "/images/categories/dazzle/DZ2032.jpg",
          name: "ZIRCON DZ2032",
        },
      ],
    },
    {
      type: "Mirakle",
      title: "Mirakle",
      content: [
        {
          para: "High Quality Vinyl Resilient flooring in Homogenous Construction",
        },
        {
          para: "Anti-bacterial and Anti-Fungal Qualities",
        },
        {
          para: "Superior marbleised designs in refreshed colors",
        },
        {
          para: "Available in tile and roll form in different thickness",
        },

        {
          para: "Value for MONEY option for medium to high traffic areas",
        },
        {
          para: "Tough and durable with PU (optional) for easy and low cost maintenance",
        },
      ],
      suitable: [
        {
          name: "Education",
          image: "/images/icons/image 59.png",
          link: "/vinyl-flooring/education",
        },
        {
          name: "Healthcare",
          image: "/images/icons/image 62.png",
          link: "/vinyl-flooring/healthcare",
        },
        {
          name: "Offices/Retail",
          image: "/images/icons/workspace.png",
          link: "/vinyl-flooring/offices-retail",
        },
        {
          name: "Hospitality",
          image: "/images/icons/hospital.png",
          link: "/vinyl-flooring/hospitality",
        },
      ],

      applications: [
        {
          image: "/images/categories/mirakle/Blue-sea-MK2352.jpg",
          name: "Blue Sea MK2352",
        },
        {
          image: "/images/categories/mirakle/Cool-Breeze-MK2351.jpg",
          name: "Cool Breeze MK2351",
        },
        {
          image: "/images/categories/mirakle/Dusk-cloud-MK2358.jpg",
          name: "Dusk Cloud MK2358",
        },
        {
          image: "/images/categories/mirakle/Forest-whisper-MK2354.jpg",
          name: "Forest whisper MK2354",
        },
        {
          image: "/images/categories/mirakle/Nimbus-shower-MK2357.jpg",
          name: "Nimbus Shower MK2357",
        },
        {
          image: "/images/categories/mirakle/Red-earth-MK2353.jpg",
          name: "Red Earth MK2353",
        },
        {
          image: "/images/categories/mirakle/Stoneware-MK2356.jpg",
          name: "Stoneware MK2356",
        },
        {
          image: "/images/categories/mirakle/Sunny-sands-MK2355.jpg",
          name: "Sunny sands MK2355",
        },
      ],
    },
    {
      type: "Royal-Star",
      title: "Royal Star",
      content: [
        {
          para: "Colored wear layer with decorative multi-color chips to enhance the room interiors",
        },
        {
          para: "Modern designs in exciting colors",
        },
        {
          para: "Easy low-cost maintenance (PU optional)",
        },
      ],
      suitable: [
        {
          name: "Education",
          image: "/images/icons/image 59.png",
          link: "/vinyl-flooring/education",
        },
        {
          name: "Healthcare",
          image: "/images/icons/image 62.png",
          link: "/vinyl-flooring/healthcare",
        },
        {
          name: "Residential",
          image: "/images/icons/residential.png",
          link: "/vinyl-flooring/residential",
        },
        {
          name: "Offices/Retail",
          image: "/images/icons/workspace.png",
          link: "/vinyl-flooring/offices-retail",
        },
        {
          name: "Hospitality",
          image: "/images/icons/hospital.png",
          link: "/vinyl-flooring/hospitality",
        },
      ],

      applications: [
        {
          image: "/images/categories/royal-star/RS3114.jpg",
          name: "Soft Glow RS3114",
        },
        {
          image: "/images/categories/royal-star/RS3100.jpg",
          name: "Crimson Red RS3100",
        },
        {
          image: "/images/categories/royal-star/RS3104.jpg",
          name: "Fire Red RS3104",
        },
        {
          image: "/images/categories/royal-star/RS3109.jpg",
          name: "Sapphire RS3109",
        },
        {
          image: "/images/categories/royal-star/RS3105.jpg",
          name: "Golden Touch RS3105",
        },
        {
          image: "/images/categories/royal-star/RS3112.jpg",
          name: "Ivory Coast RS3112",
        },
        {
          image: "/images/categories/royal-star/RS3106.jpg",
          name: "Water Rapids RS3106",
        },
        {
          image: "/images/categories/royal-star/RS3107.jpg",
          name: "Silver Sand RS3107",
        },
        {
          image: "/images/categories/royal-star/RS3108.jpg",
          name: "Lassic Grey RS3108",
        },
        {
          image: "/images/categories/royal-star/RS3110.jpg",
          name: "Blue Water RS3110",
        },
        {
          image: "/images/categories/royal-star/RS3103.jpg",
          name: "Volcano RS3103",
        },
        {
          image: "/images/categories/royal-star/RS3102.jpg",
          name: "Sea Green RS3102",
        },
      ],
    },
    {
      type: "Nuplank",
      title: "Nuplank",
      content: [
        {
          para: "Ideal for showrooms, offices, hotel lobbies and leisure environments",
        },
        {
          para: "Designer collection of realistic looking wooden patterns and colors accurately replicated in PVC planks",
        },
        {
          para: "Available in 2 mm & 1.5 mm thickness and various dimensions",
        },
      ],
      suitable: [
        {
          name: "Education",
          image: "/images/icons/image 59.png",
          link: "/vinyl-flooring/education",
        },
        {
          name: "Healthcare",
          image: "/images/icons/image 62.png",
          link: "/vinyl-flooring/healthcare",
        },
        {
          name: "Residential",
          image: "/images/icons/residential.png",
          link: "/vinyl-flooring/residential",
        },
        {
          name: "Offices/Retail",
          image: "/images/icons/workspace.png",
          link: "/vinyl-flooring/offices-retail",
        },
        {
          name: "Hospitality",
          image: "/images/icons/hospital.png",
          link: "/vinyl-flooring/hospitality",
        },
      ],

      applications: [
        {
          image: "/images/categories/nuplank/AspenBrownNU361037.jpg",
          name: "Aspen Brown NU361037",
        },
        {
          image: "/images/categories/nuplank/AspenBrownOrangeNU361039.jpg",
          name: "Aspen Brown Orange",
        },
        {
          image: "/images/categories/nuplank/AspenCreamNU361013.jpg",
          name: "Aspen Cream NU361013",
        },
        {
          image: "/images/categories/nuplank/AspenDarkBeigeNU361008.jpg",
          name: "Aspen Dark Beige NU361008",
        },
        {
          image: "/images/categories/nuplank/BartekBlackNU363051.jpg",
          name: "Bartek Black NU363051",
        },
        {
          image: "/images/categories/nuplank/BartekBrownNU363037.jpg",
          name: "Bartek Brown NU363037",
        },
        {
          image: "/images/categories/nuplank/BartekCreamNU363013.jpg",
          name: "Bartek Cream NU363013",
        },
        {
          image: "/images/categories/nuplank/BartekMaroonNU363026.jpg",
          name: "Bartek Maroon NU363026",
        },
        {
          image: "/images/categories/nuplank/BartekNaturalNU363005.jpg",
          name: "Bartek Natural NU363005",
        },
        {
          image: "/images/categories/nuplank/BartekRosewoodNU363050.jpg",
          name: "Bartek Rosewood NU363050",
        },
        {
          image: "/images/categories/nuplank/CanaryCreamNU362013.jpg",
          name: "Canary Cream NU362013",
        },
        {
          image: "/images/categories/nuplank/CanaryDarkBeigeNU362008.jpg",
          name: "Canary Dark Beige NU362008",
        },
        {
          image: "/images/categories/nuplank/CanaryReddishBrownNU362048.jpg",
          name: "Canary Reddish Brown NU362048",
        },
        {
          image: "/images/categories/nuplank/CanaryRosewoodNU362050.jpg",
          name: "Canary Rosewood NU362050",
        },
        {
          image: "/images/categories/nuplank/WoodyBlackNU364051.jpg",
          name: "Woody Black NU364051",
        },
        {
          image: "/images/categories/nuplank/WoodyCreamNU364013.jpg",
          name: "Woody Cream NU364013",
        },
        {
          image: "/images/categories/nuplank/WoodyLightBeigeNU364004.jpg",
          name: "Woody Light Beige NU364004",
        },
        {
          image: "/images/categories/nuplank/WoodyNaturalNU364005.jpg",
          name: "Woody Natural NU364005",
        },
      ],
    },
    {
      type: "Tiger",
      title: "Tiger",
      content: [
        {
          para: "Superior marbleised designs in refreshed colors",
        },
        {
          para: "Available in Roll form in 1 mm, 1.5 mm and 2 mm thickness",
        },
        {
          para: "Value for money option for medium to high traffic areas",
        },
        {
          para: "Suitable for heavy duty commercial areas like shopping complexes, Hospitals, Education, Offices, Retails, Cabins, etc",
        },

        {
          para: "Glass fibre scrim for dimensional stability",
        },
      ],
      suitable: [
        {
          name: "Education",
          image: "/images/icons/image 59.png",
          link: "/vinyl-flooring/education",
        },
        {
          name: "Healthcare",
          image: "/images/icons/image 62.png",
          link: "/vinyl-flooring/healthcare",
        },
        {
          name: "Offices/Retail",
          image: "/images/icons/workspace.png",
          link: "/vinyl-flooring/offices-retail",
        },
        {
          name: "Hospitality",
          image: "/images/icons/hospital.png",
          link: "/vinyl-flooring/hospitality",
        },
      ],

      applications: [
        {
          image: "/images/categories/tiger/ice-burg.jpg",
          name: "Ice Burg",
        },
        {
          image: "/images/categories/tiger/castle-red.jpg",
          name: "Castle Red",
        },
        {
          image: "/images/categories/tiger/mellow-green.jpg",
          name: "Mellow Green",
        },
        {
          image: "/images/categories/tiger/Dunhill-copper.jpg",
          name: "Dunhill Copper",
        },
        {
          image: "/images/categories/tiger/soft-linon.jpg",
          name: "Soft Linon",
        },
        {
          image: "/images/categories/tiger/stone-path.jpg",
          name: "Stone path",
        },
        {
          image: "/images/categories/tiger/dessert-ivory.jpg",
          name: "Desert Ivory",
        },
        {
          image: "/images/categories/tiger/caspian-blue.jpg",
          name: "Caspian blue",
        },
        {
          image: "/images/categories/tiger/Water-jet.jpg",
          name: "Water jet",
        },
      ],
    },
    {
      type: "Avengers",
      title: "Avengers",
      content: [
        {
          para: "Avengers is multi- purpose sports surface designed for use in a wide range of sporting events like Gymnasiums, Yoga rooms, Table Tennis, fitness centers etc.",
        },
        {
          para: "It is manufactured keeping in view the varying shock absorbing requirements and performance requirements.",
        },
      ],
      suitable: [
        {
          name: "Sports",
          image: "/images/icons/sports.png",
          link: "/vinyl-flooring/sports",
        },
        {
          name: "Education",
          image: "/images/icons/image 59.png",
          link: "/vinyl-flooring/education",
        },
        {
          name: "Healthcare",
          image: "/images/icons/image 62.png",
          link: "/vinyl-flooring/healthcare",
        },
        {
          name: "Offices/Retail",
          image: "/images/icons/workspace.png",
          link: "/vinyl-flooring/offices-retail",
        },
        {
          name: "Hospitality",
          image: "/images/icons/hospital.png",
          link: "/vinyl-flooring/hospitality",
        },
      ],

      applications: [
        {
          image: "/images/categories/avengers/01satinwood.jpg",
          name: "Stainwood 1511",
        },
        {
          image: "/images/categories/avengers/02ebony.jpg",
          name: "Ebony 5013",
        },
        {
          image: "/images/categories/avengers/03basswood.jpg",
          name: "Basswood 6810",
        },
        {
          image: "/images/categories/avengers/04lumber.jpg",
          name: "Lumber 6812",
        },
        {
          image: "/images/categories/avengers/05red.jpg",
          name: "Red 8101",
        },
        {
          image: "/images/categories/avengers/06orange.jpg",
          name: "Orange 8201",
        },
        {
          image: "/images/categories/avengers/07blue.jpg",
          name: "Blue 8301",
        },
        {
          image: "/images/categories/avengers/08green.jpg",
          name: "Green 8401",
        },
        {
          image: "/images/categories/avengers/09steelgrey.jpg",
          name: "Steel Grey 8501",
        },
      ],
    },
    {
      type: "Wally",
      title: "Wally",
      content: [
        {
          para: "Easy to clean, install and attractive finish",
        },
        {
          para: "Excellent barrier to dirt and infection with PU shield",
        },
        {
          para: "Ideal for wet and Hygiene critical areas due to Anti-fungal and Anti-bacterial treatment",
        },
      ],
      suitable: [
        {
          name: "Healthcare",
          image: "/images/icons/image 62.png",
          link: "/vinyl-flooring/healthcare",
        },
      ],

      applications: [
        {
          image: "/images/categories/wally/Aqua-Young-WY2398.jpg",
          name: "Aqua Young WY2398",
        },
        {
          image: "/images/categories/wally/Calming-BlueWY2400.jpg",
          name: "Calming Blue WY2400",
        },
        {
          image: "/images/categories/wally/Coral-Rocks-WY2397.jpg",
          name: "Coral Rocks WY2397",
        },
        {
          image: "/images/categories/wally/Lilac-DashWY2395.jpg",
          name: "Lilac Dash WY2395",
        },
        {
          image: "/images/categories/wally/SnowBlush-WY2399.jpg",
          name: "Snow Blush WY2399",
        },
        {
          image: "/images/categories/wally/Soft-Honey-WY2396.jpg",
          name: "Soft Honey WY2396",
        },
      ],
    },
    {
      type: "Orbit",
      title: "Orbit",
      content: [
        {
          para: "For greater safety in sensitive environments",
        },
        {
          para: "Calendered and compacted with permanent anti-static properties",
        },
        {
          para: " Ideally suitable for high-tech applications, electronics, telecommunication areas, computer rooms, operating theatres, radiology, etc",
        },
      ],
      suitable: [
        {
          name: "Education",
          image: "/images/icons/image 59.png",
          link: "/vinyl-flooring/education",
        },
        {
          name: "Healthcare",
          image: "/images/icons/image 62.png",
          link: "/vinyl-flooring/healthcare",
        },
        {
          name: "Residential",
          image: "/images/icons/residential.png",
          link: "/vinyl-flooring/residential",
        },
        {
          name: "Offices/Retail",
          image: "/images/icons/workspace.png",
          link: "/vinyl-flooring/offices-retail",
        },
        {
          name: "Hospitality",
          image: "/images/icons/hospital.png",
          link: "/vinyl-flooring/hospitality",
        },
      ],

      applications: [
        {
          image: "/images/categories/orbit/ArabianSandAT2655.jpg",
          name: "Arabian Sand AT2655",
        },
        {
          image: "/images/categories/orbit/GreyMatterAT2652.jpg",
          name: "Grey Matter AT2652",
        },
        {
          image: "/images/categories/orbit/HazelnutAT2654.jpg",
          name: "Hazelnut AT2654",
        },
        {
          image: "/images/categories/orbit/Olive-PathAT2653.jpg",
          name: "Olive Path AT2653",
        },
        {
          image: "/images/categories/orbit/Plain-BlissAT2651.jpg",
          name: "Plain Bliss AT2651",
        },
      ],
    },
    {
      type: "Aqua-RS",
      title: "Aqua RS",
      content: [
        {
          para: "Designed for barefoot and continually wet areas",
        },
        {
          para: "1 mm homogenous pimple embossed wear layer provides long-life slip resistance with a deep inlay of silicon carbide granules, quartz and colourful chips",
        },
        {
          para: "Excellent resistance to scratches, abrasion, soiling and staining",
        },
        {
          para: "Glass fibre scrim for dimensional stability",
        },
        {
          para: "Non-woven backing enhances sub-floor adhesion (optional for non wet area application)",
        },
      ],
      suitable: [
        {
          name: "Education",
          image: "/images/icons/image 59.png",
          link: "/vinyl-flooring/education",
        },
        {
          name: "Healthcare",
          image: "/images/icons/image 62.png",
          link: "/vinyl-flooring/healthcare",
        },
        {
          name: "Residential",
          image: "/images/icons/residential.png",
          link: "/vinyl-flooring/residential",
        },
        {
          name: "Offices/Retail",
          image: "/images/icons/workspace.png",
          link: "/vinyl-flooring/offices-retail",
        },
        {
          name: "Hospitality",
          image: "/images/icons/hospital.png",
          link: "/vinyl-flooring/hospitality",
        },
      ],

      applications: [
        {
          image: "/images/categories/aqua/RQ2640.jpg",
          name: "Water Vapour RQ2640",
        },
        {
          image: "/images/categories/aqua/RQ2641.jpg",
          name: "Deep Dive RQ2641",
        },
        {
          image: "/images/categories/aqua/RQ2642.jpg",
          name: "Ice Berg RQ2642",
        },
        {
          image: "/images/categories/aqua/RQ2644.jpg",
          name: "Grainy Sand RQ2644",
        },
        {
          image: "/images/categories/aqua/RQ2643.jpg",
          name: "Sea Bed RQ2643",
        },
        {
          image: "/images/categories/aqua/RQ2648.jpg",
          name: "African Desert RQ2648",
        },
        {
          image: "/images/categories/aqua/RQ2646.jpg",
          name: "Rainfall RQ2646",
        },
        {
          image: "/images/categories/aqua/RQ2647.jpg",
          name: "Forest Canopy RQ2647",
        },
      ],
    },
    {
      type: "Majesty-Pro",
      title: "Majesty Pro",
      content: [
        {
          para: "Hardwearing Vinyl Floor covering in elegant and realistic wood designs",
        },
        {
          para: "0.7 mm pure PVC transparent wear layer",
        },
        {
          para: "PU coating for easy and low cost maintenance",
        },
        {
          para: "Excellent resistance to scratches, abrasion, soiling and staining.",
        },

        {
          para: "Glass fibre scrim for dimensional stability",
        },
        {
          para: "Ideal for domestic and semi-commercial use",
        },
      ],
      suitable: [
        {
          name: "Residential",
          image: "/images/icons/residential.png",
          link: "/vinyl-flooring/residential",
        },
        {
          name: "Offices/Retail",
          image: "/images/icons/workspace.png",
          link: "/vinyl-flooring/offices-retail",
        },
        {
          name: "Hospitality",
          image: "/images/icons/hospital.png",
          link: "/vinyl-flooring/hospitality",
        },
      ],

      applications: [
        {
          image: "/images/categories/majesty-pro/MP 117047.jpg",
          name: "Beige MP117047",
        },
        {
          image: "/images/categories/majesty-pro/MP117005.jpg",
          name: "Natural MP117005",
        },
        {
          image: "/images/categories/majesty-pro/MP117048.jpg",
          name: "Reddish Brown MP117048",
        },
        {
          image: "/images/categories/majesty-pro/MP351013.jpg",
          name: "Cream MP351013",
        },
        {
          image: "/images/categories/majesty-pro/MP353039.jpg",
          name: "Burnt Orange MP351039",
        },
        {
          image: "/images/categories/majesty-pro/MP351985.jpg",
          name: "CN Natural MP351985",
        },
        {
          image: "/images/categories/majesty-pro/MP301008.jpg",
          name: "Dark Beige MP301008",
        },
        {
          image: "/images/categories/majesty-pro/MP305008.jpg",
          name: "Dark Beige MP305008",
        },
        {
          image: "/images/categories/majesty-pro/MP305047.jpg",
          name: "Beige MP305047",
        },
        {
          image: "/images/categories/majesty-pro/MP303013.jpg",
          name: "Cream MP303013",
        },
        {
          image: "/images/categories/majesty-pro/MP305037.jpg",
          name: "Brown MP305037",
        },
        {
          image: "/images/categories/majesty-pro/MP305955.jpg",
          name: "C Rosewood MP305955",
        },
        {
          image: "/images/categories/majesty-pro/MP353004.jpg",
          name: "Light Beige MP353004",
        },
        {
          image: "/images/categories/majesty-pro/MP353037.jpg",
          name: "Brown MP353037",
        },
        {
          image: "/images/categories/majesty-pro/MP353039.jpg",
          name: "Burnt Orange MP353039",
        },
      ],
    },
    {
      type: "Opera",
      title: "Opera",
      content: [
        {
          para: "Wooden designs in various attractive colors",
        },
        {
          para: "Shades and textures are combined to create stunning floor designs",
        },
        {
          para: "Value for MONEY wood designs suited for residential and small shops",
        },
      ],
      suitable: [
        {
          name: "Residential",
          image: "/images/icons/residential.png",
          link: "/vinyl-flooring/residential",
        },
      ],

      applications: [
        {
          image: "/images/categories/opera/1.jpg",
          name: "Platina Beige OP307047",
        },
        {
          image: "/images/categories/opera/2.jpg",
          name: "Platina Blue OP307010",
        },
        {
          image: "/images/categories/opera/3.jpg",
          name: "Cream OP306013",
        },
        {
          image: "/images/categories/opera/4.jpg",
          name: "Natural OP306005",
        },
        {
          image: "/images/categories/opera/5.jpg",
          name: "Brown OP306037",
        },
        {
          image: "/images/categories/opera/6.jpg",
          name: "New Natural OP306985",
        },
        {
          image: "/images/categories/opera/7.jpg",
          name: "Light Beige OP301004",
        },
        {
          image: "/images/categories/opera/8.jpg",
          name: "Natural OP301005",
        },
        {
          image: "/images/categories/opera/9.jpg",
          name: "Dark Beige OP301008",
        },
        {
          image: "/images/categories/opera/10.jpg",
          name: "Rosewood OP301955",
        },
        {
          image: "/images/categories/opera/11.jpg",
          name: "Grey 302002",
        },
        {
          image: "/images/categories/opera/12.jpg",
          name: "Beige OP302047",
        },
        {
          image: "/images/categories/opera/13.jpg",
          name: "Burnt Orange OP302039",
        },
        {
          image: "/images/categories/opera/14.jpg",
          name: "Terracotta OP302957",
        },
        {
          image: "/images/categories/opera/15.jpg",
          name: "Light Beige OP303004",
        },
        {
          image: "/images/categories/opera/16.jpg",
          name: "Natural OP303005",
        },
        {
          image: "/images/categories/opera/17.jpg",
          name: "Cream OP303013",
        },
        {
          image: "/images/categories/opera/18.jpg",
          name: "New Natural OP303985",
        },
        {
          image: "/images/categories/opera/19.jpg",
          name: "New Natural OP304985",
        },
        {
          image: "/images/categories/opera/20.jpg",
          name: "Light Beige OP304004",
        },
        {
          image: "/images/categories/opera/21.jpg",
          name: "Natural OP304005",
        },
        {
          image: "/images/categories/opera/22.jpg",
          name: "Brown OP304037",
        },
      ],
    },
    {
      type: "Majesty-Pro",
      title: "Majesty Pro",
      content: [
        {
          para: "Hardwearing Vinyl Floor covering in elegant and realistic wood designs",
        },
        {
          para: "0.7 mm pure PVC transparent wear layer",
        },
        {
          para: "PU coating for easy and low cost maintenance",
        },
        {
          para: "Excellent resistance to scratches, abrasion, soiling and staining.",
        },

        {
          para: "Glass fibre scrim for dimensional stability",
        },
        {
          para: "Ideal for domestic and semi-commercial use",
        },
      ],
      suitable: [
        {
          name: "Residential",
          image: "/images/icons/residential.png",
          link: "/vinyl-flooring/residential",
        },
        {
          name: "Offices/Retail",
          image: "/images/icons/workspace.png",
          link: "/vinyl-flooring/offices-retail",
        },
        {
          name: "Hospitality",
          image: "/images/icons/hospital.png",
          link: "/vinyl-flooring/hospitality",
        },
      ],

      applications: [
        {
          image: "/images/categories/majesty-pro/MP 117047.jpg",
          name: "Beige MP117047",
        },
        {
          image: "/images/categories/majesty-pro/MP117005.jpg",
          name: "Natural MP117005",
        },
        {
          image: "/images/categories/majesty-pro/MP117048.jpg",
          name: "Reddish Brown MP117048",
        },
        {
          image: "/images/categories/majesty-pro/MP351013.jpg",
          name: "Cream MP351013",
        },
        {
          image: "/images/categories/majesty-pro/MP353039.jpg",
          name: "Burnt Orange MP351039",
        },
        {
          image: "/images/categories/majesty-pro/MP351985.jpg",
          name: "CN Natural MP351985",
        },
        {
          image: "/images/categories/majesty-pro/MP301008.jpg",
          name: "Dark Beige MP301008",
        },
        {
          image: "/images/categories/majesty-pro/MP305008.jpg",
          name: "Dark Beige MP305008",
        },
        {
          image: "/images/categories/majesty-pro/MP305047.jpg",
          name: "Beige MP305047",
        },
        {
          image: "/images/categories/majesty-pro/MP303013.jpg",
          name: "Cream MP303013",
        },
        {
          image: "/images/categories/majesty-pro/MP305037.jpg",
          name: "Brown MP305037",
        },
        {
          image: "/images/categories/majesty-pro/MP305955.jpg",
          name: "C Rosewood MP305955",
        },
        {
          image: "/images/categories/majesty-pro/MP353004.jpg",
          name: "Light Beige MP353004",
        },
        {
          image: "/images/categories/majesty-pro/MP353037.jpg",
          name: "Brown MP353037",
        },
        {
          image: "/images/categories/majesty-pro/MP353039.jpg",
          name: "Burnt Orange MP353039",
        },
      ],
    },
    {
      type: "Majesty-Pro",
      title: "Majesty Pro",
      content: [
        {
          para: "Hardwearing Vinyl Floor covering in elegant and realistic wood designs",
        },
        {
          para: "0.7 mm pure PVC transparent wear layer",
        },
        {
          para: "PU coating for easy and low cost maintenance",
        },
        {
          para: "Excellent resistance to scratches, abrasion, soiling and staining.",
        },

        {
          para: "Glass fibre scrim for dimensional stability",
        },
        {
          para: "Ideal for domestic and semi-commercial use",
        },
      ],
      suitable: [
        {
          name: "Residential",
          image: "/images/icons/residential.png",
          link: "/vinyl-flooring/residential",
        },
        {
          name: "Offices/Retail",
          image: "/images/icons/workspace.png",
          link: "/vinyl-flooring/offices-retail",
        },
        {
          name: "Hospitality",
          image: "/images/icons/hospital.png",
          link: "/vinyl-flooring/hospitality",
        },
      ],

      applications: [
        {
          image: "/images/categories/majesty-pro/MP 117047.jpg",
          name: "Beige MP117047",
        },
        {
          image: "/images/categories/majesty-pro/MP117005.jpg",
          name: "Natural MP117005",
        },
        {
          image: "/images/categories/majesty-pro/MP117048.jpg",
          name: "Reddish Brown MP117048",
        },
        {
          image: "/images/categories/majesty-pro/MP351013.jpg",
          name: "Cream MP351013",
        },
        {
          image: "/images/categories/majesty-pro/MP353039.jpg",
          name: "Burnt Orange MP351039",
        },
        {
          image: "/images/categories/majesty-pro/MP351985.jpg",
          name: "CN Natural MP351985",
        },
        {
          image: "/images/categories/majesty-pro/MP301008.jpg",
          name: "Dark Beige MP301008",
        },
        {
          image: "/images/categories/majesty-pro/MP305008.jpg",
          name: "Dark Beige MP305008",
        },
        {
          image: "/images/categories/majesty-pro/MP305047.jpg",
          name: "Beige MP305047",
        },
        {
          image: "/images/categories/majesty-pro/MP303013.jpg",
          name: "Cream MP303013",
        },
        {
          image: "/images/categories/majesty-pro/MP305037.jpg",
          name: "Brown MP305037",
        },
        {
          image: "/images/categories/majesty-pro/MP305955.jpg",
          name: "C Rosewood MP305955",
        },
        {
          image: "/images/categories/majesty-pro/MP353004.jpg",
          name: "Light Beige MP353004",
        },
        {
          image: "/images/categories/majesty-pro/MP353037.jpg",
          name: "Brown MP353037",
        },
        {
          image: "/images/categories/majesty-pro/MP353039.jpg",
          name: "Burnt Orange MP353039",
        },
      ],
    },
    {
      type: "Majesty-Pro",
      title: "Majesty Pro",
      content: [
        {
          para: "Hardwearing Vinyl Floor covering in elegant and realistic wood designs",
        },
        {
          para: "0.7 mm pure PVC transparent wear layer",
        },
        {
          para: "PU coating for easy and low cost maintenance",
        },
        {
          para: "Excellent resistance to scratches, abrasion, soiling and staining.",
        },

        {
          para: "Glass fibre scrim for dimensional stability",
        },
        {
          para: "Ideal for domestic and semi-commercial use",
        },
      ],
      suitable: [
        {
          name: "Residential",
          image: "/images/icons/residential.png",
          link: "/vinyl-flooring/residential",
        },
        {
          name: "Offices/Retail",
          image: "/images/icons/workspace.png",
          link: "/vinyl-flooring/offices-retail",
        },
        {
          name: "Hospitality",
          image: "/images/icons/hospital.png",
          link: "/vinyl-flooring/hospitality",
        },
      ],

      applications: [
        {
          image: "/images/categories/majesty-pro/MP 117047.jpg",
          name: "Beige MP117047",
        },
        {
          image: "/images/categories/majesty-pro/MP117005.jpg",
          name: "Natural MP117005",
        },
        {
          image: "/images/categories/majesty-pro/MP117048.jpg",
          name: "Reddish Brown MP117048",
        },
        {
          image: "/images/categories/majesty-pro/MP351013.jpg",
          name: "Cream MP351013",
        },
        {
          image: "/images/categories/majesty-pro/MP353039.jpg",
          name: "Burnt Orange MP351039",
        },
        {
          image: "/images/categories/majesty-pro/MP351985.jpg",
          name: "CN Natural MP351985",
        },
        {
          image: "/images/categories/majesty-pro/MP301008.jpg",
          name: "Dark Beige MP301008",
        },
        {
          image: "/images/categories/majesty-pro/MP305008.jpg",
          name: "Dark Beige MP305008",
        },
        {
          image: "/images/categories/majesty-pro/MP305047.jpg",
          name: "Beige MP305047",
        },
        {
          image: "/images/categories/majesty-pro/MP303013.jpg",
          name: "Cream MP303013",
        },
        {
          image: "/images/categories/majesty-pro/MP305037.jpg",
          name: "Brown MP305037",
        },
        {
          image: "/images/categories/majesty-pro/MP305955.jpg",
          name: "C Rosewood MP305955",
        },
        {
          image: "/images/categories/majesty-pro/MP353004.jpg",
          name: "Light Beige MP353004",
        },
        {
          image: "/images/categories/majesty-pro/MP353037.jpg",
          name: "Brown MP353037",
        },
        {
          image: "/images/categories/majesty-pro/MP353039.jpg",
          name: "Burnt Orange MP353039",
        },
      ],
    },
  ];

  const { innercategory } = useParams(); // Get innercategory from URL

  const selectedCategory = applicationData.find(
    (data) => data.type.toLowerCase() === innercategory.toLowerCase()
  );

  if (!selectedCategory) {
    return <h2>No applications found for {innercategory}</h2>;
  }

  const bannerData = {
    bannerImg: "/images/banners/collage.png",
    title: selectedCategory?.title || "Default Title", // Ensure it doesn't break if selectedCategory is undefined
    breadcrumbs: [
      { label: "Home", path: "/", active: false },
      { label: "Vinyl Flooring", path: "/vinyl-flooring", active: false },
      { label: selectedCategory?.title, path: null, active: true },
    ],
  };

  return (
    <Layout>
      <Banner
        bannerImg={bannerData.bannerImg}
        title={bannerData.title}
        breadcrumbs={bannerData.breadcrumbs}
      />

      <section className="vinyl-applications-section">
        <div className="container">
          <h2 className="title new-title text-center">
            <span className="yellow-title">{selectedCategory.title}</span>
            {""}
          </h2>

          <ul className="d-flex flex-column justify-content-center align-items-center">
            {" "}
            {selectedCategory?.content?.map((content, index) => (
              <li className="paragraph gray-para" key={index}>
                {content.para}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="application-types-section">
        <div className="container">
          <div className="row">
            {selectedCategory.applications.map((application, index) => (
              <div className="col-lg-2 mt-4" key={index}>
                <NavLink to={application.innerCategory}>
                  <div className="single-application-div">
                    <img src={application.image} alt={application.name} />
                    <h4>{application.name}</h4>
                  </div>
                </NavLink>
              </div>
            ))}
          </div>
          <div className="row mt-5 ">
            <div className="col-lg-12">
              <div className="row d-flex align-item-center justify-content-start application-tags-row">
                {/* <NavLink
                  to="/docs/Product Range Catlog_2014_10 Low.pdf"
                  target="_blank"
                >
                  <div className="tags-div ">
                    <div className="single-tag application-tag">
                      <h6 className="tag">Open e-brochure</h6>
                    </div>
                  </div>
                </NavLink> */}

                <div className="d-flex my-4 w-auto">
                  <NavLink
                    to="/docs/Product Range Catlog_2014_10 Low.pdf"
                    target="_blank"
                    className="custom-button"
                  >
                    Open e-brochure
                  </NavLink>
                </div>

                <div className="d-flex my-4 w-auto">
                  <NavLink to="/contact-us#inquire" className="custom-button">
                    Enquiry Now
                  </NavLink>
                </div>

                {/* <NavLink to="/contact-us#inquire">
                  <div className="tags-div">
                    <div className="single-tag application-tag">
                      <h6 className="tag">Enquiry Now</h6>
                    </div>
                  </div>
                </NavLink> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="suitable-for-section">
        <div className="container">
          <h3 className="suitable-for-title">Suitable For</h3>
          <div className="row">
            {selectedCategory?.suitable?.map((suitable, index) => (
              <div className="col-lg-2 mt-4" key={index}>
                <NavLink to={suitable.link}>
                  <div className="suitable-div">
                    <img
                      src={suitable.image}
                      alt={suitable.name}
                      className="inner-application-img"
                    />
                    <h6>{suitable.name}</h6>
                  </div>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VinylnnerApplication;
