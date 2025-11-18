import { MapPin, Phone, Clock, Mail } from "lucide-react";
import benecapLogo from "@/assets/benecap-logo.png";

const Footer = () => {
  return (
    <footer id="contato" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <a href="tel:6132422022" className="flex items-start gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors group">
                <Phone className="h-5 w-5 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <div>(61) 3242-2022</div>
                  <div className="text-sm">(61) 3242-2012</div>
                </div>
              </a>
              <a href="https://wa.me/556132422022" className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors group">
                <Phone className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>WhatsApp: (61) 3242-2022</span>
              </a>
              <a href="mailto:contato@benecap.com.br" className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors group">
                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>contato@benecap.com.br</span>
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Endereço</h3>
            <div className="flex items-start gap-3 text-primary-foreground/80">
              <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
              <div className="leading-relaxed">
                Brasília - DF<br />
                Distrito Federal<br />
                Brasil
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Horário de Funcionamento</h3>
            <div className="flex items-start gap-3 text-primary-foreground/80">
              <Clock className="h-5 w-5 mt-0.5 flex-shrink-0" />
              <div className="leading-relaxed">
                Segunda a Sexta<br />
                8h às 18h<br />
                <span className="text-sm text-primary-foreground/60">Sábados e domingos fechado</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-primary-foreground/60 text-center md:text-left">
              <p>© 2025 Benecap Saúde. Todos os direitos reservados.</p>
              <p className="mt-1">Registro ANS: 41386-1 | Produto ANS: 452.388/04-1</p>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
