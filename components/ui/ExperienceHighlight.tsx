type ExperienceHighlightProps = {
    color: string;
    value: string;
}

export default function ExperienceHighlight({
    color,
    value,
  }: ExperienceHighlightProps) {
    return (
      <li className="flex items-center gap-3">
        <div className={`px-1 h-2 w-3 rounded-full bg-${color}-500`} />
        <div className="text-md">{value}</div>
      </li>
    );
  }