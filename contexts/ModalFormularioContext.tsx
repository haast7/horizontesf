'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface ModalFormularioContextType {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

const ModalFormularioContext = createContext<ModalFormularioContextType | undefined>(undefined)

export function ModalFormularioProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsOpen(false)
    // Restore body scroll
    document.body.style.overflow = 'unset'
  }

  return (
    <ModalFormularioContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ModalFormularioContext.Provider>
  )
}

export function useModalFormulario() {
  const context = useContext(ModalFormularioContext)
  if (context === undefined) {
    throw new Error('useModalFormulario must be used within a ModalFormularioProvider')
  }
  return context
}
