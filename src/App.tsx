import { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, 
  Instagram, 
  CheckCircle2, 
  Star, 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  X,
  MapPin
} from 'lucide-react';

// --- Constants ---
const WHATSAPP_LINK = "https://wa.me/554884383909?text=Olá Dra. Amanda, gostaria de agendar minha primeira consulta gratuita.";
const INSTAGRAM_LINK = "https://www.instagram.com/amandabortolin/";

const RESULTS_IMAGES = [
  "https://i.imgur.com/uASeAvC.png",
  "https://i.imgur.com/0lt0qTu.png",
  "https://i.imgur.com/FwhBoul.png",
  "https://i.imgur.com/KJhKemV.png",
  "https://i.imgur.com/smHwixB.png",
  "https://i.imgur.com/mnsJjwV.png",
  "https://i.imgur.com/7wpCp04.png",
  "https://i.imgur.com/OM3pBEj.png",
  "https://i.imgur.com/Yov2O9Z.png",
  "https://i.imgur.com/ClhSJAP.png",
];

const EXPERT_PHOTOS = [
  "https://i.imgur.com/3oQclwJ.png",
  "https://i.imgur.com/cQIdwId.png",
];

// --- Components ---

const WhatsAppButton = ({ children, className = "" }: { children: ReactNode, className?: string }) => (
  <a 
    href={WHATSAPP_LINK} 
    target="_blank" 
    rel="noopener noreferrer"
    className={`btn-whatsapp group ${className}`}
  >
    <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
    {children}
  </a>
);

const Section = ({ children, className = "", id = "" }: { children: ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-16 px-6 md:py-24 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Prevent scroll when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedImage]);

  return (
    <div className="min-h-screen selection:bg-premium-gold selection:text-white">
      {/* 1. HERO */}
      <header className="relative min-h-[90vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={EXPERT_PHOTOS[0]} 
            alt="Dra. Amanda Bortolin" 
            className="w-full h-full object-cover object-center md:object-[center_20%]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-premium-cream via-premium-cream/40 to-transparent" />
        </div>

        <div className="relative z-10 px-6 pb-12 max-w-7xl mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase bg-premium-gold/10 text-premium-gold rounded-full">
              Cirurgiã-Dentista em Florianópolis
            </span>
            <h1 className="text-5xl md:text-7xl font-light leading-[1.1] mb-6 text-premium-dark">
              Eu sou a <span className="font-semibold italic">Dra. Amanda Bortolin</span>
            </h1>
            <p className="text-lg md:text-xl text-premium-gray mb-10 leading-relaxed font-light">
              Transformando sorrisos com excelência e cuidado humanizado. Sua jornada para um sorriso perfeito começa aqui, com segurança e transparência.
            </p>
            
            <div className="flex flex-col gap-4">
              <WhatsAppButton className="w-full md:w-fit">
                Agendar primeira consulta gratuita
              </WhatsAppButton>
              <p className="text-sm text-premium-gray/80 flex items-center justify-center md:justify-start gap-2">
                <Clock className="w-4 h-4" />
                Resposta rápida • Sem compromisso
              </p>
            </div>
          </motion.div>
        </div>
      </header>

      {/* 2. QUEM SOU EU */}
      <Section className="bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={EXPERT_PHOTOS[1]} 
                alt="Dra. Amanda Bortolin em atendimento" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-premium-gold p-8 rounded-2xl shadow-xl hidden md:block">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-8 leading-tight">
              Excelência técnica com um <br />
              <span className="italic font-light">olhar humano e dedicado.</span>
            </h2>
            <div className="space-y-6 text-premium-gray text-lg font-light leading-relaxed">
              <p>
                Acredito que a odontologia vai muito além de tratar dentes. Trata-se de devolver autoestima, confiança e qualidade de vida para cada paciente que senta em minha cadeira.
              </p>
              <p>
                Em Florianópolis, ofereço um atendimento exclusivo, onde cada detalhe é planejado para que você se sinta confortável e seguro durante todo o processo.
              </p>
              
              <ul className="space-y-4 pt-4">
                {[
                  "Avaliação honesta e detalhada",
                  "Tecnologia de ponta nos procedimentos",
                  "Acompanhamento personalizado do início ao fim",
                  "Foco total no seu bem-estar e conforto"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-premium-dark font-medium">
                    <CheckCircle2 className="w-5 h-5 text-premium-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* 3. RESULTADOS REAIS */}
      <Section id="resultados">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Resultados Reais</h2>
          <p className="text-premium-gray text-lg font-light">Transformações que devolvem o prazer de sorrir.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {RESULTS_IMAGES.map((img, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setSelectedImage(img)}
              className="aspect-square rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity shadow-sm border border-premium-gold/10"
            >
              <img 
                src={img} 
                alt={`Resultado ${index + 1}`} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
        <p className="text-center mt-8 text-xs text-premium-gray italic">
          * Resultados podem variar de pessoa para pessoa. Fotos autorizadas pelos pacientes.
        </p>
      </Section>

      {/* 4. POR QUE CONFIAR EM MIM? */}
      <Section className="bg-premium-dark text-white rounded-[3rem] my-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-white">Por que confiar em mim?</h2>
          <p className="text-gray-400 text-lg font-light">Diferenciais que tornam seu atendimento único.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <ShieldCheck className="w-8 h-8 text-premium-gold" />,
              title: "Segurança Total",
              desc: "Protocolos rigorosos de biossegurança e materiais de altíssima qualidade."
            },
            {
              icon: <Star className="w-8 h-8 text-premium-gold" />,
              title: "Avaliação Honesta",
              desc: "Transparência total sobre o que você realmente precisa para o seu sorriso."
            },
            {
              icon: <Clock className="w-8 h-8 text-premium-gold" />,
              title: "Tempo para Você",
              desc: "Consultas sem pressa, focadas em entender suas queixas e desejos."
            },
            {
              icon: <Sparkles className="w-8 h-8 text-premium-gold" />,
              title: "Estética Avançada",
              desc: "Domínio das técnicas mais modernas para resultados naturais e harmônicos."
            },
            {
              icon: <MapPin className="w-8 h-8 text-premium-gold" />,
              title: "Localização Premium",
              desc: "Consultório moderno e confortável em região privilegiada de Florianópolis."
            },
            {
              icon: <MessageCircle className="w-8 h-8 text-premium-gold" />,
              title: "Suporte Direto",
              desc: "Canal direto para tirar dúvidas antes e depois dos procedimentos."
            }
          ].map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="mb-6">{card.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
              <p className="text-gray-400 font-light leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <Section className="text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-6 italic font-light">O sorriso que você sempre sonhou está a um clique de distância.</h2>
          <p className="text-premium-gray text-lg mb-10 font-light">
            Não deixe para depois o cuidado que você merece hoje. Agende sua avaliação e descubra como podemos transformar sua autoestima.
          </p>
          <WhatsAppButton className="mx-auto">
            Quero agendar minha consulta gratuita
          </WhatsAppButton>
        </div>
      </Section>

      {/* 6. COMO FUNCIONA A PRIMEIRA CONSULTA */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Como funciona a primeira consulta?</h2>
          <p className="text-premium-gray text-lg font-light">Simples, transparente e sem compromisso.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector lines for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-premium-gold/20 -translate-y-1/2 z-0" />
          
          {[
            {
              step: "01",
              title: "Contato via WhatsApp",
              desc: "Clique no botão e envie uma mensagem. Minha equipe agendará o melhor horário para você."
            },
            {
              step: "02",
              title: "Agendamento",
              desc: "Confirmamos sua presença e preparamos tudo para te receber com exclusividade."
            },
            {
              step: "03",
              title: "Avaliação Completa",
              desc: "Conversamos sobre seus objetivos, realizamos o exame clínico e traçamos seu plano de tratamento."
            }
          ].map((item, i) => (
            <div key={i} className="relative z-10 text-center bg-white p-6">
              <div className="w-16 h-16 bg-premium-gold text-white rounded-full flex items-center justify-center text-2xl font-serif font-bold mx-auto mb-6 shadow-lg">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-premium-gray font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 rounded-3xl bg-premium-gold/5 border border-premium-gold/10 text-center max-w-2xl mx-auto">
          <p className="text-premium-dark font-medium">
            Lembrando: esta primeira consulta é <span className="text-premium-gold font-bold">100% gratuita</span> e serve para nos conhecermos e entendermos suas necessidades.
          </p>
        </div>
      </Section>

      {/* 7. MAIS PROVAS (Expert + Bastidores) */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Bastidores e Atendimento</h2>
          <p className="text-premium-gray text-lg font-light">Um ambiente preparado para o seu conforto.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EXPERT_PHOTOS.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group relative aspect-[16/9] rounded-3xl overflow-hidden shadow-xl"
            >
              <img 
                src={img} 
                alt={`Dra. Amanda - ${i === 0 ? 'Perfil' : 'Atendimento'}`} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white font-medium flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-premium-gold" />
                  {i === 0 ? "Atendimento personalizado" : "Tecnologia e precisão"}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 8. CTA FINAL */}
      <Section className="bg-premium-gold text-white rounded-[3rem] text-center my-12 py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl mb-8 text-white leading-tight">
            Pronto para conquistar o <br />
            <span className="italic font-light">sorriso dos seus sonhos?</span>
          </h2>
          <p className="text-white/90 text-xl mb-12 font-light">
            Não perca a oportunidade de realizar sua primeira consulta gratuita com quem é especialista no assunto.
          </p>
          <a 
            href={WHATSAPP_LINK} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-premium-gold font-bold py-5 px-10 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 text-lg"
          >
            <MessageCircle className="w-6 h-6" />
            Agendar minha consulta gratuita agora
          </a>
          <p className="mt-6 text-white/70 text-sm">
            Vagas limitadas para consultas gratuitas este mês.
          </p>
        </div>
      </Section>

      {/* 9. RODAPÉ */}
      <footer className="py-12 px-6 border-t border-premium-gold/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif font-bold mb-2">Dra. Amanda Bortolin</h3>
            <p className="text-premium-gray text-sm font-light">Cirurgiã-Dentista • Florianópolis e Região</p>
          </div>

          <div className="flex gap-6">
            <a 
              href={INSTAGRAM_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-premium-dark text-white flex items-center justify-center hover:bg-premium-gold transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href={WHATSAPP_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-premium-dark text-white flex items-center justify-center hover:bg-[#25D366] transition-colors"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
          </div>

          <div className="text-center md:text-right text-xs text-premium-gray">
            <p>© {new Date().getFullYear()} Dra. Amanda Bortolin. Todos os direitos reservados.</p>
            <p className="mt-1">Desenvolvido com foco em alta conversão.</p>
          </div>
        </div>
      </footer>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-10 h-10" />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage} 
              alt="Resultado ampliado" 
              className="max-w-full max-h-full object-contain rounded-lg"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
