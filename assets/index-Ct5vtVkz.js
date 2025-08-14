var Nv = Object.defineProperty;
var Bv = (n, t, e) => t in n ? Nv(n, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
}) : n[t] = e;
var Z = (n, t, e) => Bv(n, typeof t != "symbol" ? t + "" : t, e);
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const a of document.querySelectorAll('link[rel="modulepreload"]')) r(a);
    new MutationObserver(a => {
        for (const o of a)
            if (o.type === "childList")
                for (const l of o.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && r(l)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function e(a) {
        const o = {};
        return a.integrity && (o.integrity = a.integrity), a.referrerPolicy && (o.referrerPolicy = a.referrerPolicy), a.crossOrigin === "use-credentials" ? o.credentials = "include" : a.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o
    }

    function r(a) {
        if (a.ep) return;
        a.ep = !0;
        const o = e(a);
        fetch(a.href, o)
    }
})();
var Uv = "@vercel/speed-insights",
    Wv = "1.2.0",
    kv = () => {
        window.si || (window.si = function(...t) {
            (window.siq = window.siq || []).push(t)
        })
    };

function qv() {
    return typeof window < "u"
}

function Gv() {
    try {
        const n = "production"
    } catch {}
    return "production"
}

function Bf() {
    return Gv() === "development"
}

function Vv(n) {
    return n.scriptSrc ? n.scriptSrc : Bf() ? "https://va.vercel-scripts.com/v1/speed-insights/script.debug.js" : n.dsn ? "https://va.vercel-scripts.com/v1/speed-insights/script.js" : n.basePath ? `${n.basePath}/speed-insights/script.js` : "/_vercel/speed-insights/script.js"
}

function Xv(n = {}) {
    var t;
    if (!qv() || n.route === null) return null;
    kv();
    const e = Vv(n);
    if (document.head.querySelector(`script[src*="${e}"]`)) return null;
    n.beforeSend && ((t = window.si) == null || t.call(window, "beforeSend", n.beforeSend));
    const r = document.createElement("script");
    return r.src = e, r.defer = !0, r.dataset.sdkn = Uv + (n.framework ? `/${n.framework}` : ""), r.dataset.sdkv = Wv, n.sampleRate && (r.dataset.sampleRate = n.sampleRate.toString()), n.route && (r.dataset.route = n.route), n.endpoint ? r.dataset.endpoint = n.endpoint : n.basePath && (r.dataset.endpoint = `${n.basePath}/speed-insights/vitals`), n.dsn && (r.dataset.dsn = n.dsn), Bf() && n.debug === !1 && (r.dataset.debug = "false"), r.onerror = () => {
        console.log(`[Vercel Speed Insights] Failed to load script from ${e}. Please check if any content blockers are enabled and try again.`)
    }, document.head.appendChild(r), {
        setRoute: a => {
            r.dataset.route = a != null ? a : void 0;
        }
    }
}

function un(n) {
    let t = n[0],
        e = n[1],
        r = n[2];
    return Math.sqrt(t * t + e * e + r * r)
}

function vo(n, t) {
    return n[0] = t[0], n[1] = t[1], n[2] = t[2], n
}

function Hv(n, t, e, r) {
    return n[0] = t, n[1] = e, n[2] = r, n
}

function Nu(n, t, e) {
    return n[0] = t[0] + e[0], n[1] = t[1] + e[1], n[2] = t[2] + e[2], n
}

function Bu(n, t, e) {
    return n[0] = t[0] - e[0], n[1] = t[1] - e[1], n[2] = t[2] - e[2], n
}

function $v(n, t, e) {
    return n[0] = t[0] * e[0], n[1] = t[1] * e[1], n[2] = t[2] * e[2], n
}

function Yv(n, t, e) {
    return n[0] = t[0] / e[0], n[1] = t[1] / e[1], n[2] = t[2] / e[2], n
}

function eo(n, t, e) {
    return n[0] = t[0] * e, n[1] = t[1] * e, n[2] = t[2] * e, n
}

function Kv(n, t) {
    let e = t[0] - n[0],
        r = t[1] - n[1],
        a = t[2] - n[2];
    return Math.sqrt(e * e + r * r + a * a)
}

function Zv(n, t) {
    let e = t[0] - n[0],
        r = t[1] - n[1],
        a = t[2] - n[2];
    return e * e + r * r + a * a
}

function Uu(n) {
    let t = n[0],
        e = n[1],
        r = n[2];
    return t * t + e * e + r * r
}

function Qv(n, t) {
    return n[0] = -t[0], n[1] = -t[1], n[2] = -t[2], n
}

function Jv(n, t) {
    return n[0] = 1 / t[0], n[1] = 1 / t[1], n[2] = 1 / t[2], n
}

function xo(n, t) {
    let e = t[0],
        r = t[1],
        a = t[2],
        o = e * e + r * r + a * a;
    return o > 0 && (o = 1 / Math.sqrt(o)), n[0] = t[0] * o, n[1] = t[1] * o, n[2] = t[2] * o, n
}

function Uf(n, t) {
    return n[0] * t[0] + n[1] * t[1] + n[2] * t[2]
}

function Wu(n, t, e) {
    let r = t[0],
        a = t[1],
        o = t[2],
        l = e[0],
        u = e[1],
        f = e[2];
    return n[0] = a * f - o * u, n[1] = o * l - r * f, n[2] = r * u - a * l, n
}

function jv(n, t, e, r) {
    let a = t[0],
        o = t[1],
        l = t[2];
    return n[0] = a + r * (e[0] - a), n[1] = o + r * (e[1] - o), n[2] = l + r * (e[2] - l), n
}

function tx(n, t, e, r, a) {
    const o = Math.exp(-r * a);
    let l = t[0],
        u = t[1],
        f = t[2];
    return n[0] = e[0] + (l - e[0]) * o, n[1] = e[1] + (u - e[1]) * o, n[2] = e[2] + (f - e[2]) * o, n
}

function ex(n, t, e) {
    let r = t[0],
        a = t[1],
        o = t[2],
        l = e[3] * r + e[7] * a + e[11] * o + e[15];
    return l = l || 1, n[0] = (e[0] * r + e[4] * a + e[8] * o + e[12]) / l, n[1] = (e[1] * r + e[5] * a + e[9] * o + e[13]) / l, n[2] = (e[2] * r + e[6] * a + e[10] * o + e[14]) / l, n
}

function ix(n, t, e) {
    let r = t[0],
        a = t[1],
        o = t[2],
        l = e[3] * r + e[7] * a + e[11] * o + e[15];
    return l = l || 1, n[0] = (e[0] * r + e[4] * a + e[8] * o) / l, n[1] = (e[1] * r + e[5] * a + e[9] * o) / l, n[2] = (e[2] * r + e[6] * a + e[10] * o) / l, n
}

function rx(n, t, e) {
    let r = t[0],
        a = t[1],
        o = t[2];
    return n[0] = r * e[0] + a * e[3] + o * e[6], n[1] = r * e[1] + a * e[4] + o * e[7], n[2] = r * e[2] + a * e[5] + o * e[8], n
}

function nx(n, t, e) {
    let r = t[0],
        a = t[1],
        o = t[2],
        l = e[0],
        u = e[1],
        f = e[2],
        d = e[3],
        p = u * o - f * a,
        v = f * r - l * o,
        m = l * a - u * r,
        x = u * m - f * v,
        T = f * p - l * m,
        _ = l * v - u * p,
        E = d * 2;
    return p *= E, v *= E, m *= E, x *= 2, T *= 2, _ *= 2, n[0] = r + p + x, n[1] = a + v + T, n[2] = o + m + _, n
}
const sx = function() {
    const n = [0, 0, 0],
        t = [0, 0, 0];
    return function(e, r) {
        vo(n, e), vo(t, r), xo(n, n), xo(t, t);
        let a = Uf(n, t);
        return a > 1 ? 0 : a < -1 ? Math.PI : Math.acos(a)
    }
}();

function ax(n, t) {
    return n[0] === t[0] && n[1] === t[1] && n[2] === t[2]
}
class Nt extends Array {
    constructor(t = 0, e = t, r = t) {
        return super(t, e, r), this
    }
    get x() {
        return this[0]
    }
    get y() {
        return this[1]
    }
    get z() {
        return this[2]
    }
    set x(t) {
        this[0] = t
    }
    set y(t) {
        this[1] = t
    }
    set z(t) {
        this[2] = t
    }
    set(t, e = t, r = t) {
        return t.length ? this.copy(t) : (Hv(this, t, e, r), this)
    }
    copy(t) {
        return vo(this, t), this
    }
    add(t, e) {
        return e ? Nu(this, t, e) : Nu(this, this, t), this
    }
    sub(t, e) {
        return e ? Bu(this, t, e) : Bu(this, this, t), this
    }
    multiply(t) {
        return t.length ? $v(this, this, t) : eo(this, this, t), this
    }
    divide(t) {
        return t.length ? Yv(this, this, t) : eo(this, this, 1 / t), this
    }
    inverse(t = this) {
        return Jv(this, t), this
    }
    len() {
        return un(this)
    }
    distance(t) {
        return t ? Kv(this, t) : un(this)
    }
    squaredLen() {
        return Uu(this)
    }
    squaredDistance(t) {
        return t ? Zv(this, t) : Uu(this)
    }
    negate(t = this) {
        return Qv(this, t), this
    }
    cross(t, e) {
        return e ? Wu(this, t, e) : Wu(this, this, t), this
    }
    scale(t) {
        return eo(this, this, t), this
    }
    normalize() {
        return xo(this, this), this
    }
    dot(t) {
        return Uf(this, t)
    }
    equals(t) {
        return ax(this, t)
    }
    applyMatrix3(t) {
        return rx(this, this, t), this
    }
    applyMatrix4(t) {
        return ex(this, this, t), this
    }
    scaleRotateMatrix4(t) {
        return ix(this, this, t), this
    }
    applyQuaternion(t) {
        return nx(this, this, t), this
    }
    angle(t) {
        return sx(this, t)
    }
    lerp(t, e) {
        return jv(this, this, t, e), this
    }
    smoothLerp(t, e, r) {
        return tx(this, this, t, e, r), this
    }
    clone() {
        return new Nt(this[0], this[1], this[2])
    }
    fromArray(t, e = 0) {
        return this[0] = t[e], this[1] = t[e + 1], this[2] = t[e + 2], this
    }
    toArray(t = [], e = 0) {
        return t[e] = this[0], t[e + 1] = this[1], t[e + 2] = this[2], t
    }
    transformDirection(t) {
        const e = this[0],
            r = this[1],
            a = this[2];
        return this[0] = t[0] * e + t[4] * r + t[8] * a, this[1] = t[1] * e + t[5] * r + t[9] * a, this[2] = t[2] * e + t[6] * r + t[10] * a, this.normalize()
    }
}
const ku = new Nt;
let ox = 1,
    hx = 1,
    qu = !1;
class Uo {
    constructor(t, e = {}) {
        t.canvas || console.error("gl not passed as first argument to Geometry"), this.gl = t, this.attributes = e, this.id = ox++, this.VAOs = {}, this.drawRange = {
            start: 0,
            count: 0
        }, this.instancedCount = 0, this.gl.renderer.bindVertexArray(null), this.gl.renderer.currentGeometry = null, this.glState = this.gl.renderer.state;
        for (let r in e) this.addAttribute(r, e[r])
    }
    addAttribute(t, e) {
        if (this.attributes[t] = e, e.id = hx++, e.size = e.size || 1, e.type = e.type || (e.data.constructor === Float32Array ? this.gl.FLOAT : e.data.constructor === Uint16Array ? this.gl.UNSIGNED_SHORT : this.gl.UNSIGNED_INT), e.target = t === "index" ? this.gl.ELEMENT_ARRAY_BUFFER : this.gl.ARRAY_BUFFER, e.normalized = e.normalized || !1, e.stride = e.stride || 0, e.offset = e.offset || 0, e.count = e.count || (e.stride ? e.data.byteLength / e.stride : e.data.length / e.size), e.divisor = e.instanced || 0, e.needsUpdate = !1, e.usage = e.usage || this.gl.STATIC_DRAW, e.buffer || this.updateAttribute(e), e.divisor) {
            if (this.isInstanced = !0, this.instancedCount && this.instancedCount !== e.count * e.divisor) return console.warn("geometry has multiple instanced buffers of different length"), this.instancedCount = Math.min(this.instancedCount, e.count * e.divisor);
            this.instancedCount = e.count * e.divisor
        } else t === "index" ? this.drawRange.count = e.count : this.attributes.index || (this.drawRange.count = Math.max(this.drawRange.count, e.count))
    }
    updateAttribute(t) {
        const e = !t.buffer;
        e && (t.buffer = this.gl.createBuffer()), this.glState.boundBuffer !== t.buffer && (this.gl.bindBuffer(t.target, t.buffer), this.glState.boundBuffer = t.buffer), e ? this.gl.bufferData(t.target, t.data, t.usage) : this.gl.bufferSubData(t.target, 0, t.data), t.needsUpdate = !1
    }
    setIndex(t) {
        this.addAttribute("index", t)
    }
    setDrawRange(t, e) {
        this.drawRange.start = t, this.drawRange.count = e
    }
    setInstancedCount(t) {
        this.instancedCount = t
    }
    createVAO(t) {
        this.VAOs[t.attributeOrder] = this.gl.renderer.createVertexArray(), this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]), this.bindAttributes(t)
    }
    bindAttributes(t) {
        t.attributeLocations.forEach((e, {
            name: r,
            type: a
        }) => {
            if (!this.attributes[r]) {
                console.warn(`active attribute ${r} not being supplied`);
                return
            }
            const o = this.attributes[r];
            this.gl.bindBuffer(o.target, o.buffer), this.glState.boundBuffer = o.buffer;
            let l = 1;
            a === 35674 && (l = 2), a === 35675 && (l = 3), a === 35676 && (l = 4);
            const u = o.size / l,
                f = l === 1 ? 0 : l * l * 4,
                d = l === 1 ? 0 : l * 4;
            for (let p = 0; p < l; p++) this.gl.vertexAttribPointer(e + p, u, o.type, o.normalized, o.stride + f, o.offset + p * d), this.gl.enableVertexAttribArray(e + p), this.gl.renderer.vertexAttribDivisor(e + p, o.divisor)
        }), this.attributes.index && this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.attributes.index.buffer)
    }
    draw({
        program: t,
        mode: e = this.gl.TRIANGLES
    }) {
        var a;
        this.gl.renderer.currentGeometry !== `${this.id}_${t.attributeOrder}` && (this.VAOs[t.attributeOrder] || this.createVAO(t), this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]), this.gl.renderer.currentGeometry = `${this.id}_${t.attributeOrder}`), t.attributeLocations.forEach((o, {
            name: l
        }) => {
            const u = this.attributes[l];
            u.needsUpdate && this.updateAttribute(u)
        });
        let r = 2;
        ((a = this.attributes.index) == null ? void 0 : a.type) === this.gl.UNSIGNED_INT && (r = 4), this.isInstanced ? this.attributes.index ? this.gl.renderer.drawElementsInstanced(e, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + this.drawRange.start * r, this.instancedCount) : this.gl.renderer.drawArraysInstanced(e, this.drawRange.start, this.drawRange.count, this.instancedCount) : this.attributes.index ? this.gl.drawElements(e, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + this.drawRange.start * r) : this.gl.drawArrays(e, this.drawRange.start, this.drawRange.count)
    }
    getPosition() {
        const t = this.attributes.position;
        if (t.data) return t;
        if (!qu) return console.warn("No position buffer data found to compute bounds"), qu = !0
    }
    computeBoundingBox(t) {
        t || (t = this.getPosition());
        const e = t.data,
            r = t.size;
        this.bounds || (this.bounds = {
            min: new Nt,
            max: new Nt,
            center: new Nt,
            scale: new Nt,
            radius: 1 / 0
        });
        const a = this.bounds.min,
            o = this.bounds.max,
            l = this.bounds.center,
            u = this.bounds.scale;
        a.set(1 / 0), o.set(-1 / 0);
        for (let f = 0, d = e.length; f < d; f += r) {
            const p = e[f],
                v = e[f + 1],
                m = e[f + 2];
            a.x = Math.min(p, a.x), a.y = Math.min(v, a.y), a.z = Math.min(m, a.z), o.x = Math.max(p, o.x), o.y = Math.max(v, o.y), o.z = Math.max(m, o.z)
        }
        u.sub(o, a), l.add(a, o).divide(2)
    }
    computeBoundingSphere(t) {
        t || (t = this.getPosition());
        const e = t.data,
            r = t.size;
        this.bounds || this.computeBoundingBox(t);
        let a = 0;
        for (let o = 0, l = e.length; o < l; o += r) ku.fromArray(e, o), a = Math.max(a, this.bounds.center.squaredDistance(ku));
        this.bounds.radius = Math.sqrt(a)
    }
    remove() {
        for (let t in this.VAOs) this.gl.renderer.deleteVertexArray(this.VAOs[t]), delete this.VAOs[t];
        for (let t in this.attributes) this.gl.deleteBuffer(this.attributes[t].buffer), delete this.attributes[t]
    }
}
let lx = 1;
const Gu = {};
class Fe {
    constructor(t, {
        vertex: e,
        fragment: r,
        uniforms: a = {},
        transparent: o = !1,
        cullFace: l = t.BACK,
        frontFace: u = t.CCW,
        depthTest: f = !0,
        depthWrite: d = !0,
        depthFunc: p = t.LEQUAL
    } = {}) {
        t.canvas || console.error("gl not passed as first argument to Program"), this.gl = t, this.uniforms = a, this.id = lx++, e || console.warn("vertex shader not supplied"), r || console.warn("fragment shader not supplied"), this.transparent = o, this.cullFace = l, this.frontFace = u, this.depthTest = f, this.depthWrite = d, this.depthFunc = p, this.blendFunc = {}, this.blendEquation = {}, this.stencilFunc = {}, this.stencilOp = {}, this.transparent && !this.blendFunc.src && (this.gl.renderer.premultipliedAlpha ? this.setBlendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA) : this.setBlendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA)), this.vertexShader = t.createShader(t.VERTEX_SHADER), this.fragmentShader = t.createShader(t.FRAGMENT_SHADER), this.program = t.createProgram(), t.attachShader(this.program, this.vertexShader), t.attachShader(this.program, this.fragmentShader), this.setShaders({
            vertex: e,
            fragment: r
        })
    }
    setShaders({
        vertex: t,
        fragment: e
    }) {
        if (t && (this.gl.shaderSource(this.vertexShader, t), this.gl.compileShader(this.vertexShader), this.gl.getShaderInfoLog(this.vertexShader) !== "" && console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}
Vertex Shader
${Vu(t)}`)), e && (this.gl.shaderSource(this.fragmentShader, e), this.gl.compileShader(this.fragmentShader), this.gl.getShaderInfoLog(this.fragmentShader) !== "" && console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}
Fragment Shader
${Vu(e)}`)), this.gl.linkProgram(this.program), !this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS)) return console.warn(this.gl.getProgramInfoLog(this.program));
        this.uniformLocations = new Map;
        let r = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_UNIFORMS);
        for (let l = 0; l < r; l++) {
            let u = this.gl.getActiveUniform(this.program, l);
            this.uniformLocations.set(u, this.gl.getUniformLocation(this.program, u.name));
            const f = u.name.match(/(\w+)/g);
            u.uniformName = f[0], u.nameComponents = f.slice(1)
        }
        this.attributeLocations = new Map;
        const a = [],
            o = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_ATTRIBUTES);
        for (let l = 0; l < o; l++) {
            const u = this.gl.getActiveAttrib(this.program, l),
                f = this.gl.getAttribLocation(this.program, u.name);
            f !== -1 && (a[f] = u.name, this.attributeLocations.set(u, f))
        }
        this.attributeOrder = a.join("")
    }
    setBlendFunc(t, e, r, a) {
        this.blendFunc.src = t, this.blendFunc.dst = e, this.blendFunc.srcAlpha = r, this.blendFunc.dstAlpha = a, t && (this.transparent = !0)
    }
    setBlendEquation(t, e) {
        this.blendEquation.modeRGB = t, this.blendEquation.modeAlpha = e
    }
    setStencilFunc(t, e, r) {
        this.stencilRef = e, this.stencilFunc.func = t, this.stencilFunc.ref = e, this.stencilFunc.mask = r
    }
    setStencilOp(t, e, r) {
        this.stencilOp.stencilFail = t, this.stencilOp.depthFail = e, this.stencilOp.depthPass = r
    }
    applyState() {
        this.depthTest ? this.gl.renderer.enable(this.gl.DEPTH_TEST) : this.gl.renderer.disable(this.gl.DEPTH_TEST), this.cullFace ? this.gl.renderer.enable(this.gl.CULL_FACE) : this.gl.renderer.disable(this.gl.CULL_FACE), this.blendFunc.src ? this.gl.renderer.enable(this.gl.BLEND) : this.gl.renderer.disable(this.gl.BLEND), this.cullFace && this.gl.renderer.setCullFace(this.cullFace), this.gl.renderer.setFrontFace(this.frontFace), this.gl.renderer.setDepthMask(this.depthWrite), this.gl.renderer.setDepthFunc(this.depthFunc), this.blendFunc.src && this.gl.renderer.setBlendFunc(this.blendFunc.src, this.blendFunc.dst, this.blendFunc.srcAlpha, this.blendFunc.dstAlpha), this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB, this.blendEquation.modeAlpha), this.stencilFunc.func || this.stencilOp.stencilFail ? this.gl.renderer.enable(this.gl.STENCIL_TEST) : this.gl.renderer.disable(this.gl.STENCIL_TEST), this.gl.renderer.setStencilFunc(this.stencilFunc.func, this.stencilFunc.ref, this.stencilFunc.mask), this.gl.renderer.setStencilOp(this.stencilOp.stencilFail, this.stencilOp.depthFail, this.stencilOp.depthPass)
    }
    use({
        flipFaces: t = !1
    } = {}) {
        let e = -1;
        this.gl.renderer.state.currentProgram === this.id || (this.gl.useProgram(this.program), this.gl.renderer.state.currentProgram = this.id), this.uniformLocations.forEach((a, o) => {
            let l = this.uniforms[o.uniformName];
            for (const u of o.nameComponents) {
                if (!l) break;
                if (u in l) l = l[u];
                else {
                    if (Array.isArray(l.value)) break;
                    l = void 0;
                    break
                }
            }
            if (!l) return Xu(`Active uniform ${o.name} has not been supplied`);
            if (l && l.value === void 0) return Xu(`${o.name} uniform is missing a value parameter`);
            if (l.value.texture) return e = e + 1, l.value.update(e), io(this.gl, o.type, a, e);
            if (l.value.length && l.value[0].texture) {
                const u = [];
                return l.value.forEach(f => {
                    e = e + 1, f.update(e), u.push(e)
                }), io(this.gl, o.type, a, u)
            }
            io(this.gl, o.type, a, l.value)
        }), this.applyState(), t && this.gl.renderer.setFrontFace(this.frontFace === this.gl.CCW ? this.gl.CW : this.gl.CCW)
    }
    remove() {
        this.gl.deleteProgram(this.program)
    }
}

function io(n, t, e, r) {
    r = r.length ? ux(r) : r;
    const a = n.renderer.state.uniformLocations.get(e);
    if (r.length)
        if (a === void 0 || a.length !== r.length) n.renderer.state.uniformLocations.set(e, r.slice(0));
        else {
            if (fx(a, r)) return;
            a.set ? a.set(r) : cx(a, r), n.renderer.state.uniformLocations.set(e, a)
        }
    else {
        if (a === r) return;
        n.renderer.state.uniformLocations.set(e, r)
    }
    switch (t) {
        case 5126:
            return r.length ? n.uniform1fv(e, r) : n.uniform1f(e, r);
        case 35664:
            return n.uniform2fv(e, r);
        case 35665:
            return n.uniform3fv(e, r);
        case 35666:
            return n.uniform4fv(e, r);
        case 35670:
        case 5124:
        case 35678:
        case 36306:
        case 35680:
        case 36289:
            return r.length ? n.uniform1iv(e, r) : n.uniform1i(e, r);
        case 35671:
        case 35667:
            return n.uniform2iv(e, r);
        case 35672:
        case 35668:
            return n.uniform3iv(e, r);
        case 35673:
        case 35669:
            return n.uniform4iv(e, r);
        case 35674:
            return n.uniformMatrix2fv(e, !1, r);
        case 35675:
            return n.uniformMatrix3fv(e, !1, r);
        case 35676:
            return n.uniformMatrix4fv(e, !1, r)
    }
}

function Vu(n) {
    let t = n.split(`
`);
    for (let e = 0; e < t.length; e++) t[e] = e + 1 + ": " + t[e];
    return t.join(`
`)
}

function ux(n) {
    const t = n.length,
        e = n[0].length;
    if (e === void 0) return n;
    const r = t * e;
    let a = Gu[r];
    a || (Gu[r] = a = new Float32Array(r));
    for (let o = 0; o < t; o++) a.set(n[o], o * e);
    return a
}

function fx(n, t) {
    if (n.length !== t.length) return !1;
    for (let e = 0, r = n.length; e < r; e++)
        if (n[e] !== t[e]) return !1;
    return !0
}

function cx(n, t) {
    for (let e = 0, r = n.length; e < r; e++) n[e] = t[e]
}
let ro = 0;

function Xu(n) {
    ro > 100 || (console.warn(n), ro++, ro > 100 && console.warn("More than 100 program warnings - stopping logs."))
}
const no = new Nt;
let dx = 1;
class px {
    constructor({
        canvas: t = document.createElement("canvas"),
        width: e = 300,
        height: r = 150,
        dpr: a = 1,
        alpha: o = !1,
        depth: l = !0,
        stencil: u = !1,
        antialias: f = !1,
        premultipliedAlpha: d = !1,
        preserveDrawingBuffer: p = !1,
        powerPreference: v = "default",
        autoClear: m = !0,
        webgl: x = 2
    } = {}) {
        const T = {
            alpha: o,
            depth: l,
            stencil: u,
            antialias: f,
            premultipliedAlpha: d,
            preserveDrawingBuffer: p,
            powerPreference: v
        };
        this.dpr = a, this.alpha = o, this.color = !0, this.depth = l, this.stencil = u, this.premultipliedAlpha = d, this.autoClear = m, this.id = dx++, x === 2 && (this.gl = t.getContext("webgl2", T)), this.isWebgl2 = !!this.gl, this.gl || (this.gl = t.getContext("webgl", T)), this.gl || console.error("unable to create webgl context"), this.gl.renderer = this, this.setSize(e, r), this.state = {}, this.state.blendFunc = {
            src: this.gl.ONE,
            dst: this.gl.ZERO
        }, this.state.blendEquation = {
            modeRGB: this.gl.FUNC_ADD
        }, this.state.cullFace = !1, this.state.frontFace = this.gl.CCW, this.state.depthMask = !0, this.state.depthFunc = this.gl.LEQUAL, this.state.premultiplyAlpha = !1, this.state.flipY = !1, this.state.unpackAlignment = 4, this.state.framebuffer = null, this.state.viewport = {
            x: 0,
            y: 0,
            width: null,
            height: null
        }, this.state.textureUnits = [], this.state.activeTextureUnit = 0, this.state.boundBuffer = null, this.state.uniformLocations = new Map, this.state.currentProgram = null, this.extensions = {}, this.isWebgl2 ? (this.getExtension("EXT_color_buffer_float"), this.getExtension("OES_texture_float_linear")) : (this.getExtension("OES_texture_float"), this.getExtension("OES_texture_float_linear"), this.getExtension("OES_texture_half_float"), this.getExtension("OES_texture_half_float_linear"), this.getExtension("OES_element_index_uint"), this.getExtension("OES_standard_derivatives"), this.getExtension("EXT_sRGB"), this.getExtension("WEBGL_depth_texture"), this.getExtension("WEBGL_draw_buffers")), this.getExtension("WEBGL_compressed_texture_astc"), this.getExtension("EXT_texture_compression_bptc"), this.getExtension("WEBGL_compressed_texture_s3tc"), this.getExtension("WEBGL_compressed_texture_etc1"), this.getExtension("WEBGL_compressed_texture_pvrtc"), this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"), this.vertexAttribDivisor = this.getExtension("ANGLE_instanced_arrays", "vertexAttribDivisor", "vertexAttribDivisorANGLE"), this.drawArraysInstanced = this.getExtension("ANGLE_instanced_arrays", "drawArraysInstanced", "drawArraysInstancedANGLE"), this.drawElementsInstanced = this.getExtension("ANGLE_instanced_arrays", "drawElementsInstanced", "drawElementsInstancedANGLE"), this.createVertexArray = this.getExtension("OES_vertex_array_object", "createVertexArray", "createVertexArrayOES"), this.bindVertexArray = this.getExtension("OES_vertex_array_object", "bindVertexArray", "bindVertexArrayOES"), this.deleteVertexArray = this.getExtension("OES_vertex_array_object", "deleteVertexArray", "deleteVertexArrayOES"), this.drawBuffers = this.getExtension("WEBGL_draw_buffers", "drawBuffers", "drawBuffersWEBGL"), this.parameters = {}, this.parameters.maxTextureUnits = this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS), this.parameters.maxAnisotropy = this.getExtension("EXT_texture_filter_anisotropic") ? this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
    }
    setSize(t, e) {
        this.width = t, this.height = e, this.gl.canvas.width = t * this.dpr, this.gl.canvas.height = e * this.dpr, this.gl.canvas.style && Object.assign(this.gl.canvas.style, {
            width: t + "px",
            height: e + "px"
        })
    }
    setViewport(t, e, r = 0, a = 0) {
        this.state.viewport.width === t && this.state.viewport.height === e || (this.state.viewport.width = t, this.state.viewport.height = e, this.state.viewport.x = r, this.state.viewport.y = a, this.gl.viewport(r, a, t, e))
    }
    setScissor(t, e, r = 0, a = 0) {
        this.gl.scissor(r, a, t, e)
    }
    enable(t) {
        this.state[t] !== !0 && (this.gl.enable(t), this.state[t] = !0)
    }
    disable(t) {
        this.state[t] !== !1 && (this.gl.disable(t), this.state[t] = !1)
    }
    setBlendFunc(t, e, r, a) {
        this.state.blendFunc.src === t && this.state.blendFunc.dst === e && this.state.blendFunc.srcAlpha === r && this.state.blendFunc.dstAlpha === a || (this.state.blendFunc.src = t, this.state.blendFunc.dst = e, this.state.blendFunc.srcAlpha = r, this.state.blendFunc.dstAlpha = a, r !== void 0 ? this.gl.blendFuncSeparate(t, e, r, a) : this.gl.blendFunc(t, e))
    }
    setBlendEquation(t, e) {
        t = t || this.gl.FUNC_ADD, !(this.state.blendEquation.modeRGB === t && this.state.blendEquation.modeAlpha === e) && (this.state.blendEquation.modeRGB = t, this.state.blendEquation.modeAlpha = e, e !== void 0 ? this.gl.blendEquationSeparate(t, e) : this.gl.blendEquation(t))
    }
    setCullFace(t) {
        this.state.cullFace !== t && (this.state.cullFace = t, this.gl.cullFace(t))
    }
    setFrontFace(t) {
        this.state.frontFace !== t && (this.state.frontFace = t, this.gl.frontFace(t))
    }
    setDepthMask(t) {
        this.state.depthMask !== t && (this.state.depthMask = t, this.gl.depthMask(t))
    }
    setDepthFunc(t) {
        this.state.depthFunc !== t && (this.state.depthFunc = t, this.gl.depthFunc(t))
    }
    setStencilMask(t) {
        this.state.stencilMask !== t && (this.state.stencilMask = t, this.gl.stencilMask(t))
    }
    setStencilFunc(t, e, r) {
        this.state.stencilFunc === t && this.state.stencilRef === e && this.state.stencilFuncMask === r || (this.state.stencilFunc = t || this.gl.ALWAYS, this.state.stencilRef = e || 0, this.state.stencilFuncMask = r || 0, this.gl.stencilFunc(t || this.gl.ALWAYS, e || 0, r || 0))
    }
    setStencilOp(t, e, r) {
        this.state.stencilFail === t && this.state.stencilDepthFail === e && this.state.stencilDepthPass === r || (this.state.stencilFail = t, this.state.stencilDepthFail = e, this.state.stencilDepthPass = r, this.gl.stencilOp(t, e, r))
    }
    activeTexture(t) {
        this.state.activeTextureUnit !== t && (this.state.activeTextureUnit = t, this.gl.activeTexture(this.gl.TEXTURE0 + t))
    }
    bindFramebuffer({
        target: t = this.gl.FRAMEBUFFER,
        buffer: e = null
    } = {}) {
        this.state.framebuffer !== e && (this.state.framebuffer = e, this.gl.bindFramebuffer(t, e))
    }
    getExtension(t, e, r) {
        return e && this.gl[e] ? this.gl[e].bind(this.gl) : (this.extensions[t] || (this.extensions[t] = this.gl.getExtension(t)), e ? this.extensions[t] ? this.extensions[t][r].bind(this.extensions[t]) : null : this.extensions[t])
    }
    sortOpaque(t, e) {
        return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program.id !== e.program.id ? t.program.id - e.program.id : t.zDepth !== e.zDepth ? t.zDepth - e.zDepth : e.id - t.id
    }
    sortTransparent(t, e) {
        return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.zDepth !== e.zDepth ? e.zDepth - t.zDepth : e.id - t.id
    }
    sortUI(t, e) {
        return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program.id !== e.program.id ? t.program.id - e.program.id : e.id - t.id
    }
    getRenderList({
        scene: t,
        camera: e,
        frustumCull: r,
        sort: a
    }) {
        let o = [];
        if (e && r && e.updateFrustum(), t.traverse(l => {
                if (!l.visible) return !0;
                l.draw && (r && l.frustumCulled && e && !e.frustumIntersectsMesh(l) || o.push(l))
            }), a) {
            const l = [],
                u = [],
                f = [];
            o.forEach(d => {
                d.program.transparent ? d.program.depthTest ? u.push(d) : f.push(d) : l.push(d), d.zDepth = 0, !(d.renderOrder !== 0 || !d.program.depthTest || !e) && (d.worldMatrix.getTranslation(no), no.applyMatrix4(e.projectionViewMatrix), d.zDepth = no.z)
            }), l.sort(this.sortOpaque), u.sort(this.sortTransparent), f.sort(this.sortUI), o = l.concat(u, f)
        }
        return o
    }
    render({
        scene: t,
        camera: e,
        target: r = null,
        update: a = !0,
        sort: o = !0,
        frustumCull: l = !0,
        clear: u
    }) {
        r === null ? (this.bindFramebuffer(), this.setViewport(this.width * this.dpr, this.height * this.dpr)) : (this.bindFramebuffer(r), this.setViewport(r.width, r.height)), (u || this.autoClear && u !== !1) && (this.depth && (!r || r.depth) && (this.enable(this.gl.DEPTH_TEST), this.setDepthMask(!0)), (this.stencil || !r || r.stencil) && (this.enable(this.gl.STENCIL_TEST), this.setStencilMask(255)), this.gl.clear((this.color ? this.gl.COLOR_BUFFER_BIT : 0) | (this.depth ? this.gl.DEPTH_BUFFER_BIT : 0) | (this.stencil ? this.gl.STENCIL_BUFFER_BIT : 0))), a && t.updateMatrixWorld(), e && e.updateMatrixWorld(), this.getRenderList({
            scene: t,
            camera: e,
            frustumCull: l,
            sort: o
        }).forEach(d => {
            d.draw({
                camera: e
            })
        })
    }
}

function gx(n, t) {
    return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n
}

function _x(n, t, e, r, a) {
    return n[0] = t, n[1] = e, n[2] = r, n[3] = a, n
}

function mx(n, t) {
    let e = t[0],
        r = t[1],
        a = t[2],
        o = t[3],
        l = e * e + r * r + a * a + o * o;
    return l > 0 && (l = 1 / Math.sqrt(l)), n[0] = e * l, n[1] = r * l, n[2] = a * l, n[3] = o * l, n
}

function vx(n, t) {
    return n[0] * t[0] + n[1] * t[1] + n[2] * t[2] + n[3] * t[3]
}

function xx(n) {
    return n[0] = 0, n[1] = 0, n[2] = 0, n[3] = 1, n
}

function yx(n, t, e) {
    e = e * .5;
    let r = Math.sin(e);
    return n[0] = r * t[0], n[1] = r * t[1], n[2] = r * t[2], n[3] = Math.cos(e), n
}

function Hu(n, t, e) {
    let r = t[0],
        a = t[1],
        o = t[2],
        l = t[3],
        u = e[0],
        f = e[1],
        d = e[2],
        p = e[3];
    return n[0] = r * p + l * u + a * d - o * f, n[1] = a * p + l * f + o * u - r * d, n[2] = o * p + l * d + r * f - a * u, n[3] = l * p - r * u - a * f - o * d, n
}

function wx(n, t, e) {
    e *= .5;
    let r = t[0],
        a = t[1],
        o = t[2],
        l = t[3],
        u = Math.sin(e),
        f = Math.cos(e);
    return n[0] = r * f + l * u, n[1] = a * f + o * u, n[2] = o * f - a * u, n[3] = l * f - r * u, n
}

function Tx(n, t, e) {
    e *= .5;
    let r = t[0],
        a = t[1],
        o = t[2],
        l = t[3],
        u = Math.sin(e),
        f = Math.cos(e);
    return n[0] = r * f - o * u, n[1] = a * f + l * u, n[2] = o * f + r * u, n[3] = l * f - a * u, n
}

function Ex(n, t, e) {
    e *= .5;
    let r = t[0],
        a = t[1],
        o = t[2],
        l = t[3],
        u = Math.sin(e),
        f = Math.cos(e);
    return n[0] = r * f + a * u, n[1] = a * f - r * u, n[2] = o * f + l * u, n[3] = l * f - o * u, n
}

function Sx(n, t, e, r) {
    let a = t[0],
        o = t[1],
        l = t[2],
        u = t[3],
        f = e[0],
        d = e[1],
        p = e[2],
        v = e[3],
        m, x, T, _, E;
    return x = a * f + o * d + l * p + u * v, x < 0 && (x = -x, f = -f, d = -d, p = -p, v = -v), 1 - x > 1e-6 ? (m = Math.acos(x), T = Math.sin(m), _ = Math.sin((1 - r) * m) / T, E = Math.sin(r * m) / T) : (_ = 1 - r, E = r), n[0] = _ * a + E * f, n[1] = _ * o + E * d, n[2] = _ * l + E * p, n[3] = _ * u + E * v, n
}

function bx(n, t) {
    let e = t[0],
        r = t[1],
        a = t[2],
        o = t[3],
        l = e * e + r * r + a * a + o * o,
        u = l ? 1 / l : 0;
    return n[0] = -e * u, n[1] = -r * u, n[2] = -a * u, n[3] = o * u, n
}

function Ax(n, t) {
    return n[0] = -t[0], n[1] = -t[1], n[2] = -t[2], n[3] = t[3], n
}

function Rx(n, t) {
    let e = t[0] + t[4] + t[8],
        r;
    if (e > 0) r = Math.sqrt(e + 1), n[3] = .5 * r, r = .5 / r, n[0] = (t[5] - t[7]) * r, n[1] = (t[6] - t[2]) * r, n[2] = (t[1] - t[3]) * r;
    else {
        let a = 0;
        t[4] > t[0] && (a = 1), t[8] > t[a * 3 + a] && (a = 2);
        let o = (a + 1) % 3,
            l = (a + 2) % 3;
        r = Math.sqrt(t[a * 3 + a] - t[o * 3 + o] - t[l * 3 + l] + 1), n[a] = .5 * r, r = .5 / r, n[3] = (t[o * 3 + l] - t[l * 3 + o]) * r, n[o] = (t[o * 3 + a] + t[a * 3 + o]) * r, n[l] = (t[l * 3 + a] + t[a * 3 + l]) * r
    }
    return n
}

function Mx(n, t, e = "YXZ") {
    let r = Math.sin(t[0] * .5),
        a = Math.cos(t[0] * .5),
        o = Math.sin(t[1] * .5),
        l = Math.cos(t[1] * .5),
        u = Math.sin(t[2] * .5),
        f = Math.cos(t[2] * .5);
    return e === "XYZ" ? (n[0] = r * l * f + a * o * u, n[1] = a * o * f - r * l * u, n[2] = a * l * u + r * o * f, n[3] = a * l * f - r * o * u) : e === "YXZ" ? (n[0] = r * l * f + a * o * u, n[1] = a * o * f - r * l * u, n[2] = a * l * u - r * o * f, n[3] = a * l * f + r * o * u) : e === "ZXY" ? (n[0] = r * l * f - a * o * u, n[1] = a * o * f + r * l * u, n[2] = a * l * u + r * o * f, n[3] = a * l * f - r * o * u) : e === "ZYX" ? (n[0] = r * l * f - a * o * u, n[1] = a * o * f + r * l * u, n[2] = a * l * u - r * o * f, n[3] = a * l * f + r * o * u) : e === "YZX" ? (n[0] = r * l * f + a * o * u, n[1] = a * o * f + r * l * u, n[2] = a * l * u - r * o * f, n[3] = a * l * f - r * o * u) : e === "XZY" && (n[0] = r * l * f - a * o * u, n[1] = a * o * f - r * l * u, n[2] = a * l * u + r * o * f, n[3] = a * l * f + r * o * u), n
}
const Cx = gx,
    Px = _x,
    Ox = vx,
    Lx = mx;
class Dx extends Array {
    constructor(t = 0, e = 0, r = 0, a = 1) {
        super(t, e, r, a), this.onChange = () => {}, this._target = this;
        const o = ["0", "1", "2", "3"];
        return new Proxy(this, {
            set(l, u) {
                const f = Reflect.set(...arguments);
                return f && o.includes(u) && l.onChange(), f
            }
        })
    }
    get x() {
        return this[0]
    }
    get y() {
        return this[1]
    }
    get z() {
        return this[2]
    }
    get w() {
        return this[3]
    }
    set x(t) {
        this._target[0] = t, this.onChange()
    }
    set y(t) {
        this._target[1] = t, this.onChange()
    }
    set z(t) {
        this._target[2] = t, this.onChange()
    }
    set w(t) {
        this._target[3] = t, this.onChange()
    }
    identity() {
        return xx(this._target), this.onChange(), this
    }
    set(t, e, r, a) {
        return t.length ? this.copy(t) : (Px(this._target, t, e, r, a), this.onChange(), this)
    }
    rotateX(t) {
        return wx(this._target, this._target, t), this.onChange(), this
    }
    rotateY(t) {
        return Tx(this._target, this._target, t), this.onChange(), this
    }
    rotateZ(t) {
        return Ex(this._target, this._target, t), this.onChange(), this
    }
    inverse(t = this._target) {
        return bx(this._target, t), this.onChange(), this
    }
    conjugate(t = this._target) {
        return Ax(this._target, t), this.onChange(), this
    }
    copy(t) {
        return Cx(this._target, t), this.onChange(), this
    }
    normalize(t = this._target) {
        return Lx(this._target, t), this.onChange(), this
    }
    multiply(t, e) {
        return e ? Hu(this._target, t, e) : Hu(this._target, this._target, t), this.onChange(), this
    }
    dot(t) {
        return Ox(this._target, t)
    }
    fromMatrix3(t) {
        return Rx(this._target, t), this.onChange(), this
    }
    fromEuler(t, e) {
        return Mx(this._target, t, t.order), e || this.onChange(), this
    }
    fromAxisAngle(t, e) {
        return yx(this._target, t, e), this.onChange(), this
    }
    slerp(t, e) {
        return Sx(this._target, this._target, t, e), this.onChange(), this
    }
    fromArray(t, e = 0) {
        return this._target[0] = t[e], this._target[1] = t[e + 1], this._target[2] = t[e + 2], this._target[3] = t[e + 3], this.onChange(), this
    }
    toArray(t = [], e = 0) {
        return t[e] = this[0], t[e + 1] = this[1], t[e + 2] = this[2], t[e + 3] = this[3], t
    }
}
const Fx = 1e-6;

function Ix(n, t) {
    return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n[4] = t[4], n[5] = t[5], n[6] = t[6], n[7] = t[7], n[8] = t[8], n[9] = t[9], n[10] = t[10], n[11] = t[11], n[12] = t[12], n[13] = t[13], n[14] = t[14], n[15] = t[15], n
}

function zx(n, t, e, r, a, o, l, u, f, d, p, v, m, x, T, _, E) {
    return n[0] = t, n[1] = e, n[2] = r, n[3] = a, n[4] = o, n[5] = l, n[6] = u, n[7] = f, n[8] = d, n[9] = p, n[10] = v, n[11] = m, n[12] = x, n[13] = T, n[14] = _, n[15] = E, n
}

function Nx(n) {
    return n[0] = 1, n[1] = 0, n[2] = 0, n[3] = 0, n[4] = 0, n[5] = 1, n[6] = 0, n[7] = 0, n[8] = 0, n[9] = 0, n[10] = 1, n[11] = 0, n[12] = 0, n[13] = 0, n[14] = 0, n[15] = 1, n
}

function Bx(n, t) {
    let e = t[0],
        r = t[1],
        a = t[2],
        o = t[3],
        l = t[4],
        u = t[5],
        f = t[6],
        d = t[7],
        p = t[8],
        v = t[9],
        m = t[10],
        x = t[11],
        T = t[12],
        _ = t[13],
        E = t[14],
        b = t[15],
        L = e * u - r * l,
        M = e * f - a * l,
        C = e * d - o * l,
        R = r * f - a * u,
        D = r * d - o * u,
        N = a * d - o * f,
        z = p * _ - v * T,
        F = p * E - m * T,
        q = p * b - x * T,
        Y = v * E - m * _,
        G = v * b - x * _,
        V = m * b - x * E,
        X = L * V - M * G + C * Y + R * q - D * F + N * z;
    return X ? (X = 1 / X, n[0] = (u * V - f * G + d * Y) * X, n[1] = (a * G - r * V - o * Y) * X, n[2] = (_ * N - E * D + b * R) * X, n[3] = (m * D - v * N - x * R) * X, n[4] = (f * q - l * V - d * F) * X, n[5] = (e * V - a * q + o * F) * X, n[6] = (E * C - T * N - b * M) * X, n[7] = (p * N - m * C + x * M) * X, n[8] = (l * G - u * q + d * z) * X, n[9] = (r * q - e * G - o * z) * X, n[10] = (T * D - _ * C + b * L) * X, n[11] = (v * C - p * D - x * L) * X, n[12] = (u * F - l * Y - f * z) * X, n[13] = (e * Y - r * F + a * z) * X, n[14] = (_ * M - T * R - E * L) * X, n[15] = (p * R - v * M + m * L) * X, n) : null
}

function Wf(n) {
    let t = n[0],
        e = n[1],
        r = n[2],
        a = n[3],
        o = n[4],
        l = n[5],
        u = n[6],
        f = n[7],
        d = n[8],
        p = n[9],
        v = n[10],
        m = n[11],
        x = n[12],
        T = n[13],
        _ = n[14],
        E = n[15],
        b = t * l - e * o,
        L = t * u - r * o,
        M = t * f - a * o,
        C = e * u - r * l,
        R = e * f - a * l,
        D = r * f - a * u,
        N = d * T - p * x,
        z = d * _ - v * x,
        F = d * E - m * x,
        q = p * _ - v * T,
        Y = p * E - m * T,
        G = v * E - m * _;
    return b * G - L * Y + M * q + C * F - R * z + D * N
}

function $u(n, t, e) {
    let r = t[0],
        a = t[1],
        o = t[2],
        l = t[3],
        u = t[4],
        f = t[5],
        d = t[6],
        p = t[7],
        v = t[8],
        m = t[9],
        x = t[10],
        T = t[11],
        _ = t[12],
        E = t[13],
        b = t[14],
        L = t[15],
        M = e[0],
        C = e[1],
        R = e[2],
        D = e[3];
    return n[0] = M * r + C * u + R * v + D * _, n[1] = M * a + C * f + R * m + D * E, n[2] = M * o + C * d + R * x + D * b, n[3] = M * l + C * p + R * T + D * L, M = e[4], C = e[5], R = e[6], D = e[7], n[4] = M * r + C * u + R * v + D * _, n[5] = M * a + C * f + R * m + D * E, n[6] = M * o + C * d + R * x + D * b, n[7] = M * l + C * p + R * T + D * L, M = e[8], C = e[9], R = e[10], D = e[11], n[8] = M * r + C * u + R * v + D * _, n[9] = M * a + C * f + R * m + D * E, n[10] = M * o + C * d + R * x + D * b, n[11] = M * l + C * p + R * T + D * L, M = e[12], C = e[13], R = e[14], D = e[15], n[12] = M * r + C * u + R * v + D * _, n[13] = M * a + C * f + R * m + D * E, n[14] = M * o + C * d + R * x + D * b, n[15] = M * l + C * p + R * T + D * L, n
}

function Ux(n, t, e) {
    let r = e[0],
        a = e[1],
        o = e[2],
        l, u, f, d, p, v, m, x, T, _, E, b;
    return t === n ? (n[12] = t[0] * r + t[4] * a + t[8] * o + t[12], n[13] = t[1] * r + t[5] * a + t[9] * o + t[13], n[14] = t[2] * r + t[6] * a + t[10] * o + t[14], n[15] = t[3] * r + t[7] * a + t[11] * o + t[15]) : (l = t[0], u = t[1], f = t[2], d = t[3], p = t[4], v = t[5], m = t[6], x = t[7], T = t[8], _ = t[9], E = t[10], b = t[11], n[0] = l, n[1] = u, n[2] = f, n[3] = d, n[4] = p, n[5] = v, n[6] = m, n[7] = x, n[8] = T, n[9] = _, n[10] = E, n[11] = b, n[12] = l * r + p * a + T * o + t[12], n[13] = u * r + v * a + _ * o + t[13], n[14] = f * r + m * a + E * o + t[14], n[15] = d * r + x * a + b * o + t[15]), n
}

function Wx(n, t, e) {
    let r = e[0],
        a = e[1],
        o = e[2];
    return n[0] = t[0] * r, n[1] = t[1] * r, n[2] = t[2] * r, n[3] = t[3] * r, n[4] = t[4] * a, n[5] = t[5] * a, n[6] = t[6] * a, n[7] = t[7] * a, n[8] = t[8] * o, n[9] = t[9] * o, n[10] = t[10] * o, n[11] = t[11] * o, n[12] = t[12], n[13] = t[13], n[14] = t[14], n[15] = t[15], n
}

function kx(n, t, e, r) {
    let a = r[0],
        o = r[1],
        l = r[2],
        u = Math.hypot(a, o, l),
        f, d, p, v, m, x, T, _, E, b, L, M, C, R, D, N, z, F, q, Y, G, V, X, tt;
    return Math.abs(u) < Fx ? null : (u = 1 / u, a *= u, o *= u, l *= u, f = Math.sin(e), d = Math.cos(e), p = 1 - d, v = t[0], m = t[1], x = t[2], T = t[3], _ = t[4], E = t[5], b = t[6], L = t[7], M = t[8], C = t[9], R = t[10], D = t[11], N = a * a * p + d, z = o * a * p + l * f, F = l * a * p - o * f, q = a * o * p - l * f, Y = o * o * p + d, G = l * o * p + a * f, V = a * l * p + o * f, X = o * l * p - a * f, tt = l * l * p + d, n[0] = v * N + _ * z + M * F, n[1] = m * N + E * z + C * F, n[2] = x * N + b * z + R * F, n[3] = T * N + L * z + D * F, n[4] = v * q + _ * Y + M * G, n[5] = m * q + E * Y + C * G, n[6] = x * q + b * Y + R * G, n[7] = T * q + L * Y + D * G, n[8] = v * V + _ * X + M * tt, n[9] = m * V + E * X + C * tt, n[10] = x * V + b * X + R * tt, n[11] = T * V + L * X + D * tt, t !== n && (n[12] = t[12], n[13] = t[13], n[14] = t[14], n[15] = t[15]), n)
}

function qx(n, t) {
    return n[0] = t[12], n[1] = t[13], n[2] = t[14], n
}

function kf(n, t) {
    let e = t[0],
        r = t[1],
        a = t[2],
        o = t[4],
        l = t[5],
        u = t[6],
        f = t[8],
        d = t[9],
        p = t[10];
    return n[0] = Math.hypot(e, r, a), n[1] = Math.hypot(o, l, u), n[2] = Math.hypot(f, d, p), n
}

function Gx(n) {
    let t = n[0],
        e = n[1],
        r = n[2],
        a = n[4],
        o = n[5],
        l = n[6],
        u = n[8],
        f = n[9],
        d = n[10];
    const p = t * t + e * e + r * r,
        v = a * a + o * o + l * l,
        m = u * u + f * f + d * d;
    return Math.sqrt(Math.max(p, v, m))
}
const qf = function() {
    const n = [1, 1, 1];
    return function(t, e) {
        let r = n;
        kf(r, e);
        let a = 1 / r[0],
            o = 1 / r[1],
            l = 1 / r[2],
            u = e[0] * a,
            f = e[1] * o,
            d = e[2] * l,
            p = e[4] * a,
            v = e[5] * o,
            m = e[6] * l,
            x = e[8] * a,
            T = e[9] * o,
            _ = e[10] * l,
            E = u + v + _,
            b = 0;
        return E > 0 ? (b = Math.sqrt(E + 1) * 2, t[3] = .25 * b, t[0] = (m - T) / b, t[1] = (x - d) / b, t[2] = (f - p) / b) : u > v && u > _ ? (b = Math.sqrt(1 + u - v - _) * 2, t[3] = (m - T) / b, t[0] = .25 * b, t[1] = (f + p) / b, t[2] = (x + d) / b) : v > _ ? (b = Math.sqrt(1 + v - u - _) * 2, t[3] = (x - d) / b, t[0] = (f + p) / b, t[1] = .25 * b, t[2] = (m + T) / b) : (b = Math.sqrt(1 + _ - u - v) * 2, t[3] = (f - p) / b, t[0] = (x + d) / b, t[1] = (m + T) / b, t[2] = .25 * b), t
    }
}();

function Vx(n, t, e, r) {
    let a = un([n[0], n[1], n[2]]);
    const o = un([n[4], n[5], n[6]]),
        l = un([n[8], n[9], n[10]]);
    Wf(n) < 0 && (a = -a), e[0] = n[12], e[1] = n[13], e[2] = n[14];
    const f = n.slice(),
        d = 1 / a,
        p = 1 / o,
        v = 1 / l;
    f[0] *= d, f[1] *= d, f[2] *= d, f[4] *= p, f[5] *= p, f[6] *= p, f[8] *= v, f[9] *= v, f[10] *= v, qf(t, f), r[0] = a, r[1] = o, r[2] = l
}

function Xx(n, t, e, r) {
    const a = n,
        o = t[0],
        l = t[1],
        u = t[2],
        f = t[3],
        d = o + o,
        p = l + l,
        v = u + u,
        m = o * d,
        x = o * p,
        T = o * v,
        _ = l * p,
        E = l * v,
        b = u * v,
        L = f * d,
        M = f * p,
        C = f * v,
        R = r[0],
        D = r[1],
        N = r[2];
    return a[0] = (1 - (_ + b)) * R, a[1] = (x + C) * R, a[2] = (T - M) * R, a[3] = 0, a[4] = (x - C) * D, a[5] = (1 - (m + b)) * D, a[6] = (E + L) * D, a[7] = 0, a[8] = (T + M) * N, a[9] = (E - L) * N, a[10] = (1 - (m + _)) * N, a[11] = 0, a[12] = e[0], a[13] = e[1], a[14] = e[2], a[15] = 1, a
}

function Hx(n, t) {
    let e = t[0],
        r = t[1],
        a = t[2],
        o = t[3],
        l = e + e,
        u = r + r,
        f = a + a,
        d = e * l,
        p = r * l,
        v = r * u,
        m = a * l,
        x = a * u,
        T = a * f,
        _ = o * l,
        E = o * u,
        b = o * f;
    return n[0] = 1 - v - T, n[1] = p + b, n[2] = m - E, n[3] = 0, n[4] = p - b, n[5] = 1 - d - T, n[6] = x + _, n[7] = 0, n[8] = m + E, n[9] = x - _, n[10] = 1 - d - v, n[11] = 0, n[12] = 0, n[13] = 0, n[14] = 0, n[15] = 1, n
}

function $x(n, t, e, r, a) {
    let o = 1 / Math.tan(t / 2),
        l = 1 / (r - a);
    return n[0] = o / e, n[1] = 0, n[2] = 0, n[3] = 0, n[4] = 0, n[5] = o, n[6] = 0, n[7] = 0, n[8] = 0, n[9] = 0, n[10] = (a + r) * l, n[11] = -1, n[12] = 0, n[13] = 0, n[14] = 2 * a * r * l, n[15] = 0, n
}

function Yx(n, t, e, r, a, o, l) {
    let u = 1 / (t - e),
        f = 1 / (r - a),
        d = 1 / (o - l);
    return n[0] = -2 * u, n[1] = 0, n[2] = 0, n[3] = 0, n[4] = 0, n[5] = -2 * f, n[6] = 0, n[7] = 0, n[8] = 0, n[9] = 0, n[10] = 2 * d, n[11] = 0, n[12] = (t + e) * u, n[13] = (a + r) * f, n[14] = (l + o) * d, n[15] = 1, n
}

function Kx(n, t, e, r) {
    let a = t[0],
        o = t[1],
        l = t[2],
        u = r[0],
        f = r[1],
        d = r[2],
        p = a - e[0],
        v = o - e[1],
        m = l - e[2],
        x = p * p + v * v + m * m;
    x === 0 ? m = 1 : (x = 1 / Math.sqrt(x), p *= x, v *= x, m *= x);
    let T = f * m - d * v,
        _ = d * p - u * m,
        E = u * v - f * p;
    return x = T * T + _ * _ + E * E, x === 0 && (d ? u += 1e-6 : f ? d += 1e-6 : f += 1e-6, T = f * m - d * v, _ = d * p - u * m, E = u * v - f * p, x = T * T + _ * _ + E * E), x = 1 / Math.sqrt(x), T *= x, _ *= x, E *= x, n[0] = T, n[1] = _, n[2] = E, n[3] = 0, n[4] = v * E - m * _, n[5] = m * T - p * E, n[6] = p * _ - v * T, n[7] = 0, n[8] = p, n[9] = v, n[10] = m, n[11] = 0, n[12] = a, n[13] = o, n[14] = l, n[15] = 1, n
}

function Yu(n, t, e) {
    return n[0] = t[0] + e[0], n[1] = t[1] + e[1], n[2] = t[2] + e[2], n[3] = t[3] + e[3], n[4] = t[4] + e[4], n[5] = t[5] + e[5], n[6] = t[6] + e[6], n[7] = t[7] + e[7], n[8] = t[8] + e[8], n[9] = t[9] + e[9], n[10] = t[10] + e[10], n[11] = t[11] + e[11], n[12] = t[12] + e[12], n[13] = t[13] + e[13], n[14] = t[14] + e[14], n[15] = t[15] + e[15], n
}

function Ku(n, t, e) {
    return n[0] = t[0] - e[0], n[1] = t[1] - e[1], n[2] = t[2] - e[2], n[3] = t[3] - e[3], n[4] = t[4] - e[4], n[5] = t[5] - e[5], n[6] = t[6] - e[6], n[7] = t[7] - e[7], n[8] = t[8] - e[8], n[9] = t[9] - e[9], n[10] = t[10] - e[10], n[11] = t[11] - e[11], n[12] = t[12] - e[12], n[13] = t[13] - e[13], n[14] = t[14] - e[14], n[15] = t[15] - e[15], n
}

function Zx(n, t, e) {
    return n[0] = t[0] * e, n[1] = t[1] * e, n[2] = t[2] * e, n[3] = t[3] * e, n[4] = t[4] * e, n[5] = t[5] * e, n[6] = t[6] * e, n[7] = t[7] * e, n[8] = t[8] * e, n[9] = t[9] * e, n[10] = t[10] * e, n[11] = t[11] * e, n[12] = t[12] * e, n[13] = t[13] * e, n[14] = t[14] * e, n[15] = t[15] * e, n
}
class Li extends Array {
    constructor(t = 1, e = 0, r = 0, a = 0, o = 0, l = 1, u = 0, f = 0, d = 0, p = 0, v = 1, m = 0, x = 0, T = 0, _ = 0, E = 1) {
        return super(t, e, r, a, o, l, u, f, d, p, v, m, x, T, _, E), this
    }
    get x() {
        return this[12]
    }
    get y() {
        return this[13]
    }
    get z() {
        return this[14]
    }
    get w() {
        return this[15]
    }
    set x(t) {
        this[12] = t
    }
    set y(t) {
        this[13] = t
    }
    set z(t) {
        this[14] = t
    }
    set w(t) {
        this[15] = t
    }
    set(t, e, r, a, o, l, u, f, d, p, v, m, x, T, _, E) {
        return t.length ? this.copy(t) : (zx(this, t, e, r, a, o, l, u, f, d, p, v, m, x, T, _, E), this)
    }
    translate(t, e = this) {
        return Ux(this, e, t), this
    }
    rotate(t, e, r = this) {
        return kx(this, r, t, e), this
    }
    scale(t, e = this) {
        return Wx(this, e, typeof t == "number" ? [t, t, t] : t), this
    }
    add(t, e) {
        return e ? Yu(this, t, e) : Yu(this, this, t), this
    }
    sub(t, e) {
        return e ? Ku(this, t, e) : Ku(this, this, t), this
    }
    multiply(t, e) {
        return t.length ? e ? $u(this, t, e) : $u(this, this, t) : Zx(this, this, t), this
    }
    identity() {
        return Nx(this), this
    }
    copy(t) {
        return Ix(this, t), this
    }
    fromPerspective({
        fov: t,
        aspect: e,
        near: r,
        far: a
    } = {}) {
        return $x(this, t, e, r, a), this
    }
    fromOrthogonal({
        left: t,
        right: e,
        bottom: r,
        top: a,
        near: o,
        far: l
    }) {
        return Yx(this, t, e, r, a, o, l), this
    }
    fromQuaternion(t) {
        return Hx(this, t), this
    }
    setPosition(t) {
        return this.x = t[0], this.y = t[1], this.z = t[2], this
    }
    inverse(t = this) {
        return Bx(this, t), this
    }
    compose(t, e, r) {
        return Xx(this, t, e, r), this
    }
    decompose(t, e, r) {
        return Vx(this, t, e, r), this
    }
    getRotation(t) {
        return qf(t, this), this
    }
    getTranslation(t) {
        return qx(t, this), this
    }
    getScaling(t) {
        return kf(t, this), this
    }
    getMaxScaleOnAxis() {
        return Gx(this)
    }
    lookAt(t, e, r) {
        return Kx(this, t, e, r), this
    }
    determinant() {
        return Wf(this)
    }
    fromArray(t, e = 0) {
        return this[0] = t[e], this[1] = t[e + 1], this[2] = t[e + 2], this[3] = t[e + 3], this[4] = t[e + 4], this[5] = t[e + 5], this[6] = t[e + 6], this[7] = t[e + 7], this[8] = t[e + 8], this[9] = t[e + 9], this[10] = t[e + 10], this[11] = t[e + 11], this[12] = t[e + 12], this[13] = t[e + 13], this[14] = t[e + 14], this[15] = t[e + 15], this
    }
    toArray(t = [], e = 0) {
        return t[e] = this[0], t[e + 1] = this[1], t[e + 2] = this[2], t[e + 3] = this[3], t[e + 4] = this[4], t[e + 5] = this[5], t[e + 6] = this[6], t[e + 7] = this[7], t[e + 8] = this[8], t[e + 9] = this[9], t[e + 10] = this[10], t[e + 11] = this[11], t[e + 12] = this[12], t[e + 13] = this[13], t[e + 14] = this[14], t[e + 15] = this[15], t
    }
}

function Qx(n, t, e = "YXZ") {
    return e === "XYZ" ? (n[1] = Math.asin(Math.min(Math.max(t[8], -1), 1)), Math.abs(t[8]) < .99999 ? (n[0] = Math.atan2(-t[9], t[10]), n[2] = Math.atan2(-t[4], t[0])) : (n[0] = Math.atan2(t[6], t[5]), n[2] = 0)) : e === "YXZ" ? (n[0] = Math.asin(-Math.min(Math.max(t[9], -1), 1)), Math.abs(t[9]) < .99999 ? (n[1] = Math.atan2(t[8], t[10]), n[2] = Math.atan2(t[1], t[5])) : (n[1] = Math.atan2(-t[2], t[0]), n[2] = 0)) : e === "ZXY" ? (n[0] = Math.asin(Math.min(Math.max(t[6], -1), 1)), Math.abs(t[6]) < .99999 ? (n[1] = Math.atan2(-t[2], t[10]), n[2] = Math.atan2(-t[4], t[5])) : (n[1] = 0, n[2] = Math.atan2(t[1], t[0]))) : e === "ZYX" ? (n[1] = Math.asin(-Math.min(Math.max(t[2], -1), 1)), Math.abs(t[2]) < .99999 ? (n[0] = Math.atan2(t[6], t[10]), n[2] = Math.atan2(t[1], t[0])) : (n[0] = 0, n[2] = Math.atan2(-t[4], t[5]))) : e === "YZX" ? (n[2] = Math.asin(Math.min(Math.max(t[1], -1), 1)), Math.abs(t[1]) < .99999 ? (n[0] = Math.atan2(-t[9], t[5]), n[1] = Math.atan2(-t[2], t[0])) : (n[0] = 0, n[1] = Math.atan2(t[8], t[10]))) : e === "XZY" && (n[2] = Math.asin(-Math.min(Math.max(t[4], -1), 1)), Math.abs(t[4]) < .99999 ? (n[0] = Math.atan2(t[6], t[5]), n[1] = Math.atan2(t[8], t[0])) : (n[0] = Math.atan2(-t[9], t[10]), n[1] = 0)), n
}
const Zu = new Li;
class Jx extends Array {
    constructor(t = 0, e = t, r = t, a = "YXZ") {
        super(t, e, r), this.order = a, this.onChange = () => {}, this._target = this;
        const o = ["0", "1", "2"];
        return new Proxy(this, {
            set(l, u) {
                const f = Reflect.set(...arguments);
                return f && o.includes(u) && l.onChange(), f
            }
        })
    }
    get x() {
        return this[0]
    }
    get y() {
        return this[1]
    }
    get z() {
        return this[2]
    }
    set x(t) {
        this._target[0] = t, this.onChange()
    }
    set y(t) {
        this._target[1] = t, this.onChange()
    }
    set z(t) {
        this._target[2] = t, this.onChange()
    }
    set(t, e = t, r = t) {
        return t.length ? this.copy(t) : (this._target[0] = t, this._target[1] = e, this._target[2] = r, this.onChange(), this)
    }
    copy(t) {
        return this._target[0] = t[0], this._target[1] = t[1], this._target[2] = t[2], this.onChange(), this
    }
    reorder(t) {
        return this._target.order = t, this.onChange(), this
    }
    fromRotationMatrix(t, e = this.order) {
        return Qx(this._target, t, e), this.onChange(), this
    }
    fromQuaternion(t, e = this.order, r) {
        return Zu.fromQuaternion(t), this._target.fromRotationMatrix(Zu, e), r || this.onChange(), this
    }
    fromArray(t, e = 0) {
        return this._target[0] = t[e], this._target[1] = t[e + 1], this._target[2] = t[e + 2], this
    }
    toArray(t = [], e = 0) {
        return t[e] = this[0], t[e + 1] = this[1], t[e + 2] = this[2], t
    }
}
class Wo {
    constructor() {
        this.parent = null, this.children = [], this.visible = !0, this.matrix = new Li, this.worldMatrix = new Li, this.matrixAutoUpdate = !0, this.worldMatrixNeedsUpdate = !1, this.position = new Nt, this.quaternion = new Dx, this.scale = new Nt(1), this.rotation = new Jx, this.up = new Nt(0, 1, 0), this.rotation._target.onChange = () => this.quaternion.fromEuler(this.rotation, !0), this.quaternion._target.onChange = () => this.rotation.fromQuaternion(this.quaternion, void 0, !0)
    }
    setParent(t, e = !0) {
        this.parent && t !== this.parent && this.parent.removeChild(this, !1), this.parent = t, e && t && t.addChild(this, !1)
    }
    addChild(t, e = !0) {
        ~this.children.indexOf(t) || this.children.push(t), e && t.setParent(this, !1)
    }
    removeChild(t, e = !0) {
        ~this.children.indexOf(t) && this.children.splice(this.children.indexOf(t), 1), e && t.setParent(null, !1)
    }
    updateMatrixWorld(t) {
        this.matrixAutoUpdate && this.updateMatrix(), (this.worldMatrixNeedsUpdate || t) && (this.parent === null ? this.worldMatrix.copy(this.matrix) : this.worldMatrix.multiply(this.parent.worldMatrix, this.matrix), this.worldMatrixNeedsUpdate = !1, t = !0);
        for (let e = 0, r = this.children.length; e < r; e++) this.children[e].updateMatrixWorld(t)
    }
    updateMatrix() {
        this.matrix.compose(this.quaternion, this.position, this.scale), this.worldMatrixNeedsUpdate = !0
    }
    traverse(t) {
        if (!t(this))
            for (let e = 0, r = this.children.length; e < r; e++) this.children[e].traverse(t)
    }
    decompose() {
        this.matrix.decompose(this.quaternion._target, this.position, this.scale), this.rotation.fromQuaternion(this.quaternion)
    }
    lookAt(t, e = !1) {
        e ? this.matrix.lookAt(this.position, t, this.up) : this.matrix.lookAt(t, this.position, this.up), this.matrix.getRotation(this.quaternion._target), this.rotation.fromQuaternion(this.quaternion)
    }
}
const jx = new Li,
    ty = new Nt,
    ey = new Nt;
class iy extends Wo {
    constructor(t, {
        near: e = .1,
        far: r = 100,
        fov: a = 45,
        aspect: o = 1,
        left: l,
        right: u,
        bottom: f,
        top: d,
        zoom: p = 1
    } = {}) {
        super(), Object.assign(this, {
            near: e,
            far: r,
            fov: a,
            aspect: o,
            left: l,
            right: u,
            bottom: f,
            top: d,
            zoom: p
        }), this.projectionMatrix = new Li, this.viewMatrix = new Li, this.projectionViewMatrix = new Li, this.worldPosition = new Nt, this.type = l || u ? "orthographic" : "perspective", this.type === "orthographic" ? this.orthographic() : this.perspective()
    }
    perspective({
        near: t = this.near,
        far: e = this.far,
        fov: r = this.fov,
        aspect: a = this.aspect
    } = {}) {
        return Object.assign(this, {
            near: t,
            far: e,
            fov: r,
            aspect: a
        }), this.projectionMatrix.fromPerspective({
            fov: r * (Math.PI / 180),
            aspect: a,
            near: t,
            far: e
        }), this.type = "perspective", this
    }
    orthographic({
        near: t = this.near,
        far: e = this.far,
        left: r = this.left || -1,
        right: a = this.right || 1,
        bottom: o = this.bottom || -1,
        top: l = this.top || 1,
        zoom: u = this.zoom
    } = {}) {
        return Object.assign(this, {
            near: t,
            far: e,
            left: r,
            right: a,
            bottom: o,
            top: l,
            zoom: u
        }), r /= u, a /= u, o /= u, l /= u, this.projectionMatrix.fromOrthogonal({
            left: r,
            right: a,
            bottom: o,
            top: l,
            near: t,
            far: e
        }), this.type = "orthographic", this
    }
    updateMatrixWorld() {
        return super.updateMatrixWorld(), this.viewMatrix.inverse(this.worldMatrix), this.worldMatrix.getTranslation(this.worldPosition), this.projectionViewMatrix.multiply(this.projectionMatrix, this.viewMatrix), this
    }
    updateProjectionMatrix() {
        return this.type === "perspective" ? this.perspective() : this.orthographic()
    }
    lookAt(t) {
        return super.lookAt(t, !0), this
    }
    project(t) {
        return t.applyMatrix4(this.viewMatrix), t.applyMatrix4(this.projectionMatrix), this
    }
    unproject(t) {
        return t.applyMatrix4(jx.inverse(this.projectionMatrix)), t.applyMatrix4(this.worldMatrix), this
    }
    updateFrustum() {
        this.frustum || (this.frustum = [new Nt, new Nt, new Nt, new Nt, new Nt, new Nt]);
        const t = this.projectionViewMatrix;
        this.frustum[0].set(t[3] - t[0], t[7] - t[4], t[11] - t[8]).constant = t[15] - t[12], this.frustum[1].set(t[3] + t[0], t[7] + t[4], t[11] + t[8]).constant = t[15] + t[12], this.frustum[2].set(t[3] + t[1], t[7] + t[5], t[11] + t[9]).constant = t[15] + t[13], this.frustum[3].set(t[3] - t[1], t[7] - t[5], t[11] - t[9]).constant = t[15] - t[13], this.frustum[4].set(t[3] - t[2], t[7] - t[6], t[11] - t[10]).constant = t[15] - t[14], this.frustum[5].set(t[3] + t[2], t[7] + t[6], t[11] + t[10]).constant = t[15] + t[14];
        for (let e = 0; e < 6; e++) {
            const r = 1 / this.frustum[e].distance();
            this.frustum[e].multiply(r), this.frustum[e].constant *= r
        }
    }
    frustumIntersectsMesh(t, e = t.worldMatrix) {
        if (!t.geometry.attributes.position || ((!t.geometry.bounds || t.geometry.bounds.radius === 1 / 0) && t.geometry.computeBoundingSphere(), !t.geometry.bounds)) return !0;
        const r = ty;
        r.copy(t.geometry.bounds.center), r.applyMatrix4(e);
        const a = t.geometry.bounds.radius * e.getMaxScaleOnAxis();
        return this.frustumIntersectsSphere(r, a)
    }
    frustumIntersectsSphere(t, e) {
        const r = ey;
        for (let a = 0; a < 6; a++) {
            const o = this.frustum[a];
            if (r.copy(o).dot(t) + o.constant < -e) return !1
        }
        return !0
    }
}

function ry(n, t) {
    return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[4], n[4] = t[5], n[5] = t[6], n[6] = t[8], n[7] = t[9], n[8] = t[10], n
}

function ny(n, t) {
    let e = t[0],
        r = t[1],
        a = t[2],
        o = t[3],
        l = e + e,
        u = r + r,
        f = a + a,
        d = e * l,
        p = r * l,
        v = r * u,
        m = a * l,
        x = a * u,
        T = a * f,
        _ = o * l,
        E = o * u,
        b = o * f;
    return n[0] = 1 - v - T, n[3] = p - b, n[6] = m + E, n[1] = p + b, n[4] = 1 - d - T, n[7] = x - _, n[2] = m - E, n[5] = x + _, n[8] = 1 - d - v, n
}

function sy(n, t) {
    return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n[4] = t[4], n[5] = t[5], n[6] = t[6], n[7] = t[7], n[8] = t[8], n
}

function ay(n, t, e, r, a, o, l, u, f, d) {
    return n[0] = t, n[1] = e, n[2] = r, n[3] = a, n[4] = o, n[5] = l, n[6] = u, n[7] = f, n[8] = d, n
}

function oy(n) {
    return n[0] = 1, n[1] = 0, n[2] = 0, n[3] = 0, n[4] = 1, n[5] = 0, n[6] = 0, n[7] = 0, n[8] = 1, n
}

function hy(n, t) {
    let e = t[0],
        r = t[1],
        a = t[2],
        o = t[3],
        l = t[4],
        u = t[5],
        f = t[6],
        d = t[7],
        p = t[8],
        v = p * l - u * d,
        m = -p * o + u * f,
        x = d * o - l * f,
        T = e * v + r * m + a * x;
    return T ? (T = 1 / T, n[0] = v * T, n[1] = (-p * r + a * d) * T, n[2] = (u * r - a * l) * T, n[3] = m * T, n[4] = (p * e - a * f) * T, n[5] = (-u * e + a * o) * T, n[6] = x * T, n[7] = (-d * e + r * f) * T, n[8] = (l * e - r * o) * T, n) : null
}

function Qu(n, t, e) {
    let r = t[0],
        a = t[1],
        o = t[2],
        l = t[3],
        u = t[4],
        f = t[5],
        d = t[6],
        p = t[7],
        v = t[8],
        m = e[0],
        x = e[1],
        T = e[2],
        _ = e[3],
        E = e[4],
        b = e[5],
        L = e[6],
        M = e[7],
        C = e[8];
    return n[0] = m * r + x * l + T * d, n[1] = m * a + x * u + T * p, n[2] = m * o + x * f + T * v, n[3] = _ * r + E * l + b * d, n[4] = _ * a + E * u + b * p, n[5] = _ * o + E * f + b * v, n[6] = L * r + M * l + C * d, n[7] = L * a + M * u + C * p, n[8] = L * o + M * f + C * v, n
}

function ly(n, t, e) {
    let r = t[0],
        a = t[1],
        o = t[2],
        l = t[3],
        u = t[4],
        f = t[5],
        d = t[6],
        p = t[7],
        v = t[8],
        m = e[0],
        x = e[1];
    return n[0] = r, n[1] = a, n[2] = o, n[3] = l, n[4] = u, n[5] = f, n[6] = m * r + x * l + d, n[7] = m * a + x * u + p, n[8] = m * o + x * f + v, n
}

function uy(n, t, e) {
    let r = t[0],
        a = t[1],
        o = t[2],
        l = t[3],
        u = t[4],
        f = t[5],
        d = t[6],
        p = t[7],
        v = t[8],
        m = Math.sin(e),
        x = Math.cos(e);
    return n[0] = x * r + m * l, n[1] = x * a + m * u, n[2] = x * o + m * f, n[3] = x * l - m * r, n[4] = x * u - m * a, n[5] = x * f - m * o, n[6] = d, n[7] = p, n[8] = v, n
}

function fy(n, t, e) {
    let r = e[0],
        a = e[1];
    return n[0] = r * t[0], n[1] = r * t[1], n[2] = r * t[2], n[3] = a * t[3], n[4] = a * t[4], n[5] = a * t[5], n[6] = t[6], n[7] = t[7], n[8] = t[8], n
}

function cy(n, t) {
    let e = t[0],
        r = t[1],
        a = t[2],
        o = t[3],
        l = t[4],
        u = t[5],
        f = t[6],
        d = t[7],
        p = t[8],
        v = t[9],
        m = t[10],
        x = t[11],
        T = t[12],
        _ = t[13],
        E = t[14],
        b = t[15],
        L = e * u - r * l,
        M = e * f - a * l,
        C = e * d - o * l,
        R = r * f - a * u,
        D = r * d - o * u,
        N = a * d - o * f,
        z = p * _ - v * T,
        F = p * E - m * T,
        q = p * b - x * T,
        Y = v * E - m * _,
        G = v * b - x * _,
        V = m * b - x * E,
        X = L * V - M * G + C * Y + R * q - D * F + N * z;
    return X ? (X = 1 / X, n[0] = (u * V - f * G + d * Y) * X, n[1] = (f * q - l * V - d * F) * X, n[2] = (l * G - u * q + d * z) * X, n[3] = (a * G - r * V - o * Y) * X, n[4] = (e * V - a * q + o * F) * X, n[5] = (r * q - e * G - o * z) * X, n[6] = (_ * N - E * D + b * R) * X, n[7] = (E * C - T * N - b * M) * X, n[8] = (T * D - _ * C + b * L) * X, n) : null
}
class dy extends Array {
    constructor(t = 1, e = 0, r = 0, a = 0, o = 1, l = 0, u = 0, f = 0, d = 1) {
        return super(t, e, r, a, o, l, u, f, d), this
    }
    set(t, e, r, a, o, l, u, f, d) {
        return t.length ? this.copy(t) : (ay(this, t, e, r, a, o, l, u, f, d), this)
    }
    translate(t, e = this) {
        return ly(this, e, t), this
    }
    rotate(t, e = this) {
        return uy(this, e, t), this
    }
    scale(t, e = this) {
        return fy(this, e, t), this
    }
    multiply(t, e) {
        return e ? Qu(this, t, e) : Qu(this, this, t), this
    }
    identity() {
        return oy(this), this
    }
    copy(t) {
        return sy(this, t), this
    }
    fromMatrix4(t) {
        return ry(this, t), this
    }
    fromQuaternion(t) {
        return ny(this, t), this
    }
    fromBasis(t, e, r) {
        return this.set(t[0], t[1], t[2], e[0], e[1], e[2], r[0], r[1], r[2]), this
    }
    inverse(t = this) {
        return hy(this, t), this
    }
    getNormalMatrix(t) {
        return cy(this, t), this
    }
}
let py = 0;
class Ie extends Wo {
    constructor(t, {
        geometry: e,
        program: r,
        mode: a = t.TRIANGLES,
        frustumCulled: o = !0,
        renderOrder: l = 0
    } = {}) {
        super(), t.canvas || console.error("gl not passed as first argument to Mesh"), this.gl = t, this.id = py++, this.geometry = e, this.program = r, this.mode = a, this.frustumCulled = o, this.renderOrder = l, this.modelViewMatrix = new Li, this.normalMatrix = new dy, this.beforeRenderCallbacks = [], this.afterRenderCallbacks = []
    }
    onBeforeRender(t) {
        return this.beforeRenderCallbacks.push(t), this
    }
    onAfterRender(t) {
        return this.afterRenderCallbacks.push(t), this
    }
    draw({
        camera: t
    } = {}) {
        t && (this.program.uniforms.modelMatrix || Object.assign(this.program.uniforms, {
            modelMatrix: {
                value: null
            },
            viewMatrix: {
                value: null
            },
            modelViewMatrix: {
                value: null
            },
            normalMatrix: {
                value: null
            },
            projectionMatrix: {
                value: null
            },
            cameraPosition: {
                value: null
            }
        }), this.program.uniforms.projectionMatrix.value = t.projectionMatrix, this.program.uniforms.cameraPosition.value = t.worldPosition, this.program.uniforms.viewMatrix.value = t.viewMatrix, this.modelViewMatrix.multiply(t.viewMatrix, this.worldMatrix), this.normalMatrix.getNormalMatrix(this.modelViewMatrix), this.program.uniforms.modelMatrix.value = this.worldMatrix, this.program.uniforms.modelViewMatrix.value = this.modelViewMatrix, this.program.uniforms.normalMatrix.value = this.normalMatrix), this.beforeRenderCallbacks.forEach(r => r && r({
            mesh: this,
            camera: t
        }));
        let e = this.program.cullFace && this.worldMatrix.determinant() < 0;
        this.program.use({
            flipFaces: e
        }), this.geometry.draw({
            mode: this.mode,
            program: this.program
        }), this.afterRenderCallbacks.forEach(r => r && r({
            mesh: this,
            camera: t
        }))
    }
}
const Ju = new Uint8Array(4);

function ju(n) {
    return (n & n - 1) === 0
}
let gy = 1;
class pn {
    constructor(t, {
        image: e,
        target: r = t.TEXTURE_2D,
        type: a = t.UNSIGNED_BYTE,
        format: o = t.RGBA,
        internalFormat: l = o,
        wrapS: u = t.CLAMP_TO_EDGE,
        wrapT: f = t.CLAMP_TO_EDGE,
        wrapR: d = t.CLAMP_TO_EDGE,
        generateMipmaps: p = r === (t.TEXTURE_2D || t.TEXTURE_CUBE_MAP),
        minFilter: v = p ? t.NEAREST_MIPMAP_LINEAR : t.LINEAR,
        magFilter: m = t.LINEAR,
        premultiplyAlpha: x = !1,
        unpackAlignment: T = 4,
        flipY: _ = r == (t.TEXTURE_2D || t.TEXTURE_3D),
        anisotropy: E = 0,
        level: b = 0,
        width: L,
        height: M = L,
        length: C = 1
    } = {}) {
        this.gl = t, this.id = gy++, this.image = e, this.target = r, this.type = a, this.format = o, this.internalFormat = l, this.minFilter = v, this.magFilter = m, this.wrapS = u, this.wrapT = f, this.wrapR = d, this.generateMipmaps = p, this.premultiplyAlpha = x, this.unpackAlignment = T, this.flipY = _, this.anisotropy = Math.min(E, this.gl.renderer.parameters.maxAnisotropy), this.level = b, this.width = L, this.height = M, this.length = C, this.texture = this.gl.createTexture(), this.store = {
            image: null
        }, this.glState = this.gl.renderer.state, this.state = {}, this.state.minFilter = this.gl.NEAREST_MIPMAP_LINEAR, this.state.magFilter = this.gl.LINEAR, this.state.wrapS = this.gl.REPEAT, this.state.wrapT = this.gl.REPEAT, this.state.anisotropy = 0
    }
    bind() {
        this.glState.textureUnits[this.glState.activeTextureUnit] !== this.id && (this.gl.bindTexture(this.target, this.texture), this.glState.textureUnits[this.glState.activeTextureUnit] = this.id)
    }
    update(t = 0) {
        const e = !(this.image === this.store.image && !this.needsUpdate);
        if ((e || this.glState.textureUnits[t] !== this.id) && (this.gl.renderer.activeTexture(t), this.bind()), !!e) {
            if (this.needsUpdate = !1, this.flipY !== this.glState.flipY && (this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, this.flipY), this.glState.flipY = this.flipY), this.premultiplyAlpha !== this.glState.premultiplyAlpha && (this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha), this.glState.premultiplyAlpha = this.premultiplyAlpha), this.unpackAlignment !== this.glState.unpackAlignment && (this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, this.unpackAlignment), this.glState.unpackAlignment = this.unpackAlignment), this.minFilter !== this.state.minFilter && (this.gl.texParameteri(this.target, this.gl.TEXTURE_MIN_FILTER, this.minFilter), this.state.minFilter = this.minFilter), this.magFilter !== this.state.magFilter && (this.gl.texParameteri(this.target, this.gl.TEXTURE_MAG_FILTER, this.magFilter), this.state.magFilter = this.magFilter), this.wrapS !== this.state.wrapS && (this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_S, this.wrapS), this.state.wrapS = this.wrapS), this.wrapT !== this.state.wrapT && (this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_T, this.wrapT), this.state.wrapT = this.wrapT), this.wrapR !== this.state.wrapR && (this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_R, this.wrapR), this.state.wrapR = this.wrapR), this.anisotropy && this.anisotropy !== this.state.anisotropy && (this.gl.texParameterf(this.target, this.gl.renderer.getExtension("EXT_texture_filter_anisotropic").TEXTURE_MAX_ANISOTROPY_EXT, this.anisotropy), this.state.anisotropy = this.anisotropy), this.image) {
                if (this.image.width && (this.width = this.image.width, this.height = this.image.height), this.target === this.gl.TEXTURE_CUBE_MAP)
                    for (let r = 0; r < 6; r++) this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + r, this.level, this.internalFormat, this.format, this.type, this.image[r]);
                else if (ArrayBuffer.isView(this.image)) this.target === this.gl.TEXTURE_2D ? this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, this.image) : (this.target === this.gl.TEXTURE_2D_ARRAY || this.target === this.gl.TEXTURE_3D) && this.gl.texImage3D(this.target, this.level, this.internalFormat, this.width, this.height, this.length, 0, this.format, this.type, this.image);
                else if (this.image.isCompressedTexture)
                    for (let r = 0; r < this.image.length; r++) this.gl.compressedTexImage2D(this.target, r, this.internalFormat, this.image[r].width, this.image[r].height, 0, this.image[r].data);
                else this.target === this.gl.TEXTURE_2D ? this.gl.texImage2D(this.target, this.level, this.internalFormat, this.format, this.type, this.image) : this.gl.texImage3D(this.target, this.level, this.internalFormat, this.width, this.height, this.length, 0, this.format, this.type, this.image);
                this.generateMipmaps && (!this.gl.renderer.isWebgl2 && (!ju(this.image.width) || !ju(this.image.height)) ? (this.generateMipmaps = !1, this.wrapS = this.wrapT = this.gl.CLAMP_TO_EDGE, this.minFilter = this.gl.LINEAR) : this.gl.generateMipmap(this.target)), this.onUpdate && this.onUpdate()
            } else if (this.target === this.gl.TEXTURE_CUBE_MAP)
                for (let r = 0; r < 6; r++) this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + r, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, Ju);
            else this.width ? this.target === this.gl.TEXTURE_2D ? this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, null) : this.gl.texImage3D(this.target, this.level, this.internalFormat, this.width, this.height, this.length, 0, this.format, this.type, null) : this.gl.texImage2D(this.target, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, Ju);
            this.store.image = this.image
        }
    }
}
class Mr {
    constructor(t, {
        width: e = t.canvas.width,
        height: r = t.canvas.height,
        target: a = t.FRAMEBUFFER,
        color: o = 1,
        depth: l = !0,
        stencil: u = !1,
        depthTexture: f = !1,
        wrapS: d = t.CLAMP_TO_EDGE,
        wrapT: p = t.CLAMP_TO_EDGE,
        wrapR: v = t.CLAMP_TO_EDGE,
        minFilter: m = t.LINEAR,
        magFilter: x = m,
        type: T = t.UNSIGNED_BYTE,
        format: _ = t.RGBA,
        internalFormat: E = _,
        unpackAlignment: b,
        premultiplyAlpha: L
    } = {}) {
        this.gl = t, this.width = e, this.height = r, this.depth = l, this.stencil = u, this.buffer = this.gl.createFramebuffer(), this.target = a, this.gl.renderer.bindFramebuffer(this), this.textures = [];
        const M = [];
        for (let C = 0; C < o; C++) this.textures.push(new pn(t, {
            width: e,
            height: r,
            wrapS: d,
            wrapT: p,
            wrapR: v,
            minFilter: m,
            magFilter: x,
            type: T,
            format: _,
            internalFormat: E,
            unpackAlignment: b,
            premultiplyAlpha: L,
            flipY: !1,
            generateMipmaps: !1
        })), this.textures[C].update(), this.gl.framebufferTexture2D(this.target, this.gl.COLOR_ATTACHMENT0 + C, this.gl.TEXTURE_2D, this.textures[C].texture, 0), M.push(this.gl.COLOR_ATTACHMENT0 + C);
        M.length > 1 && this.gl.renderer.drawBuffers(M), this.texture = this.textures[0], f && (this.gl.renderer.isWebgl2 || this.gl.renderer.getExtension("WEBGL_depth_texture")) ? (this.depthTexture = new pn(t, {
            width: e,
            height: r,
            minFilter: this.gl.NEAREST,
            magFilter: this.gl.NEAREST,
            format: this.stencil ? this.gl.DEPTH_STENCIL : this.gl.DEPTH_COMPONENT,
            internalFormat: t.renderer.isWebgl2 ? this.stencil ? this.gl.DEPTH24_STENCIL8 : this.gl.DEPTH_COMPONENT16 : this.gl.DEPTH_COMPONENT,
            type: this.stencil ? this.gl.UNSIGNED_INT_24_8 : this.gl.UNSIGNED_INT
        }), this.depthTexture.update(), this.gl.framebufferTexture2D(this.target, this.stencil ? this.gl.DEPTH_STENCIL_ATTACHMENT : this.gl.DEPTH_ATTACHMENT, this.gl.TEXTURE_2D, this.depthTexture.texture, 0)) : (l && !u && (this.depthBuffer = this.gl.createRenderbuffer(), this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthBuffer), this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_COMPONENT16, e, r), this.gl.framebufferRenderbuffer(this.target, this.gl.DEPTH_ATTACHMENT, this.gl.RENDERBUFFER, this.depthBuffer)), u && !l && (this.stencilBuffer = this.gl.createRenderbuffer(), this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.stencilBuffer), this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.STENCIL_INDEX8, e, r), this.gl.framebufferRenderbuffer(this.target, this.gl.STENCIL_ATTACHMENT, this.gl.RENDERBUFFER, this.stencilBuffer)), l && u && (this.depthStencilBuffer = this.gl.createRenderbuffer(), this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthStencilBuffer), this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_STENCIL, e, r), this.gl.framebufferRenderbuffer(this.target, this.gl.DEPTH_STENCIL_ATTACHMENT, this.gl.RENDERBUFFER, this.depthStencilBuffer))), this.gl.renderer.bindFramebuffer({
            target: this.target
        })
    }
    setSize(t, e) {
        if (!(this.width === t && this.height === e)) {
            this.width = t, this.height = e, this.gl.renderer.bindFramebuffer(this);
            for (let r = 0; r < this.textures.length; r++) this.textures[r].width = t, this.textures[r].height = e, this.textures[r].needsUpdate = !0, this.textures[r].update(), this.gl.framebufferTexture2D(this.target, this.gl.COLOR_ATTACHMENT0 + r, this.gl.TEXTURE_2D, this.textures[r].texture, 0);
            this.depthTexture ? (this.depthTexture.width = t, this.depthTexture.height = e, this.depthTexture.needsUpdate = !0, this.depthTexture.update(), this.gl.framebufferTexture2D(this.target, this.gl.DEPTH_ATTACHMENT, this.gl.TEXTURE_2D, this.depthTexture.texture, 0)) : (this.depthBuffer && (this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthBuffer), this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_COMPONENT16, t, e)), this.stencilBuffer && (this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.stencilBuffer), this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.STENCIL_INDEX8, t, e)), this.depthStencilBuffer && (this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthStencilBuffer), this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_STENCIL, t, e))), this.gl.renderer.bindFramebuffer({
                target: this.target
            })
        }
    }
}
const tf = {
    black: "#000000",
    white: "#ffffff",
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    fuchsia: "#ff00ff",
    cyan: "#00ffff",
    yellow: "#ffff00",
    orange: "#ff8000"
};

function ef(n) {
    n.length === 4 && (n = n[0] + n[1] + n[1] + n[2] + n[2] + n[3] + n[3]);
    const t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n);
    return t || console.warn(`Unable to convert hex string ${n} to rgb values`), [parseInt(t[1], 16) / 255, parseInt(t[2], 16) / 255, parseInt(t[3], 16) / 255]
}

function _y(n) {
    return n = parseInt(n), [(n >> 16 & 255) / 255, (n >> 8 & 255) / 255, (n & 255) / 255]
}

function rf(n) {
    return n === void 0 ? [0, 0, 0] : arguments.length === 3 ? arguments : isNaN(n) ? n[0] === "#" ? ef(n) : tf[n.toLowerCase()] ? ef(tf[n.toLowerCase()]) : (console.warn("Color format not recognised"), [0, 0, 0]) : _y(n)
}
class my extends Array {
    constructor(t) {
        return Array.isArray(t) ? super(...t) : super(...rf(...arguments))
    }
    get r() {
        return this[0]
    }
    get g() {
        return this[1]
    }
    get b() {
        return this[2]
    }
    set r(t) {
        this[0] = t
    }
    set g(t) {
        this[1] = t
    }
    set b(t) {
        this[2] = t
    }
    set(t) {
        return Array.isArray(t) ? this.copy(t) : this.copy(rf(...arguments))
    }
    copy(t) {
        return this[0] = t[0], this[1] = t[1], this[2] = t[2], this
    }
}

function vy(n, t) {
    return n[0] = t[0], n[1] = t[1], n
}

function xy(n, t, e) {
    return n[0] = t, n[1] = e, n
}

function nf(n, t, e) {
    return n[0] = t[0] + e[0], n[1] = t[1] + e[1], n
}

function sf(n, t, e) {
    return n[0] = t[0] - e[0], n[1] = t[1] - e[1], n
}

function yy(n, t, e) {
    return n[0] = t[0] * e[0], n[1] = t[1] * e[1], n
}

function wy(n, t, e) {
    return n[0] = t[0] / e[0], n[1] = t[1] / e[1], n
}

function so(n, t, e) {
    return n[0] = t[0] * e, n[1] = t[1] * e, n
}

function Ty(n, t) {
    var e = t[0] - n[0],
        r = t[1] - n[1];
    return Math.sqrt(e * e + r * r)
}

function Ey(n, t) {
    var e = t[0] - n[0],
        r = t[1] - n[1];
    return e * e + r * r
}

function af(n) {
    var t = n[0],
        e = n[1];
    return Math.sqrt(t * t + e * e)
}

function Sy(n) {
    var t = n[0],
        e = n[1];
    return t * t + e * e
}

function by(n, t) {
    return n[0] = -t[0], n[1] = -t[1], n
}

function Ay(n, t) {
    return n[0] = 1 / t[0], n[1] = 1 / t[1], n
}

function Ry(n, t) {
    var e = t[0],
        r = t[1],
        a = e * e + r * r;
    return a > 0 && (a = 1 / Math.sqrt(a)), n[0] = t[0] * a, n[1] = t[1] * a, n
}

function My(n, t) {
    return n[0] * t[0] + n[1] * t[1]
}

function of (n, t) {
    return n[0] * t[1] - n[1] * t[0]
}

function Cy(n, t, e, r) {
    var a = t[0],
        o = t[1];
    return n[0] = a + r * (e[0] - a), n[1] = o + r * (e[1] - o), n
}

function Py(n, t, e, r, a) {
    const o = Math.exp(-r * a);
    let l = t[0],
        u = t[1];
    return n[0] = e[0] + (l - e[0]) * o, n[1] = e[1] + (u - e[1]) * o, n
}

function Oy(n, t, e) {
    var r = t[0],
        a = t[1];
    return n[0] = e[0] * r + e[3] * a + e[6], n[1] = e[1] * r + e[4] * a + e[7], n
}

function Ly(n, t, e) {
    let r = t[0],
        a = t[1];
    return n[0] = e[0] * r + e[4] * a + e[12], n[1] = e[1] * r + e[5] * a + e[13], n
}

function Dy(n, t) {
    return n[0] === t[0] && n[1] === t[1]
}
class Mi extends Array {
    constructor(t = 0, e = t) {
        return super(t, e), this
    }
    get x() {
        return this[0]
    }
    get y() {
        return this[1]
    }
    set x(t) {
        this[0] = t
    }
    set y(t) {
        this[1] = t
    }
    set(t, e = t) {
        return t.length ? this.copy(t) : (xy(this, t, e), this)
    }
    copy(t) {
        return vy(this, t), this
    }
    add(t, e) {
        return e ? nf(this, t, e) : nf(this, this, t), this
    }
    sub(t, e) {
        return e ? sf(this, t, e) : sf(this, this, t), this
    }
    multiply(t) {
        return t.length ? yy(this, this, t) : so(this, this, t), this
    }
    divide(t) {
        return t.length ? wy(this, this, t) : so(this, this, 1 / t), this
    }
    inverse(t = this) {
        return Ay(this, t), this
    }
    len() {
        return af(this)
    }
    distance(t) {
        return t ? Ty(this, t) : af(this)
    }
    squaredLen() {
        return this.squaredDistance()
    }
    squaredDistance(t) {
        return t ? Ey(this, t) : Sy(this)
    }
    negate(t = this) {
        return by(this, t), this
    }
    cross(t, e) {
        return e ? of (t, e) : of (this, t)
    }
    scale(t) {
        return so(this, this, t), this
    }
    normalize() {
        return Ry(this, this), this
    }
    dot(t) {
        return My(this, t)
    }
    equals(t) {
        return Dy(this, t)
    }
    applyMatrix3(t) {
        return Oy(this, this, t), this
    }
    applyMatrix4(t) {
        return Ly(this, this, t), this
    }
    lerp(t, e) {
        return Cy(this, this, t, e), this
    }
    smoothLerp(t, e, r) {
        return Py(this, this, t, e, r), this
    }
    clone() {
        return new Mi(this[0], this[1])
    }
    fromArray(t, e = 0) {
        return this[0] = t[e], this[1] = t[e + 1], this
    }
    toArray(t = [], e = 0) {
        return t[e] = this[0], t[e + 1] = this[1], t
    }
}
class ko extends Uo {
    constructor(t, {
        width: e = 1,
        height: r = 1,
        widthSegments: a = 1,
        heightSegments: o = 1,
        attributes: l = {}
    } = {}) {
        const u = a,
            f = o,
            d = (u + 1) * (f + 1),
            p = u * f * 6,
            v = new Float32Array(d * 3),
            m = new Float32Array(d * 3),
            x = new Float32Array(d * 2),
            T = p > 65536 ? new Uint32Array(p) : new Uint16Array(p);
        ko.buildPlane(v, m, x, T, e, r, 0, u, f), Object.assign(l, {
            position: {
                size: 3,
                data: v
            },
            normal: {
                size: 3,
                data: m
            },
            uv: {
                size: 2,
                data: x
            },
            index: {
                data: T
            }
        }), super(t, l)
    }
    static buildPlane(t, e, r, a, o, l, u, f, d, p = 0, v = 1, m = 2, x = 1, T = -1, _ = 0, E = 0) {
        const b = _,
            L = o / f,
            M = l / d;
        for (let C = 0; C <= d; C++) {
            let R = C * M - l / 2;
            for (let D = 0; D <= f; D++, _++) {
                let N = D * L - o / 2;
                if (t[_ * 3 + p] = N * x, t[_ * 3 + v] = R * T, t[_ * 3 + m] = u / 2, e[_ * 3 + p] = 0, e[_ * 3 + v] = 0, e[_ * 3 + m] = u >= 0 ? 1 : -1, r[_ * 2] = D / f, r[_ * 2 + 1] = 1 - C / d, C === d || D === f) continue;
                let z = b + D + C * (f + 1),
                    F = b + D + (C + 1) * (f + 1),
                    q = b + D + (C + 1) * (f + 1) + 1,
                    Y = b + D + C * (f + 1) + 1;
                a[E * 6] = z, a[E * 6 + 1] = F, a[E * 6 + 2] = Y, a[E * 6 + 3] = F, a[E * 6 + 4] = q, a[E * 6 + 5] = Y, E++
            }
        }
    }
}
class Fy extends Uo {
    constructor(t, {
        attributes: e = {}
    } = {}) {
        Object.assign(e, {
            position: {
                size: 2,
                data: new Float32Array([-1, -1, 3, -1, -1, 3])
            },
            uv: {
                size: 2,
                data: new Float32Array([0, 0, 2, 0, 0, 2])
            }
        }), super(t, e)
    }
}
class Iy {
    constructor(t, {
        width: e,
        height: r,
        dpr: a,
        wrapS: o = t.CLAMP_TO_EDGE,
        wrapT: l = t.CLAMP_TO_EDGE,
        minFilter: u = t.LINEAR,
        magFilter: f = t.LINEAR,
        geometry: d = new Fy(t),
        targetOnly: p = null,
        depth: v = !0
    } = {}) {
        this.gl = t, this.passes = [], this.geometry = d, this.uniform = {
            value: null
        }, this.targetOnly = p, a && (this.dpr = a), e && (this.width = e), r && (this.height = r), a = this.dpr || this.gl.renderer.dpr, this.resolutionWidth = Math.floor(this.width || this.gl.renderer.width * a), this.resolutionHeight = Math.floor(this.height || this.gl.renderer.height * a);
        let m = {
            dpr: this.dpr,
            width: this.resolutionWidth,
            height: this.resolutionHeight,
            wrapS: o,
            wrapT: l,
            minFilter: u,
            magFilter: f,
            depth: v
        };
        const x = this.fbo = {
            read: new Mr(this.gl, m),
            write: new Mr(this.gl, m),
            swap: () => {
                let T = x.read;
                x.read = x.write, x.write = T
            }
        }
    }
    addPass({
        vertex: t = zy,
        fragment: e = Ny,
        uniforms: r = {},
        textureUniform: a = "tMap",
        enabled: o = !0
    } = {}) {
        r[a] = {
            value: this.fbo.read.texture
        };
        const l = new Fe(this.gl, {
                vertex: t,
                fragment: e,
                uniforms: r
            }),
            f = {
                mesh: new Ie(this.gl, {
                    geometry: this.geometry,
                    program: l
                }),
                program: l,
                uniforms: r,
                enabled: o,
                textureUniform: a
            };
        return this.passes.push(f), f
    }
    resize({
        width: t,
        height: e,
        dpr: r
    } = {}) {
        r && (this.dpr = r), t && (this.width = t), e && (this.height = e), r = this.dpr || this.gl.renderer.dpr, this.resolutionWidth = Math.floor(this.width || this.gl.renderer.width * r), this.resolutionHeight = Math.floor(this.height || this.gl.renderer.height * r), this.fbo.read.setSize(this.resolutionWidth, this.resolutionHeight), this.fbo.write.setSize(this.resolutionWidth, this.resolutionHeight)
    }
    render({
        scene: t,
        camera: e,
        texture: r,
        target: a = null,
        update: o = !0,
        sort: l = !0,
        frustumCull: u = !0,
        beforePostCallbacks: f
    }) {
        const d = this.passes.filter(p => p.enabled);
        r || (this.gl.renderer.render({
            scene: t,
            camera: e,
            target: d.length || !a && this.targetOnly ? this.fbo.write : a,
            update: o,
            sort: l,
            frustumCull: u
        }), this.fbo.swap(), f && f.forEach(p => p && p())), d.forEach((p, v) => {
            p.mesh.program.uniforms[p.textureUniform].value = !v && r ? r : this.fbo.read.texture, this.gl.renderer.render({
                scene: p.mesh,
                target: v === d.length - 1 && (a || !this.targetOnly) ? a : this.fbo.write,
                clear: !0
            }), this.fbo.swap()
        }), this.uniform.value = this.fbo.read.texture
    }
}
const zy = `
    attribute vec2 uv;
    attribute vec2 position;

    varying vec2 vUv;

    void main() {
        vUv = uv;
        gl_Position = vec4(position, 0, 1);
    }
`,
    Ny = `
    precision highp float;

    uniform sampler2D tMap;
    varying vec2 vUv;

    void main() {
        gl_FragColor = texture2D(tMap, vUv);
    }
`;
var By = "1.3.1";

function Gf(n, t, e) {
    return Math.max(n, Math.min(t, e))
}

function Uy(n, t, e) {
    return (1 - e) * n + e * t
}

function Wy(n, t, e, r) {
    return Uy(n, t, 1 - Math.exp(-e * r))
}

function ky(n, t) {
    return (n % t + t) % t
}
var qy = class {
    constructor() {
        Z(this, "isRunning", !1);
        Z(this, "value", 0);
        Z(this, "from", 0);
        Z(this, "to", 0);
        Z(this, "currentTime", 0);
        Z(this, "lerp");
        Z(this, "duration");
        Z(this, "easing");
        Z(this, "onUpdate")
    }
    advance(n) {
        var e;
        if (!this.isRunning) return;
        let t = !1;
        if (this.duration && this.easing) {
            this.currentTime += n;
            const r = Gf(0, this.currentTime / this.duration, 1);
            t = r >= 1;
            const a = t ? 1 : this.easing(r);
            this.value = this.from + (this.to - this.from) * a
        } else this.lerp ? (this.value = Wy(this.value, this.to, this.lerp * 60, n), Math.round(this.value) === this.to && (this.value = this.to, t = !0)) : (this.value = this.to, t = !0);
        t && this.stop(), (e = this.onUpdate) == null || e.call(this, this.value, t)
    }
    stop() {
        this.isRunning = !1
    }
    fromTo(n, t, {
        lerp: e,
        duration: r,
        easing: a,
        onStart: o,
        onUpdate: l
    }) {
        this.from = this.value = n, this.to = t, this.lerp = e, this.duration = r, this.easing = a, this.currentTime = 0, this.isRunning = !0, o == null || o(), this.onUpdate = l
    }
};

function Gy(n, t) {
    let e;
    return function(...r) {
        let a = this;
        clearTimeout(e), e = setTimeout(() => {
            e = void 0, n.apply(a, r)
        }, t)
    }
}
var Vy = class {
        constructor(n, t, {
            autoResize: e = !0,
            debounce: r = 250
        } = {}) {
            Z(this, "width", 0);
            Z(this, "height", 0);
            Z(this, "scrollHeight", 0);
            Z(this, "scrollWidth", 0);
            Z(this, "debouncedResize");
            Z(this, "wrapperResizeObserver");
            Z(this, "contentResizeObserver");
            Z(this, "resize", () => {
                this.onWrapperResize(), this.onContentResize()
            });
            Z(this, "onWrapperResize", () => {
                this.wrapper instanceof Window ? (this.width = window.innerWidth, this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight)
            });
            Z(this, "onContentResize", () => {
                this.wrapper instanceof Window ? (this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight, this.scrollWidth = this.wrapper.scrollWidth)
            });
            this.wrapper = n, this.content = t, e && (this.debouncedResize = Gy(this.resize, r), this.wrapper instanceof Window ? window.addEventListener("resize", this.debouncedResize, !1) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize()
        }
        destroy() {
            var n, t;
            (n = this.wrapperResizeObserver) == null || n.disconnect(), (t = this.contentResizeObserver) == null || t.disconnect(), this.wrapper === window && this.debouncedResize && window.removeEventListener("resize", this.debouncedResize, !1)
        }
        get limit() {
            return {
                x: this.scrollWidth - this.width,
                y: this.scrollHeight - this.height
            }
        }
    },
    Vf = class {
        constructor() {
            Z(this, "events", {})
        }
        emit(n, ...t) {
            var r;
            let e = this.events[n] || [];
            for (let a = 0, o = e.length; a < o; a++)(r = e[a]) == null || r.call(e, ...t)
        }
        on(n, t) {
            var e;
            return (e = this.events[n]) != null && e.push(t) || (this.events[n] = [t]), () => {
                var r;
                this.events[n] = (r = this.events[n]) == null ? void 0 : r.filter(a => t !== a)
            }
        }
        off(n, t) {
            var e;
            this.events[n] = (e = this.events[n]) == null ? void 0 : e.filter(r => t !== r)
        }
        destroy() {
            this.events = {}
        }
    },
    hf = 100 / 6,
    Si = {
        passive: !1
    },
    Xy = class {
        constructor(n, t = {
            wheelMultiplier: 1,
            touchMultiplier: 1
        }) {
            Z(this, "touchStart", {
                x: 0,
                y: 0
            });
            Z(this, "lastDelta", {
                x: 0,
                y: 0
            });
            Z(this, "window", {
                width: 0,
                height: 0
            });
            Z(this, "emitter", new Vf);
            Z(this, "onTouchStart", n => {
                const {
                    clientX: t,
                    clientY: e
                } = n.targetTouches ? n.targetTouches[0] : n;
                this.touchStart.x = t, this.touchStart.y = e, this.lastDelta = {
                    x: 0,
                    y: 0
                }, this.emitter.emit("scroll", {
                    deltaX: 0,
                    deltaY: 0,
                    event: n
                })
            });
            Z(this, "onTouchMove", n => {
                const {
                    clientX: t,
                    clientY: e
                } = n.targetTouches ? n.targetTouches[0] : n, r = -(t - this.touchStart.x) * this.options.touchMultiplier, a = -(e - this.touchStart.y) * this.options.touchMultiplier;
                this.touchStart.x = t, this.touchStart.y = e, this.lastDelta = {
                    x: r,
                    y: a
                }, this.emitter.emit("scroll", {
                    deltaX: r,
                    deltaY: a,
                    event: n
                })
            });
            Z(this, "onTouchEnd", n => {
                this.emitter.emit("scroll", {
                    deltaX: this.lastDelta.x,
                    deltaY: this.lastDelta.y,
                    event: n
                })
            });
            Z(this, "onWheel", n => {
                let {
                    deltaX: t,
                    deltaY: e,
                    deltaMode: r
                } = n;
                const a = r === 1 ? hf : r === 2 ? this.window.width : 1,
                    o = r === 1 ? hf : r === 2 ? this.window.height : 1;
                t *= a, e *= o, t *= this.options.wheelMultiplier, e *= this.options.wheelMultiplier, this.emitter.emit("scroll", {
                    deltaX: t,
                    deltaY: e,
                    event: n
                })
            });
            Z(this, "onWindowResize", () => {
                this.window = {
                    width: window.innerWidth,
                    height: window.innerHeight
                }
            });
            this.element = n, this.options = t, window.addEventListener("resize", this.onWindowResize, !1), this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, Si), this.element.addEventListener("touchstart", this.onTouchStart, Si), this.element.addEventListener("touchmove", this.onTouchMove, Si), this.element.addEventListener("touchend", this.onTouchEnd, Si)
        }
        on(n, t) {
            return this.emitter.on(n, t)
        }
        destroy() {
            this.emitter.destroy(), window.removeEventListener("resize", this.onWindowResize, !1), this.element.removeEventListener("wheel", this.onWheel, Si), this.element.removeEventListener("touchstart", this.onTouchStart, Si), this.element.removeEventListener("touchmove", this.onTouchMove, Si), this.element.removeEventListener("touchend", this.onTouchEnd, Si)
        }
    },
    Hy = class {
        constructor({
            wrapper: n = window,
            content: t = document.documentElement,
            eventsTarget: e = n,
            smoothWheel: r = !0,
            syncTouch: a = !1,
            syncTouchLerp: o = .075,
            touchInertiaMultiplier: l = 35,
            duration: u,
            easing: f = z => Math.min(1, 1.001 - Math.pow(2, -10 * z)),
            lerp: d = .1,
            infinite: p = !1,
            orientation: v = "vertical",
            gestureOrientation: m = "vertical",
            touchMultiplier: x = 1,
            wheelMultiplier: T = 1,
            autoResize: _ = !0,
            prevent: E,
            virtualScroll: b,
            overscroll: L = !0,
            autoRaf: M = !1,
            anchors: C = !1,
            autoToggle: R = !1,
            allowNestedScroll: D = !1,
            __experimental__naiveDimensions: N = !1
        } = {}) {
            Z(this, "_isScrolling", !1);
            Z(this, "_isStopped", !1);
            Z(this, "_isLocked", !1);
            Z(this, "_preventNextNativeScrollEvent", !1);
            Z(this, "_resetVelocityTimeout", null);
            Z(this, "__rafID", null);
            Z(this, "isTouching");
            Z(this, "time", 0);
            Z(this, "userData", {});
            Z(this, "lastVelocity", 0);
            Z(this, "velocity", 0);
            Z(this, "direction", 0);
            Z(this, "options");
            Z(this, "targetScroll");
            Z(this, "animatedScroll");
            Z(this, "animate", new qy);
            Z(this, "emitter", new Vf);
            Z(this, "dimensions");
            Z(this, "virtualScroll");
            Z(this, "onScrollEnd", n => {
                n instanceof CustomEvent || (this.isScrolling === "smooth" || this.isScrolling === !1) && n.stopPropagation()
            });
            Z(this, "dispatchScrollendEvent", () => {
                this.options.wrapper.dispatchEvent(new CustomEvent("scrollend", {
                    bubbles: this.options.wrapper === window,
                    detail: {
                        lenisScrollEnd: !0
                    }
                }))
            });
            Z(this, "onTransitionEnd", n => {
                if (n.propertyName.includes("overflow")) {
                    const t = this.isHorizontal ? "overflow-x" : "overflow-y",
                        e = getComputedStyle(this.rootElement)[t];
                    ["hidden", "clip"].includes(e) ? this.stop() : this.start()
                }
            });
            Z(this, "onClick", n => {
                const e = n.composedPath().find(r => {
                    var a, o, l;
                    return r instanceof HTMLAnchorElement && (((a = r.getAttribute("href")) == null ? void 0 : a.startsWith("#")) || ((o = r.getAttribute("href")) == null ? void 0 : o.startsWith("/#")) || ((l = r.getAttribute("href")) == null ? void 0 : l.startsWith("./#")))
                });
                if (e) {
                    const r = e.getAttribute("href");
                    if (r) {
                        const a = typeof this.options.anchors == "object" && this.options.anchors ? this.options.anchors : void 0;
                        let o = `#${r.split("#")[1]}`;
                        ["#", "/#", "./#", "#top", "/#top", "./#top"].includes(r) && (o = 0), this.scrollTo(o, a)
                    }
                }
            });
            Z(this, "onPointerDown", n => {
                n.button === 1 && this.reset()
            });
            Z(this, "onVirtualScroll", n => {
                if (typeof this.options.virtualScroll == "function" && this.options.virtualScroll(n) === !1) return;
                const {
                    deltaX: t,
                    deltaY: e,
                    event: r
                } = n;
                if (this.emitter.emit("virtual-scroll", {
                        deltaX: t,
                        deltaY: e,
                        event: r
                    }), r.ctrlKey || r.lenisStopPropagation) return;
                const a = r.type.includes("touch"),
                    o = r.type.includes("wheel");
                this.isTouching = r.type === "touchstart" || r.type === "touchmove";
                const l = t === 0 && e === 0;
                if (this.options.syncTouch && a && r.type === "touchstart" && l && !this.isStopped && !this.isLocked) {
                    this.reset();
                    return
                }
                const f = this.options.gestureOrientation === "vertical" && e === 0 || this.options.gestureOrientation === "horizontal" && t === 0;
                if (l || f) return;
                let d = r.composedPath();
                d = d.slice(0, d.indexOf(this.rootElement));
                const p = this.options.prevent;
                if (d.find(E => {
                        var b, L, M;
                        return E instanceof HTMLElement && (typeof p == "function" && (p == null ? void 0 : p(E)) || ((b = E.hasAttribute) == null ? void 0 : b.call(E, "data-lenis-prevent")) || a && ((L = E.hasAttribute) == null ? void 0 : L.call(E, "data-lenis-prevent-touch")) || o && ((M = E.hasAttribute) == null ? void 0 : M.call(E, "data-lenis-prevent-wheel")) || this.options.allowNestedScroll && this.checkNestedScroll(E, {
                            deltaX: t,
                            deltaY: e
                        }))
                    })) return;
                if (this.isStopped || this.isLocked) {
                    r.preventDefault();
                    return
                }
                if (!(this.options.syncTouch && a || this.options.smoothWheel && o)) {
                    this.isScrolling = "native", this.animate.stop(), r.lenisStopPropagation = !0;
                    return
                }
                let m = e;
                this.options.gestureOrientation === "both" ? m = Math.abs(e) > Math.abs(t) ? e : t : this.options.gestureOrientation === "horizontal" && (m = t), (!this.options.overscroll || this.options.infinite || this.options.wrapper !== window && (this.animatedScroll > 0 && this.animatedScroll < this.limit || this.animatedScroll === 0 && e > 0 || this.animatedScroll === this.limit && e < 0)) && (r.lenisStopPropagation = !0), r.preventDefault();
                const x = a && this.options.syncTouch,
                    _ = a && r.type === "touchend" && Math.abs(m) > 5;
                _ && (m = this.velocity * this.options.touchInertiaMultiplier), this.scrollTo(this.targetScroll + m, {
                    programmatic: !1,
                    ...x ? {
                        lerp: _ ? this.options.syncTouchLerp : 1
                    } : {
                        lerp: this.options.lerp,
                        duration: this.options.duration,
                        easing: this.options.easing
                    }
                })
            });
            Z(this, "onNativeScroll", () => {
                if (this._resetVelocityTimeout !== null && (clearTimeout(this._resetVelocityTimeout), this._resetVelocityTimeout = null), this._preventNextNativeScrollEvent) {
                    this._preventNextNativeScrollEvent = !1;
                    return
                }
                if (this.isScrolling === !1 || this.isScrolling === "native") {
                    const n = this.animatedScroll;
                    this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity, this.velocity = this.animatedScroll - n, this.direction = Math.sign(this.animatedScroll - n), this.isStopped || (this.isScrolling = "native"), this.emit(), this.velocity !== 0 && (this._resetVelocityTimeout = setTimeout(() => {
                        this.lastVelocity = this.velocity, this.velocity = 0, this.isScrolling = !1, this.emit()
                    }, 400))
                }
            });
            Z(this, "raf", n => {
                const t = n - (this.time || n);
                this.time = n, this.animate.advance(t * .001), this.options.autoRaf && (this.__rafID = requestAnimationFrame(this.raf))
            });
            window.lenisVersion = By, (!n || n === document.documentElement) && (n = window), this.options = {
                wrapper: n,
                content: t,
                eventsTarget: e,
                smoothWheel: r,
                syncTouch: a,
                syncTouchLerp: o,
                touchInertiaMultiplier: l,
                duration: u,
                easing: f,
                lerp: d,
                infinite: p,
                gestureOrientation: m,
                orientation: v,
                touchMultiplier: x,
                wheelMultiplier: T,
                autoResize: _,
                prevent: E,
                virtualScroll: b,
                overscroll: L,
                autoRaf: M,
                anchors: C,
                autoToggle: R,
                allowNestedScroll: D,
                __experimental__naiveDimensions: N
            }, this.dimensions = new Vy(n, t, {
                autoResize: _
            }), this.updateClassName(), this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll, !1), this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, {
                capture: !0
            }), this.options.anchors && this.options.wrapper === window && this.options.wrapper.addEventListener("click", this.onClick, !1), this.options.wrapper.addEventListener("pointerdown", this.onPointerDown, !1), this.virtualScroll = new Xy(e, {
                touchMultiplier: x,
                wheelMultiplier: T
            }), this.virtualScroll.on("scroll", this.onVirtualScroll), this.options.autoToggle && this.rootElement.addEventListener("transitionend", this.onTransitionEnd, {
                passive: !0
            }), this.options.autoRaf && (this.__rafID = requestAnimationFrame(this.raf))
        }
        destroy() {
            this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, !1), this.options.wrapper.removeEventListener("scrollend", this.onScrollEnd, {
                capture: !0
            }), this.options.wrapper.removeEventListener("pointerdown", this.onPointerDown, !1), this.options.anchors && this.options.wrapper === window && this.options.wrapper.removeEventListener("click", this.onClick, !1), this.virtualScroll.destroy(), this.dimensions.destroy(), this.cleanUpClassName(), this.__rafID && cancelAnimationFrame(this.__rafID)
        }
        on(n, t) {
            return this.emitter.on(n, t)
        }
        off(n, t) {
            return this.emitter.off(n, t)
        }
        setScroll(n) {
            this.isHorizontal ? this.options.wrapper.scrollTo({
                left: n,
                behavior: "instant"
            }) : this.options.wrapper.scrollTo({
                top: n,
                behavior: "instant"
            })
        }
        resize() {
            this.dimensions.resize(), this.animatedScroll = this.targetScroll = this.actualScroll, this.emit()
        }
        emit() {
            this.emitter.emit("scroll", this)
        }
        reset() {
            this.isLocked = !1, this.isScrolling = !1, this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity = 0, this.animate.stop()
        }
        start() {
            this.isStopped && (this.reset(), this.isStopped = !1)
        }
        stop() {
            this.isStopped || (this.reset(), this.isStopped = !0)
        }
        scrollTo(n, {
            offset: t = 0,
            immediate: e = !1,
            lock: r = !1,
            duration: a = this.options.duration,
            easing: o = this.options.easing,
            lerp: l = this.options.lerp,
            onStart: u,
            onComplete: f,
            force: d = !1,
            programmatic: p = !0,
            userData: v
        } = {}) {
            if (!((this.isStopped || this.isLocked) && !d)) {
                if (typeof n == "string" && ["top", "left", "start"].includes(n)) n = 0;
                else if (typeof n == "string" && ["bottom", "right", "end"].includes(n)) n = this.limit;
                else {
                    let m;
                    if (typeof n == "string" ? m = document.querySelector(n) : n instanceof HTMLElement && (n != null && n.nodeType) && (m = n), m) {
                        if (this.options.wrapper !== window) {
                            const T = this.rootElement.getBoundingClientRect();
                            t -= this.isHorizontal ? T.left : T.top
                        }
                        const x = m.getBoundingClientRect();
                        n = (this.isHorizontal ? x.left : x.top) + this.animatedScroll
                    }
                }
                if (typeof n == "number") {
                    if (n += t, n = Math.round(n), this.options.infinite) {
                        if (p) {
                            this.targetScroll = this.animatedScroll = this.scroll;
                            const m = n - this.animatedScroll;
                            m > this.limit / 2 ? n = n - this.limit : m < -this.limit / 2 && (n = n + this.limit)
                        }
                    } else n = Gf(0, n, this.limit);
                    if (n === this.targetScroll) {
                        u == null || u(this), f == null || f(this);
                        return
                    }
                    if (this.userData = v ?? {}, e) {
                        this.animatedScroll = this.targetScroll = n, this.setScroll(this.scroll), this.reset(), this.preventNextNativeScrollEvent(), this.emit(), f == null || f(this), this.userData = {}, requestAnimationFrame(() => {
                            this.dispatchScrollendEvent()
                        });
                        return
                    }
                    p || (this.targetScroll = n), this.animate.fromTo(this.animatedScroll, n, {
                        duration: a,
                        easing: o,
                        lerp: l,
                        onStart: () => {
                            r && (this.isLocked = !0), this.isScrolling = "smooth", u == null || u(this)
                        },
                        onUpdate: (m, x) => {
                            this.isScrolling = "smooth", this.lastVelocity = this.velocity, this.velocity = m - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = m, this.setScroll(this.scroll), p && (this.targetScroll = m), x || this.emit(), x && (this.reset(), this.emit(), f == null || f(this), this.userData = {}, requestAnimationFrame(() => {
                                this.dispatchScrollendEvent()
                            }), this.preventNextNativeScrollEvent())
                        }
                    })
                }
            }
        }
        preventNextNativeScrollEvent() {
            this._preventNextNativeScrollEvent = !0, requestAnimationFrame(() => {
                this._preventNextNativeScrollEvent = !1
            })
        }
        checkNestedScroll(n, {
            deltaX: t,
            deltaY: e
        }) {
            const r = Date.now(),
                a = n._lenis ?? (n._lenis = {});
            let o, l, u, f, d, p, v, m;
            const x = this.options.gestureOrientation;
            if (r - (a.time ?? 0) > 2e3) {
                a.time = Date.now();
                const R = window.getComputedStyle(n);
                a.computedStyle = R;
                const D = R.overflowX,
                    N = R.overflowY;
                if (o = ["auto", "overlay", "scroll"].includes(D), l = ["auto", "overlay", "scroll"].includes(N), a.hasOverflowX = o, a.hasOverflowY = l, !o && !l || x === "vertical" && !l || x === "horizontal" && !o) return !1;
                d = n.scrollWidth, p = n.scrollHeight, v = n.clientWidth, m = n.clientHeight, u = d > v, f = p > m, a.isScrollableX = u, a.isScrollableY = f, a.scrollWidth = d, a.scrollHeight = p, a.clientWidth = v, a.clientHeight = m
            } else u = a.isScrollableX, f = a.isScrollableY, o = a.hasOverflowX, l = a.hasOverflowY, d = a.scrollWidth, p = a.scrollHeight, v = a.clientWidth, m = a.clientHeight;
            if (!o && !l || !u && !f || x === "vertical" && (!l || !f) || x === "horizontal" && (!o || !u)) return !1;
            let T;
            if (x === "horizontal") T = "x";
            else if (x === "vertical") T = "y";
            else {
                const R = t !== 0,
                    D = e !== 0;
                R && o && u && (T = "x"), D && l && f && (T = "y")
            }
            if (!T) return !1;
            let _, E, b, L, M;
            if (T === "x") _ = n.scrollLeft, E = d - v, b = t, L = o, M = u;
            else if (T === "y") _ = n.scrollTop, E = p - m, b = e, L = l, M = f;
            else return !1;
            return (b > 0 ? _ < E : _ > 0) && L && M
        }
        get rootElement() {
            return this.options.wrapper === window ? document.documentElement : this.options.wrapper
        }
        get limit() {
            return this.options.__experimental__naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"]
        }
        get isHorizontal() {
            return this.options.orientation === "horizontal"
        }
        get actualScroll() {
            const n = this.options.wrapper;
            return this.isHorizontal ? n.scrollX ?? n.scrollLeft : n.scrollY ?? n.scrollTop
        }
        get scroll() {
            return this.options.infinite ? ky(this.animatedScroll, this.limit) : this.animatedScroll
        }
        get progress() {
            return this.limit === 0 ? 1 : this.scroll / this.limit
        }
        get isScrolling() {
            return this._isScrolling
        }
        set isScrolling(n) {
            this._isScrolling !== n && (this._isScrolling = n, this.updateClassName())
        }
        get isStopped() {
            return this._isStopped
        }
        set isStopped(n) {
            this._isStopped !== n && (this._isStopped = n, this.updateClassName())
        }
        get isLocked() {
            return this._isLocked
        }
        set isLocked(n) {
            this._isLocked !== n && (this._isLocked = n, this.updateClassName())
        }
        get isSmooth() {
            return this.isScrolling === "smooth"
        }
        get className() {
            let n = "lenis";
            return this.options.autoToggle && (n += " lenis-autoToggle"), this.isStopped && (n += " lenis-stopped"), this.isLocked && (n += " lenis-locked"), this.isScrolling && (n += " lenis-scrolling"), this.isScrolling === "smooth" && (n += " lenis-smooth"), n
        }
        updateClassName() {
            this.cleanUpClassName(), this.rootElement.className = `${this.rootElement.className} ${this.className}`.trim()
        }
        cleanUpClassName() {
            this.rootElement.className = this.rootElement.className.replace(/lenis(-\w+)?/g, "").trim()
        }
    },
    gs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function Xf(n) {
    return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n
}
var on = {
    exports: {}
};
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var $y = on.exports,
    lf;

function Yy() {
    return lf || (lf = 1, function(n, t) {
        (function() {
            var e, r = "4.17.21",
                a = 200,
                o = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
                l = "Expected a function",
                u = "Invalid `variable` option passed into `_.template`",
                f = "__lodash_hash_undefined__",
                d = 500,
                p = "__lodash_placeholder__",
                v = 1,
                m = 2,
                x = 4,
                T = 1,
                _ = 2,
                E = 1,
                b = 2,
                L = 4,
                M = 8,
                C = 16,
                R = 32,
                D = 64,
                N = 128,
                z = 256,
                F = 512,
                q = 30,
                Y = "...",
                G = 800,
                V = 16,
                X = 1,
                tt = 2,
                nt = 3,
                et = 1 / 0,
                _t = 9007199254740991,
                yt = 17976931348623157e292,
                ut = NaN,
                lt = 4294967295,
                st = lt - 1,
                Se = lt >>> 1,
                ee = [
                    ["ary", N],
                    ["bind", E],
                    ["bindKey", b],
                    ["curry", M],
                    ["curryRight", C],
                    ["flip", F],
                    ["partial", R],
                    ["partialRight", D],
                    ["rearg", z]
                ],
                ie = "[object Arguments]",
                En = "[object Array]",
                Jc = "[object AsyncFunction]",
                zr = "[object Boolean]",
                Nr = "[object Date]",
                jc = "[object DOMException]",
                Sn = "[object Error]",
                bn = "[object Function]",
                ah = "[object GeneratorFunction]",
                Be = "[object Map]",
                Br = "[object Number]",
                td = "[object Null]",
                ti = "[object Object]",
                oh = "[object Promise]",
                ed = "[object Proxy]",
                Ur = "[object RegExp]",
                Ue = "[object Set]",
                Wr = "[object String]",
                An = "[object Symbol]",
                id = "[object Undefined]",
                kr = "[object WeakMap]",
                rd = "[object WeakSet]",
                qr = "[object ArrayBuffer]",
                rr = "[object DataView]",
                Fs = "[object Float32Array]",
                Is = "[object Float64Array]",
                zs = "[object Int8Array]",
                Ns = "[object Int16Array]",
                Bs = "[object Int32Array]",
                Us = "[object Uint8Array]",
                Ws = "[object Uint8ClampedArray]",
                ks = "[object Uint16Array]",
                qs = "[object Uint32Array]",
                nd = /\b__p \+= '';/g,
                sd = /\b(__p \+=) '' \+/g,
                ad = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                hh = /&(?:amp|lt|gt|quot|#39);/g,
                lh = /[&<>"']/g,
                od = RegExp(hh.source),
                hd = RegExp(lh.source),
                ld = /<%-([\s\S]+?)%>/g,
                ud = /<%([\s\S]+?)%>/g,
                uh = /<%=([\s\S]+?)%>/g,
                fd = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                cd = /^\w*$/,
                dd = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                Gs = /[\\^$.*+?()[\]{}|]/g,
                pd = RegExp(Gs.source),
                Vs = /^\s+/,
                gd = /\s/,
                _d = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                md = /\{\n\/\* \[wrapped with (.+)\] \*/,
                vd = /,? & /,
                xd = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                yd = /[()=,{}\[\]\/\s]/,
                wd = /\\(\\)?/g,
                Td = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                fh = /\w*$/,
                Ed = /^[-+]0x[0-9a-f]+$/i,
                Sd = /^0b[01]+$/i,
                bd = /^\[object .+?Constructor\]$/,
                Ad = /^0o[0-7]+$/i,
                Rd = /^(?:0|[1-9]\d*)$/,
                Md = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                Rn = /($^)/,
                Cd = /['\n\r\u2028\u2029\\]/g,
                Mn = "\\ud800-\\udfff",
                Pd = "\\u0300-\\u036f",
                Od = "\\ufe20-\\ufe2f",
                Ld = "\\u20d0-\\u20ff",
                ch = Pd + Od + Ld,
                dh = "\\u2700-\\u27bf",
                ph = "a-z\\xdf-\\xf6\\xf8-\\xff",
                Dd = "\\xac\\xb1\\xd7\\xf7",
                Fd = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
                Id = "\\u2000-\\u206f",
                zd = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                gh = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                _h = "\\ufe0e\\ufe0f",
                mh = Dd + Fd + Id + zd,
                Xs = "['’]",
                Nd = "[" + Mn + "]",
                vh = "[" + mh + "]",
                Cn = "[" + ch + "]",
                xh = "\\d+",
                Bd = "[" + dh + "]",
                yh = "[" + ph + "]",
                wh = "[^" + Mn + mh + xh + dh + ph + gh + "]",
                Hs = "\\ud83c[\\udffb-\\udfff]",
                Ud = "(?:" + Cn + "|" + Hs + ")",
                Th = "[^" + Mn + "]",
                $s = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                Ys = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                nr = "[" + gh + "]",
                Eh = "\\u200d",
                Sh = "(?:" + yh + "|" + wh + ")",
                Wd = "(?:" + nr + "|" + wh + ")",
                bh = "(?:" + Xs + "(?:d|ll|m|re|s|t|ve))?",
                Ah = "(?:" + Xs + "(?:D|LL|M|RE|S|T|VE))?",
                Rh = Ud + "?",
                Mh = "[" + _h + "]?",
                kd = "(?:" + Eh + "(?:" + [Th, $s, Ys].join("|") + ")" + Mh + Rh + ")*",
                qd = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
                Gd = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
                Ch = Mh + Rh + kd,
                Vd = "(?:" + [Bd, $s, Ys].join("|") + ")" + Ch,
                Xd = "(?:" + [Th + Cn + "?", Cn, $s, Ys, Nd].join("|") + ")",
                Hd = RegExp(Xs, "g"),
                $d = RegExp(Cn, "g"),
                Ks = RegExp(Hs + "(?=" + Hs + ")|" + Xd + Ch, "g"),
                Yd = RegExp([nr + "?" + yh + "+" + bh + "(?=" + [vh, nr, "$"].join("|") + ")", Wd + "+" + Ah + "(?=" + [vh, nr + Sh, "$"].join("|") + ")", nr + "?" + Sh + "+" + bh, nr + "+" + Ah, Gd, qd, xh, Vd].join("|"), "g"),
                Kd = RegExp("[" + Eh + Mn + ch + _h + "]"),
                Zd = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                Qd = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                Jd = -1,
                St = {};
            St[Fs] = St[Is] = St[zs] = St[Ns] = St[Bs] = St[Us] = St[Ws] = St[ks] = St[qs] = !0, St[ie] = St[En] = St[qr] = St[zr] = St[rr] = St[Nr] = St[Sn] = St[bn] = St[Be] = St[Br] = St[ti] = St[Ur] = St[Ue] = St[Wr] = St[kr] = !1;
            var Et = {};
            Et[ie] = Et[En] = Et[qr] = Et[rr] = Et[zr] = Et[Nr] = Et[Fs] = Et[Is] = Et[zs] = Et[Ns] = Et[Bs] = Et[Be] = Et[Br] = Et[ti] = Et[Ur] = Et[Ue] = Et[Wr] = Et[An] = Et[Us] = Et[Ws] = Et[ks] = Et[qs] = !0, Et[Sn] = Et[bn] = Et[kr] = !1;
            var jd = {
                    À: "A",
                    Á: "A",
                    Â: "A",
                    Ã: "A",
                    Ä: "A",
                    Å: "A",
                    à: "a",
                    á: "a",
                    â: "a",
                    ã: "a",
                    ä: "a",
                    å: "a",
                    Ç: "C",
                    ç: "c",
                    Ð: "D",
                    ð: "d",
                    È: "E",
                    É: "E",
                    Ê: "E",
                    Ë: "E",
                    è: "e",
                    é: "e",
                    ê: "e",
                    ë: "e",
                    Ì: "I",
                    Í: "I",
                    Î: "I",
                    Ï: "I",
                    ì: "i",
                    í: "i",
                    î: "i",
                    ï: "i",
                    Ñ: "N",
                    ñ: "n",
                    Ò: "O",
                    Ó: "O",
                    Ô: "O",
                    Õ: "O",
                    Ö: "O",
                    Ø: "O",
                    ò: "o",
                    ó: "o",
                    ô: "o",
                    õ: "o",
                    ö: "o",
                    ø: "o",
                    Ù: "U",
                    Ú: "U",
                    Û: "U",
                    Ü: "U",
                    ù: "u",
                    ú: "u",
                    û: "u",
                    ü: "u",
                    Ý: "Y",
                    ý: "y",
                    ÿ: "y",
                    Æ: "Ae",
                    æ: "ae",
                    Þ: "Th",
                    þ: "th",
                    ß: "ss",
                    Ā: "A",
                    Ă: "A",
                    Ą: "A",
                    ā: "a",
                    ă: "a",
                    ą: "a",
                    Ć: "C",
                    Ĉ: "C",
                    Ċ: "C",
                    Č: "C",
                    ć: "c",
                    ĉ: "c",
                    ċ: "c",
                    č: "c",
                    Ď: "D",
                    Đ: "D",
                    ď: "d",
                    đ: "d",
                    Ē: "E",
                    Ĕ: "E",
                    Ė: "E",
                    Ę: "E",
                    Ě: "E",
                    ē: "e",
                    ĕ: "e",
                    ė: "e",
                    ę: "e",
                    ě: "e",
                    Ĝ: "G",
                    Ğ: "G",
                    Ġ: "G",
                    Ģ: "G",
                    ĝ: "g",
                    ğ: "g",
                    ġ: "g",
                    ģ: "g",
                    Ĥ: "H",
                    Ħ: "H",
                    ĥ: "h",
                    ħ: "h",
                    Ĩ: "I",
                    Ī: "I",
                    Ĭ: "I",
                    Į: "I",
                    İ: "I",
                    ĩ: "i",
                    ī: "i",
                    ĭ: "i",
                    į: "i",
                    ı: "i",
                    Ĵ: "J",
                    ĵ: "j",
                    Ķ: "K",
                    ķ: "k",
                    ĸ: "k",
                    Ĺ: "L",
                    Ļ: "L",
                    Ľ: "L",
                    Ŀ: "L",
                    Ł: "L",
                    ĺ: "l",
                    ļ: "l",
                    ľ: "l",
                    ŀ: "l",
                    ł: "l",
                    Ń: "N",
                    Ņ: "N",
                    Ň: "N",
                    Ŋ: "N",
                    ń: "n",
                    ņ: "n",
                    ň: "n",
                    ŋ: "n",
                    Ō: "O",
                    Ŏ: "O",
                    Ő: "O",
                    ō: "o",
                    ŏ: "o",
                    ő: "o",
                    Ŕ: "R",
                    Ŗ: "R",
                    Ř: "R",
                    ŕ: "r",
                    ŗ: "r",
                    ř: "r",
                    Ś: "S",
                    Ŝ: "S",
                    Ş: "S",
                    Š: "S",
                    ś: "s",
                    ŝ: "s",
                    ş: "s",
                    š: "s",
                    Ţ: "T",
                    Ť: "T",
                    Ŧ: "T",
                    ţ: "t",
                    ť: "t",
                    ŧ: "t",
                    Ũ: "U",
                    Ū: "U",
                    Ŭ: "U",
                    Ů: "U",
                    Ű: "U",
                    Ų: "U",
                    ũ: "u",
                    ū: "u",
                    ŭ: "u",
                    ů: "u",
                    ű: "u",
                    ų: "u",
                    Ŵ: "W",
                    ŵ: "w",
                    Ŷ: "Y",
                    ŷ: "y",
                    Ÿ: "Y",
                    Ź: "Z",
                    Ż: "Z",
                    Ž: "Z",
                    ź: "z",
                    ż: "z",
                    ž: "z",
                    Ĳ: "IJ",
                    ĳ: "ij",
                    Œ: "Oe",
                    œ: "oe",
                    ŉ: "'n",
                    ſ: "s"
                },
                tp = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                },
                ep = {
                    "&amp;": "&",
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"',
                    "&#39;": "'"
                },
                ip = {
                    "\\": "\\",
                    "'": "'",
                    "\n": "n",
                    "\r": "r",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                rp = parseFloat,
                np = parseInt,
                Ph = typeof gs == "object" && gs && gs.Object === Object && gs,
                sp = typeof self == "object" && self && self.Object === Object && self,
                Gt = Ph || sp || Function("return this")(),
                Zs = t && !t.nodeType && t,
                Bi = Zs && !0 && n && !n.nodeType && n,
                Oh = Bi && Bi.exports === Zs,
                Qs = Oh && Ph.process,
                be = function() {
                    try {
                        var P = Bi && Bi.require && Bi.require("util").types;
                        return P || Qs && Qs.binding && Qs.binding("util")
                    } catch {}
                }(),
                Lh = be && be.isArrayBuffer,
                Dh = be && be.isDate,
                Fh = be && be.isMap,
                Ih = be && be.isRegExp,
                zh = be && be.isSet,
                Nh = be && be.isTypedArray;

            function ce(P, B, I) {
                switch (I.length) {
                    case 0:
                        return P.call(B);
                    case 1:
                        return P.call(B, I[0]);
                    case 2:
                        return P.call(B, I[0], I[1]);
                    case 3:
                        return P.call(B, I[0], I[1], I[2])
                }
                return P.apply(B, I)
            }

            function ap(P, B, I, $) {
                for (var it = -1, mt = P == null ? 0 : P.length; ++it < mt;) {
                    var Ut = P[it];
                    B($, Ut, I(Ut), P)
                }
                return $
            }

            function Ae(P, B) {
                for (var I = -1, $ = P == null ? 0 : P.length; ++I < $ && B(P[I], I, P) !== !1;);
                return P
            }

            function op(P, B) {
                for (var I = P == null ? 0 : P.length; I-- && B(P[I], I, P) !== !1;);
                return P
            }

            function Bh(P, B) {
                for (var I = -1, $ = P == null ? 0 : P.length; ++I < $;)
                    if (!B(P[I], I, P)) return !1;
                return !0
            }

            function gi(P, B) {
                for (var I = -1, $ = P == null ? 0 : P.length, it = 0, mt = []; ++I < $;) {
                    var Ut = P[I];
                    B(Ut, I, P) && (mt[it++] = Ut)
                }
                return mt
            }

            function Pn(P, B) {
                var I = P == null ? 0 : P.length;
                return !!I && sr(P, B, 0) > -1
            }

            function Js(P, B, I) {
                for (var $ = -1, it = P == null ? 0 : P.length; ++$ < it;)
                    if (I(B, P[$])) return !0;
                return !1
            }

            function bt(P, B) {
                for (var I = -1, $ = P == null ? 0 : P.length, it = Array($); ++I < $;) it[I] = B(P[I], I, P);
                return it
            }

            function _i(P, B) {
                for (var I = -1, $ = B.length, it = P.length; ++I < $;) P[it + I] = B[I];
                return P
            }

            function js(P, B, I, $) {
                var it = -1,
                    mt = P == null ? 0 : P.length;
                for ($ && mt && (I = P[++it]); ++it < mt;) I = B(I, P[it], it, P);
                return I
            }

            function hp(P, B, I, $) {
                var it = P == null ? 0 : P.length;
                for ($ && it && (I = P[--it]); it--;) I = B(I, P[it], it, P);
                return I
            }

            function ta(P, B) {
                for (var I = -1, $ = P == null ? 0 : P.length; ++I < $;)
                    if (B(P[I], I, P)) return !0;
                return !1
            }
            var lp = ea("length");

            function up(P) {
                return P.split("")
            }

            function fp(P) {
                return P.match(xd) || []
            }

            function Uh(P, B, I) {
                var $;
                return I(P, function(it, mt, Ut) {
                    if (B(it, mt, Ut)) return $ = mt, !1
                }), $
            }

            function On(P, B, I, $) {
                for (var it = P.length, mt = I + ($ ? 1 : -1); $ ? mt-- : ++mt < it;)
                    if (B(P[mt], mt, P)) return mt;
                return -1
            }

            function sr(P, B, I) {
                return B === B ? Ep(P, B, I) : On(P, Wh, I)
            }

            function cp(P, B, I, $) {
                for (var it = I - 1, mt = P.length; ++it < mt;)
                    if ($(P[it], B)) return it;
                return -1
            }

            function Wh(P) {
                return P !== P
            }

            function kh(P, B) {
                var I = P == null ? 0 : P.length;
                return I ? ra(P, B) / I : ut
            }

            function ea(P) {
                return function(B) {
                    return B == null ? e : B[P]
                }
            }

            function ia(P) {
                return function(B) {
                    return P == null ? e : P[B]
                }
            }

            function qh(P, B, I, $, it) {
                return it(P, function(mt, Ut, wt) {
                    I = $ ? ($ = !1, mt) : B(I, mt, Ut, wt)
                }), I
            }

            function dp(P, B) {
                var I = P.length;
                for (P.sort(B); I--;) P[I] = P[I].value;
                return P
            }

            function ra(P, B) {
                for (var I, $ = -1, it = P.length; ++$ < it;) {
                    var mt = B(P[$]);
                    mt !== e && (I = I === e ? mt : I + mt)
                }
                return I
            }

            function na(P, B) {
                for (var I = -1, $ = Array(P); ++I < P;) $[I] = B(I);
                return $
            }

            function pp(P, B) {
                return bt(B, function(I) {
                    return [I, P[I]]
                })
            }

            function Gh(P) {
                return P && P.slice(0, $h(P) + 1).replace(Vs, "")
            }

            function de(P) {
                return function(B) {
                    return P(B)
                }
            }

            function sa(P, B) {
                return bt(B, function(I) {
                    return P[I]
                })
            }

            function Gr(P, B) {
                return P.has(B)
            }

            function Vh(P, B) {
                for (var I = -1, $ = P.length; ++I < $ && sr(B, P[I], 0) > -1;);
                return I
            }

            function Xh(P, B) {
                for (var I = P.length; I-- && sr(B, P[I], 0) > -1;);
                return I
            }

            function gp(P, B) {
                for (var I = P.length, $ = 0; I--;) P[I] === B && ++$;
                return $
            }
            var _p = ia(jd),
                mp = ia(tp);

            function vp(P) {
                return "\\" + ip[P]
            }

            function xp(P, B) {
                return P == null ? e : P[B]
            }

            function ar(P) {
                return Kd.test(P)
            }

            function yp(P) {
                return Zd.test(P)
            }

            function wp(P) {
                for (var B, I = []; !(B = P.next()).done;) I.push(B.value);
                return I
            }

            function aa(P) {
                var B = -1,
                    I = Array(P.size);
                return P.forEach(function($, it) {
                    I[++B] = [it, $]
                }), I
            }

            function Hh(P, B) {
                return function(I) {
                    return P(B(I))
                }
            }

            function mi(P, B) {
                for (var I = -1, $ = P.length, it = 0, mt = []; ++I < $;) {
                    var Ut = P[I];
                    (Ut === B || Ut === p) && (P[I] = p, mt[it++] = I)
                }
                return mt
            }

            function Ln(P) {
                var B = -1,
                    I = Array(P.size);
                return P.forEach(function($) {
                    I[++B] = $
                }), I
            }

            function Tp(P) {
                var B = -1,
                    I = Array(P.size);
                return P.forEach(function($) {
                    I[++B] = [$, $]
                }), I
            }

            function Ep(P, B, I) {
                for (var $ = I - 1, it = P.length; ++$ < it;)
                    if (P[$] === B) return $;
                return -1
            }

            function Sp(P, B, I) {
                for (var $ = I + 1; $--;)
                    if (P[$] === B) return $;
                return $
            }

            function or(P) {
                return ar(P) ? Ap(P) : lp(P)
            }

            function We(P) {
                return ar(P) ? Rp(P) : up(P)
            }

            function $h(P) {
                for (var B = P.length; B-- && gd.test(P.charAt(B)););
                return B
            }
            var bp = ia(ep);

            function Ap(P) {
                for (var B = Ks.lastIndex = 0; Ks.test(P);) ++B;
                return B
            }

            function Rp(P) {
                return P.match(Ks) || []
            }

            function Mp(P) {
                return P.match(Yd) || []
            }
            var Cp = function P(B) {
                    B = B == null ? Gt : hr.defaults(Gt.Object(), B, hr.pick(Gt, Qd));
                    var I = B.Array,
                        $ = B.Date,
                        it = B.Error,
                        mt = B.Function,
                        Ut = B.Math,
                        wt = B.Object,
                        oa = B.RegExp,
                        Pp = B.String,
                        Re = B.TypeError,
                        Dn = I.prototype,
                        Op = mt.prototype,
                        lr = wt.prototype,
                        Fn = B["__core-js_shared__"],
                        In = Op.toString,
                        xt = lr.hasOwnProperty,
                        Lp = 0,
                        Yh = function() {
                            var i = /[^.]+$/.exec(Fn && Fn.keys && Fn.keys.IE_PROTO || "");
                            return i ? "Symbol(src)_1." + i : ""
                        }(),
                        zn = lr.toString,
                        Dp = In.call(wt),
                        Fp = Gt._,
                        Ip = oa("^" + In.call(xt).replace(Gs, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                        Nn = Oh ? B.Buffer : e,
                        vi = B.Symbol,
                        Bn = B.Uint8Array,
                        Kh = Nn ? Nn.allocUnsafe : e,
                        Un = Hh(wt.getPrototypeOf, wt),
                        Zh = wt.create,
                        Qh = lr.propertyIsEnumerable,
                        Wn = Dn.splice,
                        Jh = vi ? vi.isConcatSpreadable : e,
                        Vr = vi ? vi.iterator : e,
                        Ui = vi ? vi.toStringTag : e,
                        kn = function() {
                            try {
                                var i = Vi(wt, "defineProperty");
                                return i({}, "", {}), i
                            } catch {}
                        }(),
                        zp = B.clearTimeout !== Gt.clearTimeout && B.clearTimeout,
                        Np = $ && $.now !== Gt.Date.now && $.now,
                        Bp = B.setTimeout !== Gt.setTimeout && B.setTimeout,
                        qn = Ut.ceil,
                        Gn = Ut.floor,
                        ha = wt.getOwnPropertySymbols,
                        Up = Nn ? Nn.isBuffer : e,
                        jh = B.isFinite,
                        Wp = Dn.join,
                        kp = Hh(wt.keys, wt),
                        Wt = Ut.max,
                        Ht = Ut.min,
                        qp = $.now,
                        Gp = B.parseInt,
                        tl = Ut.random,
                        Vp = Dn.reverse,
                        la = Vi(B, "DataView"),
                        Xr = Vi(B, "Map"),
                        ua = Vi(B, "Promise"),
                        ur = Vi(B, "Set"),
                        Hr = Vi(B, "WeakMap"),
                        $r = Vi(wt, "create"),
                        Vn = Hr && new Hr,
                        fr = {},
                        Xp = Xi(la),
                        Hp = Xi(Xr),
                        $p = Xi(ua),
                        Yp = Xi(ur),
                        Kp = Xi(Hr),
                        Xn = vi ? vi.prototype : e,
                        Yr = Xn ? Xn.valueOf : e,
                        el = Xn ? Xn.toString : e;

                    function y(i) {
                        if (Pt(i) && !rt(i) && !(i instanceof ct)) {
                            if (i instanceof Me) return i;
                            if (xt.call(i, "__wrapped__")) return iu(i)
                        }
                        return new Me(i)
                    }
                    var cr = function() {
                        function i() {}
                        return function(s) {
                            if (!Rt(s)) return {};
                            if (Zh) return Zh(s);
                            i.prototype = s;
                            var h = new i;
                            return i.prototype = e, h
                        }
                    }();

                    function Hn() {}

                    function Me(i, s) {
                        this.__wrapped__ = i, this.__actions__ = [], this.__chain__ = !!s, this.__index__ = 0, this.__values__ = e
                    }
                    y.templateSettings = {
                        escape: ld,
                        evaluate: ud,
                        interpolate: uh,
                        variable: "",
                        imports: {
                            _: y
                        }
                    }, y.prototype = Hn.prototype, y.prototype.constructor = y, Me.prototype = cr(Hn.prototype), Me.prototype.constructor = Me;

                    function ct(i) {
                        this.__wrapped__ = i, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = lt, this.__views__ = []
                    }

                    function Zp() {
                        var i = new ct(this.__wrapped__);
                        return i.__actions__ = re(this.__actions__), i.__dir__ = this.__dir__, i.__filtered__ = this.__filtered__, i.__iteratees__ = re(this.__iteratees__), i.__takeCount__ = this.__takeCount__, i.__views__ = re(this.__views__), i
                    }

                    function Qp() {
                        if (this.__filtered__) {
                            var i = new ct(this);
                            i.__dir__ = -1, i.__filtered__ = !0
                        } else i = this.clone(), i.__dir__ *= -1;
                        return i
                    }

                    function Jp() {
                        var i = this.__wrapped__.value(),
                            s = this.__dir__,
                            h = rt(i),
                            c = s < 0,
                            g = h ? i.length : 0,
                            w = u0(0, g, this.__views__),
                            S = w.start,
                            A = w.end,
                            O = A - S,
                            U = c ? A : S - 1,
                            W = this.__iteratees__,
                            k = W.length,
                            H = 0,
                            K = Ht(O, this.__takeCount__);
                        if (!h || !c && g == O && K == O) return bl(i, this.__actions__);
                        var J = [];
                        t: for (; O-- && H < K;) {
                            U += s;
                            for (var ot = -1, j = i[U]; ++ot < k;) {
                                var ft = W[ot],
                                    dt = ft.iteratee,
                                    _e = ft.type,
                                    jt = dt(j);
                                if (_e == tt) j = jt;
                                else if (!jt) {
                                    if (_e == X) continue t;
                                    break t
                                }
                            }
                            J[H++] = j
                        }
                        return J
                    }
                    ct.prototype = cr(Hn.prototype), ct.prototype.constructor = ct;

                    function Wi(i) {
                        var s = -1,
                            h = i == null ? 0 : i.length;
                        for (this.clear(); ++s < h;) {
                            var c = i[s];
                            this.set(c[0], c[1])
                        }
                    }

                    function jp() {
                        this.__data__ = $r ? $r(null) : {}, this.size = 0
                    }

                    function tg(i) {
                        var s = this.has(i) && delete this.__data__[i];
                        return this.size -= s ? 1 : 0, s
                    }

                    function eg(i) {
                        var s = this.__data__;
                        if ($r) {
                            var h = s[i];
                            return h === f ? e : h
                        }
                        return xt.call(s, i) ? s[i] : e
                    }

                    function ig(i) {
                        var s = this.__data__;
                        return $r ? s[i] !== e : xt.call(s, i)
                    }

                    function rg(i, s) {
                        var h = this.__data__;
                        return this.size += this.has(i) ? 0 : 1, h[i] = $r && s === e ? f : s, this
                    }
                    Wi.prototype.clear = jp, Wi.prototype.delete = tg, Wi.prototype.get = eg, Wi.prototype.has = ig, Wi.prototype.set = rg;

                    function ei(i) {
                        var s = -1,
                            h = i == null ? 0 : i.length;
                        for (this.clear(); ++s < h;) {
                            var c = i[s];
                            this.set(c[0], c[1])
                        }
                    }

                    function ng() {
                        this.__data__ = [], this.size = 0
                    }

                    function sg(i) {
                        var s = this.__data__,
                            h = $n(s, i);
                        if (h < 0) return !1;
                        var c = s.length - 1;
                        return h == c ? s.pop() : Wn.call(s, h, 1), --this.size, !0
                    }

                    function ag(i) {
                        var s = this.__data__,
                            h = $n(s, i);
                        return h < 0 ? e : s[h][1]
                    }

                    function og(i) {
                        return $n(this.__data__, i) > -1
                    }

                    function hg(i, s) {
                        var h = this.__data__,
                            c = $n(h, i);
                        return c < 0 ? (++this.size, h.push([i, s])) : h[c][1] = s, this
                    }
                    ei.prototype.clear = ng, ei.prototype.delete = sg, ei.prototype.get = ag, ei.prototype.has = og, ei.prototype.set = hg;

                    function ii(i) {
                        var s = -1,
                            h = i == null ? 0 : i.length;
                        for (this.clear(); ++s < h;) {
                            var c = i[s];
                            this.set(c[0], c[1])
                        }
                    }

                    function lg() {
                        this.size = 0, this.__data__ = {
                            hash: new Wi,
                            map: new(Xr || ei),
                            string: new Wi
                        }
                    }

                    function ug(i) {
                        var s = ss(this, i).delete(i);
                        return this.size -= s ? 1 : 0, s
                    }

                    function fg(i) {
                        return ss(this, i).get(i)
                    }

                    function cg(i) {
                        return ss(this, i).has(i)
                    }

                    function dg(i, s) {
                        var h = ss(this, i),
                            c = h.size;
                        return h.set(i, s), this.size += h.size == c ? 0 : 1, this
                    }
                    ii.prototype.clear = lg, ii.prototype.delete = ug, ii.prototype.get = fg, ii.prototype.has = cg, ii.prototype.set = dg;

                    function ki(i) {
                        var s = -1,
                            h = i == null ? 0 : i.length;
                        for (this.__data__ = new ii; ++s < h;) this.add(i[s])
                    }

                    function pg(i) {
                        return this.__data__.set(i, f), this
                    }

                    function gg(i) {
                        return this.__data__.has(i)
                    }
                    ki.prototype.add = ki.prototype.push = pg, ki.prototype.has = gg;

                    function ke(i) {
                        var s = this.__data__ = new ei(i);
                        this.size = s.size
                    }

                    function _g() {
                        this.__data__ = new ei, this.size = 0
                    }

                    function mg(i) {
                        var s = this.__data__,
                            h = s.delete(i);
                        return this.size = s.size, h
                    }

                    function vg(i) {
                        return this.__data__.get(i)
                    }

                    function xg(i) {
                        return this.__data__.has(i)
                    }

                    function yg(i, s) {
                        var h = this.__data__;
                        if (h instanceof ei) {
                            var c = h.__data__;
                            if (!Xr || c.length < a - 1) return c.push([i, s]), this.size = ++h.size, this;
                            h = this.__data__ = new ii(c)
                        }
                        return h.set(i, s), this.size = h.size, this
                    }
                    ke.prototype.clear = _g, ke.prototype.delete = mg, ke.prototype.get = vg, ke.prototype.has = xg, ke.prototype.set = yg;

                    function il(i, s) {
                        var h = rt(i),
                            c = !h && Hi(i),
                            g = !h && !c && Ei(i),
                            w = !h && !c && !g && _r(i),
                            S = h || c || g || w,
                            A = S ? na(i.length, Pp) : [],
                            O = A.length;
                        for (var U in i)(s || xt.call(i, U)) && !(S && (U == "length" || g && (U == "offset" || U == "parent") || w && (U == "buffer" || U == "byteLength" || U == "byteOffset") || ai(U, O))) && A.push(U);
                        return A
                    }

                    function rl(i) {
                        var s = i.length;
                        return s ? i[wa(0, s - 1)] : e
                    }

                    function wg(i, s) {
                        return as(re(i), qi(s, 0, i.length))
                    }

                    function Tg(i) {
                        return as(re(i))
                    }

                    function fa(i, s, h) {
                        (h !== e && !qe(i[s], h) || h === e && !(s in i)) && ri(i, s, h)
                    }

                    function Kr(i, s, h) {
                        var c = i[s];
                        (!(xt.call(i, s) && qe(c, h)) || h === e && !(s in i)) && ri(i, s, h)
                    }

                    function $n(i, s) {
                        for (var h = i.length; h--;)
                            if (qe(i[h][0], s)) return h;
                        return -1
                    }

                    function Eg(i, s, h, c) {
                        return xi(i, function(g, w, S) {
                            s(c, g, h(g), S)
                        }), c
                    }

                    function nl(i, s) {
                        return i && Xe(s, kt(s), i)
                    }

                    function Sg(i, s) {
                        return i && Xe(s, se(s), i)
                    }

                    function ri(i, s, h) {
                        s == "__proto__" && kn ? kn(i, s, {
                            configurable: !0,
                            enumerable: !0,
                            value: h,
                            writable: !0
                        }) : i[s] = h
                    }

                    function ca(i, s) {
                        for (var h = -1, c = s.length, g = I(c), w = i == null; ++h < c;) g[h] = w ? e : Ha(i, s[h]);
                        return g
                    }

                    function qi(i, s, h) {
                        return i === i && (h !== e && (i = i <= h ? i : h), s !== e && (i = i >= s ? i : s)), i
                    }

                    function Ce(i, s, h, c, g, w) {
                        var S, A = s & v,
                            O = s & m,
                            U = s & x;
                        if (h && (S = g ? h(i, c, g, w) : h(i)), S !== e) return S;
                        if (!Rt(i)) return i;
                        var W = rt(i);
                        if (W) {
                            if (S = c0(i), !A) return re(i, S)
                        } else {
                            var k = $t(i),
                                H = k == bn || k == ah;
                            if (Ei(i)) return Ml(i, A);
                            if (k == ti || k == ie || H && !g) {
                                if (S = O || H ? {} : $l(i), !A) return O ? e0(i, Sg(S, i)) : t0(i, nl(S, i))
                            } else {
                                if (!Et[k]) return g ? i : {};
                                S = d0(i, k, A)
                            }
                        }
                        w || (w = new ke);
                        var K = w.get(i);
                        if (K) return K;
                        w.set(i, S), Tu(i) ? i.forEach(function(j) {
                            S.add(Ce(j, s, h, j, i, w))
                        }) : yu(i) && i.forEach(function(j, ft) {
                            S.set(ft, Ce(j, s, h, ft, i, w))
                        });
                        var J = U ? O ? La : Oa : O ? se : kt,
                            ot = W ? e : J(i);
                        return Ae(ot || i, function(j, ft) {
                            ot && (ft = j, j = i[ft]), Kr(S, ft, Ce(j, s, h, ft, i, w))
                        }), S
                    }

                    function bg(i) {
                        var s = kt(i);
                        return function(h) {
                            return sl(h, i, s)
                        }
                    }

                    function sl(i, s, h) {
                        var c = h.length;
                        if (i == null) return !c;
                        for (i = wt(i); c--;) {
                            var g = h[c],
                                w = s[g],
                                S = i[g];
                            if (S === e && !(g in i) || !w(S)) return !1
                        }
                        return !0
                    }

                    function al(i, s, h) {
                        if (typeof i != "function") throw new Re(l);
                        return rn(function() {
                            i.apply(e, h)
                        }, s)
                    }

                    function Zr(i, s, h, c) {
                        var g = -1,
                            w = Pn,
                            S = !0,
                            A = i.length,
                            O = [],
                            U = s.length;
                        if (!A) return O;
                        h && (s = bt(s, de(h))), c ? (w = Js, S = !1) : s.length >= a && (w = Gr, S = !1, s = new ki(s));
                        t: for (; ++g < A;) {
                            var W = i[g],
                                k = h == null ? W : h(W);
                            if (W = c || W !== 0 ? W : 0, S && k === k) {
                                for (var H = U; H--;)
                                    if (s[H] === k) continue t;
                                O.push(W)
                            } else w(s, k, c) || O.push(W)
                        }
                        return O
                    }
                    var xi = Dl(Ve),
                        ol = Dl(pa, !0);

                    function Ag(i, s) {
                        var h = !0;
                        return xi(i, function(c, g, w) {
                            return h = !!s(c, g, w), h
                        }), h
                    }

                    function Yn(i, s, h) {
                        for (var c = -1, g = i.length; ++c < g;) {
                            var w = i[c],
                                S = s(w);
                            if (S != null && (A === e ? S === S && !ge(S) : h(S, A))) var A = S,
                                O = w
                        }
                        return O
                    }

                    function Rg(i, s, h, c) {
                        var g = i.length;
                        for (h = at(h), h < 0 && (h = -h > g ? 0 : g + h), c = c === e || c > g ? g : at(c), c < 0 && (c += g), c = h > c ? 0 : Su(c); h < c;) i[h++] = s;
                        return i
                    }

                    function hl(i, s) {
                        var h = [];
                        return xi(i, function(c, g, w) {
                            s(c, g, w) && h.push(c)
                        }), h
                    }

                    function Vt(i, s, h, c, g) {
                        var w = -1,
                            S = i.length;
                        for (h || (h = g0), g || (g = []); ++w < S;) {
                            var A = i[w];
                            s > 0 && h(A) ? s > 1 ? Vt(A, s - 1, h, c, g) : _i(g, A) : c || (g[g.length] = A)
                        }
                        return g
                    }
                    var da = Fl(),
                        ll = Fl(!0);

                    function Ve(i, s) {
                        return i && da(i, s, kt)
                    }

                    function pa(i, s) {
                        return i && ll(i, s, kt)
                    }

                    function Kn(i, s) {
                        return gi(s, function(h) {
                            return oi(i[h])
                        })
                    }

                    function Gi(i, s) {
                        s = wi(s, i);
                        for (var h = 0, c = s.length; i != null && h < c;) i = i[He(s[h++])];
                        return h && h == c ? i : e
                    }

                    function ul(i, s, h) {
                        var c = s(i);
                        return rt(i) ? c : _i(c, h(i))
                    }

                    function Qt(i) {
                        return i == null ? i === e ? id : td : Ui && Ui in wt(i) ? l0(i) : T0(i)
                    }

                    function ga(i, s) {
                        return i > s
                    }

                    function Mg(i, s) {
                        return i != null && xt.call(i, s)
                    }

                    function Cg(i, s) {
                        return i != null && s in wt(i)
                    }

                    function Pg(i, s, h) {
                        return i >= Ht(s, h) && i < Wt(s, h)
                    }

                    function _a(i, s, h) {
                        for (var c = h ? Js : Pn, g = i[0].length, w = i.length, S = w, A = I(w), O = 1 / 0, U = []; S--;) {
                            var W = i[S];
                            S && s && (W = bt(W, de(s))), O = Ht(W.length, O), A[S] = !h && (s || g >= 120 && W.length >= 120) ? new ki(S && W) : e
                        }
                        W = i[0];
                        var k = -1,
                            H = A[0];
                        t: for (; ++k < g && U.length < O;) {
                            var K = W[k],
                                J = s ? s(K) : K;
                            if (K = h || K !== 0 ? K : 0, !(H ? Gr(H, J) : c(U, J, h))) {
                                for (S = w; --S;) {
                                    var ot = A[S];
                                    if (!(ot ? Gr(ot, J) : c(i[S], J, h))) continue t
                                }
                                H && H.push(J), U.push(K)
                            }
                        }
                        return U
                    }

                    function Og(i, s, h, c) {
                        return Ve(i, function(g, w, S) {
                            s(c, h(g), w, S)
                        }), c
                    }

                    function Qr(i, s, h) {
                        s = wi(s, i), i = Ql(i, s);
                        var c = i == null ? i : i[He(Oe(s))];
                        return c == null ? e : ce(c, i, h)
                    }

                    function fl(i) {
                        return Pt(i) && Qt(i) == ie
                    }

                    function Lg(i) {
                        return Pt(i) && Qt(i) == qr
                    }

                    function Dg(i) {
                        return Pt(i) && Qt(i) == Nr
                    }

                    function Jr(i, s, h, c, g) {
                        return i === s ? !0 : i == null || s == null || !Pt(i) && !Pt(s) ? i !== i && s !== s : Fg(i, s, h, c, Jr, g)
                    }

                    function Fg(i, s, h, c, g, w) {
                        var S = rt(i),
                            A = rt(s),
                            O = S ? En : $t(i),
                            U = A ? En : $t(s);
                        O = O == ie ? ti : O, U = U == ie ? ti : U;
                        var W = O == ti,
                            k = U == ti,
                            H = O == U;
                        if (H && Ei(i)) {
                            if (!Ei(s)) return !1;
                            S = !0, W = !1
                        }
                        if (H && !W) return w || (w = new ke), S || _r(i) ? Vl(i, s, h, c, g, w) : o0(i, s, O, h, c, g, w);
                        if (!(h & T)) {
                            var K = W && xt.call(i, "__wrapped__"),
                                J = k && xt.call(s, "__wrapped__");
                            if (K || J) {
                                var ot = K ? i.value() : i,
                                    j = J ? s.value() : s;
                                return w || (w = new ke), g(ot, j, h, c, w)
                            }
                        }
                        return H ? (w || (w = new ke), h0(i, s, h, c, g, w)) : !1
                    }

                    function Ig(i) {
                        return Pt(i) && $t(i) == Be
                    }

                    function ma(i, s, h, c) {
                        var g = h.length,
                            w = g,
                            S = !c;
                        if (i == null) return !w;
                        for (i = wt(i); g--;) {
                            var A = h[g];
                            if (S && A[2] ? A[1] !== i[A[0]] : !(A[0] in i)) return !1
                        }
                        for (; ++g < w;) {
                            A = h[g];
                            var O = A[0],
                                U = i[O],
                                W = A[1];
                            if (S && A[2]) {
                                if (U === e && !(O in i)) return !1
                            } else {
                                var k = new ke;
                                if (c) var H = c(U, W, O, i, s, k);
                                if (!(H === e ? Jr(W, U, T | _, c, k) : H)) return !1
                            }
                        }
                        return !0
                    }

                    function cl(i) {
                        if (!Rt(i) || m0(i)) return !1;
                        var s = oi(i) ? Ip : bd;
                        return s.test(Xi(i))
                    }

                    function zg(i) {
                        return Pt(i) && Qt(i) == Ur
                    }

                    function Ng(i) {
                        return Pt(i) && $t(i) == Ue
                    }

                    function Bg(i) {
                        return Pt(i) && cs(i.length) && !!St[Qt(i)]
                    }

                    function dl(i) {
                        return typeof i == "function" ? i : i == null ? ae : typeof i == "object" ? rt(i) ? _l(i[0], i[1]) : gl(i) : Iu(i)
                    }

                    function va(i) {
                        if (!en(i)) return kp(i);
                        var s = [];
                        for (var h in wt(i)) xt.call(i, h) && h != "constructor" && s.push(h);
                        return s
                    }

                    function Ug(i) {
                        if (!Rt(i)) return w0(i);
                        var s = en(i),
                            h = [];
                        for (var c in i) c == "constructor" && (s || !xt.call(i, c)) || h.push(c);
                        return h
                    }

                    function xa(i, s) {
                        return i < s
                    }

                    function pl(i, s) {
                        var h = -1,
                            c = ne(i) ? I(i.length) : [];
                        return xi(i, function(g, w, S) {
                            c[++h] = s(g, w, S)
                        }), c
                    }

                    function gl(i) {
                        var s = Fa(i);
                        return s.length == 1 && s[0][2] ? Kl(s[0][0], s[0][1]) : function(h) {
                            return h === i || ma(h, i, s)
                        }
                    }

                    function _l(i, s) {
                        return za(i) && Yl(s) ? Kl(He(i), s) : function(h) {
                            var c = Ha(h, i);
                            return c === e && c === s ? $a(h, i) : Jr(s, c, T | _)
                        }
                    }

                    function Zn(i, s, h, c, g) {
                        i !== s && da(s, function(w, S) {
                            if (g || (g = new ke), Rt(w)) Wg(i, s, S, h, Zn, c, g);
                            else {
                                var A = c ? c(Ba(i, S), w, S + "", i, s, g) : e;
                                A === e && (A = w), fa(i, S, A)
                            }
                        }, se)
                    }

                    function Wg(i, s, h, c, g, w, S) {
                        var A = Ba(i, h),
                            O = Ba(s, h),
                            U = S.get(O);
                        if (U) {
                            fa(i, h, U);
                            return
                        }
                        var W = w ? w(A, O, h + "", i, s, S) : e,
                            k = W === e;
                        if (k) {
                            var H = rt(O),
                                K = !H && Ei(O),
                                J = !H && !K && _r(O);
                            W = O, H || K || J ? rt(A) ? W = A : Lt(A) ? W = re(A) : K ? (k = !1, W = Ml(O, !0)) : J ? (k = !1, W = Cl(O, !0)) : W = [] : nn(O) || Hi(O) ? (W = A, Hi(A) ? W = bu(A) : (!Rt(A) || oi(A)) && (W = $l(O))) : k = !1
                        }
                        k && (S.set(O, W), g(W, O, c, w, S), S.delete(O)), fa(i, h, W)
                    }

                    function ml(i, s) {
                        var h = i.length;
                        if (h) return s += s < 0 ? h : 0, ai(s, h) ? i[s] : e
                    }

                    function vl(i, s, h) {
                        s.length ? s = bt(s, function(w) {
                            return rt(w) ? function(S) {
                                return Gi(S, w.length === 1 ? w[0] : w)
                            } : w
                        }) : s = [ae];
                        var c = -1;
                        s = bt(s, de(Q()));
                        var g = pl(i, function(w, S, A) {
                            var O = bt(s, function(U) {
                                return U(w)
                            });
                            return {
                                criteria: O,
                                index: ++c,
                                value: w
                            }
                        });
                        return dp(g, function(w, S) {
                            return jg(w, S, h)
                        })
                    }

                    function kg(i, s) {
                        return xl(i, s, function(h, c) {
                            return $a(i, c)
                        })
                    }

                    function xl(i, s, h) {
                        for (var c = -1, g = s.length, w = {}; ++c < g;) {
                            var S = s[c],
                                A = Gi(i, S);
                            h(A, S) && jr(w, wi(S, i), A)
                        }
                        return w
                    }

                    function qg(i) {
                        return function(s) {
                            return Gi(s, i)
                        }
                    }

                    function ya(i, s, h, c) {
                        var g = c ? cp : sr,
                            w = -1,
                            S = s.length,
                            A = i;
                        for (i === s && (s = re(s)), h && (A = bt(i, de(h))); ++w < S;)
                            for (var O = 0, U = s[w], W = h ? h(U) : U;
                                (O = g(A, W, O, c)) > -1;) A !== i && Wn.call(A, O, 1), Wn.call(i, O, 1);
                        return i
                    }

                    function yl(i, s) {
                        for (var h = i ? s.length : 0, c = h - 1; h--;) {
                            var g = s[h];
                            if (h == c || g !== w) {
                                var w = g;
                                ai(g) ? Wn.call(i, g, 1) : Sa(i, g)
                            }
                        }
                        return i
                    }

                    function wa(i, s) {
                        return i + Gn(tl() * (s - i + 1))
                    }

                    function Gg(i, s, h, c) {
                        for (var g = -1, w = Wt(qn((s - i) / (h || 1)), 0), S = I(w); w--;) S[c ? w : ++g] = i, i += h;
                        return S
                    }

                    function Ta(i, s) {
                        var h = "";
                        if (!i || s < 1 || s > _t) return h;
                        do s % 2 && (h += i), s = Gn(s / 2), s && (i += i); while (s);
                        return h
                    }

                    function ht(i, s) {
                        return Ua(Zl(i, s, ae), i + "")
                    }

                    function Vg(i) {
                        return rl(mr(i))
                    }

                    function Xg(i, s) {
                        var h = mr(i);
                        return as(h, qi(s, 0, h.length))
                    }

                    function jr(i, s, h, c) {
                        if (!Rt(i)) return i;
                        s = wi(s, i);
                        for (var g = -1, w = s.length, S = w - 1, A = i; A != null && ++g < w;) {
                            var O = He(s[g]),
                                U = h;
                            if (O === "__proto__" || O === "constructor" || O === "prototype") return i;
                            if (g != S) {
                                var W = A[O];
                                U = c ? c(W, O, A) : e, U === e && (U = Rt(W) ? W : ai(s[g + 1]) ? [] : {})
                            }
                            Kr(A, O, U), A = A[O]
                        }
                        return i
                    }
                    var wl = Vn ? function(i, s) {
                            return Vn.set(i, s), i
                        } : ae,
                        Hg = kn ? function(i, s) {
                            return kn(i, "toString", {
                                configurable: !0,
                                enumerable: !1,
                                value: Ka(s),
                                writable: !0
                            })
                        } : ae;

                    function $g(i) {
                        return as(mr(i))
                    }

                    function Pe(i, s, h) {
                        var c = -1,
                            g = i.length;
                        s < 0 && (s = -s > g ? 0 : g + s), h = h > g ? g : h, h < 0 && (h += g), g = s > h ? 0 : h - s >>> 0, s >>>= 0;
                        for (var w = I(g); ++c < g;) w[c] = i[c + s];
                        return w
                    }

                    function Yg(i, s) {
                        var h;
                        return xi(i, function(c, g, w) {
                            return h = s(c, g, w), !h
                        }), !!h
                    }

                    function Qn(i, s, h) {
                        var c = 0,
                            g = i == null ? c : i.length;
                        if (typeof s == "number" && s === s && g <= Se) {
                            for (; c < g;) {
                                var w = c + g >>> 1,
                                    S = i[w];
                                S !== null && !ge(S) && (h ? S <= s : S < s) ? c = w + 1 : g = w
                            }
                            return g
                        }
                        return Ea(i, s, ae, h)
                    }

                    function Ea(i, s, h, c) {
                        var g = 0,
                            w = i == null ? 0 : i.length;
                        if (w === 0) return 0;
                        s = h(s);
                        for (var S = s !== s, A = s === null, O = ge(s), U = s === e; g < w;) {
                            var W = Gn((g + w) / 2),
                                k = h(i[W]),
                                H = k !== e,
                                K = k === null,
                                J = k === k,
                                ot = ge(k);
                            if (S) var j = c || J;
                            else U ? j = J && (c || H) : A ? j = J && H && (c || !K) : O ? j = J && H && !K && (c || !ot) : K || ot ? j = !1 : j = c ? k <= s : k < s;
                            j ? g = W + 1 : w = W
                        }
                        return Ht(w, st)
                    }

                    function Tl(i, s) {
                        for (var h = -1, c = i.length, g = 0, w = []; ++h < c;) {
                            var S = i[h],
                                A = s ? s(S) : S;
                            if (!h || !qe(A, O)) {
                                var O = A;
                                w[g++] = S === 0 ? 0 : S
                            }
                        }
                        return w
                    }

                    function El(i) {
                        return typeof i == "number" ? i : ge(i) ? ut : +i
                    }

                    function pe(i) {
                        if (typeof i == "string") return i;
                        if (rt(i)) return bt(i, pe) + "";
                        if (ge(i)) return el ? el.call(i) : "";
                        var s = i + "";
                        return s == "0" && 1 / i == -1 / 0 ? "-0" : s
                    }

                    function yi(i, s, h) {
                        var c = -1,
                            g = Pn,
                            w = i.length,
                            S = !0,
                            A = [],
                            O = A;
                        if (h) S = !1, g = Js;
                        else if (w >= a) {
                            var U = s ? null : s0(i);
                            if (U) return Ln(U);
                            S = !1, g = Gr, O = new ki
                        } else O = s ? [] : A;
                        t: for (; ++c < w;) {
                            var W = i[c],
                                k = s ? s(W) : W;
                            if (W = h || W !== 0 ? W : 0, S && k === k) {
                                for (var H = O.length; H--;)
                                    if (O[H] === k) continue t;
                                s && O.push(k), A.push(W)
                            } else g(O, k, h) || (O !== A && O.push(k), A.push(W))
                        }
                        return A
                    }

                    function Sa(i, s) {
                        return s = wi(s, i), i = Ql(i, s), i == null || delete i[He(Oe(s))]
                    }

                    function Sl(i, s, h, c) {
                        return jr(i, s, h(Gi(i, s)), c)
                    }

                    function Jn(i, s, h, c) {
                        for (var g = i.length, w = c ? g : -1;
                            (c ? w-- : ++w < g) && s(i[w], w, i););
                        return h ? Pe(i, c ? 0 : w, c ? w + 1 : g) : Pe(i, c ? w + 1 : 0, c ? g : w)
                    }

                    function bl(i, s) {
                        var h = i;
                        return h instanceof ct && (h = h.value()), js(s, function(c, g) {
                            return g.func.apply(g.thisArg, _i([c], g.args))
                        }, h)
                    }

                    function ba(i, s, h) {
                        var c = i.length;
                        if (c < 2) return c ? yi(i[0]) : [];
                        for (var g = -1, w = I(c); ++g < c;)
                            for (var S = i[g], A = -1; ++A < c;) A != g && (w[g] = Zr(w[g] || S, i[A], s, h));
                        return yi(Vt(w, 1), s, h)
                    }

                    function Al(i, s, h) {
                        for (var c = -1, g = i.length, w = s.length, S = {}; ++c < g;) {
                            var A = c < w ? s[c] : e;
                            h(S, i[c], A)
                        }
                        return S
                    }

                    function Aa(i) {
                        return Lt(i) ? i : []
                    }

                    function Ra(i) {
                        return typeof i == "function" ? i : ae
                    }

                    function wi(i, s) {
                        return rt(i) ? i : za(i, s) ? [i] : eu(vt(i))
                    }
                    var Kg = ht;

                    function Ti(i, s, h) {
                        var c = i.length;
                        return h = h === e ? c : h, !s && h >= c ? i : Pe(i, s, h)
                    }
                    var Rl = zp || function(i) {
                        return Gt.clearTimeout(i)
                    };

                    function Ml(i, s) {
                        if (s) return i.slice();
                        var h = i.length,
                            c = Kh ? Kh(h) : new i.constructor(h);
                        return i.copy(c), c
                    }

                    function Ma(i) {
                        var s = new i.constructor(i.byteLength);
                        return new Bn(s).set(new Bn(i)), s
                    }

                    function Zg(i, s) {
                        var h = s ? Ma(i.buffer) : i.buffer;
                        return new i.constructor(h, i.byteOffset, i.byteLength)
                    }

                    function Qg(i) {
                        var s = new i.constructor(i.source, fh.exec(i));
                        return s.lastIndex = i.lastIndex, s
                    }

                    function Jg(i) {
                        return Yr ? wt(Yr.call(i)) : {}
                    }

                    function Cl(i, s) {
                        var h = s ? Ma(i.buffer) : i.buffer;
                        return new i.constructor(h, i.byteOffset, i.length)
                    }

                    function Pl(i, s) {
                        if (i !== s) {
                            var h = i !== e,
                                c = i === null,
                                g = i === i,
                                w = ge(i),
                                S = s !== e,
                                A = s === null,
                                O = s === s,
                                U = ge(s);
                            if (!A && !U && !w && i > s || w && S && O && !A && !U || c && S && O || !h && O || !g) return 1;
                            if (!c && !w && !U && i < s || U && h && g && !c && !w || A && h && g || !S && g || !O) return -1
                        }
                        return 0
                    }

                    function jg(i, s, h) {
                        for (var c = -1, g = i.criteria, w = s.criteria, S = g.length, A = h.length; ++c < S;) {
                            var O = Pl(g[c], w[c]);
                            if (O) {
                                if (c >= A) return O;
                                var U = h[c];
                                return O * (U == "desc" ? -1 : 1)
                            }
                        }
                        return i.index - s.index
                    }

                    function Ol(i, s, h, c) {
                        for (var g = -1, w = i.length, S = h.length, A = -1, O = s.length, U = Wt(w - S, 0), W = I(O + U), k = !c; ++A < O;) W[A] = s[A];
                        for (; ++g < S;)(k || g < w) && (W[h[g]] = i[g]);
                        for (; U--;) W[A++] = i[g++];
                        return W
                    }

                    function Ll(i, s, h, c) {
                        for (var g = -1, w = i.length, S = -1, A = h.length, O = -1, U = s.length, W = Wt(w - A, 0), k = I(W + U), H = !c; ++g < W;) k[g] = i[g];
                        for (var K = g; ++O < U;) k[K + O] = s[O];
                        for (; ++S < A;)(H || g < w) && (k[K + h[S]] = i[g++]);
                        return k
                    }

                    function re(i, s) {
                        var h = -1,
                            c = i.length;
                        for (s || (s = I(c)); ++h < c;) s[h] = i[h];
                        return s
                    }

                    function Xe(i, s, h, c) {
                        var g = !h;
                        h || (h = {});
                        for (var w = -1, S = s.length; ++w < S;) {
                            var A = s[w],
                                O = c ? c(h[A], i[A], A, h, i) : e;
                            O === e && (O = i[A]), g ? ri(h, A, O) : Kr(h, A, O)
                        }
                        return h
                    }

                    function t0(i, s) {
                        return Xe(i, Ia(i), s)
                    }

                    function e0(i, s) {
                        return Xe(i, Xl(i), s)
                    }

                    function jn(i, s) {
                        return function(h, c) {
                            var g = rt(h) ? ap : Eg,
                                w = s ? s() : {};
                            return g(h, i, Q(c, 2), w)
                        }
                    }

                    function dr(i) {
                        return ht(function(s, h) {
                            var c = -1,
                                g = h.length,
                                w = g > 1 ? h[g - 1] : e,
                                S = g > 2 ? h[2] : e;
                            for (w = i.length > 3 && typeof w == "function" ? (g--, w) : e, S && Jt(h[0], h[1], S) && (w = g < 3 ? e : w, g = 1), s = wt(s); ++c < g;) {
                                var A = h[c];
                                A && i(s, A, c, w)
                            }
                            return s
                        })
                    }

                    function Dl(i, s) {
                        return function(h, c) {
                            if (h == null) return h;
                            if (!ne(h)) return i(h, c);
                            for (var g = h.length, w = s ? g : -1, S = wt(h);
                                (s ? w-- : ++w < g) && c(S[w], w, S) !== !1;);
                            return h
                        }
                    }

                    function Fl(i) {
                        return function(s, h, c) {
                            for (var g = -1, w = wt(s), S = c(s), A = S.length; A--;) {
                                var O = S[i ? A : ++g];
                                if (h(w[O], O, w) === !1) break
                            }
                            return s
                        }
                    }

                    function i0(i, s, h) {
                        var c = s & E,
                            g = tn(i);

                        function w() {
                            var S = this && this !== Gt && this instanceof w ? g : i;
                            return S.apply(c ? h : this, arguments)
                        }
                        return w
                    }

                    function Il(i) {
                        return function(s) {
                            s = vt(s);
                            var h = ar(s) ? We(s) : e,
                                c = h ? h[0] : s.charAt(0),
                                g = h ? Ti(h, 1).join("") : s.slice(1);
                            return c[i]() + g
                        }
                    }

                    function pr(i) {
                        return function(s) {
                            return js(Du(Lu(s).replace(Hd, "")), i, "")
                        }
                    }

                    function tn(i) {
                        return function() {
                            var s = arguments;
                            switch (s.length) {
                                case 0:
                                    return new i;
                                case 1:
                                    return new i(s[0]);
                                case 2:
                                    return new i(s[0], s[1]);
                                case 3:
                                    return new i(s[0], s[1], s[2]);
                                case 4:
                                    return new i(s[0], s[1], s[2], s[3]);
                                case 5:
                                    return new i(s[0], s[1], s[2], s[3], s[4]);
                                case 6:
                                    return new i(s[0], s[1], s[2], s[3], s[4], s[5]);
                                case 7:
                                    return new i(s[0], s[1], s[2], s[3], s[4], s[5], s[6])
                            }
                            var h = cr(i.prototype),
                                c = i.apply(h, s);
                            return Rt(c) ? c : h
                        }
                    }

                    function r0(i, s, h) {
                        var c = tn(i);

                        function g() {
                            for (var w = arguments.length, S = I(w), A = w, O = gr(g); A--;) S[A] = arguments[A];
                            var U = w < 3 && S[0] !== O && S[w - 1] !== O ? [] : mi(S, O);
                            if (w -= U.length, w < h) return Wl(i, s, ts, g.placeholder, e, S, U, e, e, h - w);
                            var W = this && this !== Gt && this instanceof g ? c : i;
                            return ce(W, this, S)
                        }
                        return g
                    }

                    function zl(i) {
                        return function(s, h, c) {
                            var g = wt(s);
                            if (!ne(s)) {
                                var w = Q(h, 3);
                                s = kt(s), h = function(A) {
                                    return w(g[A], A, g)
                                }
                            }
                            var S = i(s, h, c);
                            return S > -1 ? g[w ? s[S] : S] : e
                        }
                    }

                    function Nl(i) {
                        return si(function(s) {
                            var h = s.length,
                                c = h,
                                g = Me.prototype.thru;
                            for (i && s.reverse(); c--;) {
                                var w = s[c];
                                if (typeof w != "function") throw new Re(l);
                                if (g && !S && ns(w) == "wrapper") var S = new Me([], !0)
                            }
                            for (c = S ? c : h; ++c < h;) {
                                w = s[c];
                                var A = ns(w),
                                    O = A == "wrapper" ? Da(w) : e;
                                O && Na(O[0]) && O[1] == (N | M | R | z) && !O[4].length && O[9] == 1 ? S = S[ns(O[0])].apply(S, O[3]) : S = w.length == 1 && Na(w) ? S[A]() : S.thru(w)
                            }
                            return function() {
                                var U = arguments,
                                    W = U[0];
                                if (S && U.length == 1 && rt(W)) return S.plant(W).value();
                                for (var k = 0, H = h ? s[k].apply(this, U) : W; ++k < h;) H = s[k].call(this, H);
                                return H
                            }
                        })
                    }

                    function ts(i, s, h, c, g, w, S, A, O, U) {
                        var W = s & N,
                            k = s & E,
                            H = s & b,
                            K = s & (M | C),
                            J = s & F,
                            ot = H ? e : tn(i);

                        function j() {
                            for (var ft = arguments.length, dt = I(ft), _e = ft; _e--;) dt[_e] = arguments[_e];
                            if (K) var jt = gr(j),
                                me = gp(dt, jt);
                            if (c && (dt = Ol(dt, c, g, K)), w && (dt = Ll(dt, w, S, K)), ft -= me, K && ft < U) {
                                var Dt = mi(dt, jt);
                                return Wl(i, s, ts, j.placeholder, h, dt, Dt, A, O, U - ft)
                            }
                            var Ge = k ? h : this,
                                li = H ? Ge[i] : i;
                            return ft = dt.length, A ? dt = E0(dt, A) : J && ft > 1 && dt.reverse(), W && O < ft && (dt.length = O), this && this !== Gt && this instanceof j && (li = ot || tn(li)), li.apply(Ge, dt)
                        }
                        return j
                    }

                    function Bl(i, s) {
                        return function(h, c) {
                            return Og(h, i, s(c), {})
                        }
                    }

                    function es(i, s) {
                        return function(h, c) {
                            var g;
                            if (h === e && c === e) return s;
                            if (h !== e && (g = h), c !== e) {
                                if (g === e) return c;
                                typeof h == "string" || typeof c == "string" ? (h = pe(h), c = pe(c)) : (h = El(h), c = El(c)), g = i(h, c)
                            }
                            return g
                        }
                    }

                    function Ca(i) {
                        return si(function(s) {
                            return s = bt(s, de(Q())), ht(function(h) {
                                var c = this;
                                return i(s, function(g) {
                                    return ce(g, c, h)
                                })
                            })
                        })
                    }

                    function is(i, s) {
                        s = s === e ? " " : pe(s);
                        var h = s.length;
                        if (h < 2) return h ? Ta(s, i) : s;
                        var c = Ta(s, qn(i / or(s)));
                        return ar(s) ? Ti(We(c), 0, i).join("") : c.slice(0, i)
                    }

                    function n0(i, s, h, c) {
                        var g = s & E,
                            w = tn(i);

                        function S() {
                            for (var A = -1, O = arguments.length, U = -1, W = c.length, k = I(W + O), H = this && this !== Gt && this instanceof S ? w : i; ++U < W;) k[U] = c[U];
                            for (; O--;) k[U++] = arguments[++A];
                            return ce(H, g ? h : this, k)
                        }
                        return S
                    }

                    function Ul(i) {
                        return function(s, h, c) {
                            return c && typeof c != "number" && Jt(s, h, c) && (h = c = e), s = hi(s), h === e ? (h = s, s = 0) : h = hi(h), c = c === e ? s < h ? 1 : -1 : hi(c), Gg(s, h, c, i)
                        }
                    }

                    function rs(i) {
                        return function(s, h) {
                            return typeof s == "string" && typeof h == "string" || (s = Le(s), h = Le(h)), i(s, h)
                        }
                    }

                    function Wl(i, s, h, c, g, w, S, A, O, U) {
                        var W = s & M,
                            k = W ? S : e,
                            H = W ? e : S,
                            K = W ? w : e,
                            J = W ? e : w;
                        s |= W ? R : D, s &= ~(W ? D : R), s & L || (s &= -4);
                        var ot = [i, s, g, K, k, J, H, A, O, U],
                            j = h.apply(e, ot);
                        return Na(i) && Jl(j, ot), j.placeholder = c, jl(j, i, s)
                    }

                    function Pa(i) {
                        var s = Ut[i];
                        return function(h, c) {
                            if (h = Le(h), c = c == null ? 0 : Ht(at(c), 292), c && jh(h)) {
                                var g = (vt(h) + "e").split("e"),
                                    w = s(g[0] + "e" + (+g[1] + c));
                                return g = (vt(w) + "e").split("e"), +(g[0] + "e" + (+g[1] - c))
                            }
                            return s(h)
                        }
                    }
                    var s0 = ur && 1 / Ln(new ur([, -0]))[1] == et ? function(i) {
                        return new ur(i)
                    } : Ja;

                    function kl(i) {
                        return function(s) {
                            var h = $t(s);
                            return h == Be ? aa(s) : h == Ue ? Tp(s) : pp(s, i(s))
                        }
                    }

                    function ni(i, s, h, c, g, w, S, A) {
                        var O = s & b;
                        if (!O && typeof i != "function") throw new Re(l);
                        var U = c ? c.length : 0;
                        if (U || (s &= -97, c = g = e), S = S === e ? S : Wt(at(S), 0), A = A === e ? A : at(A), U -= g ? g.length : 0, s & D) {
                            var W = c,
                                k = g;
                            c = g = e
                        }
                        var H = O ? e : Da(i),
                            K = [i, s, h, c, g, W, k, w, S, A];
                        if (H && y0(K, H), i = K[0], s = K[1], h = K[2], c = K[3], g = K[4], A = K[9] = K[9] === e ? O ? 0 : i.length : Wt(K[9] - U, 0), !A && s & (M | C) && (s &= -25), !s || s == E) var J = i0(i, s, h);
                        else s == M || s == C ? J = r0(i, s, A) : (s == R || s == (E | R)) && !g.length ? J = n0(i, s, h, c) : J = ts.apply(e, K);
                        var ot = H ? wl : Jl;
                        return jl(ot(J, K), i, s)
                    }

                    function ql(i, s, h, c) {
                        return i === e || qe(i, lr[h]) && !xt.call(c, h) ? s : i
                    }

                    function Gl(i, s, h, c, g, w) {
                        return Rt(i) && Rt(s) && (w.set(s, i), Zn(i, s, e, Gl, w), w.delete(s)), i
                    }

                    function a0(i) {
                        return nn(i) ? e : i
                    }

                    function Vl(i, s, h, c, g, w) {
                        var S = h & T,
                            A = i.length,
                            O = s.length;
                        if (A != O && !(S && O > A)) return !1;
                        var U = w.get(i),
                            W = w.get(s);
                        if (U && W) return U == s && W == i;
                        var k = -1,
                            H = !0,
                            K = h & _ ? new ki : e;
                        for (w.set(i, s), w.set(s, i); ++k < A;) {
                            var J = i[k],
                                ot = s[k];
                            if (c) var j = S ? c(ot, J, k, s, i, w) : c(J, ot, k, i, s, w);
                            if (j !== e) {
                                if (j) continue;
                                H = !1;
                                break
                            }
                            if (K) {
                                if (!ta(s, function(ft, dt) {
                                        if (!Gr(K, dt) && (J === ft || g(J, ft, h, c, w))) return K.push(dt)
                                    })) {
                                    H = !1;
                                    break
                                }
                            } else if (!(J === ot || g(J, ot, h, c, w))) {
                                H = !1;
                                break
                            }
                        }
                        return w.delete(i), w.delete(s), H
                    }

                    function o0(i, s, h, c, g, w, S) {
                        switch (h) {
                            case rr:
                                if (i.byteLength != s.byteLength || i.byteOffset != s.byteOffset) return !1;
                                i = i.buffer, s = s.buffer;
                            case qr:
                                return !(i.byteLength != s.byteLength || !w(new Bn(i), new Bn(s)));
                            case zr:
                            case Nr:
                            case Br:
                                return qe(+i, +s);
                            case Sn:
                                return i.name == s.name && i.message == s.message;
                            case Ur:
                            case Wr:
                                return i == s + "";
                            case Be:
                                var A = aa;
                            case Ue:
                                var O = c & T;
                                if (A || (A = Ln), i.size != s.size && !O) return !1;
                                var U = S.get(i);
                                if (U) return U == s;
                                c |= _, S.set(i, s);
                                var W = Vl(A(i), A(s), c, g, w, S);
                                return S.delete(i), W;
                            case An:
                                if (Yr) return Yr.call(i) == Yr.call(s)
                        }
                        return !1
                    }

                    function h0(i, s, h, c, g, w) {
                        var S = h & T,
                            A = Oa(i),
                            O = A.length,
                            U = Oa(s),
                            W = U.length;
                        if (O != W && !S) return !1;
                        for (var k = O; k--;) {
                            var H = A[k];
                            if (!(S ? H in s : xt.call(s, H))) return !1
                        }
                        var K = w.get(i),
                            J = w.get(s);
                        if (K && J) return K == s && J == i;
                        var ot = !0;
                        w.set(i, s), w.set(s, i);
                        for (var j = S; ++k < O;) {
                            H = A[k];
                            var ft = i[H],
                                dt = s[H];
                            if (c) var _e = S ? c(dt, ft, H, s, i, w) : c(ft, dt, H, i, s, w);
                            if (!(_e === e ? ft === dt || g(ft, dt, h, c, w) : _e)) {
                                ot = !1;
                                break
                            }
                            j || (j = H == "constructor")
                        }
                        if (ot && !j) {
                            var jt = i.constructor,
                                me = s.constructor;
                            jt != me && "constructor" in i && "constructor" in s && !(typeof jt == "function" && jt instanceof jt && typeof me == "function" && me instanceof me) && (ot = !1)
                        }
                        return w.delete(i), w.delete(s), ot
                    }

                    function si(i) {
                        return Ua(Zl(i, e, su), i + "")
                    }

                    function Oa(i) {
                        return ul(i, kt, Ia)
                    }

                    function La(i) {
                        return ul(i, se, Xl)
                    }
                    var Da = Vn ? function(i) {
                        return Vn.get(i)
                    } : Ja;

                    function ns(i) {
                        for (var s = i.name + "", h = fr[s], c = xt.call(fr, s) ? h.length : 0; c--;) {
                            var g = h[c],
                                w = g.func;
                            if (w == null || w == i) return g.name
                        }
                        return s
                    }

                    function gr(i) {
                        var s = xt.call(y, "placeholder") ? y : i;
                        return s.placeholder
                    }

                    function Q() {
                        var i = y.iteratee || Za;
                        return i = i === Za ? dl : i, arguments.length ? i(arguments[0], arguments[1]) : i
                    }

                    function ss(i, s) {
                        var h = i.__data__;
                        return _0(s) ? h[typeof s == "string" ? "string" : "hash"] : h.map
                    }

                    function Fa(i) {
                        for (var s = kt(i), h = s.length; h--;) {
                            var c = s[h],
                                g = i[c];
                            s[h] = [c, g, Yl(g)]
                        }
                        return s
                    }

                    function Vi(i, s) {
                        var h = xp(i, s);
                        return cl(h) ? h : e
                    }

                    function l0(i) {
                        var s = xt.call(i, Ui),
                            h = i[Ui];
                        try {
                            i[Ui] = e;
                            var c = !0
                        } catch {}
                        var g = zn.call(i);
                        return c && (s ? i[Ui] = h : delete i[Ui]), g
                    }
                    var Ia = ha ? function(i) {
                            return i == null ? [] : (i = wt(i), gi(ha(i), function(s) {
                                return Qh.call(i, s)
                            }))
                        } : ja,
                        Xl = ha ? function(i) {
                            for (var s = []; i;) _i(s, Ia(i)), i = Un(i);
                            return s
                        } : ja,
                        $t = Qt;
                    (la && $t(new la(new ArrayBuffer(1))) != rr || Xr && $t(new Xr) != Be || ua && $t(ua.resolve()) != oh || ur && $t(new ur) != Ue || Hr && $t(new Hr) != kr) && ($t = function(i) {
                        var s = Qt(i),
                            h = s == ti ? i.constructor : e,
                            c = h ? Xi(h) : "";
                        if (c) switch (c) {
                            case Xp:
                                return rr;
                            case Hp:
                                return Be;
                            case $p:
                                return oh;
                            case Yp:
                                return Ue;
                            case Kp:
                                return kr
                        }
                        return s
                    });

                    function u0(i, s, h) {
                        for (var c = -1, g = h.length; ++c < g;) {
                            var w = h[c],
                                S = w.size;
                            switch (w.type) {
                                case "drop":
                                    i += S;
                                    break;
                                case "dropRight":
                                    s -= S;
                                    break;
                                case "take":
                                    s = Ht(s, i + S);
                                    break;
                                case "takeRight":
                                    i = Wt(i, s - S);
                                    break
                            }
                        }
                        return {
                            start: i,
                            end: s
                        }
                    }

                    function f0(i) {
                        var s = i.match(md);
                        return s ? s[1].split(vd) : []
                    }

                    function Hl(i, s, h) {
                        s = wi(s, i);
                        for (var c = -1, g = s.length, w = !1; ++c < g;) {
                            var S = He(s[c]);
                            if (!(w = i != null && h(i, S))) break;
                            i = i[S]
                        }
                        return w || ++c != g ? w : (g = i == null ? 0 : i.length, !!g && cs(g) && ai(S, g) && (rt(i) || Hi(i)))
                    }

                    function c0(i) {
                        var s = i.length,
                            h = new i.constructor(s);
                        return s && typeof i[0] == "string" && xt.call(i, "index") && (h.index = i.index, h.input = i.input), h
                    }

                    function $l(i) {
                        return typeof i.constructor == "function" && !en(i) ? cr(Un(i)) : {}
                    }

                    function d0(i, s, h) {
                        var c = i.constructor;
                        switch (s) {
                            case qr:
                                return Ma(i);
                            case zr:
                            case Nr:
                                return new c(+i);
                            case rr:
                                return Zg(i, h);
                            case Fs:
                            case Is:
                            case zs:
                            case Ns:
                            case Bs:
                            case Us:
                            case Ws:
                            case ks:
                            case qs:
                                return Cl(i, h);
                            case Be:
                                return new c;
                            case Br:
                            case Wr:
                                return new c(i);
                            case Ur:
                                return Qg(i);
                            case Ue:
                                return new c;
                            case An:
                                return Jg(i)
                        }
                    }

                    function p0(i, s) {
                        var h = s.length;
                        if (!h) return i;
                        var c = h - 1;
                        return s[c] = (h > 1 ? "& " : "") + s[c], s = s.join(h > 2 ? ", " : " "), i.replace(_d, `{
/* [wrapped with ` + s + `] */
`)
                    }

                    function g0(i) {
                        return rt(i) || Hi(i) || !!(Jh && i && i[Jh])
                    }

                    function ai(i, s) {
                        var h = typeof i;
                        return s = s ?? _t, !!s && (h == "number" || h != "symbol" && Rd.test(i)) && i > -1 && i % 1 == 0 && i < s
                    }

                    function Jt(i, s, h) {
                        if (!Rt(h)) return !1;
                        var c = typeof s;
                        return (c == "number" ? ne(h) && ai(s, h.length) : c == "string" && s in h) ? qe(h[s], i) : !1
                    }

                    function za(i, s) {
                        if (rt(i)) return !1;
                        var h = typeof i;
                        return h == "number" || h == "symbol" || h == "boolean" || i == null || ge(i) ? !0 : cd.test(i) || !fd.test(i) || s != null && i in wt(s)
                    }

                    function _0(i) {
                        var s = typeof i;
                        return s == "string" || s == "number" || s == "symbol" || s == "boolean" ? i !== "__proto__" : i === null
                    }

                    function Na(i) {
                        var s = ns(i),
                            h = y[s];
                        if (typeof h != "function" || !(s in ct.prototype)) return !1;
                        if (i === h) return !0;
                        var c = Da(h);
                        return !!c && i === c[0]
                    }

                    function m0(i) {
                        return !!Yh && Yh in i
                    }
                    var v0 = Fn ? oi : to;

                    function en(i) {
                        var s = i && i.constructor,
                            h = typeof s == "function" && s.prototype || lr;
                        return i === h
                    }

                    function Yl(i) {
                        return i === i && !Rt(i)
                    }

                    function Kl(i, s) {
                        return function(h) {
                            return h == null ? !1 : h[i] === s && (s !== e || i in wt(h))
                        }
                    }

                    function x0(i) {
                        var s = us(i, function(c) {
                                return h.size === d && h.clear(), c
                            }),
                            h = s.cache;
                        return s
                    }

                    function y0(i, s) {
                        var h = i[1],
                            c = s[1],
                            g = h | c,
                            w = g < (E | b | N),
                            S = c == N && h == M || c == N && h == z && i[7].length <= s[8] || c == (N | z) && s[7].length <= s[8] && h == M;
                        if (!(w || S)) return i;
                        c & E && (i[2] = s[2], g |= h & E ? 0 : L);
                        var A = s[3];
                        if (A) {
                            var O = i[3];
                            i[3] = O ? Ol(O, A, s[4]) : A, i[4] = O ? mi(i[3], p) : s[4]
                        }
                        return A = s[5], A && (O = i[5], i[5] = O ? Ll(O, A, s[6]) : A, i[6] = O ? mi(i[5], p) : s[6]), A = s[7], A && (i[7] = A), c & N && (i[8] = i[8] == null ? s[8] : Ht(i[8], s[8])), i[9] == null && (i[9] = s[9]), i[0] = s[0], i[1] = g, i
                    }

                    function w0(i) {
                        var s = [];
                        if (i != null)
                            for (var h in wt(i)) s.push(h);
                        return s
                    }

                    function T0(i) {
                        return zn.call(i)
                    }

                    function Zl(i, s, h) {
                        return s = Wt(s === e ? i.length - 1 : s, 0),
                            function() {
                                for (var c = arguments, g = -1, w = Wt(c.length - s, 0), S = I(w); ++g < w;) S[g] = c[s + g];
                                g = -1;
                                for (var A = I(s + 1); ++g < s;) A[g] = c[g];
                                return A[s] = h(S), ce(i, this, A)
                            }
                    }

                    function Ql(i, s) {
                        return s.length < 2 ? i : Gi(i, Pe(s, 0, -1))
                    }

                    function E0(i, s) {
                        for (var h = i.length, c = Ht(s.length, h), g = re(i); c--;) {
                            var w = s[c];
                            i[c] = ai(w, h) ? g[w] : e
                        }
                        return i
                    }

                    function Ba(i, s) {
                        if (!(s === "constructor" && typeof i[s] == "function") && s != "__proto__") return i[s]
                    }
                    var Jl = tu(wl),
                        rn = Bp || function(i, s) {
                            return Gt.setTimeout(i, s)
                        },
                        Ua = tu(Hg);

                    function jl(i, s, h) {
                        var c = s + "";
                        return Ua(i, p0(c, S0(f0(c), h)))
                    }

                    function tu(i) {
                        var s = 0,
                            h = 0;
                        return function() {
                            var c = qp(),
                                g = V - (c - h);
                            if (h = c, g > 0) {
                                if (++s >= G) return arguments[0]
                            } else s = 0;
                            return i.apply(e, arguments)
                        }
                    }

                    function as(i, s) {
                        var h = -1,
                            c = i.length,
                            g = c - 1;
                        for (s = s === e ? c : s; ++h < s;) {
                            var w = wa(h, g),
                                S = i[w];
                            i[w] = i[h], i[h] = S
                        }
                        return i.length = s, i
                    }
                    var eu = x0(function(i) {
                        var s = [];
                        return i.charCodeAt(0) === 46 && s.push(""), i.replace(dd, function(h, c, g, w) {
                            s.push(g ? w.replace(wd, "$1") : c || h)
                        }), s
                    });

                    function He(i) {
                        if (typeof i == "string" || ge(i)) return i;
                        var s = i + "";
                        return s == "0" && 1 / i == -1 / 0 ? "-0" : s
                    }

                    function Xi(i) {
                        if (i != null) {
                            try {
                                return In.call(i)
                            } catch {}
                            try {
                                return i + ""
                            } catch {}
                        }
                        return ""
                    }

                    function S0(i, s) {
                        return Ae(ee, function(h) {
                            var c = "_." + h[0];
                            s & h[1] && !Pn(i, c) && i.push(c)
                        }), i.sort()
                    }

                    function iu(i) {
                        if (i instanceof ct) return i.clone();
                        var s = new Me(i.__wrapped__, i.__chain__);
                        return s.__actions__ = re(i.__actions__), s.__index__ = i.__index__, s.__values__ = i.__values__, s
                    }

                    function b0(i, s, h) {
                        (h ? Jt(i, s, h) : s === e) ? s = 1: s = Wt(at(s), 0);
                        var c = i == null ? 0 : i.length;
                        if (!c || s < 1) return [];
                        for (var g = 0, w = 0, S = I(qn(c / s)); g < c;) S[w++] = Pe(i, g, g += s);
                        return S
                    }

                    function A0(i) {
                        for (var s = -1, h = i == null ? 0 : i.length, c = 0, g = []; ++s < h;) {
                            var w = i[s];
                            w && (g[c++] = w)
                        }
                        return g
                    }

                    function R0() {
                        var i = arguments.length;
                        if (!i) return [];
                        for (var s = I(i - 1), h = arguments[0], c = i; c--;) s[c - 1] = arguments[c];
                        return _i(rt(h) ? re(h) : [h], Vt(s, 1))
                    }
                    var M0 = ht(function(i, s) {
                            return Lt(i) ? Zr(i, Vt(s, 1, Lt, !0)) : []
                        }),
                        C0 = ht(function(i, s) {
                            var h = Oe(s);
                            return Lt(h) && (h = e), Lt(i) ? Zr(i, Vt(s, 1, Lt, !0), Q(h, 2)) : []
                        }),
                        P0 = ht(function(i, s) {
                            var h = Oe(s);
                            return Lt(h) && (h = e), Lt(i) ? Zr(i, Vt(s, 1, Lt, !0), e, h) : []
                        });

                    function O0(i, s, h) {
                        var c = i == null ? 0 : i.length;
                        return c ? (s = h || s === e ? 1 : at(s), Pe(i, s < 0 ? 0 : s, c)) : []
                    }

                    function L0(i, s, h) {
                        var c = i == null ? 0 : i.length;
                        return c ? (s = h || s === e ? 1 : at(s), s = c - s, Pe(i, 0, s < 0 ? 0 : s)) : []
                    }

                    function D0(i, s) {
                        return i && i.length ? Jn(i, Q(s, 3), !0, !0) : []
                    }

                    function F0(i, s) {
                        return i && i.length ? Jn(i, Q(s, 3), !0) : []
                    }

                    function I0(i, s, h, c) {
                        var g = i == null ? 0 : i.length;
                        return g ? (h && typeof h != "number" && Jt(i, s, h) && (h = 0, c = g), Rg(i, s, h, c)) : []
                    }

                    function ru(i, s, h) {
                        var c = i == null ? 0 : i.length;
                        if (!c) return -1;
                        var g = h == null ? 0 : at(h);
                        return g < 0 && (g = Wt(c + g, 0)), On(i, Q(s, 3), g)
                    }

                    function nu(i, s, h) {
                        var c = i == null ? 0 : i.length;
                        if (!c) return -1;
                        var g = c - 1;
                        return h !== e && (g = at(h), g = h < 0 ? Wt(c + g, 0) : Ht(g, c - 1)), On(i, Q(s, 3), g, !0)
                    }

                    function su(i) {
                        var s = i == null ? 0 : i.length;
                        return s ? Vt(i, 1) : []
                    }

                    function z0(i) {
                        var s = i == null ? 0 : i.length;
                        return s ? Vt(i, et) : []
                    }

                    function N0(i, s) {
                        var h = i == null ? 0 : i.length;
                        return h ? (s = s === e ? 1 : at(s), Vt(i, s)) : []
                    }

                    function B0(i) {
                        for (var s = -1, h = i == null ? 0 : i.length, c = {}; ++s < h;) {
                            var g = i[s];
                            c[g[0]] = g[1]
                        }
                        return c
                    }

                    function au(i) {
                        return i && i.length ? i[0] : e
                    }

                    function U0(i, s, h) {
                        var c = i == null ? 0 : i.length;
                        if (!c) return -1;
                        var g = h == null ? 0 : at(h);
                        return g < 0 && (g = Wt(c + g, 0)), sr(i, s, g)
                    }

                    function W0(i) {
                        var s = i == null ? 0 : i.length;
                        return s ? Pe(i, 0, -1) : []
                    }
                    var k0 = ht(function(i) {
                            var s = bt(i, Aa);
                            return s.length && s[0] === i[0] ? _a(s) : []
                        }),
                        q0 = ht(function(i) {
                            var s = Oe(i),
                                h = bt(i, Aa);
                            return s === Oe(h) ? s = e : h.pop(), h.length && h[0] === i[0] ? _a(h, Q(s, 2)) : []
                        }),
                        G0 = ht(function(i) {
                            var s = Oe(i),
                                h = bt(i, Aa);
                            return s = typeof s == "function" ? s : e, s && h.pop(), h.length && h[0] === i[0] ? _a(h, e, s) : []
                        });

                    function V0(i, s) {
                        return i == null ? "" : Wp.call(i, s)
                    }

                    function Oe(i) {
                        var s = i == null ? 0 : i.length;
                        return s ? i[s - 1] : e
                    }

                    function X0(i, s, h) {
                        var c = i == null ? 0 : i.length;
                        if (!c) return -1;
                        var g = c;
                        return h !== e && (g = at(h), g = g < 0 ? Wt(c + g, 0) : Ht(g, c - 1)), s === s ? Sp(i, s, g) : On(i, Wh, g, !0)
                    }

                    function H0(i, s) {
                        return i && i.length ? ml(i, at(s)) : e
                    }
                    var $0 = ht(ou);

                    function ou(i, s) {
                        return i && i.length && s && s.length ? ya(i, s) : i
                    }

                    function Y0(i, s, h) {
                        return i && i.length && s && s.length ? ya(i, s, Q(h, 2)) : i
                    }

                    function K0(i, s, h) {
                        return i && i.length && s && s.length ? ya(i, s, e, h) : i
                    }
                    var Z0 = si(function(i, s) {
                        var h = i == null ? 0 : i.length,
                            c = ca(i, s);
                        return yl(i, bt(s, function(g) {
                            return ai(g, h) ? +g : g
                        }).sort(Pl)), c
                    });

                    function Q0(i, s) {
                        var h = [];
                        if (!(i && i.length)) return h;
                        var c = -1,
                            g = [],
                            w = i.length;
                        for (s = Q(s, 3); ++c < w;) {
                            var S = i[c];
                            s(S, c, i) && (h.push(S), g.push(c))
                        }
                        return yl(i, g), h
                    }

                    function Wa(i) {
                        return i == null ? i : Vp.call(i)
                    }

                    function J0(i, s, h) {
                        var c = i == null ? 0 : i.length;
                        return c ? (h && typeof h != "number" && Jt(i, s, h) ? (s = 0, h = c) : (s = s == null ? 0 : at(s), h = h === e ? c : at(h)), Pe(i, s, h)) : []
                    }

                    function j0(i, s) {
                        return Qn(i, s)
                    }

                    function t_(i, s, h) {
                        return Ea(i, s, Q(h, 2))
                    }

                    function e_(i, s) {
                        var h = i == null ? 0 : i.length;
                        if (h) {
                            var c = Qn(i, s);
                            if (c < h && qe(i[c], s)) return c
                        }
                        return -1
                    }

                    function i_(i, s) {
                        return Qn(i, s, !0)
                    }

                    function r_(i, s, h) {
                        return Ea(i, s, Q(h, 2), !0)
                    }

                    function n_(i, s) {
                        var h = i == null ? 0 : i.length;
                        if (h) {
                            var c = Qn(i, s, !0) - 1;
                            if (qe(i[c], s)) return c
                        }
                        return -1
                    }

                    function s_(i) {
                        return i && i.length ? Tl(i) : []
                    }

                    function a_(i, s) {
                        return i && i.length ? Tl(i, Q(s, 2)) : []
                    }

                    function o_(i) {
                        var s = i == null ? 0 : i.length;
                        return s ? Pe(i, 1, s) : []
                    }

                    function h_(i, s, h) {
                        return i && i.length ? (s = h || s === e ? 1 : at(s), Pe(i, 0, s < 0 ? 0 : s)) : []
                    }

                    function l_(i, s, h) {
                        var c = i == null ? 0 : i.length;
                        return c ? (s = h || s === e ? 1 : at(s), s = c - s, Pe(i, s < 0 ? 0 : s, c)) : []
                    }

                    function u_(i, s) {
                        return i && i.length ? Jn(i, Q(s, 3), !1, !0) : []
                    }

                    function f_(i, s) {
                        return i && i.length ? Jn(i, Q(s, 3)) : []
                    }
                    var c_ = ht(function(i) {
                            return yi(Vt(i, 1, Lt, !0))
                        }),
                        d_ = ht(function(i) {
                            var s = Oe(i);
                            return Lt(s) && (s = e), yi(Vt(i, 1, Lt, !0), Q(s, 2))
                        }),
                        p_ = ht(function(i) {
                            var s = Oe(i);
                            return s = typeof s == "function" ? s : e, yi(Vt(i, 1, Lt, !0), e, s)
                        });

                    function g_(i) {
                        return i && i.length ? yi(i) : []
                    }

                    function __(i, s) {
                        return i && i.length ? yi(i, Q(s, 2)) : []
                    }

                    function m_(i, s) {
                        return s = typeof s == "function" ? s : e, i && i.length ? yi(i, e, s) : []
                    }

                    function ka(i) {
                        if (!(i && i.length)) return [];
                        var s = 0;
                        return i = gi(i, function(h) {
                            if (Lt(h)) return s = Wt(h.length, s), !0
                        }), na(s, function(h) {
                            return bt(i, ea(h))
                        })
                    }

                    function hu(i, s) {
                        if (!(i && i.length)) return [];
                        var h = ka(i);
                        return s == null ? h : bt(h, function(c) {
                            return ce(s, e, c)
                        })
                    }
                    var v_ = ht(function(i, s) {
                            return Lt(i) ? Zr(i, s) : []
                        }),
                        x_ = ht(function(i) {
                            return ba(gi(i, Lt))
                        }),
                        y_ = ht(function(i) {
                            var s = Oe(i);
                            return Lt(s) && (s = e), ba(gi(i, Lt), Q(s, 2))
                        }),
                        w_ = ht(function(i) {
                            var s = Oe(i);
                            return s = typeof s == "function" ? s : e, ba(gi(i, Lt), e, s)
                        }),
                        T_ = ht(ka);

                    function E_(i, s) {
                        return Al(i || [], s || [], Kr)
                    }

                    function S_(i, s) {
                        return Al(i || [], s || [], jr)
                    }
                    var b_ = ht(function(i) {
                        var s = i.length,
                            h = s > 1 ? i[s - 1] : e;
                        return h = typeof h == "function" ? (i.pop(), h) : e, hu(i, h)
                    });

                    function lu(i) {
                        var s = y(i);
                        return s.__chain__ = !0, s
                    }

                    function A_(i, s) {
                        return s(i), i
                    }

                    function os(i, s) {
                        return s(i)
                    }
                    var R_ = si(function(i) {
                        var s = i.length,
                            h = s ? i[0] : 0,
                            c = this.__wrapped__,
                            g = function(w) {
                                return ca(w, i)
                            };
                        return s > 1 || this.__actions__.length || !(c instanceof ct) || !ai(h) ? this.thru(g) : (c = c.slice(h, +h + (s ? 1 : 0)), c.__actions__.push({
                            func: os,
                            args: [g],
                            thisArg: e
                        }), new Me(c, this.__chain__).thru(function(w) {
                            return s && !w.length && w.push(e), w
                        }))
                    });

                    function M_() {
                        return lu(this)
                    }

                    function C_() {
                        return new Me(this.value(), this.__chain__)
                    }

                    function P_() {
                        this.__values__ === e && (this.__values__ = Eu(this.value()));
                        var i = this.__index__ >= this.__values__.length,
                            s = i ? e : this.__values__[this.__index__++];
                        return {
                            done: i,
                            value: s
                        }
                    }

                    function O_() {
                        return this
                    }

                    function L_(i) {
                        for (var s, h = this; h instanceof Hn;) {
                            var c = iu(h);
                            c.__index__ = 0, c.__values__ = e, s ? g.__wrapped__ = c : s = c;
                            var g = c;
                            h = h.__wrapped__
                        }
                        return g.__wrapped__ = i, s
                    }

                    function D_() {
                        var i = this.__wrapped__;
                        if (i instanceof ct) {
                            var s = i;
                            return this.__actions__.length && (s = new ct(this)), s = s.reverse(), s.__actions__.push({
                                func: os,
                                args: [Wa],
                                thisArg: e
                            }), new Me(s, this.__chain__)
                        }
                        return this.thru(Wa)
                    }

                    function F_() {
                        return bl(this.__wrapped__, this.__actions__)
                    }
                    var I_ = jn(function(i, s, h) {
                        xt.call(i, h) ? ++i[h] : ri(i, h, 1)
                    });

                    function z_(i, s, h) {
                        var c = rt(i) ? Bh : Ag;
                        return h && Jt(i, s, h) && (s = e), c(i, Q(s, 3))
                    }

                    function N_(i, s) {
                        var h = rt(i) ? gi : hl;
                        return h(i, Q(s, 3))
                    }
                    var B_ = zl(ru),
                        U_ = zl(nu);

                    function W_(i, s) {
                        return Vt(hs(i, s), 1)
                    }

                    function k_(i, s) {
                        return Vt(hs(i, s), et)
                    }

                    function q_(i, s, h) {
                        return h = h === e ? 1 : at(h), Vt(hs(i, s), h)
                    }

                    function uu(i, s) {
                        var h = rt(i) ? Ae : xi;
                        return h(i, Q(s, 3))
                    }

                    function fu(i, s) {
                        var h = rt(i) ? op : ol;
                        return h(i, Q(s, 3))
                    }
                    var G_ = jn(function(i, s, h) {
                        xt.call(i, h) ? i[h].push(s) : ri(i, h, [s])
                    });

                    function V_(i, s, h, c) {
                        i = ne(i) ? i : mr(i), h = h && !c ? at(h) : 0;
                        var g = i.length;
                        return h < 0 && (h = Wt(g + h, 0)), ds(i) ? h <= g && i.indexOf(s, h) > -1 : !!g && sr(i, s, h) > -1
                    }
                    var X_ = ht(function(i, s, h) {
                            var c = -1,
                                g = typeof s == "function",
                                w = ne(i) ? I(i.length) : [];
                            return xi(i, function(S) {
                                w[++c] = g ? ce(s, S, h) : Qr(S, s, h)
                            }), w
                        }),
                        H_ = jn(function(i, s, h) {
                            ri(i, h, s)
                        });

                    function hs(i, s) {
                        var h = rt(i) ? bt : pl;
                        return h(i, Q(s, 3))
                    }

                    function $_(i, s, h, c) {
                        return i == null ? [] : (rt(s) || (s = s == null ? [] : [s]), h = c ? e : h, rt(h) || (h = h == null ? [] : [h]), vl(i, s, h))
                    }
                    var Y_ = jn(function(i, s, h) {
                        i[h ? 0 : 1].push(s)
                    }, function() {
                        return [
                            [],
                            []
                        ]
                    });

                    function K_(i, s, h) {
                        var c = rt(i) ? js : qh,
                            g = arguments.length < 3;
                        return c(i, Q(s, 4), h, g, xi)
                    }

                    function Z_(i, s, h) {
                        var c = rt(i) ? hp : qh,
                            g = arguments.length < 3;
                        return c(i, Q(s, 4), h, g, ol)
                    }

                    function Q_(i, s) {
                        var h = rt(i) ? gi : hl;
                        return h(i, fs(Q(s, 3)))
                    }

                    function J_(i) {
                        var s = rt(i) ? rl : Vg;
                        return s(i)
                    }

                    function j_(i, s, h) {
                        (h ? Jt(i, s, h) : s === e) ? s = 1: s = at(s);
                        var c = rt(i) ? wg : Xg;
                        return c(i, s)
                    }

                    function t1(i) {
                        var s = rt(i) ? Tg : $g;
                        return s(i)
                    }

                    function e1(i) {
                        if (i == null) return 0;
                        if (ne(i)) return ds(i) ? or(i) : i.length;
                        var s = $t(i);
                        return s == Be || s == Ue ? i.size : va(i).length
                    }

                    function i1(i, s, h) {
                        var c = rt(i) ? ta : Yg;
                        return h && Jt(i, s, h) && (s = e), c(i, Q(s, 3))
                    }
                    var r1 = ht(function(i, s) {
                            if (i == null) return [];
                            var h = s.length;
                            return h > 1 && Jt(i, s[0], s[1]) ? s = [] : h > 2 && Jt(s[0], s[1], s[2]) && (s = [s[0]]), vl(i, Vt(s, 1), [])
                        }),
                        ls = Np || function() {
                            return Gt.Date.now()
                        };

                    function n1(i, s) {
                        if (typeof s != "function") throw new Re(l);
                        return i = at(i),
                            function() {
                                if (--i < 1) return s.apply(this, arguments)
                            }
                    }

                    function cu(i, s, h) {
                        return s = h ? e : s, s = i && s == null ? i.length : s, ni(i, N, e, e, e, e, s)
                    }

                    function du(i, s) {
                        var h;
                        if (typeof s != "function") throw new Re(l);
                        return i = at(i),
                            function() {
                                return --i > 0 && (h = s.apply(this, arguments)), i <= 1 && (s = e), h
                            }
                    }
                    var qa = ht(function(i, s, h) {
                            var c = E;
                            if (h.length) {
                                var g = mi(h, gr(qa));
                                c |= R
                            }
                            return ni(i, c, s, h, g)
                        }),
                        pu = ht(function(i, s, h) {
                            var c = E | b;
                            if (h.length) {
                                var g = mi(h, gr(pu));
                                c |= R
                            }
                            return ni(s, c, i, h, g)
                        });

                    function gu(i, s, h) {
                        s = h ? e : s;
                        var c = ni(i, M, e, e, e, e, e, s);
                        return c.placeholder = gu.placeholder, c
                    }

                    function _u(i, s, h) {
                        s = h ? e : s;
                        var c = ni(i, C, e, e, e, e, e, s);
                        return c.placeholder = _u.placeholder, c
                    }

                    function mu(i, s, h) {
                        var c, g, w, S, A, O, U = 0,
                            W = !1,
                            k = !1,
                            H = !0;
                        if (typeof i != "function") throw new Re(l);
                        s = Le(s) || 0, Rt(h) && (W = !!h.leading, k = "maxWait" in h, w = k ? Wt(Le(h.maxWait) || 0, s) : w, H = "trailing" in h ? !!h.trailing : H);

                        function K(Dt) {
                            var Ge = c,
                                li = g;
                            return c = g = e, U = Dt, S = i.apply(li, Ge), S
                        }

                        function J(Dt) {
                            return U = Dt, A = rn(ft, s), W ? K(Dt) : S
                        }

                        function ot(Dt) {
                            var Ge = Dt - O,
                                li = Dt - U,
                                zu = s - Ge;
                            return k ? Ht(zu, w - li) : zu
                        }

                        function j(Dt) {
                            var Ge = Dt - O,
                                li = Dt - U;
                            return O === e || Ge >= s || Ge < 0 || k && li >= w
                        }

                        function ft() {
                            var Dt = ls();
                            if (j(Dt)) return dt(Dt);
                            A = rn(ft, ot(Dt))
                        }

                        function dt(Dt) {
                            return A = e, H && c ? K(Dt) : (c = g = e, S)
                        }

                        function _e() {
                            A !== e && Rl(A), U = 0, c = O = g = A = e
                        }

                        function jt() {
                            return A === e ? S : dt(ls())
                        }

                        function me() {
                            var Dt = ls(),
                                Ge = j(Dt);
                            if (c = arguments, g = this, O = Dt, Ge) {
                                if (A === e) return J(O);
                                if (k) return Rl(A), A = rn(ft, s), K(O)
                            }
                            return A === e && (A = rn(ft, s)), S
                        }
                        return me.cancel = _e, me.flush = jt, me
                    }
                    var s1 = ht(function(i, s) {
                            return al(i, 1, s)
                        }),
                        a1 = ht(function(i, s, h) {
                            return al(i, Le(s) || 0, h)
                        });

                    function o1(i) {
                        return ni(i, F)
                    }

                    function us(i, s) {
                        if (typeof i != "function" || s != null && typeof s != "function") throw new Re(l);
                        var h = function() {
                            var c = arguments,
                                g = s ? s.apply(this, c) : c[0],
                                w = h.cache;
                            if (w.has(g)) return w.get(g);
                            var S = i.apply(this, c);
                            return h.cache = w.set(g, S) || w, S
                        };
                        return h.cache = new(us.Cache || ii), h
                    }
                    us.Cache = ii;

                    function fs(i) {
                        if (typeof i != "function") throw new Re(l);
                        return function() {
                            var s = arguments;
                            switch (s.length) {
                                case 0:
                                    return !i.call(this);
                                case 1:
                                    return !i.call(this, s[0]);
                                case 2:
                                    return !i.call(this, s[0], s[1]);
                                case 3:
                                    return !i.call(this, s[0], s[1], s[2])
                            }
                            return !i.apply(this, s)
                        }
                    }

                    function h1(i) {
                        return du(2, i)
                    }
                    var l1 = Kg(function(i, s) {
                            s = s.length == 1 && rt(s[0]) ? bt(s[0], de(Q())) : bt(Vt(s, 1), de(Q()));
                            var h = s.length;
                            return ht(function(c) {
                                for (var g = -1, w = Ht(c.length, h); ++g < w;) c[g] = s[g].call(this, c[g]);
                                return ce(i, this, c)
                            })
                        }),
                        Ga = ht(function(i, s) {
                            var h = mi(s, gr(Ga));
                            return ni(i, R, e, s, h)
                        }),
                        vu = ht(function(i, s) {
                            var h = mi(s, gr(vu));
                            return ni(i, D, e, s, h)
                        }),
                        u1 = si(function(i, s) {
                            return ni(i, z, e, e, e, s)
                        });

                    function f1(i, s) {
                        if (typeof i != "function") throw new Re(l);
                        return s = s === e ? s : at(s), ht(i, s)
                    }

                    function c1(i, s) {
                        if (typeof i != "function") throw new Re(l);
                        return s = s == null ? 0 : Wt(at(s), 0), ht(function(h) {
                            var c = h[s],
                                g = Ti(h, 0, s);
                            return c && _i(g, c), ce(i, this, g)
                        })
                    }

                    function d1(i, s, h) {
                        var c = !0,
                            g = !0;
                        if (typeof i != "function") throw new Re(l);
                        return Rt(h) && (c = "leading" in h ? !!h.leading : c, g = "trailing" in h ? !!h.trailing : g), mu(i, s, {
                            leading: c,
                            maxWait: s,
                            trailing: g
                        })
                    }

                    function p1(i) {
                        return cu(i, 1)
                    }

                    function g1(i, s) {
                        return Ga(Ra(s), i)
                    }

                    function _1() {
                        if (!arguments.length) return [];
                        var i = arguments[0];
                        return rt(i) ? i : [i]
                    }

                    function m1(i) {
                        return Ce(i, x)
                    }

                    function v1(i, s) {
                        return s = typeof s == "function" ? s : e, Ce(i, x, s)
                    }

                    function x1(i) {
                        return Ce(i, v | x)
                    }

                    function y1(i, s) {
                        return s = typeof s == "function" ? s : e, Ce(i, v | x, s)
                    }

                    function w1(i, s) {
                        return s == null || sl(i, s, kt(s))
                    }

                    function qe(i, s) {
                        return i === s || i !== i && s !== s
                    }
                    var T1 = rs(ga),
                        E1 = rs(function(i, s) {
                            return i >= s
                        }),
                        Hi = fl(function() {
                            return arguments
                        }()) ? fl : function(i) {
                            return Pt(i) && xt.call(i, "callee") && !Qh.call(i, "callee")
                        },
                        rt = I.isArray,
                        S1 = Lh ? de(Lh) : Lg;

                    function ne(i) {
                        return i != null && cs(i.length) && !oi(i)
                    }

                    function Lt(i) {
                        return Pt(i) && ne(i)
                    }

                    function b1(i) {
                        return i === !0 || i === !1 || Pt(i) && Qt(i) == zr
                    }
                    var Ei = Up || to,
                        A1 = Dh ? de(Dh) : Dg;

                    function R1(i) {
                        return Pt(i) && i.nodeType === 1 && !nn(i)
                    }

                    function M1(i) {
                        if (i == null) return !0;
                        if (ne(i) && (rt(i) || typeof i == "string" || typeof i.splice == "function" || Ei(i) || _r(i) || Hi(i))) return !i.length;
                        var s = $t(i);
                        if (s == Be || s == Ue) return !i.size;
                        if (en(i)) return !va(i).length;
                        for (var h in i)
                            if (xt.call(i, h)) return !1;
                        return !0
                    }

                    function C1(i, s) {
                        return Jr(i, s)
                    }

                    function P1(i, s, h) {
                        h = typeof h == "function" ? h : e;
                        var c = h ? h(i, s) : e;
                        return c === e ? Jr(i, s, e, h) : !!c
                    }

                    function Va(i) {
                        if (!Pt(i)) return !1;
                        var s = Qt(i);
                        return s == Sn || s == jc || typeof i.message == "string" && typeof i.name == "string" && !nn(i)
                    }

                    function O1(i) {
                        return typeof i == "number" && jh(i)
                    }

                    function oi(i) {
                        if (!Rt(i)) return !1;
                        var s = Qt(i);
                        return s == bn || s == ah || s == Jc || s == ed
                    }

                    function xu(i) {
                        return typeof i == "number" && i == at(i)
                    }

                    function cs(i) {
                        return typeof i == "number" && i > -1 && i % 1 == 0 && i <= _t
                    }

                    function Rt(i) {
                        var s = typeof i;
                        return i != null && (s == "object" || s == "function")
                    }

                    function Pt(i) {
                        return i != null && typeof i == "object"
                    }
                    var yu = Fh ? de(Fh) : Ig;

                    function L1(i, s) {
                        return i === s || ma(i, s, Fa(s))
                    }

                    function D1(i, s, h) {
                        return h = typeof h == "function" ? h : e, ma(i, s, Fa(s), h)
                    }

                    function F1(i) {
                        return wu(i) && i != +i
                    }

                    function I1(i) {
                        if (v0(i)) throw new it(o);
                        return cl(i)
                    }

                    function z1(i) {
                        return i === null
                    }

                    function N1(i) {
                        return i == null
                    }

                    function wu(i) {
                        return typeof i == "number" || Pt(i) && Qt(i) == Br
                    }

                    function nn(i) {
                        if (!Pt(i) || Qt(i) != ti) return !1;
                        var s = Un(i);
                        if (s === null) return !0;
                        var h = xt.call(s, "constructor") && s.constructor;
                        return typeof h == "function" && h instanceof h && In.call(h) == Dp
                    }
                    var Xa = Ih ? de(Ih) : zg;

                    function B1(i) {
                        return xu(i) && i >= -9007199254740991 && i <= _t
                    }
                    var Tu = zh ? de(zh) : Ng;

                    function ds(i) {
                        return typeof i == "string" || !rt(i) && Pt(i) && Qt(i) == Wr
                    }

                    function ge(i) {
                        return typeof i == "symbol" || Pt(i) && Qt(i) == An
                    }
                    var _r = Nh ? de(Nh) : Bg;

                    function U1(i) {
                        return i === e
                    }

                    function W1(i) {
                        return Pt(i) && $t(i) == kr
                    }

                    function k1(i) {
                        return Pt(i) && Qt(i) == rd
                    }
                    var q1 = rs(xa),
                        G1 = rs(function(i, s) {
                            return i <= s
                        });

                    function Eu(i) {
                        if (!i) return [];
                        if (ne(i)) return ds(i) ? We(i) : re(i);
                        if (Vr && i[Vr]) return wp(i[Vr]());
                        var s = $t(i),
                            h = s == Be ? aa : s == Ue ? Ln : mr;
                        return h(i)
                    }

                    function hi(i) {
                        if (!i) return i === 0 ? i : 0;
                        if (i = Le(i), i === et || i === -1 / 0) {
                            var s = i < 0 ? -1 : 1;
                            return s * yt
                        }
                        return i === i ? i : 0
                    }

                    function at(i) {
                        var s = hi(i),
                            h = s % 1;
                        return s === s ? h ? s - h : s : 0
                    }

                    function Su(i) {
                        return i ? qi(at(i), 0, lt) : 0
                    }

                    function Le(i) {
                        if (typeof i == "number") return i;
                        if (ge(i)) return ut;
                        if (Rt(i)) {
                            var s = typeof i.valueOf == "function" ? i.valueOf() : i;
                            i = Rt(s) ? s + "" : s
                        }
                        if (typeof i != "string") return i === 0 ? i : +i;
                        i = Gh(i);
                        var h = Sd.test(i);
                        return h || Ad.test(i) ? np(i.slice(2), h ? 2 : 8) : Ed.test(i) ? ut : +i
                    }

                    function bu(i) {
                        return Xe(i, se(i))
                    }

                    function V1(i) {
                        return i ? qi(at(i), -9007199254740991, _t) : i === 0 ? i : 0
                    }

                    function vt(i) {
                        return i == null ? "" : pe(i)
                    }
                    var X1 = dr(function(i, s) {
                            if (en(s) || ne(s)) {
                                Xe(s, kt(s), i);
                                return
                            }
                            for (var h in s) xt.call(s, h) && Kr(i, h, s[h])
                        }),
                        Au = dr(function(i, s) {
                            Xe(s, se(s), i)
                        }),
                        ps = dr(function(i, s, h, c) {
                            Xe(s, se(s), i, c)
                        }),
                        H1 = dr(function(i, s, h, c) {
                            Xe(s, kt(s), i, c)
                        }),
                        $1 = si(ca);

                    function Y1(i, s) {
                        var h = cr(i);
                        return s == null ? h : nl(h, s)
                    }
                    var K1 = ht(function(i, s) {
                            i = wt(i);
                            var h = -1,
                                c = s.length,
                                g = c > 2 ? s[2] : e;
                            for (g && Jt(s[0], s[1], g) && (c = 1); ++h < c;)
                                for (var w = s[h], S = se(w), A = -1, O = S.length; ++A < O;) {
                                    var U = S[A],
                                        W = i[U];
                                    (W === e || qe(W, lr[U]) && !xt.call(i, U)) && (i[U] = w[U])
                                }
                            return i
                        }),
                        Z1 = ht(function(i) {
                            return i.push(e, Gl), ce(Ru, e, i)
                        });

                    function Q1(i, s) {
                        return Uh(i, Q(s, 3), Ve)
                    }

                    function J1(i, s) {
                        return Uh(i, Q(s, 3), pa)
                    }

                    function j1(i, s) {
                        return i == null ? i : da(i, Q(s, 3), se)
                    }

                    function tm(i, s) {
                        return i == null ? i : ll(i, Q(s, 3), se)
                    }

                    function em(i, s) {
                        return i && Ve(i, Q(s, 3))
                    }

                    function im(i, s) {
                        return i && pa(i, Q(s, 3))
                    }

                    function rm(i) {
                        return i == null ? [] : Kn(i, kt(i))
                    }

                    function nm(i) {
                        return i == null ? [] : Kn(i, se(i))
                    }

                    function Ha(i, s, h) {
                        var c = i == null ? e : Gi(i, s);
                        return c === e ? h : c
                    }

                    function sm(i, s) {
                        return i != null && Hl(i, s, Mg)
                    }

                    function $a(i, s) {
                        return i != null && Hl(i, s, Cg)
                    }
                    var am = Bl(function(i, s, h) {
                            s != null && typeof s.toString != "function" && (s = zn.call(s)), i[s] = h
                        }, Ka(ae)),
                        om = Bl(function(i, s, h) {
                            s != null && typeof s.toString != "function" && (s = zn.call(s)), xt.call(i, s) ? i[s].push(h) : i[s] = [h]
                        }, Q),
                        hm = ht(Qr);

                    function kt(i) {
                        return ne(i) ? il(i) : va(i)
                    }

                    function se(i) {
                        return ne(i) ? il(i, !0) : Ug(i)
                    }

                    function lm(i, s) {
                        var h = {};
                        return s = Q(s, 3), Ve(i, function(c, g, w) {
                            ri(h, s(c, g, w), c)
                        }), h
                    }

                    function um(i, s) {
                        var h = {};
                        return s = Q(s, 3), Ve(i, function(c, g, w) {
                            ri(h, g, s(c, g, w))
                        }), h
                    }
                    var fm = dr(function(i, s, h) {
                            Zn(i, s, h)
                        }),
                        Ru = dr(function(i, s, h, c) {
                            Zn(i, s, h, c)
                        }),
                        cm = si(function(i, s) {
                            var h = {};
                            if (i == null) return h;
                            var c = !1;
                            s = bt(s, function(w) {
                                return w = wi(w, i), c || (c = w.length > 1), w
                            }), Xe(i, La(i), h), c && (h = Ce(h, v | m | x, a0));
                            for (var g = s.length; g--;) Sa(h, s[g]);
                            return h
                        });

                    function dm(i, s) {
                        return Mu(i, fs(Q(s)))
                    }
                    var pm = si(function(i, s) {
                        return i == null ? {} : kg(i, s)
                    });

                    function Mu(i, s) {
                        if (i == null) return {};
                        var h = bt(La(i), function(c) {
                            return [c]
                        });
                        return s = Q(s), xl(i, h, function(c, g) {
                            return s(c, g[0])
                        })
                    }

                    function gm(i, s, h) {
                        s = wi(s, i);
                        var c = -1,
                            g = s.length;
                        for (g || (g = 1, i = e); ++c < g;) {
                            var w = i == null ? e : i[He(s[c])];
                            w === e && (c = g, w = h), i = oi(w) ? w.call(i) : w
                        }
                        return i
                    }

                    function _m(i, s, h) {
                        return i == null ? i : jr(i, s, h)
                    }

                    function mm(i, s, h, c) {
                        return c = typeof c == "function" ? c : e, i == null ? i : jr(i, s, h, c)
                    }
                    var Cu = kl(kt),
                        Pu = kl(se);

                    function vm(i, s, h) {
                        var c = rt(i),
                            g = c || Ei(i) || _r(i);
                        if (s = Q(s, 4), h == null) {
                            var w = i && i.constructor;
                            g ? h = c ? new w : [] : Rt(i) ? h = oi(w) ? cr(Un(i)) : {} : h = {}
                        }
                        return (g ? Ae : Ve)(i, function(S, A, O) {
                            return s(h, S, A, O)
                        }), h
                    }

                    function xm(i, s) {
                        return i == null ? !0 : Sa(i, s)
                    }

                    function ym(i, s, h) {
                        return i == null ? i : Sl(i, s, Ra(h))
                    }

                    function wm(i, s, h, c) {
                        return c = typeof c == "function" ? c : e, i == null ? i : Sl(i, s, Ra(h), c)
                    }

                    function mr(i) {
                        return i == null ? [] : sa(i, kt(i))
                    }

                    function Tm(i) {
                        return i == null ? [] : sa(i, se(i))
                    }

                    function Em(i, s, h) {
                        return h === e && (h = s, s = e), h !== e && (h = Le(h), h = h === h ? h : 0), s !== e && (s = Le(s), s = s === s ? s : 0), qi(Le(i), s, h)
                    }

                    function Sm(i, s, h) {
                        return s = hi(s), h === e ? (h = s, s = 0) : h = hi(h), i = Le(i), Pg(i, s, h)
                    }

                    function bm(i, s, h) {
                        if (h && typeof h != "boolean" && Jt(i, s, h) && (s = h = e), h === e && (typeof s == "boolean" ? (h = s, s = e) : typeof i == "boolean" && (h = i, i = e)), i === e && s === e ? (i = 0, s = 1) : (i = hi(i), s === e ? (s = i, i = 0) : s = hi(s)), i > s) {
                            var c = i;
                            i = s, s = c
                        }
                        if (h || i % 1 || s % 1) {
                            var g = tl();
                            return Ht(i + g * (s - i + rp("1e-" + ((g + "").length - 1))), s)
                        }
                        return wa(i, s)
                    }
                    var Am = pr(function(i, s, h) {
                        return s = s.toLowerCase(), i + (h ? Ou(s) : s)
                    });

                    function Ou(i) {
                        return Ya(vt(i).toLowerCase())
                    }

                    function Lu(i) {
                        return i = vt(i), i && i.replace(Md, _p).replace($d, "")
                    }

                    function Rm(i, s, h) {
                        i = vt(i), s = pe(s);
                        var c = i.length;
                        h = h === e ? c : qi(at(h), 0, c);
                        var g = h;
                        return h -= s.length, h >= 0 && i.slice(h, g) == s
                    }

                    function Mm(i) {
                        return i = vt(i), i && hd.test(i) ? i.replace(lh, mp) : i
                    }

                    function Cm(i) {
                        return i = vt(i), i && pd.test(i) ? i.replace(Gs, "\\$&") : i
                    }
                    var Pm = pr(function(i, s, h) {
                            return i + (h ? "-" : "") + s.toLowerCase()
                        }),
                        Om = pr(function(i, s, h) {
                            return i + (h ? " " : "") + s.toLowerCase()
                        }),
                        Lm = Il("toLowerCase");

                    function Dm(i, s, h) {
                        i = vt(i), s = at(s);
                        var c = s ? or(i) : 0;
                        if (!s || c >= s) return i;
                        var g = (s - c) / 2;
                        return is(Gn(g), h) + i + is(qn(g), h)
                    }

                    function Fm(i, s, h) {
                        i = vt(i), s = at(s);
                        var c = s ? or(i) : 0;
                        return s && c < s ? i + is(s - c, h) : i
                    }

                    function Im(i, s, h) {
                        i = vt(i), s = at(s);
                        var c = s ? or(i) : 0;
                        return s && c < s ? is(s - c, h) + i : i
                    }

                    function zm(i, s, h) {
                        return h || s == null ? s = 0 : s && (s = +s), Gp(vt(i).replace(Vs, ""), s || 0)
                    }

                    function Nm(i, s, h) {
                        return (h ? Jt(i, s, h) : s === e) ? s = 1 : s = at(s), Ta(vt(i), s)
                    }

                    function Bm() {
                        var i = arguments,
                            s = vt(i[0]);
                        return i.length < 3 ? s : s.replace(i[1], i[2])
                    }
                    var Um = pr(function(i, s, h) {
                        return i + (h ? "_" : "") + s.toLowerCase()
                    });

                    function Wm(i, s, h) {
                        return h && typeof h != "number" && Jt(i, s, h) && (s = h = e), h = h === e ? lt : h >>> 0, h ? (i = vt(i), i && (typeof s == "string" || s != null && !Xa(s)) && (s = pe(s), !s && ar(i)) ? Ti(We(i), 0, h) : i.split(s, h)) : []
                    }
                    var km = pr(function(i, s, h) {
                        return i + (h ? " " : "") + Ya(s)
                    });

                    function qm(i, s, h) {
                        return i = vt(i), h = h == null ? 0 : qi(at(h), 0, i.length), s = pe(s), i.slice(h, h + s.length) == s
                    }

                    function Gm(i, s, h) {
                        var c = y.templateSettings;
                        h && Jt(i, s, h) && (s = e), i = vt(i), s = ps({}, s, c, ql);
                        var g = ps({}, s.imports, c.imports, ql),
                            w = kt(g),
                            S = sa(g, w),
                            A, O, U = 0,
                            W = s.interpolate || Rn,
                            k = "__p += '",
                            H = oa((s.escape || Rn).source + "|" + W.source + "|" + (W === uh ? Td : Rn).source + "|" + (s.evaluate || Rn).source + "|$", "g"),
                            K = "//# sourceURL=" + (xt.call(s, "sourceURL") ? (s.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Jd + "]") + `
`;
                        i.replace(H, function(j, ft, dt, _e, jt, me) {
                            return dt || (dt = _e), k += i.slice(U, me).replace(Cd, vp), ft && (A = !0, k += `' +
__e(` + ft + `) +
'`), jt && (O = !0, k += `';
` + jt + `;
__p += '`), dt && (k += `' +
((__t = (` + dt + `)) == null ? '' : __t) +
'`), U = me + j.length, j
                        }), k += `';
`;
                        var J = xt.call(s, "variable") && s.variable;
                        if (!J) k = `with (obj) {
` + k + `
}
`;
                        else if (yd.test(J)) throw new it(u);
                        k = (O ? k.replace(nd, "") : k).replace(sd, "$1").replace(ad, "$1;"), k = "function(" + (J || "obj") + `) {
` + (J ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (A ? ", __e = _.escape" : "") + (O ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + k + `return __p
}`;
                        var ot = Fu(function() {
                            return mt(w, K + "return " + k).apply(e, S)
                        });
                        if (ot.source = k, Va(ot)) throw ot;
                        return ot
                    }

                    function Vm(i) {
                        return vt(i).toLowerCase()
                    }

                    function Xm(i) {
                        return vt(i).toUpperCase()
                    }

                    function Hm(i, s, h) {
                        if (i = vt(i), i && (h || s === e)) return Gh(i);
                        if (!i || !(s = pe(s))) return i;
                        var c = We(i),
                            g = We(s),
                            w = Vh(c, g),
                            S = Xh(c, g) + 1;
                        return Ti(c, w, S).join("")
                    }

                    function $m(i, s, h) {
                        if (i = vt(i), i && (h || s === e)) return i.slice(0, $h(i) + 1);
                        if (!i || !(s = pe(s))) return i;
                        var c = We(i),
                            g = Xh(c, We(s)) + 1;
                        return Ti(c, 0, g).join("")
                    }

                    function Ym(i, s, h) {
                        if (i = vt(i), i && (h || s === e)) return i.replace(Vs, "");
                        if (!i || !(s = pe(s))) return i;
                        var c = We(i),
                            g = Vh(c, We(s));
                        return Ti(c, g).join("")
                    }

                    function Km(i, s) {
                        var h = q,
                            c = Y;
                        if (Rt(s)) {
                            var g = "separator" in s ? s.separator : g;
                            h = "length" in s ? at(s.length) : h, c = "omission" in s ? pe(s.omission) : c
                        }
                        i = vt(i);
                        var w = i.length;
                        if (ar(i)) {
                            var S = We(i);
                            w = S.length
                        }
                        if (h >= w) return i;
                        var A = h - or(c);
                        if (A < 1) return c;
                        var O = S ? Ti(S, 0, A).join("") : i.slice(0, A);
                        if (g === e) return O + c;
                        if (S && (A += O.length - A), Xa(g)) {
                            if (i.slice(A).search(g)) {
                                var U, W = O;
                                for (g.global || (g = oa(g.source, vt(fh.exec(g)) + "g")), g.lastIndex = 0; U = g.exec(W);) var k = U.index;
                                O = O.slice(0, k === e ? A : k)
                            }
                        } else if (i.indexOf(pe(g), A) != A) {
                            var H = O.lastIndexOf(g);
                            H > -1 && (O = O.slice(0, H))
                        }
                        return O + c
                    }

                    function Zm(i) {
                        return i = vt(i), i && od.test(i) ? i.replace(hh, bp) : i
                    }
                    var Qm = pr(function(i, s, h) {
                            return i + (h ? " " : "") + s.toUpperCase()
                        }),
                        Ya = Il("toUpperCase");

                    function Du(i, s, h) {
                        return i = vt(i), s = h ? e : s, s === e ? yp(i) ? Mp(i) : fp(i) : i.match(s) || []
                    }
                    var Fu = ht(function(i, s) {
                            try {
                                return ce(i, e, s)
                            } catch (h) {
                                return Va(h) ? h : new it(h)
                            }
                        }),
                        Jm = si(function(i, s) {
                            return Ae(s, function(h) {
                                h = He(h), ri(i, h, qa(i[h], i))
                            }), i
                        });

                    function jm(i) {
                        var s = i == null ? 0 : i.length,
                            h = Q();
                        return i = s ? bt(i, function(c) {
                            if (typeof c[1] != "function") throw new Re(l);
                            return [h(c[0]), c[1]]
                        }) : [], ht(function(c) {
                            for (var g = -1; ++g < s;) {
                                var w = i[g];
                                if (ce(w[0], this, c)) return ce(w[1], this, c)
                            }
                        })
                    }

                    function tv(i) {
                        return bg(Ce(i, v))
                    }

                    function Ka(i) {
                        return function() {
                            return i
                        }
                    }

                    function ev(i, s) {
                        return i == null || i !== i ? s : i
                    }
                    var iv = Nl(),
                        rv = Nl(!0);

                    function ae(i) {
                        return i
                    }

                    function Za(i) {
                        return dl(typeof i == "function" ? i : Ce(i, v))
                    }

                    function nv(i) {
                        return gl(Ce(i, v))
                    }

                    function sv(i, s) {
                        return _l(i, Ce(s, v))
                    }
                    var av = ht(function(i, s) {
                            return function(h) {
                                return Qr(h, i, s)
                            }
                        }),
                        ov = ht(function(i, s) {
                            return function(h) {
                                return Qr(i, h, s)
                            }
                        });

                    function Qa(i, s, h) {
                        var c = kt(s),
                            g = Kn(s, c);
                        h == null && !(Rt(s) && (g.length || !c.length)) && (h = s, s = i, i = this, g = Kn(s, kt(s)));
                        var w = !(Rt(h) && "chain" in h) || !!h.chain,
                            S = oi(i);
                        return Ae(g, function(A) {
                            var O = s[A];
                            i[A] = O, S && (i.prototype[A] = function() {
                                var U = this.__chain__;
                                if (w || U) {
                                    var W = i(this.__wrapped__),
                                        k = W.__actions__ = re(this.__actions__);
                                    return k.push({
                                        func: O,
                                        args: arguments,
                                        thisArg: i
                                    }), W.__chain__ = U, W
                                }
                                return O.apply(i, _i([this.value()], arguments))
                            })
                        }), i
                    }

                    function hv() {
                        return Gt._ === this && (Gt._ = Fp), this
                    }

                    function Ja() {}

                    function lv(i) {
                        return i = at(i), ht(function(s) {
                            return ml(s, i)
                        })
                    }
                    var uv = Ca(bt),
                        fv = Ca(Bh),
                        cv = Ca(ta);

                    function Iu(i) {
                        return za(i) ? ea(He(i)) : qg(i)
                    }

                    function dv(i) {
                        return function(s) {
                            return i == null ? e : Gi(i, s)
                        }
                    }
                    var pv = Ul(),
                        gv = Ul(!0);

                    function ja() {
                        return []
                    }

                    function to() {
                        return !1
                    }

                    function _v() {
                        return {}
                    }

                    function mv() {
                        return ""
                    }

                    function vv() {
                        return !0
                    }

                    function xv(i, s) {
                        if (i = at(i), i < 1 || i > _t) return [];
                        var h = lt,
                            c = Ht(i, lt);
                        s = Q(s), i -= lt;
                        for (var g = na(c, s); ++h < i;) s(h);
                        return g
                    }

                    function yv(i) {
                        return rt(i) ? bt(i, He) : ge(i) ? [i] : re(eu(vt(i)))
                    }

                    function wv(i) {
                        var s = ++Lp;
                        return vt(i) + s
                    }
                    var Tv = es(function(i, s) {
                            return i + s
                        }, 0),
                        Ev = Pa("ceil"),
                        Sv = es(function(i, s) {
                            return i / s
                        }, 1),
                        bv = Pa("floor");

                    function Av(i) {
                        return i && i.length ? Yn(i, ae, ga) : e
                    }

                    function Rv(i, s) {
                        return i && i.length ? Yn(i, Q(s, 2), ga) : e
                    }

                    function Mv(i) {
                        return kh(i, ae)
                    }

                    function Cv(i, s) {
                        return kh(i, Q(s, 2))
                    }

                    function Pv(i) {
                        return i && i.length ? Yn(i, ae, xa) : e
                    }

                    function Ov(i, s) {
                        return i && i.length ? Yn(i, Q(s, 2), xa) : e
                    }
                    var Lv = es(function(i, s) {
                            return i * s
                        }, 1),
                        Dv = Pa("round"),
                        Fv = es(function(i, s) {
                            return i - s
                        }, 0);

                    function Iv(i) {
                        return i && i.length ? ra(i, ae) : 0
                    }

                    function zv(i, s) {
                        return i && i.length ? ra(i, Q(s, 2)) : 0
                    }
                    return y.after = n1, y.ary = cu, y.assign = X1, y.assignIn = Au, y.assignInWith = ps, y.assignWith = H1, y.at = $1, y.before = du, y.bind = qa, y.bindAll = Jm, y.bindKey = pu, y.castArray = _1, y.chain = lu, y.chunk = b0, y.compact = A0, y.concat = R0, y.cond = jm, y.conforms = tv, y.constant = Ka, y.countBy = I_, y.create = Y1, y.curry = gu, y.curryRight = _u, y.debounce = mu, y.defaults = K1, y.defaultsDeep = Z1, y.defer = s1, y.delay = a1, y.difference = M0, y.differenceBy = C0, y.differenceWith = P0, y.drop = O0, y.dropRight = L0, y.dropRightWhile = D0, y.dropWhile = F0, y.fill = I0, y.filter = N_, y.flatMap = W_, y.flatMapDeep = k_, y.flatMapDepth = q_, y.flatten = su, y.flattenDeep = z0, y.flattenDepth = N0, y.flip = o1, y.flow = iv, y.flowRight = rv, y.fromPairs = B0, y.functions = rm, y.functionsIn = nm, y.groupBy = G_, y.initial = W0, y.intersection = k0, y.intersectionBy = q0, y.intersectionWith = G0, y.invert = am, y.invertBy = om, y.invokeMap = X_, y.iteratee = Za, y.keyBy = H_, y.keys = kt, y.keysIn = se, y.map = hs, y.mapKeys = lm, y.mapValues = um, y.matches = nv, y.matchesProperty = sv, y.memoize = us, y.merge = fm, y.mergeWith = Ru, y.method = av, y.methodOf = ov, y.mixin = Qa, y.negate = fs, y.nthArg = lv, y.omit = cm, y.omitBy = dm, y.once = h1, y.orderBy = $_, y.over = uv, y.overArgs = l1, y.overEvery = fv, y.overSome = cv, y.partial = Ga, y.partialRight = vu, y.partition = Y_, y.pick = pm, y.pickBy = Mu, y.property = Iu, y.propertyOf = dv, y.pull = $0, y.pullAll = ou, y.pullAllBy = Y0, y.pullAllWith = K0, y.pullAt = Z0, y.range = pv, y.rangeRight = gv, y.rearg = u1, y.reject = Q_, y.remove = Q0, y.rest = f1, y.reverse = Wa, y.sampleSize = j_, y.set = _m, y.setWith = mm, y.shuffle = t1, y.slice = J0, y.sortBy = r1, y.sortedUniq = s_, y.sortedUniqBy = a_, y.split = Wm, y.spread = c1, y.tail = o_, y.take = h_, y.takeRight = l_, y.takeRightWhile = u_, y.takeWhile = f_, y.tap = A_, y.throttle = d1, y.thru = os, y.toArray = Eu, y.toPairs = Cu, y.toPairsIn = Pu, y.toPath = yv, y.toPlainObject = bu, y.transform = vm, y.unary = p1, y.union = c_, y.unionBy = d_, y.unionWith = p_, y.uniq = g_, y.uniqBy = __, y.uniqWith = m_, y.unset = xm, y.unzip = ka, y.unzipWith = hu, y.update = ym, y.updateWith = wm, y.values = mr, y.valuesIn = Tm, y.without = v_, y.words = Du, y.wrap = g1, y.xor = x_, y.xorBy = y_, y.xorWith = w_, y.zip = T_, y.zipObject = E_, y.zipObjectDeep = S_, y.zipWith = b_, y.entries = Cu, y.entriesIn = Pu, y.extend = Au, y.extendWith = ps, Qa(y, y), y.add = Tv, y.attempt = Fu, y.camelCase = Am, y.capitalize = Ou, y.ceil = Ev, y.clamp = Em, y.clone = m1, y.cloneDeep = x1, y.cloneDeepWith = y1, y.cloneWith = v1, y.conformsTo = w1, y.deburr = Lu, y.defaultTo = ev, y.divide = Sv, y.endsWith = Rm, y.eq = qe, y.escape = Mm, y.escapeRegExp = Cm, y.every = z_, y.find = B_, y.findIndex = ru, y.findKey = Q1, y.findLast = U_, y.findLastIndex = nu, y.findLastKey = J1, y.floor = bv, y.forEach = uu, y.forEachRight = fu, y.forIn = j1, y.forInRight = tm, y.forOwn = em, y.forOwnRight = im, y.get = Ha, y.gt = T1, y.gte = E1, y.has = sm, y.hasIn = $a, y.head = au, y.identity = ae, y.includes = V_, y.indexOf = U0, y.inRange = Sm, y.invoke = hm, y.isArguments = Hi, y.isArray = rt, y.isArrayBuffer = S1, y.isArrayLike = ne, y.isArrayLikeObject = Lt, y.isBoolean = b1, y.isBuffer = Ei, y.isDate = A1, y.isElement = R1, y.isEmpty = M1, y.isEqual = C1, y.isEqualWith = P1, y.isError = Va, y.isFinite = O1, y.isFunction = oi, y.isInteger = xu, y.isLength = cs, y.isMap = yu, y.isMatch = L1, y.isMatchWith = D1, y.isNaN = F1, y.isNative = I1, y.isNil = N1, y.isNull = z1, y.isNumber = wu, y.isObject = Rt, y.isObjectLike = Pt, y.isPlainObject = nn, y.isRegExp = Xa, y.isSafeInteger = B1, y.isSet = Tu, y.isString = ds, y.isSymbol = ge, y.isTypedArray = _r, y.isUndefined = U1, y.isWeakMap = W1, y.isWeakSet = k1, y.join = V0, y.kebabCase = Pm, y.last = Oe, y.lastIndexOf = X0, y.lowerCase = Om, y.lowerFirst = Lm, y.lt = q1, y.lte = G1, y.max = Av, y.maxBy = Rv, y.mean = Mv, y.meanBy = Cv, y.min = Pv, y.minBy = Ov, y.stubArray = ja, y.stubFalse = to, y.stubObject = _v, y.stubString = mv, y.stubTrue = vv, y.multiply = Lv, y.nth = H0, y.noConflict = hv, y.noop = Ja, y.now = ls, y.pad = Dm, y.padEnd = Fm, y.padStart = Im, y.parseInt = zm, y.random = bm, y.reduce = K_, y.reduceRight = Z_, y.repeat = Nm, y.replace = Bm, y.result = gm, y.round = Dv, y.runInContext = P, y.sample = J_, y.size = e1, y.snakeCase = Um, y.some = i1, y.sortedIndex = j0, y.sortedIndexBy = t_, y.sortedIndexOf = e_, y.sortedLastIndex = i_, y.sortedLastIndexBy = r_, y.sortedLastIndexOf = n_, y.startCase = km, y.startsWith = qm, y.subtract = Fv, y.sum = Iv, y.sumBy = zv, y.template = Gm, y.times = xv, y.toFinite = hi, y.toInteger = at, y.toLength = Su, y.toLower = Vm, y.toNumber = Le, y.toSafeInteger = V1, y.toString = vt, y.toUpper = Xm, y.trim = Hm, y.trimEnd = $m, y.trimStart = Ym, y.truncate = Km, y.unescape = Zm, y.uniqueId = wv, y.upperCase = Qm, y.upperFirst = Ya, y.each = uu, y.eachRight = fu, y.first = au, Qa(y, function() {
                        var i = {};
                        return Ve(y, function(s, h) {
                            xt.call(y.prototype, h) || (i[h] = s)
                        }), i
                    }(), {
                        chain: !1
                    }), y.VERSION = r, Ae(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(i) {
                        y[i].placeholder = y
                    }), Ae(["drop", "take"], function(i, s) {
                        ct.prototype[i] = function(h) {
                            h = h === e ? 1 : Wt(at(h), 0);
                            var c = this.__filtered__ && !s ? new ct(this) : this.clone();
                            return c.__filtered__ ? c.__takeCount__ = Ht(h, c.__takeCount__) : c.__views__.push({
                                size: Ht(h, lt),
                                type: i + (c.__dir__ < 0 ? "Right" : "")
                            }), c
                        }, ct.prototype[i + "Right"] = function(h) {
                            return this.reverse()[i](h).reverse()
                        }
                    }), Ae(["filter", "map", "takeWhile"], function(i, s) {
                        var h = s + 1,
                            c = h == X || h == nt;
                        ct.prototype[i] = function(g) {
                            var w = this.clone();
                            return w.__iteratees__.push({
                                iteratee: Q(g, 3),
                                type: h
                            }), w.__filtered__ = w.__filtered__ || c, w
                        }
                    }), Ae(["head", "last"], function(i, s) {
                        var h = "take" + (s ? "Right" : "");
                        ct.prototype[i] = function() {
                            return this[h](1).value()[0]
                        }
                    }), Ae(["initial", "tail"], function(i, s) {
                        var h = "drop" + (s ? "" : "Right");
                        ct.prototype[i] = function() {
                            return this.__filtered__ ? new ct(this) : this[h](1)
                        }
                    }), ct.prototype.compact = function() {
                        return this.filter(ae)
                    }, ct.prototype.find = function(i) {
                        return this.filter(i).head()
                    }, ct.prototype.findLast = function(i) {
                        return this.reverse().find(i)
                    }, ct.prototype.invokeMap = ht(function(i, s) {
                        return typeof i == "function" ? new ct(this) : this.map(function(h) {
                            return Qr(h, i, s)
                        })
                    }), ct.prototype.reject = function(i) {
                        return this.filter(fs(Q(i)))
                    }, ct.prototype.slice = function(i, s) {
                        i = at(i);
                        var h = this;
                        return h.__filtered__ && (i > 0 || s < 0) ? new ct(h) : (i < 0 ? h = h.takeRight(-i) : i && (h = h.drop(i)), s !== e && (s = at(s), h = s < 0 ? h.dropRight(-s) : h.take(s - i)), h)
                    }, ct.prototype.takeRightWhile = function(i) {
                        return this.reverse().takeWhile(i).reverse()
                    }, ct.prototype.toArray = function() {
                        return this.take(lt)
                    }, Ve(ct.prototype, function(i, s) {
                        var h = /^(?:filter|find|map|reject)|While$/.test(s),
                            c = /^(?:head|last)$/.test(s),
                            g = y[c ? "take" + (s == "last" ? "Right" : "") : s],
                            w = c || /^find/.test(s);
                        g && (y.prototype[s] = function() {
                            var S = this.__wrapped__,
                                A = c ? [1] : arguments,
                                O = S instanceof ct,
                                U = A[0],
                                W = O || rt(S),
                                k = function(ft) {
                                    var dt = g.apply(y, _i([ft], A));
                                    return c && H ? dt[0] : dt
                                };
                            W && h && typeof U == "function" && U.length != 1 && (O = W = !1);
                            var H = this.__chain__,
                                K = !!this.__actions__.length,
                                J = w && !H,
                                ot = O && !K;
                            if (!w && W) {
                                S = ot ? S : new ct(this);
                                var j = i.apply(S, A);
                                return j.__actions__.push({
                                    func: os,
                                    args: [k],
                                    thisArg: e
                                }), new Me(j, H)
                            }
                            return J && ot ? i.apply(this, A) : (j = this.thru(k), J ? c ? j.value()[0] : j.value() : j)
                        })
                    }), Ae(["pop", "push", "shift", "sort", "splice", "unshift"], function(i) {
                        var s = Dn[i],
                            h = /^(?:push|sort|unshift)$/.test(i) ? "tap" : "thru",
                            c = /^(?:pop|shift)$/.test(i);
                        y.prototype[i] = function() {
                            var g = arguments;
                            if (c && !this.__chain__) {
                                var w = this.value();
                                return s.apply(rt(w) ? w : [], g)
                            }
                            return this[h](function(S) {
                                return s.apply(rt(S) ? S : [], g)
                            })
                        }
                    }), Ve(ct.prototype, function(i, s) {
                        var h = y[s];
                        if (h) {
                            var c = h.name + "";
                            xt.call(fr, c) || (fr[c] = []), fr[c].push({
                                name: s,
                                func: h
                            })
                        }
                    }), fr[ts(e, b).name] = [{
                        name: "wrapper",
                        func: e
                    }], ct.prototype.clone = Zp, ct.prototype.reverse = Qp, ct.prototype.value = Jp, y.prototype.at = R_, y.prototype.chain = M_, y.prototype.commit = C_, y.prototype.next = P_, y.prototype.plant = L_, y.prototype.reverse = D_, y.prototype.toJSON = y.prototype.valueOf = y.prototype.value = F_, y.prototype.first = y.prototype.head, Vr && (y.prototype[Vr] = O_), y
                },
                hr = Cp();
            Bi ? ((Bi.exports = hr)._ = hr, Zs._ = hr) : Gt._ = hr
        }).call($y)
    }(on, on.exports)), on.exports
}
var Ky = Yy();
const Zy = n => {
    const t = new Set;
    do
        for (const e of Reflect.ownKeys(n)) t.add([n, e]); while ((n = Reflect.getPrototypeOf(n)) && n !== Object.prototype);
    return t
};

function Qy(n, {
    include: t,
    exclude: e
} = {}) {
    const r = a => {
        const o = l => typeof l == "string" ? a === l : l.test(a);
        return t ? t.some(o) : e ? !e.some(o) : !0
    };
    for (const [a, o] of Zy(n.constructor.prototype)) {
        if (o === "constructor" || !r(o)) continue;
        const l = Reflect.getOwnPropertyDescriptor(a, o);
        l && typeof l.value == "function" && (n[o] = n[o].bind(n))
    }
    return n
}

function ui(n) {
    if (n === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return n
}

function Hf(n, t) {
    n.prototype = Object.create(t.prototype), n.prototype.constructor = n, n.__proto__ = t
}
/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */
var we = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
            lineHeight: ""
        }
    },
    Cr = {
        duration: .5,
        overwrite: !1,
        delay: 0
    },
    qo, Xt, At, Je = 1e8,
    Kt = 1 / Je,
    yo = Math.PI * 2,
    Jy = yo / 4,
    jy = 0,
    $f = Math.sqrt,
    tw = Math.cos,
    ew = Math.sin,
    qt = function(t) {
        return typeof t == "string"
    },
    Ot = function(t) {
        return typeof t == "function"
    },
    di = function(t) {
        return typeof t == "number"
    },
    Go = function(t) {
        return typeof t > "u"
    },
    je = function(t) {
        return typeof t == "object"
    },
    oe = function(t) {
        return t !== !1
    },
    Vo = function() {
        return typeof window < "u"
    },
    _s = function(t) {
        return Ot(t) || qt(t)
    },
    Yf = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {},
    Zt = Array.isArray,
    wo = /(?:-?\.?\d|\.)+/gi,
    Kf = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    Tr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    ao = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    Zf = /[+-]=-?[.\d]+/,
    Qf = /[^,'"\[\]\s]+/gi,
    iw = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    Mt, Ye, To, Xo, Te = {},
    Es = {},
    Jf, jf = function(t) {
        return (Es = Pr(t, Te)) && fe
    },
    Ho = function(t, e) {
        return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
    },
    gn = function(t, e) {
        return !e && console.warn(t)
    },
    tc = function(t, e) {
        return t && (Te[t] = e) && Es && (Es[t] = e) || Te
    },
    _n = function() {
        return 0
    },
    rw = {
        suppressEvents: !0,
        isStart: !0,
        kill: !1
    },
    vs = {
        suppressEvents: !0,
        kill: !1
    },
    nw = {
        suppressEvents: !0
    },
    $o = {},
    Di = [],
    Eo = {},
    ec, ve = {},
    oo = {},
    uf = 30,
    xs = [],
    Yo = "",
    Ko = function(t) {
        var e = t[0],
            r, a;
        if (je(e) || Ot(e) || (t = [t]), !(r = (e._gsap || {}).harness)) {
            for (a = xs.length; a-- && !xs[a].targetTest(e););
            r = xs[a]
        }
        for (a = t.length; a--;) t[a] && (t[a]._gsap || (t[a]._gsap = new bc(t[a], r))) || t.splice(a, 1);
        return t
    },
    Qi = function(t) {
        return t._gsap || Ko(ze(t))[0]._gsap
    },
    ic = function(t, e, r) {
        return (r = t[e]) && Ot(r) ? t[e]() : Go(r) && t.getAttribute && t.getAttribute(e) || r
    },
    he = function(t, e) {
        return (t = t.split(",")).forEach(e) || t
    },
    Ft = function(t) {
        return Math.round(t * 1e5) / 1e5 || 0
    },
    Bt = function(t) {
        return Math.round(t * 1e7) / 1e7 || 0
    },
    br = function(t, e) {
        var r = e.charAt(0),
            a = parseFloat(e.substr(2));
        return t = parseFloat(t), r === "+" ? t + a : r === "-" ? t - a : r === "*" ? t * a : t / a
    },
    sw = function(t, e) {
        for (var r = e.length, a = 0; t.indexOf(e[a]) < 0 && ++a < r;);
        return a < r
    },
    Ss = function() {
        var t = Di.length,
            e = Di.slice(0),
            r, a;
        for (Eo = {}, Di.length = 0, r = 0; r < t; r++) a = e[r], a && a._lazy && (a.render(a._lazy[0], a._lazy[1], !0)._lazy = 0)
    },
    Zo = function(t) {
        return !!(t._initted || t._startAt || t.add)
    },
    rc = function(t, e, r, a) {
        Di.length && !Xt && Ss(), t.render(e, r, !!(Xt && e < 0 && Zo(t))), Di.length && !Xt && Ss()
    },
    nc = function(t) {
        var e = parseFloat(t);
        return (e || e === 0) && (t + "").match(Qf).length < 2 ? e : qt(t) ? t.trim() : t
    },
    sc = function(t) {
        return t
    },
    Ee = function(t, e) {
        for (var r in e) r in t || (t[r] = e[r]);
        return t
    },
    aw = function(t) {
        return function(e, r) {
            for (var a in r) a in e || a === "duration" && t || a === "ease" || (e[a] = r[a])
        }
    },
    Pr = function(t, e) {
        for (var r in e) t[r] = e[r];
        return t
    },
    ff = function n(t, e) {
        for (var r in e) r !== "__proto__" && r !== "constructor" && r !== "prototype" && (t[r] = je(e[r]) ? n(t[r] || (t[r] = {}), e[r]) : e[r]);
        return t
    },
    bs = function(t, e) {
        var r = {},
            a;
        for (a in t) a in e || (r[a] = t[a]);
        return r
    },
    fn = function(t) {
        var e = t.parent || Mt,
            r = t.keyframes ? aw(Zt(t.keyframes)) : Ee;
        if (oe(t.inherit))
            for (; e;) r(t, e.vars.defaults), e = e.parent || e._dp;
        return t
    },
    ow = function(t, e) {
        for (var r = t.length, a = r === e.length; a && r-- && t[r] === e[r];);
        return r < 0
    },
    ac = function(t, e, r, a, o) {
        var l = t[a],
            u;
        if (o)
            for (u = e[o]; l && l[o] > u;) l = l._prev;
        return l ? (e._next = l._next, l._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[a] = e, e._prev = l, e.parent = e._dp = t, e
    },
    Os = function(t, e, r, a) {
        r === void 0 && (r = "_first"), a === void 0 && (a = "_last");
        var o = e._prev,
            l = e._next;
        o ? o._next = l : t[r] === e && (t[r] = l), l ? l._prev = o : t[a] === e && (t[a] = o), e._next = e._prev = e.parent = null
    },
    Ii = function(t, e) {
        t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0
    },
    Ji = function(t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0))
            for (var r = t; r;) r._dirty = 1, r = r.parent;
        return t
    },
    hw = function(t) {
        for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
        return t
    },
    So = function(t, e, r, a) {
        return t._startAt && (Xt ? t._startAt.revert(vs) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, a))
    },
    lw = function n(t) {
        return !t || t._ts && n(t.parent)
    },
    cf = function(t) {
        return t._repeat ? Or(t._tTime, t = t.duration() + t._rDelay) * t : 0
    },
    Or = function(t, e) {
        var r = Math.floor(t = Bt(t / e));
        return t && r === t ? r - 1 : r
    },
    As = function(t, e) {
        return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    },
    Ls = function(t) {
        return t._end = Bt(t._start + (t._tDur / Math.abs(t._ts || t._rts || Kt) || 0))
    },
    Ds = function(t, e) {
        var r = t._dp;
        return r && r.smoothChildTiming && t._ts && (t._start = Bt(r._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Ls(t), r._dirty || Ji(r, t)), t
    },
    oc = function(t, e) {
        var r;
        if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (r = As(t.rawTime(), e), (!e._dur || Tn(0, e.totalDuration(), r) - e._tTime > Kt) && e.render(r, !0)), Ji(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
                for (r = t; r._dp;) r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
            t._zTime = -1e-8
        }
    },
    Ze = function(t, e, r, a) {
        return e.parent && Ii(e), e._start = Bt((di(r) ? r : r || t !== Mt ? De(t, r, e) : t._time) + e._delay), e._end = Bt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), ac(t, e, "_first", "_last", t._sort ? "_start" : 0), bo(e) || (t._recent = e), a || oc(t, e), t._ts < 0 && Ds(t, t._tTime), t
    },
    hc = function(t, e) {
        return (Te.ScrollTrigger || Ho("scrollTrigger", e)) && Te.ScrollTrigger.create(e, t)
    },
    lc = function(t, e, r, a, o) {
        if (Jo(t, e, o), !t._initted) return 1;
        if (!r && t._pt && !Xt && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && ec !== xe.frame) return Di.push(t), t._lazy = [o, a], 1
    },
    uw = function n(t) {
        var e = t.parent;
        return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || n(e))
    },
    bo = function(t) {
        var e = t.data;
        return e === "isFromStart" || e === "isStart"
    },
    fw = function(t, e, r, a) {
        var o = t.ratio,
            l = e < 0 || !e && (!t._start && uw(t) && !(!t._initted && bo(t)) || (t._ts < 0 || t._dp._ts < 0) && !bo(t)) ? 0 : 1,
            u = t._rDelay,
            f = 0,
            d, p, v;
        if (u && t._repeat && (f = Tn(0, t._tDur, e), p = Or(f, u), t._yoyo && p & 1 && (l = 1 - l), p !== Or(t._tTime, u) && (o = 1 - l, t.vars.repeatRefresh && t._initted && t.invalidate())), l !== o || Xt || a || t._zTime === Kt || !e && t._zTime) {
            if (!t._initted && lc(t, e, a, r, f)) return;
            for (v = t._zTime, t._zTime = e || (r ? Kt : 0), r || (r = e && !v), t.ratio = l, t._from && (l = 1 - l), t._time = 0, t._tTime = f, d = t._pt; d;) d.r(l, d.d), d = d._next;
            e < 0 && So(t, e, r, !0), t._onUpdate && !r && ye(t, "onUpdate"), f && t._repeat && !r && t.parent && ye(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === l && (l && Ii(t, 1), !r && !Xt && (ye(t, l ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
        } else t._zTime || (t._zTime = e)
    },
    cw = function(t, e, r) {
        var a;
        if (r > e)
            for (a = t._first; a && a._start <= r;) {
                if (a.data === "isPause" && a._start > e) return a;
                a = a._next
            } else
                for (a = t._last; a && a._start >= r;) {
                    if (a.data === "isPause" && a._start < e) return a;
                    a = a._prev
                }
    },
    Lr = function(t, e, r, a) {
        var o = t._repeat,
            l = Bt(e) || 0,
            u = t._tTime / t._tDur;
        return u && !a && (t._time *= l / t._dur), t._dur = l, t._tDur = o ? o < 0 ? 1e10 : Bt(l * (o + 1) + t._rDelay * o) : l, u > 0 && !a && Ds(t, t._tTime = t._tDur * u), t.parent && Ls(t), r || Ji(t.parent, t), t
    },
    df = function(t) {
        return t instanceof te ? Ji(t) : Lr(t, t._dur)
    },
    dw = {
        _start: 0,
        endTime: _n,
        totalDuration: _n
    },
    De = function n(t, e, r) {
        var a = t.labels,
            o = t._recent || dw,
            l = t.duration() >= Je ? o.endTime(!1) : t._dur,
            u, f, d;
        return qt(e) && (isNaN(e) || e in a) ? (f = e.charAt(0), d = e.substr(-1) === "%", u = e.indexOf("="), f === "<" || f === ">" ? (u >= 0 && (e = e.replace(/=/, "")), (f === "<" ? o._start : o.endTime(o._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (d ? (u < 0 ? o : r).totalDuration() / 100 : 1)) : u < 0 ? (e in a || (a[e] = l), a[e]) : (f = parseFloat(e.charAt(u - 1) + e.substr(u + 1)), d && r && (f = f / 100 * (Zt(r) ? r[0] : r).totalDuration()), u > 1 ? n(t, e.substr(0, u - 1), r) + f : l + f)) : e == null ? l : +e
    },
    cn = function(t, e, r) {
        var a = di(e[1]),
            o = (a ? 2 : 1) + (t < 2 ? 0 : 1),
            l = e[o],
            u, f;
        if (a && (l.duration = e[1]), l.parent = r, t) {
            for (u = l, f = r; f && !("immediateRender" in u);) u = f.vars.defaults || {}, f = oe(f.vars.inherit) && f.parent;
            l.immediateRender = oe(u.immediateRender), t < 2 ? l.runBackwards = 1 : l.startAt = e[o - 1]
        }
        return new zt(e[0], l, e[o + 1])
    },
    Ni = function(t, e) {
        return t || t === 0 ? e(t) : e
    },
    Tn = function(t, e, r) {
        return r < t ? t : r > e ? e : r
    },
    Yt = function(t, e) {
        return !qt(t) || !(e = iw.exec(t)) ? "" : e[1]
    },
    pw = function(t, e, r) {
        return Ni(r, function(a) {
            return Tn(t, e, a)
        })
    },
    Ao = [].slice,
    uc = function(t, e) {
        return t && je(t) && "length" in t && (!e && !t.length || t.length - 1 in t && je(t[0])) && !t.nodeType && t !== Ye
    },
    gw = function(t, e, r) {
        return r === void 0 && (r = []), t.forEach(function(a) {
            var o;
            return qt(a) && !e || uc(a, 1) ? (o = r).push.apply(o, ze(a)) : r.push(a)
        }) || r
    },
    ze = function(t, e, r) {
        return At && !e && At.selector ? At.selector(t) : qt(t) && !r && (To || !Dr()) ? Ao.call((e || Xo).querySelectorAll(t), 0) : Zt(t) ? gw(t, r) : uc(t) ? Ao.call(t, 0) : t ? [t] : []
    },
    Ro = function(t) {
        return t = ze(t)[0] || gn("Invalid scope") || {},
            function(e) {
                var r = t.current || t.nativeElement || t;
                return ze(e, r.querySelectorAll ? r : r === t ? gn("Invalid scope") || Xo.createElement("div") : t)
            }
    },
    fc = function(t) {
        return t.sort(function() {
            return .5 - Math.random()
        })
    },
    cc = function(t) {
        if (Ot(t)) return t;
        var e = je(t) ? t : {
                each: t
            },
            r = ji(e.ease),
            a = e.from || 0,
            o = parseFloat(e.base) || 0,
            l = {},
            u = a > 0 && a < 1,
            f = isNaN(a) || u,
            d = e.axis,
            p = a,
            v = a;
        return qt(a) ? p = v = {
                center: .5,
                edges: .5,
                end: 1
            }[a] || 0 : !u && f && (p = a[0], v = a[1]),
            function(m, x, T) {
                var _ = (T || e).length,
                    E = l[_],
                    b, L, M, C, R, D, N, z, F;
                if (!E) {
                    if (F = e.grid === "auto" ? 0 : (e.grid || [1, Je])[1], !F) {
                        for (N = -1e8; N < (N = T[F++].getBoundingClientRect().left) && F < _;);
                        F < _ && F--
                    }
                    for (E = l[_] = [], b = f ? Math.min(F, _) * p - .5 : a % F, L = F === Je ? 0 : f ? _ * v / F - .5 : a / F | 0, N = 0, z = Je, D = 0; D < _; D++) M = D % F - b, C = L - (D / F | 0), E[D] = R = d ? Math.abs(d === "y" ? C : M) : $f(M * M + C * C), R > N && (N = R), R < z && (z = R);
                    a === "random" && fc(E), E.max = N - z, E.min = z, E.v = _ = (parseFloat(e.amount) || parseFloat(e.each) * (F > _ ? _ - 1 : d ? d === "y" ? _ / F : F : Math.max(F, _ / F)) || 0) * (a === "edges" ? -1 : 1), E.b = _ < 0 ? o - _ : o, E.u = Yt(e.amount || e.each) || 0, r = r && _ < 0 ? Tc(r) : r
                }
                return _ = (E[m] - E.min) / E.max || 0, Bt(E.b + (r ? r(_) : _) * E.v) + E.u
            }
    },
    Mo = function(t) {
        var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
        return function(r) {
            var a = Bt(Math.round(parseFloat(r) / t) * t * e);
            return (a - a % 1) / e + (di(r) ? 0 : Yt(r))
        }
    },
    dc = function(t, e) {
        var r = Zt(t),
            a, o;
        return !r && je(t) && (a = r = t.radius || Je, t.values ? (t = ze(t.values), (o = !di(t[0])) && (a *= a)) : t = Mo(t.increment)), Ni(e, r ? Ot(t) ? function(l) {
            return o = t(l), Math.abs(o - l) <= a ? o : l
        } : function(l) {
            for (var u = parseFloat(o ? l.x : l), f = parseFloat(o ? l.y : 0), d = Je, p = 0, v = t.length, m, x; v--;) o ? (m = t[v].x - u, x = t[v].y - f, m = m * m + x * x) : m = Math.abs(t[v] - u), m < d && (d = m, p = v);
            return p = !a || d <= a ? t[p] : l, o || p === l || di(l) ? p : p + Yt(l)
        } : Mo(t))
    },
    pc = function(t, e, r, a) {
        return Ni(Zt(t) ? !e : r === !0 ? !!(r = 0) : !a, function() {
            return Zt(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (a = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + r * .99)) / r) * r * a) / a
        })
    },
    _w = function() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
        return function(a) {
            return e.reduce(function(o, l) {
                return l(o)
            }, a)
        }
    },
    mw = function(t, e) {
        return function(r) {
            return t(parseFloat(r)) + (e || Yt(r))
        }
    },
    vw = function(t, e, r) {
        return _c(t, e, 0, 1, r)
    },
    gc = function(t, e, r) {
        return Ni(r, function(a) {
            return t[~~e(a)]
        })
    },
    xw = function n(t, e, r) {
        var a = e - t;
        return Zt(t) ? gc(t, n(0, t.length), e) : Ni(r, function(o) {
            return (a + (o - t) % a) % a + t
        })
    },
    yw = function n(t, e, r) {
        var a = e - t,
            o = a * 2;
        return Zt(t) ? gc(t, n(0, t.length - 1), e) : Ni(r, function(l) {
            return l = (o + (l - t) % o) % o || 0, t + (l > a ? o - l : l)
        })
    },
    mn = function(t) {
        for (var e = 0, r = "", a, o, l, u; ~(a = t.indexOf("random(", e));) l = t.indexOf(")", a), u = t.charAt(a + 7) === "[", o = t.substr(a + 7, l - a - 7).match(u ? Qf : wo), r += t.substr(e, a - e) + pc(u ? o : +o[0], u ? 0 : +o[1], +o[2] || 1e-5), e = l + 1;
        return r + t.substr(e, t.length - e)
    },
    _c = function(t, e, r, a, o) {
        var l = e - t,
            u = a - r;
        return Ni(o, function(f) {
            return r + ((f - t) / l * u || 0)
        })
    },
    ww = function n(t, e, r, a) {
        var o = isNaN(t + e) ? 0 : function(x) {
            return (1 - x) * t + x * e
        };
        if (!o) {
            var l = qt(t),
                u = {},
                f, d, p, v, m;
            if (r === !0 && (a = 1) && (r = null), l) t = {
                p: t
            }, e = {
                p: e
            };
            else if (Zt(t) && !Zt(e)) {
                for (p = [], v = t.length, m = v - 2, d = 1; d < v; d++) p.push(n(t[d - 1], t[d]));
                v--, o = function(T) {
                    T *= v;
                    var _ = Math.min(m, ~~T);
                    return p[_](T - _)
                }, r = e
            } else a || (t = Pr(Zt(t) ? [] : {}, t));
            if (!p) {
                for (f in e) Qo.call(u, t, f, "get", e[f]);
                o = function(T) {
                    return eh(T, u) || (l ? t.p : t)
                }
            }
        }
        return Ni(r, o)
    },
    pf = function(t, e, r) {
        var a = t.labels,
            o = Je,
            l, u, f;
        for (l in a) u = a[l] - e, u < 0 == !!r && u && o > (u = Math.abs(u)) && (f = l, o = u);
        return f
    },
    ye = function(t, e, r) {
        var a = t.vars,
            o = a[e],
            l = At,
            u = t._ctx,
            f, d, p;
        if (o) return f = a[e + "Params"], d = a.callbackScope || t, r && Di.length && Ss(), u && (At = u), p = f ? o.apply(d, f) : o.call(d), At = l, p
    },
    hn = function(t) {
        return Ii(t), t.scrollTrigger && t.scrollTrigger.kill(!!Xt), t.progress() < 1 && ye(t, "onInterrupt"), t
    },
    Er, mc = [],
    vc = function(t) {
        if (t)
            if (t = !t.name && t.default || t, Vo() || t.headless) {
                var e = t.name,
                    r = Ot(t),
                    a = e && !r && t.init ? function() {
                        this._props = []
                    } : t,
                    o = {
                        init: _n,
                        render: eh,
                        add: Qo,
                        kill: Nw,
                        modifier: zw,
                        rawVars: 0
                    },
                    l = {
                        targetTest: 0,
                        get: 0,
                        getSetter: th,
                        aliases: {},
                        register: 0
                    };
                if (Dr(), t !== a) {
                    if (ve[e]) return;
                    Ee(a, Ee(bs(t, o), l)), Pr(a.prototype, Pr(o, bs(t, l))), ve[a.prop = e] = a, t.targetTest && (xs.push(a), $o[e] = 1), e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                }
                tc(e, a), t.register && t.register(fe, a, le)
            } else mc.push(t)
    },
    Tt = 255,
    ln = {
        aqua: [0, Tt, Tt],
        lime: [0, Tt, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, Tt],
        navy: [0, 0, 128],
        white: [Tt, Tt, Tt],
        olive: [128, 128, 0],
        yellow: [Tt, Tt, 0],
        orange: [Tt, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [Tt, 0, 0],
        pink: [Tt, 192, 203],
        cyan: [0, Tt, Tt],
        transparent: [Tt, Tt, Tt, 0]
    },
    ho = function(t, e, r) {
        return t += t < 0 ? 1 : t > 1 ? -1 : 0, (t * 6 < 1 ? e + (r - e) * t * 6 : t < .5 ? r : t * 3 < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * Tt + .5 | 0
    },
    xc = function(t, e, r) {
        var a = t ? di(t) ? [t >> 16, t >> 8 & Tt, t & Tt] : 0 : ln.black,
            o, l, u, f, d, p, v, m, x, T;
        if (!a) {
            if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), ln[t]) a = ln[t];
            else if (t.charAt(0) === "#") {
                if (t.length < 6 && (o = t.charAt(1), l = t.charAt(2), u = t.charAt(3), t = "#" + o + o + l + l + u + u + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9) return a = parseInt(t.substr(1, 6), 16), [a >> 16, a >> 8 & Tt, a & Tt, parseInt(t.substr(7), 16) / 255];
                t = parseInt(t.substr(1), 16), a = [t >> 16, t >> 8 & Tt, t & Tt]
            } else if (t.substr(0, 3) === "hsl") {
                if (a = T = t.match(wo), !e) f = +a[0] % 360 / 360, d = +a[1] / 100, p = +a[2] / 100, l = p <= .5 ? p * (d + 1) : p + d - p * d, o = p * 2 - l, a.length > 3 && (a[3] *= 1), a[0] = ho(f + 1 / 3, o, l), a[1] = ho(f, o, l), a[2] = ho(f - 1 / 3, o, l);
                else if (~t.indexOf("=")) return a = t.match(Kf), r && a.length < 4 && (a[3] = 1), a
            } else a = t.match(wo) || ln.transparent;
            a = a.map(Number)
        }
        return e && !T && (o = a[0] / Tt, l = a[1] / Tt, u = a[2] / Tt, v = Math.max(o, l, u), m = Math.min(o, l, u), p = (v + m) / 2, v === m ? f = d = 0 : (x = v - m, d = p > .5 ? x / (2 - v - m) : x / (v + m), f = v === o ? (l - u) / x + (l < u ? 6 : 0) : v === l ? (u - o) / x + 2 : (o - l) / x + 4, f *= 60), a[0] = ~~(f + .5), a[1] = ~~(d * 100 + .5), a[2] = ~~(p * 100 + .5)), r && a.length < 4 && (a[3] = 1), a
    },
    yc = function(t) {
        var e = [],
            r = [],
            a = -1;
        return t.split(Fi).forEach(function(o) {
            var l = o.match(Tr) || [];
            e.push.apply(e, l), r.push(a += l.length + 1)
        }), e.c = r, e
    },
    gf = function(t, e, r) {
        var a = "",
            o = (t + a).match(Fi),
            l = e ? "hsla(" : "rgba(",
            u = 0,
            f, d, p, v;
        if (!o) return t;
        if (o = o.map(function(m) {
                return (m = xc(m, e, 1)) && l + (e ? m[0] + "," + m[1] + "%," + m[2] + "%," + m[3] : m.join(",")) + ")"
            }), r && (p = yc(t), f = r.c, f.join(a) !== p.c.join(a)))
            for (d = t.replace(Fi, "1").split(Tr), v = d.length - 1; u < v; u++) a += d[u] + (~f.indexOf(u) ? o.shift() || l + "0,0,0,0)" : (p.length ? p : o.length ? o : r).shift());
        if (!d)
            for (d = t.split(Fi), v = d.length - 1; u < v; u++) a += d[u] + o[u];
        return a + d[v]
    },
    Fi = function() {
        var n = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
            t;
        for (t in ln) n += "|" + t + "\\b";
        return new RegExp(n + ")", "gi")
    }(),
    Tw = /hsl[a]?\(/,
    wc = function(t) {
        var e = t.join(" "),
            r;
        if (Fi.lastIndex = 0, Fi.test(e)) return r = Tw.test(e), t[1] = gf(t[1], r), t[0] = gf(t[0], r, yc(t[1])), !0
    },
    vn, xe = function() {
        var n = Date.now,
            t = 500,
            e = 33,
            r = n(),
            a = r,
            o = 1e3 / 240,
            l = o,
            u = [],
            f, d, p, v, m, x, T = function _(E) {
                var b = n() - a,
                    L = E === !0,
                    M, C, R, D;
                if ((b > t || b < 0) && (r += b - e), a += b, R = a - r, M = R - l, (M > 0 || L) && (D = ++v.frame, m = R - v.time * 1e3, v.time = R = R / 1e3, l += M + (M >= o ? 4 : o - M), C = 1), L || (f = d(_)), C)
                    for (x = 0; x < u.length; x++) u[x](R, m, D, E)
            };
        return v = {
            time: 0,
            frame: 0,
            tick: function() {
                T(!0)
            },
            deltaRatio: function(E) {
                return m / (1e3 / (E || 60))
            },
            wake: function() {
                Jf && (!To && Vo() && (Ye = To = window, Xo = Ye.document || {}, Te.gsap = fe, (Ye.gsapVersions || (Ye.gsapVersions = [])).push(fe.version), jf(Es || Ye.GreenSockGlobals || !Ye.gsap && Ye || {}), mc.forEach(vc)), p = typeof requestAnimationFrame < "u" && requestAnimationFrame, f && v.sleep(), d = p || function(E) {
                    return setTimeout(E, l - v.time * 1e3 + 1 | 0)
                }, vn = 1, T(2))
            },
            sleep: function() {
                (p ? cancelAnimationFrame : clearTimeout)(f), vn = 0, d = _n
            },
            lagSmoothing: function(E, b) {
                t = E || 1 / 0, e = Math.min(b || 33, t)
            },
            fps: function(E) {
                o = 1e3 / (E || 240), l = v.time * 1e3 + o
            },
            add: function(E, b, L) {
                var M = b ? function(C, R, D, N) {
                    E(C, R, D, N), v.remove(M)
                } : E;
                return v.remove(E), u[L ? "unshift" : "push"](M), Dr(), M
            },
            remove: function(E, b) {
                ~(b = u.indexOf(E)) && u.splice(b, 1) && x >= b && x--
            },
            _listeners: u
        }, v
    }(),
    Dr = function() {
        return !vn && xe.wake()
    },
    pt = {},
    Ew = /^[\d.\-M][\d.\-,\s]/,
    Sw = /["']/g,
    bw = function(t) {
        for (var e = {}, r = t.substr(1, t.length - 3).split(":"), a = r[0], o = 1, l = r.length, u, f, d; o < l; o++) f = r[o], u = o !== l - 1 ? f.lastIndexOf(",") : f.length, d = f.substr(0, u), e[a] = isNaN(d) ? d.replace(Sw, "").trim() : +d, a = f.substr(u + 1).trim();
        return e
    },
    Aw = function(t) {
        var e = t.indexOf("(") + 1,
            r = t.indexOf(")"),
            a = t.indexOf("(", e);
        return t.substring(e, ~a && a < r ? t.indexOf(")", r + 1) : r)
    },
    Rw = function(t) {
        var e = (t + "").split("("),
            r = pt[e[0]];
        return r && e.length > 1 && r.config ? r.config.apply(null, ~t.indexOf("{") ? [bw(e[1])] : Aw(t).split(",").map(nc)) : pt._CE && Ew.test(t) ? pt._CE("", t) : r
    },
    Tc = function(t) {
        return function(e) {
            return 1 - t(1 - e)
        }
    },
    Ec = function n(t, e) {
        for (var r = t._first, a; r;) r instanceof te ? n(r, e) : r.vars.yoyoEase && (!r._yoyo || !r._repeat) && r._yoyo !== e && (r.timeline ? n(r.timeline, e) : (a = r._ease, r._ease = r._yEase, r._yEase = a, r._yoyo = e)), r = r._next
    },
    ji = function(t, e) {
        return t && (Ot(t) ? t : pt[t] || Rw(t)) || e
    },
    ir = function(t, e, r, a) {
        r === void 0 && (r = function(f) {
            return 1 - e(1 - f)
        }), a === void 0 && (a = function(f) {
            return f < .5 ? e(f * 2) / 2 : 1 - e((1 - f) * 2) / 2
        });
        var o = {
                easeIn: e,
                easeOut: r,
                easeInOut: a
            },
            l;
        return he(t, function(u) {
            pt[u] = Te[u] = o, pt[l = u.toLowerCase()] = r;
            for (var f in o) pt[l + (f === "easeIn" ? ".in" : f === "easeOut" ? ".out" : ".inOut")] = pt[u + "." + f] = o[f]
        }), o
    },
    Sc = function(t) {
        return function(e) {
            return e < .5 ? (1 - t(1 - e * 2)) / 2 : .5 + t((e - .5) * 2) / 2
        }
    },
    lo = function n(t, e, r) {
        var a = e >= 1 ? e : 1,
            o = (r || (t ? .3 : .45)) / (e < 1 ? e : 1),
            l = o / yo * (Math.asin(1 / a) || 0),
            u = function(p) {
                return p === 1 ? 1 : a * Math.pow(2, -10 * p) * ew((p - l) * o) + 1
            },
            f = t === "out" ? u : t === "in" ? function(d) {
                return 1 - u(1 - d)
            } : Sc(u);
        return o = yo / o, f.config = function(d, p) {
            return n(t, d, p)
        }, f
    },
    uo = function n(t, e) {
        e === void 0 && (e = 1.70158);
        var r = function(l) {
                return l ? --l * l * ((e + 1) * l + e) + 1 : 0
            },
            a = t === "out" ? r : t === "in" ? function(o) {
                return 1 - r(1 - o)
            } : Sc(r);
        return a.config = function(o) {
            return n(t, o)
        }, a
    };
he("Linear,Quad,Cubic,Quart,Quint,Strong", function(n, t) {
    var e = t < 5 ? t + 1 : t;
    ir(n + ",Power" + (e - 1), t ? function(r) {
        return Math.pow(r, e)
    } : function(r) {
        return r
    }, function(r) {
        return 1 - Math.pow(1 - r, e)
    }, function(r) {
        return r < .5 ? Math.pow(r * 2, e) / 2 : 1 - Math.pow((1 - r) * 2, e) / 2
    })
});
pt.Linear.easeNone = pt.none = pt.Linear.easeIn;
ir("Elastic", lo("in"), lo("out"), lo());
(function(n, t) {
    var e = 1 / t,
        r = 2 * e,
        a = 2.5 * e,
        o = function(u) {
            return u < e ? n * u * u : u < r ? n * Math.pow(u - 1.5 / t, 2) + .75 : u < a ? n * (u -= 2.25 / t) * u + .9375 : n * Math.pow(u - 2.625 / t, 2) + .984375
        };
    ir("Bounce", function(l) {
        return 1 - o(1 - l)
    }, o)
})(7.5625, 2.75);
ir("Expo", function(n) {
    return Math.pow(2, 10 * (n - 1)) * n + n * n * n * n * n * n * (1 - n)
});
ir("Circ", function(n) {
    return -($f(1 - n * n) - 1)
});
ir("Sine", function(n) {
    return n === 1 ? 1 : -tw(n * Jy) + 1
});
ir("Back", uo("in"), uo("out"), uo());
pt.SteppedEase = pt.steps = Te.SteppedEase = {
    config: function(t, e) {
        t === void 0 && (t = 1);
        var r = 1 / t,
            a = t + (e ? 0 : 1),
            o = e ? 1 : 0,
            l = 1 - Kt;
        return function(u) {
            return ((a * Tn(0, l, u) | 0) + o) * r
        }
    }
};
Cr.ease = pt["quad.out"];
he("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(n) {
    return Yo += n + "," + n + "Params,"
});
var bc = function(t, e) {
        this.id = jy++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : ic, this.set = e ? e.getSetter : th
    },
    xn = function() {
        function n(e) {
            this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, Lr(this, +e.duration, 1, 1), this.data = e.data, At && (this._ctx = At, At.data.push(this)), vn || xe.wake()
        }
        var t = n.prototype;
        return t.delay = function(r) {
            return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay), this._delay = r, this) : this._delay
        }, t.duration = function(r) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur
        }, t.totalDuration = function(r) {
            return arguments.length ? (this._dirty = 0, Lr(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }, t.totalTime = function(r, a) {
            if (Dr(), !arguments.length) return this._tTime;
            var o = this._dp;
            if (o && o.smoothChildTiming && this._ts) {
                for (Ds(this, r), !o._dp || o.parent || oc(o, this); o && o.parent;) o.parent._time !== o._start + (o._ts >= 0 ? o._tTime / o._ts : (o.totalDuration() - o._tTime) / -o._ts) && o.totalTime(o._tTime, !0), o = o.parent;
                !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && Ze(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== r || !this._dur && !a || this._initted && Math.abs(this._zTime) === Kt || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r), rc(this, r, a)), this
        }, t.time = function(r, a) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + cf(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), a) : this._time
        }, t.totalProgress = function(r, a) {
            return arguments.length ? this.totalTime(this.totalDuration() * r, a) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0
        }, t.progress = function(r, a) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + cf(this), a) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
        }, t.iteration = function(r, a) {
            var o = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (r - 1) * o, a) : this._repeat ? Or(this._tTime, o) + 1 : 1
        }, t.timeScale = function(r, a) {
            if (!arguments.length) return this._rts === -1e-8 ? 0 : this._rts;
            if (this._rts === r) return this;
            var o = this.parent && this._ts ? As(this.parent._time, this) : this._tTime;
            return this._rts = +r || 0, this._ts = this._ps || r === -1e-8 ? 0 : this._rts, this.totalTime(Tn(-Math.abs(this._delay), this.totalDuration(), o), a !== !1), Ls(this), hw(this)
        }, t.paused = function(r) {
            return arguments.length ? (this._ps !== r && (this._ps = r, r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Dr(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== Kt && (this._tTime -= Kt)))), this) : this._ps
        }, t.startTime = function(r) {
            if (arguments.length) {
                this._start = r;
                var a = this.parent || this._dp;
                return a && (a._sort || !this.parent) && Ze(a, this, r - this._delay), this
            }
            return this._start
        }, t.endTime = function(r) {
            return this._start + (oe(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        }, t.rawTime = function(r) {
            var a = this.parent || this._dp;
            return a ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? As(a.rawTime(r), this) : this._tTime : this._tTime
        }, t.revert = function(r) {
            r === void 0 && (r = nw);
            var a = Xt;
            return Xt = r, Zo(this) && (this.timeline && this.timeline.revert(r), this.totalTime(-.01, r.suppressEvents)), this.data !== "nested" && r.kill !== !1 && this.kill(), Xt = a, this
        }, t.globalTime = function(r) {
            for (var a = this, o = arguments.length ? r : a.rawTime(); a;) o = a._start + o / (Math.abs(a._ts) || 1), a = a._dp;
            return !this.parent && this._sat ? this._sat.globalTime(r) : o
        }, t.repeat = function(r) {
            return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r, df(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
        }, t.repeatDelay = function(r) {
            if (arguments.length) {
                var a = this._time;
                return this._rDelay = r, df(this), a ? this.time(a) : this
            }
            return this._rDelay
        }, t.yoyo = function(r) {
            return arguments.length ? (this._yoyo = r, this) : this._yoyo
        }, t.seek = function(r, a) {
            return this.totalTime(De(this, r), oe(a))
        }, t.restart = function(r, a) {
            return this.play().totalTime(r ? -this._delay : 0, oe(a)), this._dur || (this._zTime = -1e-8), this
        }, t.play = function(r, a) {
            return r != null && this.seek(r, a), this.reversed(!1).paused(!1)
        }, t.reverse = function(r, a) {
            return r != null && this.seek(r || this.totalDuration(), a), this.reversed(!0).paused(!1)
        }, t.pause = function(r, a) {
            return r != null && this.seek(r, a), this.paused(!0)
        }, t.resume = function() {
            return this.paused(!1)
        }, t.reversed = function(r) {
            return arguments.length ? (!!r !== this.reversed() && this.timeScale(-this._rts || (r ? -1e-8 : 0)), this) : this._rts < 0
        }, t.invalidate = function() {
            return this._initted = this._act = 0, this._zTime = -1e-8, this
        }, t.isActive = function() {
            var r = this.parent || this._dp,
                a = this._start,
                o;
            return !!(!r || this._ts && this._initted && r.isActive() && (o = r.rawTime(!0)) >= a && o < this.endTime(!0) - Kt)
        }, t.eventCallback = function(r, a, o) {
            var l = this.vars;
            return arguments.length > 1 ? (a ? (l[r] = a, o && (l[r + "Params"] = o), r === "onUpdate" && (this._onUpdate = a)) : delete l[r], this) : l[r]
        }, t.then = function(r) {
            var a = this;
            return new Promise(function(o) {
                var l = Ot(r) ? r : sc,
                    u = function() {
                        var d = a.then;
                        a.then = null, Ot(l) && (l = l(a)) && (l.then || l === a) && (a.then = d), o(l), a.then = d
                    };
                a._initted && a.totalProgress() === 1 && a._ts >= 0 || !a._tTime && a._ts < 0 ? u() : a._prom = u
            })
        }, t.kill = function() {
            hn(this)
        }, n
    }();
Ee(xn.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -1e-8,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var te = function(n) {
    Hf(t, n);

    function t(r, a) {
        var o;
        return r === void 0 && (r = {}), o = n.call(this, r) || this, o.labels = {}, o.smoothChildTiming = !!r.smoothChildTiming, o.autoRemoveChildren = !!r.autoRemoveChildren, o._sort = oe(r.sortChildren), Mt && Ze(r.parent || Mt, ui(o), a), r.reversed && o.reverse(), r.paused && o.paused(!0), r.scrollTrigger && hc(ui(o), r.scrollTrigger), o
    }
    var e = t.prototype;
    return e.to = function(a, o, l) {
        return cn(0, arguments, this), this
    }, e.from = function(a, o, l) {
        return cn(1, arguments, this), this
    }, e.fromTo = function(a, o, l, u) {
        return cn(2, arguments, this), this
    }, e.set = function(a, o, l) {
        return o.duration = 0, o.parent = this, fn(o).repeatDelay || (o.repeat = 0), o.immediateRender = !!o.immediateRender, new zt(a, o, De(this, l), 1), this
    }, e.call = function(a, o, l) {
        return Ze(this, zt.delayedCall(0, a, o), l)
    }, e.staggerTo = function(a, o, l, u, f, d, p) {
        return l.duration = o, l.stagger = l.stagger || u, l.onComplete = d, l.onCompleteParams = p, l.parent = this, new zt(a, l, De(this, f)), this
    }, e.staggerFrom = function(a, o, l, u, f, d, p) {
        return l.runBackwards = 1, fn(l).immediateRender = oe(l.immediateRender), this.staggerTo(a, o, l, u, f, d, p)
    }, e.staggerFromTo = function(a, o, l, u, f, d, p, v) {
        return u.startAt = l, fn(u).immediateRender = oe(u.immediateRender), this.staggerTo(a, o, u, f, d, p, v)
    }, e.render = function(a, o, l) {
        var u = this._time,
            f = this._dirty ? this.totalDuration() : this._tDur,
            d = this._dur,
            p = a <= 0 ? 0 : Bt(a),
            v = this._zTime < 0 != a < 0 && (this._initted || !d),
            m, x, T, _, E, b, L, M, C, R, D, N;
        if (this !== Mt && p > f && a >= 0 && (p = f), p !== this._tTime || l || v) {
            if (u !== this._time && d && (p += this._time - u, a += this._time - u), m = p, C = this._start, M = this._ts, b = !M, v && (d || (u = this._zTime), (a || !o) && (this._zTime = a)), this._repeat) {
                if (D = this._yoyo, E = d + this._rDelay, this._repeat < -1 && a < 0) return this.totalTime(E * 100 + a, o, l);
                if (m = Bt(p % E), p === f ? (_ = this._repeat, m = d) : (R = Bt(p / E), _ = ~~R, _ && _ === R && (m = d, _--), m > d && (m = d)), R = Or(this._tTime, E), !u && this._tTime && R !== _ && this._tTime - R * E - this._dur <= 0 && (R = _), D && _ & 1 && (m = d - m, N = 1), _ !== R && !this._lock) {
                    var z = D && R & 1,
                        F = z === (D && _ & 1);
                    if (_ < R && (z = !z), u = z ? 0 : p % d ? d : p, this._lock = 1, this.render(u || (N ? 0 : Bt(_ * E)), o, !d)._lock = 0, this._tTime = p, !o && this.parent && ye(this, "onRepeat"), this.vars.repeatRefresh && !N && (this.invalidate()._lock = 1), u && u !== this._time || b !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                    if (d = this._dur, f = this._tDur, F && (this._lock = 2, u = z ? d : -1e-4, this.render(u, !0), this.vars.repeatRefresh && !N && this.invalidate()), this._lock = 0, !this._ts && !b) return this;
                    Ec(this, N)
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (L = cw(this, Bt(u), Bt(m)), L && (p -= m - (m = L._start))), this._tTime = p, this._time = m, this._act = !M, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = a, u = 0), !u && p && !o && !R && (ye(this, "onStart"), this._tTime !== p)) return this;
            if (m >= u && a >= 0)
                for (x = this._first; x;) {
                    if (T = x._next, (x._act || m >= x._start) && x._ts && L !== x) {
                        if (x.parent !== this) return this.render(a, o, l);
                        if (x.render(x._ts > 0 ? (m - x._start) * x._ts : (x._dirty ? x.totalDuration() : x._tDur) + (m - x._start) * x._ts, o, l), m !== this._time || !this._ts && !b) {
                            L = 0, T && (p += this._zTime = -1e-8);
                            break
                        }
                    }
                    x = T
                } else {
                    x = this._last;
                    for (var q = a < 0 ? a : m; x;) {
                        if (T = x._prev, (x._act || q <= x._end) && x._ts && L !== x) {
                            if (x.parent !== this) return this.render(a, o, l);
                            if (x.render(x._ts > 0 ? (q - x._start) * x._ts : (x._dirty ? x.totalDuration() : x._tDur) + (q - x._start) * x._ts, o, l || Xt && Zo(x)), m !== this._time || !this._ts && !b) {
                                L = 0, T && (p += this._zTime = q ? -1e-8 : Kt);
                                break
                            }
                        }
                        x = T
                    }
                }
            if (L && !o && (this.pause(), L.render(m >= u ? 0 : -1e-8)._zTime = m >= u ? 1 : -1, this._ts)) return this._start = C, Ls(this), this.render(a, o, l);
            this._onUpdate && !o && ye(this, "onUpdate", !0), (p === f && this._tTime >= this.totalDuration() || !p && u) && (C === this._start || Math.abs(M) !== Math.abs(this._ts)) && (this._lock || ((a || !d) && (p === f && this._ts > 0 || !p && this._ts < 0) && Ii(this, 1), !o && !(a < 0 && !u) && (p || u || !f) && (ye(this, p === f && a >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(p < f && this.timeScale() > 0) && this._prom())))
        }
        return this
    }, e.add = function(a, o) {
        var l = this;
        if (di(o) || (o = De(this, o, a)), !(a instanceof xn)) {
            if (Zt(a)) return a.forEach(function(u) {
                return l.add(u, o)
            }), this;
            if (qt(a)) return this.addLabel(a, o);
            if (Ot(a)) a = zt.delayedCall(0, a);
            else return this
        }
        return this !== a ? Ze(this, a, o) : this
    }, e.getChildren = function(a, o, l, u) {
        a === void 0 && (a = !0), o === void 0 && (o = !0), l === void 0 && (l = !0), u === void 0 && (u = -1e8);
        for (var f = [], d = this._first; d;) d._start >= u && (d instanceof zt ? o && f.push(d) : (l && f.push(d), a && f.push.apply(f, d.getChildren(!0, o, l)))), d = d._next;
        return f
    }, e.getById = function(a) {
        for (var o = this.getChildren(1, 1, 1), l = o.length; l--;)
            if (o[l].vars.id === a) return o[l]
    }, e.remove = function(a) {
        return qt(a) ? this.removeLabel(a) : Ot(a) ? this.killTweensOf(a) : (a.parent === this && Os(this, a), a === this._recent && (this._recent = this._last), Ji(this))
    }, e.totalTime = function(a, o) {
        return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = Bt(xe.time - (this._ts > 0 ? a / this._ts : (this.totalDuration() - a) / -this._ts))), n.prototype.totalTime.call(this, a, o), this._forcing = 0, this) : this._tTime
    }, e.addLabel = function(a, o) {
        return this.labels[a] = De(this, o), this
    }, e.removeLabel = function(a) {
        return delete this.labels[a], this
    }, e.addPause = function(a, o, l) {
        var u = zt.delayedCall(0, o || _n, l);
        return u.data = "isPause", this._hasPause = 1, Ze(this, u, De(this, a))
    }, e.removePause = function(a) {
        var o = this._first;
        for (a = De(this, a); o;) o._start === a && o.data === "isPause" && Ii(o), o = o._next
    }, e.killTweensOf = function(a, o, l) {
        for (var u = this.getTweensOf(a, l), f = u.length; f--;) Ci !== u[f] && u[f].kill(a, o);
        return this
    }, e.getTweensOf = function(a, o) {
        for (var l = [], u = ze(a), f = this._first, d = di(o), p; f;) f instanceof zt ? sw(f._targets, u) && (d ? (!Ci || f._initted && f._ts) && f.globalTime(0) <= o && f.globalTime(f.totalDuration()) > o : !o || f.isActive()) && l.push(f) : (p = f.getTweensOf(u, o)).length && l.push.apply(l, p), f = f._next;
        return l
    }, e.tweenTo = function(a, o) {
        o = o || {};
        var l = this,
            u = De(l, a),
            f = o,
            d = f.startAt,
            p = f.onStart,
            v = f.onStartParams,
            m = f.immediateRender,
            x, T = zt.to(l, Ee({
                ease: o.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: u,
                overwrite: "auto",
                duration: o.duration || Math.abs((u - (d && "time" in d ? d.time : l._time)) / l.timeScale()) || Kt,
                onStart: function() {
                    if (l.pause(), !x) {
                        var E = o.duration || Math.abs((u - (d && "time" in d ? d.time : l._time)) / l.timeScale());
                        T._dur !== E && Lr(T, E, 0, 1).render(T._time, !0, !0), x = 1
                    }
                    p && p.apply(T, v || [])
                }
            }, o));
        return m ? T.render(0) : T
    }, e.tweenFromTo = function(a, o, l) {
        return this.tweenTo(o, Ee({
            startAt: {
                time: De(this, a)
            }
        }, l))
    }, e.recent = function() {
        return this._recent
    }, e.nextLabel = function(a) {
        return a === void 0 && (a = this._time), pf(this, De(this, a))
    }, e.previousLabel = function(a) {
        return a === void 0 && (a = this._time), pf(this, De(this, a), 1)
    }, e.currentLabel = function(a) {
        return arguments.length ? this.seek(a, !0) : this.previousLabel(this._time + Kt)
    }, e.shiftChildren = function(a, o, l) {
        l === void 0 && (l = 0);
        for (var u = this._first, f = this.labels, d; u;) u._start >= l && (u._start += a, u._end += a), u = u._next;
        if (o)
            for (d in f) f[d] >= l && (f[d] += a);
        return Ji(this)
    }, e.invalidate = function(a) {
        var o = this._first;
        for (this._lock = 0; o;) o.invalidate(a), o = o._next;
        return n.prototype.invalidate.call(this, a)
    }, e.clear = function(a) {
        a === void 0 && (a = !0);
        for (var o = this._first, l; o;) l = o._next, this.remove(o), o = l;
        return this._dp && (this._time = this._tTime = this._pTime = 0), a && (this.labels = {}), Ji(this)
    }, e.totalDuration = function(a) {
        var o = 0,
            l = this,
            u = l._last,
            f = Je,
            d, p, v;
        if (arguments.length) return l.timeScale((l._repeat < 0 ? l.duration() : l.totalDuration()) / (l.reversed() ? -a : a));
        if (l._dirty) {
            for (v = l.parent; u;) d = u._prev, u._dirty && u.totalDuration(), p = u._start, p > f && l._sort && u._ts && !l._lock ? (l._lock = 1, Ze(l, u, p - u._delay, 1)._lock = 0) : f = p, p < 0 && u._ts && (o -= p, (!v && !l._dp || v && v.smoothChildTiming) && (l._start += p / l._ts, l._time -= p, l._tTime -= p), l.shiftChildren(-p, !1, -1 / 0), f = 0), u._end > o && u._ts && (o = u._end), u = d;
            Lr(l, l === Mt && l._time > o ? l._time : o, 1, 1), l._dirty = 0
        }
        return l._tDur
    }, t.updateRoot = function(a) {
        if (Mt._ts && (rc(Mt, As(a, Mt)), ec = xe.frame), xe.frame >= uf) {
            uf += we.autoSleep || 120;
            var o = Mt._first;
            if ((!o || !o._ts) && we.autoSleep && xe._listeners.length < 2) {
                for (; o && !o._ts;) o = o._next;
                o || xe.sleep()
            }
        }
    }, t
}(xn);
Ee(te.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var Mw = function(t, e, r, a, o, l, u) {
        var f = new le(this._pt, t, e, 0, 1, Oc, null, o),
            d = 0,
            p = 0,
            v, m, x, T, _, E, b, L;
        for (f.b = r, f.e = a, r += "", a += "", (b = ~a.indexOf("random(")) && (a = mn(a)), l && (L = [r, a], l(L, t, e), r = L[0], a = L[1]), m = r.match(ao) || []; v = ao.exec(a);) T = v[0], _ = a.substring(d, v.index), x ? x = (x + 1) % 5 : _.substr(-5) === "rgba(" && (x = 1), T !== m[p++] && (E = parseFloat(m[p - 1]) || 0, f._pt = {
            _next: f._pt,
            p: _ || p === 1 ? _ : ",",
            s: E,
            c: T.charAt(1) === "=" ? br(E, T) - E : parseFloat(T) - E,
            m: x && x < 4 ? Math.round : 0
        }, d = ao.lastIndex);
        return f.c = d < a.length ? a.substring(d, a.length) : "", f.fp = u, (Zf.test(a) || b) && (f.e = 0), this._pt = f, f
    },
    Qo = function(t, e, r, a, o, l, u, f, d, p) {
        Ot(a) && (a = a(o || 0, t, l));
        var v = t[e],
            m = r !== "get" ? r : Ot(v) ? d ? t[e.indexOf("set") || !Ot(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](d) : t[e]() : v,
            x = Ot(v) ? d ? Dw : Cc : jo,
            T;
        if (qt(a) && (~a.indexOf("random(") && (a = mn(a)), a.charAt(1) === "=" && (T = br(m, a) + (Yt(m) || 0), (T || T === 0) && (a = T))), !p || m !== a || Co) return !isNaN(m * a) && a !== "" ? (T = new le(this._pt, t, e, +m || 0, a - (m || 0), typeof v == "boolean" ? Iw : Pc, 0, x), d && (T.fp = d), u && T.modifier(u, this, t), this._pt = T) : (!v && !(e in t) && Ho(e, a), Mw.call(this, t, e, m, a, x, f || we.stringFilter, d))
    },
    Cw = function(t, e, r, a, o) {
        if (Ot(t) && (t = dn(t, o, e, r, a)), !je(t) || t.style && t.nodeType || Zt(t) || Yf(t)) return qt(t) ? dn(t, o, e, r, a) : t;
        var l = {},
            u;
        for (u in t) l[u] = dn(t[u], o, e, r, a);
        return l
    },
    Ac = function(t, e, r, a, o, l) {
        var u, f, d, p;
        if (ve[t] && (u = new ve[t]).init(o, u.rawVars ? e[t] : Cw(e[t], a, o, l, r), r, a, l) !== !1 && (r._pt = f = new le(r._pt, o, t, 0, 1, u.render, u, 0, u.priority), r !== Er))
            for (d = r._ptLookup[r._targets.indexOf(o)], p = u._props.length; p--;) d[u._props[p]] = f;
        return u
    },
    Ci, Co, Jo = function n(t, e, r) {
        var a = t.vars,
            o = a.ease,
            l = a.startAt,
            u = a.immediateRender,
            f = a.lazy,
            d = a.onUpdate,
            p = a.runBackwards,
            v = a.yoyoEase,
            m = a.keyframes,
            x = a.autoRevert,
            T = t._dur,
            _ = t._startAt,
            E = t._targets,
            b = t.parent,
            L = b && b.data === "nested" ? b.vars.targets : E,
            M = t._overwrite === "auto" && !qo,
            C = t.timeline,
            R, D, N, z, F, q, Y, G, V, X, tt, nt, et;
        if (C && (!m || !o) && (o = "none"), t._ease = ji(o, Cr.ease), t._yEase = v ? Tc(ji(v === !0 ? o : v, Cr.ease)) : 0, v && t._yoyo && !t._repeat && (v = t._yEase, t._yEase = t._ease, t._ease = v), t._from = !C && !!a.runBackwards, !C || m && !a.stagger) {
            if (G = E[0] ? Qi(E[0]).harness : 0, nt = G && a[G.prop], R = bs(a, $o), _ && (_._zTime < 0 && _.progress(1), e < 0 && p && u && !x ? _.render(-1, !0) : _.revert(p && T ? vs : rw), _._lazy = 0), l) {
                if (Ii(t._startAt = zt.set(E, Ee({
                        data: "isStart",
                        overwrite: !1,
                        parent: b,
                        immediateRender: !0,
                        lazy: !_ && oe(f),
                        startAt: null,
                        delay: 0,
                        onUpdate: d && function() {
                            return ye(t, "onUpdate")
                        },
                        stagger: 0
                    }, l))), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (Xt || !u && !x) && t._startAt.revert(vs), u && T && e <= 0 && r <= 0) {
                    e && (t._zTime = e);
                    return
                }
            } else if (p && T && !_) {
                if (e && (u = !1), N = Ee({
                        overwrite: !1,
                        data: "isFromStart",
                        lazy: u && !_ && oe(f),
                        immediateRender: u,
                        stagger: 0,
                        parent: b
                    }, R), nt && (N[G.prop] = nt), Ii(t._startAt = zt.set(E, N)), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (Xt ? t._startAt.revert(vs) : t._startAt.render(-1, !0)), t._zTime = e, !u) n(t._startAt, Kt, Kt);
                else if (!e) return
            }
            for (t._pt = t._ptCache = 0, f = T && oe(f) || f && !T, D = 0; D < E.length; D++) {
                if (F = E[D], Y = F._gsap || Ko(E)[D]._gsap, t._ptLookup[D] = X = {}, Eo[Y.id] && Di.length && Ss(), tt = L === E ? D : L.indexOf(F), G && (V = new G).init(F, nt || R, t, tt, L) !== !1 && (t._pt = z = new le(t._pt, F, V.name, 0, 1, V.render, V, 0, V.priority), V._props.forEach(function(_t) {
                        X[_t] = z
                    }), V.priority && (q = 1)), !G || nt)
                    for (N in R) ve[N] && (V = Ac(N, R, t, tt, F, L)) ? V.priority && (q = 1) : X[N] = z = Qo.call(t, F, N, "get", R[N], tt, L, 0, a.stringFilter);
                t._op && t._op[D] && t.kill(F, t._op[D]), M && t._pt && (Ci = t, Mt.killTweensOf(F, X, t.globalTime(e)), et = !t.parent, Ci = 0), t._pt && f && (Eo[Y.id] = 1)
            }
            q && Lc(t), t._onInit && t._onInit(t)
        }
        t._onUpdate = d, t._initted = (!t._op || t._pt) && !et, m && e <= 0 && C.render(Je, !0, !0)
    },
    Pw = function(t, e, r, a, o, l, u, f) {
        var d = (t._pt && t._ptCache || (t._ptCache = {}))[e],
            p, v, m, x;
        if (!d)
            for (d = t._ptCache[e] = [], m = t._ptLookup, x = t._targets.length; x--;) {
                if (p = m[x][e], p && p.d && p.d._pt)
                    for (p = p.d._pt; p && p.p !== e && p.fp !== e;) p = p._next;
                if (!p) return Co = 1, t.vars[e] = "+=0", Jo(t, u), Co = 0, f ? gn(e + " not eligible for reset") : 1;
                d.push(p)
            }
        for (x = d.length; x--;) v = d[x], p = v._pt || v, p.s = (a || a === 0) && !o ? a : p.s + (a || 0) + l * p.c, p.c = r - p.s, v.e && (v.e = Ft(r) + Yt(v.e)), v.b && (v.b = p.s + Yt(v.b))
    },
    Ow = function(t, e) {
        var r = t[0] ? Qi(t[0]).harness : 0,
            a = r && r.aliases,
            o, l, u, f;
        if (!a) return e;
        o = Pr({}, e);
        for (l in a)
            if (l in o)
                for (f = a[l].split(","), u = f.length; u--;) o[f[u]] = o[l];
        return o
    },
    Lw = function(t, e, r, a) {
        var o = e.ease || a || "power1.inOut",
            l, u;
        if (Zt(e)) u = r[t] || (r[t] = []), e.forEach(function(f, d) {
            return u.push({
                t: d / (e.length - 1) * 100,
                v: f,
                e: o
            })
        });
        else
            for (l in e) u = r[l] || (r[l] = []), l === "ease" || u.push({
                t: parseFloat(t),
                v: e[l],
                e: o
            })
    },
    dn = function(t, e, r, a, o) {
        return Ot(t) ? t.call(e, r, a, o) : qt(t) && ~t.indexOf("random(") ? mn(t) : t
    },
    Rc = Yo + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    Mc = {};
he(Rc + ",id,stagger,delay,duration,paused,scrollTrigger", function(n) {
    return Mc[n] = 1
});
var zt = function(n) {
    Hf(t, n);

    function t(r, a, o, l) {
        var u;
        typeof a == "number" && (o.duration = a, a = o, o = null), u = n.call(this, l ? a : fn(a)) || this;
        var f = u.vars,
            d = f.duration,
            p = f.delay,
            v = f.immediateRender,
            m = f.stagger,
            x = f.overwrite,
            T = f.keyframes,
            _ = f.defaults,
            E = f.scrollTrigger,
            b = f.yoyoEase,
            L = a.parent || Mt,
            M = (Zt(r) || Yf(r) ? di(r[0]) : "length" in a) ? [r] : ze(r),
            C, R, D, N, z, F, q, Y;
        if (u._targets = M.length ? Ko(M) : gn("GSAP target " + r + " not found. https://gsap.com", !we.nullTargetWarn) || [], u._ptLookup = [], u._overwrite = x, T || m || _s(d) || _s(p)) {
            if (a = u.vars, C = u.timeline = new te({
                    data: "nested",
                    defaults: _ || {},
                    targets: L && L.data === "nested" ? L.vars.targets : M
                }), C.kill(), C.parent = C._dp = ui(u), C._start = 0, m || _s(d) || _s(p)) {
                if (N = M.length, q = m && cc(m), je(m))
                    for (z in m) ~Rc.indexOf(z) && (Y || (Y = {}), Y[z] = m[z]);
                for (R = 0; R < N; R++) D = bs(a, Mc), D.stagger = 0, b && (D.yoyoEase = b), Y && Pr(D, Y), F = M[R], D.duration = +dn(d, ui(u), R, F, M), D.delay = (+dn(p, ui(u), R, F, M) || 0) - u._delay, !m && N === 1 && D.delay && (u._delay = p = D.delay, u._start += p, D.delay = 0), C.to(F, D, q ? q(R, F, M) : 0), C._ease = pt.none;
                C.duration() ? d = p = 0 : u.timeline = 0
            } else if (T) {
                fn(Ee(C.vars.defaults, {
                    ease: "none"
                })), C._ease = ji(T.ease || a.ease || "none");
                var G = 0,
                    V, X, tt;
                if (Zt(T)) T.forEach(function(nt) {
                    return C.to(M, nt, ">")
                }), C.duration();
                else {
                    D = {};
                    for (z in T) z === "ease" || z === "easeEach" || Lw(z, T[z], D, T.easeEach);
                    for (z in D)
                        for (V = D[z].sort(function(nt, et) {
                                return nt.t - et.t
                            }), G = 0, R = 0; R < V.length; R++) X = V[R], tt = {
                            ease: X.e,
                            duration: (X.t - (R ? V[R - 1].t : 0)) / 100 * d
                        }, tt[z] = X.v, C.to(M, tt, G), G += tt.duration;
                    C.duration() < d && C.to({}, {
                        duration: d - C.duration()
                    })
                }
            }
            d || u.duration(d = C.duration())
        } else u.timeline = 0;
        return x === !0 && !qo && (Ci = ui(u), Mt.killTweensOf(M), Ci = 0), Ze(L, ui(u), o), a.reversed && u.reverse(), a.paused && u.paused(!0), (v || !d && !T && u._start === Bt(L._time) && oe(v) && lw(ui(u)) && L.data !== "nested") && (u._tTime = -1e-8, u.render(Math.max(0, -p) || 0)), E && hc(ui(u), E), u
    }
    var e = t.prototype;
    return e.render = function(a, o, l) {
        var u = this._time,
            f = this._tDur,
            d = this._dur,
            p = a < 0,
            v = a > f - Kt && !p ? f : a < Kt ? 0 : a,
            m, x, T, _, E, b, L, M, C;
        if (!d) fw(this, a, o, l);
        else if (v !== this._tTime || !a || l || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== p || this._lazy) {
            if (m = v, M = this.timeline, this._repeat) {
                if (_ = d + this._rDelay, this._repeat < -1 && p) return this.totalTime(_ * 100 + a, o, l);
                if (m = Bt(v % _), v === f ? (T = this._repeat, m = d) : (E = Bt(v / _), T = ~~E, T && T === E ? (m = d, T--) : m > d && (m = d)), b = this._yoyo && T & 1, b && (C = this._yEase, m = d - m), E = Or(this._tTime, _), m === u && !l && this._initted && T === E) return this._tTime = v, this;
                T !== E && (M && this._yEase && Ec(M, b), this.vars.repeatRefresh && !b && !this._lock && m !== _ && this._initted && (this._lock = l = 1, this.render(Bt(_ * T), !0).invalidate()._lock = 0))
            }
            if (!this._initted) {
                if (lc(this, p ? a : m, l, o, v)) return this._tTime = 0, this;
                if (u !== this._time && !(l && this.vars.repeatRefresh && T !== E)) return this;
                if (d !== this._dur) return this.render(a, o, l)
            }
            if (this._tTime = v, this._time = m, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = L = (C || this._ease)(m / d), this._from && (this.ratio = L = 1 - L), !u && v && !o && !E && (ye(this, "onStart"), this._tTime !== v)) return this;
            for (x = this._pt; x;) x.r(L, x.d), x = x._next;
            M && M.render(a < 0 ? a : M._dur * M._ease(m / this._dur), o, l) || this._startAt && (this._zTime = a), this._onUpdate && !o && (p && So(this, a, o, l), ye(this, "onUpdate")), this._repeat && T !== E && this.vars.onRepeat && !o && this.parent && ye(this, "onRepeat"), (v === this._tDur || !v) && this._tTime === v && (p && !this._onUpdate && So(this, a, !0, !0), (a || !d) && (v === this._tDur && this._ts > 0 || !v && this._ts < 0) && Ii(this, 1), !o && !(p && !u) && (v || u || b) && (ye(this, v === f ? "onComplete" : "onReverseComplete", !0), this._prom && !(v < f && this.timeScale() > 0) && this._prom()))
        }
        return this
    }, e.targets = function() {
        return this._targets
    }, e.invalidate = function(a) {
        return (!a || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(a), n.prototype.invalidate.call(this, a)
    }, e.resetTo = function(a, o, l, u, f) {
        vn || xe.wake(), this._ts || this.play();
        var d = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
            p;
        return this._initted || Jo(this, d), p = this._ease(d / this._dur), Pw(this, a, o, l, u, p, d, f) ? this.resetTo(a, o, l, u, 1) : (Ds(this, 0), this.parent || ac(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
    }, e.kill = function(a, o) {
        if (o === void 0 && (o = "all"), !a && (!o || o === "all")) return this._lazy = this._pt = 0, this.parent ? hn(this) : this.scrollTrigger && this.scrollTrigger.kill(!!Xt), this;
        if (this.timeline) {
            var l = this.timeline.totalDuration();
            return this.timeline.killTweensOf(a, o, Ci && Ci.vars.overwrite !== !0)._first || hn(this), this.parent && l !== this.timeline.totalDuration() && Lr(this, this._dur * this.timeline._tDur / l, 0, 1), this
        }
        var u = this._targets,
            f = a ? ze(a) : u,
            d = this._ptLookup,
            p = this._pt,
            v, m, x, T, _, E, b;
        if ((!o || o === "all") && ow(u, f)) return o === "all" && (this._pt = 0), hn(this);
        for (v = this._op = this._op || [], o !== "all" && (qt(o) && (_ = {}, he(o, function(L) {
                return _[L] = 1
            }), o = _), o = Ow(u, o)), b = u.length; b--;)
            if (~f.indexOf(u[b])) {
                m = d[b], o === "all" ? (v[b] = o, T = m, x = {}) : (x = v[b] = v[b] || {}, T = o);
                for (_ in T) E = m && m[_], E && ((!("kill" in E.d) || E.d.kill(_) === !0) && Os(this, E, "_pt"), delete m[_]), x !== "all" && (x[_] = 1)
            }
        return this._initted && !this._pt && p && hn(this), this
    }, t.to = function(a, o) {
        return new t(a, o, arguments[2])
    }, t.from = function(a, o) {
        return cn(1, arguments)
    }, t.delayedCall = function(a, o, l, u) {
        return new t(o, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: a,
            onComplete: o,
            onReverseComplete: o,
            onCompleteParams: l,
            onReverseCompleteParams: l,
            callbackScope: u
        })
    }, t.fromTo = function(a, o, l) {
        return cn(2, arguments)
    }, t.set = function(a, o) {
        return o.duration = 0, o.repeatDelay || (o.repeat = 0), new t(a, o)
    }, t.killTweensOf = function(a, o, l) {
        return Mt.killTweensOf(a, o, l)
    }, t
}(xn);
Ee(zt.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
});
he("staggerTo,staggerFrom,staggerFromTo", function(n) {
    zt[n] = function() {
        var t = new te,
            e = Ao.call(arguments, 0);
        return e.splice(n === "staggerFromTo" ? 5 : 4, 0, 0), t[n].apply(t, e)
    }
});
var jo = function(t, e, r) {
        return t[e] = r
    },
    Cc = function(t, e, r) {
        return t[e](r)
    },
    Dw = function(t, e, r, a) {
        return t[e](a.fp, r)
    },
    Fw = function(t, e, r) {
        return t.setAttribute(e, r)
    },
    th = function(t, e) {
        return Ot(t[e]) ? Cc : Go(t[e]) && t.setAttribute ? Fw : jo
    },
    Pc = function(t, e) {
        return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e)
    },
    Iw = function(t, e) {
        return e.set(e.t, e.p, !!(e.s + e.c * t), e)
    },
    Oc = function(t, e) {
        var r = e._pt,
            a = "";
        if (!t && e.b) a = e.b;
        else if (t === 1 && e.e) a = e.e;
        else {
            for (; r;) a = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round((r.s + r.c * t) * 1e4) / 1e4) + a, r = r._next;
            a += e.c
        }
        e.set(e.t, e.p, a, e)
    },
    eh = function(t, e) {
        for (var r = e._pt; r;) r.r(t, r.d), r = r._next
    },
    zw = function(t, e, r, a) {
        for (var o = this._pt, l; o;) l = o._next, o.p === a && o.modifier(t, e, r), o = l
    },
    Nw = function(t) {
        for (var e = this._pt, r, a; e;) a = e._next, e.p === t && !e.op || e.op === t ? Os(this, e, "_pt") : e.dep || (r = 1), e = a;
        return !r
    },
    Bw = function(t, e, r, a) {
        a.mSet(t, e, a.m.call(a.tween, r, a.mt), a)
    },
    Lc = function(t) {
        for (var e = t._pt, r, a, o, l; e;) {
            for (r = e._next, a = o; a && a.pr > e.pr;) a = a._next;
            (e._prev = a ? a._prev : l) ? e._prev._next = e: o = e, (e._next = a) ? a._prev = e : l = e, e = r
        }
        t._pt = o
    },
    le = function() {
        function n(e, r, a, o, l, u, f, d, p) {
            this.t = r, this.s = o, this.c = l, this.p = a, this.r = u || Pc, this.d = f || this, this.set = d || jo, this.pr = p || 0, this._next = e, e && (e._prev = this)
        }
        var t = n.prototype;
        return t.modifier = function(r, a, o) {
            this.mSet = this.mSet || this.set, this.set = Bw, this.m = r, this.mt = o, this.tween = a
        }, n
    }();
he(Yo + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(n) {
    return $o[n] = 1
});
Te.TweenMax = Te.TweenLite = zt;
Te.TimelineLite = Te.TimelineMax = te;
Mt = new te({
    sortChildren: !1,
    defaults: Cr,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
});
we.stringFilter = wc;
var tr = [],
    ys = {},
    Uw = [],
    _f = 0,
    Ww = 0,
    fo = function(t) {
        return (ys[t] || Uw).map(function(e) {
            return e()
        })
    },
    Po = function() {
        var t = Date.now(),
            e = [];
        t - _f > 2 && (fo("matchMediaInit"), tr.forEach(function(r) {
            var a = r.queries,
                o = r.conditions,
                l, u, f, d;
            for (u in a) l = Ye.matchMedia(a[u]).matches, l && (f = 1), l !== o[u] && (o[u] = l, d = 1);
            d && (r.revert(), f && e.push(r))
        }), fo("matchMediaRevert"), e.forEach(function(r) {
            return r.onMatch(r, function(a) {
                return r.add(null, a)
            })
        }), _f = t, fo("matchMedia"))
    },
    Dc = function() {
        function n(e, r) {
            this.selector = r && Ro(r), this.data = [], this._r = [], this.isReverted = !1, this.id = Ww++, e && this.add(e)
        }
        var t = n.prototype;
        return t.add = function(r, a, o) {
            Ot(r) && (o = a, a = r, r = Ot);
            var l = this,
                u = function() {
                    var d = At,
                        p = l.selector,
                        v;
                    return d && d !== l && d.data.push(l), o && (l.selector = Ro(o)), At = l, v = a.apply(l, arguments), Ot(v) && l._r.push(v), At = d, l.selector = p, l.isReverted = !1, v
                };
            return l.last = u, r === Ot ? u(l, function(f) {
                return l.add(null, f)
            }) : r ? l[r] = u : u
        }, t.ignore = function(r) {
            var a = At;
            At = null, r(this), At = a
        }, t.getTweens = function() {
            var r = [];
            return this.data.forEach(function(a) {
                return a instanceof n ? r.push.apply(r, a.getTweens()) : a instanceof zt && !(a.parent && a.parent.data === "nested") && r.push(a)
            }), r
        }, t.clear = function() {
            this._r.length = this.data.length = 0
        }, t.kill = function(r, a) {
            var o = this;
            if (r ? function() {
                    for (var u = o.getTweens(), f = o.data.length, d; f--;) d = o.data[f], d.data === "isFlip" && (d.revert(), d.getChildren(!0, !0, !1).forEach(function(p) {
                        return u.splice(u.indexOf(p), 1)
                    }));
                    for (u.map(function(p) {
                            return {
                                g: p._dur || p._delay || p._sat && !p._sat.vars.immediateRender ? p.globalTime(0) : -1 / 0,
                                t: p
                            }
                        }).sort(function(p, v) {
                            return v.g - p.g || -1 / 0
                        }).forEach(function(p) {
                            return p.t.revert(r)
                        }), f = o.data.length; f--;) d = o.data[f], d instanceof te ? d.data !== "nested" && (d.scrollTrigger && d.scrollTrigger.revert(), d.kill()) : !(d instanceof zt) && d.revert && d.revert(r);
                    o._r.forEach(function(p) {
                        return p(r, o)
                    }), o.isReverted = !0
                }() : this.data.forEach(function(u) {
                    return u.kill && u.kill()
                }), this.clear(), a)
                for (var l = tr.length; l--;) tr[l].id === this.id && tr.splice(l, 1)
        }, t.revert = function(r) {
            this.kill(r || {})
        }, n
    }(),
    kw = function() {
        function n(e) {
            this.contexts = [], this.scope = e, At && At.data.push(this)
        }
        var t = n.prototype;
        return t.add = function(r, a, o) {
            je(r) || (r = {
                matches: r
            });
            var l = new Dc(0, o || this.scope),
                u = l.conditions = {},
                f, d, p;
            At && !l.selector && (l.selector = At.selector), this.contexts.push(l), a = l.add("onMatch", a), l.queries = r;
            for (d in r) d === "all" ? p = 1 : (f = Ye.matchMedia(r[d]), f && (tr.indexOf(l) < 0 && tr.push(l), (u[d] = f.matches) && (p = 1), f.addListener ? f.addListener(Po) : f.addEventListener("change", Po)));
            return p && a(l, function(v) {
                return l.add(null, v)
            }), this
        }, t.revert = function(r) {
            this.kill(r || {})
        }, t.kill = function(r) {
            this.contexts.forEach(function(a) {
                return a.kill(r, !0)
            })
        }, n
    }(),
    Rs = {
        registerPlugin: function() {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
            e.forEach(function(a) {
                return vc(a)
            })
        },
        timeline: function(t) {
            return new te(t)
        },
        getTweensOf: function(t, e) {
            return Mt.getTweensOf(t, e)
        },
        getProperty: function(t, e, r, a) {
            qt(t) && (t = ze(t)[0]);
            var o = Qi(t || {}).get,
                l = r ? sc : nc;
            return r === "native" && (r = ""), t && (e ? l((ve[e] && ve[e].get || o)(t, e, r, a)) : function(u, f, d) {
                return l((ve[u] && ve[u].get || o)(t, u, f, d))
            })
        },
        quickSetter: function(t, e, r) {
            if (t = ze(t), t.length > 1) {
                var a = t.map(function(p) {
                        return fe.quickSetter(p, e, r)
                    }),
                    o = a.length;
                return function(p) {
                    for (var v = o; v--;) a[v](p)
                }
            }
            t = t[0] || {};
            var l = ve[e],
                u = Qi(t),
                f = u.harness && (u.harness.aliases || {})[e] || e,
                d = l ? function(p) {
                    var v = new l;
                    Er._pt = 0, v.init(t, r ? p + r : p, Er, 0, [t]), v.render(1, v), Er._pt && eh(1, Er)
                } : u.set(t, f);
            return l ? d : function(p) {
                return d(t, f, r ? p + r : p, u, 1)
            }
        },
        quickTo: function(t, e, r) {
            var a, o = fe.to(t, Ee((a = {}, a[e] = "+=0.1", a.paused = !0, a.stagger = 0, a), r || {})),
                l = function(f, d, p) {
                    return o.resetTo(e, f, d, p)
                };
            return l.tween = o, l
        },
        isTweening: function(t) {
            return Mt.getTweensOf(t, !0).length > 0
        },
        defaults: function(t) {
            return t && t.ease && (t.ease = ji(t.ease, Cr.ease)), ff(Cr, t || {})
        },
        config: function(t) {
            return ff(we, t || {})
        },
        registerEffect: function(t) {
            var e = t.name,
                r = t.effect,
                a = t.plugins,
                o = t.defaults,
                l = t.extendTimeline;
            (a || "").split(",").forEach(function(u) {
                return u && !ve[u] && !Te[u] && gn(e + " effect requires " + u + " plugin.")
            }), oo[e] = function(u, f, d) {
                return r(ze(u), Ee(f || {}, o), d)
            }, l && (te.prototype[e] = function(u, f, d) {
                return this.add(oo[e](u, je(f) ? f : (d = f) && {}, this), d)
            })
        },
        registerEase: function(t, e) {
            pt[t] = ji(e)
        },
        parseEase: function(t, e) {
            return arguments.length ? ji(t, e) : pt
        },
        getById: function(t) {
            return Mt.getById(t)
        },
        exportRoot: function(t, e) {
            t === void 0 && (t = {});
            var r = new te(t),
                a, o;
            for (r.smoothChildTiming = oe(t.smoothChildTiming), Mt.remove(r), r._dp = 0, r._time = r._tTime = Mt._time, a = Mt._first; a;) o = a._next, (e || !(!a._dur && a instanceof zt && a.vars.onComplete === a._targets[0])) && Ze(r, a, a._start - a._delay), a = o;
            return Ze(Mt, r, 0), r
        },
        context: function(t, e) {
            return t ? new Dc(t, e) : At
        },
        matchMedia: function(t) {
            return new kw(t)
        },
        matchMediaRefresh: function() {
            return tr.forEach(function(t) {
                var e = t.conditions,
                    r, a;
                for (a in e) e[a] && (e[a] = !1, r = 1);
                r && t.revert()
            }) || Po()
        },
        addEventListener: function(t, e) {
            var r = ys[t] || (ys[t] = []);
            ~r.indexOf(e) || r.push(e)
        },
        removeEventListener: function(t, e) {
            var r = ys[t],
                a = r && r.indexOf(e);
            a >= 0 && r.splice(a, 1)
        },
        utils: {
            wrap: xw,
            wrapYoyo: yw,
            distribute: cc,
            random: pc,
            snap: dc,
            normalize: vw,
            getUnit: Yt,
            clamp: pw,
            splitColor: xc,
            toArray: ze,
            selector: Ro,
            mapRange: _c,
            pipe: _w,
            unitize: mw,
            interpolate: ww,
            shuffle: fc
        },
        install: jf,
        effects: oo,
        ticker: xe,
        updateRoot: te.updateRoot,
        plugins: ve,
        globalTimeline: Mt,
        core: {
            PropTween: le,
            globals: tc,
            Tween: zt,
            Timeline: te,
            Animation: xn,
            getCache: Qi,
            _removeLinkedListItem: Os,
            reverting: function() {
                return Xt
            },
            context: function(t) {
                return t && At && (At.data.push(t), t._ctx = At), At
            },
            suppressOverwrites: function(t) {
                return qo = t
            }
        }
    };
he("to,from,fromTo,delayedCall,set,killTweensOf", function(n) {
    return Rs[n] = zt[n]
});
xe.add(te.updateRoot);
Er = Rs.to({}, {
    duration: 0
});
var qw = function(t, e) {
        for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) r = r._next;
        return r
    },
    Gw = function(t, e) {
        var r = t._targets,
            a, o, l;
        for (a in e)
            for (o = r.length; o--;) l = t._ptLookup[o][a], l && (l = l.d) && (l._pt && (l = qw(l, a)), l && l.modifier && l.modifier(e[a], t, r[o], a))
    },
    co = function(t, e) {
        return {
            name: t,
            headless: 1,
            rawVars: 1,
            init: function(a, o, l) {
                l._onInit = function(u) {
                    var f, d;
                    if (qt(o) && (f = {}, he(o, function(p) {
                            return f[p] = 1
                        }), o = f), e) {
                        f = {};
                        for (d in o) f[d] = e(o[d]);
                        o = f
                    }
                    Gw(u, o)
                }
            }
        }
    },
    fe = Rs.registerPlugin({
        name: "attr",
        init: function(t, e, r, a, o) {
            var l, u, f;
            this.tween = r;
            for (l in e) f = t.getAttribute(l) || "", u = this.add(t, "setAttribute", (f || 0) + "", e[l], a, o, 0, 0, l), u.op = l, u.b = f, this._props.push(l)
        },
        render: function(t, e) {
            for (var r = e._pt; r;) Xt ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), r = r._next
        }
    }, {
        name: "endArray",
        headless: 1,
        init: function(t, e) {
            for (var r = e.length; r--;) this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1)
        }
    }, co("roundProps", Mo), co("modifiers"), co("snap", dc)) || Rs;
zt.version = te.version = fe.version = "3.13.0";
Jf = 1;
Vo() && Dr();
pt.Power0;
pt.Power1;
pt.Power2;
pt.Power3;
pt.Power4;
pt.Linear;
pt.Quad;
pt.Cubic;
pt.Quart;
pt.Quint;
pt.Strong;
pt.Elastic;
pt.Back;
pt.SteppedEase;
pt.Bounce;
pt.Sine;
pt.Expo;
pt.Circ;
/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */
var mf, Pi, Ar, ih, Zi, vf, rh, Vw = function() {
        return typeof window < "u"
    },
    pi = {},
    Ki = 180 / Math.PI,
    Rr = Math.PI / 180,
    vr = Math.atan2,
    xf = 1e8,
    nh = /([A-Z])/g,
    Xw = /(left|right|width|margin|padding|x)/i,
    Hw = /[\s,\(]\S/,
    Qe = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
    },
    Oo = function(t, e) {
        return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e)
    },
    $w = function(t, e) {
        return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e)
    },
    Yw = function(t, e) {
        return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e)
    },
    Kw = function(t, e) {
        var r = e.s + e.c * t;
        e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
    },
    Fc = function(t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e)
    },
    Ic = function(t, e) {
        return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e)
    },
    Zw = function(t, e, r) {
        return t.style[e] = r
    },
    Qw = function(t, e, r) {
        return t.style.setProperty(e, r)
    },
    Jw = function(t, e, r) {
        return t._gsap[e] = r
    },
    jw = function(t, e, r) {
        return t._gsap.scaleX = t._gsap.scaleY = r
    },
    t2 = function(t, e, r, a, o) {
        var l = t._gsap;
        l.scaleX = l.scaleY = r, l.renderTransform(o, l)
    },
    e2 = function(t, e, r, a, o) {
        var l = t._gsap;
        l[e] = r, l.renderTransform(o, l)
    },
    Ct = "transform",
    ue = Ct + "Origin",
    i2 = function n(t, e) {
        var r = this,
            a = this.target,
            o = a.style,
            l = a._gsap;
        if (t in pi && o) {
            if (this.tfm = this.tfm || {}, t !== "transform") t = Qe[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function(u) {
                return r.tfm[u] = fi(a, u)
            }) : this.tfm[t] = l.x ? l[t] : fi(a, t), t === ue && (this.tfm.zOrigin = l.zOrigin);
            else return Qe.transform.split(",").forEach(function(u) {
                return n.call(r, u, e)
            });
            if (this.props.indexOf(Ct) >= 0) return;
            l.svg && (this.svgo = a.getAttribute("data-svg-origin"), this.props.push(ue, e, "")), t = Ct
        }(o || e) && this.props.push(t, e, o[t])
    },
    zc = function(t) {
        t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"))
    },
    r2 = function() {
        var t = this.props,
            e = this.target,
            r = e.style,
            a = e._gsap,
            o, l;
        for (o = 0; o < t.length; o += 3) t[o + 1] ? t[o + 1] === 2 ? e[t[o]](t[o + 2]) : e[t[o]] = t[o + 2] : t[o + 2] ? r[t[o]] = t[o + 2] : r.removeProperty(t[o].substr(0, 2) === "--" ? t[o] : t[o].replace(nh, "-$1").toLowerCase());
        if (this.tfm) {
            for (l in this.tfm) a[l] = this.tfm[l];
            a.svg && (a.renderTransform(), e.setAttribute("data-svg-origin", this.svgo || "")), o = rh(), (!o || !o.isStart) && !r[Ct] && (zc(r), a.zOrigin && r[ue] && (r[ue] += " " + a.zOrigin + "px", a.zOrigin = 0, a.renderTransform()), a.uncache = 1)
        }
    },
    Nc = function(t, e) {
        var r = {
            target: t,
            props: [],
            revert: r2,
            save: i2
        };
        return t._gsap || fe.core.getCache(t), e && t.style && t.nodeType && e.split(",").forEach(function(a) {
            return r.save(a)
        }), r
    },
    Bc, Lo = function(t, e) {
        var r = Pi.createElementNS ? Pi.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Pi.createElement(t);
        return r && r.style ? r : Pi.createElement(t)
    },
    Ne = function n(t, e, r) {
        var a = getComputedStyle(t);
        return a[e] || a.getPropertyValue(e.replace(nh, "-$1").toLowerCase()) || a.getPropertyValue(e) || !r && n(t, Fr(e) || e, 1) || ""
    },
    yf = "O,Moz,ms,Ms,Webkit".split(","),
    Fr = function(t, e, r) {
        var a = e || Zi,
            o = a.style,
            l = 5;
        if (t in o && !r) return t;
        for (t = t.charAt(0).toUpperCase() + t.substr(1); l-- && !(yf[l] + t in o););
        return l < 0 ? null : (l === 3 ? "ms" : l >= 0 ? yf[l] : "") + t
    },
    Do = function() {
        Vw() && window.document && (mf = window, Pi = mf.document, Ar = Pi.documentElement, Zi = Lo("div") || {
            style: {}
        }, Lo("div"), Ct = Fr(Ct), ue = Ct + "Origin", Zi.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Bc = !!Fr("perspective"), rh = fe.core.reverting, ih = 1)
    },
    wf = function(t) {
        var e = t.ownerSVGElement,
            r = Lo("svg", e && e.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            a = t.cloneNode(!0),
            o;
        a.style.display = "block", r.appendChild(a), Ar.appendChild(r);
        try {
            o = a.getBBox()
        } catch {}
        return r.removeChild(a), Ar.removeChild(r), o
    },
    Tf = function(t, e) {
        for (var r = e.length; r--;)
            if (t.hasAttribute(e[r])) return t.getAttribute(e[r])
    },
    Uc = function(t) {
        var e, r;
        try {
            e = t.getBBox()
        } catch {
            e = wf(t), r = 1
        }
        return e && (e.width || e.height) || r || (e = wf(t)), e && !e.width && !e.x && !e.y ? {
            x: +Tf(t, ["x", "cx", "x1"]) || 0,
            y: +Tf(t, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        } : e
    },
    Wc = function(t) {
        return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && Uc(t))
    },
    er = function(t, e) {
        if (e) {
            var r = t.style,
                a;
            e in pi && e !== ue && (e = Ct), r.removeProperty ? (a = e.substr(0, 2), (a === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e), r.removeProperty(a === "--" ? e : e.replace(nh, "-$1").toLowerCase())) : r.removeAttribute(e)
        }
    },
    Oi = function(t, e, r, a, o, l) {
        var u = new le(t._pt, e, r, 0, 1, l ? Ic : Fc);
        return t._pt = u, u.b = a, u.e = o, t._props.push(r), u
    },
    Ef = {
        deg: 1,
        rad: 1,
        turn: 1
    },
    n2 = {
        grid: 1,
        flex: 1
    },
    zi = function n(t, e, r, a) {
        var o = parseFloat(r) || 0,
            l = (r + "").trim().substr((o + "").length) || "px",
            u = Zi.style,
            f = Xw.test(e),
            d = t.tagName.toLowerCase() === "svg",
            p = (d ? "client" : "offset") + (f ? "Width" : "Height"),
            v = 100,
            m = a === "px",
            x = a === "%",
            T, _, E, b;
        if (a === l || !o || Ef[a] || Ef[l]) return o;
        if (l !== "px" && !m && (o = n(t, e, r, "px")), b = t.getCTM && Wc(t), (x || l === "%") && (pi[e] || ~e.indexOf("adius"))) return T = b ? t.getBBox()[f ? "width" : "height"] : t[p], Ft(x ? o / T * v : o / 100 * T);
        if (u[f ? "width" : "height"] = v + (m ? l : a), _ = a !== "rem" && ~e.indexOf("adius") || a === "em" && t.appendChild && !d ? t : t.parentNode, b && (_ = (t.ownerSVGElement || {}).parentNode), (!_ || _ === Pi || !_.appendChild) && (_ = Pi.body), E = _._gsap, E && x && E.width && f && E.time === xe.time && !E.uncache) return Ft(o / E.width * v);
        if (x && (e === "height" || e === "width")) {
            var L = t.style[e];
            t.style[e] = v + a, T = t[p], L ? t.style[e] = L : er(t, e)
        } else(x || l === "%") && !n2[Ne(_, "display")] && (u.position = Ne(t, "position")), _ === t && (u.position = "static"), _.appendChild(Zi), T = Zi[p], _.removeChild(Zi), u.position = "absolute";
        return f && x && (E = Qi(_), E.time = xe.time, E.width = _[p]), Ft(m ? T * o / v : T && o ? v / T * o : 0)
    },
    fi = function(t, e, r, a) {
        var o;
        return ih || Do(), e in Qe && e !== "transform" && (e = Qe[e], ~e.indexOf(",") && (e = e.split(",")[0])), pi[e] && e !== "transform" ? (o = wn(t, a), o = e !== "transformOrigin" ? o[e] : o.svg ? o.origin : Cs(Ne(t, ue)) + " " + o.zOrigin + "px") : (o = t.style[e], (!o || o === "auto" || a || ~(o + "").indexOf("calc(")) && (o = Ms[e] && Ms[e](t, e, r) || Ne(t, e) || ic(t, e) || (e === "opacity" ? 1 : 0))), r && !~(o + "").trim().indexOf(" ") ? zi(t, e, o, r) + r : o
    },
    s2 = function(t, e, r, a) {
        if (!r || r === "none") {
            var o = Fr(e, t, 1),
                l = o && Ne(t, o, 1);
            l && l !== r ? (e = o, r = l) : e === "borderColor" && (r = Ne(t, "borderTopColor"))
        }
        var u = new le(this._pt, t.style, e, 0, 1, Oc),
            f = 0,
            d = 0,
            p, v, m, x, T, _, E, b, L, M, C, R;
        if (u.b = r, u.e = a, r += "", a += "", a.substring(0, 6) === "var(--" && (a = Ne(t, a.substring(4, a.indexOf(")")))), a === "auto" && (_ = t.style[e], t.style[e] = a, a = Ne(t, e) || a, _ ? t.style[e] = _ : er(t, e)), p = [r, a], wc(p), r = p[0], a = p[1], m = r.match(Tr) || [], R = a.match(Tr) || [], R.length) {
            for (; v = Tr.exec(a);) E = v[0], L = a.substring(f, v.index), T ? T = (T + 1) % 5 : (L.substr(-5) === "rgba(" || L.substr(-5) === "hsla(") && (T = 1), E !== (_ = m[d++] || "") && (x = parseFloat(_) || 0, C = _.substr((x + "").length), E.charAt(1) === "=" && (E = br(x, E) + C), b = parseFloat(E), M = E.substr((b + "").length), f = Tr.lastIndex - M.length, M || (M = M || we.units[e] || C, f === a.length && (a += M, u.e += M)), C !== M && (x = zi(t, e, _, M) || 0), u._pt = {
                _next: u._pt,
                p: L || d === 1 ? L : ",",
                s: x,
                c: b - x,
                m: T && T < 4 || e === "zIndex" ? Math.round : 0
            });
            u.c = f < a.length ? a.substring(f, a.length) : ""
        } else u.r = e === "display" && a === "none" ? Ic : Fc;
        return Zf.test(a) && (u.e = 0), this._pt = u, u
    },
    Sf = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    },
    a2 = function(t) {
        var e = t.split(" "),
            r = e[0],
            a = e[1] || "50%";
        return (r === "top" || r === "bottom" || a === "left" || a === "right") && (t = r, r = a, a = t), e[0] = Sf[r] || r, e[1] = Sf[a] || a, e.join(" ")
    },
    o2 = function(t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var r = e.t,
                a = r.style,
                o = e.u,
                l = r._gsap,
                u, f, d;
            if (o === "all" || o === !0) a.cssText = "", f = 1;
            else
                for (o = o.split(","), d = o.length; --d > -1;) u = o[d], pi[u] && (f = 1, u = u === "transformOrigin" ? ue : Ct), er(r, u);
            f && (er(r, Ct), l && (l.svg && r.removeAttribute("transform"), a.scale = a.rotate = a.translate = "none", wn(r, 1), l.uncache = 1, zc(a)))
        }
    },
    Ms = {
        clearProps: function(t, e, r, a, o) {
            if (o.data !== "isFromStart") {
                var l = t._pt = new le(t._pt, e, r, 0, 0, o2);
                return l.u = a, l.pr = -10, l.tween = o, t._props.push(r), 1
            }
        }
    },
    yn = [1, 0, 0, 1, 0, 0],
    kc = {},
    qc = function(t) {
        return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t
    },
    bf = function(t) {
        var e = Ne(t, Ct);
        return qc(e) ? yn : e.substr(7).match(Kf).map(Ft)
    },
    sh = function(t, e) {
        var r = t._gsap || Qi(t),
            a = t.style,
            o = bf(t),
            l, u, f, d;
        return r.svg && t.getAttribute("transform") ? (f = t.transform.baseVal.consolidate().matrix, o = [f.a, f.b, f.c, f.d, f.e, f.f], o.join(",") === "1,0,0,1,0,0" ? yn : o) : (o === yn && !t.offsetParent && t !== Ar && !r.svg && (f = a.display, a.display = "block", l = t.parentNode, (!l || !t.offsetParent && !t.getBoundingClientRect().width) && (d = 1, u = t.nextElementSibling, Ar.appendChild(t)), o = bf(t), f ? a.display = f : er(t, "display"), d && (u ? l.insertBefore(t, u) : l ? l.appendChild(t) : Ar.removeChild(t))), e && o.length > 6 ? [o[0], o[1], o[4], o[5], o[12], o[13]] : o)
    },
    Fo = function(t, e, r, a, o, l) {
        var u = t._gsap,
            f = o || sh(t, !0),
            d = u.xOrigin || 0,
            p = u.yOrigin || 0,
            v = u.xOffset || 0,
            m = u.yOffset || 0,
            x = f[0],
            T = f[1],
            _ = f[2],
            E = f[3],
            b = f[4],
            L = f[5],
            M = e.split(" "),
            C = parseFloat(M[0]) || 0,
            R = parseFloat(M[1]) || 0,
            D, N, z, F;
        r ? f !== yn && (N = x * E - T * _) && (z = C * (E / N) + R * (-_ / N) + (_ * L - E * b) / N, F = C * (-T / N) + R * (x / N) - (x * L - T * b) / N, C = z, R = F) : (D = Uc(t), C = D.x + (~M[0].indexOf("%") ? C / 100 * D.width : C), R = D.y + (~(M[1] || M[0]).indexOf("%") ? R / 100 * D.height : R)), a || a !== !1 && u.smooth ? (b = C - d, L = R - p, u.xOffset = v + (b * x + L * _) - b, u.yOffset = m + (b * T + L * E) - L) : u.xOffset = u.yOffset = 0, u.xOrigin = C, u.yOrigin = R, u.smooth = !!a, u.origin = e, u.originIsAbsolute = !!r, t.style[ue] = "0px 0px", l && (Oi(l, u, "xOrigin", d, C), Oi(l, u, "yOrigin", p, R), Oi(l, u, "xOffset", v, u.xOffset), Oi(l, u, "yOffset", m, u.yOffset)), t.setAttribute("data-svg-origin", C + " " + R)
    },
    wn = function(t, e) {
        var r = t._gsap || new bc(t);
        if ("x" in r && !e && !r.uncache) return r;
        var a = t.style,
            o = r.scaleX < 0,
            l = "px",
            u = "deg",
            f = getComputedStyle(t),
            d = Ne(t, ue) || "0",
            p, v, m, x, T, _, E, b, L, M, C, R, D, N, z, F, q, Y, G, V, X, tt, nt, et, _t, yt, ut, lt, st, Se, ee, ie;
        return p = v = m = _ = E = b = L = M = C = 0, x = T = 1, r.svg = !!(t.getCTM && Wc(t)), f.translate && ((f.translate !== "none" || f.scale !== "none" || f.rotate !== "none") && (a[Ct] = (f.translate !== "none" ? "translate3d(" + (f.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (f.rotate !== "none" ? "rotate(" + f.rotate + ") " : "") + (f.scale !== "none" ? "scale(" + f.scale.split(" ").join(",") + ") " : "") + (f[Ct] !== "none" ? f[Ct] : "")), a.scale = a.rotate = a.translate = "none"), N = sh(t, r.svg), r.svg && (r.uncache ? (_t = t.getBBox(), d = r.xOrigin - _t.x + "px " + (r.yOrigin - _t.y) + "px", et = "") : et = !e && t.getAttribute("data-svg-origin"), Fo(t, et || d, !!et || r.originIsAbsolute, r.smooth !== !1, N)), R = r.xOrigin || 0, D = r.yOrigin || 0, N !== yn && (Y = N[0], G = N[1], V = N[2], X = N[3], p = tt = N[4], v = nt = N[5], N.length === 6 ? (x = Math.sqrt(Y * Y + G * G), T = Math.sqrt(X * X + V * V), _ = Y || G ? vr(G, Y) * Ki : 0, L = V || X ? vr(V, X) * Ki + _ : 0, L && (T *= Math.abs(Math.cos(L * Rr))), r.svg && (p -= R - (R * Y + D * V), v -= D - (R * G + D * X))) : (ie = N[6], Se = N[7], ut = N[8], lt = N[9], st = N[10], ee = N[11], p = N[12], v = N[13], m = N[14], z = vr(ie, st), E = z * Ki, z && (F = Math.cos(-z), q = Math.sin(-z), et = tt * F + ut * q, _t = nt * F + lt * q, yt = ie * F + st * q, ut = tt * -q + ut * F, lt = nt * -q + lt * F, st = ie * -q + st * F, ee = Se * -q + ee * F, tt = et, nt = _t, ie = yt), z = vr(-V, st), b = z * Ki, z && (F = Math.cos(-z), q = Math.sin(-z), et = Y * F - ut * q, _t = G * F - lt * q, yt = V * F - st * q, ee = X * q + ee * F, Y = et, G = _t, V = yt), z = vr(G, Y), _ = z * Ki, z && (F = Math.cos(z), q = Math.sin(z), et = Y * F + G * q, _t = tt * F + nt * q, G = G * F - Y * q, nt = nt * F - tt * q, Y = et, tt = _t), E && Math.abs(E) + Math.abs(_) > 359.9 && (E = _ = 0, b = 180 - b), x = Ft(Math.sqrt(Y * Y + G * G + V * V)), T = Ft(Math.sqrt(nt * nt + ie * ie)), z = vr(tt, nt), L = Math.abs(z) > 2e-4 ? z * Ki : 0, C = ee ? 1 / (ee < 0 ? -ee : ee) : 0), r.svg && (et = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !qc(Ne(t, Ct)), et && t.setAttribute("transform", et))), Math.abs(L) > 90 && Math.abs(L) < 270 && (o ? (x *= -1, L += _ <= 0 ? 180 : -180, _ += _ <= 0 ? 180 : -180) : (T *= -1, L += L <= 0 ? 180 : -180)), e = e || r.uncache, r.x = p - ((r.xPercent = p && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-p) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + l, r.y = v - ((r.yPercent = v && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-v) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + l, r.z = m + l, r.scaleX = Ft(x), r.scaleY = Ft(T), r.rotation = Ft(_) + u, r.rotationX = Ft(E) + u, r.rotationY = Ft(b) + u, r.skewX = L + u, r.skewY = M + u, r.transformPerspective = C + l, (r.zOrigin = parseFloat(d.split(" ")[2]) || !e && r.zOrigin || 0) && (a[ue] = Cs(d)), r.xOffset = r.yOffset = 0, r.force3D = we.force3D, r.renderTransform = r.svg ? l2 : Bc ? Gc : h2, r.uncache = 0, r
    },
    Cs = function(t) {
        return (t = t.split(" "))[0] + " " + t[1]
    },
    po = function(t, e, r) {
        var a = Yt(e);
        return Ft(parseFloat(e) + parseFloat(zi(t, "x", r + "px", a))) + a
    },
    h2 = function(t, e) {
        e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Gc(t, e)
    },
    $i = "0deg",
    sn = "0px",
    Yi = ") ",
    Gc = function(t, e) {
        var r = e || this,
            a = r.xPercent,
            o = r.yPercent,
            l = r.x,
            u = r.y,
            f = r.z,
            d = r.rotation,
            p = r.rotationY,
            v = r.rotationX,
            m = r.skewX,
            x = r.skewY,
            T = r.scaleX,
            _ = r.scaleY,
            E = r.transformPerspective,
            b = r.force3D,
            L = r.target,
            M = r.zOrigin,
            C = "",
            R = b === "auto" && t && t !== 1 || b === !0;
        if (M && (v !== $i || p !== $i)) {
            var D = parseFloat(p) * Rr,
                N = Math.sin(D),
                z = Math.cos(D),
                F;
            D = parseFloat(v) * Rr, F = Math.cos(D), l = po(L, l, N * F * -M), u = po(L, u, -Math.sin(D) * -M), f = po(L, f, z * F * -M + M)
        }
        E !== sn && (C += "perspective(" + E + Yi), (a || o) && (C += "translate(" + a + "%, " + o + "%) "), (R || l !== sn || u !== sn || f !== sn) && (C += f !== sn || R ? "translate3d(" + l + ", " + u + ", " + f + ") " : "translate(" + l + ", " + u + Yi), d !== $i && (C += "rotate(" + d + Yi), p !== $i && (C += "rotateY(" + p + Yi), v !== $i && (C += "rotateX(" + v + Yi), (m !== $i || x !== $i) && (C += "skew(" + m + ", " + x + Yi), (T !== 1 || _ !== 1) && (C += "scale(" + T + ", " + _ + Yi), L.style[Ct] = C || "translate(0, 0)"
    },
    l2 = function(t, e) {
        var r = e || this,
            a = r.xPercent,
            o = r.yPercent,
            l = r.x,
            u = r.y,
            f = r.rotation,
            d = r.skewX,
            p = r.skewY,
            v = r.scaleX,
            m = r.scaleY,
            x = r.target,
            T = r.xOrigin,
            _ = r.yOrigin,
            E = r.xOffset,
            b = r.yOffset,
            L = r.forceCSS,
            M = parseFloat(l),
            C = parseFloat(u),
            R, D, N, z, F;
        f = parseFloat(f), d = parseFloat(d), p = parseFloat(p), p && (p = parseFloat(p), d += p, f += p), f || d ? (f *= Rr, d *= Rr, R = Math.cos(f) * v, D = Math.sin(f) * v, N = Math.sin(f - d) * -m, z = Math.cos(f - d) * m, d && (p *= Rr, F = Math.tan(d - p), F = Math.sqrt(1 + F * F), N *= F, z *= F, p && (F = Math.tan(p), F = Math.sqrt(1 + F * F), R *= F, D *= F)), R = Ft(R), D = Ft(D), N = Ft(N), z = Ft(z)) : (R = v, z = m, D = N = 0), (M && !~(l + "").indexOf("px") || C && !~(u + "").indexOf("px")) && (M = zi(x, "x", l, "px"), C = zi(x, "y", u, "px")), (T || _ || E || b) && (M = Ft(M + T - (T * R + _ * N) + E), C = Ft(C + _ - (T * D + _ * z) + b)), (a || o) && (F = x.getBBox(), M = Ft(M + a / 100 * F.width), C = Ft(C + o / 100 * F.height)), F = "matrix(" + R + "," + D + "," + N + "," + z + "," + M + "," + C + ")", x.setAttribute("transform", F), L && (x.style[Ct] = F)
    },
    u2 = function(t, e, r, a, o) {
        var l = 360,
            u = qt(o),
            f = parseFloat(o) * (u && ~o.indexOf("rad") ? Ki : 1),
            d = f - a,
            p = a + d + "deg",
            v, m;
        return u && (v = o.split("_")[1], v === "short" && (d %= l, d !== d % (l / 2) && (d += d < 0 ? l : -360)), v === "cw" && d < 0 ? d = (d + l * xf) % l - ~~(d / l) * l : v === "ccw" && d > 0 && (d = (d - l * xf) % l - ~~(d / l) * l)), t._pt = m = new le(t._pt, e, r, a, d, $w), m.e = p, m.u = "deg", t._props.push(r), m
    },
    Af = function(t, e) {
        for (var r in e) t[r] = e[r];
        return t
    },
    f2 = function(t, e, r) {
        var a = Af({}, r._gsap),
            o = "perspective,force3D,transformOrigin,svgOrigin",
            l = r.style,
            u, f, d, p, v, m, x, T;
        a.svg ? (d = r.getAttribute("transform"), r.setAttribute("transform", ""), l[Ct] = e, u = wn(r, 1), er(r, Ct), r.setAttribute("transform", d)) : (d = getComputedStyle(r)[Ct], l[Ct] = e, u = wn(r, 1), l[Ct] = d);
        for (f in pi) d = a[f], p = u[f], d !== p && o.indexOf(f) < 0 && (x = Yt(d), T = Yt(p), v = x !== T ? zi(r, f, d, T) : parseFloat(d), m = parseFloat(p), t._pt = new le(t._pt, u, f, v, m - v, Oo), t._pt.u = T || 0, t._props.push(f));
        Af(u, a)
    };
he("padding,margin,Width,Radius", function(n, t) {
    var e = "Top",
        r = "Right",
        a = "Bottom",
        o = "Left",
        l = (t < 3 ? [e, r, a, o] : [e + o, e + r, a + r, a + o]).map(function(u) {
            return t < 2 ? n + u : "border" + u + n
        });
    Ms[t > 1 ? "border" + n : n] = function(u, f, d, p, v) {
        var m, x;
        if (arguments.length < 4) return m = l.map(function(T) {
            return fi(u, T, d)
        }), x = m.join(" "), x.split(m[0]).length === 5 ? m[0] : x;
        m = (p + "").split(" "), x = {}, l.forEach(function(T, _) {
            return x[T] = m[_] = m[_] || m[(_ - 1) / 2 | 0]
        }), u.init(f, x, v)
    }
});
var Vc = {
    name: "css",
    register: Do,
    targetTest: function(t) {
        return t.style && t.nodeType
    },
    init: function(t, e, r, a, o) {
        var l = this._props,
            u = t.style,
            f = r.vars.startAt,
            d, p, v, m, x, T, _, E, b, L, M, C, R, D, N, z;
        ih || Do(), this.styles = this.styles || Nc(t), z = this.styles.props, this.tween = r;
        for (_ in e)
            if (_ !== "autoRound" && (p = e[_], !(ve[_] && Ac(_, e, r, a, t, o)))) {
                if (x = typeof p, T = Ms[_], x === "function" && (p = p.call(r, a, t, o), x = typeof p), x === "string" && ~p.indexOf("random(") && (p = mn(p)), T) T(this, t, _, p, r) && (N = 1);
                else if (_.substr(0, 2) === "--") d = (getComputedStyle(t).getPropertyValue(_) + "").trim(), p += "", Fi.lastIndex = 0, Fi.test(d) || (E = Yt(d), b = Yt(p)), b ? E !== b && (d = zi(t, _, d, b) + b) : E && (p += E), this.add(u, "setProperty", d, p, a, o, 0, 0, _), l.push(_), z.push(_, 0, u[_]);
                else if (x !== "undefined") {
                    if (f && _ in f ? (d = typeof f[_] == "function" ? f[_].call(r, a, t, o) : f[_], qt(d) && ~d.indexOf("random(") && (d = mn(d)), Yt(d + "") || d === "auto" || (d += we.units[_] || Yt(fi(t, _)) || ""), (d + "").charAt(1) === "=" && (d = fi(t, _))) : d = fi(t, _), m = parseFloat(d), L = x === "string" && p.charAt(1) === "=" && p.substr(0, 2), L && (p = p.substr(2)), v = parseFloat(p), _ in Qe && (_ === "autoAlpha" && (m === 1 && fi(t, "visibility") === "hidden" && v && (m = 0), z.push("visibility", 0, u.visibility), Oi(this, u, "visibility", m ? "inherit" : "hidden", v ? "inherit" : "hidden", !v)), _ !== "scale" && _ !== "transform" && (_ = Qe[_], ~_.indexOf(",") && (_ = _.split(",")[0]))), M = _ in pi, M) {
                        if (this.styles.save(_), x === "string" && p.substring(0, 6) === "var(--" && (p = Ne(t, p.substring(4, p.indexOf(")"))), v = parseFloat(p)), C || (R = t._gsap, R.renderTransform && !e.parseTransform || wn(t, e.parseTransform), D = e.smoothOrigin !== !1 && R.smooth, C = this._pt = new le(this._pt, u, Ct, 0, 1, R.renderTransform, R, 0, -1), C.dep = 1), _ === "scale") this._pt = new le(this._pt, R, "scaleY", R.scaleY, (L ? br(R.scaleY, L + v) : v) - R.scaleY || 0, Oo), this._pt.u = 0, l.push("scaleY", _), _ += "X";
                        else if (_ === "transformOrigin") {
                            z.push(ue, 0, u[ue]), p = a2(p), R.svg ? Fo(t, p, 0, D, 0, this) : (b = parseFloat(p.split(" ")[2]) || 0, b !== R.zOrigin && Oi(this, R, "zOrigin", R.zOrigin, b), Oi(this, u, _, Cs(d), Cs(p)));
                            continue
                        } else if (_ === "svgOrigin") {
                            Fo(t, p, 1, D, 0, this);
                            continue
                        } else if (_ in kc) {
                            u2(this, R, _, m, L ? br(m, L + p) : p);
                            continue
                        } else if (_ === "smoothOrigin") {
                            Oi(this, R, "smooth", R.smooth, p);
                            continue
                        } else if (_ === "force3D") {
                            R[_] = p;
                            continue
                        } else if (_ === "transform") {
                            f2(this, p, t);
                            continue
                        }
                    } else _ in u || (_ = Fr(_) || _);
                    if (M || (v || v === 0) && (m || m === 0) && !Hw.test(p) && _ in u) E = (d + "").substr((m + "").length), v || (v = 0), b = Yt(p) || (_ in we.units ? we.units[_] : E), E !== b && (m = zi(t, _, d, b)), this._pt = new le(this._pt, M ? R : u, _, m, (L ? br(m, L + v) : v) - m, !M && (b === "px" || _ === "zIndex") && e.autoRound !== !1 ? Kw : Oo), this._pt.u = b || 0, E !== b && b !== "%" && (this._pt.b = d, this._pt.r = Yw);
                    else if (_ in u) s2.call(this, t, _, d, L ? L + p : p);
                    else if (_ in t) this.add(t, _, d || t[_], L ? L + p : p, a, o);
                    else if (_ !== "parseTransform") {
                        Ho(_, p);
                        continue
                    }
                    M || (_ in u ? z.push(_, 0, u[_]) : typeof t[_] == "function" ? z.push(_, 2, t[_]()) : z.push(_, 1, d || t[_])), l.push(_)
                }
            }
        N && Lc(this)
    },
    render: function(t, e) {
        if (e.tween._time || !rh())
            for (var r = e._pt; r;) r.r(t, r.d), r = r._next;
        else e.styles.revert()
    },
    get: fi,
    aliases: Qe,
    getSetter: function(t, e, r) {
        var a = Qe[e];
        return a && a.indexOf(",") < 0 && (e = a), e in pi && e !== ue && (t._gsap.x || fi(t, "x")) ? r && vf === r ? e === "scale" ? jw : Jw : (vf = r || {}) && (e === "scale" ? t2 : e2) : t.style && !Go(t.style[e]) ? Zw : ~e.indexOf("-") ? Qw : th(t, e)
    },
    core: {
        _removeProperty: er,
        _getMatrix: sh
    }
};
fe.utils.checkPrefix = Fr;
fe.core.getStyleSaver = Nc;
(function(n, t, e, r) {
    var a = he(n + "," + t + "," + e, function(o) {
        pi[o] = 1
    });
    he(t, function(o) {
        we.units[o] = "deg", kc[o] = 1
    }), Qe[a[13]] = n + "," + t, he(r, function(o) {
        var l = o.split(":");
        Qe[l[1]] = a[l[0]]
    })
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
he("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(n) {
    we.units[n] = "px"
});
fe.registerPlugin(Vc);
/*!
 * SplitText 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2025, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
 * @author: Jack Doyle
 */
let an, xr, Io, c2 = () => Io || Yc.register(window.gsap),
    Rf = typeof Intl < "u" ? new Intl.Segmenter : 0,
    Ps = n => typeof n == "string" ? Ps(document.querySelectorAll(n)) : "length" in n ? Array.from(n) : [n],
    Mf = n => Ps(n).filter(t => t instanceof HTMLElement),
    zo = [],
    go = function() {},
    d2 = /\s+/g,
    Cf = new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.", "gu"),
    Pf = {
        left: 0,
        top: 0,
        width: 0,
        height: 0
    },
    Of = (n, t) => {
        if (t) {
            let e = new Set(n.join("").match(t) || zo),
                r = n.length,
                a, o, l, u;
            if (e.size)
                for (; --r > -1;) {
                    o = n[r];
                    for (l of e)
                        if (l.startsWith(o) && l.length > o.length) {
                            for (a = 0, u = o; l.startsWith(u += n[r + ++a]) && u.length < l.length;);
                            if (a && u.length === l.length) {
                                n[r] = l, n.splice(r + 1, a);
                                break
                            }
                        }
                }
        }
        return n
    },
    Lf = n => window.getComputedStyle(n).display === "inline" && (n.style.display = "inline-block"),
    yr = (n, t, e) => t.insertBefore(typeof n == "string" ? document.createTextNode(n) : n, e),
    No = (n, t, e) => {
        let r = t[n + "sClass"] || "",
            {
                tag: a = "div",
                aria: o = "auto",
                propIndex: l = !1
            } = t,
            u = n === "line" ? "block" : "inline-block",
            f = r.indexOf("++") > -1,
            d = p => {
                let v = document.createElement(a),
                    m = e.length + 1;
                return r && (v.className = r + (f ? " " + r + m : "")), l && v.style.setProperty("--" + n, m + ""), o !== "none" && v.setAttribute("aria-hidden", "true"), a !== "span" && (v.style.position = "relative", v.style.display = u), v.textContent = p, e.push(v), v
            };
        return f && (r = r.replace("++", "")), d.collection = e, d
    },
    p2 = (n, t, e, r) => {
        let a = No("line", e, r),
            o = window.getComputedStyle(n).textAlign || "left";
        return (l, u) => {
            let f = a("");
            for (f.style.textAlign = o, n.insertBefore(f, t[l]); l < u; l++) f.appendChild(t[l]);
            f.normalize()
        }
    },
    Xc = (n, t, e, r, a, o, l, u, f, d) => {
        var p;
        let v = Array.from(n.childNodes),
            m = 0,
            {
                wordDelimiter: x,
                reduceWhiteSpace: T = !0,
                prepareText: _
            } = t,
            E = n.getBoundingClientRect(),
            b = E,
            L = !T && window.getComputedStyle(n).whiteSpace.substring(0, 3) === "pre",
            M = 0,
            C = e.collection,
            R, D, N, z, F, q, Y, G, V, X, tt, nt, et, _t, yt, ut, lt, st;
        for (typeof x == "object" ? (N = x.delimiter || x, D = x.replaceWith || "") : D = x === "" ? "" : x || " ", R = D !== " "; m < v.length; m++)
            if (z = v[m], z.nodeType === 3) {
                for (yt = z.textContent || "", T ? yt = yt.replace(d2, " ") : L && (yt = yt.replace(/\n/g, D + `
`)), _ && (yt = _(yt, n)), z.textContent = yt, F = D || N ? yt.split(N || D) : yt.match(u) || zo, lt = F[F.length - 1], G = R ? lt.slice(-1) === " " : !lt, lt || F.pop(), b = E, Y = R ? F[0].charAt(0) === " " : !F[0], Y && yr(" ", n, z), F[0] || F.shift(), Of(F, f), o && d || (z.textContent = ""), V = 1; V <= F.length; V++)
                    if (ut = F[V - 1], !T && L && ut.charAt(0) === `
` && ((p = z.previousSibling) == null || p.remove(), yr(document.createElement("br"), n, z), ut = ut.slice(1)), !T && ut === "") yr(D, n, z);
                    else if (ut === " ") n.insertBefore(document.createTextNode(" "), z);
                else {
                    if (R && ut.charAt(0) === " " && yr(" ", n, z), M && V === 1 && !Y && C.indexOf(M.parentNode) > -1 ? (q = C[C.length - 1], q.appendChild(document.createTextNode(r ? "" : ut))) : (q = e(r ? "" : ut), yr(q, n, z), M && V === 1 && !Y && q.insertBefore(M, q.firstChild)), r)
                        for (tt = Rf ? Of([...Rf.segment(ut)].map(Se => Se.segment), f) : ut.match(u) || zo, st = 0; st < tt.length; st++) q.appendChild(tt[st] === " " ? document.createTextNode(" ") : r(tt[st]));
                    if (o && d) {
                        if (yt = z.textContent = yt.substring(ut.length + 1, yt.length), X = q.getBoundingClientRect(), X.top > b.top && X.left <= b.left) {
                            for (nt = n.cloneNode(), et = n.childNodes[0]; et && et !== q;) _t = et, et = et.nextSibling, nt.appendChild(_t);
                            n.parentNode.insertBefore(nt, n), a && Lf(nt)
                        }
                        b = X
                    }(V < F.length || G) && yr(V >= F.length ? " " : R && ut.slice(-1) === " " ? " " + D : D, n, z)
                }
                n.removeChild(z), M = 0
            } else z.nodeType === 1 && (l && l.indexOf(z) > -1 ? (C.indexOf(z.previousSibling) > -1 && C[C.length - 1].appendChild(z), M = z) : (Xc(z, t, e, r, a, o, l, u, f, !0), M = 0), a && Lf(z))
    };
const Hc = class $c {
    constructor(t, e) {
        this.isSplit = !1, c2(), this.elements = Mf(t), this.chars = [], this.words = [], this.lines = [], this.masks = [], this.vars = e, this._split = () => this.isSplit && this.split(this.vars);
        let r = [],
            a, o = () => {
                let l = r.length,
                    u;
                for (; l--;) {
                    u = r[l];
                    let f = u.element.offsetWidth;
                    if (f !== u.width) {
                        u.width = f, this._split();
                        return
                    }
                }
            };
        this._data = {
            orig: r,
            obs: typeof ResizeObserver < "u" && new ResizeObserver(() => {
                clearTimeout(a), a = setTimeout(o, 200)
            })
        }, go(this), this.split(e)
    }
    split(t) {
        this.isSplit && this.revert(), this.vars = t = t || this.vars || {};
        let {
            type: e = "chars,words,lines",
            aria: r = "auto",
            deepSlice: a = !0,
            smartWrap: o,
            onSplit: l,
            autoSplit: u = !1,
            specialChars: f,
            mask: d
        } = this.vars, p = e.indexOf("lines") > -1, v = e.indexOf("chars") > -1, m = e.indexOf("words") > -1, x = v && !m && !p, T = f && ("push" in f ? new RegExp("(?:" + f.join("|") + ")", "gu") : f), _ = T ? new RegExp(T.source + "|" + Cf.source, "gu") : Cf, E = !!t.ignore && Mf(t.ignore), {
            orig: b,
            animTime: L,
            obs: M
        } = this._data, C;
        return (v || m || p) && (this.elements.forEach((R, D) => {
            b[D] = {
                element: R,
                html: R.innerHTML,
                ariaL: R.getAttribute("aria-label"),
                ariaH: R.getAttribute("aria-hidden")
            }, r === "auto" ? R.setAttribute("aria-label", (R.textContent || "").trim()) : r === "hidden" && R.setAttribute("aria-hidden", "true");
            let N = [],
                z = [],
                F = [],
                q = v ? No("char", t, N) : null,
                Y = No("word", t, z),
                G, V, X, tt;
            if (Xc(R, t, Y, q, x, a && (p || x), E, _, T, !1), p) {
                let nt = Ps(R.childNodes),
                    et = p2(R, nt, t, F),
                    _t, yt = [],
                    ut = 0,
                    lt = nt.map(Se => Se.nodeType === 1 ? Se.getBoundingClientRect() : Pf),
                    st = Pf;
                for (G = 0; G < nt.length; G++) _t = nt[G], _t.nodeType === 1 && (_t.nodeName === "BR" ? (yt.push(_t), et(ut, G + 1), ut = G + 1, st = lt[ut]) : (G && lt[G].top > st.top && lt[G].left <= st.left && (et(ut, G), ut = G), st = lt[G]));
                ut < G && et(ut, G), yt.forEach(Se => {
                    var ee;
                    return (ee = Se.parentNode) == null ? void 0 : ee.removeChild(Se)
                })
            }
            if (!m) {
                for (G = 0; G < z.length; G++)
                    if (V = z[G], v || !V.nextSibling || V.nextSibling.nodeType !== 3)
                        if (o && !p) {
                            for (X = document.createElement("span"), X.style.whiteSpace = "nowrap"; V.firstChild;) X.appendChild(V.firstChild);
                            V.replaceWith(X)
                        } else V.replaceWith(...V.childNodes);
                else tt = V.nextSibling, tt && tt.nodeType === 3 && (tt.textContent = (V.textContent || "") + (tt.textContent || ""), V.remove());
                z.length = 0, R.normalize()
            }
            this.lines.push(...F), this.words.push(...z), this.chars.push(...N)
        }), d && this[d] && this.masks.push(...this[d].map(R => {
            let D = R.cloneNode();
            return R.replaceWith(D), D.appendChild(R), R.className && (D.className = R.className.replace(/(\b\w+\b)/g, "$1-mask")), D.style.overflow = "clip", D
        }))), this.isSplit = !0, xr && (u ? xr.addEventListener("loadingdone", this._split) : xr.status === "loading" && console.warn("SplitText called before fonts loaded")), (C = l && l(this)) && C.totalTime && (this._data.anim = L ? C.totalTime(L) : C), p && u && this.elements.forEach((R, D) => {
            b[D].width = R.offsetWidth, M && M.observe(R)
        }), this
    }
    revert() {
        var t, e;
        let {
            orig: r,
            anim: a,
            obs: o
        } = this._data;
        return o && o.disconnect(), r.forEach(({
            element: l,
            html: u,
            ariaL: f,
            ariaH: d
        }) => {
            l.innerHTML = u, f ? l.setAttribute("aria-label", f) : l.removeAttribute("aria-label"), d ? l.setAttribute("aria-hidden", d) : l.removeAttribute("aria-hidden")
        }), this.chars.length = this.words.length = this.lines.length = r.length = this.masks.length = 0, this.isSplit = !1, xr == null || xr.removeEventListener("loadingdone", this._split), a && (this._data.animTime = a.totalTime(), a.revert()), (e = (t = this.vars).onRevert) == null || e.call(t, this), this
    }
    static create(t, e) {
        return new $c(t, e)
    }
    static register(t) {
        an = an || t || window.gsap, an && (Ps = an.utils.toArray, go = an.core.context || go), !Io && window.innerWidth > 0 && (xr = document.fonts, Io = !0)
    }
};
Hc.version = "3.13.0";
let Yc = Hc;
var Kc = fe.registerPlugin(Vc) || fe;
Kc.core.Tween;
var ws = {
        exports: {}
    },
    Ts = {
        exports: {}
    },
    g2 = Ts.exports,
    Df;

function _2() {
    return Df || (Df = 1, function(n) {
        (function(t, e) {
            n.exports ? n.exports = e() : t.EvEmitter = e()
        })(typeof window < "u" ? window : g2, function() {
            function t() {}
            let e = t.prototype;
            return e.on = function(r, a) {
                if (!r || !a) return this;
                let o = this._events = this._events || {},
                    l = o[r] = o[r] || [];
                return l.includes(a) || l.push(a), this
            }, e.once = function(r, a) {
                if (!r || !a) return this;
                this.on(r, a);
                let o = this._onceEvents = this._onceEvents || {},
                    l = o[r] = o[r] || {};
                return l[a] = !0, this
            }, e.off = function(r, a) {
                let o = this._events && this._events[r];
                if (!o || !o.length) return this;
                let l = o.indexOf(a);
                return l != -1 && o.splice(l, 1), this
            }, e.emitEvent = function(r, a) {
                let o = this._events && this._events[r];
                if (!o || !o.length) return this;
                o = o.slice(0), a = a || [];
                let l = this._onceEvents && this._onceEvents[r];
                for (let u of o) l && l[u] && (this.off(r, u), delete l[u]), u.apply(this, a);
                return this
            }, e.allOff = function() {
                return delete this._events, delete this._onceEvents, this
            }, t
        })
    }(Ts)), Ts.exports
}
/*!
 * imagesLoaded v5.0.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
var m2 = ws.exports,
    Ff;

function v2() {
    return Ff || (Ff = 1, function(n) {
        (function(t, e) {
            n.exports ? n.exports = e(t, _2()) : t.imagesLoaded = e(t, t.EvEmitter)
        })(typeof window < "u" ? window : m2, function(e, r) {
            let a = e.jQuery,
                o = e.console;

            function l(m) {
                return Array.isArray(m) ? m : typeof m == "object" && typeof m.length == "number" ? [...m] : [m]
            }

            function u(m, x, T) {
                if (!(this instanceof u)) return new u(m, x, T);
                let _ = m;
                if (typeof m == "string" && (_ = document.querySelectorAll(m)), !_) {
                    o.error(`Bad element for imagesLoaded ${_||m}`);
                    return
                }
                this.elements = l(_), this.options = {}, typeof x == "function" ? T = x : Object.assign(this.options, x), T && this.on("always", T), this.getImages(), a && (this.jqDeferred = new a.Deferred), setTimeout(this.check.bind(this))
            }
            u.prototype = Object.create(r.prototype), u.prototype.getImages = function() {
                this.images = [], this.elements.forEach(this.addElementImages, this)
            };
            const f = [1, 9, 11];
            u.prototype.addElementImages = function(m) {
                m.nodeName === "IMG" && this.addImage(m), this.options.background === !0 && this.addElementBackgroundImages(m);
                let {
                    nodeType: x
                } = m;
                if (!x || !f.includes(x)) return;
                let T = m.querySelectorAll("img");
                for (let _ of T) this.addImage(_);
                if (typeof this.options.background == "string") {
                    let _ = m.querySelectorAll(this.options.background);
                    for (let E of _) this.addElementBackgroundImages(E)
                }
            };
            const d = /url\((['"])?(.*?)\1\)/gi;
            u.prototype.addElementBackgroundImages = function(m) {
                let x = getComputedStyle(m);
                if (!x) return;
                let T = d.exec(x.backgroundImage);
                for (; T !== null;) {
                    let _ = T && T[2];
                    _ && this.addBackground(_, m), T = d.exec(x.backgroundImage)
                }
            }, u.prototype.addImage = function(m) {
                let x = new p(m);
                this.images.push(x)
            }, u.prototype.addBackground = function(m, x) {
                let T = new v(m, x);
                this.images.push(T)
            }, u.prototype.check = function() {
                if (this.progressedCount = 0, this.hasAnyBroken = !1, !this.images.length) {
                    this.complete();
                    return
                }
                let m = (x, T, _) => {
                    setTimeout(() => {
                        this.progress(x, T, _)
                    })
                };
                this.images.forEach(function(x) {
                    x.once("progress", m), x.check()
                })
            }, u.prototype.progress = function(m, x, T) {
                this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !m.isLoaded, this.emitEvent("progress", [this, m, x]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, m), this.progressedCount === this.images.length && this.complete(), this.options.debug && o && o.log(`progress: ${T}`, m, x)
            }, u.prototype.complete = function() {
                let m = this.hasAnyBroken ? "fail" : "done";
                if (this.isComplete = !0, this.emitEvent(m, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
                    let x = this.hasAnyBroken ? "reject" : "resolve";
                    this.jqDeferred[x](this)
                }
            };

            function p(m) {
                this.img = m
            }
            p.prototype = Object.create(r.prototype), p.prototype.check = function() {
                if (this.getIsImageComplete()) {
                    this.confirm(this.img.naturalWidth !== 0, "naturalWidth");
                    return
                }
                this.proxyImage = new Image, this.img.crossOrigin && (this.proxyImage.crossOrigin = this.img.crossOrigin), this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.currentSrc || this.img.src
            }, p.prototype.getIsImageComplete = function() {
                return this.img.complete && this.img.naturalWidth
            }, p.prototype.confirm = function(m, x) {
                this.isLoaded = m;
                let {
                    parentNode: T
                } = this.img, _ = T.nodeName === "PICTURE" ? T : this.img;
                this.emitEvent("progress", [this, _, x])
            }, p.prototype.handleEvent = function(m) {
                let x = "on" + m.type;
                this[x] && this[x](m)
            }, p.prototype.onload = function() {
                this.confirm(!0, "onload"), this.unbindEvents()
            }, p.prototype.onerror = function() {
                this.confirm(!1, "onerror"), this.unbindEvents()
            }, p.prototype.unbindEvents = function() {
                this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
            };

            function v(m, x) {
                this.url = m, this.element = x, this.img = new Image
            }
            return v.prototype = Object.create(p.prototype), v.prototype.check = function() {
                this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(this.img.naturalWidth !== 0, "naturalWidth"), this.unbindEvents())
            }, v.prototype.unbindEvents = function() {
                this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
            }, v.prototype.confirm = function(m, x) {
                this.isLoaded = m, this.emitEvent("progress", [this, this.element, x])
            }, u.makeJQueryPlugin = function(m) {
                m = m || e.jQuery, m && (a = m, a.fn.imagesLoaded = function(x, T) {
                    return new u(this, x, T).jqDeferred.promise(a(this))
                })
            }, u.makeJQueryPlugin(), u
        })
    }(ws)), ws.exports
}
var x2 = v2();
const y2 = Xf(x2);
var _o = {
        exports: {}
    },
    If;

function w2() {
    return If || (If = 1, function(n) {
        (function() {
            function t(_, E) {
                document.addEventListener ? _.addEventListener("scroll", E, !1) : _.attachEvent("scroll", E)
            }

            function e(_) {
                document.body ? _() : document.addEventListener ? document.addEventListener("DOMContentLoaded", function E() {
                    document.removeEventListener("DOMContentLoaded", E), _()
                }) : document.attachEvent("onreadystatechange", function E() {
                    (document.readyState == "interactive" || document.readyState == "complete") && (document.detachEvent("onreadystatechange", E), _())
                })
            }

            function r(_) {
                this.g = document.createElement("div"), this.g.setAttribute("aria-hidden", "true"), this.g.appendChild(document.createTextNode(_)), this.h = document.createElement("span"), this.i = document.createElement("span"), this.m = document.createElement("span"), this.j = document.createElement("span"), this.l = -1, this.h.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.i.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.j.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.m.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;", this.h.appendChild(this.m), this.i.appendChild(this.j), this.g.appendChild(this.h), this.g.appendChild(this.i)
            }

            function a(_, E) {
                _.g.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" + E + ";"
            }

            function o(_) {
                var E = _.g.offsetWidth,
                    b = E + 100;
                return _.j.style.width = b + "px", _.i.scrollLeft = b, _.h.scrollLeft = _.h.scrollWidth + 100, _.l !== E ? (_.l = E, !0) : !1
            }

            function l(_, E) {
                function b() {
                    var M = L;
                    o(M) && M.g.parentNode !== null && E(M.l)
                }
                var L = _;
                t(_.h, b), t(_.i, b), o(_)
            }

            function u(_, E, b) {
                E = E || {}, b = b || window, this.family = _, this.style = E.style || "normal", this.weight = E.weight || "normal", this.stretch = E.stretch || "normal", this.context = b
            }
            var f = null,
                d = null,
                p = null,
                v = null;

            function m(_) {
                return d === null && (x(_) && /Apple/.test(window.navigator.vendor) ? (_ = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent), d = !!_ && 603 > parseInt(_[1], 10)) : d = !1), d
            }

            function x(_) {
                return v === null && (v = !!_.document.fonts), v
            }

            function T(_, E) {
                var b = _.style,
                    L = _.weight;
                if (p === null) {
                    var M = document.createElement("div");
                    try {
                        M.style.font = "condensed 100px sans-serif"
                    } catch {}
                    p = M.style.font !== ""
                }
                return [b, L, p ? _.stretch : "", "100px", E].join(" ")
            }
            u.prototype.load = function(_, E) {
                var b = this,
                    L = _ || "BESbswy",
                    M = 0,
                    C = E || 3e3,
                    R = new Date().getTime();
                return new Promise(function(D, N) {
                    if (x(b.context) && !m(b.context)) {
                        var z = new Promise(function(q, Y) {
                                function G() {
                                    new Date().getTime() - R >= C ? Y(Error("" + C + "ms timeout exceeded")) : b.context.document.fonts.load(T(b, '"' + b.family + '"'), L).then(function(V) {
                                        1 <= V.length ? q() : setTimeout(G, 25)
                                    }, Y)
                                }
                                G()
                            }),
                            F = new Promise(function(q, Y) {
                                M = setTimeout(function() {
                                    Y(Error("" + C + "ms timeout exceeded"))
                                }, C)
                            });
                        Promise.race([F, z]).then(function() {
                            clearTimeout(M), D(b)
                        }, N)
                    } else e(function() {
                        function q() {
                            var st;
                            (st = tt != -1 && nt != -1 || tt != -1 && et != -1 || nt != -1 && et != -1) && ((st = tt != nt && tt != et && nt != et) || (f === null && (st = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), f = !!st && (536 > parseInt(st[1], 10) || parseInt(st[1], 10) === 536 && 11 >= parseInt(st[2], 10))), st = f && (tt == _t && nt == _t && et == _t || tt == yt && nt == yt && et == yt || tt == ut && nt == ut && et == ut)), st = !st), st && (lt.parentNode !== null && lt.parentNode.removeChild(lt), clearTimeout(M), D(b))
                        }

                        function Y() {
                            if (new Date().getTime() - R >= C) lt.parentNode !== null && lt.parentNode.removeChild(lt), N(Error("" + C + "ms timeout exceeded"));
                            else {
                                var st = b.context.document.hidden;
                                (st === !0 || st === void 0) && (tt = G.g.offsetWidth, nt = V.g.offsetWidth, et = X.g.offsetWidth, q()), M = setTimeout(Y, 50)
                            }
                        }
                        var G = new r(L),
                            V = new r(L),
                            X = new r(L),
                            tt = -1,
                            nt = -1,
                            et = -1,
                            _t = -1,
                            yt = -1,
                            ut = -1,
                            lt = document.createElement("div");
                        lt.dir = "ltr", a(G, T(b, "sans-serif")), a(V, T(b, "serif")), a(X, T(b, "monospace")), lt.appendChild(G.g), lt.appendChild(V.g), lt.appendChild(X.g), b.context.document.body.appendChild(lt), _t = G.g.offsetWidth, yt = V.g.offsetWidth, ut = X.g.offsetWidth, Y(), l(G, function(st) {
                            tt = st, q()
                        }), a(G, T(b, '"' + b.family + '",sans-serif')), l(V, function(st) {
                            nt = st, q()
                        }), a(V, T(b, '"' + b.family + '",serif')), l(X, function(st) {
                            et = st, q()
                        }), a(X, T(b, '"' + b.family + '",monospace'))
                    })
                })
            }, n.exports = u
        })()
    }(_o)), _o.exports
}
var T2 = w2();
const Zc = Xf(T2);
window.HTMLElement && !HTMLElement.prototype.forEach && (HTMLElement.prototype.forEach = function(n, t) {
    t = t || window, n.call(t, this, this, this)
});
window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = function(n, t) {
    t = t || window;
    for (var e = 0; e < this.length; e++) n.call(t, this[e], e, this)
});
window.NodeList && !NodeList.prototype.map && (NodeList.prototype.map = Array.prototype.map);
window.NodeList && !NodeList.prototype.find && (NodeList.prototype.find = Array.prototype.find);
window.NodeList && !NodeList.prototype.filter && (NodeList.prototype.filter = Array.prototype.filter);
const E2 = 768,
    Ir = n => {
        const t = n.getBoundingClientRect(),
            e = window.scrollY ?? 0;
        return {
            bottom: t.bottom + e,
            height: t.height,
            left: t.left,
            right: t.right,
            top: t.top + e,
            width: t.width
        }
    },
    S2 = `
precision highp float;
precision highp sampler2D;

varying vec2 vUv;

uniform sampler2D uVelocity;
uniform sampler2D uSource;
uniform vec2 texelSize;
uniform vec2 dyeTexelSize;
uniform float dt;
uniform float dissipation;

vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
  vec2 st = uv / tsize - 0.5;
  
  vec2 iuv = floor(st);
  vec2 fuv = fract(st);

  vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
  vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
  vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
  vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);

  return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
}

void main () {
  vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;

  gl_FragColor = dissipation * bilerp(uSource, coord, dyeTexelSize);
  gl_FragColor.a = 1.0;
}


`,
    b2 = `

precision highp float;
precision highp sampler2D;

varying vec2 vUv;

uniform sampler2D uVelocity;
uniform sampler2D uSource;
uniform vec2 texelSize;
uniform float dt;
uniform float dissipation;

void main () {
  vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;

  gl_FragColor = dissipation * texture2D(uSource, coord);
  gl_FragColor.a = 1.0;
}

`,
    bi = `
precision highp float;

attribute vec2 position;
attribute vec2 uv;

varying vec2 vUv;
varying vec2 vL;
varying vec2 vR;
varying vec2 vT;
varying vec2 vB;

uniform vec2 texelSize;

void main () {
  vUv = uv;

  vL = vUv - vec2(texelSize.x, 0.0);
  vR = vUv + vec2(texelSize.x, 0.0);
  vT = vUv + vec2(0.0, texelSize.y);
  vB = vUv - vec2(0.0, texelSize.y);

  gl_Position = vec4(position, 0, 1);
}


`,
    A2 = `
precision mediump float;
precision mediump sampler2D;

varying highp vec2 vUv;

uniform sampler2D uTexture;
uniform float value;

void main () {
  gl_FragColor = value * texture2D(uTexture, vUv);
}

`,
    R2 = `

precision mediump float;
precision mediump sampler2D;

varying highp vec2 vUv;
varying highp vec2 vL;
varying highp vec2 vR;
varying highp vec2 vT;
varying highp vec2 vB;

uniform sampler2D uVelocity;

void main () {
  float L = texture2D(uVelocity, vL).y;
  float R = texture2D(uVelocity, vR).y;
  float T = texture2D(uVelocity, vT).x;
  float B = texture2D(uVelocity, vB).x;

  float vorticity = R - L - T + B;

  gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
}


`,
    M2 = `

precision mediump float;
precision mediump sampler2D;

varying highp vec2 vUv;
varying highp vec2 vL;
varying highp vec2 vR;
varying highp vec2 vT;
varying highp vec2 vB;

uniform sampler2D uVelocity;

void main () {
  float L = texture2D(uVelocity, vL).x;
  float R = texture2D(uVelocity, vR).x;
  float T = texture2D(uVelocity, vT).y;
  float B = texture2D(uVelocity, vB).y;

  vec2 C = texture2D(uVelocity, vUv).xy;

  if (vL.x < 0.0) { L = -C.x; }
  if (vR.x > 1.0) { R = -C.x; }
  if (vT.y > 1.0) { T = -C.y; }
  if (vB.y < 0.0) { B = -C.y; }

  float div = 0.5 * (R - L + T - B);

  gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
}


`,
    C2 = `

precision highp float;

uniform sampler2D tMap;
uniform sampler2D tFluid;
uniform float uTime;
varying vec2 vUv;

void main() {
  vec3 fluid = texture2D(tFluid, vUv).rgb;
  vec2 uv = vUv;
  vec2 uv2 = vUv - fluid.rg * 0.001;

  vec4 color = texture2D(tMap, uv2);

  vec3 rgb = fluid * 0.003;

  // color.r = texture2D(tMap, vec2(uv.x + rgb.x, uv.y + rgb.y)).r;
  color.g = texture2D(tMap, vec2(uv.x - rgb.x, uv.y + rgb.y)).g;
  color.b = texture2D(tMap, vec2(uv.x - rgb.x, uv.y + rgb.y)).b;


  gl_FragColor = color;
}


`,
    P2 = `

precision mediump float;
precision mediump sampler2D;

varying highp vec2 vUv;
varying highp vec2 vL;
varying highp vec2 vR;
varying highp vec2 vT;
varying highp vec2 vB;

uniform sampler2D uPressure;
uniform sampler2D uVelocity;

void main () {
  float L = texture2D(uPressure, vL).x;
  float R = texture2D(uPressure, vR).x;
  float T = texture2D(uPressure, vT).x;
  float B = texture2D(uPressure, vB).x;

  vec2 velocity = texture2D(uVelocity, vUv).xy;

  velocity.xy -= vec2(R - L, T - B);

  gl_FragColor = vec4(velocity, 0.0, 1.0);
}


`,
    O2 = `

precision mediump float;
precision mediump sampler2D;

varying highp vec2 vUv;
varying highp vec2 vL;
varying highp vec2 vR;
varying highp vec2 vT;
varying highp vec2 vB;

uniform sampler2D uPressure;
uniform sampler2D uDivergence;

void main () {
  float L = texture2D(uPressure, vL).x;
  float R = texture2D(uPressure, vR).x;
  float T = texture2D(uPressure, vT).x;
  float B = texture2D(uPressure, vB).x;
  float C = texture2D(uPressure, vUv).x;

  float divergence = texture2D(uDivergence, vUv).x;
  float pressure = (L + R + B + T - divergence) * 0.25;

  gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
}


`,
    L2 = `

precision highp float;
precision highp sampler2D;

varying vec2 vUv;

uniform sampler2D uTarget;
uniform float aspectRatio;
uniform vec3 color;
uniform vec2 point;
uniform float radius;

void main () {
  vec2 p = vUv - point.xy;

  p.x *= aspectRatio;

  vec3 splat = exp(-dot(p, p) / radius) * color;
  vec3 base = texture2D(uTarget, vUv).xyz;

  gl_FragColor = vec4(base + splat, 1.0);
}


`,
    D2 = `

precision highp float;
precision highp sampler2D;

varying vec2 vUv;
varying vec2 vL;
varying vec2 vR;
varying vec2 vT;
varying vec2 vB;

uniform sampler2D uVelocity;
uniform sampler2D uCurl;
uniform float curl;
uniform float dt;

void main () {
  float L = texture2D(uCurl, vL).x;
  float R = texture2D(uCurl, vR).x;
  float T = texture2D(uCurl, vT).x;
  float B = texture2D(uCurl, vB).x;
  float C = texture2D(uCurl, vUv).x;

  vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));

  force /= length(force) + 0.0001;
  force *= curl * C;
  force.y *= -1.0;

  vec2 vel = texture2D(uVelocity, vUv).xy;

  gl_FragColor = vec4(vel + force * dt, 0.0, 1.0);
}


`,
    F2 = `

precision highp float;

uniform sampler2D tMap;
uniform vec4 uResolution;

varying vec2 vUv;

void main() {
  vec2 uv = (vUv - vec2(0.5)) * uResolution.zw + vec2(0.5);
  vec4 color = texture2D(tMap, uv);

  gl_FragColor = color;
}


`,
    I2 = `

precision highp float;

attribute vec2 uv;
attribute vec3 position;
attribute vec3 normal;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat3 normalMatrix;

varying vec2 vUv;

void main() {
  vUv = uv;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}


`,
    z2 = `

precision highp float;

uniform sampler2D tMap;
uniform vec2 imageSize;
uniform vec2 containerSize;
uniform float uBorderRadius;

varying vec2 vUv;

vec2 cover(vec2 uv, vec2 containerSize, vec2 imageSize) {
    float containerRatio = containerSize.x / containerSize.y;
    float imageRatio = imageSize.x / imageSize.y;
    vec2 scale;
    vec2 offset;
    
    if(imageRatio > containerRatio) {
        scale = vec2(containerSize.y / imageSize.y);
        offset = vec2((containerSize.x - imageSize.x * scale.x) * 0.5, 0.0);
    } else {
        scale = vec2(containerSize.x / imageSize.x);
        offset = vec2(0.0, (containerSize.y - imageSize.y * scale.y) * 0.5);
    }
    
    vec2 adjustedUV = (uv * containerSize - offset) / (imageSize * scale);
    return adjustedUV;
}

float calcDistance(vec2 uv) {
    // Convert to -1 to 1 space
    vec2 position = uv * 2.0 - 1.0;
    // Calculate distance from edges
    vec2 halfSize = vec2(1.0) - uBorderRadius;
    vec2 delta = abs(position) - halfSize;
    // Calculate rounded corner distance
    float dist = length(max(delta, 0.0)) + min(max(delta.x, delta.y), 0.0);
    return smoothstep(uBorderRadius - 0.005, uBorderRadius + 0.005, dist);
}

void main() {
    vec2 adjustedUV = cover(vUv, containerSize, imageSize);
    
    // Discard out-of-bounds fragments
    if(adjustedUV.x < 0.0 || adjustedUV.x > 1.0 || adjustedUV.y < 0.0 || adjustedUV.y > 1.0) {
        discard;
    }
    
    vec4 color = texture2D(tMap, adjustedUV);
    float borderAlpha = 1.0 - calcDistance(vUv);
    
    gl_FragColor = vec4(color.rgb, color.a * borderAlpha);
}

`,
    N2 = `

precision highp float;

attribute vec2 uv;
attribute vec3 position;
attribute vec3 normal;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat3 normalMatrix;

varying vec2 vUv;

void main() {
  vUv = uv;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}


`,
    B2 = `

precision highp float;

uniform sampler2D tMap;
uniform vec4 uResolution;
uniform float uAlpha;

varying vec2 vUv;

void main() {
  vec2 uv = (vUv - vec2(0.5)) * uResolution.zw + vec2(0.5);
  vec4 color = texture2D(tMap, uv);
  
  // Output the color directly, apply alpha
  gl_FragColor = vec4(color.rgb, color.a * uAlpha);
}


`,
    U2 = `

precision highp float;

attribute vec2 uv;
attribute vec3 position;
attribute vec3 normal;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat3 normalMatrix;

varying vec2 vUv;

void main() {
  vUv = uv;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}


`;

function W2(n, t, e, r, a, o = 5) {
    o = {
        tl: o,
        tr: o,
        br: o,
        bl: o
    }, n.beginPath(), n.moveTo(t + o.tl, e), n.lineTo(t + r - o.tr, e), n.quadraticCurveTo(t + r, e, t + r, e + o.tr), n.lineTo(t + r, e + a - o.br), n.quadraticCurveTo(t + r, e + a, t + r - o.br, e + a), n.lineTo(t + o.bl, e + a), n.quadraticCurveTo(t, e + a, t, e + a - o.bl), n.lineTo(t, e + o.tl), n.quadraticCurveTo(t, e, t + o.tl, e), n.closePath(), n.stroke()
}
class k2 {
    constructor({
        canvas: t,
        element: e,
        geometry: r,
        scene: a
    }) {
        var v;
        this.canvas = t, this.element = e, this.geometry = r, this.scene = a, this.element.setAttribute("data-gl-text-active", ""), this.bounds = Ir(this.element);
        const o = document.createElement("canvas"),
            l = o.getContext("2d"),
            u = ((v = this.element.querySelector("[data-gl-background-line]")) == null ? void 0 : v.offsetLeft) || 0,
            f = 4,
            d = this.bounds.height * 2,
            p = this.bounds.width * 2;
        o.height = d, o.width = p, l.strokeStyle = "#fff", l.lineWidth = f, l.beginPath(), l.moveTo(u * 2, 0), l.lineTo(u * 2, d - f / 2), l.stroke(), l.closePath(), W2(l, 1, 1, p - f / 2, d - f / 2, 15), this.createImage(o)
    }
    createImage(t) {
        const e = new Image;
        e.onload = () => this.createMesh(e), e.src = t.toDataURL("image/webp", 1)
    }
    createMesh(t) {
        const e = new pn(this.canvas.gl, {
            premultiplyAlpha: !0
        });
        e.image = t;
        const r = new Fe(this.canvas.gl, {
            fragment: F2,
            vertex: I2,
            uniforms: {
                tMap: {
                    value: e
                },
                tCover: {
                    value: null
                },
                uAlpha: {
                    value: 1
                },
                uNoise: {
                    value: 0
                },
                uOpacity: {
                    value: 1
                },
                uResolution: {
                    value: [0, 0, 0, 0]
                },
                uTime: {
                    value: 0
                },
                uTransition: {
                    value: 0
                }
            }
        });
        this.mesh = new Ie(this.canvas.gl, {
            geometry: this.geometry,
            program: r
        }), this.mesh.setParent(this.scene)
    }
    onResize() {
        this.bounds = Ir(this.element)
    }
    onLoop(t) {
        if (!this.bounds || !this.mesh) return;
        const e = this.bounds.height / this.bounds.width;
        let r, a;
        this.mesh.scale.y / this.mesh.scale.x > e ? (r = this.mesh.scale.x / this.mesh.scale.y * e, a = 1) : (r = 1, a = this.mesh.scale.y / this.mesh.scale.x / e), this.mesh.program.uniforms.uResolution.value = [this.mesh.scale.x, this.mesh.scale.y, r, a], this.mesh.scale.x = this.canvas.sizes.x * this.bounds.width / this.canvas.viewport.x, this.mesh.scale.y = this.canvas.sizes.y * this.bounds.height / this.canvas.viewport.y;
        const o = this.bounds.left,
            l = this.bounds.top - t,
            u = -(this.canvas.sizes.x / 2) + this.mesh.scale.x / 2,
            f = this.canvas.sizes.y / 2 - this.mesh.scale.y / 2;
        this.mesh.position.x = u + o / this.canvas.viewport.x * this.canvas.sizes.x, this.mesh.position.y = f - l / this.canvas.viewport.y * this.canvas.sizes.y
    }
}
class q2 {
    constructor({
        canvas: t,
        element: e,
        geometry: r,
        scene: a
    }) {
        this.canvas = t, this.element = e, this.geometry = r, this.scene = a, this.imgElement = this.element.querySelector("img"), this.imgElement && (this.imgElement.setAttribute("crossorigin", "anonymous"), this.imgElement.setAttribute("data-gl-media-active", ""), this.containerSize = [0, 0], this.imageSize = [0, 0], this.bounds = Ir(this.element), this.createTexture(), this.createMesh(), this.updateSizes())
    }
    createTexture() {
        this.texture = new pn(this.canvas.gl, {
            image: this.imgElement,
            premultiplyAlpha: !0
        }), this.imgElement.onload = () => {
            this.texture.image = this.imgElement, this.texture.needsUpdate = !0, this.imageSize = [this.imgElement.naturalWidth, this.imgElement.naturalHeight], this.updateSizes()
        }
    }
    createMesh() {
        this.program = new Fe(this.canvas.gl, {
            fragment: z2,
            vertex: N2,
            uniforms: {
                tMap: {
                    value: this.texture
                },
                uResolution: {
                    value: [0, 0, 0, 0]
                },
                containerSize: {
                    value: this.containerSize
                },
                imageSize: {
                    value: this.imageSize
                },
                uBorderRadius: {
                    value: .015
                }
            },
            transparent: !0
        }), this.mesh = new Ie(this.canvas.gl, {
            geometry: this.geometry,
            program: this.program
        }), this.mesh.setParent(this.scene), this.updateSizes()
    }
    updateSizes() {
        this.containerSize = [this.bounds.width, this.bounds.height], this.mesh && (this.mesh.program.uniforms.containerSize.value = this.containerSize, this.mesh.program.uniforms.imageSize.value = this.imageSize)
    }
    onResize() {
        this.bounds = Ir(this.element), this.updateSizes()
    }
    onLoop(t) {
        if (!this.bounds || !this.mesh) return;
        this.mesh.scale.x = this.canvas.sizes.x * this.bounds.width / this.canvas.viewport.x, this.mesh.scale.y = this.canvas.sizes.y * this.bounds.height / this.canvas.viewport.y;
        const e = this.bounds.left,
            r = this.bounds.top - t,
            a = -(this.canvas.sizes.x / 2) + this.mesh.scale.x / 2,
            o = this.canvas.sizes.y / 2 - this.mesh.scale.y / 2;
        this.mesh.position.x = a + e / this.canvas.viewport.x * this.canvas.sizes.x, this.mesh.position.y = o - r / this.canvas.viewport.y * this.canvas.sizes.y, this.mesh.program.uniforms.uResolution.value = [this.containerSize[0], this.containerSize[1], 1 / this.containerSize[0], 1 / this.containerSize[1]]
    }
}
class G2 {
    constructor({
        canvas: t,
        element: e,
        geometry: r,
        scene: a
    }) {
        this.canvas = t, this.element = e, this.geometry = r, this.scene = a, this.color = this.element.dataset.color || "white";
        const o = [new FontFace("Satoshi", "url(/Satoshi-Regular.ttf)"), new FontFace("Mono", "url(/IBMPlexMono-Regular.ttf)")];
        Promise.all(o.map(l => l.load())).then(l => {
            l.forEach(u => document.fonts.add(u)), this.initText()
        }).catch(l => {
            console.error("Failed to load fonts:", l), this.initText()
        })
    }
    initText() {
        this.element.setAttribute("data-gl-text-active", ""), this.bounds = Ir(this.element);
        const t = document.createElement("canvas"),
            e = t.getContext("2d"),
            r = Math.min(window.devicePixelRatio, 2),
            a = 2;
        t.width = this.bounds.width * r * a, t.height = this.bounds.height * r * a;
        const o = getComputedStyle(this.element),
            l = parseFloat(o.fontSize),
            u = parseFloat(o.lineHeight) || l * 1.2,
            f = o.letterSpacing !== "normal" ? parseFloat(o.letterSpacing) * r * a : 0,
            p = o.fontFamily.includes("Mono") ? "Mono" : "Satoshi";
        e.font = `${o.fontWeight} ${l*r*a}px ${p}`, e.textBaseline = "middle", e.textAlign = "left", e.imageSmoothingEnabled = !0, e.imageSmoothingQuality = "high";
        let v = this.element.textContent.trim();
        this.element.dataset.glText === "uppercase" && (v = v.toUpperCase());
        const m = v.split(" "),
            x = [];
        let T = [],
            _ = 0;
        const E = t.width,
            b = L => {
                let M = 0;
                for (let C = 0; C < L.length; C++) M += e.measureText(L[C]).width, C < L.length - 1 && (M += f);
                return M
            };
        for (const L of m) {
            const M = b(L),
                C = e.measureText(" ").width;
            _ + M + (T.length ? C : 0) > E ? T.length ? (x.push(T.join(" ")), T = [L], _ = M) : (x.push(L), T = [], _ = 0) : (T.push(L), _ += M + (T.length > 1 ? C : 0))
        }
        T.length && x.push(T.join(" ")), e.clearRect(0, 0, t.width, t.height), e.fillStyle = this.color, x.forEach((L, M) => {
            const C = M * u * r * a + u * r * a / 2;
            let R = 0,
                D = 0;
            const N = L.split("");
            let z = 0;
            for (let F = 0; F < N.length; F++) z += e.measureText(N[F]).width, F < N.length - 1 && N[F] !== " " && N[F + 1] !== " " && (z += f);
            if (o.textAlign === "center") R = (t.width - z) / 2;
            else if (o.textAlign === "right") R = t.width - z;
            else if (o.textAlign === "justify" && M < x.length - 1) {
                const F = L.split(" ").length - 1;
                F > 0 && (D = (t.width - z) / F)
            }
            for (let F = 0; F < N.length; F++) {
                const q = N[F];
                q === " " && o.textAlign === "justify" && M < x.length - 1 ? R += e.measureText(" ").width + D : (e.fillText(q, R, C), R += e.measureText(q).width, q !== " " && F < N.length - 1 && N[F + 1] !== " " && (R += f))
            }
        }), this.createImage(t)
    }
    createImage(t) {
        const e = new Image;
        e.onload = () => this.createMesh(e), e.onerror = () => console.error("Failed to load text image"), e.src = t.toDataURL("image/webp", 1)
    }
    createMesh(t) {
        const e = new pn(this.canvas.gl, {
            image: t,
            minFilter: this.canvas.gl.LINEAR_MIPMAP_LINEAR,
            magFilter: this.canvas.gl.LINEAR
        });
        e.needsUpdate = !0;
        const r = new Fe(this.canvas.gl, {
            fragment: B2,
            vertex: U2,
            uniforms: {
                tMap: {
                    value: e
                },
                tCover: {
                    value: null
                },
                uAlpha: {
                    value: 1
                },
                uNoise: {
                    value: 0
                },
                uOpacity: {
                    value: 1
                },
                uResolution: {
                    value: [0, 0, 0, 0]
                },
                uTime: {
                    value: 0
                },
                uTransition: {
                    value: 0
                }
            },
            transparent: !0,
            depthTest: !1,
            depthWrite: !1
        });
        this.mesh = new Ie(this.canvas.gl, {
            geometry: this.geometry,
            program: r
        }), this.mesh.setParent(this.scene), this.onResize()
    }
    onResize() {
        var t;
        this.mesh && (this.bounds = Ir(this.element), this.mesh.scale.x = this.canvas.sizes.x * this.bounds.width / this.canvas.viewport.x, this.mesh.scale.y = this.canvas.sizes.y * this.bounds.height / this.canvas.viewport.y, this.updatePosition(((t = this.canvas.lenis) == null ? void 0 : t.scroll) || 0))
    }
    updatePosition(t) {
        if (!this.bounds || !this.mesh) return;
        const e = this.bounds.left,
            r = this.bounds.top - t,
            a = -(this.canvas.sizes.x / 2) + this.mesh.scale.x / 2,
            o = this.canvas.sizes.y / 2 - this.mesh.scale.y / 2;
        this.mesh.position.x = a + e / this.canvas.viewport.x * this.canvas.sizes.x, this.mesh.position.y = o - r / this.canvas.viewport.y * this.canvas.sizes.y
    }
    onLoop(t) {
        if (this.updatePosition(t), !this.bounds || !this.mesh) return;
        const e = this.bounds.height / this.bounds.width;
        let r = 1,
            a = 1;
        this.mesh.scale.y / this.mesh.scale.x > e ? r = this.mesh.scale.x / this.mesh.scale.y * e : a = this.mesh.scale.y / this.mesh.scale.x / e, this.mesh.program.uniforms.uResolution.value = [this.mesh.scale.x, this.mesh.scale.y, r, a]
    }
}
class V2 extends Wo {
    constructor({
        canvas: t
    }) {
        super(), this.canvas = t;
        const e = new ko(this.canvas.gl, {
            heightSegments: 1,
            widthSegments: 1
        });
        this.backgrounds = document.querySelectorAll("[data-gl-background]").map(r => new k2({
            canvas: this.canvas,
            element: r,
            geometry: e,
            scene: this
        })), this.medias = document.querySelectorAll("[data-gl-media]").map(r => new q2({
            canvas: this.canvas,
            element: r,
            geometry: e,
            scene: this
        })), this.texts = document.querySelectorAll("[data-gl-text]").map(r => new G2({
            canvas: this.canvas,
            element: r,
            geometry: e,
            scene: this
        }))
    }
    onResize() {
        var t, e, r;
        (t = this.backgrounds) == null || t.forEach(a => a.onResize()), (e = this.medias) == null || e.forEach(a => a.onResize()), (r = this.texts) == null || r.forEach(a => a.onResize())
    }
    onLoop(t) {
        var e, r, a;
        (e = this.backgrounds) == null || e.forEach(o => o.onLoop(t)), (r = this.medias) == null || r.forEach(o => o.onLoop(t)), (a = this.texts) == null || a.forEach(o => o.onLoop(t))
    }
}
const Bo = new px({
        alpha: !0,
        antialias: !0,
        dpr: window.devicePixelRatio
    }),
    gt = Bo.gl;
gt.canvas.style.opacity = "0";
gt.canvas.style.transition = "opacity 0.5s ease-in-out";

function Sr(n, t, e, r) {
    if (!X2(n, t, e, r)) switch (t) {
        case n.R16F:
            return Sr(n, n.RG16F, n.RG, r);
        case n.RG16F:
            return Sr(n, n.RGBA16F, n.RGBA, r);
        default:
            return null
    }
    return {
        internalFormat: t,
        format: e
    }
}

function X2(n, t, e, r) {
    let a = n.createTexture();
    n.bindTexture(n.TEXTURE_2D, a), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.NEAREST), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.NEAREST), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, n.CLAMP_TO_EDGE), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, n.CLAMP_TO_EDGE), n.texImage2D(n.TEXTURE_2D, 0, t, 4, 4, 0, e, r, null);
    let o = n.createFramebuffer();
    return n.bindFramebuffer(n.FRAMEBUFFER, o), n.framebufferTexture2D(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, a, 0), n.checkFramebufferStatus(n.FRAMEBUFFER) == n.FRAMEBUFFER_COMPLETE
}

function mo(n, {
    width: t,
    height: e,
    wrapS: r,
    wrapT: a,
    minFilter: o = n.LINEAR,
    magFilter: l = o,
    type: u,
    format: f,
    internalFormat: d,
    depth: p
} = {}) {
    const v = {
            width: t,
            height: e,
            wrapS: r,
            wrapT: a,
            minFilter: o,
            magFilter: l,
            type: u,
            format: f,
            internalFormat: d,
            depth: p
        },
        m = {
            read: new Mr(n, v),
            write: new Mr(n, v),
            swap: () => {
                let x = m.read;
                m.read = m.write, m.write = x
            }
        };
    return m
}
const $e = 128,
    ms = 512,
    H2 = 3;
let $2 = .93,
    Y2 = .9,
    K2 = .8,
    Z2 = 20,
    Q2 = .2;
const Ai = {
        value: new Mi(1 / $e)
    },
    Qc = gt.renderer.extensions[`OES_texture_${gt.renderer.isWebgl2?"":"half_"}float_linear`],
    ci = gt.renderer.isWebgl2 ? gt.HALF_FLOAT : gt.renderer.extensions.OES_texture_half_float.HALF_FLOAT_OES,
    zf = Qc ? gt.LINEAR : gt.NEAREST;
let Ke, Ri, It;
gt.renderer.isWebgl2 ? (Ke = Sr(gt, gt.RGBA16F, gt.RGBA, ci), Ri = Sr(gt, gt.RG16F, gt.RG, ci), It = Sr(gt, gt.R16F, gt.RED, ci)) : (Ke = Sr(gt, gt.RGBA, gt.RGBA, ci), Ri = Ke, It = Ke);
gt.renderer.getExtension("OES_standard_derivatives");
const wr = new Mi,
    J2 = {
        37: "left",
        38: "up",
        39: "right",
        40: "down",
        65: "a",
        66: "b"
    },
    Nf = ["up", "up", "down", "down", "left", "right", "left", "right", "b", "a"];
class j2 {
    constructor() {
        Qy(this), this.createScroll(), this.createRenderer(), this.createCamera(), this.createPost(), this.createMouseFluid(), this.createScene(), this.onResize({
            height: window.innerHeight,
            width: window.innerWidth
        }), this.onResize = Ky.debounce(this.onResize.bind(this), 400), window.addEventListener("resize", this.onResize), Promise.all([new Promise(t => setTimeout(t, 100))]).then(() => {
            this.gl.canvas.style.opacity = "1", this.onLoop()
        }), this.isKonami = !1, this.konamiCodePosition = 0, document.addEventListener("keydown", this.onKeydown.bind(this))
    }
    onKeydown({
        keyCode: t
    }) {
        const e = J2[t],
            r = Nf[this.konamiCodePosition];
        e == r ? (this.konamiCodePosition++, this.konamiCodePosition == Nf.length && (this.activateCheats(), this.konamiCodePosition = 0)) : this.konamiCodePosition = 0
    }
    activateCheats() {
        this.isKonami, this.isKonami = !this.isKonami
    }
    createScroll() {
        this.lenis = new Hy({
            infinite: !0
        })
    }
    createRenderer() {
        this.renderer = Bo, this.gl = Bo.gl, this.gl.canvas.classList.add("canvas"), this.gl.clearColor(0, 0, 0, 0), document.body.appendChild(this.gl.canvas)
    }
    createPost() {
        this.post = new Iy(this.gl), this.pass = this.post.addPass({
            fragment: C2,
            uniforms: {
                tFluid: {
                    value: null
                },
                uTime: {
                    value: 0
                }
            }
        })
    }
    createMouseFluid() {
        this.density = mo(this.gl, {
            width: ms,
            height: ms,
            type: ci,
            format: Ke == null ? void 0 : Ke.format,
            internalFormat: Ke == null ? void 0 : Ke.internalFormat,
            minFilter: zf,
            depth: !1
        }), this.velocity = mo(this.gl, {
            width: $e,
            height: $e,
            type: ci,
            format: Ri == null ? void 0 : Ri.format,
            internalFormat: Ri == null ? void 0 : Ri.internalFormat,
            minFilter: zf,
            depth: !1
        }), this.pressure = mo(this.gl, {
            width: $e,
            height: $e,
            type: ci,
            format: It == null ? void 0 : It.format,
            internalFormat: It == null ? void 0 : It.internalFormat,
            minFilter: gt.NEAREST,
            depth: !1
        }), this.divergence = new Mr(this.gl, {
            width: $e,
            height: $e,
            type: ci,
            format: It == null ? void 0 : It.format,
            internalFormat: It == null ? void 0 : It.internalFormat,
            minFilter: gt.NEAREST,
            depth: !1
        }), this.curl = new Mr(this.gl, {
            width: $e,
            height: $e,
            type: ci,
            format: It == null ? void 0 : It.format,
            internalFormat: It == null ? void 0 : It.internalFormat,
            minFilter: gt.NEAREST,
            depth: !1
        }), this.triangle = new Uo(this.gl, {
            position: {
                size: 2,
                data: new Float32Array([-1, -1, 3, -1, -1, 3])
            },
            uv: {
                size: 2,
                data: new Float32Array([0, 0, 2, 0, 0, 2])
            }
        }), this.clearProgram = new Ie(this.gl, {
            geometry: this.triangle,
            program: new Fe(this.gl, {
                vertex: bi,
                fragment: A2,
                uniforms: {
                    texelSize: Ai,
                    uTexture: {
                        value: null
                    },
                    value: {
                        value: K2
                    }
                },
                depthTest: !1,
                depthWrite: !1
            })
        }), this.splatProgram = new Ie(this.gl, {
            geometry: this.triangle,
            program: new Fe(this.gl, {
                vertex: bi,
                fragment: L2,
                uniforms: {
                    texelSize: Ai,
                    uTarget: {
                        value: null
                    },
                    aspectRatio: {
                        value: 1
                    },
                    color: {
                        value: new my
                    },
                    point: {
                        value: new Mi
                    },
                    radius: {
                        value: Q2 / 100
                    }
                },
                depthTest: !1,
                depthWrite: !1
            })
        }), this.advectionProgram = new Ie(this.gl, {
            geometry: this.triangle,
            program: new Fe(this.gl, {
                vertex: bi,
                fragment: Qc ? b2 : S2,
                uniforms: {
                    texelSize: Ai,
                    dyeTexelSize: {
                        value: new Mi(1 / ms)
                    },
                    uVelocity: {
                        value: null
                    },
                    uSource: {
                        value: null
                    },
                    dt: {
                        value: .016
                    },
                    dissipation: {
                        value: 1
                    }
                },
                depthTest: !1,
                depthWrite: !1
            })
        }), this.divergenceProgram = new Ie(this.gl, {
            geometry: this.triangle,
            program: new Fe(this.gl, {
                vertex: bi,
                fragment: M2,
                uniforms: {
                    texelSize: Ai,
                    uVelocity: {
                        value: null
                    }
                },
                depthTest: !1,
                depthWrite: !1
            })
        }), this.curlProgram = new Ie(this.gl, {
            geometry: this.triangle,
            program: new Fe(this.gl, {
                vertex: bi,
                fragment: R2,
                uniforms: {
                    texelSize: Ai,
                    uVelocity: {
                        value: null
                    }
                },
                depthTest: !1,
                depthWrite: !1
            })
        }), this.vorticityProgram = new Ie(this.gl, {
            geometry: this.triangle,
            program: new Fe(this.gl, {
                vertex: bi,
                fragment: D2,
                uniforms: {
                    texelSize: Ai,
                    uVelocity: {
                        value: null
                    },
                    uCurl: {
                        value: null
                    },
                    curl: {
                        value: Z2
                    },
                    dt: {
                        value: .016
                    }
                },
                depthTest: !1,
                depthWrite: !1
            })
        }), this.pressureProgram = new Ie(this.gl, {
            geometry: this.triangle,
            program: new Fe(this.gl, {
                vertex: bi,
                fragment: O2,
                uniforms: {
                    texelSize: Ai,
                    uPressure: {
                        value: null
                    },
                    uDivergence: {
                        value: null
                    }
                },
                depthTest: !1,
                depthWrite: !1
            })
        }), this.gradientSubtractProgram = new Ie(this.gl, {
            geometry: this.triangle,
            program: new Fe(this.gl, {
                vertex: bi,
                fragment: P2,
                uniforms: {
                    texelSize: Ai,
                    uPressure: {
                        value: null
                    },
                    uVelocity: {
                        value: null
                    }
                },
                depthTest: !1,
                depthWrite: !1
            })
        }), this.splats = [], window.addEventListener("touchstart", this.updateMouse, !1), window.addEventListener("touchmove", this.updateMouse, !1), window.addEventListener("mousemove", this.updateMouse, !1)
    }
    createCamera() {
        this.camera = new iy(this.gl), this.camera.fov = 45, this.camera.position.z = 1
    }
    createScene() {
        this.scene = new V2({
            canvas: this
        })
    }
    updateMouse(t) {
        t.changedTouches && t.changedTouches.length && (t.x = t.changedTouches[0].pageX, t.y = t.changedTouches[0].pageY), t.x === void 0 && (t.x = t.pageX, t.y = t.pageY), wr.isInit || (wr.isInit = !0, wr.set(t.x, t.y));
        const e = t.x - wr.x,
            r = t.y - wr.y;
        wr.set(t.x, t.y), (Math.abs(e) || Math.abs(r)) && this.splats.push({
            x: t.x / gt.renderer.width,
            y: 1 - t.y / gt.renderer.height,
            dx: e * 5,
            dy: r * -5
        })
    }
    splat({
        x: t,
        y: e,
        dx: r,
        dy: a
    }) {
        this.splatProgram.program.uniforms.uTarget.value = this.velocity.read.texture, this.splatProgram.program.uniforms.aspectRatio.value = gt.renderer.width / gt.renderer.height, this.splatProgram.program.uniforms.point.value.set(t, e), this.splatProgram.program.uniforms.color.value.set(r, a, 1), gt.renderer.render({
            scene: this.splatProgram,
            target: this.velocity.write,
            sort: !1,
            update: !1
        }), this.velocity.swap(), this.splatProgram.program.uniforms.uTarget.value = this.density.read.texture, gt.renderer.render({
            scene: this.splatProgram,
            target: this.density.write,
            sort: !1,
            update: !1
        }), this.density.swap()
    }
    onLoop(t) {
        var e;
        if ((e = this.lenis) == null || e.raf(t), window.innerWidth <= E2) return window.requestAnimationFrame(this.onLoop.bind(this));
        this.renderer.autoClear = !1;
        for (let r = this.splats.length - 1; r >= 0; r--) this.splat(this.splats.splice(r, 1)[0]);
        this.curlProgram.program.uniforms.uVelocity.value = this.velocity.read.texture, this.renderer.render({
            scene: this.curlProgram,
            target: this.curl,
            sort: !1,
            update: !1
        }), this.vorticityProgram.program.uniforms.uVelocity.value = this.velocity.read.texture, this.vorticityProgram.program.uniforms.uCurl.value = this.curl.texture, this.renderer.render({
            scene: this.vorticityProgram,
            target: this.velocity.write,
            sort: !1,
            update: !1
        }), this.velocity.swap(), this.divergenceProgram.program.uniforms.uVelocity.value = this.velocity.read.texture, this.renderer.render({
            scene: this.divergenceProgram,
            target: this.divergence,
            sort: !1,
            update: !1
        }), this.clearProgram.program.uniforms.uTexture.value = this.pressure.read.texture, this.renderer.render({
            scene: this.clearProgram,
            target: this.pressure.write,
            sort: !1,
            update: !1
        }), this.pressure.swap(), this.pressureProgram.program.uniforms.uDivergence.value = this.divergence.texture;
        for (let r = 0; r < H2; r++) this.pressureProgram.program.uniforms.uPressure.value = this.pressure.read.texture, this.renderer.render({
            scene: this.pressureProgram,
            target: this.pressure.write,
            sort: !1,
            update: !1
        }), this.pressure.swap();
        this.gradientSubtractProgram.program.uniforms.uPressure.value = this.pressure.read.texture, this.gradientSubtractProgram.program.uniforms.uVelocity.value = this.velocity.read.texture, this.renderer.render({
            scene: this.gradientSubtractProgram,
            target: this.velocity.write,
            sort: !1,
            update: !1
        }), this.velocity.swap(), this.advectionProgram.program.uniforms.dyeTexelSize.value.set(1 / $e), this.advectionProgram.program.uniforms.uVelocity.value = this.velocity.read.texture, this.advectionProgram.program.uniforms.uSource.value = this.velocity.read.texture, this.advectionProgram.program.uniforms.dissipation.value = Y2, this.renderer.render({
            scene: this.advectionProgram,
            target: this.velocity.write,
            sort: !1,
            update: !1
        }), this.velocity.swap(), this.advectionProgram.program.uniforms.dyeTexelSize.value.set(1 / ms), this.advectionProgram.program.uniforms.uVelocity.value = this.velocity.read.texture, this.advectionProgram.program.uniforms.uSource.value = this.density.read.texture, this.advectionProgram.program.uniforms.dissipation.value = $2, this.renderer.render({
            scene: this.advectionProgram,
            target: this.density.write,
            sort: !1,
            update: !1
        }), this.density.swap(), this.renderer.autoClear = !0, this.pass.uniforms.tFluid.value = this.density.read.texture, this.post.render({
            camera: this.camera,
            scene: this.scene
        }), this.scene.onLoop(this.lenis.scroll), window.requestAnimationFrame(this.onLoop.bind(this))
    }
    onResize() {
        const {
            innerHeight: t,
            innerWidth: e
        } = window;
        this.renderer.setSize(e, t), this.camera.perspective({
            aspect: e / t
        });
        const r = this.camera.fov * (Math.PI / 180),
            a = 2 * Math.tan(r / 2) * this.camera.position.z,
            o = a * this.camera.aspect;
        this.sizes = new Mi(o, a), this.viewport = new Mi(e, t), this.post.resize(), this.scene.onResize()
    }
}
const tT = () => {
        const n = navigator.userAgent || navigator.vendor || window.opera,
            t = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile|tablet/i.test(n),
            e = window.innerWidth < 1024;
        return t || e
    },
    eT = new Promise(n => {
        new Zc("Satoshi").load().then(() => {
            n()
        })
    }),
    iT = new Promise(n => {
        new Zc("Mono").load().then(() => {
            n()
        })
    }),
    rT = new Promise((n, t) => {
        y2(document.querySelectorAll("img"), {
            background: !0
        }, n)
    });
let nT = [eT, iT, rT];

function sT() {
    new j2();   
}

function aT() {
    const n = document.querySelector(".preloader"),
        t = document.querySelector(".preloader h1"),
        e = new Yc(t, {
            type: "chars,words",
            charsClass: "char",
            wordsClass: "word"
        }),
        r = Kc.timeline();
    r.to(e.chars, {
        color: "red",
        textShadow: "0 0 10px rgba(255, 0, 0, 0.7), 0 0 20px rgba(255, 0, 0, 0.5)",
        filter: "blur(5px)",
        stagger: {
            each: .1,
            from: "left"
        },
        ease: "power2.inOut"
    }), r.to(n, {
        duration: 1,
        filter: "blur(500px)"
    }, "a"), r.to(n, {
        opacity: 0,
        duration: 1,
        delay: .1
    }, "a")
}
window.addEventListener("DOMContentLoaded", () => {
    sT(), Promise.all(nT).then(() => {
        aT()
    })
});
Xv();