import { type FC } from "react"
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import Icon from '@mui/material/Icon'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'

import { Todo } from "../../requests/todos"

interface TodoListProps {
  todo: Todo
  onDelete: VoidFunction
  onCompleteToggle: VoidFunction
}

const TodoListItem: FC<TodoListProps> = ({ todo, onDelete, onCompleteToggle }) => (
  <ListItem
    disablePadding
    secondaryAction={
      <IconButton onClick={onDelete}>
        <Icon>clear</Icon>
      </IconButton>
    }
  >
    <ListItemButton onClick={onCompleteToggle}>
      <ListItemIcon>
        <Checkbox checked={todo.is_completed} />
      </ListItemIcon>
      <ListItemText primary={todo.title} secondary={todo.description} />
    </ListItemButton>
  </ListItem>
)

export default TodoListItem
