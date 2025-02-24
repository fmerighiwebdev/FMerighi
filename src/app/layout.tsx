import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";

import classNames from "classnames";

import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { effects } from "@/app/resources";

import { Raleway } from "next/font/google";
import { Sora } from "next/font/google";
import { Source_Code_Pro } from "next/font/google";

import { Background, Column, Flex } from "@/once-ui/components";

export const metadata = {
  title: "Francesco Merighi - Sviluppatore Web e Software a Rovereto (TN)",
  description:
    "Mi chiamo Francesco Merighi e sono uno Sviluppatore Web e Software con anni di esperienza nella progettazione, sviluppo e implementazione di soluzioni digitali personalizzate.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: {
      url: "/apple-touch-icon.png",
      sizes: "180x180",
    },
  },
  manifest: "/site.webmanifest",
};

const primary = Raleway({
  variable: "--font-primary",
  subsets: ["latin"],
  display: "swap",
});

const secondary = Sora({
  variable: "--font-secondary",
  subsets: ["latin"],
  display: "swap",
});

const code = Source_Code_Pro({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <Flex
      as="html"
      lang="en"
      background="page"
      data-theme="dark"
      data-brand="custom"
      data-accent="custom"
      data-neutral="slate"
      data-border="playful"
      data-solid="color"
      data-solid-style="plastic"
      data-surface="translucent"
      data-transition="all"
      className={classNames(
        primary.variable,
        secondary ? secondary.variable : "",
        code.variable
      )}
    >
      <Column
        style={{ minHeight: "100vh" }}
        as="body"
        fillWidth
        margin="0"
        padding="0"
      >
        <Background
          mask={{
            cursor: effects.mask.cursor,
            x: effects.mask.x,
            y: effects.mask.y,
            radius: effects.mask.radius,
          }}
          gradient={{
            display: effects.gradient.display,
            x: effects.gradient.x,
            y: effects.gradient.y,
            width: effects.gradient.width,
            height: effects.gradient.height,
            tilt: effects.gradient.tilt,
            colorStart: effects.gradient.colorStart,
            colorEnd: effects.gradient.colorEnd,
            opacity: effects.gradient.opacity as
              | 0
              | 10
              | 20
              | 30
              | 40
              | 50
              | 60
              | 70
              | 80
              | 90
              | 100,
          }}
          dots={{
            display: effects.dots.display,
            color: effects.dots.color,
            size: effects.dots.size as any,
            opacity: effects.dots.opacity as any,
          }}
          grid={{
            display: effects.grid.display,
            color: effects.grid.color,
            width: effects.grid.width as any,
            height: effects.grid.height as any,
            opacity: effects.grid.opacity as any,
          }}
          lines={{
            display: effects.lines.display,
            opacity: effects.lines.opacity as any,
          }}
        />
        <Flex fillWidth minHeight="16"></Flex>
        <Header />
        <Flex
          position="relative"
          zIndex={0}
          fillWidth
          paddingY="l"
          paddingX="l"
          horizontal="center"
          flex={1}
        >
          <Flex horizontal="center" fillWidth minHeight="0">
            {children}
          </Flex>
        </Flex>
        <Footer />
      </Column>
    </Flex>
  );
}
