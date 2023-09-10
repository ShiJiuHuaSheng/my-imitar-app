// 客户端组件
"use client";
import { useParams, usePathname } from "next/navigation";
import Avisolegal from "../_components/AvisoLegal";
import ComoLlegar from "../_components/ComoLlegar";
import QuSomos from "../_components/QuSomos";

import { useEffect, useRef } from "react";
function ListDetailPage({
  params,
  searchParams,
}: {
  params: { slug: string; id: any };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // console.log('run server');
  console.log(params, "params", searchParams, "url所携带参数");
  const pathname = usePathname();
  console.log(pathname);

  return (
    <>
      {(pathname == "/contacto/aviso-legal" ) && <Avisolegal />}
      {(pathname == "/contacto/qui%C3%A9nes-somos" ) && <QuSomos />}
      {(pathname == "/contacto/c%C3%B3mo-llegar" ) && <ComoLlegar />}
    </>
  );
}
export default ListDetailPage;
