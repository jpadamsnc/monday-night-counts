# Monday Night Counts

Counts the milk, eggs, washed eggs, raw cream and sourdough items on the Monday
farm delivery pack lists, per pickup location, and works out the milk and cream
order for the dairy farmer.

**Use it:** https://jpadamsnc.github.io/monday-night-counts/

Drop the Barn2Door pack list zip onto the page - one zip covering every
location, or a separate zip for each. The files are read inside the browser;
nothing is uploaded anywhere.

## Changing it

The tool is one page: `src/app.html`. After editing it, run

    node build.js

which rebuilds `index.html` (the hosted page) with the PDF reader in `src/lib`
pasted in. Commit and push, and the hosted page updates in a minute or two.

Pack list zips and PDFs are excluded by `.gitignore` because they contain
customer details. Keep it that way.

PDF reading uses [pdf.js](https://mozilla.github.io/pdf.js/) (Apache 2.0, see
`src/lib/pdfjs-LICENSE.txt`).
