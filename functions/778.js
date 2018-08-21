const function778 = function (t, e, i) {
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
    var o = i(83), r = i(338), s = i(20), a = i(209), _ = i(84), u = i(779), l = i(780), c = i(781), h = i(782),
        p = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._onClick = function (t, i) {
                    e.onClick(t, i)
                }, e._onClickLock = function (t, i) {
                    e.onClickLock(t, i)
                };
                var i = new PIXI.Sprite(a.COMMON_SORT.getTexture(51)), n = new _.TitleBar;
                n.initialize(s.COMMON_MAIN.getTexture(2), 26);
                var p = s.COMMON_MAIN.getTexture(35), d = new PIXI.Sprite(s.COMMON_MAIN.getTexture(12)),
                    f = new c.ListHeader, y = new o.PagerView, v = new r.SlotItemFilterView, g = new Array,
                    m = new u.ChangeListSwitch, b = new Array, w = new l.InUseMarker;
                d.interactive = !0;
                for (var x = new PIXI.Point(54, 54), I = x.x, T = 0; T < 10; T++) {
                    var O = new PIXI.Sprite(p), P = new h.ListItem(T), C = 45 * T + x.y;
                    P.position.set(I, C), P.onClick = e._onClick, P.onClickLock = e._onClickLock, O.width += 45, O.position.set(I + 30, C + 45 - O.height), g.push(O), b.push(P)
                }
                return i.position.set(90, 65), y.position.set(96, 525), f.position.set(90, 12), v.position.set(246, 14), m.position.set(569, 12), n.position.set(0, -39), w.position.y = 12, e.addChild(d), b.forEach(function (t) {
                    return e.addChild(t)
                }), g.forEach(function (t) {
                    return e.addChild(t)
                }), e.addChild(y, f, i, v, m, n, w), e._pagerView = y, e.lines = g, e._slotItemFilterView = v, e._changeListSwitch = m, e.headerSoubiSentaku = n, e.listItems = b, e._inUseMarker = w, e._listHeader = f, e.sortSoubiTxtNone = i, e
            }

            return n(e, t), Object.defineProperty(e.prototype, "pagerView", {
                get: function () {
                    return this._pagerView
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "slotItemFilterView", {
                get: function () {
                    return this._slotItemFilterView
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "changeListSwitch", {
                get: function () {
                    return this._changeListSwitch
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "inUseMarker", {
                get: function () {
                    return this._inUseMarker
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "listHeader", {
                get: function () {
                    return this._listHeader
                }, enumerable: !0, configurable: !0
            }), e.prototype.dispose = function () {
                this.onClick = this._onClick = null, this.onClickLock = this._onClickLock = null, this._pagerView.dispose(), this._pagerView = null, this._slotItemFilterView.dispose(), this._slotItemFilterView = null, this._changeListSwitch.dispose(), this._changeListSwitch = null, this._inUseMarker.dispose(), this._inUseMarker = null, this._listHeader.dispose(), this._listHeader = null, this.lines = null;
                for (var t = 0; t < this.listItems.length; t++) this.listItems[t].dispose();
                this.listItems = null, this.headerSoubiSentaku.dispose(), this.headerSoubiSentaku = null, this.sortSoubiTxtNone = null, this.removeChildren()
            }, e.prototype.update = function (t, e, i, n, o, r) {
                var s = this.listItems[t];
                s.update(e, i, n, o, r), s.visible = !0
            }, e.prototype.visibleEmptyText = function () {
                this.sortSoubiTxtNone.visible = !0
            }, e.prototype.clear = function () {
                this.listItems.forEach(function (t) {
                    t.visible = !1
                }), this.sortSoubiTxtNone.visible = !1
            }, e
        }(PIXI.Container);
    e.SlotItemList = p
}