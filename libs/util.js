/**
 * Created by yuan on 2016/7/4.
 */
'use strict'

var fs = require('fs');
var Promise = require('bluebird');

exports.readFileAsync = function(fpath ,encode){
    console.log(fpath ,encode);
    return new Promise(function(resolve,reject){
        fs.readFile(fpath, encode,function(err,content){
            if(err) reject(err)
            else resolve(content)
        });
    });
}

exports.writeFileAsync = function(fpath ,content){
    return new Promise(function(resolve,reject){
        fs.writeFile(fpath, content,function(err,content){
            if(err) reject(err)
            else resolve()
        });
    });
}