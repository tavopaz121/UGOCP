import TablePreview from "@/components/Dashboard/TablePreview";
import WelcomeBanner from "@/components/Dashboard/WelcomeDashboard";
import Layout from "@/components/UI/Layout";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <WelcomeBanner />
      <div className="sm:flex sm:justify-between sm:items-center mb-8">
        <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
          <Link
            href="/agregar/nuevo-beneficiario"
            className="flex rounded-md items-center px-4 py-1 bg-indigo-500 hover:bg-indigo-600 text-white">
            <svg
              className="w-4 h-4 fill-current opacity-50 shrink-0"
              viewBox="0 0 16 16">
              <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
            </svg>
            <span className="xs:block ml-2">Nuevo Beneficiario</span>
          </Link>
        </div>
      </div>
      <TablePreview />
    </Layout>
  );
}
