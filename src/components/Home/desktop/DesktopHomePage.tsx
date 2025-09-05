"use client";

import { Box, Typography, Button, Stack } from "@mui/material";
import React from "react";
import Image from "next/image";

interface StatBoxProps {
  target: number;
  label: string;
}

const StatBox: React.FC<StatBoxProps> = ({ target, label }) => (
  <Box textAlign="center" p={2}>
    <Typography
      variant="h3"
      fontWeight="bold"
      sx={{ fontStyle: "italic", color: "#04D77B", mb: 1 }}
    >
      {target}%
    </Typography>
    <Typography variant="body1">{label}</Typography>
  </Box>
);

const steps = [
  { label: "Início da consulta", icon: "/logoquatro.png", top: "0%", left: "50%", transform: "translateX(-50%)", textOffset: { top: "-85px", left: "160px" } },
  { label: "Inserção de dados do paciente", icon: "/logocinco.png", top: "30%", left: "88%", transform: "translate(-50%, -30%)", textOffset: { top: "-60px", left: "120px" } },
  { label: "Sugestão de diagnóstico com suporte da I.A.", icon: "/logoseis.png", top: "58%", left: "98%", transform: "translate(-70%, 0%)", textOffset: { top: "-30px", left: "120px" } },
  { label: "Recebimento de apontamentos do especialista", icon: "/logoum.png", top: "88%", left: "70%", transform: "translate(-50%, -20%)", textOffset: { top: "30px", left: "60px" } },
  { label: "Direcionamento do paciente", icon: "/logosete.png", top: "100%", left: "35%", transform: "translate(-80%, -78%)", textOffset: { top: "30px", left: "-60px" } },
  { label: "Avaliação da consultoria", icon: "/logoseis.png", top: "83%", left: "15%", transform: "translate(-70%, -100%)", textOffset: { top: "-50px", left: "-120px" } },
  { label: "Dashboard para o gestor público", icon: "/logotres.png", top: "37%", left: "0%", transform: "translate(-20%, -50%)", textOffset: { top: "-70px", left: "-120px" } },
];

const DesktopHomePage: React.FC = () => {
  return (
    <Box sx={{ display: { xs: "none", md: "block" }, backgroundColor: "#000C1E", color: "white" }}>
      
      {/* HERO SECTION */}
      <Box component="section" sx={{ position: "relative", width: "100%", minHeight: { md: "620px", lg: "720px" }, overflow: "hidden", fontFamily: "Montserrat, sans-serif" }}>
        <Box sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundImage: `url('/foto-fundo.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          "&::after": {
            content: '""',
            position: "absolute",
            inset: 0,
            background: "linear-gradient(90deg, rgba(0,12,30,0.85) 0%, rgba(0,12,30,0.6) 40%, rgba(0,12,30,0.15) 70%)",
          },
        }} />
        <Box sx={{ position: "relative", zIndex: 2, maxWidth: 1280, mx: "auto", px: { md: 8, lg: 12 }, height: "100%", display: "flex", alignItems: "center", gap: 18 }}>
          <Box sx={{ flex: 1, color: "white", pr: { md: 2, lg: 6 } }}>
            <Box sx={{ mb: 3 }}>
              <Image src="/descomplica-logo.png" alt="Descomplica" width={200} height={40} priority />
            </Box>
            <Typography variant="h3" sx={{ color: "rgba(255,255,255,0.88)", fontWeight: 800, fontStyle: "italic", lineHeight: 1.05, fontSize: { md: "36px", lg: "44px" }, mb: 2 }}>
              Conectando a saúde pública ao futuro!
            </Typography>
            <Typography variant="h6" sx={{ color: "rgba(255,255,255,0.88)", mb: 3, fontSize: { md: "16px", lg: "18px" } }}>
              Mais especialistas, menos filas:{" "}
              <Box component="span" sx={{ fontStyle: "italic", fontWeight: 700 }}>
                sua cidade inovando na saúde pública!
              </Box>
            </Typography>
            <Button variant="contained" sx={{ mt: 1, borderRadius: 2, backgroundColor: "#04D77B", color: "#000C1E", fontWeight: "bold", textTransform: "none", px: 4, py: 1.5, fontSize: "1rem", "&:hover": { backgroundColor: "#03b36a" } }}>
              Saiba mais!
            </Button>
          </Box>
          <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end", alignItems: "center", position: "relative" }}>
            <Box sx={{ position: "relative", zIndex: 2, width: { md: 300, lg: 630 } }}>
              <Image src="/medico-01.png" alt="Equipe médica" width={900} height={900} style={{ width: "100%", height: "auto", display: "block" }} priority />
            </Box>
          </Box>
        </Box>
        <Box sx={{ position: "absolute", left: 40, bottom: -20, zIndex: 1, opacity: 0.08, fontWeight: 900, fontSize: { md: 160, lg: 220 }, color: "transparent", WebkitTextStroke: "2px #ffffff", pointerEvents: "none", display: { xs: "none", md: "block" } }}>
          descomplica
        </Box>
      </Box>

      {/* ABOUT SECTION */}
      <Box sx={{ position: "relative", px: { md: 12, lg: 16 }, py: 8, display: "flex", flexDirection: "column", gap: 6, backgroundColor: "#000C1E", overflow: "hidden" }}>
        <Box sx={{ position: "absolute", bottom: "-20%", right: "0%", width: { xs: "120%", md: "30%" }, height: "auto", opacity: 1, zIndex: 0 }}>
          <Image src="/icone-descomplica.png" alt="Ícone Descomplica" width={400} height={400} style={{ width: "100%", height: "auto" }} />
        </Box>
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Box sx={{ maxWidth: 800, mx: "auto", textAlign: "left" }}>
            <Typography variant="h5" sx={{ color: "rgba(255,255,255,0.88)", lineHeight: 1.5, textAlign: "left" }}>
              Redução de custos e filas com triagens médicas inteligentes e comprovadas.{" "}
              <Box component="span" sx={{ fontStyle: "italic", fontWeight: "bold" }}>
                A solução que transforma o atendimento público com inteligência artificial.
              </Box>
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 6, justifyContent: "center", flexWrap: "wrap", mt: 6 }}>
            <Box sx={{ flex: 1, minWidth: 300, textAlign: "center" }}>
              <Image src="/tela.png" alt="Dashboard IA" width={600} height={400} style={{ width: "100%", height: "auto" }} />
            </Box>
            <Box sx={{ flex: 1, minWidth: 300 }}>
              <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.88)" }}>
                A <b>Descomplica Medicina</b> utiliza inteligência artificial
                generativa aliada à expertise médica para otimizar o processo de
                encaminhamento. O resultado?{" "}
                <Box component="span" sx={{ fontStyle: "italic", fontWeight: "bold" }}>
                  Redução de filas, economia de recursos e mais dignidade no
                  atendimento.
                </Box>
              </Typography>
            </Box>
          </Box>
          <Box sx={{ textAlign: "center", maxWidth: 800, mx: "auto", mt: 6 }}>
            <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.88)" }}>
              Nossa plataforma oferece um{" "}
              <Box component="span" sx={{ fontStyle: "italic", fontWeight: "bold" }}>
                dashboard em tempo real
              </Box>
              , que permite ao gestor visualizar indicadores de desempenho, identificar
              gargalos e tomar decisões baseadas em dados — tudo com foco na eficiência
              do sistema e no uso responsável dos recursos públicos.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* COMO FUNCIONA SECTION */}
      <Box sx={{ textAlign: "center", py: 10, position: "relative" }}>
        <Typography variant="h4" fontWeight="bold" mb={14} sx={{ fontStyle: "italic", color: "white" }}>Como funciona?</Typography>
        <Box sx={{ position: "relative", width: 500, height: 500, mx: "auto" }}>
          <Image src="/circulo-fundo.png" alt="Fluxo da consulta" fill style={{ objectFit: "contain" }} />
          {steps.map((step, i) => (
            <Box key={i} sx={{ position: "absolute", top: step.top, left: step.left, transform: step.transform, display: "flex", flexDirection: "column", alignItems: "center", width: 140 }}>
              <Box sx={{ width: 60, height: 60, borderRadius: "50%", background: "white", display: "flex", alignItems: "center", justifyContent: "center", mb: 1, boxShadow: "0 4px 10px rgba(0,0,0,0.2)" }}>
                <Image src={step.icon} alt={step.label} width={40} height={40} />
              </Box>
              <Typography sx={{ background: "#4D0DFF", color: "white", borderRadius: "8px", px: 1.5, py: 0.5, fontSize: "0.8rem", fontWeight: 500, textAlign: "center", position: "relative", top: step.textOffset.top, left: step.textOffset.left }}>
                {step.label}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box textAlign="center" sx={{ mt: 25 }}>
          <Button variant="contained" sx={{ borderRadius: 3, backgroundColor: "#04D77B", color: "#000C1E", fontWeight: "bold", fontStyle: "italic", textTransform: "none", px: 4, py: 1.5, fontSize: "1.1rem", "&:hover": { backgroundColor: "#03c76f" } }}>
            Entre já em contato!
          </Button>
        </Box>
      </Box>

      {/* RESULTADOS + IMAGENS */}
      <Box sx={{ position: "relative", px: { md: 6, lg: 13 }, py: 12, color: "white", backgroundColor: "#000C1E", overflow: "hidden" }}>
        <Box sx={{ position: "absolute", top: "10%", left: { xs: "10%", md: "-20%" }, width: { xs: "120%", md: "70%" }, height: "auto", opacity: 1, zIndex: 0 }}>
          <Image src="/icone-descomplicadois.png" alt="Ícone Descomplica dois" width={600} height={600} style={{ width: "100%", height: "auto" }} />
        </Box>
        <Box
  sx={{
    position: "relative",
    width: "100%",
    height: { md: "300px", lg: "550px" },
    mb: 14,
  }}
>
  <Box
    sx={{
      position: "absolute",
      right: 0, // cola na borda direita
      bottom: 0, // alinha base da imagem ao container
      height: "100%",
    }}
  >
    <Image
      src="/medicos-02.png"
      alt="Equipe médica adicional"
      width={800}
      height={1000}
      style={{
        width: "auto",
        height: "100%",
        objectFit: "contain",
        display: "block",
      }}
    />
  </Box>
</Box>

       <Typography
  variant="h5"
  fontWeight="bold"
  sx={{ color: "#FFFFFF", fontStyle: "italic", mb: 10, textAlign: "left" }}
>
  Resultados que fazem a <br />diferença!
</Typography>

<Box
  sx={{
    background: "linear-gradient(to bottom, #1f6d9bff, #189760ff)",
    borderRadius: 3,
    p: 4,
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 1fr",
    position: "relative",
    textAlign: "center",
    maxWidth: 600,
    mx: "auto",
    gap: 4,
  }}
>
  {/* Cruz branca central */}
  <Box
    sx={{
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "1px",
      height: "90%",
      bgcolor: "white",
      transform: "translate(-50%, -50%)",
      zIndex: 1,
    }}
  />
  <Box
    sx={{
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "90%",
      height: "1px",
      bgcolor: "white",
      transform: "translate(-50%, -50%)",
      zIndex: 1,
    }}
  />

  {/* Quadrantes */}
  {[
    { value: "40%", text: "menos encaminhamentos" },
    { value: "95%", text: "de aprovação entre os médicos" },
    { value: "10%", text: "de economia no orçamento da saúde" },
    { value: "50%", text: "menos exames desnecessários" },
  ].map((item, i) => (
    <Box key={i} textAlign="center" p={2} sx={{ zIndex: 2 }}>
      <Typography
        variant="h2"
        fontWeight="bold"
        sx={{ fontStyle: "italic", color: "white", mb: 1, fontSize: "2rem" }}
      >
        {item.value}
      </Typography>
      <Typography variant="body1" sx={{ color: "white" }}>
        {item.text}
      </Typography>
    </Box>
  ))}
</Box>

<Box textAlign="center" sx={{ mt: 8 }}>
  <Button
    component="a"
    href="https://wa.me/554788992915"
    target="_blank"
    rel="noopener noreferrer"
    variant="contained"
    sx={{
      borderRadius: 3,
      backgroundColor: "#04D77B",
      color: "#000C1E",
      fontWeight: "bold",
      fontStyle: "italic",
      textTransform: "none",
      px: 4,
      py: 1.5,
      fontSize: "1.1rem",
      "&:hover": { backgroundColor: "#03c76f" },
    }}
  >
    Entre já em contato!
  </Button>
</Box>
</Box>


      {/* CTA IMAGE */}
<Box sx={{ position: "relative", py: 12, bgcolor: "#000C1E" }}>
  {/* Fundo gradiente */}
  <Box sx={{ position: "absolute", inset: 0, zIndex: 1 }}>
    <Image src="/gradiente-medico.png" alt="Gradiente fundo" fill style={{ objectFit: "cover" }} />
  </Box>

  {/* Link para WhatsApp */}
  <a href="https://wa.me/554788992915" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: 500, // 50% da largura original
        mx: "auto",
        borderRadius: "20px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        zIndex: 2,
      }}
    >
      {/* Imagem do médico reduzida */}
      <Image
        src="/medico-texto.png"
        alt="Médico CTA"
        width={450} // metade da largura original
        height={225} // metade da altura original
        style={{ width: "100%", height: "auto", position: "relative", zIndex: 2 }}
      />

      {/* Texto superior */}
      <Box
        sx={{
          position: "absolute",
          top: "5%",
          left: "6%",
          width: "50%",
          color: "#000C1E",
          textAlign: "left",
          zIndex: 3,
        }}
      >
        <Typography variant="h4" sx={{ fontStyle: "italic", lineHeight: 1.3, pb: 2 }}>
          <b>Pronto</b> para transformar o atendimento público de saúde?
        </Typography>
      </Box>

      {/* Texto inferior */}
      <Box
        sx={{
          position: "absolute",
          bottom: "15%",
          left: "5%",
          width: "45%",
          color: "#000C1E",
          textAlign: "left",
          zIndex: 3,
        }}
      >
        <Typography variant="h4" sx={{ lineHeight: 1.4 }}>
          <b>Clique</b> aqui e agende já uma reunião com nosso time!
        </Typography>
      </Box>
    </Box>
  </a>
</Box>



      {/* FOOTER */}
      <Box sx={{ bgcolor: "#F5F5F5", color: "#000C1E", borderRadius: "20px 20px 0 0", textAlign: "center", px: { md: 8, lg: 12 }, py: 6, display: "flex", flexDirection: "column", gap: 4 }}>
        <Box>
          <Image src="/icone-descomplicafooter.png" alt="Logo Descomplica" width={200} height={50} style={{ width: "200px", height: "auto", margin: "0 auto" }} />
        </Box>
        <Box sx={{ background: "linear-gradient(90deg, #2AD68D 0%, #17B978 100%)", borderRadius: 2, display: "flex", alignItems: "center", justifyContent: "space-between", px: 3, py: 2, flexWrap: "wrap", gap: 2 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1, textAlign: "left" }}>
            <Typography variant="subtitle2" fontWeight="bold">CONTATO</Typography>
            <Box display="flex" alignItems="center" gap={1}><Image src="/icone-whats.png" alt="WhatsApp" width={20} height={20} /><Typography variant="body2">descomplicamedicinaagora@gmail.com</Typography></Box>
            <Box display="flex" alignItems="center" gap={1}><Image src="/icone-telefone.png" alt="Telefone" width={20} height={20} /><Typography variant="body2">(47) 98899-2915</Typography></Box>
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Box sx={{ bgcolor: "#000C1E", borderRadius: 2, width: 50, height: 50, display: "flex", alignItems: "center", justifyContent: "center" }}><Image src="/icone-instagram.png" alt="Instagram" width={24} height={24} /></Box>
            <Box sx={{ bgcolor: "#000C1E", borderRadius: 2, width: 50, height: 50, display: "flex", alignItems: "center", justifyContent: "center" }}><Image src="/icone-linkedin.png" alt="LinkedIn" width={24} height={24} /></Box>
          </Box>
        </Box>
        <Box sx={{ bgcolor: "white", borderRadius: 2, p: 2, display: "flex", justifyContent: "center", alignItems: "center", gap: 4, flexWrap: "wrap" }}>
          <Image src="/icone-parana.png" alt="Governo do Paraná" width={130} height={90} />
          <Image src="/icone-inovador.png" alt="Paraná Anjo Inovador" width={130} height={90} />
        </Box>
      </Box>
    </Box>
  );
};

export default DesktopHomePage;
