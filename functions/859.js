const function859 = function (t, e, i) {
    "use strict";
    var n = this && this.__extends || function () {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function (t, e) {
            t.__proto__ = e
        } || function (t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        };
        return function (e, i) {
            function n() {
                this.constructor = e
            }
            t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
        }
    }();
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = function (t) {
        function e() {
            return t.call(this, PIXI.Filter.defaultVertexSrc, ["varying vec2 vTextureCoord;", "varying vec2 vFilterCoord;", "uniform sampler2D uSampler;", "uniform sampler2D filterSampler;", "uniform float factor;", "uniform float mr;", "uniform float mg;", "uniform float mb;", "uniform float ma;", "uniform float ar;", "uniform float ag;", "uniform float ab;", "uniform float aa;", "void main(void){", "   vec4 sample = texture2D(uSampler, vTextureCoord);", "   vec4 ratio = vec4(sample.r * mr + ar  , sample.g * mg + ag , sample.b * mb + ab , sample.a * ma + aa);", "   vec4 blending = mix(sample,ratio ,factor);", "   gl_FragColor = blending;", "   gl_FragColor *= sample.a;", "}"].join("\n")) || this
        }
        return n(e, t), Object.defineProperty(e.prototype, "mr", {
            get: function () {
                return this.uniforms.mr
            },
            set: function (t) {
                this.uniforms.mr = t
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "mg", {
            get: function () {
                return this.uniforms.mg
            },
            set: function (t) {
                this.uniforms.mg = t
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "mb", {
            get: function () {
                return this.uniforms.mb
            },
            set: function (t) {
                this.uniforms.mb = t
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "ma", {
            get: function () {
                return this.uniforms.ma
            },
            set: function (t) {
                this.uniforms.ma = t
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "ar", {
            get: function () {
                return this.uniforms.ar
            },
            set: function (t) {
                this.uniforms.ar = t
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "ag", {
            get: function () {
                return this.uniforms.ag
            },
            set: function (t) {
                this.uniforms.ag = t
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "ab", {
            get: function () {
                return this.uniforms.ab
            },
            set: function (t) {
                this.uniforms.ab = t
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "aa", {
            get: function () {
                return this.uniforms.aa
            },
            set: function (t) {
                this.uniforms.aa = t
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "factor", {
            get: function () {
                return this.uniforms.factor
            },
            set: function (t) {
                this.uniforms.factor = t
            },
            enumerable: !0,
            configurable: !0
        }), e
    }(PIXI.Filter);
    e.FlashFilter = o
}