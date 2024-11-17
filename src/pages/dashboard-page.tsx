import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { FaGooglePlay, FaAppStore } from "react-icons/fa";
import {
  Hotel,
  Search,
  Star,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export function DashboardPage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-white/90 text-black">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Nome e navegação */}
          <div className="flex items-center gap-20">
            <div className="text-[30px] font-bold">ViajaFácil</div>
            <nav className="flex items-center gap-8">
              <a
                href="#"
                className="hover:bg-white hover:text-black transition-colors rounded-lg p-[5px]"
              >
                Home
              </a>
              <a
                href="#"
                className="hover:bg-white hover:text-black transition-colors rounded-lg p-[5px] text."
              >
                Lista
              </a>
              <a
                href="#"
                className="hover:bg-white hover:text-black transition-colors rounded-lg p-[5px]"
              >
                Sobre
              </a>
              <a
                href="#"
                className="hover:bg-white hover:text-black transition-colors rounded-lg p-[5px]"
              >
                Promoção
              </a>
            </nav>
          </div>

          {/* Botões de Login e Cadastro */}
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="text-black border-white hover:bg-slate-200 hover:text-black"
            >
              Login
            </Button>
            <Button
              onClick={() => navigate("/cadastro")}
              className="bg-primary hover:bg-primary/90 text-white"
            >
              Cadastre-se
            </Button>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      {/* Hero Section */}
      <section
        className="relative pt-16 h-[500px] object-cover-background"
        style={{
          backgroundImage: "url('/hotelimg/ilha1.jpg')",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <Hotel className="w-32 h-32 text-white opacity-20" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Hora de aventuras e experiências
          </h1>
          <div className="w-full max-w-2xl bg-white rounded-lg p-4">
            <div className="flex gap-4">
              <Input
                type="text"
                placeholder="Hotéis"
                className="flex-1 text-black"
              />
              <Button className="bg-primary hover:bg-primary/90">
                <Search className="w-4 h-4 mr-2" />
                Buscar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Price Comparison */}
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6">
          Compare os preços de hotéis disponíveis
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="p-4 text-left">Hotel</th>
                <th className="p-4 text-left">Preço</th>
                <th className="p-4 text-left">Localização</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4].map((i) => (
                <tr key={i} className="border-b">
                  <td className="p-4">Hotel Águia {i}</td>
                  <td className="p-4">R$ {299 + i * 50},00</td>
                  <td className="p-4">Centro</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      {/* Featured Rooms */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6">
            Quartos em destaque
            <span className="block mt-3 w-20 border-b-8 border-gray-800 rounded-md"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Quarto 1 */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-center h-48 bg-gray-100 rounded-t-lg overflow-hidden">
                  <img
                    src="/quartoimg/quarto1.jpg"
                    alt="Quarto Deluxe 1"
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Quarto Deluxe 1</h3>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1">4.8</span>
                    </div>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-1" />
                    Centro
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quarto 2 */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-center h-48 bg-gray-100 rounded-t-lg overflow-hidden">
                  <img
                    src="/quartoimg/quarto2.jpg"
                    alt="Quarto Deluxe 2"
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Quarto Deluxe 2</h3>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1">4.7</span>
                    </div>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-1" />
                    Norte
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quarto 3 */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-center h-48 bg-gray-100 rounded-t-lg overflow-hidden">
                  <img
                    src="/quartoimg/quarto3.jpg"
                    alt="Quarto Deluxe 3"
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Quarto Deluxe 3</h3>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1">4.9</span>
                    </div>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-1" />
                    Leste
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quarto 4 */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-center h-48 bg-gray-100 rounded-t-lg overflow-hidden">
                  <img
                    src="/quartoimg/quarto4.jpg"
                    alt="Quarto Deluxe 4"
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Quarto Deluxe 4</h3>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1">4.6</span>
                    </div>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-1" />
                    Oeste
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quarto 5 */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-center h-48 bg-gray-100 rounded-t-lg overflow-hidden">
                  <img
                    src="/quartoimg/quarto5.jpg"
                    alt="Quarto Deluxe 5"
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Quarto Deluxe 5</h3>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1">4.5</span>
                    </div>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-1" />
                    Sul
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quarto 6 */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-center h-48 bg-gray-100 rounded-t-lg overflow-hidden">
                  <img
                    src="/quartoimg/quarto6.jpg"
                    alt="Quarto Deluxe 6"
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Quarto Deluxe 6</h3>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1">4.4</span>
                    </div>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-1" />
                    Centro
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Para os hoteis*/}

      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6">
            Hoteis mais bem Avaliados
            <span className="block mt-3 w-20 border-b-8 border-gray-800 rounded-md"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Hotel 1 */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-center h-48 bg-gray-100 rounded-t-lg overflow-hidden">
                  <img
                    src="/hotelimg/hotel1.jpg"
                    alt="Hotel 1"
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Hotel Vista Azul</h3>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1">4.8</span>
                    </div>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-1" />
                    Centro
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hotel 2 */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-center h-48 bg-gray-100 rounded-t-lg overflow-hidden">
                  <img
                    src="/hotelimg/hotel2.jpg"
                    alt="Hotel 2"
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Hotel Sol Nascente</h3>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1">4.7</span>
                    </div>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-1" />
                    Norte
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hotel 3 */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-center h-48 bg-gray-100 rounded-t-lg overflow-hidden">
                  <img
                    src="/hotelimg/hotel3.jpg"
                    alt="Hotel 3"
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Hotel Luar Encantado</h3>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1">4.9</span>
                    </div>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-1" />
                    Leste
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hotel 4 */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-center h-48 bg-gray-100 rounded-t-lg overflow-hidden">
                  <img
                    src="/hotelimg/hotel4.jpg"
                    alt="Hotel 4"
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Hotel Jardim Tropical</h3>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1">4.6</span>
                    </div>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-1" />
                    Oeste
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hotel 5 */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-center h-48 bg-gray-100 rounded-t-lg overflow-hidden">
                  <img
                    src="/hotelimg/hotel5.jpg"
                    alt="Hotel 4"
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Hotel Belo Horizonte</h3>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1">4.6</span>
                    </div>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-1" />
                    Oeste
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hotel 6 */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-center h-48 bg-gray-100 rounded-t-lg overflow-hidden">
                  <img
                    src="/hotelimg/hotel6.jpg"
                    alt="Hotel 4"
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Hotel Jardim Rosa</h3>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1">4.6</span>
                    </div>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-1" />
                    Oeste
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-between bg-white px-6 md:px-16 py-12">
        {/* Texto */}
        <div className="max-w-md text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-2xl font-semibold text-gray-800">
            Faça uma pergunta ou torne-se parceiro
            <span className="block mt-3 w-20 border-b-8 border-gray-800 rounded-md"></span>
          </h2>
          <p className="mt-4 text-gray-600">
            Se você tem alguma dúvida ou está interessado em colaborar conosco,
            estamos aqui para ajudar. Entre em contato conosco e faça parte de
            algo incrível.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
              Fazer Pergunta
            </button>
            <button className="bg-white border border-gray-300 py-2 px-4 rounded hover:bg-gray-100">
              Tornar-se Parceiro
            </button>
          </div>
        </div>

        {/* Imagem */}
        <div className="w-full max-w-sm">
          <img
            src="/hotelimg/viagem.svg"
            alt="Ilustração de parceria"
            className="w-full"
          />
        </div>
      </section>

      {/* imagem e texto, viaja conosco*/}
      <section
        className="relative bg-cover bg-center py-24 px-6"
        style={{
          backgroundImage: "url(/hotelimg/study1.jpg)",
          backgroundSize: "35%", // Diminuindo a imagem para 80% do tamanho da seção
          backgroundPosition: "center", // Garante que a imagem seja centralizada
          backgroundRepeat: "no-repeat", // Impede a repetição da imagem
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Sobreposição escura */}
        <div className="relative z-10 text-left text-white mt-10 ml-6">
          <h2 className="text-4xl font-bold mb-4">Conosco viajar é fácil</h2>
          <p className="text-lg mb-6">Viaja conosco</p>

          <button className="bg-black text-white font-semibold py-3 px-8 rounded-md hover:bg-primary/90 transition">
            Agendar
          </button>
        </div>
      </section>

      {/* Risco abaixo do título */}
      <div className="w-16 border-b-4 border-gray-800 mt-2 mx-auto"></div>

      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-left p-6">
          Tipos de Hotel
          <span className="block mt-3 w-20 border-b-8 border-gray-800 rounded-md"></span>
        </h2>
        <div className="max-w-7xl mx-auto text-center">
          {/* Divisão dos ícones */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Ícone 1 */}
            <div className="flex flex-col items-center">
              <div className="w-28 h-28 mb-4">
                <img
                  src="/svg/travel1.svg"
                  alt="Hotel Boutique"
                  className="w-full h-full"
                />
              </div>
              <p className="text-gray-700">
                Desfrute de uma experiência única em hotéis boutique, com
                serviços personalizados e localização privilegiada para explorar
                os pontos turísticos mais exclusivos.
              </p>
            </div>

            {/* Ícone 2 */}
            <div className="flex flex-col items-center">
              <div className="w-28 h-28 mb-4">
                <img
                  src="/svg/travel2.svg"
                  alt="Hotel Resort"
                  className="w-full h-full"
                />
              </div>
              <p className="text-gray-700">
                Relaxe e rejuvenesça em um resort de luxo, onde você pode
                desfrutar de atividades recreativas, spa, e restaurantes
                gourmet, em um ambiente de total conforto.
              </p>
            </div>

            {/* Ícone 3 */}
            <div className="flex flex-col items-center">
              <div className="w-28 h-28 mb-4">
                <img
                  src="/svg/travel3.svg"
                  alt="Hotel Econômico"
                  className="w-full h-full"
                />
              </div>
              <p className="text-gray-700">
                Para quem busca uma opção acessível, os hotéis econômicos
                oferecem conforto e praticidade, com localização estratégica e
                opções de serviços simplificados para viajantes inteligentes.
              </p>
            </div>
          </div>

          {/* Botão central */}
          <button className="bg-black text-white font-semibold py-2.5 px-12 rounded-full hover:bg-zinc-700 transition">
            Aderir
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-300 text-black py-12">
        <div className="flex justify-center items-center mb-7">
          <div className="w-full max-w-2xl bg-white rounded-lg p-4">
            <div className="flex gap-4 items-center">
              <Input
                type="text"
                placeholder="Hotéis"
                className="flex-1 text-black"
              />
              <Button className="bg-primary hover:bg-primary/90">
                <Search className="w-4 h-4 mr-2" />
                Buscar
              </Button>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-black">ViajaFácil</h3>
              <p className="text-black">Sua plataforma de reservas de hotéis</p>

              {/* Ícones Google Play e App Store dentro de botões */}
              <div className="flex gap-6 mt-6 justify-center">
                {/* PlayStore Button */}
                <button className="flex items-center bg-black text-white py-2 px-4 rounded-md hover:bg-gray-700 transition">
                  <FaGooglePlay className="w-3 h-3 mr-2" />
                  PlayStore
                </button>

                {/* App Store Button */}
                <button className="flex items-center bg-black text-white py-2 px-4 rounded-md hover:bg-gray-700 transition">
                  <FaAppStore className="w-3 h-3 mr-2" />
                  App Store
                </button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-black">Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-black hover:text-white">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black hover:text-white">
                    Hotéis
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black hover:text-white">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-black">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-black hover:text-white">
                    Termos
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black hover:text-white">
                    Privacidade
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-black">Social</h4>
              <div className="mt-6 text-black">
                <p className="mb-2">Nos contacte:</p>
                <p className="font-semibold">
                  <a href="tel:+244937957171" className="hover:text-primary">
                    +244 937 957 171
                  </a>
                </p>

                {/* E-mail */}
                <p className="mb-2">Ou envie um e-mail para:</p>
                <p className="font-semibold">
                  <a
                    href="mailto:contato@viajafacil.com"
                    className="hover:text-primary"
                  >
                    contato@viajafacil.com
                  </a>
                </p>
              </div>

              {/* Redes Sociais - Ícones */}
              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-black hover:text-white">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-black hover:text-white">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-black hover:text-white">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-black">
            <p>&copy; 2024 ViajaFácil. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
