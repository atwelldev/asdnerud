// клиентские компоненты рисуются только у клиента, серверные - на сервере. "use server" по умолчанию. Данные передаются через props в серверных компонентах
'use client' // теперь серверные и клиентские компоненты разделены, т.е. useEffect и др. считаются клиентскими компонентами
// ! "use client" нужно вешать на элементы, а "use server" секции и страницы!


import styles from "./page.module.scss";

// Next & React
import Link from "next/link";
import Image from "next/image";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "./redux/slices/theme/themeSlice";

import SectionIntro from "@/components/sections/sectionIntro";

export default function Home() {

  // Redux
  const dispatch = useDispatch();
  const theme = useSelector((state: any) => state.theme.active);

  return (
    <main data-theme={theme ? "dark" : "light"} className={"_main"}>
      <SectionIntro />
    </main>
  );
}
