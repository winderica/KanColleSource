const function359 = function (t, e, i) {
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
    var o = i(37),
        r = i(360),
        s = i(978),
        a = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._banners = [], e._levels = [], e
            }
            return n(e, t), e.prototype.dispose = function () {
                for (var t = 0, e = this._banners; t < e.length; t++) {
                    e[t].dispose()
                }
            }, e.prototype.update = function (t) {
                for (o.TaskLoadShipResource.abortBy(this); this._banners.length > 0;) {
                    var e = this._banners.pop();
                    null != e.parent && e.parent.removeChild(e), e.dispose()
                }
                for (; this._levels.length > 0;) {
                    var i = this._levels.pop();
                    null != i.parent && i.parent.removeChild(i)
                }
                for (var n = 0; n < t.length; n++) {
                    var a = new r.CompBannerAndLack;
                    a.position.set(0, 75 * n), a.initialize(), a.update(t[n], !0), this.addChild(a), this._banners.push(a);
                    var _ = new s.CompBannerLevel;
                    _.position.set(201, 75 * n), _.initialize(), _.update(t[n]), this.addChild(_), this._levels.push(_)
                }
            }, e
        }(PIXI.Container);
    e.PanelDeckSelectBanners = a
}