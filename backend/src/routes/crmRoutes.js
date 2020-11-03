const routes = (app) => {

    app.route('/contact')
        .get((req, res, next) => {
            console.log(`Request de: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, (req, res, next) => {
            res.send('GET avec succès');
        })
        .get((req, res) =>
            res.send('GET avec succès'))

        .post((req, res) =>
            res.send('POST avec succès')
    )
    /*app.get('/contact', (req, res) => {
        res.send('GET avec GG')
    })*/
    app.route('/contact/:contactId')
        .put((req, res) =>
            res.send('PUT contactID avec succès')
        )

        .delete((req, res) => 
            res.send('DELETE conactID avec succès'))
}

/*.get((req, res) => {
            console.log(`Request de: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next()
        }, (req, res, next) => {
            res.send('GET avec succès');
        }) */

export default routes