const function1268 = function (t, e, i) {
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
        r = i(5),
        s = i(19),
        a = i(12),
        _ = i(2),
        l = i(13),
        u = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._EFFECT_MAX = 24, i._ship_mst_id = e, i._ship_sprite = new a.Sprite, i._get_flash = new a.Sprite, i._txt_repair = new a.Sprite, i._ship_layer = new PIXI.Container, i._kiraPos = [new PIXI.Point(550, 66), new PIXI.Point(504, 82), new PIXI.Point(615, 127), new PIXI.Point(453, 226), new PIXI.Point(570, 261), new PIXI.Point(669, 207), new PIXI.Point(498, 348), new PIXI.Point(693, 375), new PIXI.Point(492, 463), new PIXI.Point(583, 556), new PIXI.Point(499, 589), new PIXI.Point(415, 693)], i._poreload_task = new c(e), i
            }
            return n(e, t), Object.defineProperty(e.prototype, "EFFECT_MAX", {
                get: function () {
                    return this._EFFECT_MAX
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "ship_layer", {
                get: function () {
                    return this._ship_layer
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "get_flash", {
                get: function () {
                    return this._get_flash
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "white", {
                get: function () {
                    return this._white
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "txt_repair", {
                get: function () {
                    return this._txt_repair
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "kirakira", {
                get: function () {
                    return this._kirakira
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "kiraPos", {
                get: function () {
                    return this._kiraPos
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.getPreLoadTask = function () {
                return this._poreload_task
            }, e.prototype.initilize = function () {
                this._get_flash = new PIXI.Sprite(s.MAP_COMMON.getTexture(45)), this._get_flash.visible = !1, this._get_flash.anchor.set(.5), this._get_flash.position.set(r.default.width / 2, r.default.height / 2), this._get_flash.alpha = 0, this._get_flash.scale.set(.3), this._white = new PIXI.Graphics, this._white.visible = !1, this._white.beginFill(16777215, 1), this._white.drawRect(0, 0, r.default.width, r.default.height), this._white.endFill(), this._white.alpha = 0, this._txt_repair = new PIXI.Sprite(s.MAP_COMMON.getTexture(189)), this._txt_repair.visible = !1, this._txt_repair.anchor.set(0, .5), this._txt_repair.position.set(1200, 487), this._kirakira = [];
                for (var t = 0; t < this._EFFECT_MAX; t++) {
                    var e = new PIXI.Sprite(s.MAP_COMMON.getTexture(102));
                    e.anchor.set(.5), this._kirakira.push(e)
                }
                var i = o.default.resources.getShip(this._ship_mst_id, !1, "full");
                this._ship_sprite = new PIXI.Sprite(i);
                var n = o.default.model.ship_graph.get(this._ship_mst_id).getFaceRect(!1);
                this._ship_sprite.position.set(-(n.x + n.width / 2), -(n.y + n.height / 2)), this._ship_layer.visible = !0, this._ship_layer.position.set(600, 200), this._ship_layer.scale.set(2), this._ship_layer.alpha = 0, this._ship_layer.addChild(this._ship_sprite), this.addChild(this._get_flash, this._white, this._ship_layer, this._txt_repair);
                for (var t = 0; t < this._EFFECT_MAX; t++) this._kirakira[t].visible = !1, this._kirakira[t].scale.set(0), this.addChild(this._kirakira[t])
            }, e
        }(PIXI.Container);
    e.AnchorageRepairLayer = u;
    var c = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._ship_mst_id = e, i
        }
        return n(e, t), e.prototype._start = function () {
            this._loadShipImage()
        }, e.prototype._loadShipImage = function () {
            var t = this,
                e = new l.ShipLoader;
            e.add(this._ship_mst_id, !1, "full"), e.load(function () {
                t._endTask()
            })
        }, e
    }(_.TaskBase);
    e.PreLoadShipImage = c
}