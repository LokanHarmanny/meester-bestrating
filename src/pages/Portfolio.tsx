import { resizeImage } from "../helpers";

export default function Portfolio() {
  // Create array of 18 elements
  // Loop through, and create a thumbnail/preview for each
  // When clicked on, takes you to seperate page that will show other photo's that belong to
  // that project
  sayHiToPhp();

  return (
    <>
      <div>Een greep uit de eerder uitgevoerde projecten:</div>
      <div className="flex max-w-[50vw] gap-8 flex-wrap">
        {generatePictureArray(19)}
      </div>
    </>
  );
}

function generatePictureArray(amount: number) {
  const pictureArray = [];

  for (let i = 1; i < amount; i++) {
    const image = new Image();
    image.src = `./images/portfolio/project-${i}.jpeg`;
    const imageUrl = resizeImage(image).toDataURL("image/jpeg", 1.0);
    pictureArray.push(<img src={imageUrl} key={`image-${i}`} />);
  }

  return pictureArray;
}

async function sayHiToPhp() {
  const response = await fetch("api/index.php", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log("response: ", response.body);
}
