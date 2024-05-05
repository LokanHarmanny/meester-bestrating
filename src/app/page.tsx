import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center p-24">
      <div className="flex items-center">
        <Image
          src={"/banner.png"}
          alt={"Banner straatwerk"}
          height={500}
          width={1200}
        />

        <div className="flex-row space-x-10">
          <span>Home</span>
          <span>Portfolio</span>
          <span>Contact</span>
        </div>
      </div>

      <div>Welkom op de site van Meester Bestrating</div>
    </main>
  );
}
