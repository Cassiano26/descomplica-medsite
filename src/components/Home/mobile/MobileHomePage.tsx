"use client";

import { Box, Typography, Button, Stack } from "@mui/material";
import React from "react";

// Tipagem do StatBox
interface StatBoxProps {
  target: number;
  label: string;
}

const StatBox: React.FC<StatBoxProps> = ({ target, label }) => {
  return (
    <Box textAlign="center" mb={3}>
      <Typography variant="h4" fontWeight="bold" color="#04D77B">
        {target}%
      </Typography>
      <Typography variant="body2">{label}</Typography>
    </Box>
  );
};

export const MobileHomePage: React.FC = () => {
  return (
    <Box sx={{ display: { xs: "block", md: "none" }, px: 2, pb: 6 }}>
      {/* Fundo e logo */}
      <Box sx={{ position: "relative", mb: 4 }}>
        <img src="/fundo-topo.png" alt="Fundo topo" style={{ width: "100%" }} />
        <img
          src="/descomplica-logo.png"
          alt="Descomplica logo"
          style={{ position: "absolute", top: 16, left: 16, width: 200 }}
        />
      </Box>

      {/* Hero */}
      <Box textAlign="left" mb={6}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Conectando a saúde pública ao futuro!
        </Typography>
        <Typography variant="body1" gutterBottom>
          Mais especialistas, menos filas: sua cidade inovando na saúde pública!
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 2,
            borderRadius: 3,
            backgroundColor: "#04D77B",
            color: "#000C1E",
            fontWeight: "bold",
            "&:hover": { backgroundColor: "#03b36a" },
          }}
        >
          Saiba mais!
        </Button>
        <img
          src="/medico-01.png"
          alt="Médico com tablet"
          style={{ width: "100%", marginTop: -40 }}
        />
      </Box>

      {/* Sobre */}
      <Box mb={6}>
        <Typography variant="body1" gutterBottom>
          Redução de custos e filas com triagens médicas inteligentes e comprovadas.{" "}
          <b>A solução que transforma o atendimento público com inteligência artificial.</b>
        </Typography>
        <Typography variant="body2" gutterBottom>
          A <b>Descomplica Medicina</b> utiliza inteligência artificial generativa aliada à expertise médica
          para otimizar o processo de encaminhamento. O resultado? Redução de filas,
          economia de recursos e mais dignidade no atendimento.
        </Typography>
        <img src="/computador-01.png" alt="Dashboard IA" style={{ width: "100%", margin: "20px 0" }} />
        <Typography variant="body2">
          Nossa plataforma oferece um <b>dashboard em tempo real</b>, que permite ao gestor visualizar
          indicadores de desempenho, identificar gargalos e tomar decisões baseadas em dados —
          tudo com foco na eficiência do sistema e no uso responsável dos recursos públicos.
        </Typography>
      </Box>

      {/* Como funciona */}
      <Box textAlign="center" mb={6}>
        <Typography
          variant="h6"
          sx={{
            backgroundImage: "linear-gradient(to right, #4703FB, #57B7EF)",
            borderRadius: "50px",
            px: 10,
            py: 1,
            color: "white",
            display: "inline-block",
            mb: 10,
          }}
        >
          Como funciona?
        </Typography>
        <img
          src="/como-funciona.png"
          alt="Como funciona"
          style={{ width: "100%", maxWidth: 220 }}
        />
        <Button
          variant="contained"
          sx={{
            mt: 2,
            borderRadius: 3,
            backgroundColor: "#04D77B",
            color: "#000C1E",
            fontWeight: "bold",
          }}
        >
          Fale conosco
        </Button>
      </Box>

      {/* Resultados */}
      <Box mb={6} textAlign="center">
        <img src="/medicos-02.png" alt="Médicos" style={{ width: "100%", marginBottom: 16 }} />
        <Typography variant="h6" gutterBottom>
          <b>Resultados</b> que fazem a diferença!
        </Typography>
        <Box
          sx={{
            backgroundImage: "linear-gradient(to bottom, #004060, #04D77B)",
            borderRadius: 3,
            p: 3,
            color: "white",
            mt: 10,
          }}
        >
          <StatBox target={40} label="menos encaminhamentos" />
          <StatBox target={95} label="de aprovação entre os médicos" />
          <StatBox target={10} label="de economia no orçamento da saúde" />
          <StatBox target={50} label="menos exames desnecessários" />
        </Box>
        <Button
          variant="contained"
          sx={{
            mt: 3,
            borderRadius: 3,
            backgroundColor: "#04D77B",
            color: "#ffffffff",
            fontWeight: "bold",
          }}
        >
          Entre já em contato!
        </Button>
      </Box>

      {/* CTA com imagem do médico */}
      <Box sx={{ position: "relative", mb: 6 }}>
        <img src="/medico-texto.png" alt="Medico Texto" style={{ width: "100%" }} />
        <Box
          sx={{
            position: "absolute",
            top: 16,
            left: 16,
            backgroundColor: "white",
            borderRadius: "20px",
            px: 2,
            py: 1,
            fontStyle: "italic",
            fontWeight: "600",
          }}
        >
          Pronto para transformar o atendimento público de saúde?
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: 140,
            left: 16,
            backgroundColor: "#04D77B",
            borderRadius: "12px",
            px: 2,
            py: 1,
            fontWeight: "bold",
            color: "#ffffffff",
          }}
        >
          Clique aqui e agende já uma reunião!
        </Box>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          bgcolor: "white",
          color: "#000C1E",
          borderRadius: "20px 20px 0 0",
          textAlign: "center",
          p: 3,
        }}
      >
        <img src="/icone-descomplicafooter.png" alt="Logo Descomplica" style={{ width: 140, marginBottom: 20 }} />
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          CONTATO
        </Typography>
        <Stack
          sx={{
            backgroundImage: "linear-gradient(90deg, #26D0CE, #1A9E84)",
            borderRadius: 2,
            p: 2,
            mb: 3,
            color: "white",
          }}
          spacing={1}
        >
          <Box display="flex" alignItems="center" gap={1}>
            <img src="/icone-whats.png" alt="WhatsApp" style={{ width: 20, height: 20 }} />
            <Typography variant="body2">descomplicamedicinaagora@gmail.com</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={1}>
            <img src="/icone-telefone.png" alt="Telefone" style={{ width: 20, height: 20 }} />
            <Typography variant="body2">(47) 98899-2915</Typography>
          </Box>
        </Stack>

        <Stack direction="row" spacing={2} justifyContent="center" mb={3}>
          <img src="/icone-instagram.png" alt="Instagram" style={{ width: 40, height: 40 }} />
          <img src="/icone-linkedin.png" alt="LinkedIn" style={{ width: 40, height: 40 }} />
        </Stack>

        <Stack direction="row" spacing={2} justifyContent="center">
          <img src="/icone-parana.png" alt="Governo do Paraná" style={{ height: 60 }} />
          <img src="/icone-inovador.png" alt="Paraná Anjo Inovador" style={{ height: 60 }} />
        </Stack>
      </Box>
    </Box>
  );
};
