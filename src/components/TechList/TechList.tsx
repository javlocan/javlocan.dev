import { useEffect, useState } from "react";
import styles from "./TechList.module.css";

interface ITechList {
  header: string;
  description?: string;
  content: Content[];
}

interface Content {
  title: string;
  items: string[];
}

export const TechList = (props: Record<string, string>): JSX.Element => {
  const [data, setData] = useState<ITechList>();
  useEffect(() => {
    fetch(`/data/${props.jsonName}.json`)
      .then((r) => r.json())
      .then(setData)
      .catch(console.error);
  }, []);

  console.log(data);

  return (
    <div className={styles.techTable}>
      <h2>{data?.header}</h2>
      {data?.description ? (
        <p style={{ fontStyle: "italic" }}>{data?.description}</p>
      ) : null}

      {data?.content.map((item) => (
        <div key={item.title}>
          <h4 key={item.title}>{item.title}</h4>

          <ul>
            {item.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
