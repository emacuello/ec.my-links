"use client";
import { useParams } from "next/navigation";

export default function User() {
    const { username } = useParams();
    
  return (
      <div className="p-10 max-w-md m-auto">
          Hola {username}
    </div>
  );
}