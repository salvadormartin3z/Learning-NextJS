import { SimpleWidget } from "@/components";

export default function MainPage() {
  return (
    <div className="text-balc p-2">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span className="text-xl">Información general</span>
      <div className="flex flex-wrap p-2 items-center justify-center">
        <SimpleWidget/>
        <SimpleWidget/>
        <SimpleWidget/>
        <SimpleWidget/>
        <SimpleWidget/>
        <SimpleWidget/>
        <SimpleWidget/>
      </div>
    </div>
  );
}