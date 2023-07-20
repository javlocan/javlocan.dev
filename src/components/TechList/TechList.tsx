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

  return (
    <div className={styles.table}>
      <h2>{data?.header}</h2>
      {data?.description ? (
        <span style={{ fontStyle: "italic" }}>{data?.description}</span>
      ) : null}
      <div className={styles.list}>
        {data?.content.map((item) => (
          <ul key={item.title}>
            <h4 key={item.title}>{item.title}</h4>
            {item.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};
