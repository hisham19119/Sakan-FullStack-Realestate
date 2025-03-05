interface headerProps {
  label: string;
}

export function Header({ label }: headerProps) {
  return (
    <div className="flex flex-col  justify-center items-center gap-y-4">
      <h1 className=" text-3xl  text-[var(--green)]  font-expo-bold">سـكــن</h1>
      <p className="text-sm text-[var(--darkgreen)]">{label}</p>
    </div>
  );
}
