exports.init = function (app) {
    var data = [{
        name: 'C',
        desc: 'old program language',
        history: getFakeHistory()
    }, {
        name: 'Java',
        desc: 'large language!',
        history: getFakeHistory()
    }, {
        name: 'C#',
        desc: 'Microsoft create it',
        history: getFakeHistory()
    }, {
        name: 'JavaScript',
        desc: 'the web language',
        history: getFakeHistory()
    }]

    app.get('/itemList', function(req, res) {
        res.send(JSON.stringify(data))
    })

    app.get('/item/:name', function (req, res) {
        var item = data.find(item => item.name === req.params.name)
        if (item) {
            res.type('json')
            res.send(JSON.stringify(item))
        } else {
            res.status(404).end()
        }
    })

    app.post('/item/:name', function(req, res) {
        var item = data.find(item => item.name === req.params.name)
        if (item) {
            saveItem(item, JSON.parse(res.body))
        }
    })

    app.put('/item/:name', function(req, res) {
        var item = findItem(data, req.params.name)
        if (item) {
            res.status(403).end()
        } else {
            try {
                item = JSON.parse(req.body)
            } catch(e) {
                console.log('parse req body fail: ' + req.body)
                item = {
                    name: req.params.name
                }
            }
            
            item.history = getFakeHistory()
            data.push(item)
            res.send(JSON.stringify(item))
        }
    })

    app.delete('/item/:name', function(req, res) {
        var i = data.findIndex(item => item.name === req.params.name)
        if (i > -1) {
            var item = data.splice(i, 1)
            res.send(JSON.stringify(item))
        } else {
            res.status(404).end()
        }
    })
}

function findItem(items, name) {
    return items && items.find(item => item.name === name)
}

function saveItem(item, data) {
    for (let k of data) {
        item[k] = data[k]
    }
}

function getFakeHistory() {
    var nodes = []
    if (dice()) nodes.push({name: '1990', desc: 'aaa'})
    if (dice()) nodes.push({name: '1991', desc: 'bbb'})
    if (dice()) nodes.push({name: '1992', desc: 'ccc'})
    if (dice()) nodes.push({name: '1993', desc: 'ddd'})
    if (dice()) nodes.push({name: '1994', desc: 'eee'})
    if (dice()) nodes.push({name: '1995', desc: 'fff'})
    if (dice()) nodes.push({name: '1996', desc: 'ggg'})
    if (dice()) nodes.push({name: '1997', desc: 'hhh'})
    if (dice()) nodes.push({name: '1998', desc: 'jjj'})
    if (dice()) nodes.push({name: '1999', desc: 'kkk'})
    if (dice()) nodes.push({name: '2000', desc: 'lll'})
    return nodes
}

function dice() {
    return Math.random() > 0.5
}