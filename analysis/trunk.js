/*
 * A array of functions, I separate these functions and store them in ../functions
 * In fact, it's length is 1493
 */
const functions = [];

!function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.KCS = e() : t.KCS = e()
}(this, function () {
    return function (t) {
        function e(n) {
            if (i[n]) return i[n].exports;
            var o = i[n] = { i: n, l: !1, exports: {} };
            return t[n].call(o.exports, o, o.exports, e), o.l = !0, o.exports
        }

        var i = {};
        return e.m = t, e.c = i, e.d = function (t, i, n) {
            e.o(t, i) || Object.defineProperty(t, i, { configurable: !1, enumerable: !0, get: n })
        }, e.n = function (t) {
            var i = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return e.d(i, "a", i), i
        }, e.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, e.p = "", e(e.s = 474)
    }(functions).default
});

// Above is IIFE, which is equivalent to the code below:
const i = {};

// `e` is a constructor
function e(n) {
    if (i[n]) return i[n].exports;
    /*
     * i: index
     * l: whether current function is executed
     */
    i[n] = { i: n, l: false, exports: {} };
    const o = i[n];
    /*
     * Review:
     * `Function.prototype.call()`
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
     *
     * Every function in ../functions receive 3 parameters: `t`, `e`, `i`
     * this: o.exports
     * t: o
     * e: o.exports
     * i: the constructor it self
     */
    functions[n].call(o.exports, o, o.exports, e);
    o.l = true;
    return o.exports;
}

e.m = functions;
e.c = i;
e.d = function (t, i, n) {
    e.o(t, i) || Object.defineProperty(t, i, { configurable: !1, enumerable: !0, get: n })
};
e.n = function (t) {
    var i = t && t.__esModule ? function () {
        return t.default
    } : function () {
        return t
    };
    e.d(i, "a", i);
    return i;
};
e.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
};
e.p = "";
e.s = 474;

const fn = () => e(e.s).default; // see ./474.js, `default` is this object: `{ init: Function }`

if ("object" === typeof exports && "object" === typeof module) { // CommonJS(Node)
    module.exports = fn();
} else if ("function" === typeof define && define.amd) { // AMD
    define([], fn);
} else if ("object" === typeof exports) { // CommonJS(Node)
    exports.KCS = fn();
} else {
    this.KCS = fn();
}