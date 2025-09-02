import './globals.css';
import { Montserrat } from 'next/font/google';
import { ThemeProvider } from "@mui/material/styles";
import theme from "../styles/theme";

// Configuração da fonte Montserrat
const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'Descomplica Medicina',
  description: 'Soluções em saúde pública com inteligência artificial.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={montserrat.className}>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}