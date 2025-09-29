import Image from "next/image"

export default function ImageTest() {
  return (
    <div className="p-4">
      <h2>Test Local Images</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3>Auschwitz-Birkenau</h3>
          <Image
            src="/assets/camps/Auschwitz-Birkenau.png"
            alt="Auschwitz-Birkenau"
            width={300}
            height={200}
            className="border rounded"
          />
        </div>
        <div>
          <h3>Treblinka</h3>
          <Image
            src="/assets/camps/Treblinka.png"
            alt="Treblinka"
            width={300}
            height={200}
            className="border rounded"
          />
        </div>
        <div>
          <h3>Bergen-Belsen</h3>
          <Image
            src="/assets/camps/Bergen-Belsen.jpg"
            alt="Bergen-Belsen"
            width={300}
            height={200}
            className="border rounded"
          />
        </div>
        <div>
          <h3>Dachau</h3>
          <Image
            src="/assets/camps/Dachau.jpg"
            alt="Dachau"
            width={300}
            height={200}
            className="border rounded"
          />
        </div>
      </div>
    </div>
  )
}