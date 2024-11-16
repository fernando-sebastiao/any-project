import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Hotel,
  Search,
  Star,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

export function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-black/90 text-white">
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
                className="hover:bg-white hover:text-black transition-colors rounded-lg p-[5px]"
              >
                Lista
              </a>
              <a
                href="#"
                className="hover:bg-white hover:text-black transition-colors rounded-lg p-[5px]"
              >
                Sobre
              </a>
            </nav>
          </div>

          {/* Botões de Login e Cadastro */}
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="text-black border-white hover:bg-white hover:text-black"
            >
              Login
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Cadastre-se
            </Button>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section className="relative pt-16 h-[500px] bg-gradient-to-r from-blue-500 to-purple-600">
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
          <h2 className="text-2xl font-semibold mb-6">Quartos em destaque</h2>
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

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ViajaFácil</h3>
              <p className="text-gray-400">
                Sua plataforma de reservas de hotéis
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Hotéis
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Termos
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Privacidade
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Social</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ViajaFácil. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
