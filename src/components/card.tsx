import Image from "next/image";

export const Card = (title: string, image: string) => {
  return (
    <div className="sticky flex justify-between py-2">
      <div>{title}</div>
      <div>
        <Image src={image} alt="image" />
      </div>
    </div>
  );
};
