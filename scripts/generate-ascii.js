import sharp from 'sharp'
import { writeFileSync, mkdirSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const COLS = 100
const CHARS = '@%#MW&8BNAD0OZYXJCbwqmkhdpntxrjvfuanse2367942co?*+~=-_.  '

const input = resolve(__dirname, '..', '20250224_223959 copy.jpg')
const output = resolve(__dirname, '..', 'public', 'images', 'avatar-ascii.svg')

const meta = await sharp(input).metadata()
const aspect = meta.height / meta.width
const FONT_SIZE = 8
const CHAR_W = FONT_SIZE * 0.6
const LINE_H = FONT_SIZE * 1.3
const ROWS = Math.round(COLS * aspect * (CHAR_W / LINE_H))

const PAD = 12
const VIEW_W = Math.ceil(COLS * CHAR_W) + PAD * 2
const VIEW_H = Math.ceil(ROWS * LINE_H) + PAD * 2

const { data } = await sharp(input)
  .resize(COLS, ROWS, { fit: 'cover', position: 'center' })
  .grayscale()
  .raw()
  .toBuffer({ resolveWithObject: true })

const gamma = 2.0
const lines = []
for (let y = 0; y < ROWS; y++) {
  let row = ''
  for (let x = 0; x < COLS; x++) {
    const b = data[y * COLS + x] / 255
    const corrected = Math.pow(b, 1 / gamma)
    const idx = Math.floor(corrected * (CHARS.length - 1))
    row += CHARS[Math.min(idx, CHARS.length - 1)]
  }
  lines.push(row)
}

const textLines = lines
  .map(
    (line, i) =>
      `    <text x="${PAD}" y="${(PAD + i * LINE_H + FONT_SIZE * 0.85).toFixed(1)}" class="c">${line.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</text>`
  )
  .join('\n')

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${VIEW_W} ${VIEW_H}">
  <style>
    .bg { fill: rgba(0,0,0,0.15); }
    .c { font-family: 'Fira Code', 'Courier New', monospace; font-size: ${FONT_SIZE}px; fill: #1a1a1a; }
    @media (prefers-color-scheme: dark) {
      .bg { fill: rgba(255,255,255,0.06); }
      .c { fill: #e0e0e0; }
    }
  </style>
  <rect class="bg" x="6" y="6" width="${VIEW_W - 12}" height="${VIEW_H - 12}" rx="12"/>
${textLines}
</svg>`

mkdirSync(dirname(output), { recursive: true })
writeFileSync(output, svg, 'utf-8')

console.log(`Generated ${output}`)
console.log(`${ROWS} rows × ${COLS} cols (${VIEW_W}×${VIEW_H})`)
