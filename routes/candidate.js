/**
 * Created by cmm on 12/31/14.
 */

var candidate = require('./../controller/candidateHandler');

//查询方法全都需要分页

module.exports = function (app) {

    app.get('/listCandidate', function(req,res){
        res.render("candidate/listCandidate");
    });
    app.get('candidate_angular', function(req,res){
        res.render("common/index");
    });
    app.get('/listAll', candidate.listAll);
    app.get('/search', candidate.search);
    app.get('/create', candidate.create);
};