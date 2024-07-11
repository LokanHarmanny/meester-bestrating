type PortfolioImageProps = {
  imageUrl: string;
};

export default function PortfolioImage({ imageUrl }: PortfolioImageProps) {
  return <img src={imageUrl} />;
}
