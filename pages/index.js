import Container from '@/components/Container'

export default function Home() {
  return (
    <>
      <Container title="Jeffrey Deng">
        <div className="max-w-2xl text-neutral-900 sm:text-2xl text-lg tracking-wide sm:mt-7 mt-5 dark:text-neutral-200">
          Hi there.
        </div>
        <div className="max-w-2xl text-neutral-900 sm:text-2xl text-lg tracking-wide sm:mt-7 mt-5 dark:text-neutral-200">
        My name is Jeffrey, aka 邓策中 (dèng cè zhōng) or @bat_kryptonyte to some.
        </div>
        <div className="max-w-2xl text-neutral-900 sm:text-2xl text-lg tracking-wide sm:mt-7 mt-5 dark:text-neutral-200">
          I&apos;m a freshman specializing in Mathematics and Computer Science, with an intended minor in Journalism at the {' '}
          <a
            className="underline decoration-neutral-300 dark:decoration-neutral-700"
            href="https://illinois.edu/"
            rel="noreferrer"
            target="_blank"
          >
            University of Illinois.
          </a>
          
        </div>
        <div className="max-w-2xl text-neutral-900 sm:text-2xl text-lg tracking-wide sm:mt-7 mt-5 dark:text-neutral-200">
          I am currently working at {' '}
          <a
            className="underline decoration-neutral-300 dark:decoration-neutral-700"
            href="https://spurlock.illinois.edu/"
            rel="noreferrer"
            target="_blank"
          >
            Spurlock Museum
          </a> as a fullstack web developer. My personal inspo and interests span across design, media, fintech, and all things software development. 
          
        </div>
        <div className="max-w-2xl text-neutral-900 sm:text-2xl text-lg tracking-wide sm:mt-7 mt-5 dark:text-neutral-200">
           Want to get in touch? Feel free to shoot me an {''}
           <a
            className="underline decoration-neutral-300 dark:decoration-neutral-700"
            href="https://spurlock.illinois.edu/"
            rel="noreferrer"
            target="_blank"
          >
            email
          </a> and find my other online presences below!
          
        </div>


        <div className="flex gap-5 pt-5 font-medium text-neutral-600 text-md dark:text-neutral-400 tracking-wide">
          <a
            href="https://github.com/bat-kryptonyte"
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com/batkryptonyte"
            rel="noreferrer"
            target="_blank"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com/in/"
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            href="https://instagram.com/bat-kryptonyte"
            rel="noreferrer"
            target="_blank"
          >
            Instagram
          </a>
        </div>
        
      </Container>
    </>
  )
}

