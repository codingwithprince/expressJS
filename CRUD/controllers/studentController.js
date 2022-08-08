class studentController {
    static indexPage = (req, res) =>{
        res.render('index', { title: 'home'})
    }

    static updatePage = (req, res) => {
        res.render('update', { title: 'edit'})
    }
}

export default studentController;