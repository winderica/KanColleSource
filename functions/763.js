const function763 = function (t, e, i) {
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
    var o = i(3), r = i(4), s = i(1), a = function (t) {
        function e() {
            var e = t.call(this) || this;
            e.color_on = 1949120, e.color_off = 5523516, e.color_no = 16774898, e.BASE = 68, e.NUMBEROFFSET = 10, e.PADDING = 60, e.focusIndex = 0, e.hitAreaSize = 30, e._onClickPrev3 = function () {
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
            };
            var i = new r.TextBox(24, e.color_no), n = new r.TextBox(24, e.color_no),
                s = new r.TextBox(24, e.color_no), a = new PIXI.Sprite(o.COMMON_MAIN.getTexture(8)),
                _ = new PIXI.Graphics, u = new PIXI.Graphics, l = new PIXI.Graphics,
                c = new PIXI.Sprite(o.COMMON_MAIN.getTexture(7));
            return _.beginFill(0, 0), _.drawRect(0, 0, e.hitAreaSize, e.hitAreaSize), _.endFill(), _.renderable = !1, u.beginFill(0, 0), u.drawRect(0, 0, e.hitAreaSize, e.hitAreaSize), u.endFill(), u.renderable = !1, l.beginFill(0, 0), l.drawRect(0, 0, e.hitAreaSize, e.hitAreaSize), l.endFill(), l.renderable = !1, a.position.set(20, 0), _.position.x = e.BASE, u.position.x = e.BASE + e.PADDING, l.position.x = e.BASE + 2 * e.PADDING, _.position.y = -Math.floor(_.height / 2), u.position.y = -Math.floor(u.height / 2), l.position.y = -Math.floor(l.height / 2), c.position.set(233.7, 0), a.anchor.set(0, .5), c.anchor.set(0, .5), i.anchor.set(0, 0), n.anchor.set(0, 0), s.anchor.set(0, 0), _.interactive = a.interactive = c.interactive = u.interactive = l.interactive = !0, e.addChild(a, _, u, l, c, i, n, s), e.buttonPrev_3 = a, e.textChange_0 = i, e.textChange_1 = n, e.textChange_2 = s, e.buttonNext_3 = c, e.buttonChange_0 = _, e.buttonChange_1 = u, e.buttonChange_2 = l, e
        }

        return n(e, t), e.prototype.dispose = function () {
            this.buttonPrev_3.removeAllListeners(s.EventType.CLICK), this.buttonNext_3.removeAllListeners(s.EventType.CLICK), this.buttonChange_0.removeAllListeners(s.EventType.CLICK), this.buttonChange_1.removeAllListeners(s.EventType.CLICK), this.buttonChange_2.removeAllListeners(s.EventType.CLICK), this.textChange_0.text = "", this.textChange_1.text = "", this.textChange_2.text = "", this._onClickPrev3 = this._onClickNext3 = this._onClickChange0 = this._onClickChange1 = this._onClickChange2 = null, this.color_on = null, this.color_off = null, this.color_no = null, this.buttonPrev_3 = null, this.buttonChange_0 = null, this.buttonChange_1 = null, this.buttonChange_2 = null, this.buttonNext_3 = null, this.textChange_0 = null, this.textChange_1 = null, this.textChange_2 = null, this.focusIndex = null, this.pageCount = null, this.onClick = null, this.removeChildren()
        }, e.prototype.init = function (t) {
            switch (this.buttonPrev_3.removeAllListeners(s.EventType.CLICK), this.buttonNext_3.removeAllListeners(s.EventType.CLICK), this.buttonChange_0.removeAllListeners(s.EventType.CLICK), this.buttonChange_1.removeAllListeners(s.EventType.CLICK), this.buttonChange_2.removeAllListeners(s.EventType.CLICK), t) {
                case 0:
                case 1:
                    break;
                case 2:
                    this.buttonPrev_3.addListener(s.EventType.CLICK, this._onClickPrev3), this.buttonChange_0.addListener(s.EventType.CLICK, this._onClickChange0), this.buttonChange_1.addListener(s.EventType.CLICK, this._onClickChange1), this.buttonNext_3.addListener(s.EventType.CLICK, this._onClickNext3);
                    break;
                default:
                    this.buttonPrev_3.addListener(s.EventType.CLICK, this._onClickPrev3), this.buttonNext_3.addListener(s.EventType.CLICK, this._onClickNext3), this.buttonChange_0.addListener(s.EventType.CLICK, this._onClickChange0), this.buttonChange_1.addListener(s.EventType.CLICK, this._onClickChange1), this.buttonChange_2.addListener(s.EventType.CLICK, this._onClickChange2)
            }
            this.pageCount = t
        }, e.prototype.focus = function (t) {
            if (this.focusIndex = t, this.textChange_0.style.fill = this.color_no, this.textChange_1.style.fill = this.color_no, this.textChange_2.style.fill = this.color_no, this.textChange_0.style.fontSize = 24, this.textChange_1.style.fontSize = 24, this.textChange_2.style.fontSize = 24, t < 2 || this.pageCount <= 2) {
                switch (this.textChange_0.text = "1", this.textChange_1.text = "2", this.textChange_2.text = "3", this.pageCount) {
                    case 0:
                    case 1:
                        this.textChange_0.style.fill = this.color_no, this.textChange_1.style.fill = this.color_no, this.textChange_2.style.fill = this.color_no;
                        break;
                    case 2:
                        this.textChange_0.style.fill = this.color_off, this.textChange_1.style.fill = this.color_off, this.textChange_2.style.fill = this.color_no;
                        break;
                    default:
                        this.textChange_0.style.fill = this.color_off, this.textChange_1.style.fill = this.color_off, this.textChange_2.style.fill = this.color_off
                }
                switch (t) {
                    case 0:
                        this.textChange_0.style.fill = this.color_on, this.textChange_0.style.fontSize = 30;
                        break;
                    case 1:
                        this.textChange_1.style.fill = this.color_on, this.textChange_1.style.fontSize = 30;
                        break;
                    case 2:
                        this.textChange_2.style.fill = this.color_on, this.textChange_2.style.fontSize = 30
                }
            } else if (this.pageCount - 3 < t) switch (this.textChange_0.text = "" + (this.pageCount - 3 + 1), this.textChange_1.text = "" + (this.pageCount - 2 + 1), this.textChange_2.text = "" + (this.pageCount - 1 + 1), this.textChange_0.style.fill = this.color_off, this.textChange_1.style.fill = this.color_off, this.textChange_2.style.fill = this.color_off, this.focusIndex) {
                case this.pageCount - 3:
                    this.textChange_0.style.fill = this.color_on, this.textChange_0.style.fontSize = 30;
                    break;
                case this.pageCount - 2:
                    this.textChange_1.style.fill = this.color_on, this.textChange_1.style.fontSize = 30;
                    break;
                case this.pageCount - 1:
                    this.textChange_2.style.fill = this.color_on, this.textChange_2.style.fontSize = 30
            } else this.textChange_0.text = "" + (this.focusIndex - 1 + 1), this.textChange_1.text = "" + (this.focusIndex + 1), this.textChange_2.text = "" + (this.focusIndex + 1 + 1), this.textChange_0.style.fill = this.color_off, this.textChange_1.style.fill = this.color_on, this.textChange_2.style.fill = this.color_off, this.textChange_1.style.fontSize = 37;
            this.textChange_0.position.set(this.BASE - Math.floor(this.textChange_0.width / 2) + this.NUMBEROFFSET + 0 * this.PADDING, -Math.floor(this.textChange_0.height / 2)), this.textChange_1.position.set(this.BASE - Math.floor(this.textChange_1.width / 2) + this.NUMBEROFFSET + 1 * this.PADDING, -Math.floor(this.textChange_1.height / 2)), this.textChange_2.position.set(this.BASE - Math.floor(this.textChange_2.width / 2) + this.NUMBEROFFSET + 2 * this.PADDING, -Math.floor(this.textChange_2.height / 2))
        }, e.prototype.notifyChangeIndex = function (t) {
            this.onClick(t)
        }, e
    }(PIXI.Container);
    e.MiniPager = a
}