const Stockmodel = require('../models/Stockmodel.js');

//매수
exports.buy = async (req, res) => {
    const result = await Stockmodel.buy(req);
    res.status(result.status).json({ message: result.message });
}
//매도
exports.sell = async (req, res) => {
    const result = await Stockmodel.sell(req);
    res.status(result.status).json({ message: result.message });
}
//주식체결기록확인
exports.log = async (req, res) => {
    const result = await Stockmodel.log(req);
    res.status(result.status).json({ message: result.message });
}

//계좌 확인
exports.my_account = async (req, res) => {
    const result = await Stockmodel.my_account(req);
    res.status(result.status).json({ message: result.message });
};

//랭크
exports.rank = async (req, res) => {
    const result = await Stockmodel.rank(req);
    res.status(result.status).json({ message: result.message });
}

//주식 조회
exports.stock = async (req, res) => {
    const result = await Stockmodel.stock(req);
    res.status(result.status).json({ message: result.message });
}