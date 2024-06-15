const expres = require("express");
const app = expres();

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is listning at PORT ${PORT}`);
})