import MainMenu from "./MainMenu";

export default function Header() {
  return (
    <div className="flex justify-center bg-slate-200 w-screen mt-3 mx-auto">
      <div className="flex justify-between w-full max-w-[40rem]">
        <div className="w-[10rem]">Logo</div>
        <div className="flex flex-col">
          <div className="flex space-x-5">
            <div>Telefoonnummer + icoontje</div>
            <div>mailadres + icoontje</div>
          </div>
          <MainMenu />
        </div>
      </div>
    </div>
  );
}
