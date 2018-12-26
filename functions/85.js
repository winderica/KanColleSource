const function85 = function (t, e, i) {
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
        r = i(4),
        s = i(1),
        a = function (t) {
            function e() {
                var e = t.call(this) || this;
                e.PAGER_COUNT = 5, e.color_on = 1949120, e.color_off = 5523516, e.color_no = 16774898, e.BASE_Y = 12, e.BASE_X = 143, e.PADDING = 53, e.focusIndex = 0, e._onClickPrev_First = function () {
                    e.focusIndex = 0, e.updatePageNumbers(0), e.onChangePage(e.focusIndex)
                }, e._onClickPrev_5 = function () {
                    e.focusIndex -= 5, e.focusIndex < 0 && (e.focusIndex = 0), e.updatePageNumbers(e.focusIndex), e.onChangePage(e.focusIndex)
                }, e._onClickNext_5 = function () {
                    e.focusIndex += 5, e.pageCount <= e.focusIndex && (e.focusIndex = e.pageCount - 1), e.updatePageNumbers(e.focusIndex), e.onChangePage(e.focusIndex)
                }, e._onClickNext_Last = function () {
                    e.focusIndex = e.pageCount - 1, e.updatePageNumbers(e.focusIndex), e.onChangePage(e.focusIndex)
                }, e._onClickChange_0 = function () {
                    e.focusIndex < 2 || e.pageCount <= 5 ? e.focusIndex = 0 : e.pageCount - 3 < e.focusIndex ? e.focusIndex = e.pageCount - 5 : e.focusIndex = e.focusIndex - 2, e.updatePageNumbers(e.focusIndex), e.onChangePage(e.focusIndex)
                }, e._onClickChange_1 = function () {
                    e.focusIndex < 2 || e.pageCount <= 5 ? e.focusIndex = 1 : e.pageCount - 3 < e.focusIndex ? e.focusIndex = e.pageCount - 4 : e.focusIndex = e.focusIndex - 1, e.updatePageNumbers(e.focusIndex), e.onChangePage(e.focusIndex)
                }, e._onClickChange_2 = function () {
                    e.focusIndex < 2 || e.pageCount <= 5 ? e.focusIndex = 2 : e.pageCount - 3 < e.focusIndex ? e.focusIndex = e.pageCount - 3 : e.focusIndex = e.focusIndex, e.updatePageNumbers(e.focusIndex), e.onChangePage(e.focusIndex)
                }, e._onClickChange_3 = function () {
                    e.focusIndex < 2 || e.pageCount <= 5 ? e.focusIndex = 3 : e.pageCount - 3 < e.focusIndex ? e.focusIndex = e.pageCount - 2 : e.focusIndex = e.focusIndex + 1, e.updatePageNumbers(e.focusIndex), e.onChangePage(e.focusIndex)
                }, e._onClickChange_4 = function () {
                    e.focusIndex < 2 || e.pageCount <= 5 ? e.focusIndex = 4 : e.pageCount - 3 < e.focusIndex ? e.focusIndex = e.pageCount - 1 : e.focusIndex = e.focusIndex + 2, e.updatePageNumbers(e.focusIndex), e.onChangePage(e.focusIndex)
                }, e.buttonPrev_First = new PIXI.Sprite(o.COMMON_MAIN.getTexture(6)), e.buttonPrev_5 = new PIXI.Sprite(o.COMMON_MAIN.getTexture(8)), e.buttonNext_5 = new PIXI.Sprite(o.COMMON_MAIN.getTexture(7)), e.buttonNext_Last = new PIXI.Sprite(o.COMMON_MAIN.getTexture(5)), e.textChanges = [], e.buttonChanges = [];
                for (var i = 0; i < e.PAGER_COUNT; i++) {
                    var n = new r.TextBox(24, e.color_no);
                    n.anchor.set(0, 0), n.interactive = !0, e.textChanges.push(n);
                    var a = new PIXI.Graphics;
                    a.beginFill(0, 0), a.drawRect(0, 0, 30, 30), a.endFill(), a.x = e.BASE_X + e.PADDING * i - Math.floor(15), a.y = 0, a.interactive = !0, e.buttonChanges.push(a)
                }
                return e.buttonPrev_First.on(s.EventType.CLICK, e._onClickPrev_First), e.buttonPrev_5.on(s.EventType.CLICK, e._onClickPrev_5), e.buttonNext_5.on(s.EventType.CLICK, e._onClickNext_5), e.buttonNext_Last.on(s.EventType.CLICK, e._onClickNext_Last), e.buttonChanges[0].on(s.EventType.CLICK, e._onClickChange_0), e.buttonChanges[1].on(s.EventType.CLICK, e._onClickChange_1), e.buttonChanges[2].on(s.EventType.CLICK, e._onClickChange_2), e.buttonChanges[3].on(s.EventType.CLICK, e._onClickChange_3), e.buttonChanges[4].on(s.EventType.CLICK, e._onClickChange_4), e.buttonPrev_First.position.set(20, -1), e.buttonPrev_5.position.set(74, -1), e.buttonNext_5.position.set(393, -1), e.buttonNext_Last.position.set(446, -1), e.buttonPrev_First.interactive = e.buttonPrev_5.interactive = e.buttonNext_5.interactive = e.buttonNext_Last.interactive = !0, e.addChild(e.buttonPrev_First, e.buttonPrev_5), e.textChanges.forEach(function (t) {
                    e.addChild(t)
                }), e.buttonChanges.forEach(function (t) {
                    e.addChild(t)
                }), e.addChild(e.buttonNext_5, e.buttonNext_Last), e
            }
            return n(e, t), e.prototype.dispose = function () {
                this.removeChildren(), this.buttonChanges.forEach(function (t) {
                    t.off(s.EventType.CLICK)
                }), this.buttonPrev_First.off(s.EventType.CLICK), this.buttonPrev_5.off(s.EventType.CLICK), this.buttonNext_5.off(s.EventType.CLICK), this.buttonNext_Last.off(s.EventType.CLICK), this.textChanges.forEach(function (t) {
                    t.destroy()
                }), this.buttonPrev_First = null, this.buttonPrev_5 = null, this.textChanges = null, this.buttonChanges = null, this.buttonNext_5 = null, this.buttonNext_Last = null, this.onChangePage = null
            }, e.prototype.init = function (t) {
                var e = this;
                this.pageCount = t, this.focusIndex = 0, this.buttonChanges.forEach(function (t) {
                    t.interactive = !1
                }), this.textChanges.forEach(function (t) {
                    t.style.fill = e.color_no
                });
                for (var i = 0; i < this.PAGER_COUNT; i++) i < this.pageCount && (this.buttonChanges[i].interactive = !0, this.textChanges[i].style.fill = this.color_off);
                this.updatePageNumbers(this.focusIndex)
            }, e.prototype.changePage = function (t) {
                this.focusIndex = t, this.updatePageNumbers(this.focusIndex)
            }, e.prototype.updatePageNumbers = function (t) {
                var e = 0;
                if (t < 2 || this.pageCount <= 5) {
                    e = t;
                    for (var i = 0; i < this.PAGER_COUNT; i++) this.textChanges[i].text = (i + 1).toString()
                } else if (this.pageCount - 3 < t) {
                    e = 5 - (this.pageCount - t);
                    for (var i = 0; i < this.PAGER_COUNT; i++) this.textChanges[i].text = (this.pageCount - (this.PAGER_COUNT - 1 - i)).toString()
                } else {
                    for (var i = 0; i < this.PAGER_COUNT; i++) this.textChanges[i].text = (t + 1 + (-2 + i)).toString();
                    e = 2
                }
                for (var i = 0; i < this.PAGER_COUNT; i++) i < this.pageCount ? this.textChanges[i].style.fill = this.color_off : this.textChanges[this.PAGER_COUNT - 1].style.fill = this.color_no, this.textChanges[i].style.fontSize = 24, e == i && (this.textChanges[i].style.fill = this.color_on, this.textChanges[i].style.fontSize = 30), this.textChanges[i].position.set(this.BASE_X - Math.floor(this.textChanges[i].width / 2) + this.PADDING * i, this.BASE_Y - Math.floor(this.textChanges[i].height / 2))
            }, e
        }(PIXI.Container);
    e.PagerView = a
}