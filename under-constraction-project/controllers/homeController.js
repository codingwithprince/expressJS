const homePage = (req, res) => {
    res.render('home', { title: 'Home'})
}


export { homePage }