/**
 * Created by cmm on 12/31/14.
 */

var CandidateDao = require("../dao/CandidateDao"),
    CandidateModel = require("./../data").Candidate;

exports.listAll = function (req, res) {
    var pageNo = req.param('pageNo');
    var pageSize = req.param('pageSize');

    CandidateDao.getAll(pageNo,pageSize,function (err1, candidates) {
        CandidateDao.getAllNum(function(err2,num){
            if(!(err1 || err2)){
                res.json({root:candidates,total:num});
            }
        });
    });
};

exports.search = function(req,res){
    var pageNo = req.param('pageNo');
    var pageSize = req.param('pageSize');
    var queryStr = req.param('queryStr');
    CandidateDao.search(pageNo,pageSize,queryStr,function (err1, candidates) {
        CandidateDao.searchNum(queryStr,function(err2,num){
            if(!(err1 || err2)){
                res.json({root:candidates,total:num});
            }
        });
    });
}

exports.create = function (req, res) {
    var candidate = new CandidateModel();

    candidate.name = "Chen MengMeng";
    candidate.sex = "M";
    candidate.age = 22;
    candidate.nation = "China";
    candidate.degree = "Master";
    candidate.university = "Beijing JiaoTong University";
    candidate.major = "Software Engineering";
    candidate.skill = "JAVA, C, C++";
    candidate.description = "I am a good team member. I know teamwork very much and I must handler this job";
    candidate.photo1 = "/img/restart_logo.png";
    candidate.photo2 = "/head/defaulthead.jpeg";

    CandidateDao.create(candidate,function(err,obj){
        res.end('Ok');
    });
};
