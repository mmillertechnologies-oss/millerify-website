import sharp from 'sharp'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const src = join(__dirname, '..', 'public', 'favicon.png')
const out = join(__dirname, '..', 'public', 'favicon.png')

const SIZE = 256

// Get image metadata to find the actual content bounds
const img = sharp(src)
const { width, height } = await img.metadata()

// Trim transparent/similar pixels, flatten onto black, resize to square
await sharp(src)
  .trim({ background: '#000000', threshold: 40 })
  .resize(SIZE, SIZE, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 1 } })
  .flatten({ background: { r: 0, g: 0, b: 0 } })
  .png()
  .toFile(out + '.tmp.png')

// Replace original with processed
import { rename } from 'fs/promises'
await rename(out + '.tmp.png', out)

console.log(`Done — favicon.png is now ${SIZE}x${SIZE} with black background`)
