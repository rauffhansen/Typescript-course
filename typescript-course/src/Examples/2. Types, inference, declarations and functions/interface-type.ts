interface ButtonProps {
  label: string;
  onClick: () => void;
}

type ButtonPropsType = {
  label: string;
  onClick: () => void;
};

const myButton: ButtonPropsType = {
  label: "Submit",
  onClick: () => console.log("Button clicked!"),
};

//•	Use interface for objects and class structures when you expect inheritance or declaration merging.
//•	Use type for advanced type manipulation (unions, intersections, etc.) or when creating simple aliases.


console.log(myButton);