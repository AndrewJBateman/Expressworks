{"changed":true,"filter":false,"title":"good_old_form.js.js","tooltip":"/good_old_form.js.js","value":"var path = require('path');\nvar express = require('express');\nvar app = express();\nvar bodyparser = require('body-parser');\napp.use(bodyparser.urlencoded({extended: false}));\n\napp.set('views', process.argv[3] || path.join(__dirname, 'templates'));\napp.set('view engine', 'jade');\n\napp.post('/form', function(req, res) {\n     res.render('index', {date: new Date().toDateString()});\n});\n\napp.listen(process.argv[2]);","undoManager":{"mark":-2,"position":14,"stack":[[{"start":{"row":7,"column":6},"end":{"row":7,"column":7},"action":"remove","lines":["t"],"id":2},{"start":{"row":7,"column":5},"end":{"row":7,"column":6},"action":"remove","lines":["e"]},{"start":{"row":7,"column":4},"end":{"row":7,"column":5},"action":"remove","lines":["g"]}],[{"start":{"row":7,"column":4},"end":{"row":7,"column":5},"action":"insert","lines":["p"],"id":3},{"start":{"row":7,"column":5},"end":{"row":7,"column":6},"action":"insert","lines":["o"]},{"start":{"row":7,"column":6},"end":{"row":7,"column":7},"action":"insert","lines":["s"]},{"start":{"row":7,"column":7},"end":{"row":7,"column":8},"action":"insert","lines":["t"]}],[{"start":{"row":7,"column":14},"end":{"row":7,"column":15},"action":"remove","lines":["e"],"id":4},{"start":{"row":7,"column":13},"end":{"row":7,"column":14},"action":"remove","lines":["m"]},{"start":{"row":7,"column":12},"end":{"row":7,"column":13},"action":"remove","lines":["o"]},{"start":{"row":7,"column":11},"end":{"row":7,"column":12},"action":"remove","lines":["h"]}],[{"start":{"row":7,"column":11},"end":{"row":7,"column":12},"action":"insert","lines":["f"],"id":5},{"start":{"row":7,"column":12},"end":{"row":7,"column":13},"action":"insert","lines":["o"]},{"start":{"row":7,"column":13},"end":{"row":7,"column":14},"action":"insert","lines":["r"]},{"start":{"row":7,"column":14},"end":{"row":7,"column":15},"action":"insert","lines":["m"]}],[{"start":{"row":1,"column":33},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":6},{"start":{"row":2,"column":0},"end":{"row":3,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":3,"column":0},"end":{"row":4,"column":53},"action":"insert","lines":["    var bodyparser = require('body-parser')","    app.use(bodyparser.urlencoded({extended: false}))"],"id":7}],[{"start":{"row":3,"column":0},"end":{"row":3,"column":4},"action":"remove","lines":["    "],"id":8}],[{"start":{"row":4,"column":0},"end":{"row":4,"column":4},"action":"remove","lines":["    "],"id":9}],[{"start":{"row":6,"column":0},"end":{"row":6,"column":20},"action":"remove","lines":["var app = express();"],"id":10}],[{"start":{"row":6,"column":0},"end":{"row":6,"column":20},"action":"insert","lines":["var app = express();"],"id":11}],[{"start":{"row":2,"column":0},"end":{"row":2,"column":20},"action":"insert","lines":["var app = express();"],"id":12}],[{"start":{"row":6,"column":0},"end":{"row":6,"column":20},"action":"remove","lines":["var app = express();"],"id":13}],[{"start":{"row":3,"column":39},"end":{"row":3,"column":40},"action":"insert","lines":[";"],"id":14}],[{"start":{"row":4,"column":49},"end":{"row":4,"column":50},"action":"insert","lines":[";"],"id":15}],[{"start":{"row":4,"column":50},"end":{"row":5,"column":0},"action":"remove","lines":["",""],"id":16}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":4,"column":50},"end":{"row":4,"column":50},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1525945334076}