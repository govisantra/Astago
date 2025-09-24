export default async function Page({ params }: any) {
  return (
    <div>
      <h1>Page for ID: {params.id}</h1>
    </div>
  )
}
