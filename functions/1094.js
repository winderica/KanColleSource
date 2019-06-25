const function1094 = function (t, e, i) {
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
        r = i(1),
        s = i(4),
        a = i(3),
        _ = i(43),
        u = i(43),
        l = i(43),
        c = i(43),
        h = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._onClose = function () {
                    null != i._cb_onClose && i._cb_onClose()
                }, i._cb_onClose = e, i._title = new p, i._title.position.set(39, 45), i.addChild(i._title), i._message = new s.TextBox(20, 5523516), i._message.position.set(94, 136), i._message.style.breakWords = !0, i._message.style.wordWrap = !0, i._message.style.wordWrapWidth = 598, i._message.style.lineHeight = 33.6, i.addChild(i._message), i._statusBox = new _.SlotDetailStatusBox, i._statusBox.position.set(93, 355), i.addChild(i._statusBox), i._etype = new l.SlotTypeView, i._etype.position.set(873, 37), i.addChild(i._etype), i._content = new c.SlotDetailContent, i._content.position.set(699, 34), i.addChild(i._content), i._close_btn = new PIXI.Sprite, i._close_btn.position.set(1111, 30), i._close_btn.interactive = !0, i.addChild(i._close_btn), i.interactive = !0, i
            }
            return n(e, t), e.prototype.initialize = function (t) {
                this._model = t, this.texture = a.ALBUM_MAIN.getTexture(88);
                var e = t.no,
                    i = t.mst_ids[0];
                this._title.initialize(e, i), this._message.text = t.message.replace(/<br>/g, "\n"), this._statusBox.initialize(t), this._etype.update(t.cardType), this._content.initialize(t), this._close_btn.texture = a.ALBUM_MAIN.getTexture(21)
            }, e.prototype.activate = function () {
                1 != this.buttonMode && (this.buttonMode = !0, this._content.activate(), this.on(r.EventType.CLICK, this._onClose))
            }, e.prototype.deactivate = function () {
                this.buttonMode = !1, this.off(r.EventType.CLICK, this._onClose), this._content.deactivate()
            }, e.prototype.dispose = function () {
                this.removeChildren(), this.deactivate(), this._title.dispose(), this._content.dispose(), this._statusBox.dispose(), this._message.destroy(), this._model = null, this._title = null, this._message = null, this._statusBox = null, this._etype = null, this._content = null, this._close_btn = null, this._cb_onClose = null
            }, e
        }(PIXI.Sprite);
    e.SlotDetailPanel = h;
    var p = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._nums = new u.DetailPanelNumbers, e._nums.position.set(60, 36), e.addChild(e._nums), e._img = new PIXI.Sprite, e.addChild(e._img), e
        }
        return n(e, t), e.prototype.dispose = function () {
            this.removeChildren(), this._nums.dispose(), this._nums = null, this._img = null
        }, e.prototype.initialize = function (t, e) {
            this.texture = a.ALBUM_MAIN.getTexture(87), this._nums.update(t), this._img.texture = o.default.resources.getSlotitem(e, "statustop_item")
        }, e
    }(PIXI.Sprite)
}