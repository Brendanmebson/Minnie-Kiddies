import { FaWhatsapp } from 'react-icons/fa'
import { whatsappLink } from '../data/site'

export default function ChatWidget() {
  return (
    <a
      href={whatsappLink("Hello Minnie Kiddies! I'd like to make an enquiry.")}
      target="_blank"
      rel="noreferrer"
      className="chat-widget"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp size={26} />
    </a>
  )
}
