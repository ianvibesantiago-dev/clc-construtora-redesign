import type { Metadata, Viewport } from "next";
import { Work_Sans } from "next/font/google";
import { MotionProvider } from "@/components/motion/MotionProvider";
import "./globals.css";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CLC Construtora — Conceito de redesign",
  // Conceito não oficial: fora dos buscadores para não competir com o site real da empresa.
  robots: { index: false, follow: false },
  description:
    "Terraplanagem, pavimentação asfáltica, barragens, drenagem e concretagem no Nordeste e Norte do Brasil. Mais de 225 projetos executados desde 1995.",
  openGraph: { locale: "pt_BR", type: "website", title: "CLC — Construtora Luiz Costa" },
};

export const viewport: Viewport = { themeColor: "#1a1a1a" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={workSans.variable}>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
