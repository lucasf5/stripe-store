import { ReactNode } from "react";
import { Header } from "./assets/common";
import "../styles/globalStyles.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <Theme appearance="dark">
          <Header />
          {children}
        </Theme>
      </body>
    </html>
  );
}
