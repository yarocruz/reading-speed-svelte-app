import { publish } from 'gh-pages';

publish(
    'build', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/yarocruz/reading-speed-svelte-app.git', // Update to point to your repository
        user: {
            name: 'Jay Cruz', // update to use your name
            email: 'yarocruz@gmail.com' // Update to use your email
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);