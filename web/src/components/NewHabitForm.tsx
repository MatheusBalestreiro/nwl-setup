import { Check } from "phosphor-react";
import * as Checkbox from '@radix-ui/react-checkbox';
import { FormEvent, useState } from "react";
import { api } from "../lib/axios";

const availableWeekDays = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];


export function NewHabitForm() {
  const [title, setTitle] = useState('')
  const [weekDays, setWeekDays] = useState<number[]>([])

  const createNewHabit = async (event: FormEvent) => {
    event.preventDefault();

    if (!title || weekDays.length === 0) {
      return
    }

    await api.post('/habits', {
      title,
      weekDays,
    })

    setTitle('')
    setWeekDays([])

    alert('Hábito criado com sucesso')
  }

  const handleToggleWeekDay = (weekDayIndex: number) => {
    if (weekDays.includes(weekDayIndex)) {
      setWeekDays(prevState => prevState.filter(weekDay => weekDay !== weekDayIndex))
    } else {
      setWeekDays(prevState => [...prevState, weekDayIndex])
    }
  }

  return (
    <form onSubmit={createNewHabit} className="w-full flex flex-col mt-6 ">
      <label htmlFor="title" className="font-semibold leading-tight ">
        Qual seu comprometimento?
      </label>

      <input
        autoFocus
        type='text'
        id='title'
        onChange={event => setTitle(event.target.value)}
        value={title}
        placeholder='Ex: Beber 2L de água, Ir à academia...'
        className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-zinc-900"
      />

      <label htmlFor="" className="font-semibold leading-tight mt-4">
        Qual a recorrência?
      </label>

      <div className='mt-3 flex flex-col gap-2'>
        {
          availableWeekDays.map((availableWeekDay, index) => (
            <Checkbox.Root
              key={`${availableWeekDay}-${index}`}
              checked={weekDays.includes(index)}
              onCheckedChange={() => handleToggleWeekDay(index)}
              className='flex items-center gap-3 group focus:outline-none'
            >
              <div className='h-8 w-8 flex items-center justify-center rounded-lg  bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500 transition-colors group-focus:ring-2 group-focus:ring-violet-600 group-focus:ring-offset-2 group-focus:ring-offset-zinc-900'>
                <Checkbox.Indicator>
                  <Check className='text-white' size={20} />
                </Checkbox.Indicator>
              </div>
              <span className='text-white leading-tight'>
                {availableWeekDay}
              </span>
            </Checkbox.Root>

          ))
        }
      </div>
      <button type="submit" className="mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold bg-green-600 hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-zinc-900">
        <Check size={20} weight='bold' />
        Confirmar
      </button>
    </form>
  )
}