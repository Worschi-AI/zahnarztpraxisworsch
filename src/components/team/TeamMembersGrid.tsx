
import React from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const TeamMembersGrid = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-dental-beige/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Doctors Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-8 lg:mb-12">
            {/* Dr. Thomas Worsch */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300 animate-on-scroll">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 mx-auto md:mx-0">
                  <img 
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"
                    alt="Dr. med. dent. Thomas Worsch - Zahnarzt Dresden Laubegast"
                    className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover border-3 border-gray-200 hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-lg lg:text-xl font-bold text-dental-blue mb-2">Dr. med. dent. Thomas Worsch</h3>
                  <p className="text-dental-turquoise font-medium mb-3">Zahnarzt und Praxisinhaber, Spezialist für Ästhetische Zahnmedizin & Implantologie</p>
                  <p className="text-dental-gray text-sm lg:text-base mb-4 leading-relaxed">
                    Dr. Worsch ist Ihr erfahrener Ansprechpartner für anspruchsvolle ästhetische Zahnmedizin und komplexe Implantatfälle in Dresden. Mit seiner Expertise und seinem Blick für natürliche Ästhetik gestaltet er Ihr individuelles Traumlächeln.
                  </p>
                  <ul className="text-sm text-dental-gray mb-4 space-y-1">
                    <li>• Master of Science (M.Sc.) Ästhetisch-Rekonstruktive Zahnmedizin</li>
                    <li>• Zertifizierter Experte für Implantologie (DGI) in Dresden</li>
                    <li>• Digitale Smile Design & Veneer-Technologie</li>
                  </ul>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="link" className="p-0 text-dental-turquoise flex items-center">
                        Mehr erfahren <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Dr. med. dent. Thomas Worsch</DialogTitle>
                        <DialogDescription>Zahnarzt und Praxisinhaber</DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <p className="text-dental-gray">
                          Dr. Worsch ist Ihr erfahrener Ansprechpartner für anspruchsvolle ästhetische Zahnmedizin und komplexe Implantatfälle in Dresden. Mit seiner Expertise und seinem Blick für natürliche Ästhetik gestaltet er Ihr individuelles Traumlächeln. Er legt besonderen Wert auf minimalinvasive Techniken und langlebige Ergebnisse, die Funktion und Schönheit perfekt vereinen.
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>

            {/* Dr. Lisa Müller */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300 animate-on-scroll">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 mx-auto md:mx-0">
                  <img 
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"
                    alt="Dr. med. dent. Lisa Müller - Zahnärztin Dresden"
                    className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover border-3 border-gray-200 hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-lg lg:text-xl font-bold text-dental-blue mb-2">Dr. med. dent. Lisa Müller</h3>
                  <p className="text-dental-turquoise font-medium mb-3">Zahnärztin, Fokus auf Unsichtbare Zahnkorrektur & Prophylaxe</p>
                  <p className="text-dental-gray text-sm lg:text-base mb-4 leading-relaxed">
                    Dr. Müller verbindet moderne Prophylaxe-Konzepte mit innovativen Methoden der unsichtbaren Zahnkorrektur (z.B. Aligner-Therapie). Ihr Ziel ist es, Ihnen nicht nur zu gesunden, sondern auch zu perfekt ausgerichteten, strahlenden Zähnen zu verhelfen.
                  </p>
                  <ul className="text-sm text-dental-gray mb-4 space-y-1">
                    <li>• Zertifizierte Anwenderin für Aligner-Systeme (z.B. Invisalign) in Dresden</li>
                    <li>• Moderne Prophylaxe & Professionelle Zahnreinigung</li>
                    <li>• Bleaching-Expertin</li>
                  </ul>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="link" className="p-0 text-dental-turquoise flex items-center">
                        Mehr erfahren <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Dr. med. dent. Lisa Müller</DialogTitle>
                        <DialogDescription>Zahnärztin</DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <p className="text-dental-gray">
                          Dr. Müller verbindet moderne Prophylaxe-Konzepte mit innovativen Methoden der unsichtbaren Zahnkorrektur. Sie berät junge Erwachsene umfassend zu den Möglichkeiten, ihr Lächeln diskret und effektiv zu optimieren.
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>

          {/* Staff Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Petra Schmidt */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300 animate-on-scroll">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3"
                    alt="Petra Schmidt - Zahnmedizinische Fachangestellte Dresden"
                    className="w-20 h-20 rounded-full object-cover border-2 border-gray-200 hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-dental-blue mb-1">Petra Schmidt</h3>
                  <p className="text-dental-turquoise font-medium text-sm mb-2">Zahnmedizinische Fachangestellte & Prophylaxe-Spezialistin</p>
                  <p className="text-dental-gray text-sm mb-3 leading-relaxed">
                    Frau Schmidt ist seit der Praxisgründung dabei und kümmert sich mit viel Herzblut um die Organisation und den reibungslosen Ablauf in der Praxis.
                  </p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="link" className="p-0 text-dental-turquoise flex items-center text-sm">
                        Mehr erfahren <ChevronRight className="ml-1 h-3 w-3" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Petra Schmidt</DialogTitle>
                        <DialogDescription>Zahnmedizinische Fachangestellte & Prophylaxe-Spezialistin</DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <p className="text-dental-gray">
                          Frau Schmidt ist seit der Praxisgründung dabei und kümmert sich mit viel Herzblut um die Organisation und den reibungslosen Ablauf in der Praxis. Als erfahrene ZFA und Prophylaxe-Spezialistin sorgt sie dafür, dass Ihre Zähne strahlend sauber bleiben.
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>

            {/* Maria Berger */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300 animate-on-scroll">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1594824388853-bd7bbc305e74?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3"
                    alt="Maria Berger - Dentalhygienikerin Dresden"
                    className="w-20 h-20 rounded-full object-cover border-2 border-gray-200 hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-dental-blue mb-1">Maria Berger</h3>
                  <p className="text-dental-turquoise font-medium text-sm mb-2">Dentalhygienikerin & Ästhetik-Assistentin</p>
                  <p className="text-dental-gray text-sm mb-3 leading-relaxed">
                    Als spezialisierte Dentalhygienikerin führt Frau Berger professionelle Zahnreinigungen durch und assistiert bei ästhetischen Behandlungen.
                  </p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="link" className="p-0 text-dental-turquoise flex items-center text-sm">
                        Mehr erfahren <ChevronRight className="ml-1 h-3 w-3" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Maria Berger</DialogTitle>
                        <DialogDescription>Dentalhygienikerin & Ästhetik-Assistentin</DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <p className="text-dental-gray">
                          Als spezialisierte Dentalhygienikerin führt Frau Berger professionelle Zahnreinigungen durch und assistiert bei ästhetischen Behandlungen. In unserer Dresdner Praxis ist sie die Expertin für Prophylaxe und unterstützt bei der Umsetzung Ihres perfekten Lächelns.
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMembersGrid;
