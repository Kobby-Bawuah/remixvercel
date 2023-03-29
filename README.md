# Welcome to Nx + Remix!

- [Remix Docs](https://remix.run/docs)
- [Nx Docs](https://nx.dev)

## Development

From your terminal:

```sh
npx nx dev web
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npx nx build web
```

Then run the app in production mode:

```sh
npx nx start web
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `packages/web/build/`
- `packages/web/public/build/`

### Using a Template

When you ran `npx create-remix@latest` there were a few choices for hosting. You can run that again to create a new project, then copy over your `app/` folder to the new project that's pre-configured for your target server.

```sh
cd ..
# create a new project, and pick a pre-configured host
npx create-remix@latest
cd my-new-remix-app
# remove the new project's app (not the old one!)
rm -rf app
# copy your app over
cp -R ../my-old-remix-app/app app
```

### To run app

npm run dev

npm run build

npm run start

commit test 1

funny

yass

yasss2

sentry-cli releases files "my-project-name@1.2" upload-sourcemaps ./public
npx remix build --sourcemap

sentry-cli releases set-commits "2a57b095fa2591c5fe9f1882255d5a68fd65c9f9" --commit "Kobby-Bawuah/remixvercel@2a57b095fa25" --log-level=debug

blah blah

fran test 2

another change

final test

last last stand
