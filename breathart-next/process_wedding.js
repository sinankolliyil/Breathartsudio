const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const sourceDir = path.join('d:', 'breathartstudio', 'breathart', 'breathart-next', 'public', 'assets', 'gallery', 'wedding', 'untitled folder 4');
const targetDir = path.join('d:', 'breathartstudio', 'breathart', 'breathart-next', 'public', 'assets', 'gallery', 'wedding');
const pageJsPath = path.join('d:', 'breathartstudio', 'breathart', 'breathart-next', 'app', '(home)', 'page.js');

async function processWeddingImages() {
    const entries = fs.readdirSync(sourceDir, { withFileTypes: true });
    const newImages = [];

    let count = 1;
    for (const entry of entries) {
        if (/\.(jpg|jpeg|png)$/i.test(entry.name)) {
            const fullPath = path.join(sourceDir, entry.name);
            const ext = path.extname(entry.name);
            const baseName = path.basename(entry.name, ext);
            // Replace spaces with underscores for web friendly names
            const safeBaseName = baseName.replace(/\s+/g, '_');
            const newFileName = `${safeBaseName}.webp`;
            const newPath = path.join(targetDir, newFileName);

            try {
                console.log(`Converting: ${fullPath} -> ${newPath}`);
                // Use high quality lossy webp instead of lossless for photos, as lossless webp
                // balloons file size by 3x and fails on massive images.
                // We will resize to max width/height 3840 to ensure it fits within webp limits,
                // while keeping extremely high quality.
                await sharp(fullPath)
                    .resize({ width: 3840, height: 3840, fit: 'inside', withoutEnlargement: true })
                    .webp({ quality: 95, effort: 4 })
                    .toFile(newPath);
                
                newImages.push({
                    src: `/assets/gallery/wedding/${newFileName}`,
                    alt: `Wedding ${count}`,
                    title: `Wedding Moments ${count}`
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
    const showcaseItems = newImages.map(img => `  { src: '${img.src}', alt: '${img.alt}', title: '${img.title}', category: 'Wedding' },`).join('\n');
    
    // Use regex to replace the block
    const allShowcaseRegex = /(\/\/ Wedding\n)([\s\S]*?)(\n\s*\/\/ Event)/;
    content = content.replace(allShowcaseRegex, `$1${showcaseItems}$3`);

    // 2. Replace in HomeLightbox for wedding
    const lightboxItems = newImages.map(img => `              { src: '${img.src}', alt: '${img.alt}', title: '${img.title}' },`).join('\n');
    
    // Find the HomeLightbox section for wedding
    const lightboxOldBlock = `            items={[
              { src: '/assets/gallery/wedding/wedding_color.webp', alt: 'Wedding 1', title: 'The Vow' },
              { src: '/assets/services/service_wedding.png', alt: 'Wedding 2', title: 'Sacred Bond' },
              { src: '/assets/services/service_wedding_main.png', alt: 'Wedding 3', title: 'Golden Hour' },
              { src: '/assets/gallery/wedding/luxury.webp', alt: 'Wedding 4', title: 'Elegant Union' },
              { src: '/assets/services/service_prewedding.png', alt: 'Wedding 5', title: 'Eternal Flame' },
              { src: '/assets/services/service_video_wedding.png', alt: 'Wedding 6', title: 'Together Forever' },
            ]}`;
            
    const lightboxNewBlock = `            items={[\n${lightboxItems}\n            ]}`;

    content = content.replace(lightboxOldBlock, lightboxNewBlock);

    fs.writeFileSync(pageJsPath, content, 'utf8');
    console.log('Successfully updated page.js with the new wedding images.');
}

processWeddingImages().catch(console.error);
