const function773 = function (t, e, i) {
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
                e.HIT_AREA_SIZE = 30, e.COLOR_ON = 1949120, e.COLOR_OFF = 5523516, e.COLOR_NO = 16774898, e.BASE = 68, e.NUMBEROFFSET = 10, e.PADDING = 60, e._onClickPrev3 = function () {
                    var t = e.focusIndex - 3;
                    t < 0 && (t = 0), e.notifyChangeIndex(t)
                }, e._onClickNext3 = function () {
                    var t = e.focusIndex + 3;
                    if (e.pageCount <= 3) switch (e.pageCount) {
                        case 0:
                        case 1:
                            t = 0;
                            break;
                        case 2:
                            t = 1;
                            break;
                        case 3:
                            t = 2
                    } else e.pageCount - 1 < t && (t = e.pageCount - 1, e.pageCount <= 2 && e.pageCount++);
                    e.notifyChangeIndex(t)
                }, e._onClickChange0 = function () {
                    var t = 0;
                    t = e.focusIndex < 2 || 2 == e.pageCount ? 0 : e.pageCount - 3 < e.focusIndex ? e.pageCount - 3 : e.focusIndex - 1, e.notifyChangeIndex(t)
                }, e._onClickChange1 = function () {
                    var t = 0;
                    t = e.focusIndex < 2 || e.pageCount <= 2 ? 1 : e.pageCount - 3 < e.focusIndex ? e.pageCount - 2 : e.focusIndex, e.notifyChangeIndex(t)
                }, e._onClickChange2 = function () {
                    var t = 0;
                    t = e.focusIndex < 2 || 2 == e.pageCount ? 2 : e.pageCount - 3 < e.focusIndex ? e.pageCount - 1 : e.focusIndex + 1, e.notifyChangeIndex(t)
                }, e.focusIndex = 0;
                return e.textChange_0 = new r.TextBox(24, e.COLOR_NO), e.textChange_1 = new r.TextBox(24, e.COLOR_NO), e.textChange_2 = new r.TextBox(24, e.COLOR_NO), e.buttonPrev_3 = new PIXI.Sprite(o.COMMON_MAIN.getTexture(8)), e.buttonChange_0 = new PIXI.Graphics, e.buttonChange_1 = new PIXI.Graphics, e.buttonChange_2 = new PIXI.Graphics, e.buttonNext_3 = new PIXI.Sprite(o.COMMON_MAIN.getTexture(7)), e.buttonChange_0.beginFill(0, 0), e.buttonChange_0.drawRect(0, 0, e.HIT_AREA_SIZE, e.HIT_AREA_SIZE), e.buttonChange_0.endFill(), e.buttonChange_0.renderable = !1, e.buttonChange_1.beginFill(0, 0), e.buttonChange_1.drawRect(0, 0, e.HIT_AREA_SIZE, e.HIT_AREA_SIZE), e.buttonChange_1.endFill(), e.buttonChange_1.renderable = !1, e.buttonChange_2.beginFill(0, 0), e.buttonChange_2.drawRect(0, 0, e.HIT_AREA_SIZE, e.HIT_AREA_SIZE), e.buttonChange_2.endFill(), e.buttonChange_2.renderable = !1, e.buttonPrev_3.position.set(20, 0), e.buttonChange_0.position.x = e.BASE, e.buttonChange_1.position.x = e.BASE + e.PADDING, e.buttonChange_2.position.x = e.BASE + 2 * e.PADDING, e.buttonChange_0.position.y = -Math.floor(e.buttonChange_0.height / 2), e.buttonChange_1.position.y = -Math.floor(e.buttonChange_1.height / 2), e.buttonChange_2.position.y = -Math.floor(e.buttonChange_2.height / 2), e.buttonNext_3.position.set(233.7, 0), e.buttonPrev_3.anchor.set(0, .5), e.buttonNext_3.anchor.set(0, .5), e.textChange_0.anchor.set(0, 0), e.textChange_1.anchor.set(0, 0), e.textChange_2.anchor.set(0, 0), e.buttonChange_0.interactive = e.buttonPrev_3.interactive = e.buttonNext_3.interactive = e.buttonChange_1.interactive = e.buttonChange_2.interactive = !0, e.addChild(e.buttonPrev_3, e.buttonChange_0, e.buttonChange_1, e.buttonChange_2, e.buttonNext_3, e.textChange_0, e.textChange_1, e.textChange_2), e
            }
            return n(e, t), e.prototype.dispose = function () {
                this.buttonPrev_3.off(s.EventType.CLICK), this.buttonNext_3.off(s.EventType.CLICK), this.buttonChange_0.off(s.EventType.CLICK), this.buttonChange_1.off(s.EventType.CLICK), this.buttonChange_2.off(s.EventType.CLICK), this.textChange_0.destroy(), this.textChange_1.destroy(), this.textChange_2.destroy(), this.buttonPrev_3 = null, this.buttonChange_0 = null, this.buttonChange_1 = null, this.buttonChange_2 = null, this.buttonNext_3 = null, this.textChange_0 = null, this.textChange_1 = null, this.textChange_2 = null, this.focusIndex = null, this.pageCount = null, this.onClick = null, this.removeChildren()
            }, e.prototype.init = function (t) {
                switch (this.buttonPrev_3.off(s.EventType.CLICK), this.buttonNext_3.off(s.EventType.CLICK), this.buttonChange_0.off(s.EventType.CLICK), this.buttonChange_1.off(s.EventType.CLICK), this.buttonChange_2.off(s.EventType.CLICK), t) {
                    case 0:
                    case 1:
                        break;
                    case 2:
                        this.buttonPrev_3.on(s.EventType.CLICK, this._onClickPrev3), this.buttonChange_0.on(s.EventType.CLICK, this._onClickChange0), this.buttonChange_1.on(s.EventType.CLICK, this._onClickChange1), this.buttonNext_3.on(s.EventType.CLICK, this._onClickNext3);
                        break;
                    default:
                        this.buttonPrev_3.on(s.EventType.CLICK, this._onClickPrev3), this.buttonNext_3.on(s.EventType.CLICK, this._onClickNext3), this.buttonChange_0.on(s.EventType.CLICK, this._onClickChange0), this.buttonChange_1.on(s.EventType.CLICK, this._onClickChange1), this.buttonChange_2.on(s.EventType.CLICK, this._onClickChange2)
                }
                this.pageCount = t
            }, e.prototype.focus = function (t) {
                if (this.focusIndex = t, this.textChange_0.style.fill = this.COLOR_NO, this.textChange_1.style.fill = this.COLOR_NO, this.textChange_2.style.fill = this.COLOR_NO, this.textChange_0.style.fontSize = 24, this.textChange_1.style.fontSize = 24, this.textChange_2.style.fontSize = 24, t < 2 || this.pageCount <= 2) {
                    switch (this.textChange_0.text = "1", this.textChange_1.text = "2", this.textChange_2.text = "3", this.pageCount) {
                        case 0:
                        case 1:
                            this.textChange_0.style.fill = this.COLOR_NO, this.textChange_1.style.fill = this.COLOR_NO, this.textChange_2.style.fill = this.COLOR_NO;
                            break;
                        case 2:
                            this.textChange_0.style.fill = this.COLOR_OFF, this.textChange_1.style.fill = this.COLOR_OFF, this.textChange_2.style.fill = this.COLOR_NO;
                            break;
                        default:
                            this.textChange_0.style.fill = this.COLOR_OFF, this.textChange_1.style.fill = this.COLOR_OFF, this.textChange_2.style.fill = this.COLOR_OFF
                    }
                    switch (t) {
                        case 0:
                            this.textChange_0.style.fill = this.COLOR_ON, this.textChange_0.style.fontSize = 30;
                            break;
                        case 1:
                            this.textChange_1.style.fill = this.COLOR_ON, this.textChange_1.style.fontSize = 30;
                            break;
                        case 2:
                            this.textChange_2.style.fill = this.COLOR_ON, this.textChange_2.style.fontSize = 30
                    }
                } else if (this.pageCount - 3 < t) switch (this.textChange_0.text = "" + (this.pageCount - 3 + 1), this.textChange_1.text = "" + (this.pageCount - 2 + 1), this.textChange_2.text = "" + (this.pageCount - 1 + 1), this.textChange_0.style.fill = this.COLOR_OFF, this.textChange_1.style.fill = this.COLOR_OFF, this.textChange_2.style.fill = this.COLOR_OFF, this.focusIndex) {
                    case this.pageCount - 3:
                        this.textChange_0.style.fill = this.COLOR_ON, this.textChange_0.style.fontSize = 30;
                        break;
                    case this.pageCount - 2:
                        this.textChange_1.style.fill = this.COLOR_ON, this.textChange_1.style.fontSize = 30;
                        break;
                    case this.pageCount - 1:
                        this.textChange_2.style.fill = this.COLOR_ON, this.textChange_2.style.fontSize = 30
                } else this.textChange_0.text = "" + (this.focusIndex - 1 + 1), this.textChange_1.text = "" + (this.focusIndex + 1), this.textChange_2.text = "" + (this.focusIndex + 1 + 1), this.textChange_0.style.fill = this.COLOR_OFF, this.textChange_1.style.fill = this.COLOR_ON, this.textChange_2.style.fill = this.COLOR_OFF, this.textChange_1.style.fontSize = 37;
                this.textChange_0.position.set(this.BASE - Math.floor(this.textChange_0.width / 2) + this.NUMBEROFFSET + 0 * this.PADDING, -Math.floor(this.textChange_0.height / 2)), this.textChange_1.position.set(this.BASE - Math.floor(this.textChange_1.width / 2) + this.NUMBEROFFSET + 1 * this.PADDING, -Math.floor(this.textChange_1.height / 2)), this.textChange_2.position.set(this.BASE - Math.floor(this.textChange_2.width / 2) + this.NUMBEROFFSET + 2 * this.PADDING, -Math.floor(this.textChange_2.height / 2))
            }, e.prototype.notifyChangeIndex = function (t) {
                this.onClick(t)
            }, e
        }(PIXI.Container);
    e.MiniPager = a
}