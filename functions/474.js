const function474 = function (t, e, i) {
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
    var o = i(5), r = i(0), s = i(1), a = i(66), _ = i(8), l = i(40), u = i(25), c = i(204), h = i(1467),
        p = i(206), d = function (t) {
            function e(e, i, n, u, c, h) {
                void 0 === h && (h = null);
                var p = t.call(this) || this;
                return p._moveCard = function () {
                    null != p._pre_task && (p._pre_task.dispose(), p._pre_task = null), p._play_bgm && r.default.sound.bgm.play(132, !0, 1e3);
                    var t = new PIXI.Point(p._insert.card.x, p._insert.card.y),
                        e = new PIXI.Point(o.default.width / 2, o.default.height / 2),
                        i = new PIXI.Point(t.x + 300, t.y), n = new PIXI.Point(e.x + 150, e.y + 150);
                    a.TweenUtil.create3BezierTween(p._insert.card, t, i, n, e, 700), createjs.Tween.get(p._insert.card).to({
                        scaleX: .86,
                        scaleY: .86,
                        rotation: 4 * Math.PI
                    }, 700).to({ scaleX: 1, scaleY: 1 }, 133).wait(700).call(function () {
                        p._insert.particle.activate()
                    }).wait(1e3).call(p._flash)
                }, p._flash = function () {
                    var t = r.default.model.slot.getMst(p._mst_id);
                    p._bonus.alpha = 1, p._bonus.initialize(t.mstID, p._count, p._level, t.name), createjs.Tween.get(p._insert.card).to({ alpha: 0 }, 800), createjs.Tween.get(p._insert.bg_dark).to({ alpha: 0 }, 800), createjs.Tween.get(p._insert.flash).to({
                        scaleX: 3.5,
                        scaleY: 3.5
                    }, 800), createjs.Tween.get(p._insert).wait(800).to({ alpha: 0 }, 200).call(function () {
                        p._layer.removeChild(p._insert), p._insert.dispose(), p._insert = null, p._showBonus()
                    })
                }, p._showMessageBox = function () {
                    createjs.Tween.get(p._bonus.message_box).to({ y: 480 }, 300).call(p._waitClick)
                }, p._waitClick = function () {
                    p._bonus.message_box.activate();
                    var t = new l.GearBtnHome;
                    t.position.set(1140, 660), t.initialize(), t.activate(), p._bonus.addChild(t);
                    var e = new _.AreaBox(0);
                    e.interactive = !0, e.buttonMode = !0, p._bonus.addChild(e), e.once(s.EventType.CLICK, function () {
                        p._bonus.removeChild(e), p._finalize(t)
                    })
                }, p._layer = e, p._mst_id = i, p._count = n, p._level = u, p._pre_task = h, p._play_bgm = c, p
            }

            return n(e, t), e.prototype._start = function () {
                this._bonus = new h.BonusSlot, this._bonus.alpha = 0, this._layer.addChild(this._bonus), this._insert = new c.BonusInsert, this._loadBG()
            }, e.prototype._loadBG = function () {
                var t = this, e = r.default.model.slot.getMst(this._mst_id);
                this._bonus.bg.initiailzeForSlotitem(e.rarity, function () {
                    t._loadSlotImage()
                })
            }, e.prototype._loadSlotImage = function () {
                var t = this, e = new u.SlotLoader;
                e.add(this._mst_id, "card"), e.load(function () {
                    t._insert.preload(function () {
                        t._showInsert()
                    })
                })
            }, e.prototype._showInsert = function () {
                this._insert.initialize(2), this._insert.alpha = 0, this._insert.card.scale.set(.38), this._insert.card.position.set(o.default.width / 2 - 228, o.default.height / 2 + 521), this._insert.flash.position.set(o.default.width / 2, o.default.height / 2), this._layer.addChild(this._insert), createjs.Tween.get(this._insert).to({ alpha: 1 }, 500).call(this._moveCard)
            }, e.prototype._showBonus = function () {
                this._bonus.particle.activate(), createjs.Tween.get(this._bonus.white).to({ alpha: 0 }, 500).call(this._showMessageBox)
            }, e.prototype._finalize = function (t) {
                var e = this;
                this._play_bgm && r.default.sound.bgm.fadeOut(1200), createjs.Tween.get(t).to({ alpha: 0 }, 300).call(function () {
                    t.deactivate(), e._bonus.removeChild(t), e._endTask()
                })
            }, e.prototype.dispose = function () {
                this._bonus.dispose(), this._layer.removeChild(this._bonus), this._layer = null, this._bonus = null
            }, e
        }(p.TaskBonusBase);
    e.TaskBonusSlot = d
}