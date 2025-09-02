"use client";

import { Typography, Box, Button } from "@mui/material";

const HeroSectionDesktop: React.FC = () => {
  return (
    <Box sx={{ px: { xs: 4, sm: 8, md: 12 }, py: 10 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: { xs: 4, md: 6 },
        }}
      >
        {/* Texto */}
        <Box
          sx={{
            flex: 1,
            textAlign: { xs: "center", md: "left" },
            mb: { xs: 4, md: 0 },
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            fontWeight="bold"
            gutterBottom
          >
            Conectando a saúde pública ao futuro!
          </Typography>
          <Typography variant="h6" component="p" gutterBottom>
            Mais especialistas, menos filas: sua cidade inovando na saúde
            pública!
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: 3,
              borderRadius: 3,
              backgroundColor: "#04D77B",
              color: "#000C1E",
              fontWeight: "bold",
              px: 4,
              py: 1.5,
              fontSize: "1.1rem",
              "&:hover": { backgroundColor: "#03b36a" },
            }}
          >
            Saiba mais!
          </Button>
        </Box>

        {/* Imagem */}
        <Box
          sx={{
            flex: 1,
            textAlign: "center",
          }}
        >
          <Box
            component="img"
            src="/medico-01.png"
            alt="Médico com tablet"
            sx={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSectionDesktop;