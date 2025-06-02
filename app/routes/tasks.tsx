import { TasksList } from '~/features/tasks/tasks-list'
import { turso } from '~/turso'

export async function loader() {
  turso.execute(
    "INSERT INTO users (email, password_hash, name) VALUES ('example@example.com', 'hashed_password_123', 'John Doe');"
  )
  return {}
}

export default function () {
  return <TasksList />
}
