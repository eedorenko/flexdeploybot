const fdk=require('@fnproject/fdk');
const request = require('sync-request');
const url = 'http://92e107e2.ngrok.io';

fdk.handle(function(input){   
    var sayItCall = request('POST', url,{
     body: input.messagePayload.text,
    });
  return input;
})
