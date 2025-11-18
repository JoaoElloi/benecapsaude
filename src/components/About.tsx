import { Building2, Award, MapPin, FileCheck } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Building2,
      title: "Atuação Regional",
      description: "Presente em Brasília e entorno, oferecendo cobertura completa para você e sua família."
    },
    {
      icon: Award,
      title: "Registro ANS",
      description: "Operadora registrada na ANS sob nº 41386-1, garantindo sua segurança e tranquilidade."
    },
    {
      icon: FileCheck,
      title: "Produto Certificado",
      description: "Plano ambulatorial com registro ANS 452.388/04-1, atendendo todas as normas vigentes."
    },
    {
      icon: MapPin,
      title: "Segmentação Ambulatorial",
      description: "Especializada em atendimento ambulatorial, focada na prevenção e cuidado contínuo."
    }
  ];

  return (
    <section id="empresa" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Sobre a <span className="text-primary">Benecap Saúde</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Somos uma operadora de plano de saúde ambulatorial comprometida em oferecer 
            atendimento de qualidade, acessível e humanizado para a população de Brasília 
            e região.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-background border border-border/40 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-6 h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional info */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-border/40">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Compromisso com a Saúde
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nossa missão é proporcionar acesso facilitado a serviços de saúde de qualidade, 
              com uma rede credenciada selecionada e atendimento humanizado. Trabalhamos todos os 
              dias para que você tenha tranquilidade e segurança no cuidado com sua saúde.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
