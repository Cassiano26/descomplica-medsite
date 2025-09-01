"use client";



import { Box, Grid, Typography, Button, Stack } from "@mui/material";
import React from "react";

interface StatBoxProps {
  value: string;
  label: string;
}

const StatBox: React.FC<StatBoxProps> = ({ value, label }) => {
  return (
    <Box textAlign="center" p={4}>
      <Typography variant="h3" fontWeight="bold" color="#04D77B">
        {value}
      </Typography>
      <Typography variant="body1">{label}</Typography>
    </Box>
  );
};


export const DesktopHomePage: React.FC = () => {
  return (
    <Box sx={{ display: { xs: "none", md: "block" }, bgcolor: "#000C1E", color: "white" }}>
      {/* HERO */}
      <Grid container alignItems="center" spacing={6} sx={{ px: 12, py: 10 }}>
        <Grid item md={6}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Conectando a saúde pública ao futuro!
          </Typography>
          <Typography variant="h6" gutterBottom>
            Mais especialistas, menos filas: sua cidade inovando na saúde pública!
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
            }}
          >
            Saiba mais!
          </Button>
        </Grid>
        <Grid item md={6} textAlign="center">
          <img src="/medico-01.png" alt="Médico" style={{ maxWidth: 400, width: "100%" }} />
        </Grid>
      </Grid>

      {/* ABOUT */}
      <Grid container spacing={6} alignItems="center" sx={{ px: 12, py: 10 }}>
        <Grid item md={6}>
          <img src="/computador-01.png" alt="Dashboard IA" style={{ maxWidth: 500, width: "100%" }} />
        </Grid>
        <Grid item md={6}>
          <Typography variant="h5" gutterBottom>
            Redução de custos e filas com triagens médicas inteligentes e comprovadas.
          </Typography>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            A solução que transforma o atendimento público com inteligência artificial.
          </Typography>
          <Typography variant="body1">
            A <b>Descomplica Medicina</b> utiliza inteligência artificial generativa aliada à expertise
            médica para otimizar o processo de encaminhamento. O resultado? Redução de filas,
            economia de recursos e mais dignidade no atendimento.
          </Typography>
          <Typography variant="body1" mt={2}>
            Nossa plataforma oferece um <b>dashboard em tempo real</b>, que permite ao gestor visualizar
            indicadores de desempenho, identificar gargalos e tomar decisões baseadas em dados —
            tudo com foco na eficiência do sistema e no uso responsável dos recursos públicos.
          </Typography>
        </Grid>
      </Grid>

      {/* COMO FUNCIONA */}
      <Box textAlign="center" sx={{ py: 8, px: 12 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Como funciona?
        </Typography>
        <img src="/como-funciona.png" alt="Como funciona" style={{ maxWidth: 600, width: "100%" }} />
        <Button
          variant="contained"
          sx={{
            mt: 4,
            borderRadius: 3,
            backgroundColor: "#04D77B",
            color: "#000C1E",
            fontWeight: "bold",
            px: 5,
            py: 1.5,
          }}
        >
          Fale conosco
        </Button>
      </Box>

      {/* RESULTADOS */}
      <Box sx={{ px: 12, py: 10, bgcolor: "#011627", borderRadius: 3, mx: 12 }}>
        <Typography variant="h4" textAlign="center" gutterBottom>
          Resultados que fazem a diferença!
        </Typography>
        <Grid container>
          <Grid item md={6} borderRight="1px solid rgba(255,255,255,0.2)" borderBottom="1px solid rgba(255,255,255,0.2)">
            <StatBox value="40%" label="menos encaminhamentos" />
          </Grid>
          <Grid item md={6} borderBottom="1px solid rgba(255,255,255,0.2)">
            <StatBox value="95%" label="de aprovação entre os médicos" />
          </Grid>
          <Grid item md={6} borderRight="1px solid rgba(255,255,255,0.2)">
            <StatBox value="10%" label="de economia no orçamento da saúde" />
          </Grid>
          <Grid item md={6}>
            <StatBox value="50%" label="menos exames desnecessários" />
          </Grid>
        </Grid>
        <Box textAlign="center">
          <Button
            variant="contained"
            sx={{
              mt: 4,
              borderRadius: 3,
              backgroundColor: "#04D77B",
              color: "#000C1E",
              fontWeight: "bold",
              px: 5,
              py: 1.5,
            }}
          >
            Entre já em contato!
          </Button>
        </Box>
      </Box>

      {/* DEPOIMENTOS */}
      <Box sx={{ px: 12, py: 10 }}>
        <Typography variant="h4" gutterBottom>
          Depoimentos & Cases
        </Typography>
        <Grid container spacing={3}>
          {Array.from({ length: 6 }).map((_, i) => (
            <Grid item md={4} key={i}>
              <Box
                sx={{
                  bgcolor: "#0B1E2D",
                  p: 3,
                  borderRadius: 2,
                  borderLeft: "4px solid #04D77B",
                }}
              >
                <Typography variant="body1" gutterBottom>
                  "Simplesmente incrível! Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                </Typography>
                <Typography variant="subtitle2" fontWeight="bold">
                  Dr. Luiz Augusto – Ortopedia
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* PARCEIROS */}
      <Box sx={{ textAlign: "center", px: 12, py: 8 }}>
        <Typography variant="h5" gutterBottom>
          Confira alguns de nossos parceiros:
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {Array.from({ length: 8 }).map((_, i) => (
            <Grid item key={i}>
              <Box
                sx={{
                  border: "1px solid #04D77B",
                  borderRadius: 2,
                  px: 6,
                  py: 3,
                  color: "white",
                }}
              >
                Logo
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* CTA FINAL */}
      <Grid container alignItems="center" sx={{ px: 12, py: 10 }}>
        <Grid item md={6}>
          <Typography variant="h5" gutterBottom>
            Pronto para transformar o atendimento público de saúde?
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: 3,
              borderRadius: 3,
              backgroundColor: "#04D77B",
              color: "#000C1E",
              fontWeight: "bold",
              px: 5,
              py: 1.5,
            }}
          >
            Clique aqui e agende já uma reunião!
          </Button>
        </Grid>
        <Grid item md={6} textAlign="center">
          <img src="/medico-texto.png" alt="Médico CTA" style={{ maxWidth: 400, width: "100%" }} />
        </Grid>
      </Grid>

      {/* FOOTER */}
      <Box sx={{ bgcolor: "white", color: "#000C1E", px: 12, py: 8 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item md={4}>
            <img src="/icone-descomplicafooter.png" alt="Logo Descomplica" style={{ width: 160 }} />
          </Grid>
          <Grid item md={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              CONTATO
            </Typography>
            <Stack spacing={1}>
              <Typography variant="body2">descomplicamedicinaagora@gmail.com</Typography>
              <Typography variant="body2">(47) 98899-2915</Typography>
            </Stack>
          </Grid>
          <Grid item md={4} textAlign="right">
            <Stack direction="row" spacing={2} justifyContent="flex-end" mb={2}>
              <img src="/icone-instagram.png" alt="Instagram" style={{ width: 40 }} />
              <img src="/icone-linkedin.png" alt="LinkedIn" style={{ width: 40 }} />
            </Stack>
            <Stack direction="row" spacing={2} justifyContent="flex-end">
              <img src="/icone-parana.png" alt="Paraná" style={{ height: 60 }} />
              <img src="/icone-inovador.png" alt="Inovador" style={{ height: 60 }} />
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
