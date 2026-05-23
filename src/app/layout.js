import "./globals.css";

export const metadata = {
  title: "LuthierFlix",
  description: "Onde a arte encontra a música",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
