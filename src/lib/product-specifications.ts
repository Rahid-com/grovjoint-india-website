
export type ProductSizeRow = {
  nominalSize: string;
  pipeOD: string;
  workingPressure: string;
  boltSize: string;
  pipeEndSeparation: string;
  maximumDeflection: string;
  pipeDeflectionInFt: string;
  pipeDeflectionMmM: string;
  dimensionO: string;
  dimensionL: string;
  dimensionH: string;
};

export type ProductSpecification = {
  model: string;
  availableSizes?: string[];
  features: string[];
  specifications: {
    label: string;
    value: string;
  }[];
  sizes: ProductSizeRow[];
};

export const productSpecifications: Record<string, ProductSpecification> = {

  // ==========================================
  // 1. FLEXIBLE COUPLING - GJFC12G
  // ==========================================

  GJFC12G: {
    model: 'GJFC12G',

    features: [
      'Ductile iron grooved flexible coupling designed for fire protection and other related grooved piping systems.',
      'Designed to accommodate angular movement and axial displacement.',
      'Provides protection in seismic events and helps reduce noise and vibration.',
      'EPDM rubber gaskets.',
      'Available with hot-dipped galvanised coating as an optional finish.'
    ],

    specifications: [
      { label: 'Product type', value: 'Flexible grooved coupling' },
      { label: 'Material', value: 'Ductile iron' },
      { label: 'Gasket material', value: 'EPDM' },
      { label: 'Maximum stated working pressure', value: 'Up to 500 PSI (3.45 MPa)' },
      { label: 'Application', value: 'Fire protection and related grooved piping systems' },
      { label: 'Movement', value: 'Angular movement and axial displacement' }
    ],

    sizes: [
      { nominalSize: ' 1 in', pipeOD: '33.7 mm / 1.327 in', workingPressure: '500 PSI / 3.45 MPa', boltSize: '2-M10×45', pipeEndSeparation: '0–0.06 in / 0–1.6 mm', maximumDeflection: '2°43′', pipeDeflectionInFt: '0.57', pipeDeflectionMmM: '48', dimensionO: '60 mm / 2.362 in', dimensionL: '98 mm / 3.858 in', dimensionH: '44 mm / 1.713 in' },
      { nominalSize: '32 mm / 1¼ in', pipeOD: '42.4  1.669 in', workingPressure: '500 PSI / 3.45 MPa', boltSize: '2-M10×45', pipeEndSeparation: '0–0.06 in / 0–1.6 mm', maximumDeflection: '2°10′', pipeDeflectionInFt: '0.45', pipeDeflectionMmM: '38', dimensionO: '67 mm / 2.638 in', dimensionL: '106 mm / 4.173 in', dimensionH: '44 mm / 1.732 in' },
      { nominalSize: '40 mm / 1½ in', pipeOD: '48.3 mm / 1.900 in', workingPressure: '500 PSI / 3.45 MPa', boltSize: '2-M10×45', pipeEndSeparation: '0–0.06 in / 0–1.6 mm', maximumDeflection: '1°56′', pipeDeflectionInFt: '0.40', pipeDeflectionMmM: '33', dimensionO: '73 mm / 2.874 in', dimensionL: '108 mm / 4.252 in', dimensionH: '44 mm / 1.732 in' },
      { nominalSize: '50 mm / 2 in', pipeOD: '60.3 mm / 2.375 in', workingPressure: '500 PSI / 3.45 MPa', boltSize: '2-M10×55', pipeEndSeparation: '0–0.06 in / 0–1.6 mm', maximumDeflection: '1°31′', pipeDeflectionInFt: '0.32', pipeDeflectionMmM: '27', dimensionO: '87 mm / 3.425 in', dimensionL: '123 mm / 4.843 in', dimensionH: '44 mm / 1.732 in' },
      { nominalSize: '65 mm / 2½ in', pipeOD: '73.0 mm / 2.875 in', workingPressure: '500 PSI / 3.45 MPa', boltSize: '2-M10×55', pipeEndSeparation: '0–0.06 in / 0–1.6 mm', maximumDeflection: '1°15′', pipeDeflectionInFt: '0.26', pipeDeflectionMmM: '22', dimensionO: '100 mm / 3.937 in', dimensionL: '138 mm / 5.433 in', dimensionH: '44 mm / 1.732 in' },
      { nominalSize: '65 mm / 2½ in', pipeOD: '76.1 mm / 3.000 in', workingPressure: '500 PSI / 3.45 MPa', boltSize: '2-M10×55', pipeEndSeparation: '0–0.06 in / 0–1.6 mm', maximumDeflection: '1°12′', pipeDeflectionInFt: '0.26', pipeDeflectionMmM: '22', dimensionO: '103 mm / 4.055 in', dimensionL: '142 mm / 5.591 in', dimensionH: '45 mm / 1.772 in' },
      { nominalSize: '80 mm / 3 in', pipeOD: '88.9 mm / 3.500 in', workingPressure: '500 PSI / 3.45 MPa', boltSize: '2-M12×60', pipeEndSeparation: '0–0.13 in / 0–3.2 mm', maximumDeflection: '1°2′', pipeDeflectionInFt: '0.22', pipeDeflectionMmM: '18', dimensionO: '117 mm / 4.606 in', dimensionL: '166 mm / 6.535 in', dimensionH: '45 mm / 1.772 in' },
      { nominalSize: '100 mm / 4 in', pipeOD: '114.3 mm / 4.500 in', workingPressure: '500 PSI / 3.45 MPa', boltSize: '2-M12×65', pipeEndSeparation: '0–0.13 in / 0–3.2 mm', maximumDeflection: '1°36′', pipeDeflectionInFt: '0.34', pipeDeflectionMmM: '28', dimensionO: '139 mm / 5.472 in', dimensionL: '190 mm / 7.480 in', dimensionH: '49 mm / 1.929 in' },
      { nominalSize: '125 mm / 5 in', pipeOD: '139.7 mm / 5.500 in', workingPressure: '400 PSI / 2.75 MPa', boltSize: '2-M12×75', pipeEndSeparation: '0–0.13 in / 0–3.2 mm', maximumDeflection: '1°18′', pipeDeflectionInFt: '0.28', pipeDeflectionMmM: '23', dimensionO: '168 mm / 6.614 in', dimensionL: '218 mm / 8.583 in', dimensionH: '49 mm / 1.929 in' },
      { nominalSize: '125 mm / 5 in', pipeOD: '139.7 mm / 5.500 in', workingPressure: '500 PSI / 3.45 MPa', boltSize: '2-M16×85', pipeEndSeparation: '0–0.13 in / 0–3.2 mm', maximumDeflection: '1°18′', pipeDeflectionInFt: '0.28', pipeDeflectionMmM: '23', dimensionO: '170 mm / 6.692 in', dimensionL: '233 mm / 9.173 in', dimensionH: '52 mm / 2.047 in' },
      { nominalSize: '125 mm / 5 in', pipeOD: '141.3 mm / 5.563 in', workingPressure: '400 PSI / 2.75 MPa', boltSize: '2-M12×75', pipeEndSeparation: '0–0.13 in / 0–3.2 mm', maximumDeflection: '1°18′', pipeDeflectionInFt: '0.27', pipeDeflectionMmM: '22', dimensionO: '167 mm / 6.575 in', dimensionL: '219 mm / 8.622 in', dimensionH: '49 mm / 1.929 in' },
      { nominalSize: '125 mm / 5 in', pipeOD: '141.3 mm / 5.563 in', workingPressure: '500 PSI / 3.45 MPa', boltSize: '2-M16×85', pipeEndSeparation: '0–0.13 in / 0–3.2 mm', maximumDeflection: '1°18′', pipeDeflectionInFt: '0.27', pipeDeflectionMmM: '22', dimensionO: '170 mm / 6.692 in', dimensionL: '235 mm / 9.251 in', dimensionH: '52 mm / 2.047 in' },
      { nominalSize: '150 mm / 6 in', pipeOD: '165.1 mm / 6.500 in', workingPressure: '400 PSI / 2.75 MPa', boltSize: '2-M12×75', pipeEndSeparation: '0–0.13 in / 0–3.2 mm', maximumDeflection: '1°6′', pipeDeflectionInFt: '0.23', pipeDeflectionMmM: '19', dimensionO: '193 mm / 7.598 in', dimensionL: '241 mm / 9.488 in', dimensionH: '49 mm / 1.929 in' },
      { nominalSize: '150 mm / 6 in', pipeOD: '165.1 mm / 6.500 in', workingPressure: '500 PSI / 3.45 MPa', boltSize: '2-M16×85', pipeEndSeparation: '0–0.13 in / 0–3.2 mm', maximumDeflection: '1°6′', pipeDeflectionInFt: '0.23', pipeDeflectionMmM: '19', dimensionO: '199 mm / 7.834 in', dimensionL: '256 mm / 10.078 in', dimensionH: '54 mm / 2.125 in' },
      { nominalSize: '150 mm / 6 in', pipeOD: '168.3 mm / 6.625 in', workingPressure: '400 PSI / 2.75 MPa', boltSize: '2-M12×75', pipeEndSeparation: '0–0.13 in / 0–3.2 mm', maximumDeflection: '1°5′', pipeDeflectionInFt: '0.23', pipeDeflectionMmM: '19', dimensionO: '198.5 mm / 7.815 in', dimensionL: '249 mm / 9.803 in', dimensionH: '50 mm / 1.969 in' },
      { nominalSize: '150 mm / 6 in', pipeOD: '168.3 mm / 6.625 in', workingPressure: '500 PSI / 3.45 MPa', boltSize: '2-M16×85', pipeEndSeparation: '0–0.13 in / 0–3.2 mm', maximumDeflection: '1°5′', pipeDeflectionInFt: '0.23', pipeDeflectionMmM: '19', dimensionO: '206 mm / 8.110 in', dimensionL: '263 mm / 10.354 in', dimensionH: '54 mm / 2.125 in' },
      { nominalSize: '200 mm / 8 in', pipeOD: '219.1 mm / 8.625 in', workingPressure: '400 PSI / 2.75 MPa', boltSize: '2-M16×85', pipeEndSeparation: '0–0.13 in / 0–3.2 mm', maximumDeflection: '0°50′', pipeDeflectionInFt: '0.18', pipeDeflectionMmM: '15', dimensionO: '253 mm / 9.961 in', dimensionL: '320 mm / 12.598 in', dimensionH: '59 mm / 2.323 in' },
      { nominalSize: '200 mm / 8 in', pipeOD: '219.1 mm / 8.625 in', workingPressure: '500 PSI / 3.45 MPa', boltSize: '2-M20×120', pipeEndSeparation: '0–0.13 in / 0–3.2 mm', maximumDeflection: '0°50′', pipeDeflectionInFt: '0.18', pipeDeflectionMmM: '15', dimensionO: '258 mm / 10.157 in', dimensionL: '336 mm / 13.228 in', dimensionH: '63 mm / 2.480 in' },
      { nominalSize: '250 mm / 10 in', pipeOD: '273 mm / 10.748 in', workingPressure: '300 PSI / 2.07 MPa', boltSize: '2-M22×130', pipeEndSeparation: '0–0.13 in / 0–3.2 mm', maximumDeflection: '0°40′', pipeDeflectionInFt: '0.28', pipeDeflectionMmM: '23', dimensionO: '317 mm / 12.48 in', dimensionL: '401 mm / 15.787 in', dimensionH: '63 mm / 2.48 in' },
      { nominalSize: '250 mm / 10 in', pipeOD: '273 mm / 10.748 in', workingPressure: '500 PSI / 3.45 MPa', boltSize: '2-M24×130', pipeEndSeparation: '0–0.13 in / 0–3.2 mm', maximumDeflection: '0°40′', pipeDeflectionInFt: '0.28', pipeDeflectionMmM: '23', dimensionO: '322 mm / 12.677 in', dimensionL: '410 mm / 16.141 in', dimensionH: '65 mm / 2.559 in' },
      { nominalSize: '300 mm / 12 in', pipeOD: '323.9 mm / 12.752 in', workingPressure: '300 PSI / 2.07 MPa', boltSize: '2-M22×130', pipeEndSeparation: '0–0.13 in / 0–3.2 mm', maximumDeflection: '0°34′', pipeDeflectionInFt: '0.24', pipeDeflectionMmM: '20', dimensionO: '375 mm / 14.764 in', dimensionL: '455 mm / 17.913 in', dimensionH: '64 mm / 2.52 in' },
      { nominalSize: '300 mm / 12 in', pipeOD: '323.9 mm / 12.752 in', workingPressure: '500 PSI / 3.45 MPa', boltSize: '2-M24×130', pipeEndSeparation: '0–0.13 in / 0–3.2 mm', maximumDeflection: '0°34′', pipeDeflectionInFt: '0.24', pipeDeflectionMmM: '20', dimensionO: '384 mm / 15.118 in', dimensionL: '472 mm / 18.582 in', dimensionH: '66 mm / 2.598 in' }
    ]
  },

  // ==========================================
  // 2. RIGID COUPLING - GJRC50G
  // Catalogue page 5
  // ==========================================

  GJRC50G: {
    model: 'GJRC50G',

    availableSizes: [
      "1'",
      "1¼'",
      "1½'",
      "2'",
      "2½'",
      "3'",
      "4'",
      "5'",
      "6'",
      "8'",
      "10'",
      "12'"
    ],

    features: [
      'Rigid grooved coupling designed for fire protection and other related grooved piping systems.',
      'Provides a restrained connection that combats various types of loads.',
      'Ductile iron housing conforming to ASTM A536.',
      'EPDM rubber gaskets.',
      'High-pressure ratings are available depending on nominal size.',
      'Hot-dipped galvanised coating is available as an optional finish.'
    ],

    specifications: [
      { label: 'Product type', value: 'Rigid grooved coupling' },
      { label: 'Housing material', value: 'Ductile iron – ASTM A536' },
      { label: 'Gasket material', value: 'EPDM' },
      { label: 'Working pressure', value: 'Varies by nominal size; refer to catalogue' },
      { label: 'Connection', value: 'Restrained grooved connection' },
      { label: 'Application', value: 'Fire protection and related grooved piping systems' }
    ],

    sizes: []
  },

  // ==========================================
  // 3. FLEXIBLE COUPLING LARGE SIZE - GJFC12L
  // Catalogue page 7
  // ==========================================

  GJFC12L: {
    model: 'GJFC12L',

    availableSizes: [
      "14'",
      "16'",
      "18'",
      "20'",
      "24'"
    ],

    features: [
      'Large-size ductile iron grooved flexible coupling.',
      'Designed for fire protection and other related grooved piping systems.',
      'Designed to withstand pressure applications at lighter weights.',
      'Accommodates angular movement and axial displacement.',
      'Provides protection in seismic events and reduces vibration.',
      'Ductile iron housing conforming to ASTM A536 with EPDM rubber gaskets.',
      'Hot-dipped galvanised coating is available as an optional finish.'
    ],

    specifications: [
      { label: 'Product type', value: 'Large-size flexible grooved coupling' },
      { label: 'Housing material', value: 'Ductile iron – ASTM A536' },
      { label: 'Gasket material', value: 'EPDM' },
      { label: 'Working pressure', value: 'Varies by nominal size; refer to catalogue' },
      { label: 'Connection', value: 'Flexible grooved connection' },
      { label: 'Application', value: 'Fire protection and related grooved piping systems' }
    ],

    sizes: []
  },

  // ==========================================
  // 4. RIGID COUPLING LARGE SIZE - GJRC50L
  // Catalogue page 7
  // ==========================================

  GJRC50L: {
    model: 'GJRC50L',

    availableSizes: [
      "14'",
      "16'",
      "18'",
      "20'",
      "24'"
    ],

    features: [
      'Large-size rigid grooved coupling designed for internal pressure applications.',
      'Designed for fire protection and other related grooved piping systems.',
      'Provides a restrained connection that combats various types of loads.',
      'Ductile iron housing conforming to ASTM A536.',
      'EPDM rubber gaskets.',
      'Hot-dipped galvanised coating is available as an optional finish.'
    ],

    specifications: [
      { label: 'Product type', value: 'Large-size rigid grooved coupling' },
      { label: 'Housing material', value: 'Ductile iron – ASTM A536' },
      { label: 'Gasket material', value: 'EPDM' },
      { label: 'Working pressure', value: 'Varies by nominal size; refer to catalogue' },
      { label: 'Connection', value: 'Restrained grooved connection' },
      { label: 'Application', value: 'Fire protection and related grooved piping systems' }
    ],

    sizes: []
  },

  // ==========================================
  // 5. FLEXIBLE COUPLING HEAVY - GJFC11G
  // Catalogue page 8
  // ==========================================

  GJFC11G: {
    model: 'GJFC11G',

    availableSizes: [
      "2'",
      "3'",
      "4'",
      "6'",
      "8'",
      "10'",
      "12'"
    ],

    features: [
      'Heavy-duty ductile iron grooved flexible coupling.',
      'Designed for fire protection and other related grooved piping systems.',
      'Designed to accommodate angular movement and axial displacement.',
      'Provides protection in seismic events and helps reduce vibration.',
      'Ductile iron housing conforming to ASTM A536.',
      'EPDM rubber gaskets with working pressure ratings depending on size.'
    ],

    specifications: [
      { label: 'Product type', value: 'Heavy-duty flexible grooved coupling' },
      { label: 'Housing material', value: 'Ductile iron – ASTM A536' },
      { label: 'Gasket material', value: 'EPDM' },
      { label: 'Working pressure', value: 'Varies by nominal size; refer to catalogue' },
      { label: 'Connection', value: 'Flexible grooved connection' },
      { label: 'Application', value: 'Fire protection and related grooved piping systems' }
    ],

    sizes: []
  },
  
  // ==========================================
  // 6. GROOVED REDUCING COUPLING - GJRC25G
  // Catalogue page 9
  // ==========================================

  GJRC25G: {
    model: 'GJRC25G',
    availableSizes: [
      "2' x 1½'",
      "2½' x 1½'",
      "2½' x 2'",
      "2½' x 1½' (76.1 mm pipe)",
      "3' x 1½'",
      "3' x 2'",
      "3' x 2½'",
      "3' x 2½' (76.1 mm pipe)",
      "4' x 1½'",
      "4' x 2'",
      "4' x 2½'",
      "4' x 2½' (76.1 mm pipe)",
      "4' x 3'",
      "6' x 4'",
      "6' x 3'",
      "6' x 4' (168.3 mm pipe)",
      "8' x 6'"
    ],
    features: [
      'Designed to reduce pipe diameters without requiring concentric reducers and additional couplings.',
      'Rubber gasket and steel plate help prevent telescoping of the smaller pipe towards the larger pipe in vertical assembly.',
      'Accommodates angular movement and axial displacement.',
      'Provides protection from seismic events and helps reduce vibration and noise.',
      'Ductile iron housing conforming to ASTM A536.',
      'EPDM rubber gaskets.',
      'Hot-dipped galvanised coating is available as an optional finish.'
    ],
    specifications: [
      { label: 'Product type', value: 'Grooved reducing coupling' },
      { label: 'Housing material', value: 'Ductile iron – ASTM A536' },
      { label: 'Gasket material', value: 'EPDM' },
      { label: 'Working pressure', value: '300 PSI / 2.07 MPa' },
      { label: 'Connection', value: 'Reducing grooved connection' },
      { label: 'Application', value: 'Fire protection and related grooved piping systems' }
    ],
    sizes: []
  },

  // ==========================================
  // 7. ONE-BOLT PUSH-ON COUPLING - GJPLC10
  // Catalogue page 10
  // ==========================================

  GJPLC10: {
    model: 'GJPLC10',
    availableSizes: [
      "1'",
      "1¼'",
      "1½'",
      "2'",
      "2½'",
      "3'",
      "4'",
      "5'",
      "6'"
    ],
    features: [
      'Designed for severe internal pressure applications in fire protection and related grooved piping systems.',
      'Provides a restrained connection that combats various types of loads.',
      'Ductile iron housing conforming to ASTM A536.',
      'EPDM rubber gaskets.',
      'Features high-pressure ratings depending on nominal size.',
      'Hot-dipped galvanised coating is available as an optional finish.'
    ],
    specifications: [
      { label: 'Product type', value: 'One-bolt push-on coupling' },
      { label: 'Housing material', value: 'Ductile iron – ASTM A536' },
      { label: 'Gasket material', value: 'EPDM' },
      { label: 'Working pressure', value: 'Varies by size: 365–450 PSI in catalogue' },
      { label: 'Connection', value: 'One-bolt push-on connection' },
      { label: 'Application', value: 'Fire protection and related grooved piping systems' }
    ],
    sizes: []
  },

  // ==========================================
  // 8. QUICK-LOCK RIGID COUPLING - GJQRC19
  // Catalogue page 11
  // ==========================================

  GJQRC19: {
    model: 'GJQRC19',
    availableSizes: [
      "1'",
      "1¼'",
      "1½'",
      "2'",
      "2½'",
      "3'",
      "4'",
      "5'",
      "6'",
      "8'",
      "10'",
      "12'"
    ],
    features: [
      'Designed for severe internal pressure applications in fire protection and related grooved piping systems.',
      'Provides a restrained connection that combats various types of loads.',
      'Ductile iron housing conforming to ASTM A536.',
      'EPDM rubber gaskets.',
      'Features high-pressure ratings.',
      'Hot-dipped galvanised coating is available as an optional finish.'
    ],
    specifications: [
      { label: 'Product type', value: 'Quick-lock rigid coupling' },
      { label: 'Housing material', value: 'Ductile iron – ASTM A536' },
      { label: 'Gasket material', value: 'EPDM' },
      { label: 'Working pressure', value: '300 PSI / 2.07 MPa' },
      { label: 'Connection', value: 'Rigid grooved connection' },
      { label: 'Application', value: 'Fire protection and related grooved piping systems' }
    ],
    sizes: []
  },

  // ==========================================
  // 9. QUICK-LOCK FLEXIBLE COUPLING - GJQFC29
  // Catalogue page 12
  // ==========================================

  GJQFC29: {
    model: 'GJQFC29',
    availableSizes: [
      "1'",
      "1¼'",
      "1½'",
      "2'",
      "2½'",
      "3'",
      "4'",
      "5'",
      "6'",
      "8'",
      "10'",
      "12'"
    ],
    features: [
      'Designed for severe internal pressure applications in fire protection and related grooved piping systems.',
      'Provides a restrained connection that combats various types of loads.',
      'Ductile iron housing conforming to ASTM A536.',
      'EPDM rubber gaskets.',
      'Features high-pressure ratings.',
      'Hot-dipped galvanised coating is available as an optional finish.'
    ],
    specifications: [
      { label: 'Product type', value: 'Quick-lock flexible coupling' },
      { label: 'Housing material', value: 'Ductile iron – ASTM A536' },
      { label: 'Gasket material', value: 'EPDM' },
      { label: 'Working pressure', value: '300 PSI / 2.07 MPa' },
      { label: 'Connection', value: 'Flexible grooved connection' },
      { label: 'Application', value: 'Fire protection and related grooved piping systems' }
    ],
    sizes: []
  },

  // ==========================================
  // 10. ANGLE PAD COUPLING - GJRC10A
  // Catalogue page 13
  // ==========================================

  GJRC10A: {
    model: 'GJRC10A',
    availableSizes: [
      "1'",
      "1¼'",
      "1½'",
      "2'",
      "2½'",
      "3'",
      "4'",
      "5'",
      "6'",
      "8'",
      "10'",
      "12'"
    ],
    features: [
      'Designed for severe internal pressure applications in fire protection and related grooved piping systems.',
      'Provides a restrained connection that combats various types of loads.',
      'Ductile iron housing conforming to ASTM A536.',
      'EPDM rubber gaskets.',
      'Features high-pressure ratings.',
      'Hot-dipped galvanised coating is available as an optional finish.'
    ],
    specifications: [
      { label: 'Product type', value: 'Angle pad coupling' },
      { label: 'Housing material', value: 'Ductile iron – ASTM A536' },
      { label: 'Gasket material', value: 'EPDM' },
      { label: 'Working pressure', value: '300 PSI / 2.07 MPa' },
      { label: 'Connection', value: 'Angle pad grooved connection' },
      { label: 'Application', value: 'Fire protection and related grooved piping systems' }
    ],
    sizes: []
  },

  // ==========================================
  // 11. GROOVED ELBOW 90 DEG LONG - GJ1090L
  // Catalogue page 14
  // ==========================================

  GJ1090L: {
    model: 'GJ1090L',
    availableSizes: [
      "1'",
      "1¼'",
      "1½'",
      "2'",
      "2½'",
      "3'",
      "4'",
      "5'",
      "6'",
      "8'",
      "10'",
      "12'",
      "14'"
    ],
    features: [
      '90-degree long elbow designed for directional changes in grooved piping systems.',
      'Long-radius configuration for pipe routing applications.',
      'Designed for fire protection and related grooved piping systems, as well as general services.',
      'Ductile iron housing conforming to ASTM A536.',
      'Grooving dimensions conform to AWWA C606.',
      'Hot-dipped galvanised coating is available as an optional finish.'
    ],
    specifications: [
      { label: 'Product type', value: '90-degree long grooved elbow' },
      { label: 'Material', value: 'Ductile iron – ASTM A536' },
      { label: 'Grooving standard', value: 'AWWA C606' },
      { label: 'Working pressure', value: 'Varies by nominal size; refer to catalogue (up to 500 PSI)' },
      { label: 'Connection', value: 'Grooved ends' },
      { label: 'Application', value: 'Fire protection and related grooved piping systems' }
    ],
    sizes: []
  },

  // ==========================================
  // 12. GROOVED ELBOW 90 DEG SHORT - GJ1590S
  // Catalogue page 15
  // ==========================================

  GJ1590S: {
    model: 'GJ1590S',
    availableSizes: [
      "1'",
      "1¼'",
      "1½'",
      "2'",
      "2½'",
      "3'",
      "4'",
      "5'",
      "6'",
      "8'",
      "10'",
      "12'",
      "14'"
    ],
    features: [
      '90-degree short elbow designed to provide uniform flow and minimal pressure drop.',
      'Short-radius configuration for compact pipe installations.',
      'Designed for fire protection and related grooved piping systems, as well as general services.',
      'Ductile iron housing conforming to ASTM A536.',
      'Grooving dimensions conform to AWWA C606.',
      'Hot-dipped galvanised coating is available as an optional finish.'
    ],
    specifications: [
      { label: 'Product type', value: '90-degree short grooved elbow' },
      { label: 'Material', value: 'Ductile iron – ASTM A536' },
      { label: 'Grooving standard', value: 'AWWA C606' },
      { label: 'Working pressure', value: 'Varies by nominal size; refer to catalogue (up to 500 PSI)' },
      { label: 'Connection', value: 'Grooved ends' },
      { label: 'Application', value: 'Fire protection and related grooved piping systems' }
    ],
    sizes: []
  },

  // ==========================================
  // 13. GROOVED ELBOW 45 DEG - GJ1645S
  // Catalogue page 16
  // ==========================================

  GJ1645S: {
    model: 'GJ1645S',
    availableSizes: [
      "1'",
      "1¼'",
      "1½'",
      "2'",
      "2½'",
      "3'",
      "4'",
      "5'",
      "6'",
      "8'",
      "10'",
      "12'"
    ],
    features: [
      '45-degree elbow with short centre-to-end dimensions for easier installation in less space.',
      'Designed for directional changes in grooved piping systems.',
      'Designed for fire protection and related grooved piping systems, as well as general services.',
      'Ductile iron housing conforming to ASTM A536.',
      'Grooving dimensions conform to AWWA C606.',
      'Hot-dipped galvanised coating is available as an optional finish.'
    ],
    specifications: [
      { label: 'Product type', value: '45-degree grooved elbow' },
      { label: 'Material', value: 'Ductile iron – ASTM A536' },
      { label: 'Grooving standard', value: 'AWWA C606' },
      { label: 'Working pressure', value: 'Varies by nominal size; refer to catalogue (up to 500 PSI)' },
      { label: 'Connection', value: 'Grooved ends' },
      { label: 'Application', value: 'Fire protection and related grooved piping systems' }
    ],
    sizes: []
  },

  // ==========================================
  // 14. GROOVED ELBOW 22.5 DEG - GJ1222R
  // Catalogue page 17
  // ==========================================

  GJ1222R: {
    model: 'GJ1222R',
    availableSizes: [
      "1'",
      "1¼'",
      "1½'",
      "2'",
      "2½'",
      "3'",
      "4'",
      "5'",
      "6'",
      "8'",
      "10'",
      "12'"
    ],
    features: [
      '22.5-degree elbow with short centre-to-end dimensions for easier installation in less space.',
      'Designed for gradual directional changes in grooved piping systems.',
      'Designed for fire protection and related grooved piping systems, as well as general services.',
      'Ductile iron housing conforming to ASTM A536.',
      'Grooving dimensions conform to AWWA C606.',
      'Hot-dipped galvanised coating is available as an optional finish.'
    ],
    specifications: [
      { label: 'Product type', value: '22.5-degree grooved elbow' },
      { label: 'Material', value: 'Ductile iron – ASTM A536' },
      { label: 'Grooving standard', value: 'AWWA C606' },
      { label: 'Working pressure', value: 'Varies by nominal size; refer to catalogue (up to 500 PSI)' },
      { label: 'Connection', value: 'Grooved ends' },
      { label: 'Application', value: 'Fire protection and related grooved piping systems' }
    ],
    sizes: []
  },

  // ==========================================
  // 15. GROOVED ELBOW 11.25 DEG - GJ1311R
  // Catalogue page 18
  // ==========================================

  GJ1311R: {
    model: 'GJ1311R',
    availableSizes: [
      "1'",
      "1¼'",
      "1½'",
      "2'",
      "2½'",
      "3'",
      "4'",
      "5'",
      "6'",
      "8'",
      "10'",
      "12'"
    ],
    features: [
      '11.25-degree elbow with short centre-to-end dimensions for easier installation in less space.',
      'Designed for gradual directional changes in grooved piping systems.',
      'Designed for fire protection and related grooved piping systems, as well as general services.',
      'Ductile iron housing conforming to ASTM A536.',
      'Grooving dimensions conform to AWWA C606.',
      'Hot-dipped galvanised coating is available as an optional finish.'
    ],
    specifications: [
      { label: 'Product type', value: '11.25-degree grooved elbow' },
      { label: 'Material', value: 'Ductile iron – ASTM A536' },
      { label: 'Grooving standard', value: 'AWWA C606' },
      { label: 'Working pressure', value: 'Varies by nominal size; refer to catalogue (up to 500 PSI)' },
      { label: 'Connection', value: 'Grooved ends' },
      { label: 'Application', value: 'Fire protection and related grooved piping systems' }
    ],
    sizes: []
  },

  // ==========================================
  // 16. GROOVED EQUAL TEE LONG RADIUS - GJET11L
  // Catalogue page 19
  // ==========================================

  GJET11L: {
    model: 'GJET11L',
    availableSizes: [
      "1'", "1¼'", "1½'", "2'",
      "2½'", "3'", "4'", "5'",
      "6'", "8'", "10'", "12'"
    ],
    features: [
      'Designed to join two pipes of equal diameter perpendicular to the direction of flow.',
      'Provides minimal pressure drop.',
      'Suitable for fire protection and related grooved piping systems, as well as general services.',
      'Ductile iron housing conforming to ASTM A536.',
      'Grooving dimensions conform to AWWA C606.',
      'Hot-dipped galvanised coating is available as an optional finish.'
    ],
    specifications: [
      { label: 'Product type', value: 'Grooved equal tee – long radius' },
      { label: 'Material', value: 'Ductile iron – ASTM A536' },
      { label: 'Grooving standard', value: 'AWWA C606' },
      { label: 'Working pressure', value: 'Varies by nominal size; refer to catalogue' },
      { label: 'Connection', value: 'Grooved ends' },
      { label: 'Application', value: 'Fire protection and related grooved piping systems' }
    ],
    sizes: []
  },

  // ==========================================
  // 17. EQUAL TEE SHORT RADIUS - GJET17S
  // Catalogue page 20
  // ==========================================

  GJET17S: {
    model: 'GJET17S',
    availableSizes: [
      "1'", "1¼'", "1½'", "2'",
      "2½'", "3'", "4'", "5'",
      "6'", "8'", "10'", "12'"
    ],
    features: [
      'Designed to join two pipes of equal diameter perpendicular to the direction of flow.',
      'Provides minimal pressure drop.',
      'Suitable for fire protection and related grooved piping systems, as well as general services.',
      'Ductile iron housing conforming to ASTM A536.',
      'Grooving dimensions conform to AWWA C606.',
      'Hot-dipped galvanised coating is available as an optional finish.'
    ],
    specifications: [
      { label: 'Product type', value: 'Equal tee – short radius' },
      { label: 'Material', value: 'Ductile iron – ASTM A536' },
      { label: 'Grooving standard', value: 'AWWA C606' },
      { label: 'Working pressure', value: 'Varies by nominal size; refer to catalogue' },
      { label: 'Connection', value: 'Grooved ends' },
      { label: 'Application', value: 'Fire protection and related grooved piping systems' }
    ],
    sizes: []
  },

  // ==========================================
  // 18. GROOVED CROSS TEE - GJXT35G
  // Catalogue page 21
  // ==========================================

  GJXT35G: {
    model: 'GJXT35G',
    availableSizes: [
      "2'",
      "2½'",
      "3'",
      "4'",
      "5'",
      "6'",
      "8'",
      "10'"
    ],
    features: [
      'Designed to join four pipes in a cross configuration.',
      'Provides minimal pressure drop.',
      'Suitable for fire protection and related grooved piping systems, as well as general services.',
      'Ductile iron housing conforming to ASTM A536.',
      'Hot-dipped galvanised coating is available as an optional finish.'
    ],
    specifications: [
      { label: 'Product type', value: 'Grooved cross tee' },
      { label: 'Material', value: 'Ductile iron – ASTM A536' },
      { label: 'Working pressure', value: 'Varies by nominal size; refer to catalogue' },
      { label: 'Connection', value: 'Grooved ends' },
      { label: 'Configuration', value: 'Four-way pipe connection' },
      { label: 'Application', value: 'Fire protection and related grooved piping systems' }
    ],
    sizes: []
  },

  // ==========================================
  // 19. U-BOLT MECHANICAL TEE THREADED - GJMT13U
  // Catalogue page 22
  // ==========================================

  GJMT13U: {
    model: 'GJMT13U',
    availableSizes: [
      "1' x ½'",
      "1' x ¾'",
      "1¼' x ½'",
      "1¼' x ¾'",
      "1¼' x 1'",
      "1½' x ½'",
      "1½' x ¾'",
      "1½' x 1'",
      "2' x ½'",
      "2' x ¾'",
      "2' x 1'",
      "2½' x ½'",
      "2½' x ¾'",
      "2½' x 1'",
      "2½' x 1¼'",
      "3' x ½'",
      "3' x ¾'",
      "3' x 1'",
      "3' x 1¼'"
    ],
    features: [
      'Mechanical tee eliminates the need for welding or cutting of the pipe mains for branch outlets.',
      'Designed with a U-bolt fastening arrangement.',
      'Ductile iron housing conforming to ASTM A536.',
      'EPDM rubber gaskets.',
      'Suitable for fire protection and related grooved piping systems.',
      'Hot-dipped galvanised coating is available as an optional finish.'
    ],
    specifications: [
      { label: 'Product type', value: 'U-bolt mechanical tee – threaded' },
      { label: 'Material', value: 'Ductile iron – ASTM A536' },
      { label: 'Gasket material', value: 'EPDM' },
      { label: 'Working pressure', value: 'Varies by size; refer to catalogue' },
      { label: 'Branch connection', value: 'Threaded outlet' },
      { label: 'Application', value: 'Mechanical branch connections in grooved piping systems' }
    ],
    sizes: []
  },

  // ==========================================
  // 20. MECHANICAL TEE GROOVED ENDS - GJMT15G
  // Catalogue page 23
  // ==========================================

  GJMT15G: {
    model: 'GJMT15G',
    availableSizes: [
      "2' x 1½'",
      "2' x 1'",
      "2½' x 1'",
      "2½' x 1¼'",
      "3' x 1'",
      "3' x 1¼'",
      "3' x 1½'",
      "4' x 1'",
      "4' x 1¼'",
      "4' x 1½'",
      "4' x 2'",
      "5' x 1'",
      "5' x 1¼'",
      "5' x 1½'",
      "5' x 2'",
      "5' x 3'",
      "6' x 1½'",
      "6' x 2'",
      "6' x 2½'",
      "8' x 2'",
      "8' x 3'",
      "10' x 2'",
      "10' x 3'",
      "10' x 6'"
    ],
    features: [
      'Mechanical tees provide a fast and simple way to provide a grooved connection along the pipe.',
      'Provides quick and economical connection of smaller branch pipes with cross mains or riser pipes.',
      'After the hole is drilled in the pipe, connect the outlet and clamp around the pipe for a grooved connection.',
      'Eliminates the need for welding and multiple fittings.',
      'Ductile iron housing conforming to ASTM A536.',
      'EPDM rubber gaskets.'
    ],
    specifications: [
      { label: 'Product type', value: 'Mechanical tee – grooved ends' },
      { label: 'Material', value: 'Ductile iron – ASTM A536' },
      { label: 'Gasket material', value: 'EPDM' },
      { label: 'Working pressure', value: 'Varies by size; refer to catalogue' },
      { label: 'Branch connection', value: 'Grooved outlet' },
      { label: 'Application', value: 'Mechanical branch connections in grooved piping systems' }
    ],
    sizes: []
  },
  // =========================================
  // BATCH 5 – MECHANICAL TEES, REDUCERS & REDUCING TEES
  // =========================================

 
  GJMT16T: {
    model: 'GJMT16T',
    availableSizes: [
      "1½' x 1'",
      "2' x ½'",
      "2' x ¾'",
      "2' x 1'",
      "2' x 1¼'",
      "2' x 1½'",
      "2½' x ¾'",
      "2½' x 1'",
      "2½' x 1¼'",
      "2½' x 1½'",
      "2½' x 2'",
      "3' x ½'",
      "3' x ¾'",
      "3' x 1'",
      "3' x 1¼'",
      "3' x 1½'",
      "3' x 2'",
      "4' x 1'",
      "4' x 1¼'",
      "4' x 1½'",
      "4' x 2'",
      "4' x 2½'",
      "5' x 1'",
      "5' x 1¼'",
      "5' x 1½'",
      "5' x 2'",
      "5' x 2½'",
       "6' x 1½'",
      "6' x 2'",
      "6' x 2½'",
      "8' x 2'",
      "8' x 3'",
      "10' x 2'",
      "10' x 3'",
      "10' x 4'"
    ],
    features: [
      'Mechanical tees provide a fast and simple way to create a grooved branch connection along the pipe.',
      'Provides quick and economical connections for smaller branch pipes.',
      'Installation requires drilling a hole in the pipe and securing the clamps around it.',
      'Eliminates the need for welding and multiple fittings.',
      'Ductile iron housing conforming to ASTM A536.',
      'EPDM rubber gaskets.',
      'Hot-dipped galvanised coating is available as an optional finish.'
    ],
    specifications: [
      { label: 'Product type', value: 'Mechanical tee – threaded ends' },
      { label: 'Housing material', value: 'Ductile iron – ASTM A536' },
      { label: 'Gasket material', value: 'EPDM' },
      { label: 'Working pressure', value: 'Up to 500 PSI; varies by size' },
      { label: 'Connection', value: 'Threaded branch connection' },
      { label: 'Application', value: 'Grooved piping branch connections' }
    ],
    sizes: []
  },

  GJRC40G: {
    model: 'GJRC40G',
    availableSizes: [
      "1¼' x 1'",
      "1½' x 1'",
      "1½' x 1¼'",
      "2' x 1'",
      "2' x 1¼'",
      "2' x 1½'",
      "2½' x 1'",
      "2½' x 1¼'",
      "2½' x 1½'",
      "2½' x 2'",
      "3' x 1¼'",
      "3' x 1½'",
      "3' x 2'",
      "3' x 2½'",
      "4' x 2'",
      "4' x 2½'",
      "4' x 3'",
      "5' x 2'",
      "5' x 2½'",
      "5' x 3'",
"5' x 4'",
"6' x 2'",
"6' x 2½'",
"6' x 3'",
"6' x 4'",
"6' x 5'",
"6' x 2'",
"6' x 2½'",
"6' x 2½'",
"6' x 3'",
"6' x 4'",
"6' x 5'",
"8' x 6'",
"8' x 2'",
"8' x 2½'",
"8' x 2½'",
"8' x 3'",
"8' x 4'",
"8' x 5'",
"8' x 6'",
"8' x 6'",
"10' x 4'",
"10' x 6'",
"10' x 6'",
"10' x 8'",
"12' x 6'",
"12' x 6'",
"12' x 8'",
"12' x 10'"
    ],
    features: [
      'Concentric reducer designed for short centre-to-end dimensions.',
      'Helps simplify installation in grooved piping systems.',
      'Primarily used for fire protection and related grooved piping applications.',
      'Ductile iron housing conforming to ASTM A536.',
      'Grooving standard conforms to AWWA C606.',
      'Hot-dipped galvanised coating is available as an optional finish.'
    ],
    specifications: [
      { label: 'Product type', value: 'Grooved concentric reducer' },
      { label: 'Housing material', value: 'Ductile iron – ASTM A536' },
      { label: 'Grooving standard', value: 'AWWA C606' },
      { label: 'Working pressure', value: 'Up to 500 PSI; refer to size-specific catalogue data' },
      { label: 'Connection', value: 'Grooved ends' },
      { label: 'Application', value: 'Fire protection and general piping services' }
    ],
    sizes: []
  },

  GJRC40T: {
    model: 'GJRC40T',
    availableSizes: [
      "1½' x 1'",
      "2' x 1'",
      "2' x 1¼'",
      "2' x 1½'",
      "2½' x 1'",
      "2½' x 1¼'",
      "2½' x 1½'",
      "2½' x 2'",
      "3' x 1¼'",
      "3' x 1½'",
      "3' x 2'",
      "3' x 2½'",
      "4' x 1'",
      "4' x 1¼'",
      "4' x 1½'",
      "4' x 2'",
      "4' x 2½'",
      "4' x 3'",
      "5' x 1'",
      "5' x 1¼'",
"5' x 1¾'",
"5' x 2'",
"5' x 2½'",
"5' x 3'",
"5' x 4'",
"6' x 1'",
"6' x 1¼'",
"6' x 1¾'",
"6' x 2'",
"6' x 2½'",
"6' x 3'",
"6' x 4'",
"6' x 1'",
"6' x 2'",
"6' x 2½'",
"6' x 3'",
"8' x 2'",
"8' x 2½'",
"8' x 3'",
    ],
    features: [
      'Concentric reducer designed for short centre-to-end dimensions.',
      'Helps simplify installation in grooved piping systems.',
      'Primarily used for fire protection and related grooved piping applications.',
      'Ductile iron housing conforming to ASTM A536.',
      'Grooving standard conforms to AWWA C606.',
      'Hot-dipped galvanised coating is available as an optional finish.'
    ],
    specifications: [
      { label: 'Product type', value: 'Grooved concentric reducer – threaded ends' },
      { label: 'Housing material', value: 'Ductile iron – ASTM A536' },
      { label: 'Grooving standard', value: 'AWWA C606' },
      { label: 'Working pressure', value: 'Up to 500 PSI; refer to size-specific catalogue data' },
      { label: 'Connection', value: 'Threaded end configuration' },
      { label: 'Application', value: 'Fire protection and general piping services' }
    ],
    sizes: []
  },

  GJRT15G: {
    model: 'GJRT15G',
    availableSizes: [
      "1½' x 1¼'",
      "2' x 1¼'",
      "2' x 1½'",
      "2½' x 1'",
      "2½' x 1¼'",
      "2½' x 1½'",
      "2½' x 2'",
      "3' x 1'",
      "3' x 1¼'",
      "3' x 1½'",
      "3' x 2'",
      "3' x 2½'",
      "4' x 2'",
      "4' x 2½'",
      "4' x 3'",
      "5' x 2'",
      "5' x 2½'",
      "5' x 3'",
      "5' x 4'",
      "6' x 2'",
      "6' x 2½'",
"6' x 3'",
"6' x 4'",
"6' x 1½'",
"6' x 2'",
"6' x 2½'",
"6' x 2½'",
"6' x 3'",
"6' x 4'",
"6' x 5'",
"8' x 2'",
"8' x 2½'",
"8' x 2½'",
"8' x 3'",
"8' x 4'",
"8' x 5'",
"8' x 6'",
"8' x 6'",
"10' x 4'",
"10' x 5'",
"10' x 6'",
"10' x 8'",
"12' x 4'",
"12' x 6'",
"12' x 8'",
"12' x 10'",
"3' x 4'",
"3' x 6'",
"4' x 6'",

    ],
    features: [
      'Designed to join pipes of different diameters perpendicular to the direction of flow.',
      'Provides minimum pressure drop.',
      'Primarily designed for fire protection and related grooved piping applications.',
      'Ductile iron housing conforming to ASTM A536.',
      'Grooving standard conforms to AWWA C606.',
      'Short centre-to-end dimensions help simplify installation.',
      'Hot-dipped galvanised coating is available as an optional finish.'
    ],
    specifications: [
      { label: 'Product type', value: 'Grooved reducing tee' },
      { label: 'Housing material', value: 'Ductile iron – ASTM A536' },
      { label: 'Grooving standard', value: 'AWWA C606' },
      { label: 'Working pressure', value: 'Up to 500 PSI; varies by size' },
      { label: 'Connection', value: 'Grooved ends' },
      { label: 'Application', value: 'Fire protection and general piping services' }
    ],
    sizes: []
  },

  GJRT15T: {
    model: 'GJRT15T',
    availableSizes: [
      "1¼' x 1'",
      "1½' x 1'",
      "1½' x 1¼'",
      "2' x 1'",
      "2' x 1¼'",
      "2' x 1½'",
      "2½' x 1'",
      "2½' x 1¼'",
      "2½' x 1½'",
      "2½' x 2'",
      "3' x 1'",
      "3' x 1¼'",
      "3' x 1½'",
      "3' x 2'",
      "3' x 2½'",
      "4' x 1'",
      "4' x 1¼'",
      "4' x 1'",
"4' x 2'",
"4' x 2½'",
"4' x 2½'",
"4' x 3'",
"5' x 1'",
"5' x 1¼'",
"5' x 1½'",
"5' x 2'",
"5' x 2½'",
"5' x 3'",
"6' x 1'",
"6' x 1¼'",
"6' x 1½'",
"6' x 2'",
"6' x 2½'",
"6' x 3'",
"6' x 4'",
"6' x 1¼'",
"6' x 1½'",
"6' x 2'",
"6' x 2½'",
"6' x 3'",
"8' x 3'",
"8' x 4'",
    ],
    features: [
      'Designed to join pipes of different diameters perpendicular to the direction of flow.',
      'Provides minimum pressure drop.',
      'Primarily designed for fire protection and related grooved piping applications.',
      'Ductile iron housing conforming to ASTM A536.',
      'Grooving standard conforms to AWWA C606.',
      'Short centre-to-end dimensions help simplify installation.',
      'Hot-dipped galvanised coating is available as an optional finish.'
    ],
    specifications: [
      { label: 'Product type', value: 'Grooved reducing tee – threaded ends' },
      { label: 'Housing material', value: 'Ductile iron – ASTM A536' },
      { label: 'Grooving standard', value: 'AWWA C606' },
      { label: 'Working pressure', value: 'Varies by size; refer to catalogue' },
      { label: 'Connection', value: 'Threaded branch connection' },
      { label: 'Application', value: 'Fire protection and general piping services' }
    ],
    sizes: []
  },

  GJF14PN: {
    model: 'GJF14PN',
    availableSizes: ["2'", "2½'", "3'", "4'", "5'", "6'", "8'", "10'"],
    features: [
      'Provides a rigid transition to a grooved piping system without welding',
      'Ductile iron flange body conforming to ASTM A536',
      'EPDM rubber gaskets',
      'Rated working pressure up to 300 PSI',
      'Hot-dip galvanised coating available as optional'
    ],
    specifications: [
      { label: 'Product type', value: 'Grooved Flange PN-16' },
      { label: 'Housing material', value: 'Ductile iron – ASTM A536' },
      { label: 'Gasket material', value: 'EPDM' },
      { label: 'Working pressure', value: '300 PSI / 2.07 MPa' },
      { label: 'Connection', value: 'Grooved flange connection' },
      { label: 'Coating', value: 'Hot-dip galvanised coating optional' }
    ],
    sizes: []
  },

  GJFL14A: {
    model: 'GJFL14A',
    availableSizes: ["2'", "2½'", "3'", "4'", "5'", "6'", "8'", "10'"],
    features: [
      'Provides a rigid transition from a grooved piping system to a flanged component',
      'Ductile iron flange body conforming to ASTM A536',
      'EPDM rubber gaskets',
      'ANSI Class 150 drilling pattern',
      'Rated working pressure up to 300 PSI',
      'Hot-dip galvanised coating available as optional'
    ],
    specifications: [
      { label: 'Product type', value: 'Grooved Flange ANSI Class-150' },
      { label: 'Housing material', value: 'Ductile iron – ASTM A536' },
      { label: 'Gasket material', value: 'EPDM' },
      { label: 'Flange standard', value: 'ANSI Class 150' },
      { label: 'Working pressure', value: '300 PSI / 2.07 MPa' },
      { label: 'Coating', value: 'Hot-dip galvanised coating optional' }
    ],
    sizes: []
  },

  GJFA19T: {
    model: 'GJFA19T',
    availableSizes: ["2'", "2½'", "3'", "4'"],
    features: [
      'Designed to provide a rigid flanged component without welding',
      'Ductile iron body conforming to ASTM A536',
      'Threaded BSPT or NPT connection',
      'Rated working pressure up to 500 PSI',
      'Hot-dip galvanised coating available as optional'
    ],
    specifications: [
      { label: 'Product type', value: 'Grooved Flange Threaded PN-16' },
      { label: 'Housing material', value: 'Ductile iron – ASTM A536' },
      { label: 'Thread standard', value: 'BSPT or NPT' },
      { label: 'Working pressure', value: 'Up to 500 PSI' },
      { label: 'Connection', value: 'Threaded flange connection' },
      { label: 'Coating', value: 'Hot-dip galvanised coating optional' }
    ],
    sizes: []
  },

  GJFA19P: {
    model: 'GJFA19P',
    availableSizes: ["2'", "2½'", "3'", "4'", "5'", "6'", "8'", "10'", "12'", "14'"],
    features: [
      'Ductile iron flange body conforming to ASTM A536',
      'Designed for grooved-to-flanged pipe connections',
      'Rated working pressure up to 500 PSI',
      'Hot-dip galvanised coating available as optional'
    ],
    specifications: [
      { label: 'Product type', value: 'Grooved Flange Adapter PN-16' },
      { label: 'Housing material', value: 'Ductile iron – ASTM A536' },
      { label: 'Working pressure', value: 'Up to 500 PSI' },
      { label: 'Connection', value: 'Grooved flange adapter' },
      { label: 'Coating', value: 'Hot-dip galvanised coating optional' }
    ],
    sizes: []
  },

  GJFA19A: {
    model: 'GJFA19A',
    availableSizes: ["2'", "2½'", "3'", "4'", "5'", "6'", "8'", "10'", "12'"],
    features: [
      'Ductile iron flange body conforming to ASTM A536',
      'ANSI Class 150 flange drilling pattern',
      'Designed for grooved-to-flanged pipe connections',
      'Rated working pressure up to 500 PSI',
      'Hot-dip galvanised coating available as optional'
    ],
    specifications: [
      { label: 'Product type', value: 'Grooved Flange Adapter ANSI Class-150' },
      { label: 'Housing material', value: 'Ductile iron – ASTM A536' },
      { label: 'Flange standard', value: 'ANSI Class 150' },
      { label: 'Working pressure', value: 'Up to 500 PSI' },
      { label: 'Connection', value: 'Grooved flange adapter' },
      { label: 'Coating', value: 'Hot-dip galvanised coating optional' }
    ],
    sizes: []
  },

GJCP55G: {
  model: 'GJCP55G',
  availableSizes: [
    "1'",
    "1¼'",
    "1½'",
    "2'", "2½'", "3'", "4'", "5'", "6'", "8'", "10'", "12'"
  ],
  features: [
    'Designed to terminate grooved piping ends for temporary or permanent applications',
    'Ductile iron body conforming to ASTM A536',
    'Grooving standards conforming to AWWA C606',
    'Working pressure varies by size, as specified in the catalogue',
    'Hot-dip galvanised coating available as optional'
  ],
  specifications: [
    { label: 'Product type', value: 'Grooved End Cap' },
    { label: 'Model number', value: 'GJCP55G' },
    { label: 'Body material', value: 'Ductile Iron – ASTM A536' },
    { label: 'Grooving standard', value: 'AWWA C606' },
    { label: 'Working pressure', value: '300–400 PSI, depending on size' },
    { label: 'Coating', value: 'Hot-dip galvanised coating optional' }
  ],
  sizes: []
},

GJCP55T: {
  model: 'GJCP55T',
  availableSizes: [
    "4' x 1'",
    "6' x 1'",
    "8' x 1'",
    "10' x 1'",
  ],
  features: [
    'Designed to terminate grooved piping ends for temporary or permanent applications',
    'Ductile iron body conforming to ASTM A536',
    'Grooving standards conforming to AWWA C606',
    'Threaded end connection',
    'Rated working pressure up to 500 PSI',
    'Hot-dip galvanised coating available as optional'
  ],
  specifications: [
    { label: 'Product type', value: 'Grooved End Cap (Threaded)' },
    { label: 'Model number', value: 'GJCP55T' },
    { label: 'Body material', value: 'Ductile Iron – ASTM A536' },
    { label: 'Grooving standard', value: 'AWWA C606' },
    { label: 'Working pressure', value: '500 PSI / 3.45 MPa' },
    { label: 'Connection', value: 'Threaded connection' },
    { label: 'Coating', value: 'Hot-dip galvanised coating optional' }
  ],
  sizes: []
},

GJER45G: {
  model: 'GJER45G',
  availableSizes: [
    "3' x 2'",
    "3' x 2½'",
    "3' x 2½'",
    "4' x 2'",
    "4' x 2½'",
    "4' x 3'",
    "5' x 2½'",
    "5' x 3'",
    "5' x 4'",
    "6' x 2'",
    "6' x 2½'",
    "6' x 3'",
    "6' x 4'",
    "6' x 5'",
    "8' x 3'",
    "8' x 4'",
    "8' x 5'",
    "8' x 6'",
    "10' x 6'",
    "10' x 8'"
  ],
  features: [
    'Designed for short centre-to-end dimensions',
    'Helps in easier installation',
    'Primarily used for fire protection applications',
    'Suitable for other related grooved piping systems and general services',
    'Ductile iron housing conforming to ASTM A536',
    'Grooving standard AWWA C606',
    'Hot-dip galvanised coating available as optional'
  ],
  specifications: [
    { label: 'Product type', value: 'Grooved Eccentric Reducer' },
    { label: 'Model number', value: 'GJER45G' },
    { label: 'Body material', value: 'Ductile Iron – ASTM A536' },
    { label: 'Grooving standard', value: 'AWWA C606' },
    { label: 'Working pressure', value: '500 PSI / 3.45 MPa' },
    { label: 'Coating', value: 'Hot-dip galvanised coating optional' }
  ],
  sizes: []
},



};


