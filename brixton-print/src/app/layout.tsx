import "@theme/globals.css";
// import { Provider as ChakraProvider } from "@chakraui/provider";
import MainLayout from "@/layout/main-layout";
import theme from "../theme/theme";
import { defaultSystem } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ChakraProvider value={theme}>
          <MainLayout>{children}</MainLayout>
        </ChakraProvider>
      </body>
    </html>
  );
}
