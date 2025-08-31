"use client";

import { Box, Typography, Button, Stack } from "@mui/material";
import Image from "next/image";

export const DesktopHero = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        minHeight: "80vh",
        px: 8,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Coluna Esquerda - Texto */}
      <Stack spacing={3} zIndex={2}>
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{ color: "primary.main" }}
        >
          Conectando a saúde pública ao futuro!
        </Typography>

        <Typography variant="h6" sx={{ maxWidth: 500 }}>
          Mais especialistas, menos filas: sua cidade inovando na saúde pública!
        </Typography>

        <Button
          variant="contained"
          color="secondary"
          sx={{ width: "fit-content", borderRadius: 3, px: 4 }}
        >
          Saiba mais!
        </Button>
      </Stack>

      {/* Coluna Direita - Imagens */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* Ícone */}
        <Image
          src="/icone-descomplica.png"
          alt="Ícone Descomplica"
          width={120}
          height={120}
          style={{ position: "absolute", top: 50, left: -50 }}
        />

        {/* Médico */}
        <Image
          src="/medico-01.png"
          alt="Médico com tablet"
          width={400}
          height={400}
        />
      </Box>

      {/* Fundo topo */}
      <Image
        src="/fundo-topo.png"
        alt="Fundo topo"
        fill
        style={{ zIndex: -1, objectFit: "cover" }}
      />
    </Box>
  );
};
