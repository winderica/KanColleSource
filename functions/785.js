const function785 = function (t, e, i) {
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
        r = i(1),
        s = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.maxDuration = 125, e.shown = !1, e._onClickSlotItemFilterKeyType = function (t) {
                    e.onClick(t)
                }, e._onMouseOutHideArea = function (t) {
                    var i = t.data.getLocalPosition(e);
                    i.x >= e.startPoint.x && i.x <= e.endPoint.x && i.y >= e.startPoint.y && i.y <= e.endPoint.y || (e.hideFilterList(), e.shown = !1)
                }, e._onClick = function () {
                    e.switchShown()
                }, e.slotItemFilterButton = new l, e.slotItemFilterButton.onClick = e._onClick, e.slotItemFilterList = new a, e.slotItemFilterListMask = new PIXI.Graphics, e.slotItemFilterListMask.beginFill(0, 0), e.slotItemFilterListMask.drawRect(0, 0, e.slotItemFilterList.width, e.slotItemFilterList.height), e.slotItemFilterListMask.endFill(), e.slotItemFilterListMask.position.set(0, -(e.slotItemFilterListMask.height + 2)), e.slotItemFilterList.position.set(29, 30), e.slotItemFilterList.mask = e.slotItemFilterListMask, e.slotItemFilterList.onClick = e._onClickSlotItemFilterKeyType, e.slotItemFilterList.addChild(e.slotItemFilterListMask), e.startPoint = new PIXI.Point(-38, -38), e.endPoint = new PIXI.Point(157, -38 + e.slotItemFilterList.height + 76), e.filterListArea = new PIXI.Graphics, e.filterListArea.beginFill(0, 0), e.filterListArea.position.set(-246, -12), e.filterListArea.drawRect(0, 0, 700, 560), e.filterListArea.endFill(), e.filterListArea.on(r.EventType.MOUSEMOVE, e._onMouseOutHideArea), e.filterListArea.interactive = !0, e.filterListArea.visible = !1, e.slotItemFilterList.renderable = !1, e.addChild(e.filterListArea, e.slotItemFilterButton, e.slotItemFilterList), e
            }
            return n(e, t), e.prototype.dispose = function () {
                this.slotItemFilterList.mask = null, this.slotItemFilterList.dispose(), this.slotItemFilterButton.dispose(), this.slotItemFilterListMask.clear(), this.filterListArea.clear(), this.onClick = null, this.shown = null, this.slotItemFilterButton = null, this.slotItemFilterList = null, this.slotItemFilterListMask = null, this.filterListArea = null, this.startPoint = null, this.endPoint = null, this.removeChildren()
            }, e.prototype.updateFilterType = function (t) {
                this.slotItemFilterButton.update(t)
            }, e.prototype.switchShown = function () {
                this.shown = !this.shown, this.shown ? this.showFilterList() : this.hideFilterList()
            }, e.prototype.showFilterList = function () {
                this.filterListArea.visible = !0, this.slotItemFilterList.renderable = !0, createjs.Tween.removeTweens(this.slotItemFilterListMask);
                var t = this.slotItemFilterListMask.height + this.slotItemFilterListMask.y + 1,
                    e = 0 == t ? 0 : t / this.slotItemFilterListMask.height,
                    i = this.maxDuration * (1 - e);
                createjs.Tween.get(this.slotItemFilterListMask).to({
                    y: 0
                }, i).play(null)
            }, e.prototype.hideFilterList = function () {
                var t = this;
                this.filterListArea.visible = !1, createjs.Tween.removeTweens(this.slotItemFilterListMask);
                var e = this.slotItemFilterListMask.height + this.slotItemFilterListMask.y + 2,
                    i = 0 == e ? 0 : e / this.slotItemFilterListMask.height,
                    n = -(this.slotItemFilterListMask.height + 2),
                    o = this.maxDuration * i;
                createjs.Tween.get(this.slotItemFilterListMask).to({
                    y: n
                }, o).call(function () {
                    t.slotItemFilterList.renderable = !1
                }).play(null)
            }, e.prototype.hideFilterListImmidiate = function () {
                this.filterListArea.visible = !1, createjs.Tween.removeTweens(this.slotItemFilterListMask), this.slotItemFilterListMask.y = -(this.slotItemFilterListMask.height + 2), this.shown = !1
            }, e
        }(PIXI.Container);
    e.SlotItemFilterView = s;
    var a = function (t) {
        function e() {
            var e = t.call(this) || this;
            e._onClick = function (t) {
                e.onClick(t)
            };
            for (var i = new PIXI.Sprite(o.COMMON_SORT.getTexture(54)), n = [
                    [0, 21, 22],
                    [1, 23, 24],
                    [2, 25, 26],
                    [3, 27, 28],
                    [4, 29, 30],
                    [5, 31, 32],
                    [6, 33, 34],
                    [7, 35, 36],
                    [8, 43, 44],
                    [9, 45, 46],
                    [10, 47, 48],
                    [11, 49, 50],
                    [12, 37, 38],
                    [13, 39, 40],
                    [14, 41, 42],
                    [15, 51, 52]
                ], r = [], s = 0; s < n.length; s++) {
                var a = n[s],
                    l = a[0],
                    u = a[1],
                    c = a[2],
                    h = new _(l, u, c);
                h.onClick = e._onClick, h.y = 28.5 * s, r.push(h)
            }
            e.addChild(i);
            for (var s = 0; s < r.length; s++) e.addChild(r[s]);
            return e.slotItemFilterListItems = r, e
        }
        return n(e, t), e.prototype.dispose = function () {
            for (var t = 0; t < this.slotItemFilterListItems.length; t++) this.removeChild(this.slotItemFilterListItems[t]), this.slotItemFilterListItems[t].dispose(), this.slotItemFilterListItems[t] = null;
            this.slotItemFilterListItems = null, this.onClick = null, this.removeChildren()
        }, e
    }(PIXI.Container);
    e.SlotItemFilterList = a;
    var _ = function (t) {
        function e(e, i, n) {
            var s = t.call(this) || this;
            return s._onMouseOver = function () {
                s.status.texture = o.COMMON_SORT.getTexture(s.rIdMouseover), s.hover.visible = !0
            }, s._onMouseOut = function () {
                s.status.texture = o.COMMON_SORT.getTexture(s.rIdMouseout), s.hover.visible = !1
            }, s._onClick = function () {
                s.onClick(s.slotItemFilterKeyType)
            }, s.rIdMouseover = n, s.rIdMouseout = i, s.slotItemFilterKeyType = e, s.status = new PIXI.Sprite(o.COMMON_SORT.getTexture(i)), s.hover = new PIXI.Sprite(o.COMMON_SORT.getTexture(20)), s.hover.visible = !1, s.interactive = !0, s.on(r.EventType.MOUSEOVER, s._onMouseOver), s.on(r.EventType.MOUSEOUT, s._onMouseOut), s.on(r.EventType.CLICK, s._onClick), s.addChild(s.hover, s.status), s
        }
        return n(e, t), e.prototype.dispose = function () {
            this.removeChildren(), this.off(r.EventType.MOUSEOVER), this.off(r.EventType.MOUSEOUT), this.off(r.EventType.CLICK), this.rIdMouseover = null, this.rIdMouseout = null, this.status = null, this.hover = null, this.slotItemFilterKeyType = null, this.onClick = null
        }, e
    }(PIXI.Container);
    e.SlotItemFilterListItem = _;
    var l = function (t) {
        function e() {
            var e = t.call(this) || this;
            e._onClick = function () {
                e.onClick()
            };
            var i = new PIXI.Sprite(o.COMMON_SORT.getTexture(19)),
                n = new PIXI.Sprite(o.COMMON_SORT.getTexture(2));
            return e.state = new PIXI.Sprite(o.COMMON_SORT.getTexture(3)), e.on(r.EventType.CLICK, e._onClick), e.interactive = e.buttonMode = !0, i.position.set(0, 0), n.position.set(29, 0), e.state.position.set(29, 0), e.addChild(i, n, e.state), e
        }
        return n(e, t), e.prototype.dispose = function () {
            this.off(r.EventType.CLICK), this.removeChildren(), this.onClick = null, this.state = null
        }, e.prototype.update = function (t) {
            var e = this.keyToRid(t);
            this.state.texture = o.COMMON_SORT.getTexture(e)
        }, e.prototype.keyToRid = function (t) {
            switch (t) {
                case 0:
                    return 3;
                case 1:
                    return 4;
                case 2:
                    return 5;
                case 3:
                    return 6;
                case 4:
                    return 7;
                case 5:
                    return 8;
                case 6:
                    return 9;
                case 7:
                    return 10;
                case 8:
                    return 14;
                case 9:
                    return 15;
                case 10:
                    return 16;
                case 11:
                    return 17;
                case 12:
                    return 11;
                case 13:
                    return 12;
                case 14:
                    return 13;
                case 15:
                    return 18
            }
            return null
        }, e
    }(PIXI.Container);
    e.SlotItemFilterButton = l
}