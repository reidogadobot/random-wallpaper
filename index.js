const express = require("express");
const app = express();
const wallpaper = require("./database/wallpapers.json");
const PORT = process.env.PORT || 3000;

function random() {
   return wallpaper[Math.floor(Math.random() * wallpaper.length)]
}


app.get("/wallpaper", (req, res) => {
   res.type("json")
   res.send(JSON.stringify({result: random()}))
})

app.listen(PORT, () => {
   console.log(PORT)
})
