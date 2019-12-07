const function1032 = function (t, e, i) {
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
        r = i(1033),
        s = i(228),
        a = i(171),
        _ = i(1034),
        l = i(1039),
        u = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._changeToInfo = function () {
                    e._showInfo()
                }, e._changeToDeck = function () {
                    e._showDeck()
                }, e._onStartPractice = function () {
                    for (var t = e._deck.selected_deck_id, i = o.default.model.deck.get(t), n = o.default.model.basic.medal_num, _ = o.default.model.basic.nickName, l = new s.DeckModelReplica(i, !0, n, _), u = new Array, c = e._selected_rival.ships, h = 0; h < c.length; h++) {
                        var p = c[h];
                        if (null == p) u.push(null);
                        else {
                            var d = p.id,
                                f = p.level,
                                y = new a.ShipModelReplica(1, !0, h, d, -h, f);
                            u.push(y)
                        }
                    }
                    var m = e._selected_rival.id,
                        g = e._selected_rival.medal_num,
                        v = e._selected_rival.name,
                        b = e._selected_rival.deck_name,
                        w = new s.DeckModelReplica(m, !0, g, v, 0, b, u),
                        x = new r.PracticeSceneModel(l, w);
                    o.default.scene.change(32, x), e.emit("close")
                }, e._onClose = function () {
                    e.emit("close")
                }, e._info = new _.UserinfoPanel(e._changeToDeck, e._onClose), e._deck = new l.PanelDeckSelect(e._onClose), e
            }
            return n(e, t), e.prototype.initialize = function (t, e) {
                this._info.initialize(), this._deck.visible = !1, this._deck.initialize(t, e, this._onStartPractice, this._changeToInfo), this.addChild(this._info), this.addChild(this._deck)
            }, e.prototype.update = function (t) {
                this._selected_rival = t, this._info.update(t), this._showInfo()
            }, e.prototype.activate = function () {
                1 == this._info.visible ? (this._info.activate(), this._deck.deactivate()) : (this._deck.activate(), this._info.deactivate())
            }, e.prototype.deactivate = function () {
                this._info.deactivate(), this._deck.deactivate()
            }, e.prototype.dispose = function () {
                this._info.dispose(), this._deck.dispose()
            }, e.prototype._showInfo = function () {
                1 != this._info.visible && (this._deck.deactivate(), this._info.visible = !0, this._deck.visible = !1, this._info.activate())
            }, e.prototype._showDeck = function () {
                1 != this._deck.visible && (this._info.deactivate(), this._deck.visible = !0, this._info.visible = !1, this._deck.activate())
            }, e
        }(PIXI.Container);
    e.ContainerOverlay = u
}