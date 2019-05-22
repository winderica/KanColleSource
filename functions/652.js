const function652 = function (t, e, i) {
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
    var o = i(146),
        r = i(4),
        s = i(82),
        a = i(5),
        _ = i(653),
        l = i(107),
        u = i(0),
        c = i(158),
        h = i(1),
        p = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._ev = e, i._maxTextLength = 12, i._deleteInputText = function () {
                    o.EditTextBoxUtil.text = "", i._btnSubmit.visible = !1
                }, i._onToggleSubmit = function (t) {
                    i._btnSubmit.texture = t.type == h.EventType.MOUSEOVER ? i._btnImages.hover : i._btnImages.def
                }, i._inputAndSubmitManage = function () {
                    i._errorMessage.text = "", i._showSubmitBtn()
                }, i._onClick = function () {
                    var t = o.EditTextBoxUtil.text;
                    return "" == t ? (i._errorMessage.text = "\u540d\u524d\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002", !1) : t.length > i._maxTextLength ? (i._errorMessage.text = "\u540d\u524d\u306f12\u6587\u5b57\u307e\u3067\u3067\u3059\u3002", !1) : (i._btnSubmit.texture = i._btnImages.def, i._btnSubmit.interactive = !1, i._btnDelete.interactive = !1, void i._getNickNameId(t))
                }, i._getNickNameId = function (t) {
                    var e = t;
                    e = e.replace(/%/g, "\uff05"), e = e.replace(/\t/g, " "), e = e.replace(/</g, "\uff1c"), e = e.replace(/>/g, "\uff1e"), e = e.replace(/&/g, "\uff06"), e = e.replace(/\"/g, ""), e = e.replace(/\'/g, ""), e = e.replace(/\`/g, ""), i._NickName = e, i._GadgetIP = "http://" + u.default.settings.osapi_root;
                    var n = i._GadgetIP;
                    window.parent.postMessage(c.PostMessageType.NICK_NAME + "\t" + i._NickName, n), window.addEventListener("message", i._onCallback)
                }, i._onCallback = function (t) {
                    if (window.removeEventListener("message", i._onCallback), t.origin == i._GadgetIP) {
                        var e = t.data;
                        i._setNickName(e)
                    }
                }, i.alpha = 0, i._btnImages = {
                    def: s.TUTORIAL_MAIN.getTexture(5),
                    hover: s.TUTORIAL_MAIN.getTexture(6)
                }, i
            }
            return n(e, t), e.prototype.initialize = function () {
                var t = new PIXI.Container,
                    e = 0,
                    i = new r.TextBox(30, 0);
                i.text = "\u63d0\u7763\u306e\u540d\u524d", i.anchor.set(0, .5), e += i.width;
                var n = new PIXI.Sprite(s.TUTORIAL_MAIN.getTexture(20));
                n.position.set(i.width + 10, 0), e += n.width;
                var _ = Math.floor(n.height / 2);
                this._btnDelete = new PIXI.Sprite(s.TUTORIAL_MAIN.getTexture(0)), this._btnDelete.interactive = !0, this._btnDelete.buttonMode = !0, this._btnDelete.on(h.EventType.CLICK, this._deleteInputText), this._btnDelete.anchor.set(1, .5), this._btnDelete.position.set(e, _ - 2), i.position.set(0, _), t.position.set(218, 330), t.width = e, t.height = n.height, t.addChild(i, n, this._btnDelete);
                var l = new PIXI.Point(t.x + n.x + 8, t.y + 7),
                    u = this.toGlobal(l);
                o.EditTextBoxUtil.init(u.x, u.y, n.width - this._btnDelete.width - 22, 22, 0), o.EditTextBoxUtil.text = "", o.EditTextBoxUtil.onLengthCheck(12, this._inputAndSubmitManage), this._inputExtend = document.getElementById("r_editbox"), this._inputExtend.addEventListener("blur", this._inputAndSubmitManage);
                var c = new PIXI.Container,
                    p = {
                        x: t.x + t.width,
                        y: t.y + t.height
                    },
                    d = new r.TextBox(30, 0);
                d.text = "\uff0812\u6587\u5b57\u307e\u3067\uff09", d.position.set(p.x - Math.floor(d.width / 2) - 5, p.y + 5), this._errorMessage = new r.TextBox(27, 10027008), this._errorMessage.text = "", this._errorMessage.anchor.set(.5, 0), this._errorMessage.position.set(a.default.width / 2, d.y + d.height), this._btnSubmit = new PIXI.Sprite(this._btnImages.def), this._btnSubmit.buttonMode = !0, this._btnSubmit.anchor.set(.5, 0), this._btnSubmit.position.set(a.default.width / 2, p.y + 125), this._btnSubmit.on(h.EventType.CLICK, this._onClick).on(h.EventType.MOUSEOVER, this._onToggleSubmit).on(h.EventType.MOUSEOUT, this._onToggleSubmit), this._btnSubmit.interactive = !1, this._btnSubmit.visible = !1, c.addChild(d, this._errorMessage, this._btnSubmit), this.addChild(t, c), this._ev.emit("tutorial-scene-start")
            }, e.prototype.start = function () {
                this._ev.emit("tutorial-title", !0, 21), createjs.Tween.get(this).wait(800).to({
                    alpha: 1
                }, 400, createjs.Ease.linear).call(function () {
                    o.EditTextBoxUtil.setVisibility(!0)
                })
            }, e.prototype._showSubmitBtn = function () {
                var t = "" !== o.EditTextBoxUtil.text;
                t != this._btnSubmit.visible && (this._btnSubmit.visible = t, this._btnSubmit.interactive = t)
            }, e.prototype._setNickName = function (t) {
                new _.APISaveNickName(this._NickName, t).start(), this._ev.emit("tutorial-next-scene")
            }, e.prototype.dispose = function () {
                var t = this;
                createjs.Tween.get(this).to({
                    alpha: 0
                }, 100, createjs.Ease.linear).call(function () {
                    o.EditTextBoxUtil.text = "", o.EditTextBoxUtil.setVisibility(!1), t._ev.emit("tutorial-remove-scene")
                }), o.EditTextBoxUtil.onkeydown = null, o.EditTextBoxUtil.onkeyup = null, this._btnDelete.off(h.EventType.CLICK, this._deleteInputText), this._btnSubmit.off(h.EventType.CLICK, this._onClick).off(h.EventType.MOUSEOVER, this._onToggleSubmit).off(h.EventType.MOUSEOUT, this._onToggleSubmit), this._inputExtend.removeEventListener("blur", this._inputAndSubmitManage)
            }, e
        }(l.SceneBase);
    e.SceneInputName = p
}