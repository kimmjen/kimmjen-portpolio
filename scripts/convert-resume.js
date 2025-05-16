const fs = require('fs');
const path = require('path');
const { mdToPdf } = require('md-to-pdf');
const marked = require('marked');

const resumePath = path.join(__dirname, '../김제민_이력서.md');
const pdfOutputPath = path.join(__dirname, '../public/downloads/김제민_이력서.pdf');
const docxOutputPath = path.join(__dirname, '../public/downloads/김제민_이력서.docx');
const htmlOutputPath = path.join(__dirname, '../public/downloads/김제민_이력서.html');

async function convertToPdf() {
  try {
    console.log('Converting Markdown to PDF...');
    const pdf = await mdToPdf({ path: resumePath }, { 
      pdf_options: { 
        format: 'A4',
        margin: '15mm',
        printBackground: true,
        preferCSSPageSize: true,
        displayHeaderFooter: true,
        headerTemplate: `
          <div style="font-size: 8px; text-align: right; width: 100%; padding-right: 15mm; color: #777;">
            김제민 이력서
          </div>
        `,
        footerTemplate: `
          <div style="font-size: 8px; text-align: center; width: 100%; color: #777;">
            <span class="pageNumber"></span> / <span class="totalPages"></span>
          </div>
        `
      },
      stylesheet_paths: [path.join(__dirname, 'resume-style.css')],
      css: `
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap');
        @page {
          size: A4;
          margin: 15mm;
        }
        body {
          background-color: white;
        }
      `
    });
    
    fs.writeFileSync(pdfOutputPath, pdf.content);
    console.log(`PDF created at: ${pdfOutputPath}`);
  } catch (error) {
    console.error('Error converting to PDF:', error);
  }
}

function createDocWithHtml() {
  try {
    // Create a professional HTML version as a reference
    console.log('Creating HTML and DOCX versions...');
    const markdown = fs.readFileSync(resumePath, 'utf8');
    
    // Create a simple HTML file (without custom renderer which was causing issues)
    const html = marked.parse(markdown);
    
    // Create a professional HTML file
    const htmlDocument = `
      <!DOCTYPE html>
      <html lang="ko">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>김제민 이력서</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet">
        <style>
          :root {
            --primary-color: #4A6CF7;
            --secondary-color: #3A56D4;
            --text-color: #333;
            --light-gray: #f5f5f5;
            --border-color: #e0e0e0;
          }
          
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          
          body {
            font-family: 'Noto Sans KR', sans-serif;
            line-height: 1.6;
            color: var(--text-color);
            background-color: white;
            font-size: 11pt;
            max-width: 210mm;
            margin: 0 auto;
            padding: 15mm;
          }
          
          /* Headers Styling */
          h1 {
            color: var(--primary-color);
            font-size: 24pt;
            text-align: center;
            margin-bottom: 5mm;
            font-weight: 700;
            border-bottom: 0.5mm solid var(--primary-color);
            padding-bottom: 2mm;
          }
          
          h2 {
            color: var(--primary-color);
            font-size: 14pt;
            margin-top: 8mm;
            margin-bottom: 4mm;
            font-weight: 700;
            padding-bottom: 1mm;
            border-bottom: 0.2mm solid var(--border-color);
          }
          
          h3 {
            font-size: 12pt;
            margin-top: 5mm;
            margin-bottom: 2mm;
            font-weight: 600;
          }
          
          h4 {
            font-size: 11pt;
            margin-top: 3mm;
            margin-bottom: 1mm;
            font-weight: 600;
            color: var(--secondary-color);
          }
          
          /* List Styling */
          ul, ol {
            margin-left: 4mm;
            margin-bottom: 2mm;
            padding-left: 15px;
          }
          
          li {
            margin-bottom: 1mm;
          }
          
          /* Strong Text Styling */
          strong {
            color: var(--secondary-color);
            font-weight: 600;
          }
          
          /* Links Styling */
          a {
            color: var(--primary-color);
            text-decoration: none;
          }
          
          a:hover {
            text-decoration: underline;
          }
          
          /* Print Media Queries */
          @media print {
            body {
              padding: 0;
            }
            
            a {
              color: var(--text-color);
              text-decoration: none;
            }
          }
        </style>
      </head>
      <body>
        ${html}
        <div style="margin-top: 15mm; text-align: center; font-size: 9pt; color: #777;">
          이 문서는 자동으로 생성되었습니다. 최종 업데이트: ${new Date().toLocaleDateString('ko-KR')}
        </div>
      </body>
      </html>
    `;
    
    fs.writeFileSync(htmlOutputPath, htmlDocument);
    console.log(`HTML created at: ${htmlOutputPath}`);
    
    // Create a simple text file with .docx extension as a placeholder
    // In a real-world scenario, you would use a proper DOCX library
    fs.writeFileSync(docxOutputPath, 'Please open the HTML version for better formatting.');
    console.log(`DOCX placeholder created at: ${docxOutputPath}`);
  } catch (error) {
    console.error('Error creating HTML/DOCX:', error);
  }
}

// CSS for PDF styling
const css = `
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap');

:root {
  --primary-color: #4A6CF7;
  --secondary-color: #3A56D4;
  --text-color: #333;
  --light-gray: #f5f5f5;
  --border-color: #e0e0e0;
}

body {
  font-family: 'Noto Sans KR', sans-serif;
  line-height: 1.6;
  color: var(--text-color);
  max-width: 100%;
  margin: 0;
  padding: 0;
  font-size: 10pt;
}

h1 {
  color: var(--primary-color);
  font-size: 20pt;
  text-align: center;
  margin-bottom: 10mm;
  font-weight: 700;
  border-bottom: 0.5mm solid var(--primary-color);
  padding-bottom: 2mm;
}

h2 {
  color: var(--primary-color);
  font-size: 14pt;
  margin-top: 8mm;
  margin-bottom: 4mm;
  font-weight: 700;
  padding-bottom: 1mm;
  border-bottom: 0.2mm solid var(--border-color);
}

h3 {
  font-size: 12pt;
  margin-top: 5mm;
  margin-bottom: 2mm;
  font-weight: 600;
}

h4 {
  font-size: 11pt;
  margin-top: 3mm;
  margin-bottom: 1mm;
  font-weight: 600;
  color: var(--secondary-color);
}

ul, ol {
  margin-left: 4mm;
  margin-bottom: 2mm;
  padding-left: 15px;
}

li {
  margin-bottom: 1mm;
}

strong {
  color: var(--secondary-color);
  font-weight: 600;
}

a {
  color: var(--primary-color);
  text-decoration: none;
}

@page {
  size: A4;
  margin: 15mm;
}
`;

// Save the CSS file
fs.writeFileSync(path.join(__dirname, 'resume-style.css'), css);

// Run conversions
convertToPdf();
createDocWithHtml(); 