
const Servicios = () => {
  return (
    <main className="my-24 mx-5 md:mx-24">
      <h2 className="font-merienda font-bold text-center text-3xl md:text-4xl text-primary">Servicios</h2>

      <div className="md:grid grid-cols-3 gap-40 mt-10">

        {[1, 2, 3].map(card => (
          <div className="hover:bg-primary text-primary hover:text-white text-center mb-10 py-5 rounded-lg shadow-xl md:shadow-2xl md:cursor-pointer transition-all md:hover:scale-110">
            <h3 className="font-merienda text-3xl mb-6 md:text-4xl">Pasteles</h3>
            <ul className="flex flex-col gap-3 font-rubik text-xl mb-7 md:text-2xl md:gap-6">
              <li>Pastel 1</li>
              <li>Pastel 2</li>
              <li>Pastel 3</li>
              <li>Pastel 4</li>
              <li>Pastel 5</li>
            </ul>
            <p className="font-bold font-merienda text-3xl md:text-5x">$100 - $400</p>
          </div>
        ))}

      </div>

    </main>
  )
}

export default Servicios