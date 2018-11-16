const function1086 = function (t, e, i) {
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
    var o = i(0), r = i(3), s = i(3), a = i(3), _ = i(42), u = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._boxes = new h, e._boxes.position.set(7, 190), e.addChild(e._boxes), e._icon = new l, e.addChild(e._icon), e._name = new c, e._name.position.set(150, 19), e.addChild(e._name), e._params = new _.SlotParamsContainer, e._params.position.set(159, 66), e.addChild(e._params), e
        }

        return n(e, t), e.prototype.dispose = function () {
            this.removeChildren(), this._boxes.dispose(), this._params.dispose(), this._boxes = null, this._icon = null, this._name = null, this._params = null
        }, e.prototype.initialize = function (t) {
            this.texture = r.ALBUM_MAIN.getTexture(86), this._boxes.initialize(), this._boxes.update(t.equipType), this._icon.update(t.iconType), this._name.update(t.equipType, t.iconType), this._params.update(t)
        }, e
    }(PIXI.Sprite);
    e.SlotDetailStatusBox = u;
    var l = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return n(e, t), e.prototype.update = function (t) {
            this.texture = a.ALBUM_SLOT4.getTextureFromMstID(t)
        }, e
    }(PIXI.Sprite);
    e.IconView = l;
    var c = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return n(e, t), e.prototype.update = function (t, e) {
            38 == t ? t = 3 : 93 == t ? t = 13 : 94 == t ? t = 9 : 48 == t && 44 == e && (t = 148), this.texture = s.ALBUM_SLOT3.getTextureFromMstID(t)
        }, e
    }(PIXI.Sprite);
    e.TypeNameView = c;
    var h = function (t) {
        function e() {
            var e = t.call(this) || this;
            e._boxes = [];
            for (var i = 0; i < 8; i++) {
                var n = new PIXI.Sprite;
                n.x = i % 4 * 144, n.y = 54 * Math.floor(i / 4), n.visible = !1, e.addChild(n), e._boxes.push(n)
            }
            return e
        }

        return n(e, t), e.prototype.dispose = function () {
            this.removeChildren(), this._boxes = null
        }, e.prototype.initialize = function () {
            for (var t = [39, 40, 41, 43, 42, 37, 38, 36], e = 0; e < this._boxes.length; e++) {
                var i = t[e];
                this._boxes[e].texture = r.ALBUM_MAIN.getTexture(i)
            }
        }, e.prototype.update = function (t) {
            for (var e = [2, 3, 5, 9, 7, 11, 16, 10], i = 0; i < this._boxes.length; i++) {
                var n = e[i], r = this._boxes[i], s = o.default.model.shipType.get(n);
                r.visible = s.getEquippableTypes().indexOf(t) >= 0
            }
        }, e
    }(PIXI.Container)
}