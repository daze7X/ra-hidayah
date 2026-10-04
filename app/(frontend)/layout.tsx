export const revalidate = 0;
import type { Metadata } from "next";
import "../globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";

export const metadata: Metadata = {
  title: "PAUD Hidayah",
  description: "Website Resmi PAUD Hidayah",
};

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <WhatsAppButton />
    </>
  );
}
