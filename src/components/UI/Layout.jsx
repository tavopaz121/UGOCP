import Head from "next/head";
import favicon from "@/assets/favicon.ico";
import Header from "./Header";
import Sliderbar from "./Sliderbar";

export default function Layout({ title, description, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
      </Head>

      <Header />

      <Sliderbar />

      <main className="content ml-12 transform ease-in-out duration-500 pt-20 px-2 md:px-5 pb-4">
        {children}
      </main>
    </>
  );
}

Layout.defaultProps = {
  title: "UGOCP",
  description: "",
};
