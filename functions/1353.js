const function1353 = function (t, e, i) {
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
    var o = i(5),
        r = i(63),
        s = i(1354),
        a = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._bgDic = {}, e._bgLayer = new PIXI.Container, e.addChild(e._bgLayer), e._extraLayer = [], e
            }
            return n(e, t), Object.defineProperty(e.prototype, "extraLayerLast", {
                get: function () {
                    return this._extraLayer[this._extraLayer.length - 1]
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "mapAnime", {
                get: function () {
                    return this._mapAnime
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.dispose = function () {
                this._mapAnime && this._mapAnime.dispose()
            }, e.prototype.addBGLayer = function (t, e) {
                var i = new PIXI.Sprite(t);
                if (null != e && e.length > 0) {
                    if (1 == this._bgDic.hasOwnProperty(e)) {
                        var n = this._bgDic[e];
                        null != n && n.parent == this._bgLayer && this._bgLayer.removeChild(n)
                    }
                    this._bgDic[e] = i
                }
                i.x = Math.round((o.default.width - i.width) / 2), i.y = Math.round((o.default.height - i.height) / 2), this._bgLayer.addChild(i)
            }, e.prototype.getBGLayer = function (t) {
                return 0 == this._bgDic.hasOwnProperty(t) ? null : this._bgDic[t]
            }, e.prototype.addLabels = function (t) {
                if (0 != t.length) {
                    var e = new PIXI.Container;
                    this._extraLayer.push(e), this.addChild(e);
                    for (var i = 0, n = t; i < n.length; i++) {
                        var o = n[i],
                            s = new r.CenteringSprite(o.texture);
                        s.x = o.x + Math.round(s.width / 2), s.y = o.y + Math.round(s.height / 2), e.addChild(s)
                    }
                }
            }, e.prototype.setMapAnime = function () {
                this._mapAnime = new s.MapAnime, this._mapAnime.position.set(899, 370), this._bgLayer.addChildAt(this._mapAnime, 2), this._mapAnime.startAnimation()
            }, e
        }(PIXI.Container);
    e.MapBackGround = a
}