import { Contacto } from '@/components/sections/Contacto'
import { Hero } from '@/components/sections/Hero'
import { Nosotros } from '@/components/sections/Nosotros'
import { Servicios } from '@/components/sections/Servicios'

export default function Home() {
  return (
    <>
      <Hero />
      <Servicios />
      <Nosotros />
      <Contacto />
    </>
  )
}
