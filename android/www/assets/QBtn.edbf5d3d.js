import {
  c as s,
  B as ae,
  q as de,
  h as v,
  g as F,
  C as fe,
  D as N,
  E as ve,
  F as ge,
  G as re,
  H as me,
  r as H,
  a as he,
  I as be,
  J as P,
  T as ye,
  l as ke,
  K as pe,
} from './index.70331f9c.js';
const Q = { xs: 18, sm: 24, md: 32, lg: 38, xl: 46 },
  ie = { size: String };
function ue(e, t = Q) {
  return s(() =>
    e.size !== void 0
      ? { fontSize: e.size in t ? `${t[e.size]}px` : e.size }
      : null
  );
}
const V = (e) => ae(de(e)),
  xe = (e) => ae(e);
function qe(e, t) {
  return (e !== void 0 && e()) || t;
}
function Ze(e, t) {
  if (e !== void 0) {
    const a = e();
    if (a != null) return a.slice();
  }
  return t;
}
function z(e, t) {
  return e !== void 0 ? t.concat(e()) : t;
}
const U = '0 0 24 24',
  W = (e) => e,
  D = (e) => `ionicons ${e}`,
  le = {
    'mdi-': (e) => `mdi ${e}`,
    'icon-': W,
    'bt-': (e) => `bt ${e}`,
    'eva-': (e) => `eva ${e}`,
    'ion-md': D,
    'ion-ios': D,
    'ion-logo': D,
    'iconfont ': W,
    'ti-': (e) => `themify-icon ${e}`,
    'bi-': (e) => `bootstrap-icons ${e}`,
  },
  oe = { o_: '-outlined', r_: '-round', s_: '-sharp' },
  se = { sym_o_: '-outlined', sym_r_: '-rounded', sym_s_: '-sharp' },
  $e = new RegExp('^(' + Object.keys(le).join('|') + ')'),
  Ee = new RegExp('^(' + Object.keys(oe).join('|') + ')'),
  X = new RegExp('^(' + Object.keys(se).join('|') + ')'),
  Se = /^[Mm]\s?[-+]?\.?\d/,
  we = /^img:/,
  Ce = /^svguse:/,
  Re = /^ion-/,
  Be = /^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;
var G = V({
  name: 'QIcon',
  props: {
    ...ie,
    tag: { type: String, default: 'i' },
    name: String,
    color: String,
    left: Boolean,
    right: Boolean,
  },
  setup(e, { slots: t }) {
    const {
        proxy: { $q: a },
      } = F(),
      n = ue(e),
      l = s(
        () =>
          'q-icon' +
          (e.left === !0 ? ' on-left' : '') +
          (e.right === !0 ? ' on-right' : '') +
          (e.color !== void 0 ? ` text-${e.color}` : '')
      ),
      f = s(() => {
        let c,
          r = e.name;
        if (r === 'none' || !r) return { none: !0 };
        if (a.iconMapFn !== null) {
          const o = a.iconMapFn(r);
          if (o !== void 0)
            if (o.icon !== void 0) {
              if (((r = o.icon), r === 'none' || !r)) return { none: !0 };
            } else
              return {
                cls: o.cls,
                content: o.content !== void 0 ? o.content : ' ',
              };
        }
        if (Se.test(r) === !0) {
          const [o, y = U] = r.split('|');
          return {
            svg: !0,
            viewBox: y,
            nodes: o.split('&&').map((u) => {
              const [k, h, p] = u.split('@@');
              return v('path', { style: h, d: k, transform: p });
            }),
          };
        }
        if (we.test(r) === !0) return { img: !0, src: r.substring(4) };
        if (Ce.test(r) === !0) {
          const [o, y = U] = r.split('|');
          return { svguse: !0, src: o.substring(7), viewBox: y };
        }
        let q = ' ';
        const b = r.match($e);
        if (b !== null) c = le[b[1]](r);
        else if (Be.test(r) === !0) c = r;
        else if (Re.test(r) === !0)
          c = `ionicons ion-${
            a.platform.is.ios === !0 ? 'ios' : 'md'
          }${r.substring(3)}`;
        else if (X.test(r) === !0) {
          c = 'notranslate material-symbols';
          const o = r.match(X);
          o !== null && ((r = r.substring(6)), (c += se[o[1]])), (q = r);
        } else {
          c = 'notranslate material-icons';
          const o = r.match(Ee);
          o !== null && ((r = r.substring(2)), (c += oe[o[1]])), (q = r);
        }
        return { cls: c, content: q };
      });
    return () => {
      const c = {
        class: l.value,
        style: n.value,
        'aria-hidden': 'true',
        role: 'presentation',
      };
      return f.value.none === !0
        ? v(e.tag, c, qe(t.default))
        : f.value.img === !0
        ? v('span', c, z(t.default, [v('img', { src: f.value.src })]))
        : f.value.svg === !0
        ? v(
            'span',
            c,
            z(t.default, [
              v(
                'svg',
                { viewBox: f.value.viewBox || '0 0 24 24' },
                f.value.nodes
              ),
            ])
          )
        : f.value.svguse === !0
        ? v(
            'span',
            c,
            z(t.default, [
              v('svg', { viewBox: f.value.viewBox }, [
                v('use', { 'xlink:href': f.value.src }),
              ]),
            ])
          )
        : (f.value.cls !== void 0 && (c.class += ' ' + f.value.cls),
          v(e.tag, c, z(t.default, [f.value.content])));
    };
  },
});
const Le = { size: { type: [Number, String], default: '1em' }, color: String };
function _e(e) {
  return {
    cSize: s(() => (e.size in Q ? `${Q[e.size]}px` : e.size)),
    classes: s(() => 'q-spinner' + (e.color ? ` text-${e.color}` : '')),
  };
}
var Pe = V({
  name: 'QSpinner',
  props: { ...Le, thickness: { type: Number, default: 5 } },
  setup(e) {
    const { cSize: t, classes: a } = _e(e);
    return () =>
      v(
        'svg',
        {
          class: a.value + ' q-spinner-mat',
          width: t.value,
          height: t.value,
          viewBox: '25 25 50 50',
        },
        [
          v('circle', {
            class: 'path',
            cx: '50',
            cy: '50',
            r: '20',
            fill: 'none',
            stroke: 'currentColor',
            'stroke-width': e.thickness,
            'stroke-miterlimit': '10',
          }),
        ]
      );
  },
});
function Te(e, t) {
  const a = e.style;
  for (const n in t) a[n] = t[n];
}
function et(e) {
  if (e == null) return;
  if (typeof e == 'string')
    try {
      return document.querySelector(e) || void 0;
    } catch {
      return;
    }
  const t = fe(e);
  if (t) return t.$el || t;
}
function Oe(e, t = 250) {
  let a = !1,
    n;
  return function () {
    return (
      a === !1 &&
        ((a = !0),
        setTimeout(() => {
          a = !1;
        }, t),
        (n = e.apply(this, arguments))),
      n
    );
  };
}
function J(e, t, a, n) {
  a.modifiers.stop === !0 && re(e);
  const l = a.modifiers.color;
  let f = a.modifiers.center;
  f = f === !0 || n === !0;
  const c = document.createElement('span'),
    r = document.createElement('span'),
    q = me(e),
    { left: b, top: o, width: y, height: u } = t.getBoundingClientRect(),
    k = Math.sqrt(y * y + u * u),
    h = k / 2,
    p = `${(y - k) / 2}px`,
    d = f ? p : `${q.left - b - h}px`,
    x = `${(u - k) / 2}px`,
    _ = f ? x : `${q.top - o - h}px`;
  (r.className = 'q-ripple__inner'),
    Te(r, {
      height: `${k}px`,
      width: `${k}px`,
      transform: `translate3d(${d},${_},0) scale3d(.2,.2,1)`,
      opacity: 0,
    }),
    (c.className = `q-ripple${l ? ' text-' + l : ''}`),
    c.setAttribute('dir', 'ltr'),
    c.appendChild(r),
    t.appendChild(c);
  const B = () => {
    c.remove(), clearTimeout(L);
  };
  a.abort.push(B);
  let L = setTimeout(() => {
    r.classList.add('q-ripple__inner--enter'),
      (r.style.transform = `translate3d(${p},${x},0) scale3d(1,1,1)`),
      (r.style.opacity = 0.2),
      (L = setTimeout(() => {
        r.classList.remove('q-ripple__inner--enter'),
          r.classList.add('q-ripple__inner--leave'),
          (r.style.opacity = 0),
          (L = setTimeout(() => {
            c.remove(), a.abort.splice(a.abort.indexOf(B), 1);
          }, 275));
      }, 250));
  }, 50);
}
function Y(e, { modifiers: t, value: a, arg: n }) {
  const l = Object.assign({}, e.cfg.ripple, t, a);
  e.modifiers = {
    early: l.early === !0,
    stop: l.stop === !0,
    center: l.center === !0,
    color: l.color || n,
    keyCodes: [].concat(l.keyCodes || 13),
  };
}
var Ae = xe({
  name: 'ripple',
  beforeMount(e, t) {
    const a = t.instance.$.appContext.config.globalProperties.$q.config || {};
    if (a.ripple === !1) return;
    const n = {
      cfg: a,
      enabled: t.value !== !1,
      modifiers: {},
      abort: [],
      start(l) {
        n.enabled === !0 &&
          l.qSkipRipple !== !0 &&
          l.type === (n.modifiers.early === !0 ? 'pointerdown' : 'click') &&
          J(l, e, n, l.qKeyEvent === !0);
      },
      keystart: Oe((l) => {
        n.enabled === !0 &&
          l.qSkipRipple !== !0 &&
          N(l, n.modifiers.keyCodes) === !0 &&
          l.type === `key${n.modifiers.early === !0 ? 'down' : 'up'}` &&
          J(l, e, n, !0);
      }, 300),
    };
    Y(n, t),
      (e.__qripple = n),
      ve(n, 'main', [
        [e, 'pointerdown', 'start', 'passive'],
        [e, 'click', 'start', 'passive'],
        [e, 'keydown', 'keystart', 'passive'],
        [e, 'keyup', 'keystart', 'passive'],
      ]);
  },
  updated(e, t) {
    if (t.oldValue !== t.value) {
      const a = e.__qripple;
      a !== void 0 &&
        ((a.enabled = t.value !== !1),
        a.enabled === !0 && Object(t.value) === t.value && Y(a, t));
    }
  },
  beforeUnmount(e) {
    const t = e.__qripple;
    t !== void 0 &&
      (t.abort.forEach((a) => {
        a();
      }),
      ge(t, 'main'),
      delete e._qripple);
  },
});
const ce = {
    left: 'start',
    center: 'center',
    right: 'end',
    between: 'between',
    around: 'around',
    evenly: 'evenly',
    stretch: 'stretch',
  },
  Me = Object.keys(ce),
  je = { align: { type: String, validator: (e) => Me.includes(e) } };
function ze(e) {
  return s(() => {
    const t =
      e.align === void 0 ? (e.vertical === !0 ? 'stretch' : 'left') : e.align;
    return `${e.vertical === !0 ? 'items' : 'justify'}-${ce[t]}`;
  });
}
function Ke(e) {
  return e.appContext.config.globalProperties.$router !== void 0;
}
function Z(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : '';
}
function ee(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Ie(e, t) {
  for (const a in t) {
    const n = t[a],
      l = e[a];
    if (typeof n == 'string') {
      if (n !== l) return !1;
    } else if (
      Array.isArray(l) === !1 ||
      l.length !== n.length ||
      n.some((f, c) => f !== l[c])
    )
      return !1;
  }
  return !0;
}
function te(e, t) {
  return Array.isArray(t) === !0
    ? e.length === t.length && e.every((a, n) => a === t[n])
    : e.length === 1 && e[0] === t;
}
function De(e, t) {
  return Array.isArray(e) === !0
    ? te(e, t)
    : Array.isArray(t) === !0
    ? te(t, e)
    : e === t;
}
function Ne(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const a in e) if (De(e[a], t[a]) === !1) return !1;
  return !0;
}
const Qe = {
  to: [String, Object],
  replace: Boolean,
  exact: Boolean,
  activeClass: { type: String, default: 'q-router-link--active' },
  exactActiveClass: { type: String, default: 'q-router-link--exact-active' },
  href: String,
  target: String,
  disable: Boolean,
};
function Fe({ fallbackTag: e, useDisableForRouterLinkProps: t = !0 } = {}) {
  const a = F(),
    { props: n, proxy: l, emit: f } = a,
    c = Ke(a),
    r = s(() => n.disable !== !0 && n.href !== void 0),
    q =
      t === !0
        ? s(
            () =>
              c === !0 &&
              n.disable !== !0 &&
              r.value !== !0 &&
              n.to !== void 0 &&
              n.to !== null &&
              n.to !== ''
          )
        : s(
            () =>
              c === !0 &&
              r.value !== !0 &&
              n.to !== void 0 &&
              n.to !== null &&
              n.to !== ''
          ),
    b = s(() => (q.value === !0 ? _(n.to) : null)),
    o = s(() => b.value !== null),
    y = s(() => r.value === !0 || o.value === !0),
    u = s(() => (n.type === 'a' || y.value === !0 ? 'a' : n.tag || e || 'div')),
    k = s(() =>
      r.value === !0
        ? { href: n.href, target: n.target }
        : o.value === !0
        ? { href: b.value.href, target: n.target }
        : {}
    ),
    h = s(() => {
      if (o.value === !1) return -1;
      const { matched: g } = b.value,
        { length: $ } = g,
        S = g[$ - 1];
      if (S === void 0) return -1;
      const C = l.$route.matched;
      if (C.length === 0) return -1;
      const R = C.findIndex(ee.bind(null, S));
      if (R > -1) return R;
      const K = Z(g[$ - 2]);
      return $ > 1 && Z(S) === K && C[C.length - 1].path !== K
        ? C.findIndex(ee.bind(null, g[$ - 2]))
        : R;
    }),
    p = s(
      () =>
        o.value === !0 && h.value !== -1 && Ie(l.$route.params, b.value.params)
    ),
    d = s(
      () =>
        p.value === !0 &&
        h.value === l.$route.matched.length - 1 &&
        Ne(l.$route.params, b.value.params)
    ),
    x = s(() =>
      o.value === !0
        ? d.value === !0
          ? ` ${n.exactActiveClass} ${n.activeClass}`
          : n.exact === !0
          ? ''
          : p.value === !0
          ? ` ${n.activeClass}`
          : ''
        : ''
    );
  function _(g) {
    try {
      return l.$router.resolve(g);
    } catch {}
    return null;
  }
  function B(
    g,
    { returnRouterError: $, to: S = n.to, replace: C = n.replace } = {}
  ) {
    if (n.disable === !0) return g.preventDefault(), Promise.resolve(!1);
    if (
      g.metaKey ||
      g.altKey ||
      g.ctrlKey ||
      g.shiftKey ||
      (g.button !== void 0 && g.button !== 0) ||
      n.target === '_blank'
    )
      return Promise.resolve(!1);
    g.preventDefault();
    const R = l.$router[C === !0 ? 'replace' : 'push'](S);
    return $ === !0 ? R : R.then(() => {}).catch(() => {});
  }
  function L(g) {
    if (o.value === !0) {
      const $ = (S) => B(g, S);
      f('click', g, $), g.defaultPrevented !== !0 && $();
    } else f('click', g);
  }
  return {
    hasRouterLink: o,
    hasHrefLink: r,
    hasLink: y,
    linkTag: u,
    resolvedLink: b,
    linkIsActive: p,
    linkIsExactActive: d,
    linkClass: x,
    linkAttrs: k,
    getLink: _,
    navigateToRouterLink: B,
    navigateOnClick: L,
  };
}
const ne = { none: 0, xs: 4, sm: 8, md: 16, lg: 24, xl: 32 },
  Ve = { xs: 8, sm: 10, md: 14, lg: 20, xl: 24 },
  He = ['button', 'submit', 'reset'],
  Ue = /[^\s]\/[^\s]/,
  We = ['flat', 'outline', 'push', 'unelevated'],
  Xe = (e, t) =>
    e.flat === !0
      ? 'flat'
      : e.outline === !0
      ? 'outline'
      : e.push === !0
      ? 'push'
      : e.unelevated === !0
      ? 'unelevated'
      : t,
  Ge = {
    ...ie,
    ...Qe,
    type: { type: String, default: 'button' },
    label: [Number, String],
    icon: String,
    iconRight: String,
    ...We.reduce((e, t) => (e[t] = Boolean) && e, {}),
    square: Boolean,
    round: Boolean,
    rounded: Boolean,
    glossy: Boolean,
    size: String,
    fab: Boolean,
    fabMini: Boolean,
    padding: String,
    color: String,
    textColor: String,
    noCaps: Boolean,
    noWrap: Boolean,
    dense: Boolean,
    tabindex: [Number, String],
    ripple: { type: [Boolean, Object], default: !0 },
    align: { ...je.align, default: 'center' },
    stack: Boolean,
    stretch: Boolean,
    loading: { type: Boolean, default: null },
    disable: Boolean,
  };
function Je(e) {
  const t = ue(e, Ve),
    a = ze(e),
    {
      hasRouterLink: n,
      hasLink: l,
      linkTag: f,
      linkAttrs: c,
      navigateOnClick: r,
    } = Fe({ fallbackTag: 'button' }),
    q = s(() => {
      const d = e.fab === !1 && e.fabMini === !1 ? t.value : {};
      return e.padding !== void 0
        ? Object.assign({}, d, {
            padding: e.padding
              .split(/\s+/)
              .map((x) => (x in ne ? ne[x] + 'px' : x))
              .join(' '),
            minWidth: '0',
            minHeight: '0',
          })
        : d;
    }),
    b = s(() => e.rounded === !0 || e.fab === !0 || e.fabMini === !0),
    o = s(() => e.disable !== !0 && e.loading !== !0),
    y = s(() => (o.value === !0 ? e.tabindex || 0 : -1)),
    u = s(() => Xe(e, 'standard')),
    k = s(() => {
      const d = { tabindex: y.value };
      return (
        l.value === !0
          ? Object.assign(d, c.value)
          : He.includes(e.type) === !0 && (d.type = e.type),
        f.value === 'a'
          ? (e.disable === !0
              ? (d['aria-disabled'] = 'true')
              : d.href === void 0 && (d.role = 'button'),
            n.value !== !0 && Ue.test(e.type) === !0 && (d.type = e.type))
          : e.disable === !0 &&
            ((d.disabled = ''), (d['aria-disabled'] = 'true')),
        e.loading === !0 &&
          e.percentage !== void 0 &&
          Object.assign(d, {
            role: 'progressbar',
            'aria-valuemin': 0,
            'aria-valuemax': 100,
            'aria-valuenow': e.percentage,
          }),
        d
      );
    }),
    h = s(() => {
      let d;
      e.color !== void 0
        ? e.flat === !0 || e.outline === !0
          ? (d = `text-${e.textColor || e.color}`)
          : (d = `bg-${e.color} text-${e.textColor || 'white'}`)
        : e.textColor && (d = `text-${e.textColor}`);
      const x =
        e.round === !0
          ? 'round'
          : `rectangle${
              b.value === !0
                ? ' q-btn--rounded'
                : e.square === !0
                ? ' q-btn--square'
                : ''
            }`;
      return (
        `q-btn--${u.value} q-btn--${x}` +
        (d !== void 0 ? ' ' + d : '') +
        (o.value === !0
          ? ' q-btn--actionable q-focusable q-hoverable'
          : e.disable === !0
          ? ' disabled'
          : '') +
        (e.fab === !0
          ? ' q-btn--fab'
          : e.fabMini === !0
          ? ' q-btn--fab-mini'
          : '') +
        (e.noCaps === !0 ? ' q-btn--no-uppercase' : '') +
        (e.dense === !0 ? ' q-btn--dense' : '') +
        (e.stretch === !0 ? ' no-border-radius self-stretch' : '') +
        (e.glossy === !0 ? ' glossy' : '') +
        (e.square ? ' q-btn--square' : '')
      );
    }),
    p = s(
      () =>
        a.value +
        (e.stack === !0 ? ' column' : ' row') +
        (e.noWrap === !0 ? ' no-wrap text-no-wrap' : '') +
        (e.loading === !0 ? ' q-btn__content--hidden' : '')
    );
  return {
    classes: h,
    style: q,
    innerClasses: p,
    attributes: k,
    hasLink: l,
    linkTag: f,
    navigateOnClick: r,
    isActionable: o,
  };
}
const { passiveCapture: E } = ke;
let T = null,
  O = null,
  A = null;
var tt = V({
  name: 'QBtn',
  props: {
    ...Ge,
    percentage: Number,
    darkPercentage: Boolean,
    onTouchstart: [Function, Array],
  },
  emits: ['click', 'keydown', 'mousedown', 'keyup'],
  setup(e, { slots: t, emit: a }) {
    const { proxy: n } = F(),
      {
        classes: l,
        style: f,
        innerClasses: c,
        attributes: r,
        hasLink: q,
        linkTag: b,
        navigateOnClick: o,
        isActionable: y,
      } = Je(e),
      u = H(null),
      k = H(null);
    let h = null,
      p,
      d = null;
    const x = s(() => e.label !== void 0 && e.label !== null && e.label !== ''),
      _ = s(() =>
        e.disable === !0 || e.ripple === !1
          ? !1
          : {
              keyCodes: q.value === !0 ? [13, 32] : [13],
              ...(e.ripple === !0 ? {} : e.ripple),
            }
      ),
      B = s(() => ({ center: e.round })),
      L = s(() => {
        const i = Math.max(0, Math.min(100, e.percentage));
        return i > 0
          ? {
              transition: 'transform 0.6s',
              transform: `translateX(${i - 100}%)`,
            }
          : {};
      }),
      g = s(() => {
        if (e.loading === !0)
          return {
            onMousedown: j,
            onTouchstart: j,
            onClick: j,
            onKeydown: j,
            onKeyup: j,
          };
        if (y.value === !0) {
          const i = { onClick: S, onKeydown: C, onMousedown: K };
          if (n.$q.platform.has.touch === !0) {
            const m = e.onTouchstart !== void 0 ? '' : 'Passive';
            i[`onTouchstart${m}`] = R;
          }
          return i;
        }
        return { onClick: P };
      }),
      $ = s(() => ({
        ref: u,
        class: 'q-btn q-btn-item non-selectable no-outline ' + l.value,
        style: f.value,
        ...r.value,
        ...g.value,
      }));
    function S(i) {
      if (u.value !== null) {
        if (i !== void 0) {
          if (i.defaultPrevented === !0) return;
          const m = document.activeElement;
          if (
            e.type === 'submit' &&
            m !== document.body &&
            u.value.contains(m) === !1 &&
            m.contains(u.value) === !1
          ) {
            u.value.focus();
            const I = () => {
              document.removeEventListener('keydown', P, !0),
                document.removeEventListener('keyup', I, E),
                u.value !== null && u.value.removeEventListener('blur', I, E);
            };
            document.addEventListener('keydown', P, !0),
              document.addEventListener('keyup', I, E),
              u.value.addEventListener('blur', I, E);
          }
        }
        o(i);
      }
    }
    function C(i) {
      u.value !== null &&
        (a('keydown', i),
        N(i, [13, 32]) === !0 &&
          O !== u.value &&
          (O !== null && M(),
          i.defaultPrevented !== !0 &&
            (u.value.focus(),
            (O = u.value),
            u.value.classList.add('q-btn--active'),
            document.addEventListener('keyup', w, !0),
            u.value.addEventListener('blur', w, E)),
          P(i)));
    }
    function R(i) {
      u.value !== null &&
        (a('touchstart', i),
        i.defaultPrevented !== !0 &&
          (T !== u.value &&
            (T !== null && M(),
            (T = u.value),
            (h = i.target),
            h.addEventListener('touchcancel', w, E),
            h.addEventListener('touchend', w, E)),
          (p = !0),
          d !== null && clearTimeout(d),
          (d = setTimeout(() => {
            (d = null), (p = !1);
          }, 200))));
    }
    function K(i) {
      u.value !== null &&
        ((i.qSkipRipple = p === !0),
        a('mousedown', i),
        i.defaultPrevented !== !0 &&
          A !== u.value &&
          (A !== null && M(),
          (A = u.value),
          u.value.classList.add('q-btn--active'),
          document.addEventListener('mouseup', w, E)));
    }
    function w(i) {
      if (
        u.value !== null &&
        !(
          i !== void 0 &&
          i.type === 'blur' &&
          document.activeElement === u.value
        )
      ) {
        if (i !== void 0 && i.type === 'keyup') {
          if (O === u.value && N(i, [13, 32]) === !0) {
            const m = new MouseEvent('click', i);
            (m.qKeyEvent = !0),
              i.defaultPrevented === !0 && pe(m),
              i.cancelBubble === !0 && re(m),
              u.value.dispatchEvent(m),
              P(i),
              (i.qKeyEvent = !0);
          }
          a('keyup', i);
        }
        M();
      }
    }
    function M(i) {
      const m = k.value;
      i !== !0 &&
        (T === u.value || A === u.value) &&
        m !== null &&
        m !== document.activeElement &&
        (m.setAttribute('tabindex', -1), m.focus()),
        T === u.value &&
          (h !== null &&
            (h.removeEventListener('touchcancel', w, E),
            h.removeEventListener('touchend', w, E)),
          (T = h = null)),
        A === u.value &&
          (document.removeEventListener('mouseup', w, E), (A = null)),
        O === u.value &&
          (document.removeEventListener('keyup', w, !0),
          u.value !== null && u.value.removeEventListener('blur', w, E),
          (O = null)),
        u.value !== null && u.value.classList.remove('q-btn--active');
    }
    function j(i) {
      P(i), (i.qSkipRipple = !0);
    }
    return (
      he(() => {
        M(!0);
      }),
      Object.assign(n, { click: S }),
      () => {
        let i = [];
        e.icon !== void 0 &&
          i.push(
            v(G, {
              name: e.icon,
              left: e.stack !== !0 && x.value === !0,
              role: 'img',
              'aria-hidden': 'true',
            })
          ),
          x.value === !0 && i.push(v('span', { class: 'block' }, [e.label])),
          (i = z(t.default, i)),
          e.iconRight !== void 0 &&
            e.round === !1 &&
            i.push(
              v(G, {
                name: e.iconRight,
                right: e.stack !== !0 && x.value === !0,
                role: 'img',
                'aria-hidden': 'true',
              })
            );
        const m = [v('span', { class: 'q-focus-helper', ref: k })];
        return (
          e.loading === !0 &&
            e.percentage !== void 0 &&
            m.push(
              v(
                'span',
                {
                  class:
                    'q-btn__progress absolute-full overflow-hidden' +
                    (e.darkPercentage === !0 ? ' q-btn__progress--dark' : ''),
                },
                [
                  v('span', {
                    class: 'q-btn__progress-indicator fit block',
                    style: L.value,
                  }),
                ]
              )
            ),
          m.push(
            v(
              'span',
              {
                class:
                  'q-btn__content text-center col items-center q-anchor--skip ' +
                  c.value,
              },
              i
            )
          ),
          e.loading !== null &&
            m.push(
              v(ye, { name: 'q-transition--fade' }, () =>
                e.loading === !0
                  ? [
                      v(
                        'span',
                        {
                          key: 'loading',
                          class: 'absolute-full flex flex-center',
                        },
                        t.loading !== void 0 ? t.loading() : [v(Pe)]
                      ),
                    ]
                  : null
              )
            ),
          be(v(b.value, $.value, m), [[Ae, _.value, void 0, B.value]])
        );
      }
    );
  },
});
export { tt as Q, Ze as a, Te as b, V as c, z as d, et as g, qe as h };
