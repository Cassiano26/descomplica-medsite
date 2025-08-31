"use client";

import { Box, Container, Stack, Typography, Button } from "@mui/material";


export const ResultsSection = () => {
  const results = [
    { value: "40%", label: "menos encaminhamentos" },
    { value: "95%", label: "de aprovação entre os médicos" },
    { value: "10%", label: "de economia no orçamento da saúde" },
    { value: "50%", label: "menos exames desnecessários" },
  ];

  return (
    <Box sx={{ py: 6, bgcolor: "primary.main", color: "white" }}>
      <Container>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Resultados que fazem a diferença!
        </Typography>
        <Stack spacing={3}>
          {results.map((r, i) => (
            <Box key={i}>
              <Typography variant="h4" fontWeight="bold">
                {r.value}
              </Typography>
              <Typography variant="body2">{r.label}</Typography>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};