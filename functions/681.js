const function681 = function (t, e, i) {
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
    var o = i(10),
        r = i(0),
        s = i(1),
        a = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._onClickDeckFlag = function (t) {
                    e.onClickDeckFlag(t)
                }, e.interactiveDeckFlag_1 = new _, e.interactiveDeckFlag_2 = new _, e.interactiveDeckFlag_3 = new _, e.interactiveDeckFlag_4 = new _;
                var i = new l,
                    n = new l,
                    s = new l,
                    a = new l;
                return i.x = e.interactiveDeckFlag_1.x = 0, n.x = e.interactiveDeckFlag_2.x = 45, s.x = e.interactiveDeckFlag_3.x = 90, a.x = e.interactiveDeckFlag_4.x = 135, e.interactiveDeckFlag_1.onClick = e._onClickDeckFlag, e.interactiveDeckFlag_2.onClick = e._onClickDeckFlag, e.interactiveDeckFlag_3.onClick = e._onClickDeckFlag, e.interactiveDeckFlag_4.onClick = e._onClickDeckFlag, e.interactiveDeckFlag_1.update(1), e.interactiveDeckFlag_2.update(2), e.interactiveDeckFlag_3.update(3), e.interactiveDeckFlag_4.update(4), i.update(1), n.update(2), s.update(3), a.update(4), e.addChild(i, n, s, a, e.interactiveDeckFlag_1, e.interactiveDeckFlag_2, e.interactiveDeckFlag_3, e.interactiveDeckFlag_4), r.default.model.deck.exist3rdUnit && (e.icon3rdUnit = new PIXI.Sprite(o.COMMON_MISC.getTexture(186)), e.icon3rdUnit.position.set(77, -22), e.addChild(e.icon3rdUnit)), e
            }
            return n(e, t), e.prototype.initialize = function (t, e, i, n) {
                this.interactiveDeckFlag_1.visible = !1, this.interactiveDeckFlag_2.visible = !1, this.interactiveDeckFlag_3.visible = !1, this.interactiveDeckFlag_4.visible = !1, t && (this.interactiveDeckFlag_1.visible = !0), e && (this.interactiveDeckFlag_2.visible = !0), i && (this.interactiveDeckFlag_3.visible = !0), n && (this.interactiveDeckFlag_4.visible = !0)
            }, e.prototype.update = function (t) {
                switch (this.interactiveDeckFlag_1.normal(), this.interactiveDeckFlag_2.normal(), this.interactiveDeckFlag_3.normal(), this.interactiveDeckFlag_4.normal(), t) {
                    case 1:
                        this.interactiveDeckFlag_1.hover();
                        break;
                    case 2:
                        this.interactiveDeckFlag_2.hover();
                        break;
                    case 3:
                        this.interactiveDeckFlag_3.hover();
                        break;
                    case 4:
                        this.interactiveDeckFlag_4.hover()
                }
            }, e.prototype.dispose = function () {
                this.interactiveDeckFlag_1.onClick = this._onClickDeckFlag = null, this.interactiveDeckFlag_2.onClick = this._onClickDeckFlag = null, this.interactiveDeckFlag_3.onClick = this._onClickDeckFlag = null, this.interactiveDeckFlag_4.onClick = this._onClickDeckFlag = null, this.interactiveDeckFlag_1.dispose(), this.interactiveDeckFlag_2.dispose(), this.interactiveDeckFlag_3.dispose(), this.interactiveDeckFlag_4.dispose(), this.onClickDeckFlag = null, this.interactiveDeckFlag_1 = null, this.interactiveDeckFlag_2 = null, this.interactiveDeckFlag_3 = null, this.interactiveDeckFlag_4 = null, this.icon3rdUnit = null, this.removeChildren()
            }, e
        }(PIXI.Container);
    e.DeckSelector = a;
    var _ = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._onClick = function () {
                e.onClick(e.memDeckId)
            }, e.addListener(s.EventType.CLICK, e._onClick), e.interactive = e.buttonMode = !0, e
        }
        return n(e, t), e.prototype.dispose = function () {
            this.onClick = null, this.memDeckId = null, this._onClick = null, this.removeAllListeners(s.EventType.CLICK), this.removeChildren()
        }, e.prototype.update = function (t) {
            this.memDeckId = t
        }, e.prototype.hover = function () {
            var t = o.COMMON_MISC.getTexture(u.getResourceId(this.memDeckId, "on"));
            this.texture = t
        }, e.prototype.normal = function () {
            var t = o.COMMON_MISC.getTexture(u.getResourceId(this.memDeckId, "off"));
            this.texture = t
        }, e
    }(PIXI.Sprite);
    e.InteractiveDeckFlag = _;
    var l = function (t) {
        function e() {
            return t.call(this) || this
        }
        return n(e, t), e.prototype.update = function (t) {
            this.texture = o.COMMON_MISC.getTexture(u.getResourceId(t, "no")), this.memDeckId = t
        }, e
    }(PIXI.Sprite);
    e.DisableDeckFlag = l;
    var u;
    ! function (t) {
        function e(t, e) {
            switch (t) {
                case 1:
                    switch (e) {
                        case "no":
                            return 72;
                        case "on":
                            return 74;
                        case "off":
                            return 73
                    }
                    break;
                case 2:
                    switch (e) {
                        case "no":
                            return 75;
                        case "on":
                            return 77;
                        case "off":
                            return 76
                    }
                    break;
                case 3:
                    switch (e) {
                        case "no":
                            return 78;
                        case "on":
                            return 80;
                        case "off":
                            return 79
                    }
                    break;
                case 4:
                    switch (e) {
                        case "no":
                            return 81;
                        case "on":
                            return 83;
                        case "off":
                            return 82
                    }
            }
            return -1
        }
        t.getResourceId = e
    }(u || (u = {}))
}