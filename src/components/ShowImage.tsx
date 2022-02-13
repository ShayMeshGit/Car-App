interface IProps {
  imageUrl?: string;
  altImage: string;
  dogData: {
    name: string;
    age: number | string;
  };
}

export const ShowImage = (props: IProps) => {
  return (
    <div>
      <img
        style={{ width: "200px" }}
        src={props.imageUrl}
        alt={props.altImage}
      />
      <h3>
        Hello, my name is {props.dogData.name}, I am {props.dogData.age} years
        old
      </h3>
    </div>
  );
};
