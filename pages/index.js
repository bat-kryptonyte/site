import Container from '@/components/Container'

export default function Home() {
  return (
    <>
      <Container title="Jeffrey Deng">
        <script defer data-domain="jeffreydeng.vercel.app" src="https://plausible.io/js/script.js"></script>

        <div className="max-w-2xl text-neutral-900 sm:text-4xl text-2xl tracking-wide sm:mt-7 mt-5 dark:text-neutral-200">
          Hi!
        </div>
        <div className="max-w-2xl text-neutral-900 sm:text-2xl text-lg tracking-wide sm:mt-7 mt-5 dark:text-neutral-200">
        I am Jeffrey, aka 邓策中(dèng cè zhōng) or @bat_kryptonyte to some. 
        </div>
        <div className="max-w-2xl text-neutral-900 sm:text-2xl text-lg tracking-wide sm:mt-7 mt-5 dark:text-neutral-200">
          I&apos;m an undergraduate student majoring in computer science with concentrations in artificial intelligence and theory of computation at the {' '}
          <a
            className="underline decoration-neutral-300 dark:decoration-neutral-700"
            href="https://gatech.edu/"
            rel="noreferrer"
            target="_blank"
          >
            Georgia Institute of Technology.
          </a>
          
        </div>
        <div className="max-w-2xl text-neutral-900 sm:text-2xl text-lg tracking-wide sm:mt-7 mt-5 dark:text-neutral-200">
         My personal inspo and interests span design, media, fintech, and all things software development. 
          
        </div>
        <div className="max-w-2xl text-neutral-900 sm:text-2xl text-lg tracking-wide sm:mt-7 mt-5 dark:text-neutral-200">
           Want to get in touch? Feel free to shoot me an {''}
           <a
            className="underline decoration-neutral-300 dark:decoration-neutral-700"
            href="mailto:jeffreydcz@gatech.edu"
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
            href="https://linkedin.com/in/bat-kryptonyte"
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            href="https://instagram.com/jeffreydcz"
            rel="noreferrer"
            target="_blank"
          >
            Instagram
          </a>
          <a
            href="https://www.zhihu.com/people/bat-kryptonyte"
            rel="noreferrer"
            target="_blank"
          >
            知乎
          </a>
        </div>
        
      </Container>
    </>
  )
}

