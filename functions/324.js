const function324 = function (t, e, i) {
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
    var o = i(3),
        r = i(325),
        s = i(84),
        a = function (t) {
            function e() {
                var e = t.call(this) || this;
                e.empties = new Array, e.banners = new Array;
                for (var i = 0; i < 6; i++) {
                    var n = new PIXI.Sprite(o.COMMON_MAIN.getTexture(19)),
                        s = new r.LongShipBanner,
                        a = 76 * i;
                    n.y = a, s.y = a, e.empties.push(n), e.banners.push(s), e.addChild(n, s)
                }
                return e
            }
            return n(e, t), e.prototype.dispose = function () {
                s.TaskLoadShipResource.abortBy(this);
                for (var t = 0; t < this.empties.length; t++) this.empties[t].texture = PIXI.Texture.EMPTY, this.empties[t] = null;
                this.empties = null;
                for (var t = 0; t < this.banners.length; t++) this.banners[t].dispose(), this.banners[t] = null;
                this.banners = null, this.removeChildren()
            }, e.prototype.update = function (t, e) {
                s.TaskLoadShipResource.abortBy(this);
                for (var i = 0; i < 6; i++) {
                    var n = this.banners[i],
                        o = this.empties[i];
                    if (n.visible = !1, o.visible = !0, i < t.length) {
                        var r = t[i];
                        null != r && (n.update(i, r, e), n.visible = !0, o.visible = !1)
                    }
                }
            }, e
        }(PIXI.Container);
    e.LongShipBannerContainer = a
}