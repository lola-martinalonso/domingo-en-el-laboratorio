import * as pdfjs from 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.6.82/build/pdf.min.mjs';
pdfjs.GlobalWorkerOptions.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.6.82/build/pdf.worker.min.mjs';

const docs = new Map();
function getDoc(url) {
  if (!docs.has(url)) docs.set(url, pdfjs.getDocument(url).promise);
  return docs.get(url);
}

async function renderPage(doc, n, cssWidth) {
  const page = await doc.getPage(n);
  const base = page.getViewport({ scale: 1 });
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const vp = page.getViewport({ scale: (cssWidth * dpr) / base.width });
  const c = document.createElement('canvas');
  c.width = Math.round(vp.width);
  c.height = Math.round(vp.height);
  c.style.width = '100%';
  c.style.height = 'auto';
  await page.render({ canvasContext: c.getContext('2d'), viewport: vp }).promise;
  return c;
}

async function fill(el) {
  const doc = await getDoc(el.dataset.pdf);
  const onlyFirst = el.hasAttribute('data-pdf-cover');
  const width = Math.max(el.clientWidth || 600, 320);
  const last = onlyFirst ? 1 : doc.numPages;
  const frag = document.createDocumentFragment();
  for (let i = 1; i <= last; i++) {
    const wrap = document.createElement('div');
    wrap.className = 'pdfpage';
    wrap.appendChild(await renderPage(doc, i, width));
    frag.appendChild(wrap);
  }
  el.textContent = '';
  el.appendChild(frag);
  el.classList.remove('loading');
  el.classList.add('ready');
  el.style.aspectRatio = '';
  const counter = document.querySelector('[data-pdf-count]');
  if (counter && !onlyFirst) counter.textContent = counter.dataset.pdfCount.replace('%', doc.numPages);
}

const io = new IntersectionObserver(function (entries) {
  entries.forEach(function (e) {
    if (!e.isIntersecting) return;
    io.unobserve(e.target);
    fill(e.target).catch(function () { e.target.classList.add('failed'); });
  });
}, { rootMargin: '600px' });

document.querySelectorAll('[data-pdf]').forEach(function (el) { io.observe(el); });
