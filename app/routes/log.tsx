import type { Route } from "./+types/log";

import { Log20220108 } from "./logs/2022-01-08";
import { Log20220109 } from "./logs/2022-01-09";
import { Log20220110 } from "./logs/2022-01-10";
import { Log20220111 } from "./logs/2022-01-11";
import { Log20220112 } from "./logs/2022-01-12";
import { Log20220113 } from "./logs/2022-01-13";
import { Log20220114 } from "./logs/2022-01-14";
import { Log20220115 } from "./logs/2022-01-15";
import { Log20220120 } from "./logs/2022-01-20";
import { Log20220125 } from "./logs/2022-01-25";
import { Log20230116 } from "./logs/2023-01-16";

const logs: Record<string, React.ComponentType> = {
  "2022-01-08": Log20220108,
  "2022-01-09": Log20220109,
  "2022-01-10": Log20220110,
  "2022-01-11": Log20220111,
  "2022-01-12": Log20220112,
  "2022-01-13": Log20220113,
  "2022-01-14": Log20220114,
  "2022-01-15": Log20220115,
  "2022-01-20": Log20220120,
  "2022-01-25": Log20220125,
  "2023-01-16": Log20230116,
};

export function loader({ params }: Route.LoaderArgs) {
  const date = params.date;
  if (!date || !logs[date]) {
    throw new Response("Not Found", { status: 404 });
  }
  return { date };
}

export function meta({ params }: Route.MetaArgs) {
  return [
    { title: `Daily Log: ${params.date} | castner.io` },
    { name: "description", content: `Daily log entry for ${params.date}` },
  ];
}

export default function Log({ loaderData }: Route.ComponentProps) {
  const LogComponent = logs[loaderData.date];
  return <LogComponent />;
}
