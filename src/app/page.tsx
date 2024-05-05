import MainMenu from "@/components/MainMenu";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center px-24 py-16 space-y-8 ">
      <MainMenu />

      <div>Welkom op de site van Meester Bestrating</div>
    </main>
  );
}
