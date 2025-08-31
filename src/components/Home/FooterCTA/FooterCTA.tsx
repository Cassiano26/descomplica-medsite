"use client";

import { Box, Container, Stack, Typography, Button } from "@mui/material";

export const FooterCTA = () => {
  return (
    <Box sx={{ py: 6, textAlign: "center", bgcolor: "primary.dark", color: "white" }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Pronto para transformar o atendimento público de saúde?
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        sx={{ mt: 2, borderRadius: 3 }}
      >
        Clique aqui e agende já uma reunião!
      </Button>
      <Typography variant="body2" sx={{ mt: 3 }}>
        (47) 98899-2915 • descomplicamedicinaagora@gmail.com
      </Typography>
    </Box>
  );
};