const express  = require('express')
const app = express()

app.get("/home", (req, res) => {
    res.json({
            header: "Welcome to our website",
            body: `Lorem ipsum dolor sit amet, consectetur 
                   adipiscing elit, sed do eiusmod tempor 
                   incididunt ut labore et dolore magna aliqua. 
                   Ut enim ad minim veniam, quis nostrud 
                   exercitation ullamco laboris nisi ut aliquip 
                   ex ea commodo consequat.`
    })
})

app.get("/about-us", (req, res) => {
    res.json({
            header: "À propos de nous",
            body: `At vero eos et accusamus et iusto odio dignissimos 
                   ducimus qui blanditiis praesentium voluptatum 
                   deleniti atque corrupti quos dolores et quas 
                   molestias excepturi sint occaecati cupiditate non 
                   provident, similique sunt in culpa qui officia 
                   deserunt mollitia animi, id est laborum et dolorum 
                   fuga.`
    })
})

app.listen(5000, ()=> {console.log("Server started on port 5000") })