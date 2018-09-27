const function621 = function (t, e, i) {
    "use strict";
    var n = this && this.__extends || function () {
        var t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
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
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = function (t) {
        function e(e, i, n, o, r) {
            void 0 === r && (r = 1);
            var s = Math.sqrt(n / 2 * n / 2 + o * o);
            return t.call(this, null, "\n            precision mediump float;\n            varying vec2 vTextureCoord;\n            uniform sampler2D uSampler;\n\n            uniform float x;\n            uniform float y;\n            uniform float r;\n            uniform float width;\n            uniform float height;\n            uniform float rate;\n            uniform float grad;\n\n            void main(void) {\n                vec4 color = texture2D(uSampler, vTextureCoord);\n                \n                float dx = abs(gl_FragCoord.x - x);\n                float dy = abs((720.0 - gl_FragCoord.y) - (y + height / 2.0));\n                float d = sqrt(dx * dx + dy * dy);\n                if(d > r * rate) {\n                    float a = min((d - r * rate), (r * grad));\n                    a = 1.0 - a / (r * grad);\n                    //float a = 0.5;\n                    color.r *= a;\n                    color.g *= a;\n                    color.b *= a;\n                    if(a < color.a) {\n                        color.a = a;\n                    }\n                }\n                gl_FragColor = color;\n            }\n        ", {
                x: {
                    type: "1f",
                    value: e
                },
                y: { type: "1f", value: i },
                r: { type: "1f", value: s },
                width: { type: "1f", value: n },
                height: { type: "1f", value: o },
                rate: { type: "1f", value: 1 },
                grad: { type: "1f", value: .5 }
            }) || this
        }

        return n(e, t), e
    }(PIXI.Filter);
    e.MeltIntoUseitemFilter = o
}