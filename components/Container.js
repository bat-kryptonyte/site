import Link from 'next/link'
import Head from 'next/head'
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from '@heroicons/react/outline'

export default function Container({ children, ...customMeta }) {
  const { resolvedTheme, setTheme } = useTheme()

  const meta = {
    title: 'Jeffrey Deng',
    ...customMeta,
  }

  return (
    <main className="max-w-6xl px-8 m-auto mb-32 antialiased">
      <Head>
        <title>{meta.title}</title>
      </Head>
      <div className="flex sm:py-16 py-10">
        <Link href="https://github.com/bat-kryptonyte">
          <a className="whitespace-nowrap text-neutral-500 tracking-wider">
            @BAT-KRYPTONYTE
          </a>
        </Link>
        <nav className="flex tracking-wide text-lg items-center justify-end w-full gap-10 text-neutral-800 dark:text-white">
          <button
            onClick={() =>
              setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
            }
          >
            {resolvedTheme === 'dark' ? (
              <SunIcon className="w-5 h-5" />
            ) : (
              <MoonIcon className="w-5 h-5" />
            )}
          </button>
        </nav>
      </div>
      <div className="max-w-4xl mx-auto">{children}</div>
    </main>
  )
}
