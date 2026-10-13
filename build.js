// Builds the single-file tool from src/app.html with the pdf.js library pasted in,
// so the one file works on its own with no internet. It is written twice:
//   index.html                 - the copy GitHub Pages serves
//   Monday Night Counts.html   - the same file, for double-clicking on this PC
// Run with:  node build.js
const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'src');
const outputs = ['index.html', 'Monday Night Counts.html'];

let html = fs.readFileSync(path.join(src, 'app.html'), 'utf8');
let inlined = 0;
html = html.replace(/<script src="(lib\/[^"]+)"><\/script>/g, (_, file) => {
  const js = fs.readFileSync(path.join(src, file), 'utf8')
    .replace(/\/\/# sourceMappingURL=.*$/m, '')
    .replace(/<\/script/gi, '<\\/script');
  inlined++;
  return '<script>\n' + js + '\n</script>';
});
if (inlined !== 2) throw new Error(`Expected to inline 2 library files, inlined ${inlined}`);

for (const name of outputs) fs.writeFileSync(path.join(__dirname, name), html);
console.log(`Wrote ${outputs.join(' and ')} (${(html.length / 1024 / 1024).toFixed(1)} MB each)`);
