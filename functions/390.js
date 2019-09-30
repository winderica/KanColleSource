const function390 = function (t, e, i) {
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
    var o = i(132),
        r = i(391),
        s = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                i.TABMAX_SHIP = 6, i.TABMAX_SLOT = 6, i._ship_tabs = [];
                for (var n = 0; n < i.TABMAX_SHIP; n++) {
                    var o = new r.TabBtn(1, n, e);
                    o.position.set(0, 53 * n), o.visible = !0, i.addChild(o), i._ship_tabs.push(o)
                }
                i._slot_tabs = [];
                for (var n = 0; n < i.TABMAX_SLOT; n++) {
                    var o = new r.TabBtn(2, n, e);
                    o.position.set(0, 53 * n), o.visible = !1, i.addChild(o), i._slot_tabs.push(o)
                }
                return i
            }
            return n(e, t), e.prototype.initialize = function () {
                this._initializeTabBtns(this._ship_tabs), this._initializeTabBtns(this._slot_tabs)
            }, e.prototype.update = function (t, e) {
                if (1 == t)
                    for (var i = 0, n = this._ship_tabs; i < n.length; i++) {
                        var o = n[i];
                        o.selected = o.no == e
                    } else
                        for (var r = 0, s = this._ship_tabs; r < s.length; r++) {
                            var o = s[r];
                            o.selected = !1
                        }
                if (2 == t)
                    for (var a = 0, _ = this._slot_tabs; a < _.length; a++) {
                        var o = _[a];
                        o.selected = o.no == e
                    } else
                        for (var l = 0, u = this._slot_tabs; l < u.length; l++) {
                            var o = u[l];
                            o.selected = !1
                        }
            }, e.prototype.activate = function () {
                for (var t = 0, e = this._ship_tabs; t < e.length; t++) {
                    var i = e[t];
                    i.activate()
                }
                for (var n = 0, o = this._slot_tabs; n < o.length; n++) {
                    var i = o[n];
                    i.activate()
                }
            }, e.prototype.deactivate = function () {
                for (var t = 0, e = this._ship_tabs; t < e.length; t++) {
                    var i = e[t];
                    i.deactivate()
                }
                for (var n = 0, o = this._slot_tabs; n < o.length; n++) {
                    var i = o[n];
                    i.deactivate()
                }
            }, e.prototype.dispose = function () {
                this.removeChildren();
                for (var t = 0, e = this._ship_tabs; t < e.length; t++) {
                    var i = e[t];
                    i.dispose()
                }
                for (var n = 0, o = this._slot_tabs; n < o.length; n++) {
                    var i = o[n];
                    i.dispose()
                }
                this._ship_tabs = null, this._slot_tabs = null
            }, e.prototype.switchViewAlbumMode = function (t) {
                switch (t) {
                    case 1:
                        this._ship_tabs.forEach(function (t) {
                            return t.visible = !0
                        }), this._slot_tabs.forEach(function (t) {
                            return t.visible = !1
                        });
                        break;
                    case 2:
                        this._ship_tabs.forEach(function (t) {
                            return t.visible = !1
                        }), this._slot_tabs.forEach(function (t) {
                            return t.visible = !0
                        })
                }
            }, e.prototype._getBtnTextureNo = function (t, e) {
                return 1 == t ? e >= 0 && e < this.TABMAX_SHIP ? [80, 82, 84, 86, 88, 90][e] : -1 : 2 == t && e >= 0 && e < this.TABMAX_SLOT ? [68, 70, 72, 74, 76, 78][e] : -1
            }, e.prototype._getBtnOnTextureNo = function (t, e) {
                return 1 == t ? e >= 0 && e < this.TABMAX_SHIP ? [81, 83, 85, 87, 89, 91][e] : -1 : 2 == t && e >= 0 && e < this.TABMAX_SLOT ? [69, 71, 73, 75, 77, 79][e] : -1
            }, e.prototype._initializeTabBtns = function (t) {
                for (var e = 0, i = t; e < i.length; e++) {
                    var n = i[e],
                        r = n.mode,
                        s = n.no,
                        a = this._getBtnTextureNo(r, s),
                        _ = -1 == a ? PIXI.Texture.EMPTY : o.ALBUM_MAIN.getTexture(a),
                        l = this._getBtnOnTextureNo(r, s),
                        u = -1 == l ? PIXI.Texture.EMPTY : o.ALBUM_MAIN.getTexture(l);
                    n.initialize(_, u)
                }
            }, e
        }(PIXI.Container);
    e.TabBtnContainer = s
}