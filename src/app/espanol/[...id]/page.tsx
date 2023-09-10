// 客户端组件
"use client";
import { useParams, usePathname } from "next/navigation";
import Armarios from "../_components/Armarios";
import Automatizacion from "../_components/Automatizacion";
import Programacion from "../_components/Programacion";

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
      {(pathname == "/espanol/armarios-el%C3%A9ctricos" ) && <Armarios />}
      {(pathname == "/espanol/programaci%C3%B3n-de-aut%C3%B3matas" ) && <Programacion />}
      {(pathname == "/espanol/proyectos-de-automatizaci%C3%B3n" ) && <Automatizacion /> }
    </>
  );
}
export default ListDetailPage;
