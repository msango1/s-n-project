const express  = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get("/home", (req, res) => {
    res.json({
            header: "Header for Home page",
            body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
            info: `This content is pulled from the express app via the "/home" route.`
    })
});

app.get("/about-us", (req, res) => {
    res.json({
            header: "Header for About-us page",
            body: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor`,
            info: `This content is pulled from the express app via the "/about-us" route.`
    })
})

app.listen(5000, ()=> {console.log("Server started on port 5000") })