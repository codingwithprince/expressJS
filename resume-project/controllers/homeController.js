const homeController = ( req, res ) => {
    const data = {
        title: 'home',
        name: 'Prince Ahmed',
    }
    res.render('home', data)
}

export { homeController }