const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const targetDir = path.join('d:', 'breathartstudio', 'breathart', 'breathart-next', 'public', 'assets', 'hero');

const images = [
    { src: '1 (2).png', dest: '1_optimized.webp' },
    { src: '2.jpeg', dest: '2_optimized.webp' },
    { src: '3.jpeg', dest: '3_optimized.webp' },
    { src: '4.jpeg', dest: '4_optimized.webp' },
];

async function processHeroImages() {
    for (const img of images) {
        const fullPath = path.join(targetDir, img.src);
        const newPath = path.join(targetDir, img.dest);
        try {
            console.log(`Converting: ${fullPath} -> ${newPath}`);
            await sharp(fullPath)
                .resize({ width: 3840, height: 3840, fit: 'inside', withoutEnlargement: true })
                .webp({ quality: 90, effort: 4 })
                .toFile(newPath);
            console.log(`Finished ${img.dest}`);
        } catch (error) {
            console.error(`Error processing ${fullPath}:`, error);
        }
    }
}

processHeroImages().catch(console.error);
