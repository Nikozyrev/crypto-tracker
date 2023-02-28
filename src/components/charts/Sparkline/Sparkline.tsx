import { FC, memo } from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { pickSparkLineColors } from "../../../helpers/chart";

interface ISparklineProps {
  data: number[],
}

export const Sparkline: FC<ISparklineProps> = memo(({data}) => {
  return (
    <Sparklines data={data}>
      <SparklinesLine color={pickSparkLineColors(data)} />
    </Sparklines>
  );
}, (prev, next) => prev.data.toString() === next.data.toString())