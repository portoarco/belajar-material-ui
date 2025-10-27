"use client";
import Image from "next/image";
import { MuiTyphography } from "./components/MuiTypography";
import { MuiButton } from "./components/MuiButton";

export default function Home() {
  return (
    <>
      <section className="flex justify-center">
        {/* <MuiTyphography /> */}
        <MuiButton />
      </section>
    </>
  );
}
