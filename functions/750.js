const function750 = function (t, e, i) {
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
    var o = i(0), r = i(47), s = i(751), a = i(753), _ = i(754), u = i(69), l = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return n(e, t), e.prototype.getPreInitializeTask = function (t) {
            return new s.PreInitializeTask(this)
        }, e.prototype.getInitializeTask = function (t) {
            return new a.InitializeTask(this)
        }, e.prototype.getFinalizeTask = function () {
            var t = this;
            return new u.FuncTask(function () {
                t.taskIdleMain.dispose(), t.taskIdleMain = null
            })
        }, e.prototype.start = function () {
            var t = o.default.model.deck.get(1).getShipMemID(0);
            this.taskIdleMain = new _.TaskIdleMain(this), this.taskIdleMain.start(1, t)
        }, e
    }(r.SceneBase);
    e.RemodelScene = l
}