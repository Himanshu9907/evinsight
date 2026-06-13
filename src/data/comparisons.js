// export const comparisons = [
//   {
//     slug: "tata-curvv-ev-vs-nexon-ev",
//     car1: "Tata Curvv EV",
//     car2: "Tata Nexon EV",

//     specs: [
//       {
//         feature: "Range",
//         car1: "502 km",
//         car2: "465 km",
//       },
//       {
//         feature: "Battery",
//         car1: "55 kWh",
//         car2: "45 kWh",
//       },
//       {
//         feature: "Power",
//         car1: "167 bhp",
//         car2: "145 bhp",
//       },
//       {
//         feature: "Fast Charging",
//         car1: "Yes",
//         car2: "Yes",
//       },
//     ],
//   },
// ];

// export const comparisons = [
//   {
//     slug: "tata-curvv-ev-vs-nexon-ev",
//     car1: "Tata Curvv EV",
//     car2: "Tata Nexon EV",

//     specs: [
//       { feature: "Range", car1: "502 km", car2: "465 km" },
//       { feature: "Battery", car1: "55 kWh", car2: "45 kWh" },
//       { feature: "Power", car1: "167 bhp", car2: "145 bhp" },
//       { feature: "Price", car1: "₹18 Lakh", car2: "₹15 Lakh" },
//     ],
//   },

//   {
//     slug: "mahindra-be6-vs-curvv-ev",
//     car1: "Mahindra BE 6",
//     car2: "Tata Curvv EV",

//     specs: [
//       { feature: "Range", car1: "550 km", car2: "502 km" },
//       { feature: "Battery", car1: "59 kWh", car2: "55 kWh" },
//       { feature: "Power", car1: "228 bhp", car2: "167 bhp" },
//       { feature: "Price", car1: "₹19 Lakh", car2: "₹18 Lakh" },
//     ],
//   },

//   {
//     slug: "mg-windsor-ev-vs-nexon-ev",
//     car1: "MG Windsor EV",
//     car2: "Tata Nexon EV",

//     specs: [
//       { feature: "Range", car1: "449 km", car2: "465 km" },
//       { feature: "Battery", car1: "38 kWh", car2: "45 kWh" },
//       { feature: "Power", car1: "134 bhp", car2: "145 bhp" },
//       { feature: "Price", car1: "₹14 Lakh", car2: "₹15 Lakh" },
//     ],
//   },
// ];

export const comparisons = [
  {
    slug: "tata-curvv-ev-vs-nexon-ev",

    car1: "Tata Curvv EV",
    image1: "/curvv-ev.jpg",

    car2: "Tata Nexon EV",
    image2: "/nexon-ev.jpg",

    specs: [
      { feature: "Price", car1: "₹17.49 Lakh", car2: "₹14.49 Lakh" },

      { feature: "Range (ARAI)", car1: "585 km", car2: "489 km" },

      { feature: "Battery Pack", car1: "55 kWh", car2: "45 kWh" },

      { feature: "Power", car1: "167 bhp", car2: "145 bhp" },

      { feature: "Torque", car1: "215 Nm", car2: "215 Nm" },

      { feature: "0-100 km/h", car1: "8.6 sec", car2: "8.9 sec" },

      { feature: "Top Speed", car1: "160 km/h", car2: "150 km/h" },

      { feature: "DC Fast Charging", car1: "70 kW", car2: "60 kW" },

      { feature: "10-80% Charging", car1: "40 min", car2: "56 min" },

      {
        feature: "Drive Modes",
        car1: "Eco / City / Sport",
        car2: "Eco / City / Sport",
      },

      { feature: "ADAS", car1: "Level 2", car2: "No" },

      { feature: "Sunroof", car1: "Panoramic", car2: "Electric" },

      { feature: "Boot Space", car1: "500 L", car2: "350 L" },

      { feature: "Warranty", car1: "8 Years", car2: "8 Years" },

      { feature: "Safety Rating", car1: "5 Star", car2: "5 Star" },
    ],

    winner: "Tata Curvv EV",

    verdict:
      "Tata Curvv EV offers better range, bigger battery, faster charging, ADAS and more premium features. Nexon EV remains a value-for-money option.",
  },

  {
    slug: "mg-zs-ev-vs-windsor-ev",

    car1: "MG ZS EV",
    image1: "/mg-zs-ev.jpg",

    car2: "MG Windsor EV",
    image2: "/windsor-ev.jpg",

    specs: [
      { feature: "Price", car1: "₹18.98 Lakh", car2: "₹14.00 Lakh" },
      { feature: "Range (ARAI)", car1: "461 km", car2: "449 km" },
      { feature: "Battery Pack", car1: "50.3 kWh", car2: "38 kWh" },
      { feature: "Power", car1: "176 bhp", car2: "134 bhp" },
      { feature: "Torque", car1: "280 Nm", car2: "200 Nm" },
      { feature: "Top Speed", car1: "175 km/h", car2: "160 km/h" },
      { feature: "DC Fast Charging", car1: "50 kW", car2: "45 kW" },
      { feature: "Boot Space", car1: "448 L", car2: "604 L" },
    ],

    winner: "MG ZS EV",

    verdict:
      "MG ZS EV offers more power and premium features, while Windsor EV provides excellent practicality and value.",
  },

  {
    slug: "mahindra-xev-9e-vs-be6",

    car1: "Mahindra XEV 9e",
    image1: "/xev-9e.jpg",

    car2: "Mahindra BE 6",
    image2: "/be6.jpg",

    specs: [
      { feature: "Price", car1: "₹21.90 Lakh", car2: "₹18.90 Lakh" },
      { feature: "Range (ARAI)", car1: "656 km", car2: "682 km" },
      { feature: "Battery Pack", car1: "79 kWh", car2: "79 kWh" },
      { feature: "Power", car1: "282 bhp", car2: "282 bhp" },
      { feature: "Torque", car1: "380 Nm", car2: "380 Nm" },
      { feature: "Top Speed", car1: "180 km/h", car2: "180 km/h" },
      { feature: "DC Fast Charging", car1: "175 kW", car2: "175 kW" },
      { feature: "ADAS", car1: "Level 2+", car2: "Level 2+" },
    ],

    winner: "Mahindra BE 6",

    verdict:
      "BE 6 delivers slightly better range and value, while XEV 9e focuses on luxury and a more premium cabin experience.",
  },
];
