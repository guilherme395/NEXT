import "@/app/globals.css";
import { Fira_Code } from "next/font/google";

const firaCode = Fira_Code({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Hello World",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`bg-gray-900 text-white ${firaCode.className}`}>
        <main className="min-h-screen p-4">{children}</main>
      </body>
    </html>
  );
}
