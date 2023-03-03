import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const LogOutPage = () => {
  const router = useRouter();
  const [countDown, setCountDown] = useState(5);

  useEffect(() => {
    if (countDown <= 0) {
      router.push("/login");
    }

    const timer = setTimeout(() => {
      setCountDown(countDown - 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countDown]);

  return (
    <>
      <Head>
        <title>กำลังออกจากระบบ</title>
        <meta name="description" content="กำลังออกจากระบบ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-r from-indigo-600 to-blue-400">
        <div className="px-40 py-20 bg-white rounded-md shadow-xl">
          <div className="flex flex-col items-center">
            <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
              <span className="text-red-500">กรุณารอสักครู่</span>
            </h6>
            <p className="mb-8 text-center text-gray-500 md:text-lg">
              ขณะนี้ ระบบกำลังดำเนินการออกจากระบบ
            </p>
            <Link href="/login">
              <span className="px-6 py-2 text-sm font-semibold bg-blue-100">
                <span className="text-blue-800">เข้าสู่ระบบ</span>(
                <span className="text-rose-800">{countDown}</span>)
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogOutPage;
