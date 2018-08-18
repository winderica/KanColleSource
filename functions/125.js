const function125 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(0), o = function () {
        function t() {
        }

        return t.getMouseGlobalPos = function () {
            var t = this._getMouse();
            return null == t ? null : t.global
        }, t.getMouseLocalPos = function (t) {
            var e = this._getMouse();
            return null == e ? null : e.getLocalPosition(t)
        }, t.isOnMouse = function (t) {
            if (null == t) return !1;
            if (null != t.hitArea) {
                var e = this.getMouseLocalPos(t);
                return null != e && t.hitArea.contains(e.x, e.y)
            }
            var e = this.getMouseGlobalPos();
            return null != e && (t instanceof PIXI.Sprite ? t.containsPoint(e) : void this._containsPoint(t, e))
        }, t._containsPoint = function (t, e) {
            if (t instanceof PIXI.Sprite) return t.containsPoint(e);
            for (var i = 0, n = t.children; i < n.length; i++) {
                var o = n[i];
                if (this._containsPoint(o, e)) return !0
            }
            return !1
        }, t._getMouse = function () {
            var t = n.default.settings.renderer;
            if (null == t) return null;
            var e = t.plugins.interaction;
            return null == e ? null : e.mouse
        }, t
    }();
    e.InteractiveUtil = o
}