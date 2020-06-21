module.exports.controller = (app) => {
    // get homepage
    app.get('/', (req, res) => {
        res.render('index', { title: 'Express' });
    })
    // get users page
    app.get('/users', (req, res) => {
        res.render('index', { title: 'Users' })
    })
}