const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const galleryDir = 'd:/breathartstudio/breathart/breathart-next/public/assets/gallery';

async function processDirectory(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            await processDirectory(fullPath);
        } else if (/\.(jpg|jpeg|png)$/i.test(entry.name)) {
            const ext = path.extname(entry.name);
            const baseName = path.basename(entry.name, ext);
            const newPath = path.join(dir, `${baseName}.webp`);

            try {
                console.log(`Converting: ${fullPath}`);
                // Use lossless webp for no quality loss as requested
                await sharp(fullPath)
                    .webp({ lossless: true, effort: 6 })
                    .toFile(newPath);
                
                console.log(`Success: ${newPath}`);
                // Delete original file after successful conversion
                fs.unlinkSync(fullPath);
            } catch (error) {
                console.error(`Error processing ${fullPath}:`, error);
            }
        }
    }
}

processDirectory(galleryDir)
    .then(() => console.log('Image optimization complete.'))
    .catch(err => console.error(err));
