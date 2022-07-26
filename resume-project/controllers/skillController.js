const skillController = ( req, res ) => {
    const data = {
        title: 'skills',
    }
    res.render('skills', data);
}


export { skillController }