import { Search, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import benecapLogo from "@/assets/benecap-logo.png";

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <img 
              src={benecapLogo} 
              alt="Benecap Saúde" 
              className="h-16 w-auto"
            />
          </a>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="/#home" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="/#empresa" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Empresa
            </a>
            <a href="/#rede" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Rede Credenciada
            </a>
            <a href="/area-prestador" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Área do Prestador
            </a>
            <a href="/atualizacao-cadastro" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Atualização de Cadastro
            </a>
            <a href="/#contato" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contato
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="relative hidden md:block">
              {searchOpen ? (
                <Input
                  type="search"
                  placeholder="Buscar..."
                  className="w-64 pr-10"
                  onBlur={() => setSearchOpen(false)}
                  autoFocus
                />
              ) : (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSearchOpen(true)}
                  className="h-9 w-9"
                >
                  <Search className="h-4 w-4" />
                </Button>
              )}
            </div>

            {/* Phone - Hidden on mobile */}
            <Button variant="ghost" size="sm" className="hidden sm:flex gap-2">
              <Phone className="h-4 w-4" />
              <span className="text-sm">(61) 3242-2022</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
