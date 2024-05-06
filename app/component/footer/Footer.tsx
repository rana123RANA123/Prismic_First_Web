import { createClient } from "@/prismicio";
import Image from "next/image";
import React from "react";

export default async function Footer() {
  const client = createClient();

  const home = await client.getSingle("home");
  return (
    <div className="text-[30px] font-bold text-center py-8">
      {home.data.footer}
    </div>
  );
}
