const function688 = function (t, e, i) {
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
        s = i(32),
        a = i(1),
        _ = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._onClickYES = function () {
                    e.onClickYES()
                };
                var i = new PIXI.Container;
                i.position.set(69, 153), e.firstShipInDeckBanners = new Array;
                for (var n = 0; n < 6; n++) {
                    var _ = new s.ShipBanner;
                    _.scale.set(.75, .75), _.y = 51 * n, _.visible = !1, e.firstShipInDeckBanners.push(_), i.addChild(_)
                }
                var u = new PIXI.Container;
                u.position.set(678, 153), e.secondShipInDeckBanners = new Array;
                for (var n = 0; n < 6; n++) {
                    var _ = new s.ShipBanner;
                    _.scale.set(.75, .75), _.y = 51 * n, _.visible = !1, e.secondShipInDeckBanners.push(_), u.addChild(_)
                }
                e.background = new PIXI.Sprite;
                var c = o.ORGANIZE_MAIN.getTexture(16),
                    h = new PIXI.Sprite(c),
                    p = o.ORGANIZE_MAIN.getTexture(8);
                return e.buttonBack = new PIXI.Sprite(p), e.message = new PIXI.Sprite, e.firstDeckName = new r.TextBox(12, 16777215), e.secondDeckName = new r.TextBox(12, 16777215), e.toFirstDeckErrorMessageView = new l, e.toSecondDeckErrorMessageView = new l, e.firstDeckName.position.set(60, 123), e.secondDeckName.position.set(667, 123), h.position.set(300, 420), e.buttonBack.position.set(480, 420), e.toFirstDeckErrorMessageView.position.set(276, 103), e.toSecondDeckErrorMessageView.position.set(325, 331), e.buttonBack.interactive = e.buttonBack.buttonMode = !0, e.buttonBack.addListener(a.EventType.CLICK, e._onClickYES), e.addChild(e.background, e.message, h, e.buttonBack, e.firstDeckName, e.secondDeckName, i, u, e.toFirstDeckErrorMessageView, e.toSecondDeckErrorMessageView), e
            }
            return n(e, t), e.prototype.dispose = function () {
                this.removeChildren();
                for (var t = 0; t < this.firstShipInDeckBanners.length; t++) this.firstShipInDeckBanners[t].dispose(), this.firstShipInDeckBanners[t] = null;
                for (var t = 0; t < this.secondShipInDeckBanners.length; t++) this.secondShipInDeckBanners[t].dispose(), this.secondShipInDeckBanners[t] = null;
                this.toFirstDeckErrorMessageView.dispose(), this.toSecondDeckErrorMessageView.dispose(), this.firstDeckName.destroy(), this.secondDeckName.destroy(), this.toFirstDeckErrorMessageView = null, this.toSecondDeckErrorMessageView = null, this.onClickYES = null, this.background = null, this.buttonBack = null, this.message = null, this.firstDeckName = null, this.secondDeckName = null, this.firstShipInDeckBanners = null, this.secondShipInDeckBanners = null
            }, e.prototype.updateFirstDeck = function (t) {
                this.firstDeckName.text = t.name;
                for (var e = t.getShipList(), i = 0; i < e.length; i++) {
                    var n = this.firstShipInDeckBanners[i],
                        o = e[i];
                    null == o ? n.visible = !1 : (n.update(o, !1), n.visible = !0)
                }
            }, e.prototype.updateSecondDeck = function (t) {
                this.secondDeckName.text = t.name;
                for (var e = null != t.expedition, i = t.getShipList(), n = 0; n < i.length; n++) {
                    var o = this.secondShipInDeckBanners[n],
                        r = i[n];
                    null == r ? o.visible = !1 : (o.update(r, e), o.visible = !0)
                }
            }, e.prototype.updateCombineDeck = function (t, e, i, n) {
                this.updateFirstDeck(t), this.updateSecondDeck(e), this.toFirstDeckErrorMessageView.update(i), this.toSecondDeckErrorMessageView.update(n)
            }, e.prototype.updateViewType = function (t) {
                switch (t) {
                    case 1:
                        this.initKidoView();
                        break;
                    case 2:
                        this.initSuijoView();
                        break;
                    case 3:
                        this.initYusoView()
                }
            }, e.prototype.initKidoView = function () {
                var t = o.ORGANIZE_RENGO.getTexture(13);
                this.background.texture = t;
                var e = o.ORGANIZE_RENGO.getTexture(15);
                this.message.texture = e, this.message.position.set(111, 49)
            }, e.prototype.initSuijoView = function () {
                var t = o.ORGANIZE_RENGO.getTexture(19);
                this.background.texture = t;
                var e = o.ORGANIZE_RENGO.getTexture(21);
                this.message.texture = e, this.message.position.set(111, 49)
            }, e.prototype.initYusoView = function () {
                var t = o.ORGANIZE_RENGO.getTexture(22);
                this.background.texture = t;
                var e = o.ORGANIZE_RENGO.getTexture(24);
                this.message.texture = e, this.message.position.set(79, 49)
            }, e
        }(PIXI.Container);
    e.CombineConfirmAlertDialog = _;
    var l = function (t) {
        function e() {
            var e = t.call(this) || this,
                i = new PIXI.Sprite(o.ORGANIZE_RENGO.getTexture(16));
            e.addChild(i), e._message = new r.TextBox(18, 16777215), e._message.position.set(1, 4), e.addChild(e._message);
            var n = new PIXI.Graphics;
            return n.beginFill(0, .5), n.drawRect(0, 0, 328, 75), n.endFill(), e.addChild(n), e.mask = n, e
        }
        return n(e, t), e.prototype.update = function (t) {
            this.cacheAsBitmap = !1, this._message.text = t, this.cacheAsBitmap = !0
        }, e.prototype.dispose = function () {
            this.cacheAsBitmap = !1, this.mask = null, this.removeChildren(), this._message.destroy(), this._message = null
        }, e
    }(PIXI.Container);
    e.RengoErrorMessageView = l
}