const express = require("express");
require("./services/passport");

const app = express();

require("./routes/authRoutes")(app);

app.listen(5000, () => {
  console.log(`Server listening on 5000`);
});
