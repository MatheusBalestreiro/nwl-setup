import { Plus, X } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog';

import logoImage from '../assets/logo.svg'
import { NewHabitForm } from './NewHabitForm';

export function Header() {
  return (
    <div className='w-full max-w-3xl mx-auto flex items-center justify-between'>
      <img src={logoImage} alt="Habits Logo" />

      <Dialog.Root>
        <div className='group'>
          <Dialog.Trigger
            type='button'
            className='border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 group-hover:border-violet-300 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-background'
          >
            <Plus size={22} className='text-violet-500 group-hover:text-violet-300 transition-colors' />
            Novo Hábito
          </Dialog.Trigger>
        </div>

        <Dialog.Portal>
          <Dialog.Overlay className='w-screen h-screen bg-black/80 fixed inset-0'   />
          <Dialog.Content className='absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <Dialog.Close className='absolute right-6 top-6 text-zinc-400 hover:text-zinc-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-zinc-900'>
              <X size={24} aria-label='Fechar' />
            </Dialog.Close>

            <Dialog.Title className='text-3xl leading-tight text-white font-extrabold'>
              Criar Hábito
            </Dialog.Title>

            <NewHabitForm />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>


    </div>
  )
}