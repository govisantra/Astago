type PageProps = {
  params: { id: string }
}

export default async function Page({ params }: PageProps) {
  // you can use params.id here
  return (
    <div>
      <h1>Page for ID: {params.id}</h1>
    </div>
  )
}
