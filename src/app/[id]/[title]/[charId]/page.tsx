export default async function ({
  params,
}: {
  params: Promise<{ charId: string }>;
}) {
  const id = (await params).charId;
  console.log(id);

  return (
    <div>
      <div></div>
    </div>
  );
}
