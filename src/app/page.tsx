import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 haikei">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <label htmlFor="name">リクエスト箱</label>
      <textarea id="name" name="text" >
        お気軽に！
      </textarea>
      <input type="text" name="text" value="みえないもじ"/>
      <div><h1 className='test unagi'>✞ノワール・イストワール✞</h1>
      <br></br>
      <br></br>
      <p className='test'>ここは思い出の世界</p> 
      <p className='test'>貴方は810人目の迷い人</p>
      <p className='test'>キリ番を踏んだら必ず掲示板にコメント！</p>
      <br></br>
      <br></br></div>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative drop-shadow-[0_0_0.3rem_#9245ff20] "
          src="/boushi.png"
          alt="sanbikinoboushi"
          width={500}
          height={100}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%BC%E3%83%AB%E3%83%BB%E3%82%A8%E3%83%9F%E3%83%83%E3%83%92%E3%83%BB%E3%83%84%E3%83%BC%E3%83%BB%E3%83%A9%E3%82%A4%E3%83%8B%E3%83%B3%E3%82%B2%E3%83%B3"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            <span className="inline-block transition-transform group-hover:translate-y-1 motion-reduce:transform-none">
            ❄プロフィール❄{' '}
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-100`}>
            管理人のヒミツ♡
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 style={{ fontFamily: 'fantasy'}} className={`mb-3 text-2xl font-semibold`}>
            <span className="inline-block transition-transform group-hover:translate-y-1 motion-reduce:transform-none">
            histoire{' '}
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-100`}>
            短編たくさん 中編5本&nbsp;長編3本連載中　うち2本完結！
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 className={`mb-3 text-2xl font-semibold`}>
            <span className="inline-block transition-transform group-hover:translate-y-1 motion-reduce:transform-none">
            ブログ{' '}
            </span>
          </h3>
          <p className={`m-0 max-w-[30ch] text-sm opacity-100`}>
            徒然なるままに。
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            <span className="inline-block transition-transform group-hover:translate-y-10 motion-reduce:transform-none">
            イラスト置き場{' '}
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-10`}>
            パスワードは114514♡
          </p>
        </a>
      </div>
      <style>{`.test{color: red;
                  font-family: serif;
                  text-align: center;
                  }
                .unagi{display: inline-block;
                  background: linear-gradient(90deg, #4158D0, #C850C0 30%, #FFCC70);
                  background: -webkit-linear-gradient(0deg, #4158D0, #C850C0 30%, #FFCC70);
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                  font-size:  40px; 
                  }
                .kuromoji{color: black;}
                .haikei{background-image : url(/apng_hotaru.png);
                        }`}</style>
    </main>
  )
}
