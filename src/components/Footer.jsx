import { h } from 'preact';

export const Footer = () => {
  return (
    <footer class="bg-gray-800 backdrop-blur-sm py-6 mt-auto">
      <div class="container mx-auto px-4">
        <div class="text-left text-sm text-white/80">
          <p class="mb-2">
            Content on this site is licensed under a{' '}
            <a 
              href="https://creativecommons.org/licenses/by-sa/4.0/" 
              class="text-[##40ADE3] hover:text-teal-300 underline"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Creative Commons Attribution-ShareAlike 4.0 International License
            </a>.
          </p>
          <p class="mb-2">
            Source code available under the{' '}
            <a 
              href="https://opensource.org/licenses/MIT" 
              class="text-[##40ADE3] hover:text-teal-300 underline"
              target="_blank" 
              rel="noopener noreferrer"
            >
              MIT license
            </a>.
          </p>
          <p>
            Developed and managed by{' '}
            <a 
              href="https://oknp.org" 
              class="text-[##40ADE3] hover:text-teal-300 underline"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Open Knowledge Nepal
            </a>.
          </p>
        </div>
      </div>
    </footer>
  );
};