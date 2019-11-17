const function636 = function (t, e, i) {
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
        function e(e, i, n) {
            var o = 1 == n ? "\n            precision mediump float;\n            varying vec2 vTextureCoord;\n            uniform sampler2D uSampler;\n\n            uniform float x; //\u30bf\u30fc\u30b2\u30c3\u30c8\u306ex\u5ea7\u6a19(\u4e2d\u5fc3\u70b9)\n            uniform float width;\n            uniform float rate;\n            uniform float grad;\n\n            void main(void) {\n                vec4 color = texture2D(uSampler, vTextureCoord);\n                \n                float border = x - width / 2.0 + (width * rate); // alpha:1 \u3067\u8868\u793a\u3059\u308b\u90e8\u5206\u3068\u306e\u5883\n                if(gl_FragCoord.x >= border) {\n                    float a = 0.0;\n                    float diff = gl_FragCoord.x - border;\n                    if(diff <= width * grad) {\n                        a = 1.0 - (diff / (width * grad));\n                    }\n                    color.r *= a;\n                    color.g *= a;\n                    color.b *= a;\n                    if(a < color.a) {\n                        color.a = a;\n                    }\n                }\n                gl_FragColor = color;\n            }\n        " : "\n            precision mediump float;\n            varying vec2 vTextureCoord;\n            uniform sampler2D uSampler;\n\n            uniform float x; //\u30bf\u30fc\u30b2\u30c3\u30c8\u306ex\u5ea7\u6a19(\u4e2d\u5fc3\u70b9)\n            uniform float width;\n            uniform float rate;\n            uniform float grad;\n\n            void main(void) {\n                vec4 color = texture2D(uSampler, vTextureCoord);\n                \n                float border = x + width / 2.0 - (width * rate); // alpha:1 \u3067\u8868\u793a\u3059\u308b\u90e8\u5206\u3068\u306e\u5883\n                if(gl_FragCoord.x <= border) {\n                    float a = 0.0;\n                    float diff = border - gl_FragCoord.x;\n                    if(diff <= width * grad) {\n                        a = 1.0 - (diff / (width * grad));\n                    }\n                    color.r *= a;\n                    color.g *= a;\n                    color.b *= a;\n                    if(a < color.a) {\n                        color.a = a;\n                    }\n                }\n                gl_FragColor = color;\n            }\n        ";
            return t.call(this, null, o, {
                x: {
                    type: "1f",
                    value: e
                },
                width: {
                    type: "1f",
                    value: i
                },
                rate: {
                    type: "1f",
                    value: 1
                },
                grad: {
                    type: "1f",
                    value: .5
                }
            }) || this
        }
        return n(e, t), e
    }(PIXI.Filter);
    e.MeltIntoSlotitemFilter = o
}