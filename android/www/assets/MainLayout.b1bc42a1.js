import {
  c as T,
  h as W,
  a as Z,
  b as j,
  g as ee,
  d as te,
  Q as ne,
} from './QBtn.edbf5d3d.js';
import {
  c as f,
  h,
  r as y,
  i as K,
  o as O,
  a as P,
  n as X,
  b as A,
  g as _,
  l as F,
  d as Y,
  e as q,
  w as x,
  f as D,
  p as G,
  j as oe,
  k as R,
  m as le,
  q as ie,
  s as re,
  t as ae,
  u as se,
  v as Q,
  x as L,
  y as ue,
  z as ce,
  A as de,
} from './index.70331f9c.js';
var fe = T({
    name: 'QToolbarTitle',
    props: { shrink: Boolean },
    setup(e, { slots: a }) {
      const n = f(
        () =>
          'q-toolbar__title ellipsis' + (e.shrink === !0 ? ' col-shrink' : '')
      );
      return () => h('div', { class: n.value }, W(a.default));
    },
  }),
  ve = T({
    name: 'QToolbar',
    props: { inset: Boolean },
    setup(e, { slots: a }) {
      const n = f(
        () =>
          'q-toolbar row no-wrap items-center' +
          (e.inset === !0 ? ' q-toolbar--inset' : '')
      );
      return () => h('div', { class: n.value, role: 'toolbar' }, W(a.default));
    },
  });
function he() {
  const e = y(!K.value);
  return (
    e.value === !1 &&
      O(() => {
        e.value = !0;
      }),
    e
  );
}
const J = typeof ResizeObserver != 'undefined',
  U =
    J === !0
      ? {}
      : {
          style:
            'display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;',
          url: 'about:blank',
        };
var N = T({
    name: 'QResizeObserver',
    props: { debounce: { type: [String, Number], default: 100 } },
    emits: ['resize'],
    setup(e, { emit: a }) {
      let n = null,
        t,
        l = { width: -1, height: -1 };
      function s(u) {
        u === !0 || e.debounce === 0 || e.debounce === '0'
          ? c()
          : n === null && (n = setTimeout(c, e.debounce));
      }
      function c() {
        if ((n !== null && (clearTimeout(n), (n = null)), t)) {
          const { offsetWidth: u, offsetHeight: i } = t;
          (u !== l.width || i !== l.height) &&
            ((l = { width: u, height: i }), a('resize', l));
        }
      }
      const { proxy: m } = _();
      if (((m.trigger = s), J === !0)) {
        let u;
        const i = (g) => {
          (t = m.$el.parentNode),
            t
              ? ((u = new ResizeObserver(s)), u.observe(t), c())
              : g !== !0 &&
                A(() => {
                  i(!0);
                });
        };
        return (
          O(() => {
            i();
          }),
          P(() => {
            n !== null && clearTimeout(n),
              u !== void 0 &&
                (u.disconnect !== void 0
                  ? u.disconnect()
                  : t && u.unobserve(t));
          }),
          X
        );
      } else {
        let g = function () {
            n !== null && (clearTimeout(n), (n = null)),
              i !== void 0 &&
                (i.removeEventListener !== void 0 &&
                  i.removeEventListener('resize', s, F.passive),
                (i = void 0));
          },
          p = function () {
            g(),
              t &&
                t.contentDocument &&
                ((i = t.contentDocument.defaultView),
                i.addEventListener('resize', s, F.passive),
                c());
          };
        const u = he();
        let i;
        return (
          O(() => {
            A(() => {
              (t = m.$el), t && p();
            });
          }),
          P(g),
          () => {
            if (u.value === !0)
              return h('object', {
                style: U.style,
                tabindex: -1,
                type: 'text/html',
                data: U.url,
                'aria-hidden': 'true',
                onLoad: p,
              });
          }
        );
      }
    },
  }),
  me = T({
    name: 'QHeader',
    props: {
      modelValue: { type: Boolean, default: !0 },
      reveal: Boolean,
      revealOffset: { type: Number, default: 250 },
      bordered: Boolean,
      elevated: Boolean,
      heightHint: { type: [String, Number], default: 50 },
    },
    emits: ['reveal', 'focusin'],
    setup(e, { slots: a, emit: n }) {
      const {
          proxy: { $q: t },
        } = _(),
        l = Y(D, q);
      if (l === q)
        return console.error('QHeader needs to be child of QLayout'), q;
      const s = y(parseInt(e.heightHint, 10)),
        c = y(!0),
        m = f(
          () =>
            e.reveal === !0 ||
            l.view.value.indexOf('H') > -1 ||
            (t.platform.is.ios && l.isContainer.value === !0)
        ),
        u = f(() => {
          if (e.modelValue !== !0) return 0;
          if (m.value === !0) return c.value === !0 ? s.value : 0;
          const o = s.value - l.scroll.value.position;
          return o > 0 ? o : 0;
        }),
        i = f(() => e.modelValue !== !0 || (m.value === !0 && c.value !== !0)),
        g = f(() => e.modelValue === !0 && i.value === !0 && e.reveal === !0),
        p = f(
          () =>
            'q-header q-layout__section--marginal ' +
            (m.value === !0 ? 'fixed' : 'absolute') +
            '-top' +
            (e.bordered === !0 ? ' q-header--bordered' : '') +
            (i.value === !0 ? ' q-header--hidden' : '') +
            (e.modelValue !== !0 ? ' q-layout--prevent-focus' : '')
        ),
        z = f(() => {
          const o = l.rows.value.top,
            b = {};
          return (
            o[0] === 'l' &&
              l.left.space === !0 &&
              (b[t.lang.rtl === !0 ? 'right' : 'left'] = `${l.left.size}px`),
            o[2] === 'r' &&
              l.right.space === !0 &&
              (b[t.lang.rtl === !0 ? 'left' : 'right'] = `${l.right.size}px`),
            b
          );
        });
      function d(o, b) {
        l.update('header', o, b);
      }
      function w(o, b) {
        o.value !== b && (o.value = b);
      }
      function E({ height: o }) {
        w(s, o), d('size', o);
      }
      function V(o) {
        g.value === !0 && w(c, !0), n('focusin', o);
      }
      x(
        () => e.modelValue,
        (o) => {
          d('space', o), w(c, !0), l.animate();
        }
      ),
        x(u, (o) => {
          d('offset', o);
        }),
        x(
          () => e.reveal,
          (o) => {
            o === !1 && w(c, e.modelValue);
          }
        ),
        x(c, (o) => {
          l.animate(), n('reveal', o);
        }),
        x(l.scroll, (o) => {
          e.reveal === !0 &&
            w(
              c,
              o.direction === 'up' ||
                o.position <= e.revealOffset ||
                o.position - o.inflectionPoint < 100
            );
        });
      const C = {};
      return (
        (l.instances.header = C),
        e.modelValue === !0 && d('size', s.value),
        d('space', e.modelValue),
        d('offset', u.value),
        P(() => {
          l.instances.header === C &&
            ((l.instances.header = void 0),
            d('size', 0),
            d('offset', 0),
            d('space', !1));
        }),
        () => {
          const o = Z(a.default, []);
          return (
            e.elevated === !0 &&
              o.push(
                h('div', {
                  class:
                    'q-layout__shadow absolute-full overflow-hidden no-pointer-events',
                })
              ),
            o.push(h(N, { debounce: 0, onResize: E })),
            h('header', { class: p.value, style: z.value, onFocusin: V }, o)
          );
        }
      );
    },
  }),
  ge = T({
    name: 'QPageContainer',
    setup(e, { slots: a }) {
      const {
          proxy: { $q: n },
        } = _(),
        t = Y(D, q);
      if (t === q)
        return console.error('QPageContainer needs to be child of QLayout'), q;
      G(oe, !0);
      const l = f(() => {
        const s = {};
        return (
          t.header.space === !0 && (s.paddingTop = `${t.header.size}px`),
          t.right.space === !0 &&
            (s[
              `padding${n.lang.rtl === !0 ? 'Left' : 'Right'}`
            ] = `${t.right.size}px`),
          t.footer.space === !0 && (s.paddingBottom = `${t.footer.size}px`),
          t.left.space === !0 &&
            (s[
              `padding${n.lang.rtl === !0 ? 'Right' : 'Left'}`
            ] = `${t.left.size}px`),
          s
        );
      });
      return () =>
        h('div', { class: 'q-page-container', style: l.value }, W(a.default));
    },
  });
const pe = [
  null,
  document,
  document.body,
  document.scrollingElement,
  document.documentElement,
];
function be(e, a) {
  let n = ee(a);
  if (n === void 0) {
    if (e == null) return window;
    n = e.closest('.scroll,.scroll-y,.overflow-auto');
  }
  return pe.includes(n) ? window : n;
}
function we(e) {
  return e === window
    ? window.pageYOffset || window.scrollY || document.body.scrollTop || 0
    : e.scrollTop;
}
function ye(e) {
  return e === window
    ? window.pageXOffset || window.scrollX || document.body.scrollLeft || 0
    : e.scrollLeft;
}
let H;
function k() {
  if (H !== void 0) return H;
  const e = document.createElement('p'),
    a = document.createElement('div');
  j(e, { width: '100%', height: '200px' }),
    j(a, {
      position: 'absolute',
      top: '0px',
      left: '0px',
      visibility: 'hidden',
      width: '200px',
      height: '150px',
      overflow: 'hidden',
    }),
    a.appendChild(e),
    document.body.appendChild(a);
  const n = e.offsetWidth;
  a.style.overflow = 'scroll';
  let t = e.offsetWidth;
  return n === t && (t = a.clientWidth), a.remove(), (H = n - t), H;
}
const { passive: I } = F,
  ze = ['both', 'horizontal', 'vertical'];
var xe = T({
    name: 'QScrollObserver',
    props: {
      axis: {
        type: String,
        validator: (e) => ze.includes(e),
        default: 'vertical',
      },
      debounce: [String, Number],
      scrollTarget: { default: void 0 },
    },
    emits: ['scroll'],
    setup(e, { emit: a }) {
      const n = {
        position: { top: 0, left: 0 },
        direction: 'down',
        directionChanged: !1,
        delta: { top: 0, left: 0 },
        inflectionPoint: { top: 0, left: 0 },
      };
      let t = null,
        l,
        s;
      x(
        () => e.scrollTarget,
        () => {
          u(), m();
        }
      );
      function c() {
        t !== null && t();
        const p = Math.max(0, we(l)),
          z = ye(l),
          d = { top: p - n.position.top, left: z - n.position.left };
        if (
          (e.axis === 'vertical' && d.top === 0) ||
          (e.axis === 'horizontal' && d.left === 0)
        )
          return;
        const w =
          Math.abs(d.top) >= Math.abs(d.left)
            ? d.top < 0
              ? 'up'
              : 'down'
            : d.left < 0
            ? 'left'
            : 'right';
        (n.position = { top: p, left: z }),
          (n.directionChanged = n.direction !== w),
          (n.delta = d),
          n.directionChanged === !0 &&
            ((n.direction = w), (n.inflectionPoint = n.position)),
          a('scroll', { ...n });
      }
      function m() {
        (l = be(s, e.scrollTarget)), l.addEventListener('scroll', i, I), i(!0);
      }
      function u() {
        l !== void 0 && (l.removeEventListener('scroll', i, I), (l = void 0));
      }
      function i(p) {
        if (p === !0 || e.debounce === 0 || e.debounce === '0') c();
        else if (t === null) {
          const [z, d] = e.debounce
            ? [setTimeout(c, e.debounce), clearTimeout]
            : [requestAnimationFrame(c), cancelAnimationFrame];
          t = () => {
            d(z), (t = null);
          };
        }
      }
      const { proxy: g } = _();
      return (
        x(() => g.$q.lang.rtl, c),
        O(() => {
          (s = g.$el.parentNode), m();
        }),
        P(() => {
          t !== null && t(), u();
        }),
        Object.assign(g, { trigger: i, getPosition: () => n }),
        X
      );
    },
  }),
  Se = T({
    name: 'QLayout',
    props: {
      container: Boolean,
      view: {
        type: String,
        default: 'hhh lpr fff',
        validator: (e) => /^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase()),
      },
      onScroll: Function,
      onScrollHeight: Function,
      onResize: Function,
    },
    setup(e, { slots: a, emit: n }) {
      const {
          proxy: { $q: t },
        } = _(),
        l = y(null),
        s = y(t.screen.height),
        c = y(e.container === !0 ? 0 : t.screen.width),
        m = y({ position: 0, direction: 'down', inflectionPoint: 0 }),
        u = y(0),
        i = y(K.value === !0 ? 0 : k()),
        g = f(
          () =>
            'q-layout q-layout--' +
            (e.container === !0 ? 'containerized' : 'standard')
        ),
        p = f(() =>
          e.container === !1 ? { minHeight: t.screen.height + 'px' } : null
        ),
        z = f(() =>
          i.value !== 0
            ? { [t.lang.rtl === !0 ? 'left' : 'right']: `${i.value}px` }
            : null
        ),
        d = f(() =>
          i.value !== 0
            ? {
                [t.lang.rtl === !0 ? 'right' : 'left']: 0,
                [t.lang.rtl === !0 ? 'left' : 'right']: `-${i.value}px`,
                width: `calc(100% + ${i.value}px)`,
              }
            : null
        );
      function w(r) {
        if (e.container === !0 || document.qScrollPrevented !== !0) {
          const v = {
            position: r.position.top,
            direction: r.direction,
            directionChanged: r.directionChanged,
            inflectionPoint: r.inflectionPoint.top,
            delta: r.delta.top,
          };
          (m.value = v), e.onScroll !== void 0 && n('scroll', v);
        }
      }
      function E(r) {
        const { height: v, width: S } = r;
        let $ = !1;
        s.value !== v &&
          (($ = !0),
          (s.value = v),
          e.onScrollHeight !== void 0 && n('scrollHeight', v),
          C()),
          c.value !== S && (($ = !0), (c.value = S)),
          $ === !0 && e.onResize !== void 0 && n('resize', r);
      }
      function V({ height: r }) {
        u.value !== r && ((u.value = r), C());
      }
      function C() {
        if (e.container === !0) {
          const r = s.value > u.value ? k() : 0;
          i.value !== r && (i.value = r);
        }
      }
      let o = null;
      const b = {
        instances: {},
        view: f(() => e.view),
        isContainer: f(() => e.container),
        rootRef: l,
        height: s,
        containerHeight: u,
        scrollbarWidth: i,
        totalWidth: f(() => c.value + i.value),
        rows: f(() => {
          const r = e.view.toLowerCase().split(' ');
          return {
            top: r[0].split(''),
            middle: r[1].split(''),
            bottom: r[2].split(''),
          };
        }),
        header: R({ size: 0, offset: 0, space: !1 }),
        right: R({ size: 300, offset: 0, space: !1 }),
        footer: R({ size: 0, offset: 0, space: !1 }),
        left: R({ size: 300, offset: 0, space: !1 }),
        scroll: m,
        animate() {
          o !== null
            ? clearTimeout(o)
            : document.body.classList.add('q-body--layout-animate'),
            (o = setTimeout(() => {
              (o = null),
                document.body.classList.remove('q-body--layout-animate');
            }, 155));
        },
        update(r, v, S) {
          b[r][v] = S;
        },
      };
      if ((G(D, b), k() > 0)) {
        let S = function () {
            (r = null), v.classList.remove('hide-scrollbar');
          },
          $ = function () {
            if (r === null) {
              if (v.scrollHeight > t.screen.height) return;
              v.classList.add('hide-scrollbar');
            } else clearTimeout(r);
            r = setTimeout(S, 300);
          },
          B = function (M) {
            r !== null && M === 'remove' && (clearTimeout(r), S()),
              window[`${M}EventListener`]('resize', $);
          },
          r = null;
        const v = document.body;
        x(() => (e.container !== !0 ? 'add' : 'remove'), B),
          e.container !== !0 && B('add'),
          le(() => {
            B('remove');
          });
      }
      return () => {
        const r = te(a.default, [
            h(xe, { onScroll: w }),
            h(N, { onResize: E }),
          ]),
          v = h(
            'div',
            {
              class: g.value,
              style: p.value,
              ref: e.container === !0 ? void 0 : l,
              tabindex: -1,
            },
            r
          );
        return e.container === !0
          ? h('div', { class: 'q-layout-container overflow-hidden', ref: l }, [
              h(N, { onResize: V }),
              h('div', { class: 'absolute-full', style: z.value }, [
                h('div', { class: 'scroll', style: d.value }, [v]),
              ]),
            ])
          : v;
      };
    },
  });
const qe = ie({
  __name: 'MainLayout',
  setup(e) {
    const a = y(!1);
    function n() {
      a.value = !a.value;
    }
    return (t, l) => {
      const s = re('router-view');
      return (
        ae(),
        se(
          Se,
          { view: 'lHh Lpr lFf' },
          {
            default: Q(() => [
              L(
                me,
                { elevated: '' },
                {
                  default: Q(() => [
                    L(ve, null, {
                      default: Q(() => [
                        L(ne, {
                          flat: '',
                          dense: '',
                          round: '',
                          icon: 'menu',
                          'aria-label': 'Menu',
                          onClick: n,
                        }),
                        L(fe, null, {
                          default: Q(() => [ue(' Quasar App ')]),
                          _: 1,
                        }),
                        ce('div', null, 'Quasar v' + de(t.$q.version), 1),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }
              ),
              L(ge, null, { default: Q(() => [L(s)]), _: 1 }),
            ]),
            _: 1,
          }
        )
      );
    };
  },
});
export { qe as default };
