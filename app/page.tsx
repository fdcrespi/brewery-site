"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Smartphone } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const brand = {
    lime: "#aace52",
    green: "#76a029",
    dark: "#37560a",
    black: "#000000",
  }

  const beers = [
    {
      id: "ipa",
      name: "IPA",
      style: "India Pale Ale",
      description:
        "Aromática y lupulada, con notas cítricas y frutales. Amargor firme y final seco que invita a otro sorbo.",
      abv: "6.0%",
      ibu: "55",
      gradient: `from-[${brand.dark}] to-[${brand.black}]`,
      image: "/images/maquetai2.png",
    },
    {
      id: "porter",
      name: "Porter",
      style: "Robust Porter",
      description:
        "Tostada y sedosa. Chocolate negro, café y un toque de caramelo. Cuerpo medio y final largo.",
      abv: "5.6%",
      ibu: "35",
      gradient: `from-[${brand.green}] to-[${brand.black}]`,
      image: "/images/diabolicus-bottle.png",
    },
    {
      id: "lager",
      name: "Lager",
      style: "Helles Lager",
      description:
        "Refrescante y equilibrada. Malta suave, amargor moderado y una carbonatación crujiente para todos los momentos.",
      abv: "4.8%",
      ibu: "18",
      gradient: `from-[${brand.green}] to-[${brand.black}]`,
      image: "/etiquetas/2.jpg",
    },
  ]

  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory bg-[#000000] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#000000]/75 backdrop-blur border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/images/logo.png" alt="Elena" className="h-12 w-12 object-contain" />
            <span className="text-5xl font-bold tracking-wider font-elena" style={{ color: brand.green }}>ELENA X</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-2xl">
            <a href="#presentacion" className="hover:opacity-80" style={{ color: brand.green }}>Presentación</a>
            <a href="#cervezas" className="hover:opacity-80" style={{ color: brand.green }}>Estilos</a>
            <a href="#nosotros" className="hover:opacity-80" style={{ color: brand.green }}>Sobre nosotros</a>
            <a href="#contacto" className="hover:opacity-80" style={{ color: brand.green }}>Contacto</a>
          </nav>
          {/* <Button
            variant="outline"
            className="hover:text-black"
            style={{ borderColor: brand.green, color: brand.green, backgroundColor: "transparent" }}
          >
            Comprar
          </Button> */}
        </div>
      </header>

      {/* Presentación */}
      <section id="presentacion" className="snap-start min-h-[calc(100vh-0px)] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br opacity-30" style={{
          backgroundImage: `linear-gradient(135deg, ${brand.dark}, ${brand.black})`,
        }} />
        <div className="container mx-auto px-4 lg:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center text-center lg:text-left">
          <div className="order-2 lg:order-1 z-10 bg-black/50 p-8 rounded-lg">
            <div className="h-1 w-24 mb-6" style={{ backgroundColor: brand.green }} />
            <h1 className="text-6xl md:text-8xl leading-tight tracking-wider mb-4 font-trash-hand">
              Cerveza <span style={{ color: brand.green }} className="font-elena lg:text-8xl font-bold tracking-wider">Elena X</span> Artesanal
            </h1>
            <p className="text-3xl tracking-wide text-white/85 mb-6 ">
              Una marca nacida de la pasión por la buena cerveza. Seleccionamos maltas y lúpulos de calidad
              y cuidamos cada paso del proceso para ofrecerte sabores honestos y memorables.
            </p>
          </div>
          <div className="justify-self-center z-0">
            <img 
              src="/images/logo.png" 
              alt="Elena" 
              className="absolute lg:relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:top-0 lg:left-0 lg:translate-x-0 lg:translate-y-0 w-[250px] md:w-[340px] lg:w-[480px] perspective-distant filter drop-shadow-[0_25px_35px_rgba(255,255,255,0.45)]" 
            />
          </div>
        </div>
      </section>

      {/* Cervezas */}
      <div id="cervezas">
        {beers.map((beer, i) => (
          <section key={beer.id} className="snap-start min-h-[calc(100vh-0px)] flex items-center relative overflow-hidden">
            <div className={`absolute inset-0 -z-10 bg-gradient-to-br opacity-25 ${beer.gradient}`} />

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
              {/* Imagen */}
              <div className="order-1 justify-self-center relative">
                <div className="absolute -inset-6 -z-10 blur-3xl rounded-full" style={{ backgroundColor: brand.green, opacity: 0.25 }} />
                <img src={beer.image} alt={beer.name} className="w-[260px] md:w-[320px] lg:w-[380px] filter drop-shadow-[0_25px_35px_rgba(255,255,255,0.45)]" />
              </div>

              {/* Card de información */}
              <div className="order-2">
                <Card className="bg-[#ffffff]/20 border-0 shadow-xl drop-shadow-[0_25px_35px_rgba(255,255,255,0.45)]">
                  <CardContent className="p-8">
                    <div className="flex flex-row items-center gap-4">
                      <h2 className="text-3xl md:text-5xl mb-2 font-trash-hand">
                        {beer.name.split(" ").map((w, idx) => (
                          <span key={idx} style={{ color: idx === 1 ? brand.green : "#ffffff" }}>{w} </span>
                        ))}
                      </h2>
                      <p className="text-emerald-100/90 mb-4 text-2xl" style={{ color: brand.green }}>({beer.style})</p>
                    </div>
                    <p className="text-white/85 mb-6 text-2xl tracking-wide">{beer.description}</p>

                    <div className="grid grid-cols-3 gap-6 mb-6 text-2xl">
                      <div>
                        <p className="uppercase text-white/60">ABV</p>
                        <p className="text-2xl font-semibold tracking-wider">{beer.abv}</p>
                      </div>
                      <div>
                        <p className="uppercase text-white/60">IBU</p>
                        <p className="text-2xl font-semibold tracking-wider">{beer.ibu}</p>
                      </div>
                      <div>
                        <p className="uppercase text-white/60">Formato</p>
                        <p className="text-2xl font-semibold tracking-wider">330 ml</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        className="hover:text-black text-2xl"
                        style={{ borderColor: brand.green, color: brand.green}}
                      >
                        Historia
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="absolute right-6 bottom-8 text-6xl font-black text-white/10 select-none">
              {String(i + 1).padStart(2, "0")}
            </div>
          </section>
        ))}
      </div>

      {/* Sobre nosotros */}
      <section id="nosotros" className="snap-start min-h-[calc(100vh-0px)] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br opacity-25" style={{
          backgroundImage: `linear-gradient(135deg, ${brand.black}, ${brand.dark})`,
        }} />
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-4xl  md:text-5xl font-extrabold mb-4 tracking-wider">
              Nuestra historia
            </h3>
            <p className="text-white/85 leading-relaxed text-2xl">
              Empezamos como un pequeño grupo de amigos cocinando en garaje, soñando con una cerveza que
              represente lo que nos gusta compartir: tiempo, conversación y sabores auténticos. Con el tiempo,
              el proyecto creció, pero mantenemos la misma filosofía: procesos cuidados, materias primas nobles
              y respeto por cada receta. Elena es, ante todo, un brindis a la amistad.
            </p>
          </div>
          <div className="justify-self-center">
            <Card className="bg-[#0b0b0b]/70 border-0 shadow-xl">
              <CardContent className="p-8">
                <p className="text-white/80 text-2xl tracking-wide font-trash-hand italic">
                  "Hacemos cerveza para la mesa, para celebrar y para acompañar momentos simples."
                </p>
                <div className="h-1 w-16 mt-6" style={{ backgroundColor: brand.green }} />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="snap-start min-h-[calc(100vh-0px)] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br opacity-25" style={{
          backgroundImage: `linear-gradient(135deg, ${brand.dark}, ${brand.black})`,
        }} />
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start flex items-center">
          {/* <div>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-4">Contacto</h3>
            <p className="text-white/80 mb-6 max-w-xl">Escríbenos para distribuciones, eventos o colaboraciones.</p>
            <form className="space-y-4 max-w-xl">
              <Input placeholder="Tu nombre" className="bg-black/50 border-white/10" required />
              <Input type="email" placeholder="Tu email" className="bg-black/50 border-white/10" required />
              <Textarea placeholder="Mensaje" className="bg-black/50 border-white/10 min-h-40" required />
              <Button style={{ backgroundColor: brand.green, color: "#000" }} className="hover:opacity-90">Enviar</Button>
            </form>
          </div> */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3138.0384043671024!2d-61.79667492409938!3d-38.13929997189579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzjCsDA4JzIxLjUiUyA2McKwNDcnMzguOCJX!5e0!3m2!1ses-419!2sar!4v1763035698568!5m2!1ses-419!2sar" width="600" height="450" loading="lazy"></iframe>
          
          <div className="justify-self-center w-full ">
            <Card className="bg-[#ffffff]/40 border-0 shadow-xl drop-shadow-[0_25px_35px_rgba(255,255,255,0.45)] text-2xl">
              <CardContent className="p-8 space-y-2 text-white/80 flex flex-col gap-4">
                <Link href="tel:+5492914262404">
                  <Smartphone className="inline-block w-6 h-6 mr-2" />
                  <span className="text-white/60">Tel:</span> 
                  +54 9 291 426-2404
                </Link>
                <Link href="https://wa.me/5492914262404?text=Hola%20Elena%20Beer" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline-block w-6 h-6 mr-2" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                  </svg>
                  <span className="text-white/60">WhatsApp:</span> +54 9 291 426-2404</Link>
                <Link href="https://maps.app.goo.gl/1fyLN2SuF72zrU9Q7" target="_blank">
                  <MapPin className="inline-block w-6 h-6 mr-2" />
                  <span className="text-white/60">Ubicación:</span> Sierra de la Ventana, Buenos Aires, Argentina</Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="snap-start bg-black/60 border-t border-white/10">
        <div className="container mx-auto px-6 py-10 flex items-center justify-between text-sm text-gray-300">
          <p className="text-lg">© {new Date().getFullYear()} Elena — Cerveza Artesanal</p>
          <p className="text-lg">Hecha con pasión y buenos lúpulos.</p>
        </div>
      </footer>
    </main>
  )
}
