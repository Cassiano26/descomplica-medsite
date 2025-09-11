"use client";

import { Box, Typography, Button, Link } from "@mui/material";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  { label: "Início da consulta", icon: "/logoquatro.png", top: "0%", left: "38%", transform: "translateX(-50%)", textOffset: { top: "-85px", left: "160px" } },
  { label: "Inserção de dados do paciente", icon: "/logocinco.png", top: "20%", left: "73%", transform: "translate(-50%, -30%)", textOffset: { top: "-60px", left: "120px" } },
  { label: "Sugestão de diagnóstico com suporte da I.A.", icon: "/logoseis.png", top: "60%", left: "77%", transform: "translate(-70%, 0%)", textOffset: { top: "-30px", left: "120px" } },
  { label: "Recebimento de apontamentos do especialista", icon: "/logoum.png", top: "82%", left: "60%", transform: "translate(-50%, -20%)", textOffset: { top: "30px", left: "60px" } },
  { label: "Direcionamento do paciente", icon: "/logosete.png", top: "83%", left: "15%", transform: "translate(-80%, -78%)", textOffset: { top: "30px", left: "-60px" } },
  { label: "Avaliação da consultoria", icon: "/logodois.png", top: "60%", left: "-5%", transform: "translate(-70%, -100%)", textOffset: { top: "-50px", left: "-120px" } },
  { label: "Dashboard para o gestor público", icon: "/dashboardesk.png", top: "20%", left: "0%", transform: "translate(-20%, -50%)", textOffset: { top: "-70px", left: "-120px" } },
];

const DesktopHomePage: React.FC = () => {
  return (
    <Box sx={{ display: { xs: "none", md: "block" }, backgroundColor: "#000C1E", color: "white" }}>

      {/* HERO SECTION */}
      <Box component="section" sx={{ position: "relative", width: "100%", minHeight: { md: "620px", lg: "720px" }, overflow: "hidden" }}>
        <Box sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundImage: `url('/foto-fundo.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          "&::after": {
            content: '""',
            position: "absolute",
            inset: 0,
            background: "linear-gradient(90deg, rgba(0,12,30,0.85) 0%, rgba(0,12,30,0.6) 40%, rgba(0,12,30,0.15) 70%)",
          },
        }} />
        <Box sx={{ position: "relative", zIndex: 2, maxWidth: 1280, mx: "auto", px: { md: 8, lg: 12 }, height: "100%", display: "flex", alignItems: "center", gap: 18 }}>
          
          {/* Texto Hero */}
          <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ flex: 1 }}>
            <Box sx={{ color: "white", pr: { md: 2, lg: 6 } }}>
              {/* LOGO ajustada para cima */}
              <Box sx={{ mb: 15 }}>
                <Image src="/descomplica-logo.png" alt="Descomplica" width={200} height={40} priority />
              </Box>

              <Typography variant="h3" sx={{ color: "rgba(255,255,255,0.88)", fontWeight: 800, fontStyle: "italic", lineHeight: 1.05, fontSize: { md: "36px", lg: "44px" }, mb: 2 }}>
                Conectando a saúde pública ao futuro!
              </Typography>
              <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.88)", mb: 3, fontSize: { md: "16px", lg: "18px" } }}>
                Mais especialistas, menos filas:{" "}
                <Box component="span" sx={{ fontStyle: "italic", fontWeight: 700 }}>
                  sua cidade inovando na saúde pública!
                </Box>
              </Typography>
              <Button
                component="a"
                href="https://wa.me/554788992915"
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                sx={{
                  mt: 1,
                  borderRadius: 2,
                  backgroundColor: "#04D77B",
                  color: "#000C1E",
                  fontWeight: "bold",
                  textTransform: "none",
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  "&:hover": { backgroundColor: "#03b36a" },
                }}
              >
                Saiba mais!
              </Button>
            </Box>
          </motion.div>

          {/* Médico Hero */}
          <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.3 }} style={{ flex: 1, display: "flex", justifyContent: "flex-end", alignItems: "center", position: "relative" }}>
            <Box sx={{ position: "relative", zIndex: 2, width: { md: 300, lg: 630 } }}>
              <Image src="/medico-01.png" alt="Equipe médica" width={900} height={900} style={{ width: "100%", height: "auto", display: "block" }} priority />
            </Box>
          </motion.div>

        </Box>
      </Box>

      {/* ABOUT SECTION */}
      <Box sx={{ position: "relative", px: { md: 12, lg: 16 }, py: 8, display: "flex", flexDirection: "column", gap: 6, backgroundColor: "#000C1E", overflow: "hidden" }}>
        
        {/* Ícone de fundo animado */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          style={{ position: "absolute", bottom: "-20%", right: "0%", width: "30%", height: "auto", zIndex: 0 }}
        >
          <Image src="/icone-descomplica.png" alt="Ícone Descomplica" width={400} height={400} style={{ width: "100%", height: "auto" }} />
        </motion.div>

        <Box sx={{ position: "relative", zIndex: 1 }}>
          
          {/* Texto inicial */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Box sx={{ maxWidth: 800, mx: "auto", textAlign: "left" }}>
              <Typography
                variant="h5"
                fontWeight={400}
                gutterBottom
                sx={{ color: "rgba(255,255,255,0.88)", lineHeight: 1.6, mb: 4 }}
              >
                Redução de custos e filas com triagens médicas inteligentes e comprovadas.{" "}
                <Box component="span" sx={{ fontStyle: "italic", fontWeight: 700 }}>
                  A solução que transforma o atendimento público com inteligência artificial.
                </Box>
              </Typography>
            </Box>
          </motion.div>

          {/* Bloco imagem + texto */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 6, justifyContent: "center", flexWrap: "wrap", mt: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              style={{ flex: 1, minWidth: 300, textAlign: "center" }}
            >
              <Image src="/tela.png" alt="Dashboard IA" width={600} height={400} style={{ width: "100%", height: "auto" }} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              style={{ flex: 1, minWidth: 300 }}
            >
              <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.88)" }}>
                A <b>Descomplica Medicina</b> utiliza inteligência artificial
                generativa aliada à expertise médica para otimizar o processo de
                encaminhamento. O resultado?{" "}
                <Box component="span" sx={{ fontStyle: "italic", fontWeight: "bold" }}>
                  Redução de filas, economia de recursos e mais dignidade no
                  atendimento.
                </Box>
              </Typography>
            </motion.div>
          </Box>

          {/* Texto final */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Box sx={{ textAlign: "center", maxWidth: 800, mx: "auto", mt: 6 }}>
              <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.88)" }}>
                Nossa plataforma oferece um{" "}
                <Box component="span" sx={{ fontStyle: "italic", fontWeight: "bold" }}>
                  dashboard em tempo real
                </Box>
                , que permite ao gestor visualizar indicadores de desempenho, identificar
                gargalos e tomar decisões baseadas em dados — tudo com foco na eficiência
                do sistema e no uso responsável dos recursos públicos.
              </Typography>
            </Box>
          </motion.div>
        </Box>
      </Box>
    

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

            {/* RESULTADOS + IMAGENS */}
<Box
  sx={{
    position: "relative",
    px: { md: 10, lg: 0 },
    py: 2,
    color: "white",
    backgroundColor: "#000C1E",
    overflow: "hidden",
  }}
>
  {/* Ícone de fundo */}
  <Box
    sx={{
      position: "absolute",
      top: "10%",
      left: { xs: "30%", md: "-20%" },
      width: { xs: "120%", md: "70%" },
      height: "auto",
      opacity: 1,
      zIndex: 0,
    }}
  >
    <Image
      src="/icone-descomplicadois.png"
      alt="Ícone Descomplica dois"
      width={700}
      height={700}
      style={{ width: "100%", height: "auto" }}
    />
  </Box>

{/* Imagem da equipe médica */}
<Box
  sx={{
    position: "relative",
    width: "100%",
    height: { md: "370px", lg: "620px" },
    mb: { xs: 6, md: 10 },
  }}
>
  <motion.div
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, delay: 0.4 }} // entra depois do texto
    viewport={{ once: true }}
    style={{ position: "absolute", right: 0, bottom: 0, height: "100%" }}
  >
    <Image
      src="/medicos-02.png"
      alt="Equipe médica adicional"
      width={800}
      height={1000}
      style={{
        width: "auto",
        height: "100%",
        objectFit: "contain",
        display: "block",
      }}
    />
  </motion.div>
</Box>

{/* Texto com motion */}
<Box sx={{ px: 10, mb: { xs: 6, md: 10 } }}>
  <motion.div
    initial={{ opacity: 0, y: -50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0 }} // aparece primeiro
    viewport={{ once: true }}
  >
    <Typography
      variant="h2"
      sx={{
        color: "#FFFFFF",
        fontStyle: "italic",
        lineHeight: 1.3,
        textAlign: "left",
        mb: 10,
        px: 33,
      }}
    >
      <Box
        component="span"
        sx={{
          fontWeight: "bold",
          pr: 0,
        }}
      >
        Resultados
      </Box>{" "}
      que fazem a <br />diferença!
    </Typography>
  </motion.div>

  {/* Imagem dos resultados reduzida */}
  <Box sx={{ textAlign: "center" }}>
    <Image
      src="/resultadosdesk.png"
      alt="Resultados"
      width={850}  // 40% menor que 1200
      height={450} // 40% menor que 600
      style={{ width: "60%", height: "auto", borderRadius: 10}}
    />
  </Box>
</Box>
<Box textAlign="center" sx={{ mt: 0 }}>
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
    Entre já em contato!
  </Button>
</Box>


</Box>

      {/* CTA IMAGE */}
<Box sx={{ position: "relative", py: 12, bgcolor: "#000C1E" }}>
  {/* Fundo gradiente */}
  <Box sx={{ position: "absolute", inset: 0, zIndex: 1 }}>
    <Image src="/gradiente-medico.png" alt="Gradiente fundo" fill style={{ objectFit: "cover" }} />
  </Box>

  {/* Link para WhatsApp */}
  <a href="https://wa.me/554788992915" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: 500, // 50% da largura original
        mx: "auto",
        borderRadius: "20px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        zIndex: 2,
      }}
    >
      {/* Imagem do médico reduzida */}
      <Image
        src="/medico-texto.png"
        alt="Médico CTA"
        width={450} // metade da largura original
        height={225} // metade da altura original
        style={{ width: "100%", height: "auto", position: "relative", zIndex: 2 }}
      />

      {/* Texto superior */}
      <Box
        sx={{
          position: "absolute",
          top: "5%",
          left: "6%",
          width: "50%",
          color: "#000C1E",
          textAlign: "left",
          zIndex: 3,
        }}
      >
       
      </Box>

      {/* Texto inferior */}
      <Box
        sx={{
          position: "absolute",
          bottom: "15%",
          left: "5%",
          width: "45%",
          color: "#000C1E",
          textAlign: "left",
          zIndex: 3,
        }}
      >
      
      </Box>
    </Box>
  </a>
</Box>
 
 
{/* FOOTER */}
<Box
  sx={{
    display: "flex",
    justifyContent: "center",
    width: "100%",
    bgcolor: "transparent",
    mt: { xs: 4, md: 6 },
  }}
>
  <Box
    sx={{
      bgcolor: "#F5F5F5",
      color: "#000C1E",
      borderRadius: "20px 20px 0 0",
      textAlign: "center",
      py: 4, // só padding vertical
      display: "flex",
      flexDirection: "column",
      gap: 3,
      width: "100%",
      maxWidth: 1200,
    }}
  >
    {/* Logo */}
    <Box>
      <Image
        src="/icone-descomplicafooter.png"
        alt="Logo Descomplica"
        width={250}
        height={150}
        style={{ width: "300px", height: "auto", margin: "0 auto" }}
      />
    </Box>

    {/* CONTATO */}
    <Typography variant="h3" fontWeight="bold" sx={{ textAlign: "left", px: 57 }}>
      CONTATO
    </Typography>

    {/* Container flex do bloco verde + redes sociais */}
<Box
  sx={{
    display: "flex",
    flexWrap: { xs: "wrap", md: "nowrap" },
    gap: 5, // espaço entre o bloco verde e o bloco de redes sociais
    alignItems: "flex-start",
  }}
>
{/* Bloco verde contato */}
<Box
  sx={{
    background: "linear-gradient(90deg, #36d492ff 0%, #3ef5acff 50%)",
    borderRadius: 3,
    position: "relative",
    width: { xs: "100%", md: "60%" },
    height: 90, // altura menor que antes (era 150)
    px: 3,
    py: 0,
  }}
>
  {/* Ícone + email */}
  <Box
    sx={{
      position: "absolute",
      top: 15, // ajustei um pouco para combinar com a altura menor
      left: 20,
      display: "flex",
      alignItems: "center",
      gap: 3,
      px: 54, // remover padding extra evita quebra de linha
    }}
  >
    <Image src="/icone-telefone.png" alt="Email" width={20} height={15} />
    <Typography variant="body2" sx={{ color: "white", whiteSpace: "nowrap" }}>
      descomplicamedicinaagora@gmail.com
    </Typography>
  </Box>

  {/* Ícone + WhatsApp */}
  <Box
    sx={{
      position: "absolute",
      top: 50,
      left: 20,
      display: "flex",
      alignItems: "center",
      gap: 3,
      px: 54,
    }}
  >
    <Image src="/icone-whats.png" alt="WhatsApp" width={20} height={20} />
    <Typography variant="body2" sx={{ color: "white", whiteSpace: "nowrap" }}>
      (47) 98899-2915
    </Typography>
  </Box>
</Box>


  {/* Bloco preto redes sociais */}
  <Box
    sx={{
      display: "flex",
      gap: 0,
      ml: 1, // ajuste aqui a distância horizontal do bloco verde
    }}
  >
    <Box
      sx={{
        bgcolor: "#000C1E",
        borderRadius: "12px 0 0 12px",
        width: 80,
        height: 80,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
       <Link href="https://www.instagram.com/appdescomplicamedicina/" target="_blank" rel="noopener">
      <Image src="/icone-instagram.png" alt="Instagram" width={30} height={30} />
      </Link>
    </Box>
    <Box
      sx={{
        bgcolor: "#000C1E",
        borderRadius: "0 12px 12px 0",
        width: 80,
        height: 80,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
       <Link href="https://www.linkedin.com/company/descomplica-medicina/" target="_blank" rel="noopener">
      <Image src="/icone-linkedin.png" alt="LinkedIn" width={30} height={30} />
      </Link>
    </Box>
  </Box>
</Box>


  



{/* Bloco branco das logos */}
<Box
  sx={{
    bgcolor: "white",
    borderRadius: 2,
    py: 6, // aumenta altura (padding vertical)
    px: { xs: 4, md: 8 }, // padding lateral mais equilibrado e responsivo
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: { xs: 2, md: 4 },
    mt: 10,
    mx: "auto",          // centraliza horizontalmente
    width: { xs: "90%", md: "30%", lg: "35%" }, // ocupa menos largura
  }}
>
  <Image src="/icone-parana.png" alt="Governo do Paraná" width={150} height={80} />
  <Image src="/sbis.jpeg" alt="certificado" width={170} height={60} />
  <Image src="/icone-inovador.png" alt="Paraná Anjo Inovador" width={140} height={110} />
  

</Box>
</Box>
</Box>
</Box>



  );
};

export default DesktopHomePage;
