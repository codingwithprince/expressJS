const aboutController = ( req, res ) => {
    const data = {
        title: 'about',
    }
    res.render('about', data)
}

export { aboutController }