'use strict'

/*
|--------------------------------------------------------------------------
| Websocket
|--------------------------------------------------------------------------
|
| This file is used to register websocket channels and start the Ws server.
| Learn more about same in the official documentation.
| https://adonisjs.com/docs/websocket
|
| For middleware, do check `wsKernel.js` file.
|
*/

const Ws = use('Ws')

Ws.channel('chat', ({ socket }) => {
  console.log('user joined with %s socket id', socket.id)
  
  socket.on('message', (data) => {
    console.log(data);
  })

  socket.emit('message2', 'Hello client')
  
})


//Ws.channel('chat', 'ChatController')

