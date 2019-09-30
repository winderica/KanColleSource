const function989 = function (t, e, i) {
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
    var o = i(0),
        r = i(18),
        s = i(52),
        a = i(360),
        _ = i(990),
        l = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                i._initialized = !1, i._activated = !1, i._onSelectArea = function (t) {
                    null != i._cb && i._cb(t.area_id)
                }, i._cb = e, i._btns = new Array;
                for (var n = [0, 96, 191, 383, 478, 574, 287], o = 0; o < n.length; o++) {
                    var r = new a.AreaIconBtn(o + 1);
                    r.position.set(n[o], 0), i._btns.push(r)
                }
                return i
            }
            return n(e, t), e.prototype.initialize = function () {
                if (1 != this._initialized) {
                    this._initialized = !0;
                    var t = new PIXI.Sprite(s.SALLY_SORTIE.getTexture(32));
                    if (t.x = 65, t.y = 27, this.addChild(t), r.EVENT_AREA_ID > 0) {
                        if (null != o.default.model.map.getArea(r.EVENT_AREA_ID)) {
                            var e = new _.EventAreaIconBtn(r.EVENT_AREA_ID);
                            e.position.set(875, -9), this._btns.push(e)
                        }
                    }
                    for (var i = 0, n = this._btns; i < n.length; i++) {
                        var e = n[i];
                        e.initialize(this._onSelectArea), this.addChild(e)
                    }
                }
            }, e.prototype.update = function (t) {
                for (var e = 0, i = this._btns; e < i.length; e++) {
                    var n = i[e],
                        o = n.area_id == t;
                    n.selected = o, o ? n.deactivate() : n.activate()
                }
            }, e.prototype.activate = function () {
                if (0 == this._activated) {
                    for (var t = 0, e = this._btns; t < e.length; t++) {
                        e[t].activate()
                    }
                    this._activated = !0
                }
            }, e.prototype.deactivate = function () {
                this._activated = !1;
                for (var t = 0, e = this._btns; t < e.length; t++) {
                    e[t].deactivate()
                }
            }, e.prototype.dispose = function () {
                this._cb = null, this.removeChildren();
                for (var t = 0, e = this._btns; t < e.length; t++) {
                    e[t].dispose()
                }
                this._btns = null
            }, e
        }(PIXI.Container);
    e.CompAreaIcons = l
}