"use client";

import { Box, Typography, Button, Stack } from "@mui/material";
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
          zIndex: -1,
          width: "100%",
          height: "auto",
        }}
      />

      <Stack spacing={2} alignItems="center">
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

        <Button
          variant="contained"
          color="secondary"
          sx={{ borderRadius: 4, px: 3 }}
        >
          Saiba mais!
        </Button>

        {/* Ícone e Médico */}
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
