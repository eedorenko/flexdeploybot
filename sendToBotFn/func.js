const fdk=require('@fnproject/fdk');

const userId='MY_USER_ID';
const channelKey='MY_CHANNEL_KEY';
const host = 'https://botphx1I0065H1F0A97bots-mpaasocimt.botmxp.ocp.oraclecloud.com';
const endpoint = '/connectors/v1/tenants/idcs-100b89d671b54afca3069fe360e4bad4/listeners/webhook/channels/82819caf-3eac-4a08-80bd-3174cf1fcd31';


const crypto = require('crypto');
const request = require('sync-request');



function buildSignatureHeader(buf, channelSecretKey) {
    return 'sha256=' + buildSignature(buf, channelSecretKey);
}

function buildSignature(buf, channelSecretKey) {
    const hmac = crypto.createHmac('sha256', Buffer.from(channelSecretKey, 'utf8'));
    hmac.update(buf);
    return hmac.digest('hex');
}

function performRequest(headers, data) {
  
  var dataString = JSON.stringify(data);
  
  var options = {
    body: dataString,    
    headers: headers
  };
        
  request('POST', host+endpoint, options);              
}

function sendMessage(message) {
 let messagePayload = {
  type: 'text',
  text: message
 }
  let messageToBot = {
 userId: userId,
 messagePayload: messagePayload
}
  let body = Buffer.from(JSON.stringify(messageToBot), 'utf8');
    let headers = {};
    headers['Content-Type'] = 'application/json; charset=utf-8';
    headers['X-Hub-Signature'] = buildSignatureHeader(body, channelKey);

  
  performRequest(headers, messageToBot);   
}

fdk.handle(function(input){  
  sendMessage(input);  
  return input;  
})


