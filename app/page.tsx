"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import {
  Brain,
  Search,
  Target,
  MessageCircle,
  Phone,
  MapPin,
  Instagram,
  Globe,
  Star,
  Users,
  FileText,
  Calendar,
  CreditCard,
  HelpCircle,
  Zap,
  Heart,
  BarChart3,
  Lightbulb,
  User,
  Quote,
} from "lucide-react"
import Image from "next/image"
import { useEffect } from "react"

export default function NeuropsicologiaSite() {
  const whatsappNumber = "5566999791304"
  const whatsappMessage = "Olá! Gostaria de agendar uma avaliação neuropsicológica com o psicólogo Rodrigo Lübke."
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth"

    return () => {
      document.documentElement.style.scrollBehavior = "auto"
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Navbar */}
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50">
        <nav className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/logorodrigo.png"
                alt="Rodrigo Lübke - Neuropsicologia"
                width={150}
                height={50}
                className="h-52 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Home
              </a>
              <a href="#avaliacao" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Avaliação
              </a>
              <a href="#diferenciais" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Diferenciais
              </a>
              <a href="#sobre" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Sobre
              </a>
              <a href="#depoimentos" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Depoimentos
              </a>
              <a href="#faq" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                FAQ
              </a>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button
                className="text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 bg-[#002147] hover:bg-[#001a36]"
                onClick={() => window.open(whatsappUrl, "_blank")}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Agendar Avaliação
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-700"
                onClick={() => {
                  const mobileMenu = document.getElementById("mobile-menu")
                  if (mobileMenu) {
                    mobileMenu.classList.toggle("hidden")
                  }
                }}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div id="mobile-menu" className="hidden lg:hidden border-t border-gray-100 py-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-gray-900 font-medium transition-colors px-2 py-1">
                Home
              </a>
              <a
                href="#avaliacao"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors px-2 py-1"
              >
                Avaliação
              </a>
              <a
                href="#diferenciais"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors px-2 py-1"
              >
                Diferenciais
              </a>
              <a href="#sobre" className="text-gray-700 hover:text-gray-900 font-medium transition-colors px-2 py-1">
                Sobre
              </a>
              <a
                href="#depoimentos"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors px-2 py-1"
              >
                Depoimentos
              </a>
              <a href="#faq" className="text-gray-700 hover:text-gray-900 font-medium transition-colors px-2 py-1">
                FAQ
              </a>
              <div className="pt-4 border-t border-gray-100">
                <Button
                  className="w-full text-white px-6 py-2 rounded-lg font-medium"
                  style={{ backgroundColor: "#002147" }}
                  onClick={() => window.open(whatsappUrl, "_blank")}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Agendar consulta
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
        }}
        id="home"
      >
        {/* Elementos decorativos de fundo */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gray-200 rounded-full opacity-15 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-5 blur-3xl" style={{ backgroundColor: "#002147" }}></div>
          
          {/* Padrões decorativos adicionais */}
          <div className="absolute top-40 right-20 w-24 h-24 bg-blue-50 rounded-full opacity-20"></div>
          <div className="absolute bottom-40 left-20 w-20 h-20 bg-gray-100 rounded-full opacity-20"></div>
          
          {/* Linhas decorativas */}
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-30"></div>
          <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-30"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Conteúdo Textual - Lado Esquerdo */}
              <div className="text-center lg:text-left relative">
                {/* Elementos decorativos do texto */}
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-blue-50 rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-gray-100 rounded-full opacity-20"></div>
                
                <Badge className="mb-8 bg-gray-100 text-gray-700 hover:bg-gray-200 px-4 py-2 text-sm font-medium border-0 shadow-sm">
                  CRP 18/04819 - Especialista em Neuropsicologia
                </Badge>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light mb-8 leading-tight" style={{ color: "#002147" }}>
                  Psicólogo Rodrigo Lübke
                </h1>
                <p className="text-xl lg:text-2xl text-gray-600 mb-12 font-light leading-relaxed">
                  Clareza emocional e diagnóstica para transformar a jornada terapêutica de adultos e crianças
                </p>
                <Button
                  size="lg"
                  className="text-white px-10 py-5 text-xl font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
                  style={{ backgroundColor: "#002147" }}
                  onClick={() => window.open(whatsappUrl, "_blank")}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = "#001a36")}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = "#002147")}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <MessageCircle className="mr-3 h-6 w-6" />
                  Agende sua avaliação pelo WhatsApp
                </Button>
              </div>

              {/* Área da Foto - Lado Direito */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative">
                  {/* Fundo científico minimalista */}
                  <div className="w-80 h-80 lg:w-[40rem] lg:h-[40rem] rounded-full bg-gray-100 relative overflow-hidden shadow-2xl flex items-center justify-center">
                    {/* Elementos decorativos científicos */}
                    <div className="absolute top-8 left-8 w-12 h-12 bg-gray-200 rounded-full opacity-40"></div>
                    <div className="absolute bottom-12 right-12 w-8 h-8 bg-gray-300 rounded-full opacity-30"></div>
                    <div className="absolute top-1/2 left-4 w-6 h-6 bg-gray-200 rounded-full opacity-25"></div>

                    {/* Padrão de conexões neurais sutil */}
                    <div className="absolute inset-0 opacity-10">
                      <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
                        <circle cx="100" cy="100" r="3" fill="#002147" />
                        <circle cx="300" cy="150" r="2" fill="#002147" />
                        <circle cx="200" cy="300" r="3" fill="#002147" />
                        <circle cx="350" cy="280" r="2" fill="#002147" />
                        <line x1="100" y1="100" x2="300" y2="150" stroke="#002147" strokeWidth="1" opacity="0.3" />
                        <line x1="300" y1="150" x2="200" y2="300" stroke="#002147" strokeWidth="1" opacity="0.3" />
                        <line x1="200" y1="300" x2="350" y2="280" stroke="#002147" strokeWidth="1" opacity="0.3" />
                      </svg>
                    </div>

                    {/* A imagem diretamente dentro deste container */}
                    <Image
                      src="/rodrigo1.jpg"
                      alt="Psicólogo Rodrigo Lübke"
                      width={1000}
                      height={1000}
                      className="w-full h-full object-cover object-[center_30%] rounded-full"
                    />
                  </div>

                  {/* Elementos decorativos externos */}
                  <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full opacity-15" style={{ backgroundColor: "#002147" }}></div>
                  <div className="absolute -bottom-4 -left-4 w-20 h-16 bg-gray-300 rounded-full opacity-20"></div>

                  {/* Ícones científicos flutuantes */}
                  <div className="absolute top-12 -left-8 text-gray-300 opacity-20">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <div className="absolute bottom-16 -right-8 text-gray-300 opacity-20">
                    <Search className="w-5 h-5" />
                  </div>
                  
                  {/* Elementos decorativos adicionais */}
                  <div className="absolute top-1/2 -right-4 w-8 h-8 bg-blue-50 rounded-full opacity-20"></div>
                  <div className="absolute bottom-1/2 -left-4 w-6 h-6 bg-gray-100 rounded-full opacity-20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avaliação Neuropsicológica Section */}
      <section className="py-24 bg-white relative overflow-hidden" id="avaliacao">
        {/* Elementos decorativos de fundo */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Círculos grandes com blur */}
          <div className="absolute top-20 right-10 w-64 h-64 bg-blue-50 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-gray-100 rounded-full opacity-15 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-5 blur-3xl" style={{ backgroundColor: "#002147" }}></div>
          
          {/* Círculos médios */}
          <div className="absolute top-40 left-20 w-32 h-32 bg-blue-50 rounded-full opacity-20"></div>
          <div className="absolute bottom-40 right-20 w-40 h-40 bg-gray-100 rounded-full opacity-20"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-blue-50 rounded-full opacity-15"></div>
          <div className="absolute bottom-1/3 left-1/4 w-28 h-28 bg-gray-100 rounded-full opacity-15"></div>
          
          {/* Círculos pequenos */}
          <div className="absolute top-1/4 left-1/3 w-16 h-16 bg-blue-50 rounded-full opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/3 w-12 h-12 bg-gray-100 rounded-full opacity-10"></div>
          <div className="absolute top-2/3 left-1/4 w-8 h-8 bg-blue-50 rounded-full opacity-10"></div>
          <div className="absolute bottom-2/3 right-1/4 w-10 h-10 bg-gray-100 rounded-full opacity-10"></div>
          
          {/* Linhas decorativas */}
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-30"></div>
          <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-30"></div>
          <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-20"></div>
          <div className="absolute bottom-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-20"></div>
          
          {/* Padrões decorativos */}
          <div className="absolute top-1/4 right-1/4 w-40 h-40 opacity-5">
            <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="40" stroke="#002147" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="30" stroke="#002147" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="20" stroke="#002147" strokeWidth="0.5" />
            </svg>
          </div>
          <div className="absolute bottom-1/4 left-1/4 w-40 h-40 opacity-5">
            <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="40" stroke="#002147" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="30" stroke="#002147" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="20" stroke="#002147" strokeWidth="0.5" />
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-50 rounded-full opacity-20"></div>
              <h2 className="text-3xl lg:text-4xl font-light mb-8" style={{ color: "#002147" }}>
                Avaliação Neuropsicológica
              </h2>
              <div className="w-24 h-1 bg-gray-200 mx-auto rounded-full"></div>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto mt-8">
                A avaliação neuropsicológica é um processo essencial para compreender as causas profundas de
                dificuldades emocionais, cognitivas e comportamentais. Com Rodrigo Lübke, esse processo é conduzido com
                empatia, ciência e personalização, oferecendo um caminho claro para o autoconhecimento e o
                direcionamento terapêutico.
              </p>
            </div>

            {/* Indicações Comuns */}
            <div className="mb-20 relative">
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-blue-50 rounded-full opacity-20"></div>
              <h3 className="text-2xl font-medium text-center mb-12" style={{ color: "#002147" }}>
                Indicações Comuns
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover:shadow-md transition-all duration-300 border-gray-100 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="text-center pb-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Brain className="h-6 w-6" style={{ color: "#002147" }} />
                    </div>
                    <CardTitle className="text-gray-900 font-medium text-sm">
                      Suspeitas de TDAH, TEA ou dificuldades de aprendizagem
                    </CardTitle>
                  </CardHeader>
                </Card>

                <Card className="hover:shadow-md transition-all duration-300 border-gray-100 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="text-center pb-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Zap className="h-6 w-6" style={{ color: "#002147" }} />
                    </div>
                    <CardTitle className="text-gray-900 font-medium text-sm">
                      Ansiedade, desorganização, impulsividade
                    </CardTitle>
                  </CardHeader>
                </Card>

                <Card className="hover:shadow-md transition-all duration-300 border-gray-100 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="text-center pb-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-6 w-6" style={{ color: "#002147" }} />
                    </div>
                    <CardTitle className="text-gray-900 font-medium text-sm">
                      Baixa autoestima, desmotivação, falta de foco
                    </CardTitle>
                  </CardHeader>
                </Card>

                <Card className="hover:shadow-md transition-all duration-300 border-gray-100 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="text-center pb-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Search className="h-6 w-6" style={{ color: "#002147" }} />
                    </div>
                    <CardTitle className="text-gray-900 font-medium text-sm">
                      Queixas de memória ou declínio cognitivo
                    </CardTitle>
                  </CardHeader>
                </Card>

                <Card className="hover:shadow-md transition-all duration-300 border-gray-100 bg-white/80 backdrop-blur-sm md:col-span-2 lg:col-span-1">
                  <CardHeader className="text-center pb-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <FileText className="h-6 w-6" style={{ color: "#002147" }} />
                    </div>
                    <CardTitle className="text-gray-900 font-medium text-sm">
                      Dúvidas diagnósticas e planos terapêuticos
                    </CardTitle>
                  </CardHeader>
                </Card>
              </div>
            </div>

            {/* Processo Timeline */}
            <div className="mb-16 relative">
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-blue-50 rounded-full opacity-20"></div>
              <h3 className="text-2xl font-medium text-center mb-12" style={{ color: "#002147" }}>
                Como Funciona o Processo
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center relative">
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gray-100 rounded-full opacity-20"></div>
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold shadow-lg"
                    style={{ backgroundColor: "#002147" }}
                  >
                    1
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">Entrevista clínica inicial</h4>
                  <p className="text-sm text-gray-600">Compreensão detalhada das queixas e histórico</p>
                </div>

                <div className="text-center relative">
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-gray-100 rounded-full opacity-20"></div>
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold shadow-lg"
                    style={{ backgroundColor: "#002147" }}
                  >
                    2
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">Aplicação de testes padronizados</h4>
                  <p className="text-sm text-gray-600">Instrumentos validados e atualizados</p>
                </div>

                <div className="text-center relative">
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gray-100 rounded-full opacity-20"></div>
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold shadow-lg"
                    style={{ backgroundColor: "#002147" }}
                  >
                    3
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">Análise integrada dos resultados</h4>
                  <p className="text-sm text-gray-600">Interpretação científica e personalizada</p>
                </div>

                <div className="text-center relative">
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-gray-100 rounded-full opacity-20"></div>
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold shadow-lg"
                    style={{ backgroundColor: "#002147" }}
                  >
                    4
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">Devolutiva com relatório</h4>
                  <p className="text-sm text-gray-600">Orientações práticas e plano de ação</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50/80 backdrop-blur-sm rounded-xl p-8 mb-12 relative">
              <div className="absolute top-4 right-4 w-8 h-8 bg-blue-50 rounded-full opacity-20"></div>
              <div className="flex items-center justify-center mb-4">
                <MapPin className="h-5 w-5 mr-2" style={{ color: "#002147" }} />
                <span className="text-gray-800 font-medium">Modalidades de Atendimento</span>
              </div>
              <p className="text-center text-gray-600">
                Atendimento presencial em Sinop/MT ou online (casos específicos para adultos)
              </p>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="text-white px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
                style={{ backgroundColor: "#002147" }}
                onClick={() => window.open(whatsappUrl, "_blank")}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#001a36")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "#002147")}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <MessageCircle className="mr-2 h-5 w-5" />
                Agendar consulta
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="py-14 bg-gray-50" id="diferenciais">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-light text-center mb-20" style={{ color: "#002147" }}>
              Por que escolher minha avaliação?
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <Card className="group hover:shadow-md transition-all duration-300 bg-white border-gray-100">
                <CardHeader>
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gray-200 transition-colors">
                    <Target className="h-5 w-5" style={{ color: "#002147" }} />
                  </div>
                  <CardTitle className="text-gray-900 font-medium mb-2">Avaliação que gera mudança</CardTitle>
                  <CardDescription className="text-gray-500">Laudo + plano de ação claro</CardDescription>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-md transition-all duration-300 bg-white border-gray-100">
                <CardHeader>
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gray-200 transition-colors">
                    <BarChart3 className="h-5 w-5" style={{ color: "#002147" }} />
                  </div>
                  <CardTitle className="text-gray-900 font-medium mb-2">Instrumentos atualizados</CardTitle>
                  <CardDescription className="text-gray-500">Testes validados para todas as idades</CardDescription>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-md transition-all duration-300 bg-white border-gray-100">
                <CardHeader>
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gray-200 transition-colors">
                    <Lightbulb className="h-5 w-5" style={{ color: "#002147" }} />
                  </div>
                  <CardTitle className="text-gray-900 font-medium mb-2">Processo personalizado</CardTitle>
                  <CardDescription className="text-gray-500">Escuta ativa e abordagem individual</CardDescription>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-md transition-all duration-300 bg-white border-gray-100">
                <CardHeader>
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gray-200 transition-colors">
                    <Brain className="h-5 w-5" style={{ color: "#002147" }} />
                  </div>
                  <CardTitle className="text-gray-900 font-medium mb-2">Integração com terapia</CardTitle>
                  <CardDescription className="text-gray-500">Resultados que direcionam intervenções</CardDescription>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-md transition-all duration-300 bg-white border-gray-100 md:col-span-2 lg:col-span-1">
                <CardHeader>
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gray-200 transition-colors">
                    <Calendar className="h-5 w-5" style={{ color: "#002147" }} />
                  </div>
                  <CardTitle className="text-gray-900 font-medium mb-2">Acompanhamento organizado</CardTitle>
                  <CardDescription className="text-gray-500">Suporte desde o primeiro contato</CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="text-center">
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300"
                style={{ borderColor: "#002147", color: "#002147" }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#002147"
                  e.target.style.color = "white"
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent"
                  e.target.style.color = "#002147"
                }}
              >
               Agendar consulta
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section className="py-24 bg-white relative overflow-hidden" id="sobre">
        {/* Elementos decorativos de fundo */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-64 h-64 bg-blue-50 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-gray-100 rounded-full opacity-15 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-5 blur-3xl" style={{ backgroundColor: "#002147" }}></div>
          
          {/* Linhas decorativas */}
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-30"></div>
          <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-30"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-50 rounded-full opacity-20"></div>
              <h2 className="text-3xl lg:text-4xl font-light mb-8" style={{ color: "#002147" }}>
                Conheça o Psicólogo Rodrigo Lübke
              </h2>
              <div className="w-24 h-1 bg-gray-200 mx-auto rounded-full"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 relative">
                {/* Elementos decorativos do texto */}
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-blue-50 rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-gray-100 rounded-full opacity-20"></div>
                
                <div className="bg-gray-50 rounded-2xl p-8 shadow-sm relative">
                  <div className="absolute top-4 right-4 w-8 h-8 bg-blue-50 rounded-full opacity-20"></div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Sou psicólogo clínico, <strong>especializado em Neuropsicologia</strong> e formado em Terapia
                    Cognitivo-Comportamental. Atuo com dedicação e empatia no atendimento de adultos e crianças, buscando
                    sempre promover clareza, autonomia e bem-estar.
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  <Badge
                    className="px-4 py-2 text-sm font-medium border-0 shadow-sm"
                    style={{ backgroundColor: "#002147", color: "white" }}
                  >
                    CRP 18/04819
                  </Badge>
                  <Badge className="bg-gray-100 text-gray-700 px-4 py-2 text-sm font-medium border-0 shadow-sm">
                    Especialista em Neuropsicologia
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                    <div className="flex items-center mb-2">
                      <Brain className="h-5 w-5 mr-2" style={{ color: "#002147" }} />
                      <span className="font-medium text-gray-900">Neuropsicologia</span>
                    </div>
                    <p className="text-sm text-gray-600">Especialização completa</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                    <div className="flex items-center mb-2">
                      <Users className="h-5 w-5 mr-2" style={{ color: "#002147" }} />
                      <span className="font-medium text-gray-900">Atendimento</span>
                    </div>
                    <p className="text-sm text-gray-600">Adultos e crianças</p>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="text-white px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
                  style={{ backgroundColor: "#002147" }}
                  onClick={() => window.open(whatsappUrl, "_blank")}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = "#001a36")}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = "#002147")}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Agendar consulta
                </Button>
              </div>

              <div className="flex justify-center relative">
                <div className="relative">
                  {/* Elementos decorativos da foto */}
                  <div className="absolute -top-6 -right-6 w-20 h-20 bg-blue-50 rounded-full opacity-20"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gray-100 rounded-full opacity-20"></div>
                  
                  <div className="relative">
                    <div className="absolute inset-0  rounded-xl opacity-50"></div>
                    <Image
                      src="/rodrigo2.png"
                      alt="Psicólogo Rodrigo Lübke - Especialista em Neuropsicologia"
                      width={400}
                      height={400}
                      className="rounded-xl shadow-xl"
                    />
                  </div>

                  {/* Elementos decorativos flutuantes */}
                  <div className="absolute top-1/4 -right-8 text-gray-300 opacity-20">
                    <Brain className="w-6 h-6" />
                  </div>
                  <div className="absolute bottom-1/4 -left-8 text-gray-300 opacity-20">
                    <Search className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="py-24 bg-gray-50" id="depoimentos">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-light text-center mb-20" style={{ color: "#002147" }}>
              O que dizem pacientes e familiares
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white border-gray-100 hover:shadow-md transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center mb-6">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <Quote className="h-6 w-6 text-gray-300 mb-4" />
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed italic">
                    "A avaliação foi um divisor de águas! Finalmente entendemos as dificuldades do nosso filho e
                    recebemos um plano realista."
                  </p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                      <User className="h-4 w-4 text-gray-500" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Ana</p>
                      <p className="text-sm text-gray-500">Mãe de paciente</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-100 hover:shadow-md transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center mb-6">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <Quote className="h-6 w-6 text-gray-300 mb-4" />
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed italic">
                    "Espaço reservado para depoimentos dos pacientes integrados com Google Meu Negócio"
                  </p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                      <User className="h-4 w-4 text-gray-500" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Nome do Paciente</p>
                      <p className="text-sm text-gray-500">Verificado</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-100 hover:shadow-md transition-all duration-300 md:col-span-2 lg:col-span-1">
                <CardHeader>
                  <div className="flex items-center mb-6">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <Quote className="h-6 w-6 text-gray-300 mb-4" />
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed italic">
                    "Espaço reservado para depoimentos dos pacientes integrados com Google Meu Negócio"
                  </p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                      <User className="h-4 w-4 text-gray-500" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Nome do Paciente</p>
                      <p className="text-sm text-gray-500">Verificado</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white relative overflow-hidden" id="faq">
        {/* Elementos decorativos de fundo */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Círculos grandes com blur */}
          <div className="absolute top-20 right-10 w-64 h-64 bg-blue-50 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-gray-100 rounded-full opacity-15 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-5 blur-3xl" style={{ backgroundColor: "#002147" }}></div>
          
          {/* Círculos médios */}
          <div className="absolute top-40 left-20 w-32 h-32 bg-blue-50 rounded-full opacity-20"></div>
          <div className="absolute bottom-40 right-20 w-40 h-40 bg-gray-100 rounded-full opacity-20"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-blue-50 rounded-full opacity-15"></div>
          <div className="absolute bottom-1/3 left-1/4 w-28 h-28 bg-gray-100 rounded-full opacity-15"></div>
          
          {/* Círculos pequenos */}
          <div className="absolute top-1/4 left-1/3 w-16 h-16 bg-blue-50 rounded-full opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/3 w-12 h-12 bg-gray-100 rounded-full opacity-10"></div>
          <div className="absolute top-2/3 left-1/4 w-8 h-8 bg-blue-50 rounded-full opacity-10"></div>
          <div className="absolute bottom-2/3 right-1/4 w-10 h-10 bg-gray-100 rounded-full opacity-10"></div>
          
          {/* Linhas decorativas */}
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-30"></div>
          <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-30"></div>
          <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-20"></div>
          <div className="absolute bottom-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-20"></div>
          
          {/* Padrões decorativos */}
          <div className="absolute top-1/4 right-1/4 w-40 h-40 opacity-5">
            <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="40" stroke="#002147" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="30" stroke="#002147" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="20" stroke="#002147" strokeWidth="0.5" />
            </svg>
          </div>
          <div className="absolute bottom-1/4 left-1/4 w-40 h-40 opacity-5">
            <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="40" stroke="#002147" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="30" stroke="#002147" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="20" stroke="#002147" strokeWidth="0.5" />
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20 relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-50 rounded-full opacity-20"></div>
              <h2 className="text-3xl lg:text-4xl font-light mb-8" style={{ color: "#002147" }}>
                Perguntas Frequentes
              </h2>
              <div className="w-24 h-1 bg-gray-200 mx-auto rounded-full"></div>
            </div>

            <Accordion type="single" collapsible className="space-y-4 mb-16">
              <AccordionItem value="item-1" className="border border-gray-100 rounded-lg px-6 bg-white/80 backdrop-blur-sm shadow-sm">
                <AccordionTrigger className="text-left text-gray-900 hover:text-gray-700">
                  <div className="flex items-center">
                    <HelpCircle className="h-5 w-5 mr-3" style={{ color: "#002147" }} />
                    Como funciona a avaliação?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4 leading-relaxed">
                  A avaliação neuropsicológica é um processo estruturado que inclui entrevista inicial, aplicação de
                  testes padronizados, análise dos resultados e devolutiva com relatório detalhado. O processo completo
                  leva de 4 a 6 sessões, dependendo da complexidade do caso.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-gray-100 rounded-lg px-6 bg-white/80 backdrop-blur-sm shadow-sm">
                <AccordionTrigger className="text-left text-gray-900 hover:text-gray-700">
                  <div className="flex items-center">
                    <CreditCard className="h-5 w-5 mr-3" style={{ color: "#002147" }} />
                    Qual o valor e formas de pagamento?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4 leading-relaxed">
                  Trabalho apenas com atendimento particular, oferecendo parcelamento via cartão de crédito. Entre em
                  contato pelo WhatsApp para conhecer os valores atualizados e condições de pagamento.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-gray-100 rounded-lg px-6 bg-white/80 backdrop-blur-sm shadow-sm">
                <AccordionTrigger className="text-left text-gray-900 hover:text-gray-700">
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 mr-3" style={{ color: "#002147" }} />
                    Pode ser feita online?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4 leading-relaxed">
                  Sim, para adultos em casos específicos. A avaliação online é possível quando os instrumentos
                  utilizados permitem aplicação remota. Para crianças, recomendo sempre o atendimento presencial.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-gray-100 rounded-lg px-6 bg-white/80 backdrop-blur-sm shadow-sm">
                <AccordionTrigger className="text-left text-gray-900 hover:text-gray-700">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 mr-3" style={{ color: "#002147" }} />
                    Para quem é indicada?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4 leading-relaxed">
                  A avaliação é indicada para suspeitas de TDAH, TEA, dificuldades de aprendizagem, problemas de
                  memória, ansiedade, questões comportamentais e sempre que há necessidade de esclarecimento diagnóstico
                  para direcionamento terapêutico adequado.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="text-center">
              <Button
                size="lg"
                className="text-white px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
                style={{ backgroundColor: "#002147" }}
                onClick={() => window.open(whatsappUrl, "_blank")}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#001a36")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "#002147")}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <MessageCircle className="mr-2 h-5 w-5" />
                Agendar consulta
              </Button>
            </div>
          </div>
        </div>
      </section>

     
      {/* Footer */}
      <footer className="text-white py-20" style={{ backgroundColor: "#002147" }}>
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-7xl mx-auto">
         
            <div className="grid md:grid-cols-4 gap-12 text-center md:text-left">
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center mb-4">
                  <MapPin className="h-5 w-5 mr-2 text-blue-200" />
                  <span className="font-medium">Endereço</span>
                </div>
                <p className="text-blue-200 leading-relaxed">
                  Rua das Rosas, 47, Sala 03
                  <br />
                  Sinop/MT
                </p>
              </div>

              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center mb-4">
                  <Phone className="h-5 w-5 mr-2 text-blue-200" />
                  <span className="font-medium">WhatsApp</span>
                </div>
                <p className="text-blue-200">(66) 99979-1304</p>
              </div>

              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center mb-6">
                  <span className="font-medium">Redes Sociais</span>
                </div>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/rodrigo.lubke"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a
                    href="https://rodrigolubke.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    <Globe className="h-6 w-6" />
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center mb-4">
                  
                  <span className="font-medium">Desenvolvido por</span>
                </div>
                  <Image
                    src="/logo02.png"
                    alt="HW Logo"
                    width={120}
                    height={60}
                    className="h-14 w-auto"
                  />
              </div>
            </div>

            

            <div className="border-t border-blue-800 mt-16 pt-8 text-center">
              <p className="text-blue-200">© 2025 Psicólogo Rodrigo Lübke. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
