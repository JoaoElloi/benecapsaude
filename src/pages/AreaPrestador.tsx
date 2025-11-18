import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import benecapLogo from "@/assets/benecap-logo.png";

const AreaPrestador = () => {
  const [cnpj, setCnpj] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar lógica de autenticação
    console.log("Login prestador:", { cnpj, senha });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-muted/30 to-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <img 
              src={benecapLogo} 
              alt="Benecap Saúde" 
              className="h-16 w-auto"
            />
          </div>
          <CardTitle className="text-2xl font-bold">Área do Prestador</CardTitle>
          <CardDescription>
            Acesse sua área exclusiva com CNPJ e senha
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="cnpj">CNPJ</Label>
              <Input
                id="cnpj"
                type="text"
                placeholder="00.000.000/0000-00"
                value={cnpj}
                onChange={(e) => setCnpj(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="senha">Senha</Label>
              <Input
                id="senha"
                type="password"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90">
              Entrar
            </Button>
            <div className="text-center mt-4">
              <a href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                ← Voltar para o site
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AreaPrestador;