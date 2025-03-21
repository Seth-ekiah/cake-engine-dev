import { getRenderer } from '/home/seth/Documents/Websites/cake-engine-dev/cake-engine-dev/.codedoc/node_modules/@codedoc/core/dist/es6/transport/renderer.js';
import { initJssCs } from '/home/seth/Documents/Websites/cake-engine-dev/cake-engine-dev/.codedoc/node_modules/@codedoc/core/dist/es6/transport/setup-jss.js';initJssCs();
import { installTheme } from '/home/seth/Documents/Websites/cake-engine-dev/cake-engine-dev/.codedoc/content/theme.ts';installTheme();
import { codeSelection } from '/home/seth/Documents/Websites/cake-engine-dev/cake-engine-dev/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/selection.js';codeSelection();
import { sameLineLengthInCodes } from '/home/seth/Documents/Websites/cake-engine-dev/cake-engine-dev/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/same-line-length.js';sameLineLengthInCodes();
import { initHintBox } from '/home/seth/Documents/Websites/cake-engine-dev/cake-engine-dev/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-hint/index.js';initHintBox();
import { initCodeLineRef } from '/home/seth/Documents/Websites/cake-engine-dev/cake-engine-dev/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-ref/index.js';initCodeLineRef();
import { initSmartCopy } from '/home/seth/Documents/Websites/cake-engine-dev/cake-engine-dev/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/smart-copy.js';initSmartCopy();
import { copyHeadings } from '/home/seth/Documents/Websites/cake-engine-dev/cake-engine-dev/.codedoc/node_modules/@codedoc/core/dist/es6/components/heading/copy-headings.js';copyHeadings();
import { contentNavHighlight } from '/home/seth/Documents/Websites/cake-engine-dev/cake-engine-dev/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/contentnav/highlight.js';contentNavHighlight();
import { loadDeferredIFrames } from '/home/seth/Documents/Websites/cake-engine-dev/cake-engine-dev/.codedoc/node_modules/@codedoc/core/dist/es6/transport/deferred-iframe.js';loadDeferredIFrames();
import { smoothLoading } from '/home/seth/Documents/Websites/cake-engine-dev/cake-engine-dev/.codedoc/node_modules/@codedoc/core/dist/es6/transport/smooth-loading.js';smoothLoading();
import { tocHighlight } from '/home/seth/Documents/Websites/cake-engine-dev/cake-engine-dev/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toc-highlight.js';tocHighlight();
import { postNavSearch } from '/home/seth/Documents/Websites/cake-engine-dev/cake-engine-dev/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/search/post-nav/index.js';postNavSearch();
import { copyLineLinks } from '/home/seth/Documents/Websites/cake-engine-dev/cake-engine-dev/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-links/copy-line-link.js';copyLineLinks();
import { gatherFootnotes } from '/home/seth/Documents/Websites/cake-engine-dev/cake-engine-dev/.codedoc/node_modules/@codedoc/core/dist/es6/components/footnote/gather-footnotes.js';gatherFootnotes();
import { GithubSearch } from '/home/seth/Documents/Websites/cake-engine-dev/cake-engine-dev/.codedoc/node_modules/@codedoc/core/dist/es6/components/misc/github/search.js';
import { ToCToggle } from '/home/seth/Documents/Websites/cake-engine-dev/cake-engine-dev/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toggle/index.js';
import { DarkModeSwitch } from '/home/seth/Documents/Websites/cake-engine-dev/cake-engine-dev/.codedoc/node_modules/@codedoc/core/dist/es6/components/darkmode/index.js';
import { ConfigTransport } from '/home/seth/Documents/Websites/cake-engine-dev/cake-engine-dev/.codedoc/node_modules/@codedoc/core/dist/es6/transport/config.js';
import { TabSelector } from '/home/seth/Documents/Websites/cake-engine-dev/cake-engine-dev/.codedoc/node_modules/@codedoc/core/dist/es6/components/tabs/selector.js';
import { CollapseControl } from '/home/seth/Documents/Websites/cake-engine-dev/cake-engine-dev/.codedoc/node_modules/@codedoc/core/dist/es6/components/collapse/collapse-control.js';
import { ToCPrevNext } from '/home/seth/Documents/Websites/cake-engine-dev/cake-engine-dev/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/prevnext/index.js';

const components = {
  '9ESQaOYnaijI7aoHE8Zt9w==': GithubSearch,
  'zJBvTexv/lXDjT2qOfKEkw==': ToCToggle,
  'UH/fjIWSesQn+Vd4rCLKvw==': DarkModeSwitch,
  'FFuMUTwxD4FpEvDiI/Dnmw==': ConfigTransport,
  'Br1S+TEy1DVehFr1R7j7FA==': TabSelector,
  '6K0Mu6N8JTkaimUoHikWtg==': CollapseControl,
  'sheD2tzupk4lXcrOv/AVow==': ToCPrevNext
};

const renderer = getRenderer();
const ogtransport = window.__sdh_transport;
window.__sdh_transport = function(id, hash, props) {
  if (hash in components) {
    const target = document.getElementById(id);
    renderer.render(renderer.create(components[hash], props)).after(target);
    target.remove();
  }
  else if (ogtransport) ogtransport(id, hash, props);
}
