const function784 = function (t, e, i) {
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
    var o = i(84), r = i(332), s = i(21), a = i(207), _ = i(85), u = i(785), l = i(786), c = i(787), h = i(788),
        p = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._onClick = function (t, i) {
                    e.onClick(t, i)
                }, e._onClickLock = function (t, i) {
                    e.onClickLock(t, i)
                }, e.sortSoubiTxtNone = new PIXI.Sprite(a.COMMON_SORT.getTexture(51)), e.headerSoubiSentaku = new _.TitleBar, e.headerSoubiSentaku.initialize(s.COMMON_MAIN.getTexture(2), 26);
                var i = s.COMMON_MAIN.getTexture(37), n = new PIXI.Sprite(s.COMMON_MAIN.getTexture(13));
                e._listHeader = new c.ListHeader, e._pagerView = new o.PagerView, e._slotItemFilterView = new r.SlotItemFilterView, e.lines = new Array, e._changeListSwitch = new u.ChangeListSwitch, e.listItems = new Array, e._inUseMarker = new l.InUseMarker, n.interactive = !0;
                for (var p = new PIXI.Point(54, 54), d = p.x, f = 0; f < 10; f++) {
                    var y = new PIXI.Sprite(i), m = new h.ListItem(f), v = 45 * f + p.y;
                    m.position.set(d, v), m.onClick = e._onClick, m.onClickLock = e._onClickLock, y.width += 45, y.position.set(d + 30, v + 45 - y.height), e.lines.push(y), e.listItems.push(m)
                }
                return e.sortSoubiTxtNone.position.set(90, 65), e._pagerView.position.set(96, 525), e._listHeader.position.set(90, 12), e._slotItemFilterView.position.set(246, 14), e._changeListSwitch.position.set(569, 12), e.headerSoubiSentaku.position.set(0, -39), e._inUseMarker.position.y = 12, e.addChild(n), e.listItems.forEach(function (t) {
                    return e.addChild(t)
                }), e.lines.forEach(function (t) {
                    return e.addChild(t)
                }), e.addChild(e._pagerView, e._listHeader, e.sortSoubiTxtNone, e._slotItemFilterView, e._changeListSwitch, e.headerSoubiSentaku, e._inUseMarker), e
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
                for (var t = 0; t < this.listItems.length; t++) this.listItems[t].dispose();
                this._pagerView.dispose(), this._slotItemFilterView.dispose(), this._changeListSwitch.dispose(), this._inUseMarker.dispose(), this._listHeader.dispose(), this.headerSoubiSentaku.dispose(), this.onClick = null, this.onClickLock = null, this._pagerView = null, this._slotItemFilterView = null, this._changeListSwitch = null, this._inUseMarker = null, this._listHeader = null, this.lines = null, this.listItems = null, this.headerSoubiSentaku = null, this.sortSoubiTxtNone = null, this.removeChildren()
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