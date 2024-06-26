import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


const anotherElement = (
  <a href="https://google.com" target='_blank'>visit google</a>
)

const anotherUser = "aao chai piyo"

const ReactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank'
  },
  'click me to visit google',
  anotherUser
  //ham iske andar if  else ya koi js code nhi likh skte kyoki ye ek object h aur isme srif final express likhna h agr tumhe kuch task perform krna h to phele use bhar kro
)


ReactDOM.createRoot(document.getElementById('root')).render(
  ReactElement
)
