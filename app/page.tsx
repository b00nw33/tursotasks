import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto p-10">
      <div className="flex flex-col justify-center gap-10">
        <Input placeholder="Type your task..." />
        <Button>Submit</Button>
      </div>

      <div className="p-10">
        <ul>
          <li>dsfs</li>
          <li>kajjads</li>
          <li>mwkds</li>
        </ul>
      </div>
    </main>
  );
}
