import { Projectsite } from "@/config/site";
import TheCard from "../ui/card";

export default function Mprojects() {

  return (
    <>
      <div>
        {Projectsite.map((item, index) => (
          <TheCard
            key={index}
            title={item.title}
            description={item.description}
            img={item.img}
            imgalt={item.title}
            size={{ width: 120, height: 120 }}
            icons={item.icons}
            stylecard="border border-gray-200 rounded-lg shadow"
            colorcode="#f3f4f6"
          />
        ))}
      </div>
    </>
  );
}
