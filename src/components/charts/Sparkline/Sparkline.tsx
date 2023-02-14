import { FC } from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { pickSparkLineColors } from "../../../helpers/chart";

interface ISparklineProps {
  data: number[],
}

export const Sparkline: FC<ISparklineProps> = ({data}) => {
  return (
    <Sparklines data={data}>
      <SparklinesLine color={pickSparkLineColors(data)} />
    </Sparklines>
  );
};
