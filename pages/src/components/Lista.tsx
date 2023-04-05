import { useQuery } from "@tanstack/react-query";
import React from "react";
import { IRegistro } from "@/pages/api/cadastro";
import ListView from "./ListView";

export default function List() {
  const fetchGroups = async (): Promise<IRegistro[]> => {
    const response = await fetch("/api/cadastro");
    const data = await response.json();
    return data;
  };
  const { data } = useQuery({ queryKey: ["groups"], queryFn: fetchGroups });

  return (
    <>
      {data?.map((r) => (
        <ListView key={r.id} id={r.id} descricao={r.descricao} valor={r.valor} categoria={r.categoria} />
      ))}
    </>
  );
}
