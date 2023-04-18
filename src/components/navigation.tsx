export const Navigation = () => {
  return (
    <div className="sticky flex justify-between py-2">
      <h1 className="caligraphy-text text-4xl font-extrabold tracking-tight text-[#ffecd1]">
        Batnaidan
      </h1>
      <div className="text-lg text-[#ffecd1]">
        <ul className="flex">
          <li className="navigation-item underline-hover">Home</li>
          <li className="navigation-item underline-hover">Work</li>
          <li className="navigation-item underline-hover">Blog</li>
          <li className="navigation-item underline-hover">Contact</li>
        </ul>
      </div>
    </div>
  );
};
