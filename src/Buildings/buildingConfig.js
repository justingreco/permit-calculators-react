export const meansLocationFactor = 0.867;
export const minFee = 112;
export const techFee = 0.04;
export const feesMultipliers = {
    building: { commercial: 0, residential: 0.0032 },
    electrical: { commercial: 1, residential: 0.54 },
    mechanical: { commercial: 0.76, residential: 0.28 },
    plumbing: { commercial: 0.56, residential: 0.34 },
    planReview: { commercial: 0.56, residential: 0.57 }
};

export const tiers = [
    { tier: 1, min: 0, max: 500000, costper: 0.002, cumulative: 0 },
    { tier: 2, min: 500001.00, max: 10000000.00, costper: 0.0006, cumulative: 1000 },
    { tier: 3, min: 10000001.00, max: 999999999999999.00, costper: 0.0001, cumulative: 6900 }
];
export const constructionScopes = [{ name: 'New Construction', percent: 1 }, { name: 'Level 1 Alteration', percent: 0.25 }, { name: 'Level 2 Alteration', percent: 0.5 }, { name: 'Level 3 Alteration', percent: 0.75 }, { name: 'Addition', percent: 1 }]
export const buildingTypes = [{group: 'A-1 Assembly, theaters, with stage',
values: [{key: 'IA', value: 338.8756},
 {key: 'IB', value: 327.4626},
 {key: 'IIA', value: 319.756},
 {key: 'IIB', value: 307.6311},
 {key: 'IIIA', value: 289.4155},
 {key: 'IIIB', value: 280.4659},
 {key: 'IV', value: 298.2408},
 {key: 'VA', value: 268.3749},
 {key: 'VB', value: 259.8321}]},
{group: 'A-1 Assembly, theaters, without stage',
values: [{key: 'IA', value: 310.1171},
 {key: 'IB', value: 298.7041},
 {key: 'IIA', value: 290.9975},
 {key: 'IIB', value: 278.8726},
 {key: 'IIIA', value: 260.657},
 {key: 'IIIB', value: 251.7074},
 {key: 'IV', value: 269.4823},
 {key: 'VA', value: 239.6164},
 {key: 'VB', value: 231.0736}]},
{group: 'A-2 Assembly, nightclubs',
values: [{key: 'IA', value: 275.0878},
 {key: 'IB', value: 266.9258},
 {key: 'IIA', value: 259.3362},
 {key: 'IIB', value: 250.5382},
 {key: 'IIIA', value: 234.9562},
 {key: 'IIIB', value: 228.257},
 {key: 'IV', value: 241.5388},
 {key: 'VA', value: 213.5654},
 {key: 'VB', value: 206.6542}]},
{group: 'A-2 Assembly, restaurants, bars, banquet halls',
values: [{key: 'IA', value: 274.0878},
 {key: 'IB', value: 265.9258},
 {key: 'IIA', value: 257.3362},
 {key: 'IIB', value: 249.5382},
 {key: 'IIIA', value: 232.9562},
 {key: 'IIIB', value: 227.257},
 {key: 'IV', value: 240.5388},
 {key: 'VA', value: 211.5654},
 {key: 'VB', value: 205.6542}]},
{group: 'A-3 Assembly, churches',
values: [{key: 'IA', value: 314.6541},
 {key: 'IB', value: 303.2411},
 {key: 'IIA', value: 295.5345},
 {key: 'IIB', value: 283.4096},
 {key: 'IIIA', value: 265.646},
 {key: 'IIIB', value: 256.6964},
 {key: 'IV', value: 274.0193},
 {key: 'VA', value: 244.6054},
 {key: 'VB', value: 236.0626}]},
{group: 'A-3 Assembly, general, community halls, libraries, museums',
values: [{key: 'IA', value: 268.4371},
 {key: 'IB', value: 257.0241},
 {key: 'IIA', value: 248.3175},
 {key: 'IIB', value: 237.1926},
 {key: 'IIIA', value: 218.2595},
 {key: 'IIIB', value: 210.3099},
 {key: 'IV', value: 227.8023},
 {key: 'VA', value: 197.2189},
 {key: 'VB', value: 189.6761}]},
{group: 'A-4 Assembly, arenas',
values: [{key: 'IA', value: 309.1171},
 {key: 'IB', value: 297.7041},
 {key: 'IIA', value: 288.9975},
 {key: 'IIB', value: 277.8726},
 {key: 'IIIA', value: 258.657},
 {key: 'IIIB', value: 250.7074},
 {key: 'IV', value: 268.4823},
 {key: 'VA', value: 237.6164},
 {key: 'VB', value: 230.0736}]},
{group: 'B Business',
values: [{key: 'IA', value: 263.1592},
 {key: 'IB', value: 253.5132},
 {key: 'IIA', value: 244.1534},
 {key: 'IIB', value: 233.8502},
 {key: 'IIIA', value: 212.9964},
 {key: 'IIIB', value: 204.6472},
 {key: 'IV', value: 224.6706},
 {key: 'VA', value: 187.9804},
 {key: 'VB', value: 179.4934}]},
{group: 'E Educational',
values: [{key: 'IA', value: 280.4191},
 {key: 'IB', value: 270.8251},
 {key: 'IIA', value: 263.7034},
 {key: 'IIB', value: 252.3382},
 {key: 'IIIA', value: 235.5364},
 {key: 'IIIB', value: 223.6423},
 {key: 'IV', value: 243.6421},
 {key: 'VA', value: 205.8688},
 {key: 'VB', value: 199.4482}]},
{group: 'F-1 Factory and industrial, moderate hazard',
values: [{key: 'IA', value: 161.7033},
 {key: 'IB', value: 154.2133},
 {key: 'IIA', value: 144.6961},
 {key: 'IIB', value: 139.9395},
 {key: 'IIIA', value: 124.7192},
 {key: 'IIIB', value: 118.5074},
 {key: 'IV', value: 133.7228},
 {key: 'VA', value: 103.4048},
 {key: 'VB', value: 96.8292}]},
{group: 'F-2 Factory and industrial, low hazard',
values: [{key: 'IA', value: 160.7033},
 {key: 'IB', value: 153.2133},
 {key: 'IIA', value: 144.6961},
 {key: 'IIB', value: 138.9395},
 {key: 'IIIA', value: 124.7192},
 {key: 'IIIB', value: 117.5074},
 {key: 'IV', value: 132.7228},
 {key: 'VA', value: 103.4048},
 {key: 'VB', value: 95.8292}]},
{group: 'H-1 High Hazard, explosives',
values: [{key: 'IA', value: 150.8477},
 {key: 'IB', value: 143.3577},
 {key: 'IIA', value: 134.8405},
 {key: 'IIB', value: 129.0839},
 {key: 'IIIA', value: 115.1739},
 {key: 'IIIB', value: 107.9621},
 {key: 'IV', value: 122.8672},
 {key: 'VA', value: 93.8595},
 {key: 'VB', value: 0.0}]},
{group: 'H234 High Hazard',
values: [{key: 'IA', value: 150.8477},
 {key: 'IB', value: 143.3577},
 {key: 'IIA', value: 134.8405},
 {key: 'IIB', value: 129.0839},
 {key: 'IIIA', value: 115.1739},
 {key: 'IIIB', value: 107.9621},
 {key: 'IV', value: 122.8672},
 {key: 'VA', value: 93.8595},
 {key: 'VB', value: 86.2839}]},
{group: 'H-5 HPM',
values: [{key: 'IA', value: 263.1592},
 {key: 'IB', value: 253.5132},
 {key: 'IIA', value: 244.1534},
 {key: 'IIB', value: 233.8502},
 {key: 'IIIA', value: 212.9964},
 {key: 'IIIB', value: 204.6472},
 {key: 'IV', value: 224.6706},
 {key: 'VA', value: 187.9804},
 {key: 'VB', value: 179.4934}]},
{group: 'I-1 Institutional, supervised environment',
values: [{key: 'IA', value: 264.9282},
 {key: 'IB', value: 255.5677},
 {key: 'IIA', value: 246.8377},
 {key: 'IIB', value: 238.1077},
 {key: 'IIIA', value: 217.6407},
 {key: 'IIIB', value: 211.6267},
 {key: 'IV', value: 238.1465},
 {key: 'VA', value: 195.8157},
 {key: 'VB', value: 189.6659}]},
{group: 'I-2 Institutional, hospitals',
values: [{key: 'IA', value: 438.2642},
 {key: 'IB', value: 428.6182},
 {key: 'IIA', value: 419.2584},
 {key: 'IIB', value: 408.9552},
 {key: 'IIIA', value: 386.9814},
 {key: 'IIIB', value: 0.0},
 {key: 'IV', value: 399.7756},
 {key: 'VA', value: 361.9654},
 {key: 'VB', value: 0.0}]},
{group: 'I-2 Institutional, nursing homes',
values: [{key: 'IA', value: 304.8632},
 {key: 'IB', value: 295.2172},
 {key: 'IIA', value: 285.8574},
 {key: 'IIB', value: 275.5542},
 {key: 'IIIA', value: 256.2304},
 {key: 'IIIB', value: 0.0},
 {key: 'IV', value: 266.3746},
 {key: 'VA', value: 231.2144},
 {key: 'VB', value: 0.0}]},
{group: 'I-3 Institutional, restrained',
values: [{key: 'IA', value: 298.6692},
 {key: 'IB', value: 289.0232},
 {key: 'IIA', value: 279.6634},
 {key: 'IIB', value: 269.3602},
 {key: 'IIIA', value: 250.3014},
 {key: 'IIIB', value: 240.9522},
 {key: 'IV', value: 260.1806},
 {key: 'VA', value: 225.2854},
 {key: 'VB', value: 214.7984}]},
{group: 'I-4 Institutional, day care facilities',
values: [{key: 'IA', value: 264.9282},
 {key: 'IB', value: 255.5677},
 {key: 'IIA', value: 246.8377},
 {key: 'IIB', value: 238.1077},
 {key: 'IIIA', value: 217.6407},
 {key: 'IIIB', value: 211.6267},
 {key: 'IV', value: 238.1465},
 {key: 'VA', value: 195.8157},
 {key: 'VB', value: 189.6659}]},
{group: 'M Mercantile',
values: [{key: 'IA', value: 205.2196},
 {key: 'IB', value: 197.0576},
 {key: 'IIA', value: 188.468},
 {key: 'IIB', value: 180.67},
 {key: 'IIIA', value: 164.83},
 {key: 'IIIB', value: 159.1308},
 {key: 'IV', value: 171.6706},
 {key: 'VA', value: 143.4392},
 {key: 'VB', value: 137.528}]},
{group: 'R-1 Residential, hotels',
values: [{key: 'IA', value: 267.4202},
 {key: 'IB', value: 258.0597},
 {key: 'IIA', value: 249.3297},
 {key: 'IIB', value: 240.5997},
 {key: 'IIIA', value: 220.6177},
 {key: 'IIIB', value: 214.6037},
 {key: 'IV', value: 240.6385},
 {key: 'VA', value: 198.7927},
 {key: 'VB', value: 192.6429}]},
{group: 'R-2 Residential, multiple family',
values: [{key: 'IA', value: 223.6062},
 {key: 'IB', value: 214.2457},
 {key: 'IIA', value: 205.5157},
 {key: 'IIB', value: 196.7857},
 {key: 'IIIA', value: 177.7737},
 {key: 'IIIB', value: 171.7597},
 {key: 'IV', value: 196.8245},
 {key: 'VA', value: 155.9487},
 {key: 'VB', value: 149.7989}]},
{group: 'R-3 Residential, one- and two-family',
values: [{key: 'IA', value: 211.7682},
 {key: 'IB', value: 205.8392},
 {key: 'IIA', value: 200.9882},
 {key: 'IIB', value: 197.127},
 {key: 'IIIA', value: 190.3552},
 {key: 'IIIB', value: 183.3188},
 {key: 'IV', value: 193.746},
 {key: 'VA', value: 177.674},
 {key: 'VB', value: 167.3742}]},
{group: 'R-4 Residential, care/assisted living facilities',
values: [{key: 'IA', value: 264.9282},
 {key: 'IB', value: 255.5677},
 {key: 'IIA', value: 246.8377},
 {key: 'IIB', value: 238.1077},
 {key: 'IIIA', value: 217.6407},
 {key: 'IIIB', value: 211.6267},
 {key: 'IV', value: 238.1465},
 {key: 'VA', value: 195.8157},
 {key: 'VB', value: 189.6659}]},
{group: 'S-1 Storage, moderate hazard',
values: [{key: 'IA', value: 149.8477},
 {key: 'IB', value: 142.3577},
 {key: 'IIA', value: 132.8405},
 {key: 'IIB', value: 128.0839},
 {key: 'IIIA', value: 113.1739},
 {key: 'IIIB', value: 106.9621},
 {key: 'IV', value: 121.8672},
 {key: 'VA', value: 91.8595},
 {key: 'VB', value: 85.2839}]},
{group: 'S-2 Storage, low hazard',
values: [{key: 'IA', value: 148.8477},
 {key: 'IB', value: 141.3577},
 {key: 'IIA', value: 132.8405},
 {key: 'IIB', value: 127.0839},
 {key: 'IIIA', value: 113.1739},
 {key: 'IIIB', value: 105.9621},
 {key: 'IV', value: 120.8672},
 {key: 'VA', value: 91.8595},
 {key: 'VB', value: 84.2839}]},
{group: 'U Utility, miscellaneous',
values: [{key: 'IA', value: 115.4824},
 {key: 'IB', value: 108.9484},
 {key: 'IIA', value: 102.6443},
 {key: 'IIB', value: 98.131},
 {key: 'IIIA', value: 88.4873},
 {key: 'IIIB', value: 81.8928},
 {key: 'IV', value: 93.8597},
 {key: 'VA', value: 69.7565},
 {key: 'VB', value: 66.4774}]}]