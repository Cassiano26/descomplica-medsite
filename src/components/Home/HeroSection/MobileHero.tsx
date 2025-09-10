"use client";

import { Box, Typography, Stack } from "@mui/material";
import Image from "next/image";

export const MobileHero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        textAlign: "center",
        p: 2,
        overflow: "hidden",
      }}
    >
      {/* Fundo topo */}
      <Image
        src="/fundo-topo.png"
        alt="Fundo topo"
        width={400}
        height={200}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1, // fica atrás de tudo
          width: "100%",
          height: "auto",
        }}
      />

      <Stack spacing={2} alignItems="center">
        {/* Título */}
        <Typography
          variant="h1"
          fontWeight="bold"
          sx={{ color: "primary.main" }}
        >
          Conectando a saúde pública ao futuro!
        </Typography>

        <Typography variant="body1">
          Mais especialistas, menos filas: sua cidade inovando na saúde pública!
        </Typography>

        {/* Botão WhatsApp funcional */}
        <a
          href="https://wa.me/554788992915"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            marginTop: "1rem",
            padding: "12px 32px",
            borderRadius: "12px",
            backgroundColor: "#04D77B",
            color: "#000C1E",
            fontWeight: "bold",
            fontStyle: "italic",
            textDecoration: "none",
            textAlign: "center",
            fontSize: "1rem",
            position: "relative", // garante que fica acima do fundo
            zIndex: 2,            // garante clique
          }}
        >
          Saiba mais
        </a>

        {/* Ícones e imagens */}
        <Image
          src="/icone-descomplica.png"
          alt="Ícone Descomplica"
          width={100}
          height={100}
        />
        <Image
          src="/medico-01.png"
          alt="Médico com tablet"
          width={250}
          height={250}
        />
      </Stack>
    </Box>
  );
};
