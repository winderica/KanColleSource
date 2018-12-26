const function142 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = function () {
        function t() {}
        return t.init = function (t, e, i, n, o, r) {
            void 0 === n && (n = 16), void 0 === o && (o = 0), void 0 === r && (r = "font_j");
            var s = this._editArea;
            s.style.left = t + "px", s.style.top = e + "px", s.style.width = i + "px";
            var a = this._editBox;
            a.style.fontFamily = "'" + r + "'", a.style.width = s.style.width, a.style.fontSize = s.style.fontSize = n + "pt", a.style.color = "#" + ("000000" + o.toString(16)).slice(-6)
        }, t.setVisibility = function (t) {
            this._editArea.style.display = t ? "block" : "none"
        }, Object.defineProperty(t, "text", {
            get: function () {
                return this._editBox.value
            },
            set: function (t) {
                this._editBox.value = t
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t, "width", {
            set: function (t) {
                this._editBox.width = t
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t, "height", {
            set: function (t) {
                this._editBox.height = t
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t, "onkeyup", {
            get: function () {
                return this._editBox.onkeyup
            },
            set: function (t) {
                this._editBox.onkeyup = t
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t, "oninput", {
            set: function (t) {
                this._editBox.oninput = t
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t, "onkeydown", {
            get: function () {
                return this._editBox.onkeydown
            },
            set: function (t) {
                this._editBox.onkeydown = t
            },
            enumerable: !0,
            configurable: !0
        }), t.onLengthCheck = function (t, e, i) {
            var n = this;
            void 0 === t && (t = 12);
            var o = null;
            this.onkeydown = function (t) {
                o = t.keyCode, i && i()
            }, this.onkeyup = function (e) {
                o != e.keyCode && "Enter" != e.key || n.text.length > t && (n.text = n.text.slice(0, t))
            }, this.oninput = function () {
                e && e()
            }
        }, t.onEventDestroy = function () {
            this.onkeydown = null, this.onkeyup = null, this.oninput = null
        }, Object.defineProperty(t, "_editArea", {
            get: function () {
                return window.document.getElementById("r_editarea")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t, "_editBox", {
            get: function () {
                return window.document.getElementById("r_editbox")
            },
            enumerable: !0,
            configurable: !0
        }), t.validation = function (t, e, i) {
            return void 0 === i && (i = !0), "" != t && (0 != t.length && ((!t.match(/^\s*$|^\u3000*$/) || !i) && (t != e && !(t.length > 12))))
        }, t
    }();
    e.EditTextBoxUtil = n
}