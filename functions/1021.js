const function1021 = function (t, e, i) {
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
    var o = i(4),
        r = i(22),
        s = i(30),
        a = i(38),
        _ = i(368),
        l = i(1022),
        u = i(1023),
        c = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._onLoadCompleteAreaTextImage = function () {
                    1 == n._panel_inexpe.visible && (n._panel_inexpe.deck_name.y = n._areaText.y + n._areaText.height - 1)
                }, n._panel_noexpe = new l.PanelDetailNoExpe(e), n._panel_inexpe = new u.PanelDetailInExpe(i), n
            }
            return n(e, t), e.prototype.initialize = function () {
                var t = new PIXI.Sprite(s.SALLY_COMMON.getTexture(27));
                t.position.set(0, 138), this.addChild(t);
                var e = new PIXI.Sprite(s.SALLY_COMMON.getTexture(50));
                e.position.set(0, 102), this.addChild(e);
                var i = new PIXI.Sprite(a.SALLY_EXPEDITION.getTexture(15));
                i.position.set(24, 111), this.addChild(i);
                var n = new PIXI.Sprite(a.SALLY_EXPEDITION.getTexture(43));
                n.position.set(28, 235), this.addChild(n);
                var r = new PIXI.Sprite(a.SALLY_EXPEDITION.getTexture(44));
                r.position.set(28, 394), this.addChild(r), this._panel_noexpe.initialize(), this.addChild(this._panel_noexpe), this._panel_inexpe.initialize(), this._panel_inexpe.visible = !1, this.addChild(this._panel_inexpe), this._title = new o.TextBox(25, 4999235), this._title.position.set(22, 156), this.addChild(this._title), this._areaText = new _.AreaTextImage, this._areaText.position.set(27, 187), this.addChild(this._areaText), this._description = new o.TextBox(21, 4999235), this._description.style.wordWrap = !0, this._description.style.wordWrapWidth = 322, this._description.style.breakWords = !0, this._description.position.set(22, 261), this.addChild(this._description), this._time = new o.TextBox(22, 4999235), this._time.anchor.set(1, 0), this._time.position.set(343, 390), this.addChild(this._time)
            }, e.prototype.update = function (t, e) {
                if (null == t) this._title.text = "", this._areaText.clear(), this._description.text = "", this._time.text = "", this._panel_noexpe.visible = !0, this._panel_inexpe.visible = !1, this._panel_noexpe.update(null);
                else {
                    this._title.text = t.name, this._title.text = t.name.replace(/<br.*?>/g, "\n"), 42 == t.areaID ? this._areaText.x = 18 : this._areaText.x = 27, this._description.text = t.detail.replace(/<br\s*\/?>/g, "\n");
                    var i = t.time,
                        n = r.MathUtil.zeroPadding(Math.floor(i / 60), 2),
                        o = r.MathUtil.zeroPadding(i % 60, 2);
                    this._time.text = n + ":" + o + ":00", null != e ? (this._panel_noexpe.visible = !1, this._panel_inexpe.visible = !0, this._panel_noexpe.update(null), this._panel_inexpe.update(t, e)) : (this._panel_noexpe.visible = !0, this._panel_inexpe.visible = !1, this._panel_noexpe.update(t), this._panel_inexpe.update(null, null)), this._areaText.update(t.areaID, this._onLoadCompleteAreaTextImage)
                }
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._title.destroy(), this._areaText.dispose(), this._description.destroy(), this._time.destroy(), this._panel_noexpe.dispose(), this._panel_inexpe.dispose()
            }, e
        }(PIXI.Container);
    e.ContainerDetail = c
}