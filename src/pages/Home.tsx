export default function Home() {
  return (
    <>
      <h1 className="text-xl">Welkom bij Meester Bestrating</h1>
      <h5>Uw specialist in (sier)bestrating.</h5>
      <img
        src={`./${import.meta.env.PROD ? "" : "public/"}images/portfolio/project-8.jpeg`}
        className="max-w-[45vw] mt-10"
      ></img>
    </>
  );
}
