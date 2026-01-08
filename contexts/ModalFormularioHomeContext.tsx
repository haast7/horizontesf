'use client'

import { createContext, useContext, useState, ReactNode, useEffect } from 'react'

interface ModalHomeContextType {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

const ModalFormularioHomeContext = createContext<ModalHomeContextType | undefined>(undefined)

export function ModalFormularioHomeProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <ModalFormularioHomeContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ModalFormularioHomeContext.Provider>
  )
}

export function useModalFormularioHome() {
  const context = useContext(ModalFormularioHomeContext)
  if (context === undefined) {
    throw new Error('useModalFormularioHome must be used within a ModalFormularioHomeProvider')
  }
  return context
}
