# FlexDeployBot
A repository for ... blogpost.

1. Start ngrok
     
   ngrok start --config tunnels.yml --all
   
2. Update outgoing Webhook of the Channel with https url forwarding to localhost:8080
3. Update create.snapshot.js with https url forwarding to localhost:8080
4. Pack (npm pack) and upload the custom component
5. Update receiveFromBotFn/func.js with http utl forwarding to localhost:4390  
6. Start and deploy Fn app

   fn start 
   cd fn
   fn deploy --all --local
   
7. Start local web server
   
   node httpserver.js 
   
8. Start listener

   python3 listener.py 
   
9. Say "Calypso!"
10. Have fun.
