"use client";

import { Box, Typography, Button, Stack, Card, CardContent } from "@mui/material";
import React from "react";
import Image from "next/image";

// Componente para exibir as estatísticas
interface StatBoxProps {
  target: number;
  label: string;
}

const StatBox: React.FC<StatBoxProps> = ({ target, label }) => (
  <Box textAlign="center" p={2}>
    <Typography variant="h3" fontWeight="bold" sx={{ fontStyle: "italic", color: "#04D77B", mb: 1 }}>
      {target}%
    </Typography>
    <Typography variant="body1">{label}</Typography>
  </Box>
);

// Dados dos depoimentos
const testimonials = [
  { text: "Simplesmente incrivel!! Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", rating: 5 },
  { text: "Simplesmente incrivel!! Lorem ipsum dolor sit amet. consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", rating: 5 },
  { text: "Simplesmente incrivel!! Lorem ipsum dolor sit amet. consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", rating: 5 },
  { text: "Simplesmente incrivel!! Lorem ipsum dolor sit amet. consectetur adipiscing elit. sed do eiusmod tempor Incididunt ut labore et dolore magna aliqua", rating: 5 },
  { text: "Simplesmente incrivel!! Lorem ipsum dolor sit amet. consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", rating: 5 },
  { text: "Simplesmente incrivel!! Lorem ipsum dolor sit amet. consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", rating: 5 },
];

export const DesktopHomePage: React.FC = () => {
  return (
    <Box
      sx={{
        display: { xs: "none", md: "block" }, // Visível apenas em desktop
        background: "linear-gradient(180deg, #000C1E 100%, #000C1E 100%)",
        color: "white",
      }}
    >
     
     {/* HERO SECTION — substituir o bloco antigo */}
<Box
  component="section"
  sx={{
    position: "relative",
    width: "100%",
    minHeight: { md: "620px", lg: "720px" },
    overflow: "hidden",
    fontFamily: "Montserrat, sans-serif",
  }}
>
  {/* Fundo full-width (foto-fundo.png) + overlay escuro */}
  <Box
    sx={{
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
        background:
          "linear-gradient(90deg, rgba(0,12,30,0.85) 0%, rgba(0,12,30,0.6) 40%, rgba(0,12,30,0.15) 70%)",
      },
    }}
  />

  {/* Container do conteúdo */}
  <Box
    sx={{
      position: "relative",
      zIndex: 2,
      maxWidth: 1280,
      mx: "auto",
      px: { md: 8, lg: 12 },
      height: "100%",
      display: "flex",
      alignItems: "center",
      gap: 6,
    }}
  >
    {/* Coluna esquerda — logo + texto + botão */}
    <Box sx={{ flex: 1, color: "white", pr: { md: 2, lg: 6 } }}>
      {/* logo cabeçalho: DESCOMPICA-HEADER.png */}
      <Box sx={{ mb: 3 }}>
        <Image src="/descomplica-logo.png" alt="Descomplica" width={200} height={40} priority />
      </Box>

      <Typography
        variant="h3"
        sx={{
          color: "rgba(255,255,255,0.88)",
          fontWeight: 800,
          fontStyle: "italic",
          lineHeight: 1.05,
          fontSize: { md: "36px", lg: "44px" },
          mb: 2,
        }}
      >
        Conectando a saúde pública ao futuro!
      </Typography>

      <Typography
        variant="h6"
        sx={{
          color: "rgba(255,255,255,0.88)",
          mb: 3,
          fontSize: { md: "16px", lg: "18px" },
        }}
      >
        Mais especialistas, menos filas:{" "}
        <Box component="span" sx={{ fontStyle: "italic", fontWeight: 700 }}>
          sua cidade inovando na saúde pública!
        </Box>
      </Typography>

      <Button
        variant="contained"
        sx={{
          mt: 1,
          borderRadius: 2,
          backgroundColor: "#04D77B",
          color: "#000C1E",
          fontWeight: "bold",
          textTransform: "none",
          px: 4,
          py: 1.5,
          fontSize: "1rem",
          "&:hover": { backgroundColor: "#03b36a" },
        }}
      >
        Saiba mais!
      </Button>
    </Box>

    {/* Coluna direita — apenas a imagem medicos-02.png (sem forma verde extra) */}
    <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end", alignItems: "center", position: "relative" }}>
      <Box sx={{ position: "relative", zIndex: 2, width: { md: 300, lg: 630 } }}>
        <Image
          src="/medico-01.png"
          alt="Equipe médica"
          width={900}
          height={900}
          style={{ width: "100%", height: "auto", display: "block" }}
          priority
        />
      </Box>
    </Box>
  </Box>

  {/* marca d'água sutil (opcional) */}
  <Box
    sx={{
      position: "absolute",
      left: 40,
      bottom: -20,
      zIndex: 1,
      opacity: 0.06,
      fontWeight: 900,
      fontSize: { md: 160, lg: 220 },
      color: "#ffffff",
      pointerEvents: "none",
      display: { xs: "none", md: "block" },
    }}
  >
    descomplica
  </Box>
</Box>


      {/* ABOUT SECTION */}
      <Box sx={{ px: { md: 12, lg: 16 }, py: 8 }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 4 }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" gutterBottom sx={{ lineHeight: 1.5 }}>
              Redução de custos e filas com triagens médicas inteligentes e comprovadas.{" "}
              <Box component="span" sx={{ fontStyle: "italic", fontWeight: "bold" }}>
                A solução que transforma o atendimento público com inteligência artificial.
              </Box>
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ mt: 2 }}>
              A <b>Descomplica Medicina</b> utiliza inteligência artificial generativa aliada à expertise médica para otimizar o processo de encaminhamento. O resultado?{" "}
              <Box component="span" sx={{ fontStyle: "italic", fontWeight: "bold" }}>
                Redução de filas, economia de recursos e mais dignidade no atendimento.
              </Box>
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Nossa plataforma oferece um{" "}
              <Box component="span" sx={{ fontStyle: "italic", fontWeight: "bold" }}>
                dashboard em tempo real
              </Box>
              , que permite ao gestor visualizar indicadores de desempenho, identificar gargalos e tomar decisões baseadas em dados — tudo com foco na eficiência do sistema e no uso responsável dos recursos públicos.
            </Typography>
          </Box>
          <Box sx={{ flex: 1, textAlign: 'center' }}>
            <Image
              src="/computador-01.png"
              alt="Dashboard IA"
              width={600}
              height={400}
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        </Box>
      </Box>

      {/* RESULTADOS SECTION */}
      <Box sx={{ px: { md: 12, lg: 16 }, py: 8 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="left"
          sx={{ mb: 6 }}
        >
          Resultados que fazem a diferença!
        </Typography>
        <Box sx={{ background: "linear-gradient(to bottom, #57B7EF, #06D87D)", borderRadius: 3, p: 4, display: 'flex', flexWrap: 'wrap' }}>
          <Box sx={{ flexBasis: '50%' }}><StatBox target={40} label="menos encaminhamentos" /></Box>
          <Box sx={{ flexBasis: '50%' }}><StatBox target={95} label="de aprovação entre os médicos" /></Box>
          <Box sx={{ flexBasis: '50%' }}><StatBox target={10} label="de economia no orçamento da saúde" /></Box>
          <Box sx={{ flexBasis: '50%' }}><StatBox target={50} label="menos exames desnecessários" /></Box>
        </Box>
        <Box textAlign="center" sx={{ mt: 6 }}>
          <Button
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
            }}
          >
           Entre já em contato!
          </Button>
        </Box>
      </Box>

        
    
  
      {/* CTA IMAGE */}
      <Box sx={{
        position: "relative",
        px: { md: 12, lg: 16 },
        py: 8,
        bgcolor: "#000C1E",
      }}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: 1000,
            mx: "auto",
            borderRadius: "20px",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src="/medico-texto.png"
            alt="Médico CTA"
            width={800}
            height={400}
            style={{ width: "100%", height: "auto" }}
          />

          {/* Texto na parte branca */}
          <Box
            sx={{
              position: "absolute",
              top: "10%",
              left: "5%",
              width: "40%",
              color: "#000C1E",
              textAlign: "left",
            }}
          >
            <Typography variant="h4" sx={{ fontStyle: "italic", fontWeight: 600, lineHeight: 1.3, pb: 1 }}>
              Pronto para transformar o
              atendimento público
              de saúde?
            </Typography>
          </Box>

          {/* Texto na parte verde */}
          <Box
            sx={{
              position: "absolute",
              bottom: "10%",
              left: "5%",
              width: "40%",
              color: "#000C1E",
              textAlign: "left",
            }}
          >
            <Typography variant="h4" fontWeight="bold" sx={{ lineHeight: 1.3 }}>
              Clique aqui e
              agende já uma
              reunião com
              nosso time!
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* FOOTER */}
      <Box sx={{ bgcolor: "#F5F5F5", color: "#000C1E", borderRadius: "20px 20px 0 0", textAlign: "center", px: { md: 12, lg: 16 }, py: 6 }}>
        <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Image src="/icone-descomplicafooter.png" alt="Logo Descomplica" width={180} height={40} style={{ width: "180px", height: "auto" }} />
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, textAlign: "left" }}>
            <Typography variant="h6" fontWeight="bold">
              CONTATO
            </Typography>
            <Box display="flex" alignItems="center" gap={1}>
              <Image src="/icone-whats.png" alt="WhatsApp" width={20} height={20} />
              <Typography variant="body2">descomplicamedicinaagora@gmail.com</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <Image src="/icone-telefone.png" alt="Telefone" width={20} height={20} />
              <Typography variant="body2">(47) 98899-2915</Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', gap: 2 }}>
            <Image src="/icone-instagram.png" alt="Instagram" width={40} height={40} />
            <Image src="/icone-linkedin.png" alt="LinkedIn" width={40} height={40} />
          </Box>
        </Box>

        <Box sx={{ bgcolor: "white", borderRadius: 2, p: 2, display: "flex", justifyContent: "space-around", alignItems: "center", gap: 2, flexWrap: "wrap" }}>
          <Image src="/icone-parana.png" alt="Governo do Paraná" width={130} height={90} />
          <Image src="/icone-inovador.png" alt="Paraná Anjo Inovador" width={120} height={90} />
        </Box>
      </Box>
    </Box>
  );
};

export default DesktopHomePage;