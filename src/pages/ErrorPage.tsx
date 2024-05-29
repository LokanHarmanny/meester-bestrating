import { useRouteError } from "react-router-dom";

type ErrorMessage = { statusText: string; message: string };

export default function ErrorPage() {
  const error = useRouteError() as ErrorMessage;
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oeps!</h1>
      <p>Sorry, er is een onverwachte fout opgetreden.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
