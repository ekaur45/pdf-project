const accountRouter = require("./account.route");
const userRouter = require("./user.route");
const miscRouter = require("./misc.route");
const bookingRouter = require("./booking.route");

const useRoutes = function(app){
    app.use('/api/account',accountRouter);
    app.use("/api/user",userRouter);
    app.use("/api/util",miscRouter);
    app.use("/api/booking",bookingRouter);
  }
  module.exports = {useRoutes};