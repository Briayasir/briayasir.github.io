"use client";



import { motion } from "framer-motion";

import { Download, ExternalLink, Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";

import { gmailComposeUrl, personalInfo } from "@/data/portfolio";

import { SectionHeading } from "@/components/ui/SectionHeading";

import { MagneticButton } from "@/components/ui/MagneticButton";

import { SectionWrapper } from "@/components/ui/SectionWrapper";



const contactItems = [

  { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },

  { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/[^\d+]/g, "")}` },

  { icon: MapPin, label: "Location", value: personalInfo.location },

  { icon: Linkedin, label: "LinkedIn", value: "bria-bushra-yasir", href: personalInfo.linkedin, external: true },

  { icon: Github, label: "GitHub", value: "Briayasir", href: personalInfo.github, external: true },

];



export function Contact() {

  return (

    <SectionWrapper id="contact">

      <SectionHeading

        index="07"

        title="Contact"

        titleClassName="text-slate-900 dark:text-white"

        subtitle="Frictionless access for strategic advisory, architecture reviews, and enterprise engagements."

      />



      <motion.div

        initial={{ opacity: 0, y: 30 }}

        whileInView={{ opacity: 1, y: 0 }}

        viewport={{ once: true }}

        className="mx-auto max-w-4xl"

      >

        <div className="enterprise-card glow-border p-6 md:p-10">

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {contactItems.map((item, i) => (

              <motion.div

                key={item.label}

                initial={{ opacity: 0, y: 16 }}

                whileInView={{ opacity: 1, y: 0 }}

                viewport={{ once: true }}

                transition={{ delay: i * 0.06 }}

                className="rounded-xl border border-slate-800 bg-background/40 p-5 transition-all hover:border-cyan-500/30"

              >

                <item.icon className="mb-3 h-5 w-5 text-accent" />

                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">

                  {item.label}

                </p>

                {item.href ? (

                  <a

                    href={item.href}

                    target={item.external ? "_blank" : undefined}

                    rel={item.external ? "noopener noreferrer" : undefined}

                    className="mt-1 block text-sm font-medium transition-colors hover:text-accent"

                  >

                    {item.value}

                  </a>

                ) : (

                  <p className="mt-1 text-sm font-medium">{item.value}</p>

                )}

              </motion.div>

            ))}

          </div>



          <div className="mt-10 flex flex-wrap justify-center gap-3 border-t border-slate-200 pt-10 dark:border-slate-800">

            <MagneticButton

              variant="primary"

              strength={0}

              href={gmailComposeUrl}

              target="_blank"

              rel="noopener noreferrer"

              className="shadow-[0_4px_16px_rgba(15,23,42,0.15)] transition-colors duration-300 hover:shadow-[0_8px_24px_rgba(17,86,127,0.25)]"

            >

              <Send className="h-4 w-4" />

              Send Email

            </MagneticButton>

            <MagneticButton

              variant="secondary"

              strength={0}

              href={personalInfo.resumePath}

              download={personalInfo.resumeDownloadName}

              target="_blank"

              rel="noopener noreferrer"

              className="border-slate-300 bg-white text-slate-700 transition-colors duration-300 hover:border-[#11567f] hover:bg-[#11567f]/5 hover:text-[#11567f] hover:shadow-md dark:border-slate-600 dark:bg-slate-900/50 dark:text-slate-200 dark:hover:border-[#29b5e8] dark:hover:bg-[#29b5e8]/10 dark:hover:text-[#29b5e8]"

            >

              <Download className="h-4 w-4" />

              Download Dossier (PDF)

            </MagneticButton>

            <MagneticButton

              variant="ghost"

              strength={0}

              href={personalInfo.linkedin}

              target="_blank"

              rel="noopener noreferrer"

              className="border-slate-300 bg-white/90 text-slate-700 transition-colors duration-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white hover:shadow-md dark:border-slate-600 dark:bg-transparent dark:text-slate-300 dark:hover:border-slate-100 dark:hover:bg-slate-100 dark:hover:text-slate-900"

            >

              <Linkedin className="h-4 w-4" />

              LinkedIn

            </MagneticButton>

            <MagneticButton

              variant="ghost"

              strength={0}

              href={personalInfo.githubRepo}

              target="_blank"

              rel="noopener noreferrer"

              className="border-slate-300 bg-white/90 text-slate-700 transition-colors duration-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white hover:shadow-md dark:border-slate-600 dark:bg-transparent dark:text-slate-300 dark:hover:border-slate-100 dark:hover:bg-slate-100 dark:hover:text-slate-900"

            >

              <ExternalLink className="h-4 w-4" />

              Portfolio Repo

            </MagneticButton>

            <MagneticButton

              variant="ghost"

              strength={0}

              href={personalInfo.github}

              target="_blank"

              rel="noopener noreferrer"

              className="border-slate-300 bg-white/90 text-slate-700 transition-colors duration-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white hover:shadow-md dark:border-slate-600 dark:bg-transparent dark:text-slate-300 dark:hover:border-slate-100 dark:hover:bg-slate-100 dark:hover:text-slate-900"

            >

              <Github className="h-4 w-4" />

              GitHub

            </MagneticButton>

          </div>

        </div>

      </motion.div>

    </SectionWrapper>

  );

}


