import { Q as t } from './QBtn.edbf5d3d.js';
import { _ as o, t as s, L as c, z as e, x as r } from './index.70331f9c.js';
const a = {},
  l = {
    class: 'fullscreen bg-blue text-white text-center q-pa-md flex flex-center',
  },
  n = e('div', { style: { 'font-size': '30vh' } }, ' 404 ', -1),
  i = e(
    'div',
    { class: 'text-h2', style: { opacity: '.4' } },
    ' Oops. Nothing here... ',
    -1
  );
function d(_, f) {
  return (
    s(),
    c('div', l, [
      e('div', null, [
        n,
        i,
        r(t, {
          class: 'q-mt-xl',
          color: 'white',
          'text-color': 'blue',
          unelevated: '',
          to: '/',
          label: 'Go Home',
          'no-caps': '',
        }),
      ]),
    ])
  );
}
var m = o(a, [['render', d]]);
export { m as default };
