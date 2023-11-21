import SvelteKitAuth from '@auth/sveltekit';
import Google from '@auth/core/providers/google';

export const handle = SvelteKitAuth.SvelteKitAuth({
	providers: [Google({ clientId: '123', clientSecret: '123' })]
});

console.log('Hey');
