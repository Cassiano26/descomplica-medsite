"use client";

import { Box, Container, Stack, Typography, Button } from "@mui/material";


export const AboutSection = () => {
  return (
    <Container sx={{ py: 6 }}>
      <Stack spacing={2}>
        <Typography variant="h5" fontWeight="bold">
          Conectando a saúde pública ao futuro!
        </Typography>
        <Typography variant="body1">
          A Descomplica Medicina utiliza inteligência artificial generativa
          aliada à expertise médica para otimizar o processo de encaminhamento.
        </Typography>
        <Typography variant="body1">
          Resultado? Redução de filas, economia de recursos e mais dignidade
          no atendimento.
        </Typography>
      </Stack>
    </Container>
  );
};
