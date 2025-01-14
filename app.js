const fs = require('fs');
const XLSX = require('xlsx');

// Leer el archivo JSON (que es un arreglo de objetos)
const jsonData = JSON.parse(fs.readFileSync('response.json', 'utf8'));

// Convertir JSON a hoja de cálculo
const worksheet = XLSX.utils.json_to_sheet(jsonData);

// Crear un libro de Excel
const workbook = XLSX.utils.book_new();

// Agregar la hoja de cálculo al libro
XLSX.utils.book_append_sheet(workbook, worksheet, 'Hoja1');

// Guardar el archivo Excel
XLSX.writeFile(workbook, 'resultado.xlsx');

console.log('Archivo Excel creado con éxito.');
