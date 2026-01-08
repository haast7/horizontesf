export interface Product {
  id: string
  name: string
  icon: string
  image: string
  description?: string
}

export interface BlogPost {
  id: number
  title: string
  image: string
  excerpt: string
  content?: string
  publishedAt?: string
}

export interface ContactFormData {
  name: string
  email: string
  whatsapp: string
  document: string
  product: string
}

export interface Metric {
  value: string
  label: string
}

export interface Feature {
  icon: React.ComponentType<{ size?: number; className?: string }>
  title: string
  description: string
}
