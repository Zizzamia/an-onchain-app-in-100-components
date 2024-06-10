'use client';
import IdentityKit from '../components/IdentityKit';
import TokenKit from '../components/TokenKit';
import WalletKit from '../components/WalletKit';

export default function Page() {
  return (
    <div className="flex flex-col w-96 md:w-[600px]">
      <section className="flex flex-col w-full mb-6 pb-6 border-b border-sky-800">
        <aside className="flex mb-6">
          <h2 className="text-2xl">An onchain app in 100 components or less</h2>
        </aside>
        <main className="flex flex-col space-x-4">
          <p className="text-body text-white mb-4">
            This is a demo app that showcases the OnchainKit components in a
            simple interface. The app is built with Next.js and Tailwind CSS.
          </p>
          <p className="text-body text-white">Useful links:</p>
          <ul className="list-disc">
            <li>
              <a href="https://onchainkit.xyz/">OnchainKit docs</a>
            </li>
            <li>
              <a href="https://github.com/Zizzamia/an-onchain-app-in-100-components">
                GitHub repo
              </a>
            </li>
            <li>
              <a href="https://portal.cdp.coinbase.com/products/node">
                Get API KEY
              </a>
            </li>
            <li>
              <a href="https://x.com/onchainkit">Stay in touch on X</a>
            </li>
          </ul>
        </main>
      </section>
      <section className="flex flex-col w-full mb-6 pb-6 border-b border-sky-800">
        <aside className="flex mb-6">
          <h2 className="text-xl">Identity Kit</h2>
        </aside>
        <IdentityKit />
      </section>
      <section className="flex flex-col w-full mb-6 pb-6 border-b border-sky-800">
        <aside className="flex mb-6">
          <h2 className="text-xl">Token Kit</h2>
        </aside>
        <TokenKit />
      </section>
      <section className="flex flex-col w-full mb-6 pb-6 border-b border-sky-800">
        <aside className="flex mb-6">
          <h2 className="text-xl">Wallet Kit</h2>
        </aside>
        <WalletKit />
      </section>
    </div>
  );
}
