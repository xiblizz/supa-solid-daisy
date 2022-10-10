# SolidStart Template with DaisyUI + Motion + Solid-Icons 

Everything you need to build a Solid project, powered by [`solid-start`](https://solid-start-docs.deno.dev/getting-started/what-is-solidstart)

## Modules

### DaisyUI (https://daisyui.com/docs/)

### Framer Motion (https://motion.dev/solid/quick-start)

### Solid-Icons (https://solid-icons.vercel.app/)

### Supabase (https://github.com/wobsoriano/solid-supabase) > still needs to be added.

## Developing

Once you've created a project and installed dependencies with `pnpm install`, and start a development server:

```bash
npm run dev
```

## Building

Solid apps are built with _adapters_, which optimise your project for deployment to different environments.

By default, `npm run build` will generate a Node app that you can run with `npm start`.

To use a different adapter, add it to the `devDependencies` in `package.json` and specify in your `vite.config.js`.