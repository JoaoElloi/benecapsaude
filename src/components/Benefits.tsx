import { Clock, Network, Shield, HeartPulse, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Benefits = () => {
  const benefits = [
    {
      icon: Network,
      title: "Rede Credenciada Completa",
      description: "Acesso a uma ampla rede de profissionais e clínicas especializadas em Brasília e entorno."
    },
    {
      icon: Clock,
      title: "Agilidade no Atendimento",
      description: "Processos simplificados e atendimento rápido para que você não perca tempo."
    },
    {
      icon: Shield,
      title: "Segurança e Confiança",
      description: "Operadora registrada na ANS, seguindo todas as normas e regulamentações."
    },
    {
      icon: HeartPulse,
      title: "Foco na Prevenção",
      description: "Incentivamos o cuidado preventivo com check-ups e acompanhamento contínuo."
    },
    {
      icon: Users,
      title: "Atendimento Humanizado",
      description: "Equipe dedicada a oferecer um atendimento próximo, acolhedor e personalizado."
    },
    {
      icon: CheckCircle,
      title: "Planos Acessíveis",
      description: "Valores justos e condições facilitadas para você cuidar da sua saúde."
    }
  ];

  return (
    <section id="beneficios" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Por que escolher a <span className="text-secondary">Benecap?</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Oferecemos muito mais do que um plano de saúde. Oferecemos tranquilidade, 
            cuidado e compromisso com o seu bem-estar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl border border-border/40 hover:border-secondary/40 bg-background hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-6 h-16 w-16 rounded-2xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <Icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;