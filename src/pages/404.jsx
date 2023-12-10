import { useRouter } from "next/router";
import Head from "next/head";

import favicon from "@/assets/favicon.ico";
import Link from "next/link";

export default function NotFound() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Page Not Found | UGOCP</title>
        <meta
          name="description"
          content="Página web oficial del Ayuntamiento de Tezonapa, con información sobre servicios, noticias y eventos relevantes. Trabajamos para brindar atención eficiente y transparente a todos los ciudadanos."
        />
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
      </Head>
      <main className="bg-white min-h-screen grid place-items-center">
        <section className="text-center">
          <h1 className="mb-4 text-6xl font-semibold text-red-500">404</h1>
          <p className="mb-4 text-lg text-gray-600">Oops! Algo salió mal.</p>
          <div className="animate-bounce">
            <svg
              className="mx-auto h-16 w-16 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
            </svg>
          </div>
          <p className="mt-4 text-gray-600">
            Regresa al{" "}
            <Link href="/" className="text-blue-500">
              Inicio
            </Link>
            .
          </p>
        </section>
      </main>
    </>
  );
}
