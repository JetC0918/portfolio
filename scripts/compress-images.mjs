import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join } from 'path';

const publicDir = './public';
const images = ['Catcourt.png', 'Codiolive.png', 'Cozycat.png', 'Hotfeed.png', 'avatar.png', 'favicon.png'];

async function compressImages() {
    for (const image of images) {
        const inputPath = join(publicDir, image);
        const outputPath = join(publicDir, image.replace('.png', '.webp'));

        try {
            const info = await sharp(inputPath)
                .webp({ quality: 80 })
                .toFile(outputPath);

            console.log(`✓ ${image} → ${image.replace('.png', '.webp')} (${Math.round(info.size / 1024)}KB)`);
        } catch (err) {
            console.error(`✗ Failed to compress ${image}:`, err.message);
        }
    }

    console.log('\nDone! Update your code to use .webp files instead of .png');
}

compressImages();
