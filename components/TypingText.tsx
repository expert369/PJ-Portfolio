import { TypeAnimation } from "react-type-animation";

export default function TypingText() {
  return (
    <TypeAnimation
      sequence={[
        "Problem Solver",
        2000,
        "Continuous Learner",
        2000,
        "Python",
        2000,
        "JavaScript",
        2000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      cursor={true}
      style={{
        fontSize: "12px",
        fontWeight: "italic",
        color: "#C9CDCF",
      }}
    />
  );
}