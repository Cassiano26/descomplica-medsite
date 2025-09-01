"use client";

import Grid from "@mui/material/Grid";
import { Typography, Box, Button } from "@mui/material";

const HeroSectionDesktop: React.FC = () => {
  return (
    <Box sx={{ px: { xs: 4, sm: 8, md: 12 }, py: 10 }}>
      <Grid container spacing={6} alignItems="center">
        {/* Texto */}
        <Grid item xs={12} md={6}>
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
        </Grid>

        {/* Imagem */}
        <Grid item xs={12} md={6} textAlign="center">
          <Box
            component="img"
            src="/medico-01.png"
            alt="Médico com tablet"
            sx={{
              maxWidth: 400,
              width: "100%",
              height: "auto",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSectionDesktop;
