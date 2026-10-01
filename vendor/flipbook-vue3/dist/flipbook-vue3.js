import { openBlock as M, createElementBlock as I, renderSlot as H, normalizeProps as U, guardReactiveProps as A, createElementVNode as P, normalizeStyle as f, normalizeClass as F, createCommentVNode as X, Fragment as B, renderList as Y, withDirectives as N, vShow as Z } from "vue";
/*! @license Rematrix v0.7.2

	Copyright 2021 Julian Lloyd.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/
function L(t) {
  if (t && t.constructor === Array) {
    var i = t.filter(function(n) {
      return typeof n == "number";
    }).filter(function(n) {
      return !isNaN(n);
    });
    if (t.length === 6 && i.length === 6) {
      var s = w();
      return s[0] = i[0], s[1] = i[1], s[4] = i[2], s[5] = i[3], s[12] = i[4], s[13] = i[5], s;
    } else if (t.length === 16 && i.length === 16)
      return t;
  }
  throw new TypeError("Expected a `number[]` with length 6 or 16.");
}
function w() {
  for (var t = [], i = 0; i < 16; i++)
    i % 5 == 0 ? t.push(1) : t.push(0);
  return t;
}
function q(t, i) {
  for (var s = L(t), n = L(i), o = [], e = 0; e < 4; e++)
    for (var r = [s[e], s[e + 4], s[e + 8], s[e + 12]], a = 0; a < 4; a++) {
      var h = a * 4, l = [n[h], n[h + 1], n[h + 2], n[h + 3]], u = r[0] * l[0] + r[1] * l[1] + r[2] * l[2] + r[3] * l[3];
      o[e + h] = u;
    }
  return o;
}
function G(t) {
  var i = w();
  return i[11] = -1 / t, i;
}
function V(t) {
  var i = Math.PI / 180 * t, s = w();
  return s[0] = s[10] = Math.cos(i), s[2] = s[8] = Math.sin(i), s[2] *= -1, s;
}
function j(t) {
  return "matrix3d(" + L(t).join(", ") + ")";
}
function J(t, i) {
  var s = w();
  return s[12] = t, i && (s[13] = i), s;
}
function K(t, i, s) {
  var n = w();
  return t !== void 0 && i !== void 0 && s !== void 0 && (n[12] = t, n[13] = i, n[14] = s), n;
}
class T {
  constructor(i) {
    i ? i.m ? this.m = [...i.m] : this.m = [...i] : this.m = w();
  }
  clone() {
    return new T(this);
  }
  multiply(i) {
    this.m = q(this.m, i);
  }
  perspective(i) {
    this.multiply(G(i));
  }
  transformX(i) {
    return (i * this.m[0] + this.m[12]) / (i * this.m[3] + this.m[15]);
  }
  translate(i, s) {
    this.multiply(J(i, s));
  }
  translate3d(i, s, n) {
    this.multiply(K(i, s, n));
  }
  rotateY(i) {
    this.multiply(V(i));
  }
  toString() {
    return j(this.m);
  }
}
const Q = "data:image/svg+xml,%3c?xml%20version='1.0'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='500'%20height='500'%20viewBox='0%200%20500%20500'%20fill='transparent'%20style='background-color:%20%23fff'%3e%3ccircle%20cx='250'%20cy='250'%20r='48'%20stroke='%23333'%20stroke-width='2'%20stroke-dasharray='271%2030'%20%3e%3canimateTransform%20attributeName='transform'%20attributeType='XML'%20type='rotate'%20from='0%20250%20250'%20to='360%20250%20250'%20dur='1s'%20repeatCount='indefinite'%20/%3e%3c/circle%3e%3c/svg%3e", _ = (t, i) => {
  const s = t.__vccOpts || t;
  for (const [n, o] of i)
    s[n] = o;
  return s;
}, O = (t) => Math.pow(t, 2), $ = (t) => 1 - O(1 - t), E = (t) => t < 0.5 ? O(t * 2) / 2 : 0.5 + $((t - 0.5) * 2) / 2, tt = {
  name: "FlipBook",
  props: {
    pages: {
      type: Array,
      required: !0
    },
    pagesHiRes: {
      type: Array,
      default: () => []
    },
    flipDuration: {
      type: Number,
      default: 1e3
    },
    zoomDuration: {
      type: Number,
      default: 500
    },
    zooms: {
      type: Array,
      default: () => [1, 2, 4]
    },
    perspective: {
      type: Number,
      default: 2400
    },
    nPolygons: {
      type: Number,
      default: 10
    },
    ambient: {
      type: Number,
      default: 0.4
    },
    gloss: {
      type: Number,
      default: 0.6
    },
    swipeMin: {
      type: Number,
      default: 3
    },
    singlePage: {
      type: Boolean,
      default: !1
    },
    forwardDirection: {
      validator: (t) => t === "right" || t === "left",
      default: "right"
    },
    centering: {
      type: Boolean,
      default: !0
    },
    startPage: {
      type: Number,
      default: null
    },
    loadingImage: {
      type: String,
      default: Q
    },
    clickToZoom: {
      type: Boolean,
      default: !0
    },
    dragToFlip: {
      type: Boolean,
      default: !0
    },
    wheel: {
      type: String,
      default: "scroll"
    },
    alt: {
      type: String,
      default: ""
    }
  },
  emits: [
    "flip-left-start",
    "flip-left-end",
    "flip-right-start",
    "flip-right-end",
    "zoom-start",
    "zoom-end"
  ],
  data() {
    return {
      viewWidth: 0,
      viewHeight: 0,
      imageWidth: null,
      imageHeight: null,
      displayedPages: 1,
      nImageLoad: 0,
      nImageLoadTrigger: 0,
      imageLoadCallback: null,
      currentPage: 0,
      firstPage: 0,
      secondPage: 1,
      zoomIndex: 0,
      zoom: 1,
      zooming: !1,
      touchStartX: null,
      touchStartY: null,
      maxMove: 0,
      activeCursor: null,
      hasTouchEvents: !1,
      hasPointerEvents: !1,
      isFlipping: !1,
      minX: 1 / 0,
      maxX: -1 / 0,
      preloadedImages: {},
      flip: {
        progress: 0,
        direction: null,
        frontImage: null,
        backImage: null,
        auto: !1,
        opacity: 1
      },
      currentCenterOffset: null,
      animatingCenter: !1,
      startScrollLeft: 0,
      startScrollTop: 0,
      scrollLeft: 0,
      scrollTop: 0,
      loadedImages: {}
    };
  },
  computed: {
    IE() {
      return typeof navigator < "u" && /Trident/.test(navigator.userAgent);
    },
    canFlipLeft() {
      return this.forwardDirection === "left" ? this.canGoForward : this.canGoBack;
    },
    canFlipRight() {
      return this.forwardDirection === "right" ? this.canGoForward : this.canGoBack;
    },
    canZoomIn() {
      return !this.zooming && this.zoomIndex < this.zooms_.length - 1;
    },
    canZoomOut() {
      return !this.zooming && this.zoomIndex > 0;
    },
    numPages() {
      return this.pages[0] == null ? this.pages.length - 1 : this.pages.length;
    },
    page() {
      return this.pages[0] != null ? this.currentPage + 1 : Math.max(1, this.currentPage);
    },
    zooms_() {
      return this.zooms || [1];
    },
    canGoForward() {
      return !this.flip.direction && this.currentPage < this.pages.length - this.displayedPages;
    },
    canGoBack() {
      return !this.flip.direction && this.currentPage >= this.displayedPages && !(this.displayedPages === 1 && !this.pageUrl(this.firstPage - 1));
    },
    leftPage() {
      return this.forwardDirection === "right" || this.displayedPages === 1 ? this.firstPage : this.secondPage;
    },
    rightPage() {
      return this.forwardDirection === "left" ? this.firstPage : this.secondPage;
    },
    showLeftPage() {
      return this.pageUrl(this.leftPage);
    },
    showRightPage() {
      return this.pageUrl(this.rightPage) && this.displayedPages === 2;
    },
    cursor() {
      return this.activeCursor ? this.activeCursor : this.IE ? "auto" : this.clickToZoom && this.canZoomIn ? "zoom-in" : this.clickToZoom && this.canZoomOut ? "zoom-out" : this.dragToFlip ? "grab" : "auto";
    },
    pageScale() {
      const i = this.viewWidth / this.displayedPages / this.imageWidth, s = this.viewHeight / this.imageHeight, n = i < s ? i : s;
      return n < 1 ? n : 1;
    },
    pageWidth() {
      return Math.round(this.imageWidth * this.pageScale);
    },
    pageHeight() {
      return Math.round(this.imageHeight * this.pageScale);
    },
    xMargin() {
      return (this.viewWidth - this.pageWidth * this.displayedPages) / 2;
    },
    yMargin() {
      return (this.viewHeight - this.pageHeight) / 2;
    },
    polygonWidth() {
      let t = this.pageWidth / this.nPolygons;
      return t = Math.ceil(t + 1 / this.zoom), t + "px";
    },
    polygonHeight() {
      return this.pageHeight + "px";
    },
    polygonBgSize() {
      return `${this.pageWidth}px ${this.pageHeight}px`;
    },
    polygonArray() {
      return this.makePolygonArray("front").concat(this.makePolygonArray("back"));
    },
    boundingLeft() {
      if (this.displayedPages === 1)
        return this.xMargin;
      const t = this.pageUrl(this.leftPage) ? this.xMargin : this.viewWidth / 2;
      return t < this.minX ? t : this.minX;
    },
    boundingRight() {
      if (this.displayedPages === 1)
        return this.viewWidth - this.xMargin;
      const t = this.pageUrl(this.rightPage) ? this.viewWidth - this.xMargin : this.viewWidth / 2;
      return t > this.maxX ? t : this.maxX;
    },
    centerOffset() {
      const t = this.centering ? Math.round(this.viewWidth / 2 - (this.boundingLeft + this.boundingRight) / 2) : 0;
      return this.currentCenterOffset == null && this.imageWidth != null && (this.currentCenterOffset = t), t;
    },
    centerOffsetSmoothed() {
      return Math.round(this.currentCenterOffset);
    },
    dragToScroll() {
      return !this.hasTouchEvents;
    },
    scrollLeftMin() {
      const t = (this.boundingRight - this.boundingLeft) * this.zoom;
      return t < this.viewWidth ? (this.boundingLeft + this.centerOffsetSmoothed) * this.zoom - (this.viewWidth - t) / 2 : (this.boundingLeft + this.centerOffsetSmoothed) * this.zoom;
    },
    scrollLeftMax() {
      const t = (this.boundingRight - this.boundingLeft) * this.zoom;
      return t < this.viewWidth ? (this.boundingLeft + this.centerOffsetSmoothed) * this.zoom - (this.viewWidth - t) / 2 : (this.boundingRight + this.centerOffsetSmoothed) * this.zoom - this.viewWidth;
    },
    scrollTopMin() {
      const t = this.pageHeight * this.zoom;
      return t < this.viewHeight ? this.yMargin * this.zoom - (this.viewHeight - t) / 2 : this.yMargin * this.zoom;
    },
    scrollTopMax() {
      const t = this.pageHeight * this.zoom;
      return t < this.viewHeight ? this.yMargin * this.zoom - (this.viewHeight - t) / 2 : (this.yMargin + this.pageHeight) * this.zoom - this.viewHeight;
    },
    scrollLeftLimited() {
      return Math.min(this.scrollLeftMax, Math.max(this.scrollLeftMin, this.scrollLeft));
    },
    scrollTopLimited() {
      return Math.min(this.scrollTopMax, Math.max(this.scrollTopMin, this.scrollTop));
    }
  },
  watch: {
    polygonArray() {
      const t = this.makePolygonArray("front"), i = this.makePolygonArray("back");
      this.minX = Math.min(t.minX || 1 / 0, i.minX || 1 / 0), this.maxX = Math.max(t.maxX || -1 / 0, i.maxX || -1 / 0), this.flip.opacity = Math.min(t.flipOpacity, i.flipOpacity);
    },
    currentPage() {
      this.firstPage = this.currentPage, this.secondPage = this.currentPage + 1, this.preloadImages();
    },
    centerOffset() {
      if (this.animatingCenter)
        return;
      const t = () => {
        requestAnimationFrame(() => {
          const s = this.centerOffset - this.currentCenterOffset;
          Math.abs(s) < 0.5 ? (this.currentCenterOffset = this.centerOffset, this.animatingCenter = !1) : (this.currentCenterOffset += s * 0.1, t());
        });
      };
      this.animatingCenter = !0, t();
    },
    scrollLeftLimited(t) {
      this.IE ? requestAnimationFrame(() => {
        this.$refs.viewport.scrollLeft = t;
      }) : this.$refs.viewport.scrollLeft = t;
    },
    scrollTopLimited(t) {
      this.IE ? requestAnimationFrame(() => {
        this.$refs.viewport.scrollTop = t;
      }) : this.$refs.viewport.scrollTop = t;
    },
    pages(t, i) {
      this.fixFirstPage(), !(i != null && i.length) && (t != null && t.length) && this.startPage > 1 && t[0] === null && (this.currentPage += 1);
    },
    startPage(t) {
      this.goToPage(t);
    }
  },
  mounted() {
    window.addEventListener("resize", this.onResize, { passive: !0 }), this.onResize(), this.zoom = this.zooms_[0], this.goToPage(this.startPage);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.onResize, { passive: !0 });
  },
  methods: {
    onResize() {
      const { viewport: t } = this.$refs;
      t && (this.viewWidth = t.clientWidth, this.viewHeight = t.clientHeight, this.displayedPages = this.viewWidth > this.viewHeight && !this.singlePage ? 2 : 1, this.displayedPages === 2 && (this.currentPage &= -2), this.fixFirstPage(), this.minX = 1 / 0, this.maxX = -1 / 0);
    },
    fixFirstPage() {
      this.displayedPages === 1 && this.currentPage === 0 && this.pages.length && !this.pageUrl(0) && (this.currentPage += 1);
    },
    pageUrl(t, i = !1) {
      if (i && this.zoom > 1 && !this.zooming) {
        const s = this.pagesHiRes[t];
        if (s) return s;
      }
      return this.pages[t] || null;
    },
    pageUrlLoading(t, i = !1) {
      const s = this.pageUrl(t, i);
      return i && this.zoom > 1 && !this.zooming ? s : s && this.loadImage(s);
    },
    flipLeft() {
      this.canFlipLeft && this.flipStart("left", !0);
    },
    flipRight() {
      this.canFlipRight && this.flipStart("right", !0);
    },
    makePolygonArray(t) {
      if (!this.flip.direction) return [];
      let i = this.flip.progress, s = this.flip.direction;
      this.displayedPages === 1 && s !== this.forwardDirection && (i = 1 - i, s = this.forwardDirection), this.flip.opacity = this.displayedPages === 1 && i > 0.7 ? 1 - (i - 0.7) / 0.3 : 1;
      const n = t === "front" ? this.flip.frontImage : this.flip.backImage, o = this.pageWidth / this.nPolygons;
      let e = this.xMargin, r = !1;
      this.displayedPages === 1 ? this.forwardDirection === "right" ? t === "back" && (r = !0, e = this.xMargin - this.pageWidth) : s === "left" ? t === "back" ? e = this.pageWidth - this.xMargin : r = !0 : t === "front" ? e = this.pageWidth - this.xMargin : r = !0 : s === "left" ? t === "back" ? e = this.viewWidth / 2 : r = !0 : t === "front" ? e = this.viewWidth / 2 : r = !0;
      const a = new T();
      a.translate(this.viewWidth / 2), a.perspective(this.perspective), a.translate(-this.viewWidth / 2), a.translate(e, this.yMargin);
      let h = 0;
      i > 0.5 && (h = -(i - 0.5) * 2 * 180), s === "left" && (h = -h), t === "back" && (h += 180), h && (r && a.translate(this.pageWidth), a.rotateY(h), r && a.translate(-this.pageWidth));
      let l = i < 0.5 ? i * 2 * Math.PI : (1 - (i - 0.5) * 2) * Math.PI;
      l === 0 && (l = 1e-9);
      const u = this.pageWidth / l;
      let d = 0;
      const y = l / this.nPolygons;
      let p = y / 2 / Math.PI * 180, m = y / Math.PI * 180;
      r && (p = -l / Math.PI * 180 + m / 2), t === "back" && (p = -p, m = -m);
      let c = 1 / 0, g = -1 / 0;
      const S = [];
      for (let x = 0; x < this.nPolygons; x += 1) {
        const R = `${x / (this.nPolygons - 1) * 100}% 0px`, v = a.clone(), W = r ? l - d : d;
        let b = Math.sin(W) * u;
        r && (b = this.pageWidth - b);
        let z = (1 - Math.cos(W)) * u;
        t === "back" && (z = -z), v.translate3d(b, 0, z), v.rotateY(-p);
        const k = v.transformX(0), D = v.transformX(o);
        g = Math.max(Math.max(k, D), g), c = Math.min(Math.min(k, D), c);
        const C = this.computeLighting(h - p, m);
        d += y, p += m, S.push([t + x, n, C, R, v.toString(), Math.abs(Math.round(z))]);
      }
      return this.maxX = g, this.minX = c, S;
    },
    computeLighting(t, i) {
      const s = [], n = [-0.5, -0.25, 0, 0.25, 0.5];
      if (this.ambient < 1) {
        const o = 1 - this.ambient, e = n.map(
          (r) => (1 - Math.cos((t - i * r) / 180 * Math.PI)) * o
        );
        s.push(`
          linear-gradient(to right,
            rgba(0, 0, 0, ${e[0]}),
            rgba(0, 0, 0, ${e[1]}) 25%,
            rgba(0, 0, 0, ${e[2]}) 50%,
            rgba(0, 0, 0, ${e[3]}) 75%,
            rgba(0, 0, 0, ${e[4]}))
        `);
      }
      if (this.gloss > 0 && !this.IE) {
        const r = n.map(
          (a) => Math.max(
            Math.cos((t + 30 - i * a) / 180 * Math.PI) ** 200,
            Math.cos((t - 30 - i * a) / 180 * Math.PI) ** 200
          )
        );
        s.push(`
          linear-gradient(to right,
            rgba(255, 255, 255, ${r[0] * this.gloss}),
            rgba(255, 255, 255, ${r[1] * this.gloss}) 25%,
            rgba(255, 255, 255, ${r[2] * this.gloss}) 50%,
            rgba(255, 255, 255, ${r[3] * this.gloss}) 75%,
            rgba(255, 255, 255, ${r[4] * this.gloss}))
        `);
      }
      return s.join(",");
    },
    async flipStart(t, i) {
      i && this.isFlipping || (this.isFlipping = !0, t !== this.forwardDirection ? this.displayedPages === 1 ? (this.flip.frontImage = this.pageUrl(this.currentPage - 1), this.flip.backImage = null) : (this.flip.frontImage = this.pageUrl(this.firstPage), this.flip.backImage = this.pageUrl(this.currentPage - this.displayedPages + 1)) : this.displayedPages === 1 ? (this.flip.frontImage = this.pageUrl(this.currentPage), this.flip.backImage = null) : (this.flip.frontImage = this.pageUrl(this.secondPage), this.flip.backImage = this.pageUrl(this.currentPage + this.displayedPages)), this.flip.direction = t, this.flip.progress = 0, i && await this.delay(100), requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          this.flip.direction !== this.forwardDirection ? this.displayedPages === 2 && (this.firstPage = this.currentPage - this.displayedPages) : this.displayedPages === 1 ? this.firstPage = this.currentPage + this.displayedPages : this.secondPage = this.currentPage + 1 + this.displayedPages, i && this.flipAuto(!0);
        });
      }), this.isFlipping = !1);
    },
    delay(t) {
      return new Promise((i) => setTimeout(i, t));
    },
    flipAuto(t) {
      const i = Date.now(), s = this.flipDuration * (1 - this.flip.progress), n = this.flip.progress;
      if (this.flip.auto)
        return;
      this.flip.auto = !0, this.$emit(`flip-${this.flip.direction}-start`, this.page);
      let o = 0;
      const e = 500 / 60, r = () => {
        requestAnimationFrame(() => {
          const a = Date.now(), h = a - i;
          let l = n + h / s;
          l > 1 && (l = 1);
          const u = t ? E(l) : l;
          (a - o >= e || l >= 1) && (o = a, this.flip.progress = u), l < 1 ? r() : (this.flip.direction !== this.forwardDirection ? this.currentPage -= this.displayedPages : this.currentPage += this.displayedPages, this.$emit(`flip-${this.flip.direction}-end`, this.page), this.displayedPages === 1 && this.flip.direction === this.forwardDirection ? this.flip.direction = null : this.onImageLoad(1, () => {
            this.flip.direction = null;
          }), this.flip.auto = !1);
        });
      };
      r();
    },
    flipRevert() {
      const t = Date.now(), i = this.flipDuration * this.flip.progress, s = this.flip.progress;
      this.flip.auto = !0;
      const n = () => {
        requestAnimationFrame(() => {
          const o = Date.now() - t;
          let e = s - s * o / i;
          e < 0 && (e = 0), this.flip.progress = e, e > 0 ? n() : (this.firstPage = this.currentPage, this.secondPage = this.currentPage + 1, this.displayedPages === 1 && this.flip.direction !== this.forwardDirection ? this.flip.direction = null : this.onImageLoad(1, () => {
            this.flip.direction = null;
          }), this.flip.auto = !1);
        });
      };
      n();
    },
    onImageLoad(t, i) {
      this.nImageLoad = 0, this.nImageLoadTrigger = t, this.imageLoadCallback = i;
    },
    didLoadImage(t) {
      this.imageWidth == null && (this.imageWidth = (t.target || t.path[0]).naturalWidth, this.imageHeight = (t.target || t.path[0]).naturalHeight, this.preloadImages()), this.imageLoadCallback && ++this.nImageLoad >= this.nImageLoadTrigger && (this.imageLoadCallback(), this.imageLoadCallback = null);
    },
    zoomIn(t = null) {
      this.canZoomIn && (this.zoomIndex += 1, this.zoomTo(this.zooms_[this.zoomIndex], t));
    },
    zoomOut(t = null) {
      this.canZoomOut && (this.zoomIndex -= 1, this.zoomTo(this.zooms_[this.zoomIndex], t));
    },
    zoomTo(t, i = null) {
      const { viewport: s } = this.$refs;
      if (!s) {
        console.error("Viewport not found");
        return;
      }
      let n, o;
      if (i) {
        const c = s.getBoundingClientRect();
        n = i.pageX - c.left, o = i.pageY - c.top;
      } else
        n = s.clientWidth / 2, o = s.clientHeight / 2;
      const e = this.zoom, r = t, a = s.scrollLeft, h = s.scrollTop, l = n + a, u = o + h, d = l / e * r - n, y = u / e * r - o, p = Date.now();
      this.zooming = !0, this.$emit("zoom-start", t);
      const m = () => {
        requestAnimationFrame(() => {
          const c = Date.now() - p;
          let g = c / this.zoomDuration;
          (g > 1 || this.IE) && (g = 1), g = E(g), this.zoom = e + (r - e) * g, this.scrollLeft = a + (d - a) * g, this.scrollTop = h + (y - h) * g, c < this.zoomDuration ? m() : (this.$emit("zoom-end", t), this.zooming = !1, this.zoom = t, this.scrollLeft = d, this.scrollTop = y);
        });
      };
      m(), r > 1 && this.preloadImages(!0);
    },
    zoomAt(t) {
      this.zoomIndex = (this.zoomIndex + 1) % this.zooms_.length, this.zoomTo(this.zooms_[this.zoomIndex], t);
    },
    swipeStart(t) {
      this.touchStartX = t.pageX, this.touchStartY = t.pageY, this.maxMove = 0, this.zoom <= 1 ? this.dragToFlip && (this.activeCursor = "grab") : (this.startScrollLeft = this.$refs.viewport.scrollLeft, this.startScrollTop = this.$refs.viewport.scrollTop, this.activeCursor = "all-scroll");
    },
    swipeMove(t) {
      if (!this.dragToFlip || this.touchStartX == null) return !1;
      const i = t.pageX - this.touchStartX, s = t.pageY - this.touchStartY;
      return this.maxMove = Math.max(this.maxMove, Math.abs(i)), this.maxMove = Math.max(this.maxMove, Math.abs(s)), this.zoom > 1 ? (this.dragToScroll && this.dragScroll(i, s), !1) : Math.abs(s) > Math.abs(i) ? !1 : (this.activeCursor = "grabbing", i > 0 ? (this.flip.direction == null && this.canFlipLeft && i >= this.swipeMin && this.flipStart("left", !1), this.flip.direction === "left" && (this.flip.progress = i / this.pageWidth, this.flip.progress > 1 && (this.flip.progress = 1))) : (this.flip.direction == null && this.canFlipRight && i <= -this.swipeMin && this.flipStart("right", !1), this.flip.direction === "right" && (this.flip.progress = -i / this.pageWidth, this.flip.progress > 1 && (this.flip.progress = 1))), !0);
    },
    swipeEnd(t) {
      this.touchStartX != null && (this.clickToZoom && this.maxMove < this.swipeMin && this.zoomAt(t), this.flip.direction != null && !this.flip.auto && (this.flip.progress > 0.25 ? this.flipAuto(!1) : this.flipRevert()), this.touchStartX = null, this.activeCursor = null);
    },
    onTouchStart(t) {
      this.hasTouchEvents = !0, this.swipeStart(t.changedTouches[0]);
    },
    onTouchMove(t) {
      this.swipeMove(t.changedTouches[0]) && t.cancelable && t.preventDefault();
    },
    onTouchEnd(t) {
      this.swipeEnd(t.changedTouches[0]);
    },
    onPointerDown(t) {
      if (this.hasPointerEvents = !0, !this.hasTouchEvents && !(t.which && t.which !== 1)) {
        this.swipeStart(t);
        try {
          t.target.setPointerCapture(t.pointerId);
        } catch {
        }
      }
    },
    onPointerMove(t) {
      this.hasTouchEvents || this.swipeMove(t);
    },
    onPointerUp(t) {
      if (!this.hasTouchEvents) {
        this.swipeEnd(t);
        try {
          t.target.releasePointerCapture(t.pointerId);
        } catch {
        }
      }
    },
    onMouseDown(t) {
      this.hasTouchEvents || this.hasPointerEvents || t.which && t.which !== 1 || this.swipeStart(t);
    },
    onMouseMove(t) {
      !this.hasTouchEvents && !this.hasPointerEvents && this.swipeMove(t);
    },
    onMouseUp(t) {
      !this.hasTouchEvents && !this.hasPointerEvents && this.swipeEnd(t);
    },
    dragScroll(t, i) {
      this.scrollLeft = this.startScrollLeft - t, this.scrollTop = this.startScrollTop - i;
    },
    onWheel(t) {
      this.wheel === "scroll" && this.zoom > 1 && this.dragToScroll && (this.scrollLeft = this.$refs.viewport.scrollLeft + t.deltaX, this.scrollTop = this.$refs.viewport.scrollTop + t.deltaY, t.cancelable && t.preventDefault()), this.wheel === "zoom" && (t.deltaY >= 100 ? (this.zoomOut(t), t.cancelable && t.preventDefault()) : t.deltaY <= -100 && (this.zoomIn(t), t.cancelable && t.preventDefault()));
    },
    preloadImages(t = !1) {
      for (let i = this.currentPage - 3; i <= this.currentPage + 3; i++)
        this.pageUrlLoading(i);
      if (t)
        for (let i = this.currentPage; i < this.currentPage + this.displayedPages; i++) {
          const s = this.pagesHiRes[i];
          if (s) {
            const n = new Image();
            n.src = s;
          }
        }
    },
    goToPage(t) {
      t == null || t === this.page || (this.pages[0] == null ? this.displayedPages === 2 && t === 1 ? this.currentPage = 0 : this.currentPage = t : this.currentPage = t - 1, this.minX = 1 / 0, this.maxX = -1 / 0, this.currentCenterOffset = this.centerOffset);
    },
    loadImage(t) {
      if (this.imageWidth == null || this.loadedImages[t])
        return t;
      const i = new Image();
      return i.onload = () => {
        this.$set ? this.$set(this.loadedImages, t, !0) : this.loadedImages[t] = !0;
      }, i.src = t, this.loadingImage;
    }
  }
}, it = ["src", "alt"], et = ["src", "alt"];
function st(t, i, s, n, o, e) {
  return M(), I("div", null, [
    H(t.$slots, "default", U(A({
      canFlipLeft: e.canFlipLeft,
      canFlipRight: e.canFlipRight,
      canZoomIn: e.canZoomIn,
      canZoomOut: e.canZoomOut,
      page: e.page,
      numPages: e.numPages,
      flipLeft: e.flipLeft,
      flipRight: e.flipRight,
      zoomIn: e.zoomIn,
      zoomOut: e.zoomOut
    })), void 0, !0),
    P("div", {
      ref: "viewport",
      class: F(["viewport", {
        zoom: o.zooming || o.zoom > 1,
        "drag-to-scroll": e.dragToScroll
      }]),
      style: f({ cursor: e.cursor == "grabbing" ? "grabbing" : "auto" }),
      onTouchmove: i[7] || (i[7] = (...r) => e.onTouchMove && e.onTouchMove(...r)),
      onPointermove: i[8] || (i[8] = (...r) => e.onPointerMove && e.onPointerMove(...r)),
      onMousemove: i[9] || (i[9] = (...r) => e.onMouseMove && e.onMouseMove(...r)),
      onTouchend: i[10] || (i[10] = (...r) => e.onTouchEnd && e.onTouchEnd(...r)),
      onTouchcancel: i[11] || (i[11] = (...r) => e.onTouchEnd && e.onTouchEnd(...r)),
      onPointerup: i[12] || (i[12] = (...r) => e.onPointerUp && e.onPointerUp(...r)),
      onPointercancel: i[13] || (i[13] = (...r) => e.onPointerUp && e.onPointerUp(...r)),
      onMouseup: i[14] || (i[14] = (...r) => e.onMouseUp && e.onMouseUp(...r)),
      onWheel: i[15] || (i[15] = (...r) => e.onWheel && e.onWheel(...r))
    }, [
      P("div", {
        class: "flipbook-container",
        style: f({ transform: `scale(${o.zoom})` })
      }, [
        P("div", {
          class: "click-to-flip left",
          style: f({ cursor: e.canFlipLeft ? "pointer" : "auto" }),
          onClick: i[0] || (i[0] = (...r) => e.flipLeft && e.flipLeft(...r))
        }, null, 4),
        P("div", {
          class: "click-to-flip right",
          style: f({ cursor: e.canFlipRight ? "pointer" : "auto" }),
          onClick: i[1] || (i[1] = (...r) => e.flipRight && e.flipRight(...r))
        }, null, 4),
        P("div", {
          style: f({ transform: `translateX(${e.centerOffsetSmoothed}px)` })
        }, [
          e.showLeftPage ? (M(), I("img", {
            key: 0,
            class: "page fixed",
            style: f({
              width: e.pageWidth + "px",
              height: e.pageHeight + "px",
              left: e.xMargin + "px",
              top: e.yMargin + "px"
            }),
            src: e.pageUrlLoading(e.leftPage, !0),
            onLoad: i[2] || (i[2] = (r) => e.didLoadImage(r)),
            alt: s.alt
          }, null, 44, it)) : X("", !0),
          e.showRightPage ? (M(), I("img", {
            key: 1,
            class: "page fixed",
            style: f({
              width: e.pageWidth + "px",
              height: e.pageHeight + "px",
              left: o.viewWidth / 2 + "px",
              top: e.yMargin + "px"
            }),
            src: e.pageUrlLoading(e.rightPage, !0),
            onLoad: i[3] || (i[3] = (r) => e.didLoadImage(r)),
            alt: s.alt
          }, null, 44, et)) : X("", !0),
          P("div", {
            style: f({ opacity: o.flip.opacity })
          }, [
            (M(!0), I(B, null, Y(e.polygonArray, ([r, a, h, l, u, d]) => (M(), I("div", {
              key: r,
              class: F(["polygon", { blank: !a }]),
              style: f({
                backgroundImage: a && `url(${e.loadImage(a)})`,
                backgroundSize: e.polygonBgSize,
                backgroundPosition: l,
                width: e.polygonWidth,
                height: e.polygonHeight,
                transform: u,
                zIndex: d
              })
            }, [
              N(P("div", {
                class: "lighting",
                style: f({ backgroundImage: h })
              }, null, 4), [
                [Z, h.length]
              ])
            ], 6))), 128))
          ], 4),
          P("div", {
            class: "bounding-box",
            style: f({
              left: e.boundingLeft + "px",
              top: e.yMargin + "px",
              width: e.boundingRight - e.boundingLeft + "px",
              height: e.pageHeight + "px",
              cursor: e.cursor
            }),
            onTouchstart: i[4] || (i[4] = (...r) => e.onTouchStart && e.onTouchStart(...r)),
            onPointerdown: i[5] || (i[5] = (...r) => e.onPointerDown && e.onPointerDown(...r)),
            onMousedown: i[6] || (i[6] = (...r) => e.onMouseDown && e.onMouseDown(...r))
          }, null, 36)
        ], 4)
      ], 4)
    ], 38)
  ]);
}
const nt = /* @__PURE__ */ _(tt, [["render", st], ["__scopeId", "data-v-9d6e7f01"]]);
export {
  nt as FlipBook,
  nt as default
};
