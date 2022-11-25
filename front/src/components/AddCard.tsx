type Props = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  name: string
  link: string
}

export default function AddCard({
  handleSubmit,
  handleChange,
  name,
  link,
}: Props) {
  return (
    <div className=' bg-white border-2 border-black p-5 rounded-md w-fit'>
      <h2 className='text-2xl mb-2'>Añadir link de portal de trabajo</h2>
      <form className='flex gap-3 flex-col items-start' onSubmit={handleSubmit}>
        <div>
          <label className='block mb-2'>Nombre</label>
          <input
            className='border-primary px-2 py-1 border-2 rounded-md outline-none'
            name='name'
            value={name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className='block mb-2'>Link</label>
          <input
            className='border-primary px-2 py-1 border-2 rounded-md outline-none'
            name='link'
            value={link}
            onChange={handleChange}
          />
        </div>
        <button className='bg-primary py-2 px-4 text-white rounded-md'>
          Añadir
        </button>
      </form>
    </div>
  )
}
