/* eslint-disable @next/next/no-img-element */
import NavBar from "./NavBar";
import Head from "next/head";

const MainLayOut = ({
  children,
  title = process.env.APP_NAME,
  description = process.env.APP_DESCRIPTION,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-full">
        <NavBar />
        <main className="py-6 mx-auto text-sm font-medium max-w-7xl sm:px-6 lg:px-8">
          {/* Replace with your content */}
          {children}
          {/* /End replace */}
        </main>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default MainLayOut;
