const serviceController = ( req, res ) => {
    const data = {
        title: 'services',
    }
    res.render('services', data)
}


export { serviceController }