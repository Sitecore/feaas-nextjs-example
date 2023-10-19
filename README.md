This is a repo that demonstrates an example of BYOC components using best practices.

## Getting Started

1. To run the NextJS server just execute the following command:

   ```bash
   npm run dev
   ```

2. Then visit demo page in the browser:

   [http://localhost:3000](http://localhost:3000)

## Enabling BYOC in your existing app

### XMC JSS app:

If your app uses JSS (for xmc next.js), BYOC will be already pre-configured upon the app generation. Simply add the components you want in `byoc/index.client.ts` and `index.server.tsx`. Be mindful that at the time being, **jss does not support async components**

### Regular Next.js app

1.  Copy `byoc` folder from this repo to your `app` directory
2.  In `layout.tsx` add to the top of the file:

    ```typescript:
            import * as FEAAS from "@sitecore-feaas/clientside/react";
            import "./byoc";
    ```

    And inside the layout tree itself:

    ```typescript:
    <FEAAS.ExternalComponentBundle />
    ```

3.  Render the component directly or as a part of FEAAS component as in `demo/page.tsx`

## Integrating Rendering Host for Sitecore Components

1. Copy `preview-component` folder into your `app`
2. In Sitecore Components app, go to Settings/Rendering Host and put in the url to that page, e.g. `https://my-website.com/preview-component`
3. Now in the component Builder you will be able to use BYOC components and use Preview feature to see what they look like inside Sitecore components.
