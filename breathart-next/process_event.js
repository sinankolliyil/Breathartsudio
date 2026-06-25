const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const sourceDir = path.join('d:', 'breathartstudio', 'breathart', 'breathart-next', 'public', 'assets', 'gallery', 'event');
const pageJsPath = path.join('d:', 'breathartstudio', 'breathart', 'breathart-next', 'app', '(home)', 'page.js');

async function processEventImages() {
    const entries = fs.readdirSync(sourceDir, { withFileTypes: true });
    const newImages = [];

    // The user specified exact filenames. Let's filter just those or all jpg/jpeg.
    // Assuming they are all the jpg/jpeg files in that directory.
    const specifiedFiles = [
        "pexels-b_s-media-production-568838161-34171711.jpg",
        "pexels-caleboquendo-11329860.jpg",
        "pexels-cherubs-22669860.jpg",
        "pexels-miriam-salgado-157461221-10733219 (1).jpg",
        "pexels-miriam-salgado-157461221-10733602 (1).jpg",
        "pexels-panditwiguna-2788487.jpg",
        "WhatsApp Image 2026-06-25 at 17.28.30.jpeg",
        "chuttersnap-aEnH4hJ_Mrs-unsplash.jpg"
    ];

    let count = 1;
    for (const entry of entries) {
        if (specifiedFiles.includes(entry.name)) {
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
                    src: `/assets/gallery/event/${newFileName}`,
                    alt: `Event ${count}`,
                    title: `Event Imagery ${count}`
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
    const showcaseItems = newImages.map(img => `  { src: '${img.src}', alt: '${img.alt}', title: '${img.title}', category: 'Event' },`).join('\n');
    
    // Replace Event block (between // Event and // Newborn)
    const eventRegex = /(\/\/ Event\n)([\s\S]*?)(\n\s*\/\/ Newborn)/;
    content = content.replace(eventRegex, `$1${showcaseItems}$3`);

    fs.writeFileSync(pageJsPath, content, 'utf8');
    console.log('Successfully updated page.js with the new event images.');
}

processEventImages().catch(console.error);
