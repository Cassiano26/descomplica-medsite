"use client";

import { Box, Typography, Button } from "@mui/material";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function IconsAnimatedSection() {
    const steps = [
  { label: "Início da consulta", icon: "/logoquatro.png", top: "0%", left: "38%", transform: "translateX(-50%)", textOffset: { top: "-85px", left: "160px" } },
  { label: "Inserção de dados do paciente", icon: "/logocinco.png", top: "20%", left: "73%", transform: "translate(-50%, -30%)", textOffset: { top: "-60px", left: "120px" } },
  { label: "Sugestão de diagnóstico com suporte da I.A.", icon: "/logoseis.png", top: "60%", left: "77%", transform: "translate(-70%, 0%)", textOffset: { top: "-30px", left: "120px" } },
  { label: "Recebimento de apontamentos do especialista", icon: "/logoum.png", top: "82%", left: "60%", transform: "translate(-50%, -20%)", textOffset: { top: "30px", left: "60px" } },
  { label: "Direcionamento do paciente", icon: "/logosete.png", top: "83%", left: "15%", transform: "translate(-80%, -78%)", textOffset: { top: "30px", left: "-60px" } },
  { label: "Avaliação da consultoria", icon: "/logodois.png", top: "60%", left: "-5%", transform: "translate(-70%, -100%)", textOffset: { top: "-50px", left: "-120px" } },
  { label: "Dashboard para o gestor público", icon: "/dashboardesk.png", top: "20%", left: "0%", transform: "translate(-20%, -50%)", textOffset: { top: "-70px", left: "-120px" } },
];
    return (
        <>
            {/* ICONS ANIMATED SECTION */}
             <Box sx={{ textAlign: "center", py: 10, position: "relative" }}>
  <Typography
    variant="h2"
    fontWeight="bold"
    mb={14}
    sx={{ fontStyle: "italic", color: "white" }}
  >
    Como funciona?
  </Typography>

  <Box sx={{ position: "relative", width: 500, height: 500, mx: "auto" }}>
    {/* CÍRCULO DE FUNDO */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }}
      style={{ position: "absolute", inset: 0 }}
    >
      <Image
        src="/circulo-fundo.png"
        alt="Fluxo da consulta"
        fill
        style={{ objectFit: "contain" }}
      />
    </motion.div>

    {/* ÍCONES */}
    {steps.map((step, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, rotate: -90 }}
        whileInView={{ opacity: 1, rotate: 0 }}
        transition={{
          delay: 0.5 + i * 0.3, // sequencia um por um
          duration: 0.6,
          ease: "easeOut",
        }}
        viewport={{ once: true, amount: 0.5 }}
        whileHover={{ y: -10 }}
        style={{
          position: "absolute",
          top: step.top,
          left: step.left,
          transform: step.transform,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: 140,
        }}
      >
        <Box
          sx={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            background: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 1,
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          }}
        >
          <Image src={step.icon} alt={step.label} width={40} height={40} />
        </Box>

        <Typography
          sx={{
            background: "#4D0DFF",
            color: "white",
            borderRadius: "8px",
            px: 1.5,
            py: 0.5,
            fontSize: "0.8rem",
            fontWeight: 500,
            textAlign: "center",
            position: "relative",
            top: step.textOffset.top,
            left: step.textOffset.left,
          }}
        >
          {step.label}
        </Typography>
      </motion.div>
    ))}
  </Box>

  <Box textAlign="center" sx={{ mt: 25 }}>
    <Button
      component="a"
      href="https://wa.me/554788992915"
      target="_blank"
      rel="noopener noreferrer"
      variant="contained"
      sx={{
        borderRadius: 3,
        backgroundColor: "#04D77B",
        color: "#000C1E",
        fontWeight: "bold",
        fontStyle: "italic",
        textTransform: "none",
        px: 4,
        py: 1.5,
        fontSize: "1.1rem",
        "&:hover": { backgroundColor: "#03c76f" },
      }}
    >
      Fale conosco
    </Button>
  </Box>
</Box>
        </>
    )
}