const underConstruction = ( req, res, next ) => {
    res.render('uc', { title: 'uc'})
}


export { underConstruction }