import { c as re, h as ne, Q as se } from './QBtn.edbf5d3d.js';
import {
  d as R,
  e as L,
  c as B,
  h as oe,
  f as ae,
  j as ie,
  g as ce,
  q as le,
  t as de,
  u as ue,
  v as fe,
  x as ge,
} from './index.70331f9c.js';
var me = re({
  name: 'QPage',
  props: { padding: Boolean, styleFn: Function },
  setup(r, { slots: e }) {
    const {
        proxy: { $q: t },
      } = ce(),
      n = R(ae, L);
    if (n === L)
      return console.error('QPage needs to be a deep child of QLayout'), L;
    if (R(ie, L) === L)
      return console.error('QPage needs to be child of QPageContainer'), L;
    const o = B(() => {
        const s =
          (n.header.space === !0 ? n.header.size : 0) +
          (n.footer.space === !0 ? n.footer.size : 0);
        if (typeof r.styleFn == 'function') {
          const u =
            n.isContainer.value === !0
              ? n.containerHeight.value
              : t.screen.height;
          return r.styleFn(s, u);
        }
        return {
          minHeight:
            n.isContainer.value === !0
              ? n.containerHeight.value - s + 'px'
              : t.screen.height === 0
              ? s !== 0
                ? `calc(100vh - ${s}px)`
                : '100vh'
              : t.screen.height - s + 'px',
        };
      }),
      i = B(() => `q-page${r.padding === !0 ? ' q-layout-padding' : ''}`);
    return () => oe('main', { class: i.value, style: o.value }, ne(e.default));
  },
});
/*! Capacitor: https://capacitorjs.com/ - MIT License */ const he = (r) => {
    const e = new Map();
    e.set('web', { name: 'web' });
    const t = r.CapacitorPlatforms || {
        currentPlatform: { name: 'web' },
        platforms: e,
      },
      n = (o, i) => {
        t.platforms.set(o, i);
      },
      a = (o) => {
        t.platforms.has(o) && (t.currentPlatform = t.platforms.get(o));
      };
    return (t.addPlatform = n), (t.setPlatform = a), t;
  },
  pe = (r) => (r.CapacitorPlatforms = he(r)),
  D = pe(
    typeof globalThis != 'undefined'
      ? globalThis
      : typeof self != 'undefined'
      ? self
      : typeof window != 'undefined'
      ? window
      : typeof global != 'undefined'
      ? global
      : {}
  );
D.addPlatform;
D.setPlatform;
var $;
(function (r) {
  (r.Unimplemented = 'UNIMPLEMENTED'), (r.Unavailable = 'UNAVAILABLE');
})($ || ($ = {}));
class H extends Error {
  constructor(e, t, n) {
    super(e), (this.message = e), (this.code = t), (this.data = n);
  }
}
const ve = (r) => {
    var e, t;
    return r != null && r.androidBridge
      ? 'android'
      : !(
          (t =
            (e = r == null ? void 0 : r.webkit) === null || e === void 0
              ? void 0
              : e.messageHandlers) === null || t === void 0
        ) && t.bridge
      ? 'ios'
      : 'web';
  },
  we = (r) => {
    var e, t, n, a, o;
    const i = r.CapacitorCustomPlatform || null,
      s = r.Capacitor || {},
      u = (s.Plugins = s.Plugins || {}),
      c = r.CapacitorPlatforms,
      k = () => (i !== null ? i.name : ve(r)),
      y =
        ((e = c == null ? void 0 : c.currentPlatform) === null || e === void 0
          ? void 0
          : e.getPlatform) || k,
      j = () => y() !== 'web',
      Q =
        ((t = c == null ? void 0 : c.currentPlatform) === null || t === void 0
          ? void 0
          : t.isNativePlatform) || j,
      G = (l) => {
        const d = U.get(l);
        return !!((d != null && d.platforms.has(y())) || T(l));
      },
      z =
        ((n = c == null ? void 0 : c.currentPlatform) === null || n === void 0
          ? void 0
          : n.isPluginAvailable) || G,
      V = (l) => {
        var d;
        return (d = s.PluginHeaders) === null || d === void 0
          ? void 0
          : d.find((b) => b.name === l);
      },
      T =
        ((a = c == null ? void 0 : c.currentPlatform) === null || a === void 0
          ? void 0
          : a.getPluginHeader) || V,
      J = (l) => r.console.error(l),
      X = (l, d, b) =>
        Promise.reject(`${b} does not have an implementation of "${d}".`),
      U = new Map(),
      Y = (l, d = {}) => {
        const b = U.get(l);
        if (b)
          return (
            console.warn(
              `Capacitor plugin "${l}" already registered. Cannot register plugins twice.`
            ),
            b.proxy
          );
        const P = y(),
          C = T(l);
        let p;
        const N = async () => (
            !p && P in d
              ? (p =
                  typeof d[P] == 'function' ? (p = await d[P]()) : (p = d[P]))
              : i !== null &&
                !p &&
                'web' in d &&
                (p =
                  typeof d.web == 'function'
                    ? (p = await d.web())
                    : (p = d.web)),
            p
          ),
          ee = (f, g) => {
            var h, v;
            if (C) {
              const w =
                C == null ? void 0 : C.methods.find((m) => g === m.name);
              if (w)
                return w.rtype === 'promise'
                  ? (m) => s.nativePromise(l, g.toString(), m)
                  : (m, x) => s.nativeCallback(l, g.toString(), m, x);
              if (f)
                return (h = f[g]) === null || h === void 0 ? void 0 : h.bind(f);
            } else {
              if (f)
                return (v = f[g]) === null || v === void 0 ? void 0 : v.bind(f);
              throw new H(
                `"${l}" plugin is not implemented on ${P}`,
                $.Unimplemented
              );
            }
          },
          _ = (f) => {
            let g;
            const h = (...v) => {
              const w = N().then((m) => {
                const x = ee(m, f);
                if (x) {
                  const E = x(...v);
                  return (g = E == null ? void 0 : E.remove), E;
                } else
                  throw new H(
                    `"${l}.${f}()" is not implemented on ${P}`,
                    $.Unimplemented
                  );
              });
              return f === 'addListener' && (w.remove = async () => g()), w;
            };
            return (
              (h.toString = () => `${f.toString()}() { [capacitor code] }`),
              Object.defineProperty(h, 'name', {
                value: f,
                writable: !1,
                configurable: !1,
              }),
              h
            );
          },
          q = _('addListener'),
          F = _('removeListener'),
          te = (f, g) => {
            const h = q({ eventName: f }, g),
              v = async () => {
                const m = await h;
                F({ eventName: f, callbackId: m }, g);
              },
              w = new Promise((m) => h.then(() => m({ remove: v })));
            return (
              (w.remove = async () => {
                console.warn(
                  "Using addListener() without 'await' is deprecated."
                ),
                  await v();
              }),
              w
            );
          },
          A = new Proxy(
            {},
            {
              get(f, g) {
                switch (g) {
                  case '$$typeof':
                    return;
                  case 'toJSON':
                    return () => ({});
                  case 'addListener':
                    return C ? te : q;
                  case 'removeListener':
                    return F;
                  default:
                    return _(g);
                }
              },
            }
          );
        return (
          (u[l] = A),
          U.set(l, {
            name: l,
            proxy: A,
            platforms: new Set([...Object.keys(d), ...(C ? [P] : [])]),
          }),
          A
        );
      },
      Z =
        ((o = c == null ? void 0 : c.currentPlatform) === null || o === void 0
          ? void 0
          : o.registerPlugin) || Y;
    return (
      s.convertFileSrc || (s.convertFileSrc = (l) => l),
      (s.getPlatform = y),
      (s.handleError = J),
      (s.isNativePlatform = Q),
      (s.isPluginAvailable = z),
      (s.pluginMethodNoop = X),
      (s.registerPlugin = Z),
      (s.Exception = H),
      (s.DEBUG = !!s.DEBUG),
      (s.isLoggingEnabled = !!s.isLoggingEnabled),
      (s.platform = s.getPlatform()),
      (s.isNative = s.isNativePlatform()),
      s
    );
  },
  Pe = (r) => (r.Capacitor = we(r)),
  O = Pe(
    typeof globalThis != 'undefined'
      ? globalThis
      : typeof self != 'undefined'
      ? self
      : typeof window != 'undefined'
      ? window
      : typeof global != 'undefined'
      ? global
      : {}
  ),
  S = O.registerPlugin;
O.Plugins;
class K {
  constructor(e) {
    (this.listeners = {}),
      (this.windowListeners = {}),
      e &&
        (console.warn(
          `Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`
        ),
        (this.config = e));
  }
  addListener(e, t) {
    this.listeners[e] || (this.listeners[e] = []), this.listeners[e].push(t);
    const a = this.windowListeners[e];
    a && !a.registered && this.addWindowListener(a);
    const o = async () => this.removeListener(e, t),
      i = Promise.resolve({ remove: o });
    return (
      Object.defineProperty(i, 'remove', {
        value: async () => {
          console.warn("Using addListener() without 'await' is deprecated."),
            await o();
        },
      }),
      i
    );
  }
  async removeAllListeners() {
    this.listeners = {};
    for (const e in this.windowListeners)
      this.removeWindowListener(this.windowListeners[e]);
    this.windowListeners = {};
  }
  notifyListeners(e, t) {
    const n = this.listeners[e];
    n && n.forEach((a) => a(t));
  }
  hasListeners(e) {
    return !!this.listeners[e].length;
  }
  registerWindowListener(e, t) {
    this.windowListeners[t] = {
      registered: !1,
      windowEventName: e,
      pluginEventName: t,
      handler: (n) => {
        this.notifyListeners(t, n);
      },
    };
  }
  unimplemented(e = 'not implemented') {
    return new O.Exception(e, $.Unimplemented);
  }
  unavailable(e = 'not available') {
    return new O.Exception(e, $.Unavailable);
  }
  async removeListener(e, t) {
    const n = this.listeners[e];
    if (!n) return;
    const a = n.indexOf(t);
    this.listeners[e].splice(a, 1),
      this.listeners[e].length ||
        this.removeWindowListener(this.windowListeners[e]);
  }
  addWindowListener(e) {
    window.addEventListener(e.windowEventName, e.handler), (e.registered = !0);
  }
  removeWindowListener(e) {
    !e ||
      (window.removeEventListener(e.windowEventName, e.handler),
      (e.registered = !1));
  }
}
const I = (r) =>
    encodeURIComponent(r)
      .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
      .replace(/[()]/g, escape),
  M = (r) => r.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
class ye extends K {
  async getCookies() {
    const e = document.cookie,
      t = {};
    return (
      e.split(';').forEach((n) => {
        if (n.length <= 0) return;
        let [a, o] = n.replace(/=/, 'CAP_COOKIE').split('CAP_COOKIE');
        (a = M(a).trim()), (o = M(o).trim()), (t[a] = o);
      }),
      t
    );
  }
  async setCookie(e) {
    try {
      const t = I(e.key),
        n = I(e.value),
        a = `; expires=${(e.expires || '').replace('expires=', '')}`,
        o = (e.path || '/').replace('path=', ''),
        i = e.url != null && e.url.length > 0 ? `domain=${e.url}` : '';
      document.cookie = `${t}=${n || ''}${a}; path=${o}; ${i};`;
    } catch (t) {
      return Promise.reject(t);
    }
  }
  async deleteCookie(e) {
    try {
      document.cookie = `${e.key}=; Max-Age=0`;
    } catch (t) {
      return Promise.reject(t);
    }
  }
  async clearCookies() {
    try {
      const e = document.cookie.split(';') || [];
      for (const t of e)
        document.cookie = t
          .replace(/^ +/, '')
          .replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
    } catch (e) {
      return Promise.reject(e);
    }
  }
  async clearAllCookies() {
    try {
      await this.clearCookies();
    } catch (e) {
      return Promise.reject(e);
    }
  }
}
S('CapacitorCookies', { web: () => new ye() });
const be = async (r) =>
    new Promise((e, t) => {
      const n = new FileReader();
      (n.onload = () => {
        const a = n.result;
        e(a.indexOf(',') >= 0 ? a.split(',')[1] : a);
      }),
        (n.onerror = (a) => t(a)),
        n.readAsDataURL(r);
    }),
  Ce = (r = {}) => {
    const e = Object.keys(r);
    return Object.keys(r)
      .map((a) => a.toLocaleLowerCase())
      .reduce((a, o, i) => ((a[o] = r[e[i]]), a), {});
  },
  Le = (r, e = !0) =>
    r
      ? Object.entries(r)
          .reduce((n, a) => {
            const [o, i] = a;
            let s, u;
            return (
              Array.isArray(i)
                ? ((u = ''),
                  i.forEach((c) => {
                    (s = e ? encodeURIComponent(c) : c), (u += `${o}=${s}&`);
                  }),
                  u.slice(0, -1))
                : ((s = e ? encodeURIComponent(i) : i), (u = `${o}=${s}`)),
              `${n}&${u}`
            );
          }, '')
          .substr(1)
      : null,
  $e = (r, e = {}) => {
    const t = Object.assign(
        { method: r.method || 'GET', headers: r.headers },
        e
      ),
      a = Ce(r.headers)['content-type'] || '';
    if (typeof r.data == 'string') t.body = r.data;
    else if (a.includes('application/x-www-form-urlencoded')) {
      const o = new URLSearchParams();
      for (const [i, s] of Object.entries(r.data || {})) o.set(i, s);
      t.body = o.toString();
    } else if (
      a.includes('multipart/form-data') ||
      r.data instanceof FormData
    ) {
      const o = new FormData();
      if (r.data instanceof FormData)
        r.data.forEach((s, u) => {
          o.append(u, s);
        });
      else for (const s of Object.keys(r.data)) o.append(s, r.data[s]);
      t.body = o;
      const i = new Headers(t.headers);
      i.delete('content-type'), (t.headers = i);
    } else
      (a.includes('application/json') || typeof r.data == 'object') &&
        (t.body = JSON.stringify(r.data));
    return t;
  };
class ke extends K {
  async request(e) {
    const t = $e(e, e.webFetchExtra),
      n = Le(e.params, e.shouldEncodeUrlParams),
      a = n ? `${e.url}?${n}` : e.url,
      o = await fetch(a, t),
      i = o.headers.get('content-type') || '';
    let { responseType: s = 'text' } = o.ok ? e : {};
    i.includes('application/json') && (s = 'json');
    let u, c;
    switch (s) {
      case 'arraybuffer':
      case 'blob':
        (c = await o.blob()), (u = await be(c));
        break;
      case 'json':
        u = await o.json();
        break;
      case 'document':
      case 'text':
      default:
        u = await o.text();
    }
    const k = {};
    return (
      o.headers.forEach((y, j) => {
        k[j] = y;
      }),
      { data: u, headers: k, status: o.status, url: o.url }
    );
  }
  async get(e) {
    return this.request(Object.assign(Object.assign({}, e), { method: 'GET' }));
  }
  async post(e) {
    return this.request(
      Object.assign(Object.assign({}, e), { method: 'POST' })
    );
  }
  async put(e) {
    return this.request(Object.assign(Object.assign({}, e), { method: 'PUT' }));
  }
  async patch(e) {
    return this.request(
      Object.assign(Object.assign({}, e), { method: 'PATCH' })
    );
  }
  async delete(e) {
    return this.request(
      Object.assign(Object.assign({}, e), { method: 'DELETE' })
    );
  }
}
S('CapacitorHttp', { web: () => new ke() });
const W = S('PushNotifications', {}),
  Oe = le({
    __name: 'IndexPage',
    setup(r) {
      async function e() {
        const t = await fetch('https://fcm.googleapis.com/fcm/send');
        console.log('res', t), await W.requestPermissions(), await W.register();
      }
      return (t, n) => (
        de(),
        ue(
          me,
          { class: 'row items-center justify-evenly' },
          {
            default: fe(() => [ge(se, { label: 'register', onClick: e })]),
            _: 1,
          }
        )
      );
    },
  });
export { Oe as default };
