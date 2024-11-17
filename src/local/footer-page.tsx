import { Input } from "@/components/ui/input";
import { Search, Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "react-day-picker";
import { FaGooglePlay, FaAppStore } from "react-icons/fa";

export function FooterPage() {
  return (
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
  );
}
