const routes = (app) => {

    app.route('/contact')
        .get((req, res, next) => {
            console.log(`Request de: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, (req, res, next) => {
            res.send('GET avec succ�s');
        })
        .get((req, res) =>
            res.send('GET avec succ�s'))

        .post((req, res) =>
            res.send('POST avec succ�s')
    )
    /*app.get('/contact', (req, res) => {
        res.send('GET avec GG')
    })*/
    app.route('/contact/:contactId')
        .put((req, res) =>
            res.send('PUT contactID avec succ�s')
        )

        .delete((req, res) => 
            res.send('DELETE conactID avec succ�s'))
}

/*.get((req, res) => {
            console.log(`Request de: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next()
        }, (req, res, next) => {
            res.send('GET avec succ�s');
        }) */

export default routes