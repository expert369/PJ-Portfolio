import { TypeAnimation } from "react-type-animation";

export default function TypingText() {
  return (
    <TypeAnimation
      sequence={[
        "Frappe Framework",
        1500,
        "ERPNext",
        1000,
        "Python",
        1000,
        "Javascript",
        1500,
        "SQL | MariaDB",
        1500,
        "Redis",
        1000,
        "WebSocket",
        1000,
        "Linux",
        1000,
        "Docker",
        1000,
        "Tailwind",
        1000,
        "React",
        1000,
        "VueJs",
        1000,
        "NextJs",
        1000,
        "Problem Solver",
        1500,
        "Continuous Learner",
        1500,
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