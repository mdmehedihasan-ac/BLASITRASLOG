import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/393204085611?text=Salve%2C%20vorrei%20informazioni%20sui%20vostri%20servizi."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contattaci su WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  )
}
