import { Typography } from "@/common/Typography"

export type ITaskProps = {
  text: string
}
export default function Task({
 text
}:ITaskProps) {
  return (
    <>
      <Typography>{text}</Typography>
    </>
  )
}