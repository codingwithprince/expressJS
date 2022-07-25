const indexPage = (req, res) =>{
    const data = {
        title: 'Home',
        name:'Prince',
        marks: [10, 20, 30, 40, 50]
    }
    res.render('index', data);
}

const aboutPage = (req, res) =>{
    const data = {
        title: 'About',
        name:'Anmun',
        marks: [10, 20, 30, 40, 50]
    }
    res.render('about', data)
}

const contactPage = (req, res) =>{

    const data = {
        title: 'About',
        name:'Anmun',
        marks: [10, 20, 30, 40, 50]
    }

    res.render('contact', data)
}



export { indexPage, aboutPage, contactPage }