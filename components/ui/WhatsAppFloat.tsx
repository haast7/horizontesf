import { FiMessageCircle } from 'react-icons/fi'

export default function WhatsAppFloat() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5511941556497'
  const message = 'Olá! Gostaria de saber mais sobre os produtos SmartCred.'

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center"
      aria-label="Fale conosco no WhatsApp"
    >
      <FiMessageCircle size={28} />
    </a>
  )
}
