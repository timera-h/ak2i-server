const router = new require("express").Router();
const connection = require("./../config/msql_config");

/* GET expertises */
router.get("/", (req, res, next) => {
  connection.query(
    "SELECT * FROM expertise",
    function (error, results, fields) {
      if (error) throw error;
      console.log("The solution is: ", results);
      res.json({expertises: results});
    }
  );
});

module.exports = router;
