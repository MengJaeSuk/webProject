/**
 * Created by cmm on 12/31/14.
 */

var DaoBase = require('./DaoBase'),
    Candidate = require('./../data').Candidate;

var CandidateDao = new DaoBase(Candidate);

module.exports = CandidateDao;

CandidateDao.getAll = function (pageNo,pageSize,callback) {
    Candidate.find({}).skip((pageNo-1)*pageSize).limit(pageSize).exec(function(error,recipe){
        if(error)
            return callback(error,null);
        return callback(null, recipe);
    });
};

CandidateDao.getAllNum = function (callback) {
    Candidate.count({}).exec(function(error,num){
        if(error)
            return callback(error,null);
        return callback(null, num);
    });
};

CandidateDao.search = function (pageNo,pageSize,query,callback) {
    var str = ""+query+".*";
    //{ $regex: str} 第一种使用正则表达式的方式
    //var str1 = new RegExp(query); 第二种使用正则表达式的方式
    Candidate.find({"$or":[{"nation":{ $regex: str}},{"degree":{ $regex: str}},{major:{ $regex: str}},{description:{ $regex: str}},{age:{ $regex: str}}]}).skip((pageNo-1)*pageSize).limit(pageSize).exec(function(error,recipe){
        if(error)
            return callback(error,null);
        return callback(null, recipe);
    });
};

CandidateDao.searchNum = function (query,callback) {
    var str = ""+query+".*";

    Candidate.count({"$or":[{"nation":{ $regex: str}},{"degree":{ $regex: str}},{major:{ $regex: str}},{description:{ $regex: str}},{age:{ $regex: str}}]}).exec(function(error,recipe){
        if(error)
            return callback(error,null);
        return callback(null, recipe);
    });
};