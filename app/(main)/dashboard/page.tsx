import { auth } from "@clerk/nextjs"

export default async function Dashboard() {
  const { userId } = auth()
  
  return (
    <div>
      <h1>Dashboard</h1>
      <p>User ID: {userId}</p>
    </div>
  )
}
