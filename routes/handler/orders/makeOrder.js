const apiAdapter = require("../../apiAdapter");

const { URL_SERVICE_ORDER } = process.env;

const api = apiAdapter(URL_SERVICE_ORDER);

module.exports = async (req, res) => {
  try {
    const order = await api.post("/orders/make_order", req.body);
    return res.json(order.data);
  } catch (error) {
    if (error.code == "ECONNREFUSED") {
      return res
        .status(500)
        .json({ status: "error", message: "service unavailable" });
    }
    const { status, data } = error.response;

    return res.status(status).json(data);
  }
};
