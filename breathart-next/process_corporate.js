const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const sourceDir = path.join('d:', 'breathartstudio', 'breathart', 'breathart-next', 'public', 'assets', 'gallery', 'corporate');
const pageJsPath = path.join('d:', 'breathartstudio', 'breathart', 'breathart-next', 'app', '(home)', 'page.js');

async function processCorporateImages() {
    const entries = fs.readdirSync(sourceDir, { withFileTypes: true });
    const newImages = [];

    let count = 1;
    for (const entry of entries) {
        if (/\.(jpg|jpeg|png)$/i.test(entry.name)) {
            const fullPath = path.join(sourceDir, entry.name);
            const ext = path.extname(entry.name);
            const baseName = path.basename(entry.name, ext);
            // Replace spaces and parenthesis with underscores
            const safeBaseName = baseName.replace(/[\s\(\)]+/g, '_').replace(/_+$/, '');
            const newFileName = `${safeBaseName}.webp`;
            const newPath = path.join(sourceDir, newFileName);

            try {
                console.log(`Converting: ${fullPath} -> ${newPath}`);
                await sharp(fullPath)
                    .resize({ width: 3840, height: 3840, fit: 'inside', withoutEnlargement: true })
                    .webp({ quality: 95, effort: 4 })
                    .toFile(newPath);
                
                newImages.push({
                    src: `/assets/gallery/corporate/${newFileName}`,
                    alt: `Corporate ${count}`,
                    title: `Corporate Imagery ${count}`
                });
                count++;
            } catch (error) {
                console.error(`Error processing ${fullPath}:`, error);
            }
        }
    }

    if (newImages.length === 0) {
        console.log('No new images processed.');
        return;
    }

    // Now update page.js
    let content = fs.readFileSync(pageJsPath, 'utf8');

    // 1. Replace in allShowcaseImages
    const showcaseItems = newImages.map(img => `  { src: '${img.src}', alt: '${img.alt}', title: '${img.title}', category: 'Corporate' },`).join('\n');
    
    // Replace Corporate block
    const corporateRegex = /(\/\/ Corporate\n)([\s\S]*?)(\n\s*\/\/ Real Estate)/;
    content = content.replace(corporateRegex, `$1${showcaseItems}$3`);

    fs.writeFileSync(pageJsPath, content, 'utf8');
    console.log('Successfully updated page.js with the new corporate images.');
}

processCorporateImages().catch(console.error);
