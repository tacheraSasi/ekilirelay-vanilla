import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { sender } from '../mailer.js'

sender(to,subject,message,"From:<ekilirelay> relay@ekilie.com")
setupCounter(document.querySelector('#counter'))
