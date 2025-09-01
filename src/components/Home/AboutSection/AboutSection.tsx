"use client";

import Grid from "@mui/material/Grid";
import { Typography, Box } from "@mui/material";
import React from "react";

const AboutSectionDesktop: React.FC = () => {
  return (
    <Box sx={{ px: 12, py: 10 }}>
      <Grid container spacing={8} alignItems="center">
        {/* Imagem */}
        <Grid item xs={12} md={6}>
          <img
            src="/computador-01.png"
            alt="Dashboard IA"
            style={{ maxWidth: 500, width: "100%" }}
          />
        </Grid>

        {/* Texto */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Redução de custos e filas com triagens médicas inteligentes e comprovadas.
          </Typography>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            A solução que transforma o atendimento público com inteligência artificial.
          </Typography>
          <Typography variant="body1" gutterBottom>
            A <b>Descomplica Medicina</b> utiliza inteligência artificial generativa aliada à
            expertise médica para otimizar o processo de encaminhamento. O resultado?
            Redução de filas, economia de recursos e mais dignidade no atendimento.
          </Typography>
          <Typography variant="body1" mt={2}>
            Nossa plataforma oferece um <b>dashboard em tempo real</b>, que permite ao gestor
            visualizar indicadores de desempenho, identificar gargalos e tomar decisões
            baseadas em dados — tudo com foco na eficiência do sistema e no uso responsável
            dos recursos públicos.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutSectionDesktop;
