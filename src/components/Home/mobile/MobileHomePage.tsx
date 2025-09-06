"use client";

import { Box, Typography, Button, Stack, Link } from "@mui/material";
import React from "react";
import Image from "next/image";

// ===== Definição do StatBox =====
interface StatBoxProps {
  target: number;
  label: string;
}

const StatBox: React.FC<StatBoxProps> = ({ target, label }) => (
  <Box sx={{ borderBottom: "1px solid rgba(255,255,255,0.7)", py: 2, textAlign: "center" }}>
    <Typography variant="h3" sx={{ fontWeight: "bold", fontStyle: "italic", fontSize: "3rem", color: "#FFFFFF" }}>
      {target}%
    </Typography>
    <Typography variant="body1" sx={{ color: "#FFFFFF" }}>
      {label}
    </Typography>
  </Box>
);

// ===== Steps da seção "Como funciona" =====
const steps = [
  { icon: "/Inicio-da-consulta.png", text: "Início da consulta" },
  { icon: "/Dadospaciente.png", text: "Inserção de dados do paciente" },
  { icon: "/suporte-ia.png", text: "Sugestão de diagnóstico com suporte da I.A." },
  { icon: "/apontamentos.png", text: "Recebimento de apontamentos do especialista" },
  { icon: "/direcionamento.png", text: "Direcionamento do paciente" },
  { icon: "/avaliacao.png", text: "Avaliação da consultoria" },
  { icon: "/dashboard.png", text: "Dashboard para o gestor público" },
];

export const MobileHomePage: React.FC = () => {
  return (
    <Box sx={{ display: { xs: "block", md: "none" }, background: "linear-gradient(180deg, #000C1E 60%)", color: "white" }}>

      {/* HERO SECTION */}
      <Box sx={{ position: "relative", px: 2, pt: 2, pb: 10 }}>
        <Box sx={{ position: "absolute", top: 30, left: 16 }}>
          <Image src="/descomplica-logo.png" alt="Descomplica logo" width={160} height={30} style={{ width: 140, height: "auto" }} />
        </Box>

        <Box sx={{ pt: 12 }}>
          <Typography variant="h1" fontWeight="bold" gutterBottom sx={{ color: "rgba(255,255,255,0.88)", fontStyle: "italic" }}>
            Conectando a saúde<br />pública ao futuro!
          </Typography>

          <Typography variant="body1" gutterBottom sx={{ color: "#FFFFFF" }}>
            Mais especialistas, menos<br />filas:{" "}
            <Box component="span" sx={{ color: "#FFFFFF", fontStyle: "italic", fontWeight: "bold" }}>
              sua cidade inovando na <br /> saúde pública!
            </Box>
          </Typography>

     <Box textAlign="left">

      <Button
  component="a"
  href="https://wa.me/554788992915"
  target="_blank"
  rel="noopener noreferrer"
  variant="contained"
  sx={{
    mt: 3,
    borderRadius: 4,
    backgroundColor: "#04D77B",
    color: "#000C1E",
    fontWeight: "bold",
    fontStyle: "italic",
    textTransform: "none",
    px: 4,
    py: 1.5,
    fontSize: "1rem",
    "&:hover": { backgroundColor: "#03b36a" },
  }}
>
  Saiba mais
</Button>


        </Box>
        </Box>
        

        {/* Imagens Hero */}
        <Box sx={{ mt: -30, position: "relative", zIndex: 1 }}>
          <Image src="/icone-fundo.png" alt="icone fundo" width={300} height={400} style={{ width: "100%", height: "auto" }} />
        </Box>
        <Box sx={{ mt: -40, position: "relative", zIndex: 1 }}>
          <Image src="/medico-01.png" alt="Médico com tablet" width={300} height={400} style={{ width: "100%", height: "auto" }} />
        </Box>
      </Box>

    {/* ABOUT SECTION */}
<Box sx={{ px: 2, pb: 8 }}>
  <Typography
    variant="h5"
    gutterBottom
    sx={{
      color: "rgba(255,255,255,0.88)",
      lineHeight: 1.6, // mais espaçamento entre linhas do título
      mb: 4, // espaço extra após o título
    }}
  >
    Redução de custos e filas com triagens médicas inteligentes e comprovadas.{" "}
    <Box
      component="span"
      sx={{
        color: "rgba(255,255,255,0.88)",
        fontStyle: "italic",
        fontWeight: "bold",
      }}
    >
      A solução que transforma o atendimento público com inteligência artificial.
    </Box>
  </Typography>

  <Typography
    variant="body2"
    gutterBottom
    sx={{
      color: "rgba(255,255,255,0.88)",
      lineHeight: 1.8, // mais respiro no corpo
      mb: 4, // espaço extra entre parágrafos
    }}
  >
    A <b>Descomplica Medicina</b> utiliza inteligência artificial generativa aliada à expertise médica para otimizar o processo de encaminhamento. O resultado?{" "}
    <Box
      component="span"
      sx={{
        color: "rgba(255,255,255,0.88)",
        fontStyle: "italic",
        fontWeight: "bold",
      }}
    >
      Redução de filas, economia de recursos e mais dignidade no atendimento.
    </Box>
  </Typography>

  <Box sx={{ my: 4 }}>
    <Image
      src="/computador-01.png"
      alt="Dashboard IA"
      width={300}
      height={200}
      style={{ width: "100%", height: "auto" }}
    />
  </Box>

  <Typography
    variant="body2"
    sx={{
      color: "#FFFFFF",
      lineHeight: 1.8, // mais espaçamento entre linhas
    }}
  >
    Nossa plataforma oferece um{" "}
    <Box
      component="span"
      sx={{ color: "#FFFFFF", fontStyle: "italic", fontWeight: "bold" }}
    >
      dashboard em tempo real
    </Box>
    , que permite ao gestor visualizar indicadores de desempenho, identificar gargalos e tomar decisões baseadas em dados — tudo com foco na eficiência do sistema e no uso responsável dos recursos públicos.
  </Typography>
</Box>


    {/* COMO FUNCIONA SECTION */}
<Box sx={{ px: 2, py: 2, textAlign: "center" }}>
  <Typography
    variant="h6"
    fontWeight="bold"
    sx={{
      background: "linear-gradient(to right, #4703FB, #57B7EF)",
      borderRadius: "30px",
      px: 9,
      py: 1,
      color: "white",
      display: "inline-block", // mantém largura justa ao texto
      mb: 6,
    }}
  >
    Como funciona?
  </Typography>


        <Box sx={{ px: 1 }}>
          {steps.map((step, index) => (
            <Box key={index} sx={{ display: "flex", alignItems: "center", position: "relative", mb: 6 }}>
              {index !== steps.length - 1 && (
                <Box sx={{ position: "absolute", left: "32px", top: "60px", bottom: "-50px", width: "2px", bgcolor: "#04D77B", opacity: 0.7 }} />
              )}

              <Box sx={{ width: 62, height: 62, borderRadius: "50%", border: "2px solid #04D77B", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, bgcolor: "#000C1E", zIndex: 2, mr: 2 }}>
                <Image src={step.icon} alt={step.text} width={28} height={28} />
              </Box>

              <Typography variant="body1" sx={{ color: "white", flex: 1, pr: 2 }}>
                {step.text}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box textAlign="center">
          <Button href="https://wa.me/554788992915" variant="contained" sx={{ mt: 4, borderRadius: 3, backgroundColor: "#04D77B", color: "#000C1E", fontWeight: "bold", fontStyle: "italic", textTransform: "none" }}>
            Fale conosco
          </Button>
        </Box>
      </Box>


   
     {/* RESULTADOS + IMAGENS */}
<Box sx={{ px: 2, mt: 7 }}> {/* margem superior maior */}
  {/* IMAGEM DOS MÉDICOS */}
  <Box sx={{ textAlign: "center", mb: 10 }}> {/* espaçamento maior */}
    <Image
      src="/medicos-02.png"
      alt="édicos"
      width={1500}
      height={800}
      style={{ width: "100%", height: "auto" }}
    />
  </Box>

  {/* TÍTULO */}
  <Typography
    variant="h5"
    fontWeight="bold"
    sx={{ color: "#FFFFFF", fontStyle: "italic", mb: 10, textAlign: "left" }}
  >
    Resultados que fazem a <br />diferença!
  </Typography>

  {/* ESTATÍSTICAS */}
  <Box
    sx={{
      background: "linear-gradient(to bottom, #227cb0ff, #1fb976ff)",
      borderRadius: 3,
      p: 5,
      maxWidth: 380,
      mx: "auto",
      color: "#FFFFFF",
    }}
  >
    <Stack spacing={2}>
      <StatBox target={40} label="menos encaminhamentos" />
      <StatBox target={95} label="de aprovação entre os médicos" />
      <StatBox target={10} label="de economia no orçamento da saúde" />
      <StatBox target={50} label="menos exames desnecessários" />
    </Stack>
  </Box>

  <Box textAlign="center">
          <Button href="https://wa.me/554788992915" variant="contained" sx={{ mt: 4, borderRadius: 3, backgroundColor: "#04D77B", color: "#000C1E", fontWeight: "bold", fontStyle: "italic", textTransform: "none" }}>
            Entre já em contato
          </Button>
  </Box>
</Box>

      {/* CTA IMAGE */}
<Box sx={{ px: 0, mt: 10, mb: 15 }}>
  <Link
    href="https://wa.me/554788992915"
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: "none" }}
  >
    <Box
      sx={{
        position: "relative",
        bgcolor: "#000C1E",
        px: 0,
        pt: 0,
        pb: 0,
        textAlign: "center",
        cursor: "pointer",
        borderRadius: 1,
        overflow: "hidden", // impede que a imagem ultrapasse as bordas arredondadas
        height: 400, // altura fixa (pode ajustar conforme layout desejado)
      }}
    >
      <Image
        src="/medico-texto.png"
        alt="Médico CTA"
        fill
        style={{ objectFit: "cover" }}
      />

      
    </Box>
  </Link>
</Box>


    {/* FOOTER */}
<Box sx={{ px: { xs: 2, md: 12 }, mt: 6 }}> {/* margem lateral igual ao resto do site */}
  <Box sx={{ bgcolor: "#F5F5F5", color: "#000C1E", borderRadius: "20px 20px 0 0", textAlign: "center", p: 3 }}>
    
    <Box sx={{ mb: 2 }}>
      <Image src="/icone-descomplicafooter.png" alt="Logo Descomplica" width={140} height={30} style={{ width: "140px", height: "auto" }} />
    </Box>

    <Typography variant="h6" fontWeight="bold" sx={{ textAlign: "left", mb: 1 }}>CONTATO</Typography>

    <Stack sx={{ background: "linear-gradient(90deg, #26D0CE, #1A9E84)", borderRadius: 2, p: 2, mb: 3, color: "white" }} spacing={1}>
      <Box display="flex" alignItems="center" gap={1}>
        <Image src="/icone-telefone.png" alt="WhatsApp" width={20} height={20} />
        <Typography variant="body2">descomplicamedicinaagora@gmail.com</Typography>
      </Box>
      <Box display="flex" alignItems="center" gap={1}>
        <Image src="/icone-whats.png" alt="Telefone" width={20} height={20} />
        <Typography variant="body2">(47) 98899-2915</Typography>
      </Box>
    </Stack>

    <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 2 }}>
      <Box sx={{ backgroundColor: "black", borderRadius: "12px", px: 2, py: 2, display: "flex", gap: 3, alignItems: "center" }}>
        <Link href="https://www.instagram.com/your-instagram-handle" target="_blank" rel="noopener">
          <Image src="/icone-instagram.png" alt="Instagram" width={60} height={60} />
        </Link>
        <Link href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener">
          <Image src="/icone-linkedin.png" alt="LinkedIn" width={60} height={60} />
        </Link>
      </Box>
    </Stack>
  </Box>  

  {/* RETÂNGULO AZUL ESCURO COM LOGOS */}
  <Box sx={{ bgcolor: "#ffffffff", py: 4, mt: -3 }}> {/* azul escuro do site */}
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 4, flexWrap: "wrap" }}>
      <Image src="/icone-parana.png" alt="Governo do Paraná" width={160} height={90} />
      <Image src="/icone-inovador.png" alt="Paraná Anjo Inovador" width={120} height={90} />
    </Box>
  </Box>
</Box>
</Box>

  );
};
