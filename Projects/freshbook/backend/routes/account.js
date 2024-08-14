// backend/routes/account.js
const express = require("express");

const router = express.Router();
const { Account } = require("../db")
const { authMiddleware } = require("../middleware");
const { default: mongoose } = require("mongoose");

router.get("/balance", authMiddleware,async(req, res) => {
    const account = await Account.findOne({
        userId: req.userId
    })
    res.json({
        balance: account.balance
    })
});

router.post("/transfer",  async (req, res) => {
    const session = await mongoose.startSession();

    session.startTransaction();
    const { amount , to } = req.body;

    const account = Account.findOne({
        userId: req.userId
    }).session(session);

    if (!account || account.balance < amount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Insufficient balance"
        });
    }

    const toAccount = await Account.findOne({userId: to}).session(session);

    if(!toAccount){
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invaild account"
        })
    }

    //Perform the transfer
    await Account.updateOne({userId: req.userId}, {$inc: {balance: -amount}}.session(session))
    await Account.updateOne({userId: to},{$inc: {balance: amount}}.session(session));

    await session.commitTransaction();
    res.json({
        message: "Trasaction successfull"
    })
});

module.exports = router;