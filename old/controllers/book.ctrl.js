function bookCtrl(req, res) {

    var books = [

        { id: 1, name: 'Advanced JS', price: 30 },
        { id: 2, name: 'Complete Reference Java', price: 50 },
        { id: 3, name: 'Complete Reference C#', price: 100 },
    ];

    //2xx  == Successs
    //3xx  === Redirects
    //4xx  ===client errors 
    //5xx  === Server errors

    res.status(200);
    res.json(books);
}

module.exports = bookCtrl;