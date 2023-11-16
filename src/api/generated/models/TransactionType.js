"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionType = void 0;
var TransactionType;
(function (TransactionType) {
    TransactionType["DEPOSIT"] = "deposit";
    TransactionType["WITHDRAW"] = "withdraw";
    TransactionType["REWARD"] = "reward";
    TransactionType["SETTLEMENT"] = "settlement";
    TransactionType["FOOCA_CHARGE"] = "foocaCharge";
    TransactionType["FOOCA_UPGRADE"] = "foocaUpgrade";
    TransactionType["FOOCA_MINT"] = "foocaMint";
    TransactionType["PENALTY"] = "penalty";
    TransactionType["TRADE"] = "trade";
    TransactionType["BONUS"] = "bonus";
    TransactionType["IAP"] = "iap";
    TransactionType["IAP_REFUNDED"] = "iapRefunded";
    TransactionType["INVITATION_REWARD"] = "invitationReward";
    TransactionType["MISSION_REWARD"] = "missionReward";
})(TransactionType = exports.TransactionType || (exports.TransactionType = {}));
