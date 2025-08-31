"use client";

import { Box, Container, Stack, Typography, Button } from "@mui/material";


export const StepperSection = () => {
  const steps = [
    "Início da consulta",
    "Inserção de dados do paciente",
    "Sugestão de diagnóstico com suporte da I.A.",
    "Recebimento de apontamentos do especialista",
    "Direcionamento do paciente",
    "Avaliação da consultoria",
    "Dashboard para o gestor público",
  ];

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Como funciona?
      </Typography>
      <Stack spacing={2}>
        {steps.map((step, index) => (
          <Box key={index} sx={{ p: 2, border: "1px solid #ddd", borderRadius: 2 }}>
            <Typography variant="body1">{step}</Typography>
          </Box>
        ))}
      </Stack>
    </Container>
  );
};