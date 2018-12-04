'use strict';
 
module.exports = {
  metadata: () => ({
    name: 'create.snapshot',
    properties: {
      release: { required: true, type: 'string' },
    },
   supportedActions: []

  }),
  invoke: (conversation, done) => {
    // perform conversation tasks.
    const { release } = conversation.properties();
    const request = require('sync-request');
    var createSnapCall = request('POST', 'https://3bba1068.ngrok.io/t/odaapp/createsnapshotfn-trigger',{
    body:  release
});
    // reply
    conversation
      .reply('Created a snapshot for release '+release)
      .transition();

    done();
  }
};
