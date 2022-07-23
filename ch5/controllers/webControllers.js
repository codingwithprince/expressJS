const indexPage = ( req, res ) =>{
    res.render('index', { name: 'prince ahmed'})
}

const aboutPage = (req, res) =>{
    res.render('about')
}

const updatePage = (req, res) =>{
    res.render('update', { search : req.params.url})
}


export { indexPage, aboutPage, updatePage };