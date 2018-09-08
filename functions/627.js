const function627 = function (t, e, i) {
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
    var o = i(0), r = i(299), s = i(300), a = i(48), _ = function (t) {
        function e(e, i, n, o) {
            var r = t.call(this, e, i) || this;
            return r._quest_id = n, r._fade = o, r
        }

        return n(e, t), Object.defineProperty(e.prototype, "model", {
            get: function () {
                return this._model
            }, enumerable: !0, configurable: !0
        }), e.prototype._createContent = function () {
            this._showDialog()
        }, e.prototype._showDialog = function () {
            this._showContent()
        }, e.prototype._showContent = function () {
            var t = this, e = this._getModel();
            if (null == e) {
                e = new r.ModelChangeModelEdit;
                var i = this.model.mst_id_from;
                e.setItemFrom(i);
                var n = this.model.mst_id_to;
                e.setItemTobe(n);
                var a = this.model.message2;
                e.setMessage("\u6a5f\u7a2e\u8ee2\u63db\u4e2d...", a)
            }
            this.model.need_basic_update = e.isNeedUpdateUserBasic(), this.model.need_useitem_update = e.isNeedUpdateUseitem();
            var _ = o.default.view.overLayer, u = new s.ModelChangeTask(_, e);
            this._fade.visible = !1, u.start(function () {
                t._fade.visible = !0, t._showContentComplete()
            })
        }, e.prototype._removeContent = function () {
        }, e.prototype._showContentComplete = function () {
            this._removeContent(), this._endTask()
        }, e.prototype._getModel = function () {
            var t = this._quest_id;
            if (629 == t || 630 == t) {
                var e = new r.ModelChangeModelEdit;
                e.setItemFrom(this.model.mst_id_from), e.setItemTobe(this.model.mst_id_to);
                var i = "\u90e8\u968a\u518d\u7de8\u4e2d...", n = this.model.message2;
                return e.setMessage(i, n), e
            }
            if (626 == t || 659 == t || 660 == t) {
                var e = new r.ModelChangeModelEdit;
                e.setItemFrom(this.model.mst_id_from), e.setItemTobe(this.model.mst_id_to);
                var i = "\u90e8\u968a\u518d\u7de8\u4e2d...", n = this.model.message2;
                return e.setMessage(i, n), e.addMeltIntoTojoin(70, 2), e
            }
            if (637 == t) {
                var e = new r.ModelChangeModelEdit;
                return e.setItemFrom(19), e.setItemTobe(70, !0), e.setMessage("\u300c\u719f\u7df4\u642d\u4e57\u54e1\u306e\u990a\u6210\u300d\u4efb\u52d9\u9042\u884c\u4e2d", this.model.message2), e.addMeltIntoUseitem([57, 57], 1), e
            }
            if (639 == t) {
                var e = new r.ModelChangeModelEdit;
                return e.setItemFrom(58), e.setItemTobe(179), e.setMessage("\u300c\u8a66\u88fd\u5175\u88c5\u306e\u958b\u767a\u300d\u4efb\u52d9\u9042\u884c\u4e2d", this.model.message2), e.addMeltIntoUseitem([57, 57], 1), e.addMeltIntoSlotitem([58], 2), e
            }
            if (641 == t) {
                var e = new r.ModelChangeModelEdit;
                return e.setItemFrom(-1), e.setItemTobe(168), e.setMessage("\u300c\u822a\u7a7a\u57fa\u5730\u8a2d\u55b6\u300d\u4e8b\u524d\u6e96\u5099\u3092\u5b9f\u65bd\u4e2d\u2026", this.model.message2), e.addMeltIntoSlotitem([37, 37], 1), e.addMeltIntoSlotitem([19, 19], 2), e
            }
            if (642 == t) {
                var e = new r.ModelChangeModelEdit;
                return e.setItemFrom(-1), e.setItemTobe(168), e.setMessage("\u300c\u9678\u653b\u300d\u968a\u306e\u5897\u52e2\u3092\u5b9f\u65bd\u4e2d\u2026", this.model.message2), e.addMeltIntoSlotitem([37, 37], 1), e.addMeltIntoSlotitem([23, 23], 2), e
            }
            if (643 == t) {
                var e = new r.ModelChangeModelEdit;
                return e.setItemFrom(168), e.setItemTobe(169), e.setMessage("\u4e3b\u529b\u300c\u9678\u653b\u300d\u3092\u8abf\u9054\u4e2d\u2026", this.model.message2), e.addMeltIntoSlotitem([16, 16], 1), e
            }
            if (644 == t) {
                var e = new r.ModelChangeModelEdit;
                return e.setItemFrom(169), e.setItemTobe(180), e.setMessage("\u300c\u4e00\u5f0f\u9678\u653b\u300d\u6027\u80fd\u5411\u4e0a\u578b\u3092\u8abf\u9054\u4e2d\u2026", this.model.message2), e.addMeltIntoSlotitem([17, 17], 1), e
            }
            if (645 == t) {
                var e = new r.ModelChangeModelEdit;
                return e.setItemFrom(-1), e.setItemTobe(146), e.setMessage("\u300c\u6d0b\u4e0a\u88dc\u7d66\u300d\u7269\u8cc7\u3092\u8abf\u9054\u4e2d\u2026", this.model.message2), e.addMeltIntoUseitem([31, 32], 1), e.addMeltIntoSlotitem([75, 75, 36], 2), e
            }
            if (646 == t) {
                var e = new r.ModelChangeModelEdit;
                return e.setItemFrom(-1), e.setItemTobe(52, !0), e.setMessage("\u300c\u7279\u6ce8\u5bb6\u5177\u8077\u4eba\u300d\u3092\u62db\u8058\u4e2d\u2026", this.model.message2), e.addMeltIntoUseitem([44], 1), e.addMeltIntoSlotitem([39, 39, 40, 40], 2), e
            }
            if (648 == t) {
                var e = new r.ModelChangeModelEdit;
                return e.setItemFrom(-1), e.setItemTobe(52, !0), e.setMessage("\u300c\u7279\u6ce8\u5bb6\u5177\u8077\u4eba\u300d\u3092\u62db\u8058\u4e2d\u2026", this.model.message2), e.addMeltIntoUseitem([44], 1), e.addMeltIntoSlotitem([14, 14], 2), e.addMeltIntoSlotitem([11, 11], 2), e
            }
            if (649 == t) {
                var e = new r.ModelChangeModelEdit;
                return e.setItemFrom(-1), e.setItemTobe(151), e.setMessage("\u300c\u65b0\u6a5f\u8ef8\u5075\u5bdf\u6a5f\u300d\u3092\u958b\u767a\u4e2d\u2026", this.model.message2), e.addMeltIntoSlotitem([169], 1), e.addMeltIntoSlotitem([54, 54], 2), e
            }
            if (650 == t) {
                var e = new r.ModelChangeModelEdit;
                return e.setItemFrom(-1), e.setItemTobe(200), e.setMessage("\u300c\u5674\u5f0f\u6226\u95d8\u7206\u6483\u6a5f\u300d\u3092\u958b\u767a\u4e2d\u2026", this.model.message2), e.addMeltIntoUseitem([74, 74], 1), e.addMeltIntoUseitem([71], 2), e
            }
            if (651 == t) {
                var e = new r.ModelChangeModelEdit;
                return e.setItemFrom(-1), e.setItemTobe(71, !0), e.setMessage("\u300c\u71c3\u713c\u5674\u5c04\u63a8\u9032\u5668\u300d\u3092\u5897\u7523\u4e2d\u2026", this.model.message2), e.addMeltIntoSlotitem([18, 18], 1), e.addMeltIntoSlotitem([22, 22], 2), e
            }
            if (652 == t) {
                var e = new r.ModelChangeModelEdit;
                return e.setItemFrom(-1), e.setItemTobe(52, !0), e.setMessage("\u300c\u7279\u6ce8\u5bb6\u5177\u8077\u4eba\u300d\u3092\u62db\u8058\u4e2d\u2026", this.model.message2), e.addMeltIntoUseitem([44], 1), e.addMeltIntoSlotitem([37, 37], 2), e.addMeltIntoSlotitem([19, 19], 2), e
            }
            if (653 == t) {
                var e = new r.ModelChangeModelEdit;
                return e.setItemFrom(-1), e.setItemTobe(52, !0), e.setMessage("\u7bc0\u5206\u6e96\u5099\uff1a\u300c\u7279\u6ce8\u5bb6\u5177\u8077\u4eba\u300d\u3092\u62db\u8058\u4e2d\u2026", this.model.message2), e.addMeltIntoUseitem([44], 1), e.addMeltIntoSlotitem([1, 1], 2), e.addMeltIntoSlotitem([25, 25], 2), e
            }
            if (654 == t) {
                var e = new r.ModelChangeModelEdit;
                return e.setItemFrom(-1), e.setItemTobe(209), e.setMessage("\u3010\u4e19\u3011\u4f5c\u6226\u7528\uff1a\u300c\u5f69\u96f2\u300d\u8abf\u9054\uff06\u8f38\u9001\u5206\u89e3\u4e2d", this.model.message2), e.addMeltIntoUseitem([3], 1), e.addMeltIntoSlotitem([16], 2), e
            }
            if (655 == t) {
                var e = new r.ModelChangeModelEdit;
                return e.setItemFrom(-1), e.setItemTobe(209), e.setMessage("\u300c\u5149\u300d\u4f5c\u6226\u7528\uff1a\u300c\u5f69\u96f2\u300d\u8f38\u9001\u5206\u89e3\u4e2d", this.model.message2), e.addMeltIntoUseitem([3], 1), e.addMeltIntoSlotitem([54], 2), e
            }
            if (656 == t) {
                var e = new r.ModelChangeModelEdit;
                return e.setItemFrom(207), e.setItemTobe(208), e.setMessage("\u7b2c\u4e00\u6f5c\u6c34\u968a\u904b\u7528\u822a\u7a7a\u968a\uff1a\u300c\u6674\u5d50(\u516d\u4e09\u4e00\u7a7a)\u300d\u3092\u7de8\u6210\u4e2d\u2026", this.model.message2), e.addMeltIntoSlotitem([62], 1), e
            }
            if (657 == t) {
                var e = new r.ModelChangeModelEdit;
                return e.setItemFrom(-1), e.setItemTobe(62, !0), e.setMessage("\u6625\u306e\u6e96\u5099\uff1a\u6843\u306e\u7bc0\u53e5\u306e\u6e96\u5099\u4e2d\u2026", this.model.message2), e.addMeltIntoUseitem([44], 1), e.addMeltIntoSlotitem([23, 23], 2), e.addMeltIntoSlotitem([13, 13], 2), e
            }
            if (658 == t) {
                var e = new r.ModelChangeModelEdit;
                return e.setItemFrom(-1), e.setItemTobe(213), e.setMessage("\u300c\u65b0\u578b\u6f5c\u6c34\u8266\u5175\u88c5\u300d\u3092\u958b\u767a\u4e2d\u2026", this.model.message2), e.addMeltIntoUseitem([3], 1), e.addMeltIntoSlotitem([15, 15, 15], 2), e.addMeltIntoSlotitem([46, 46, 46], 2), e
            }
            if (666 == t) {
                var e = new r.ModelChangeModelEdit;
                return e.setItemFrom(79), e.setItemTobe(237), e.setMessage("\u7cbe\u92ed\u300c\u745e\u96f2\u300d\u968a\u306e\u7de8\u6210\u4e2d\u2026", this.model.message2), e.addMeltIntoSlotitem([23, 23], 1), e.addMeltIntoSlotitem([26, 26], 2), e.addMeltIntoTojoin(70, 2), e
            }
            if (668 == t) {
                var e = new r.ModelChangeModelEdit;
                return e.setItemFrom(-1), e.setItemTobe(241), e.setMessage("\u3088\u304f\u7092\u3081\u3066\u300c\u65b0\u578b\u306e\u304a\u306b\u304e\u308a\u300d\u3092\u8abf\u7406\u4e2d\u2026", this.model.message2), e.addMeltIntoUseitem([31], 1), e.addMeltIntoUseitem([34], 1), e.addMeltIntoSlotitem([145, 145], 2, 170), e
            }
            if (669 == t) {
                var e = new r.ModelChangeModelEdit;
                return e.setItemFrom(205), e.setItemTobe(254), e.setMessage("\u591c\u6226\u578b\u8266\u4e0a\u6226\u95d8\u6a5f\u3092\u958b\u767a\u4e2d\u2026", this.model.message2), e.addMeltIntoUseitem([77, 3], 1), e.addMeltIntoUseitem([4, 34], 2), e
            }
            if (670 == t) {
                var e = new r.ModelChangeModelEdit;
                return e.setItemFrom(206), e.setItemTobe(255), e.setMessage("\u591c\u6226\u578b\u8266\u4e0a\u6226\u95d8\u6a5f\u3092\u958b\u767a\u4e2d\u2026", this.model.message2), e.addMeltIntoUseitem([77, 3], 1), e.addMeltIntoUseitem([4, 34], 2), e
            }
            if (671 == t) {
                var e = new r.ModelChangeModelEdit;
                return e.setItemFrom(256), e.setItemTobe(257), e.setMessage("\u591c\u9593\u4f5c\u6226\u578b\u8266\u4e0a\u653b\u6483\u6a5f\u3092\u958b\u767a\u4e2d\u2026", this.model.message2), e.addMeltIntoUseitem([77, 3], 1), e.addMeltIntoUseitem([4, 34], 2), e
            }
            if (672 == t) {
                var e = new r.ModelChangeModelEdit;
                return e.setItemFrom(107), e.setItemTobe(272), e.setMessage("\u300c\u904a\u6483\u90e8\u968a \u8266\u968a\u53f8\u4ee4\u90e8\u300d\u3092\u5275\u8a2d\u4e2d\u2026", this.model.message2), e.addMeltIntoUseitem([33, 3], 1), e.addMeltIntoUseitem([78, 78], 2, 150), e
            }
            if (678 == t) {
                var e = new r.ModelChangeModelEdit;
                e.setItemFrom(this.model.mst_id_from), e.setItemTobe(this.model.mst_id_to);
                var i = "\u914d\u5099\u4e2d\u306e\u4e3b\u529b\u8266\u6226\u3092\u66f4\u65b0\u4e2d\u2026\u2026",
                    n = this.model.message2;
                return e.setMessage(i, n), e
            }
            if (683 == t) {
                var e = new r.ModelChangeModelEdit;
                e.setItemFrom(this.model.mst_id_from), e.setItemTobe(this.model.mst_id_to);
                var i = "\u822a\u7a7a\u6226\u8266\u7528\u65b0\u578b\u7832\u7195\u5175\u88c5\u3092\u958b\u767a\u4e2d\u2026",
                    n = this.model.message2;
                return e.setMessage(i, n), e.addMeltIntoUseitem([75, 75, 3], 1), e.addMeltIntoUseitem([2, 33], 2), e
            }
            if (684 == t) {
                var e = new r.ModelChangeModelEdit;
                e.setItemFrom(this.model.mst_id_from), e.setItemTobe(this.model.mst_id_to);
                var i = "\u7cbe\u92ed\u300c\u822a\u7a7a\u6226\u8266\u300d\u5f57\u661f\u968a\u306e\u7de8\u6210\u4e2d\u2026",
                    n = this.model.message2;
                return e.setMessage(i, n), e.addMeltIntoUseitem([70, 3], 1), e.addMeltIntoUseitem([77, 34], 2), e
            }
            if (685 == t || 686 == t) {
                var e = new r.ModelChangeModelEdit;
                e.setItemFrom(this.model.mst_id_from), e.setItemTobe(this.model.mst_id_to);
                var i = "\u7279\u578b\u99c6\u9010\u8266\u7528\u4e3b\u7832\u5175\u88c5\u3092\u6226\u6642\u6539\u4fee\u4e2d\u2026",
                    n = this.model.message2;
                return e.setMessage(i, n), e.addMeltIntoUseitem([75, 3], 1), e.addMeltInto([{
                    id: 121,
                    type: 2
                }, { id: 33, type: 6 }], 2, 0), e
            }
            if (687 == t) {
                var e = new r.ModelChangeModelEdit;
                e.setItemFrom(this.model.mst_id_from), e.setItemTobe(this.model.mst_id_to);
                var i = "\u99c6\u9010\u8266\u7528\u4e3b\u7832\u5175\u88c5\u3092\u6226\u6642\u6539\u4fee\u4e2d\u2026",
                    n = this.model.message2;
                return e.setMessage(i, n), e.addMeltIntoUseitem([75, 3], 1), e.addMeltInto([{
                    id: 121,
                    type: 2
                }, { id: 33, type: 6 }], 2, 0), e
            }
            return null
        }, e
    }(a.TaskRewardDialogBase);
    e.TaskRewardDialogModelChange = _
}