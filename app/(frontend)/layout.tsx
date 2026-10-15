export const revalidate = 0;
import "../globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";
import BackToTopButton from "../../components/BackToTopButton";

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
      <BackToTopButton />
      <WhatsAppButton />
    </>
  );
}
