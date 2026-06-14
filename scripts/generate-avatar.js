import sharp from 'sharp'
import { writeFileSync, mkdirSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const GRID = 80
const VIEWBOX = 600
const PAD = VIEWBOX * 0.07
const INNER = VIEWBOX - PAD * 2
const CELL = INNER / GRID
const MAX_RADIUS = CELL * 0.45

const input = resolve(__dirname, '..', '20250224_223959 copy.jpg')
const output = resolve(__dirname, '..', 'public', 'images', 'avatar-dotmatrix.svg')

const { data, info } = await sharp(input)
  .resize(GRID, GRID, { fit: 'cover', position: 'center' })
  .grayscale()
  .raw()
  .toBuffer({ resolveWithObject: true })

const circles = []
for (let y = 0; y < GRID; y++) {
  for (let x = 0; x < GRID; x++) {
    const brightness = data[y * GRID + x]
    const radius = (brightness / 255) * MAX_RADIUS
    if (radius < 0.15) continue
    const cx = PAD + x * CELL + CELL / 2
    const cy = PAD + y * CELL + CELL / 2
    circles.push(`    <circle cx="${cx.toFixed(2)}" cy="${cy.toFixed(2)}" r="${radius.toFixed(2)}" class="dot"/>`)
  }
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${VIEWBOX} ${VIEWBOX}">
  <style>
    .pillow { fill: rgba(0,0,0,0.25); stroke: rgba(255,255,255,0.08); stroke-width: 1.5; }
    .dot { fill: #ffffff; }
    @media (prefers-color-scheme: light) {
      .pillow { fill: rgba(0,0,0,0.08); stroke: rgba(0,0,0,0.08); stroke-width: 1; }
      .dot { fill: #1a1a1a; }
    }
  </style>
  <rect class="pillow" x="${PAD.toFixed(2)}" y="${PAD.toFixed(2)}"
        width="${INNER.toFixed(2)}" height="${INNER.toFixed(2)}" rx="24"/>
${circles.join('\n')}
</svg>`

mkdirSync(dirname(output), { recursive: true })
writeFileSync(output, svg, 'utf-8')

console.log(`Generated ${output}`)
console.log(`${circles.length} dots`)
