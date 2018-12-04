const fdk=require('@fnproject/fdk');
const request = require('sync-request');
const fd_url = 'http://dkrlp01.flexagon:8000';

fdk.handle(function(input){
    
  var res = request('POST', fd_url+'/flexdeploy/rest/v1/releases/'+input+'/snapshot',{
      json: {action : 'createSnapshot'},
       headers: {
    authorization: 'Basic ' + new Buffer('fdadmin' + ':' + 'welcome1', 'ascii').toString('base64')
  }
});

  return JSON.parse(res.getBody('utf8'));
})
