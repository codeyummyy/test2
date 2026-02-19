const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const BOOK_FILE = path.resolve(__dirname, 'index.html');
const COVER_FILE = path.resolve(__dirname, 'cover.html');
const OUTPUT_DIR = path.resolve(__dirname, 'output');

async function generatePDF() {
  const isCover = process.argv.includes('--cover');

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  if (isCover) {
    console.log('Generating cover image...');
    const coverUrl = 'file://' + COVER_FILE;
    await page.goto(coverUrl, { waitUntil: 'networkidle0' });
    await page.setViewport({ width: 1600, height: 2400 });
    await page.screenshot({
      path: path.join(OUTPUT_DIR, 'cover.png'),
      fullPage: true
    });
    console.log('Cover saved to output/cover.png');
  } else {
    console.log('Generating PDF...');
    const bookUrl = 'file://' + BOOK_FILE;
    await page.goto(bookUrl, { waitUntil: 'networkidle0' });

    // Wait for Mermaid diagrams to render
    console.log('Waiting for diagrams to render...');
    await new Promise(r => setTimeout(r, 2000));

    await page.pdf({
      path: path.join(OUTPUT_DIR, 'AI-for-VLSI-Guide.pdf'),
      format: 'A4',
      printBackground: true,
      margin: {
        top: '0.75in',
        bottom: '0.75in',
        left: '0.85in',
        right: '0.85in'
      },
      displayHeaderFooter: true,
      headerTemplate: `
        <div style="width:100%;font-size:8pt;color:#999;padding:0 0.85in;font-family:Helvetica,Arial,sans-serif;">
          <span style="float:left;">AI for VLSI</span>
        </div>`,
      footerTemplate: `
        <div style="width:100%;font-size:8pt;color:#999;padding:0 0.85in;text-align:center;font-family:Helvetica,Arial,sans-serif;">
          <span class="pageNumber"></span>
        </div>`
    });

    console.log('PDF saved to output/AI-for-VLSI-Guide.pdf');
  }

  await browser.close();
}

generatePDF().catch(err => {
  console.error('Error generating PDF:', err);
  process.exit(1);
});
