import { Card } from "@/common/Card"
import { Icon } from "@/common/Icon"
import { InputText } from "@/common/InputText"

export type ICreateTask = {
  text?: string
}
export const CreateTask = ({
  text
}:ICreateTask) => {
  return (
    <Card>
      <InputText placeholder="create a new task" />
      <Icon name="add" />
    </Card>
  )
}