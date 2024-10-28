// importExcelData.js
const { PrismaClient } = require('@prisma/client');
const xlsx = require('xlsx');

const prisma = new PrismaClient();

async function main() {
  // Load your Excel file
  const workbook = xlsx.readFile('./book_data.xlsx');
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const data = xlsx.utils.sheet_to_json(sheet);

  // Insert data into Prisma
  for (const record of data) {
    await prisma.book.create({
      data: {
        name: record.name,
        author: record.author,
        price: parseFloat(record.Price),
        imageUrl: record.imageUrl || null,
      },
    });
  }

  console.log('Data imported successfully');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
