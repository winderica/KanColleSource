const function383 = function (t, e, i) {
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
    var o = i(0), r = i(1), s = i(4), a = i(3), _ = i(42), u = i(42), l = i(42), c = i(42), h = i(42),
        p = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._onClose = function () {
                    null != i._cb_onClose && i._cb_onClose()
                }, i._cb_onClose = e, i._title = new d, i._title.position.set(39, 45), i.addChild(i._title), i._message = new s.TextBox(23, 5523516), i._message.position.set(106, 138), i._message.style.breakWords = !0, i._message.style.wordWrap = !0, i._message.style.wordWrapWidth = 585, i._message.style.lineHeight = 34.5, i.addChild(i._message), i._statusBox = new _.ShipDetailStatusBox, i._statusBox.position.set(107, 354), i.addChild(i._statusBox), i._stype = new l.EngStypeView, i._stype.position.set(873, 37), i.addChild(i._stype), i._rader = new c.RaderGraph, i._rader.position.set(255, 513), i.addChild(i._rader), i._content = new h.ShipDetailContent, i._content.position.set(706, 33), i.addChild(i._content), i._close_btn = new PIXI.Sprite, i._close_btn.position.set(1111, 30), i._close_btn.interactive = !0, i.addChild(i._close_btn), i.interactive = !0, i
            }

            return n(e, t), e.prototype.initialize = function (t, e) {
                this._model = t, this.texture = a.ALBUM_MAIN.getTexture(88);
                var i = t.no, n = t.mst_ids[0];
                this._title.initialize(i, n), this._message.text = t.message.replace(/<br>/g, "\n").replace(/\u2019/g, "'"), this._statusBox.initialize(t);
                var o = t.sType;
                this._stype.update(n, o), this._rader.update(null), this._content.initialize(t, e), this._close_btn.texture = a.ALBUM_MAIN.getTexture(21)
            }, e.prototype.preactivate = function () {
                this._content.preactivate()
            }, e.prototype.activate = function () {
                1 != this.buttonMode && (this.buttonMode = !0, this._rader.update(this._model), this._content.activate(), this.on(r.EventType.CLICK, this._onClose))
            }, e.prototype.deactivate = function () {
                this.buttonMode = !1, this.off(r.EventType.CLICK, this._onClose), this._content.deactivate()
            }, e.prototype.dispose = function () {
                this.deactivate(), this._stype.dispose(), this._rader.dispose(), this._content.dispose(), this._cb_onClose = null
            }, e
        }(PIXI.Sprite);
    e.ShipDetailPanel = p;
    var d = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._nums = new u.DetailPanelNumbers, e._nums.position.set(60, 36), e.addChild(e._nums), e._img = new PIXI.Sprite, e.addChild(e._img), e
        }

        return n(e, t), e.prototype.initialize = function (t, e) {
            this.texture = a.ALBUM_MAIN.getTexture(87), this._nums.update(t), this._img.texture = o.default.resources.getShip(e, !1, "album_status")
        }, e
    }(PIXI.Sprite)
}