const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const excelPath = path.join(__dirname, 'Inventario BEKKAGLAM.xlsx');
const outputDir = path.join(__dirname, '..', 'public', 'inventario');

// Crear carpeta de imágenes
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Leer Excel
const wb = XLSX.readFile(excelPath);
const ws = wb.Sheets[wb.SheetNames[0]];
const data = XLSX.utils.sheet_to_json(ws);

// Mapeo de colores a hex
const colorMap = {
  'BEIGE': '#F5F5DC',
  'BLANCO': '#FFFFFF',
  'NEGRO': '#1A1A1A',
  'ROJO': '#DC2626',
  'AZUL': '#2563EB',
  'VERDE': '#16A34A',
  'ROSADO': '#EC4899',
  'MORADO': '#9333EA',
  'NARANJA': '#F97316',
  'AMARILLO': '#EAB308',
  'GRIS': '#6B7280',
  'CAFÉ': '#92400E',
  'TURQUESA': '#14B8A6',
  'FUCSIA': '#D946EF',
  'LILA': '#C084FC',
  'CREMA': '#FEF3C7',
  'SALMON': '#FB923C',
  'VINO': '#9F1239',
  'BORGOÑA': '#881337',
  'OLIVO': '#65A30D',
  'TAQUÍ': '#78716C',
  'JEANS': '#1E40AF',
  'DENIM': '#1E40AF',
  'PRINT': '#F472B6',
  'ESTAMPADO': '#F472B6',
  'FLORAL': '#A78BFA',
  'RAYAS': '#60A5FA',
  'BLANCO/NEGRO': '#374151',
  'NEGRO/BLANCO': '#374151',
  'ROJO/NEGRO': '#991B1B',
  'ROSA': '#FB7185',
  'CELULOSA': '#86EFAC',
  'MIX': '#A78BFA',
  'MULTICOLOR': '#F472B6',
  'DORADO': '#F59E0B',
  'PLATA': '#D1D5DB',
  'CHOCOLATE': '#78350F',
  'LAVANDA': '#C4B5FD',
  'MENTA': '#6EE7B7',
  'FRAMBUESA': '#E11D48',
  'CARAMELO': '#D97706',
  'TABACO': '#78350F',
  'WHISKY': '#92400E',
  'COGNAC': '#A16207',
  'MIEL': '#D97706',
};

// Categorías con iconos simples
const categoryIcons = {
  'SET': '👗',
  'BLUSA': '👚',
  'VESTIDO': '👗',
  'FALDA': '🩳',
  'PANTALÓN': '👖',
  'PANTALON': '👖',
  'BUZO': '🧥',
  'CHAQUETA': '🧥',
  'CARDIGAN': '🧥',
  'REMERÍE': '👕',
  'CAMISA': '👔',
  'TOP': '🎽',
  'ENTERIZO': '👗',
  'CONJUNTO': '👗',
  'ACCESORIO': '👜',
  'BOLSO': '👜',
};

function getColorHex(colorName) {
  const upper = colorName?.toUpperCase().trim();
  return colorMap[upper] || '#E5E7EB';
}

function getTextColor(bgHex) {
  const hex = bgHex.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? '#1A1A1A' : '#FFFFFF';
}

// Generar SVG para cada producto
let count = 0;
data.forEach((row) => {
  const codigo = row['Código'];
  if (!codigo) return;

  const referencia = row['Referencia'] || '';
  const categoria = row['Categoría'] || '';
  const color = row['Color'] || '';
  const precio = row['Precio'] || 0;
  const talla = row['TALLA'] || '';

  const bgColor = getColorHex(color);
  const textColor = getTextColor(bgColor);
  const icon = categoryIcons[categoria.toUpperCase()] || '👗';

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="500" viewBox="0 0 400 500">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${bgColor};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${bgColor};stop-opacity:0.8" />
    </linearGradient>
  </defs>
  
  <!-- Fondo -->
  <rect width="400" height="500" fill="url(#bg)" rx="16"/>
  
  <!-- Borde sutil -->
  <rect width="400" height="500" fill="none" stroke="${textColor === '#FFFFFF' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)'}" stroke-width="1" rx="16"/>
  
  <!-- Icono de categoría -->
  <text x="200" y="200" font-size="80" text-anchor="middle" dominant-baseline="middle">${icon}</text>
  
  <!-- Código del producto -->
  <text x="200" y="300" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="700" fill="${textColor}" text-anchor="middle">${codigo}</text>
  
  <!-- Referencia -->
  <text x="200" y="330" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="500" fill="${textColor}" text-anchor="middle" opacity="0.8">${referencia}</text>
  
  <!-- Categoría y Color -->
  <text x="200" y="360" font-family="system-ui, -apple-system, sans-serif" font-size="12" fill="${textColor}" text-anchor="middle" opacity="0.6">${categoria} · ${color}</text>
  
  <!-- Precio -->
  <text x="200" y="400" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="600" fill="${textColor}" text-anchor="middle">$${Number(precio).toLocaleString('es-CO')}</text>
  
  <!-- Talla -->
  ${talla ? `<rect x="160" y="420" width="80" height="28" fill="${textColor}" rx="14" opacity="0.2"/>
  <text x="200" y="439" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="600" fill="${textColor}" text-anchor="middle">${talla}</text>` : ''}
  
  <!-- Marca agua -->
  <text x="200" y="480" font-family="system-ui, -apple-system, sans-serif" font-size="10" fill="${textColor}" text-anchor="middle" opacity="0.4">BEKKAGLAM</text>
</svg>`;

  const filePath = path.join(outputDir, `${codigo}.svg`);
  fs.writeFileSync(filePath, svg);
  count++;
});

console.log(`✅ ${count} imágenes creadas en: ${outputDir}`);
